import { createClient } from "@/lib/supabase/client";
import type { SM2Item } from "@/lib/sm2";

/**
 * Supabase Data Sync Modülü
 * localStorage'daki SM-2 verisini Supabase'e senkronize eder.
 *
 * Strateji:
 * - Giriş yapan kullanıcı: Supabase'den oku, localStorage ile birleştir (en güncel kazanır)
 * - Giriş yapmayan: Sadece localStorage kullan (mevcut davranış)
 * - Çakışma çözümü: last_reviewed_at karşılaştırması — en yeni tarihli kayıt kazanır
 */

// ── Kart İlerlemesi ──────────────────────────────────────────────

interface CardProgressRow {
  card_id: string;
  ease_factor: number;
  interval: number;
  repetitions: number;
  next_review: string;
  last_answer: "again" | "good" | "easy";
  last_reviewed_at: string;
}

/**
 * Supabase'den kullanıcının tüm kart ilerlemesini çek
 */
export async function fetchCloudProgress(userId: string): Promise<Record<string, SM2Item>> {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("card_progress")
    .select("card_id, ease_factor, interval, repetitions, next_review, last_reviewed_at")
    .eq("user_id", userId) as any;

  if (error || !data) return {};

  const result: Record<string, SM2Item> = {};
  for (const row of data) {
    result[row.card_id] = {
      easeFactor: row.ease_factor,
      interval: row.interval,
      repetitions: row.repetitions,
      nextReviewDate: row.next_review,
    };
  }
  return result;
}

/**
 * localStorage ve Supabase verisini birleştir.
 * Çakışma çözümü: Her kart için en son güncellenen kayıt kazanır.
 */
export function mergeCardData(
  localData: Record<string, SM2Item>,
  cloudData: Record<string, SM2Item>
): Record<string, SM2Item> {
  const merged = { ...cloudData };

  for (const [cardId, localItem] of Object.entries(localData)) {
    const cloudItem = cloudData[cardId];

    if (!cloudItem) {
      // Bulutta yok → local'i al
      merged[cardId] = localItem;
    } else {
      // İkisi de var → en güncel tarihi karşılaştır
      const localDate = new Date(localItem.nextReviewDate).getTime();
      const cloudDate = new Date(cloudItem.nextReviewDate).getTime();

      if (localDate > cloudDate) {
        merged[cardId] = localItem;
      }
      // Aksi halde cloudItem zaten merged'de
    }
  }

  return merged;
}

/**
 * Birleştirilmiş veriyi Supabase'e yaz (upsert)
 */
export async function pushCardsToCloud(
  userId: string,
  cardsData: Record<string, SM2Item>
): Promise<boolean> {
  const supabase = createClient();

  const rows = Object.entries(cardsData).map(([cardId, item]) => ({
    user_id: userId,
    card_id: cardId,
    card_type: "hiragana" as const,
    ease_factor: item.easeFactor,
    interval: item.interval,
    repetitions: item.repetitions,
    next_review: item.nextReviewDate,
    last_answer: qualityToAnswer(item),
    last_reviewed_at: new Date().toISOString(),
  }));

  if (rows.length === 0) return true;

  // Batch upsert — card_id + user_id unique
  const { error } = await supabase
    .from("card_progress")
    .upsert(rows as any, { onConflict: "user_id,card_id" });

  return !error;
}

/**
 * Tek bir kartı Supabase'e yaz (optimistic update sonrası)
 */
export async function pushSingleCard(
  userId: string,
  cardId: string,
  item: SM2Item,
  quality: number
): Promise<void> {
  const supabase = createClient();

  await supabase
    .from("card_progress")
    .upsert({
      user_id: userId,
      card_id: cardId,
      card_type: "hiragana",
      ease_factor: item.easeFactor,
      interval: item.interval,
      repetitions: item.repetitions,
      next_review: item.nextReviewDate,
      last_answer: quality >= 4 ? "easy" : quality >= 3 ? "good" : "again",
      last_reviewed_at: new Date().toISOString(),
    } as any, { onConflict: "user_id,card_id" });
}

// ── İstatistikler ──────────────────────────────────────────────

interface UserStats {
  xp: number;
  streak: number;
  lastStudyDate: string | null;
  totalAnswered: number;
  totalCorrect: number;
}

/**
 * Günlük istatistikleri Supabase'e yaz
 */
export async function pushDailyStats(
  userId: string,
  stats: UserStats
): Promise<void> {
  const supabase = createClient();
  const today = new Date().toISOString().split("T")[0];

  await (supabase.rpc as any)("upsert_daily_stats", {
    p_user_id: userId,
    p_date: today,
    p_xp: stats.xp,
    p_cards: stats.totalAnswered,
    p_correct: stats.totalCorrect,
    p_total: stats.totalAnswered,
    p_seconds: 0,
  });
}

