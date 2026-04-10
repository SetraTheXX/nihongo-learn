import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { SM2Item, createInitialItem, updateSM2 } from '@/lib/sm2';
import { hiraganaData } from '@/data/hiragana';
import { katakanaData } from '@/data/katakana';
import { allGrammarData } from '@/data/course';
import {
  pushSingleCard,
  pushDailyStats,
  pushStreak,
  enqueueWrite,
  fullSync,
  setupConnectivityListeners,
} from '@/lib/supabase/sync';

interface UserStats {
  xp: number;
  streak: number;
  lastStudyDate: string | null;
  // Gerçek doğruluk takibi için
  totalAnswered: number;
  totalCorrect: number;
}

interface LearningState {
  cardsData: Record<string, SM2Item>;
  stats: UserStats;

  currentSessionQueue: string[];
  currentIndex: number;

  // Auth bilgisi (Supabase user ID)
  userId: string | null;
  isSyncing: boolean;

  // Kurs ilerleme
  completedLessons: string[];

  // Aksiyonlar
  initializeSession: (alphabet?: "hiragana" | "katakana" | "grammar" | "all") => void;
  reviewCard: (cardId: string, quality: number) => void;
  recordQuizAnswer: (isCorrect: boolean) => void;
  completeLesson: (lessonId: string, xpReward: number) => void;

  // Cloud sync
  setUserId: (userId: string | null) => void;
  syncWithCloud: () => Promise<void>;
  clearLocalData: () => void;
}

