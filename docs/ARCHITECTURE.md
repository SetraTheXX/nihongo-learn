# Mimari Genel Bakış — Nihongo Learn

## Tech Stack

```
Next.js 14 (App Router)
  ├── TypeScript 5
  ├── Tailwind CSS 3 (Material Design 3 token sistemi)
  ├── Framer Motion 12 (animasyonlar)
  └── Zustand 5 (state management)

Supabase
  ├── Auth (Google, GitHub, Email/Password)
  ├── PostgreSQL (profiles, card_progress tabloları)
  └── RLS (Row Level Security — her kullanıcı sadece kendi verisini okur/yazar)
```

## Klasör Yapısı ve Sorumluluklar

```
app/                    # Next.js App Router — her klasör bir URL segmenti
│
├── auth/               # /auth/login, /auth/register, /auth/callback
├── drawing/            # /drawing — Canvas çizim tahtası
├── exam/               # /exam — N5 sınav simülatörü
├── leaderboard/        # /leaderboard — XP sıralaması + rozetler
├── learn/              # /learn, /learn/course, /learn/lesson/[id], /learn/practice
├── profile/            # /profile — kullanıcı profili, streak, görevler
├── quiz/               # /quiz — interaktif quiz
├── reading/            # /reading — mini hikayeler + furigana
└── review/             # /review — SM-2 aralıklı tekrar seansı

components/             # Sayfalarda kullanılan yeniden kullanılabilir bileşenler
├── BottomNavBar.tsx    # Mobil alt navigasyon (4 sekme)
├── TopAppBar.tsx       # Masaüstü üst bar + stat chips
├── canvas/
│   └── DrawingBoard.tsx      # HTML5 Canvas, touch + mouse
├── exam/
│   └── ExamTimer.tsx         # Geri sayım, kırmızı uyarı
├── gamification/
│   ├── DailyQuests.tsx       # 4 günlük görev + progress bar
│   └── StreakWidget.tsx      # 7 günlük seri görünümü
├── reading/
│   └── FuriganaText.tsx      # Kelimeye tıklayınca tooltip
└── srs/
    ├── ReviewCard.tsx         # 3D flip animasyonlu SM-2 kart
    └── ReviewSummary.tsx      # Seans sonu analiz ekranı

data/                   # Statik kurs verileri (TypeScript objeleri)
├── course/             # 31 bölüm ayrı dosyada (chapter1.ts … chapter31.ts)
│   └── index.ts        # allGrammarData export'u
├── types/
│   └── course.ts       # GrammarItem, VocabItem, LessonSection tipleri
├── hiragana.ts         # 46 Hiragana kartı (FlashcardData[])
├── katakana.ts         # 46 Katakana kartı (FlashcardData[])
└── stories.ts          # 5 mini hikaye (Story[])

lib/                    # Yardımcı fonksiyonlar ve kütüphaneler
├── sm2.ts              # SM-2 algoritması (calculateNextReview)
├── types.ts            # Global tipler (FlashcardData, SM2Data)
└── supabase/
    ├── client.ts       # Tarayıcı Supabase istemcisi
    ├── server.ts       # Sunucu Supabase istemcisi
    ├── sync.ts         # Kart ilerlemesini Supabase ile senkronize et
    └── social.ts       # Leaderboard fetch, Badge sistemi

store/
└── useLearningStore.ts # Zustand store — SM-2 state, XP, streak, günlük hedef

supabase/
└── migrations/         # DB migration SQL dosyaları
```

## Veri Akışı

```
Kullanıcı bir kartı puanlar
        ↓
ReviewCard → onAnswer(quality: 1-5)
        ↓
useLearningStore.reviewCard(cardId, quality)
        ↓
sm2.calculateNextReview(mevcut SM2Data, quality)
        → Yeni interval, easeFactor, nextReviewDate hesaplanır
        ↓
Zustand state güncellenir (localStorage persist)
        ↓
lib/supabase/sync.ts → Supabase card_progress tablosuna yazılır
```

## Supabase Tabloları

```sql
-- Kullanıcı profilleri
profiles (
  id uuid PRIMARY KEY REFERENCES auth.users,
  display_name text,
  updated_at timestamptz
)

-- Kart ilerlemesi (SM-2 verileri)
card_progress (
  id uuid PRIMARY KEY,
  user_id uuid REFERENCES auth.users,
  card_id text,          -- 'h_a', 'k_a', 'grammar-ch1-0' gibi
  ease_factor float,
  interval int,
  repetitions int,
  next_review_date timestamptz,
  updated_at timestamptz
)
```

## SM-2 Algoritması

`lib/sm2.ts` — SüperMemo-2 algoritmasının TypeScript implementasyonu:

- `quality`: 1–5 arası kullanıcı puanı (1=Hiç bilmedim, 5=Çok kolay)
- `easeFactor`: Başlangıç 2.5, her tekrarda güncellenir
- `interval`: İlk tekrar 1 gün, ikinci 6 gün, sonrası `interval * easeFactor`
- `nextReviewDate`: Bir sonraki tekrar tarihi

## Gamification Sistemi

```
XP Hesabı:
  Kart puanı 5 → +10 XP
  Kart puanı 4 → +5 XP
  Kart puanı 1-3 → +2 XP

Seviye = Math.floor(xp / 50) + 1

Streak:
  Her gün çalışılırsa streak +1
  Bir gün kaçırılırsa streak 0'a sıfırlanır
  lastStudyDate ISO string olarak saklanır
```