/**
 * Streak bilgisini Supabase'e yaz
 */
export async function pushStreak(
  userId: string,
  streak: number
): Promise<void> {
  const supabase = createClient();

  await (supabase.rpc as any)("update_streak", {
    p_user_id: userId,
    p_current: streak,
    p_longest: streak,
  });
}

/**
 * Buluttaki toplam XP'yi hesapla (daily_stats'dan)
 */
export async function fetchCloudXP(userId: string): Promise<number> {
  const supabase = createClient();

  const { data } = await supabase
    .from("daily_stats")
    .select("xp_earned")
    .eq("user_id", userId) as any;

  if (!data) return 0;
  return (data as any[]).reduce((sum: number, row: any) => sum + (row.xp_earned || 0), 0);
}

/**
 * Buluttaki streak bilgisini al
 */
export async function fetchCloudStreak(userId: string): Promise<{ current: number; longest: number }> {
  const supabase = createClient();

  const { data } = await supabase
    .from("streaks")
    .select("current_streak, longest_streak")
    .eq("user_id", userId)
    .single() as any;

  return {
    current: data?.current_streak || 0,
    longest: data?.longest_streak || 0,
  };
}

// ── Tam Senkronizasyon ──────────────────────────────────────────

/**
 * Kullanıcı giriş yaptığında çağrılır:
 * 1. Buluttaki veriyi çek
 * 2. localStorage ile birleştir
 * 3. Birleştirilmiş veriyi Supabase'e yaz
 * 4. Birleştirilmiş veriyi döndür (store güncellenecek)
 */
export async function fullSync(
  userId: string,
  localCards: Record<string, SM2Item>,
  localStats: UserStats
): Promise<{ cards: Record<string, SM2Item>; stats: UserStats }> {
  try {
    // 1. Buluttan çek
    const cloudCards = await fetchCloudProgress(userId);
    const cloudStreak = await fetchCloudStreak(userId);

    // 2. Birleştir
    const mergedCards = mergeCardData(localCards, cloudCards);

    // 3. Buluta yaz
    await pushCardsToCloud(userId, mergedCards);
    await pushDailyStats(userId, localStats);
    await pushStreak(userId, Math.max(localStats.streak, cloudStreak.current));

    // 4. Birleştirilmiş veriyi döndür
    return {
      cards: mergedCards,
      stats: {
        ...localStats,
        streak: Math.max(localStats.streak, cloudStreak.current),
      },
    };
  } catch (err) {
    console.error("[Sync] Senkronizasyon hatası:", err);
    // Hata durumunda local veriye geri dön
    return { cards: localCards, stats: localStats };
  }
}

// ── Yardımcılar ─────────────────────────────────────────────────

function qualityToAnswer(item: SM2Item): "again" | "good" | "easy" {
  if (item.easeFactor >= 2.5) return "easy";
  if (item.easeFactor >= 1.8) return "good";
  return "again";
}

// ── Retry Queue (Offline Desteği) ───────────────────────────────

interface QueuedWrite {
  userId: string;
  cardId: string;
  item: SM2Item;
  quality: number;
  timestamp: number;
}

const QUEUE_KEY = "nihongo-sync-queue";

/**
 * Offline iken yazımları kuyruğa ekle
 */
export function enqueueWrite(write: QueuedWrite): void {
  try {
    const queue = getQueue();
    queue.push(write);
    localStorage.setItem(QUEUE_KEY, JSON.stringify(queue));
  } catch {
    // localStorage dolu vs. — sessizce atla
  }
}

/**
 * Kuyruktan bekleyen yazımları al
 */
function getQueue(): QueuedWrite[] {
  try {
    const raw = localStorage.getItem(QUEUE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

/**
 * İnternet geldiğinde kuyruktaki yazımları gönder
 */
export async function flushQueue(): Promise<void> {
  const queue = getQueue();
  if (queue.length === 0) return;

  const failed: QueuedWrite[] = [];

  for (const write of queue) {
    try {
      await pushSingleCard(write.userId, write.cardId, write.item, write.quality);
    } catch {
      failed.push(write);
    }
  }

  localStorage.setItem(QUEUE_KEY, JSON.stringify(failed));
}

/**
 * Online/offline event listener'ları kur
 */
export function setupConnectivityListeners(): () => void {
  const handler = () => {
    if (navigator.onLine) {
      flushQueue();
    }
  };

  window.addEventListener("online", handler);

  // Sayfa yüklenince de kontrol et
  if (navigator.onLine) {
    flushQueue();
  }

  return () => window.removeEventListener("online", handler);
}