export const useLearningStore = create<LearningState>()(
  persist(
    (set, get) => ({
      cardsData: {},
      stats: {
        xp: 0,
        streak: 1,
        lastStudyDate: null,
        totalAnswered: 0,
        totalCorrect: 0,
      },
      currentSessionQueue: [],
      currentIndex: 0,

      userId: null,
      completedLessons: [],
      isSyncing: false,

      // ── Kullanıcı ID yönetimi ────────────────────────────

      setUserId: (userId: string | null) => {
        set({ userId });
      },

      // ── Cloud Senkronizasyon ──────────────────────────────

      syncWithCloud: async () => {
        const { userId, cardsData, stats } = get();
        if (!userId) return;

        set({ isSyncing: true });

        try {
          const result = await fullSync(userId, cardsData, stats);
          set({
            cardsData: result.cards,
            stats: result.stats,
            isSyncing: false,
          });
        } catch {
          set({ isSyncing: false });
        }
      },

      // ── Local Veriyi Temizle (Çıkış yapınca) ──────────────

      clearLocalData: () => {
        set({
          cardsData: {},
          stats: {
            xp: 0,
            streak: 1,
            lastStudyDate: null,
            totalAnswered: 0,
            totalCorrect: 0,
          },
          currentSessionQueue: [],
          currentIndex: 0,
          userId: null,
          completedLessons: [],
        });
      },

      // ── Ders Tamamlama ──────────────────────────────────────

      completeLesson: (lessonId: string, xpReward: number) => {
        const { completedLessons, stats, userId } = get();

        // Zaten tamamlanmışsa tekrar ekleme
        if (completedLessons.includes(lessonId)) return;

        const newStats = { ...stats };
        newStats.xp += xpReward;

        // Streak güncelle
        const todayStr = new Date().toISOString().split('T')[0];
        if (newStats.lastStudyDate !== todayStr) {
          newStats.streak = (newStats.streak || 0) + 1;
          newStats.lastStudyDate = todayStr;
        }

        set({
          completedLessons: [...completedLessons, lessonId],
          stats: newStats,
        });

        // Arka planda Supabase'e yaz
        if (userId && navigator.onLine) {
          pushDailyStats(userId, newStats).catch(() => {});
          pushStreak(userId, newStats.streak).catch(() => {});
        }
      },

      // ── Oturum Başlatma ──────────────────────────────────

      // ── Oturum Başlatma ──────────────────────────────────

      initializeSession: (alphabet = "hiragana") => {
        const { cardsData } = get();
        const now = new Date();

        let dueCards: string[] = [];
        let newCards: string[] = [];

        let sourceData: any[] = [];
        if (alphabet === "hiragana") {
          sourceData = hiraganaData;
        } else if (alphabet === "katakana") {
          sourceData = katakanaData;
        } else if (alphabet === "grammar") {
          sourceData = allGrammarData as any[];
        } else {
          sourceData = [...hiraganaData, ...katakanaData]; // All için sadece alfabeye ait olanlar karışık gelir, dilerse ayrıca hepsini birleştirebilir.
        }

        // 1. Vadesi gelen kartlar
        for (const [id, data] of Object.entries(cardsData)) {
          const isHiragana = id.startsWith('h_');
          const isKatakana = id.startsWith('k_');
          const isGrammar = id.startsWith('gr-');

          if (
            alphabet === "all" ||
            (alphabet === "hiragana" && isHiragana) ||
            (alphabet === "katakana" && isKatakana) ||
            (alphabet === "grammar" && isGrammar)
          ) {
            if (new Date(data.nextReviewDate) <= now) {
              dueCards.push(id);
            }
          }
        }

        // 2. Hiç çalışılmamış yeni kartlar
        for (const card of sourceData) {
          if (!cardsData[card.id]) {
            newCards.push(card.id);
          }
        }

        let queue = [...dueCards, ...newCards];

        // Tüm kartlar tamamlandıysa hepsini tekrar sıraya koy
        if (queue.length === 0) {
          for (const card of hiraganaData) {
            queue.push(card.id);
          }
        }

        set({ currentSessionQueue: queue, currentIndex: 0 });
      },

      // ── Kart İncelemesi ──────────────────────────────────

      reviewCard: (cardId: string, quality: number) => {
        const { cardsData, stats, currentIndex, userId } = get();

        let itemData = cardsData[cardId] || createInitialItem();
        itemData = updateSM2(itemData, quality);

        const newStats = { ...stats };

        // XP: Kolay=10, İyi=5, Tekrarla=2
        newStats.xp += quality === 5 ? 10 : quality === 4 ? 5 : 2;

        // Doğruluk istatistikleri (quality >= 4 → doğru kabul et)
        newStats.totalAnswered = (newStats.totalAnswered || 0) + 1;
        if (quality >= 4) {
          newStats.totalCorrect = (newStats.totalCorrect || 0) + 1;
        }

        // Streak: Bugün daha önce çalışılmadıysa artır
        const todayStr = new Date().toISOString().split('T')[0];
        if (newStats.lastStudyDate !== todayStr) {
          newStats.streak = (newStats.streak || 0) + 1;
          newStats.lastStudyDate = todayStr;
        }

        // Optimistic UI: Hemen state güncelle
        set({
          cardsData: { ...cardsData, [cardId]: itemData },
          stats: newStats,
          currentIndex: currentIndex + 1,
        });

        // Arka planda Supabase'e yaz (eğer giriş yapılmışsa)
        if (userId) {
          if (navigator.onLine) {
            pushSingleCard(userId, cardId, itemData, quality).catch(() => {
              // Yazılamadıysa kuyruğa ekle
              enqueueWrite({ userId, cardId, item: itemData, quality, timestamp: Date.now() });
            });
            // Stats & streak de arka planda güncelle
            pushDailyStats(userId, newStats).catch(() => {});
            pushStreak(userId, newStats.streak).catch(() => {});
          } else {
            // Offline — kuyruğa ekle
            enqueueWrite({ userId, cardId, item: itemData, quality, timestamp: Date.now() });
          }
        }
      },

      // ── Quiz Cevabı ──────────────────────────────────────

      recordQuizAnswer: (isCorrect: boolean) => {
        const { stats, userId } = get();
        const newStats = { ...stats };

        // XP: Doğru=8, Yanlış=1 (teşvik için biraz verelim)
        newStats.xp += isCorrect ? 8 : 1;
        newStats.totalAnswered = (newStats.totalAnswered || 0) + 1;
        if (isCorrect) {
          newStats.totalCorrect = (newStats.totalCorrect || 0) + 1;
        }

        // Streak güncelle
        const todayStr = new Date().toISOString().split('T')[0];
        if (newStats.lastStudyDate !== todayStr) {
          newStats.streak = (newStats.streak || 0) + 1;
          newStats.lastStudyDate = todayStr;
        }

        set({ stats: newStats });

        // Arka planda Supabase'e yaz
        if (userId && navigator.onLine) {
          pushDailyStats(userId, newStats).catch(() => {});
          pushStreak(userId, newStats.streak).catch(() => {});
        }
      },
    }),
    {
      name: 'nihongo-learning-storage',
    }
  )
);
