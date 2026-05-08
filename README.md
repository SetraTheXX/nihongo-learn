# Nihongo Learn 🎌

> **Türkçe konuşanlar için bilimsel temelli, modern Japonca öğrenme platformu.**

Busuu & Duolingo standartlarına göre tasarlanmış A1 (JLPT N5) müfredatını kapsar. SM-2 aralıklı tekrar algoritması, interaktif okuma parçaları, N5 sınav simülatörü ve kana çizim tahtası içerir.

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Supabase](https://img.shields.io/badge/Supabase-Backend-green?logo=supabase)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8?logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer-Motion-ff0055?logo=framer)

---

## ✨ Özellikler

| Modül | Açıklama |
|-------|----------|
| 📚 **A1 Kurs (31 Bölüm)** | Busuu standartlarında Hiragana, Katakana, Gramer ve Kelime |
| 🧠 **SM-2 Aralıklı Tekrar** | SüperMemo-2 algoritmasıyla kişiselleştirilmiş tekrar seansları |
| 🎮 **Gamification** | XP sistemi, günlük seri (streak), görevler ve rozetler |
| 📖 **Mini Hikayeler** | Tıklanabilir Furigana pop-up'lı 5 interaktif okuma parçası |
| 🎓 **N5 Sınav Simülatörü** | 30 dakika, 30 soru, Kolay/Orta/Zor seviyeli deneme sınavı |
| 🏆 **Liderlik Tablosu** | Global XP sıralaması ve 10 adet başarı rozeti |
| ✍️ **Kana Çizim Tahtası** | HTML5 Canvas ile Hiragana/Katakana el yazısı pratiği |
| 🔐 **Supabase Auth** | Google, GitHub ve Email ile giriş; bulut senkronizasyonu |

---

## 🗺️ Sayfa Haritası

```
/              → Dashboard (Ana Sayfa)
/learn         → Kelime Kartları & Kurs
/learn/course  → 31 Bölümlük A1 Müfredatı
/quiz          → İnteraktif Quiz
/review        → SM-2 Aralıklı Tekrar Seansı
/reading       → Mini Hikayeler (Furigana)
/exam          → JLPT N5 Deneme Sınavı
/leaderboard   → Sıralama & Rozetler
/drawing       → Kana Çizim Tahtası
/profile       → Profil, XP, Streak, Görevler
```

---

## 🛠 Kurulum

### Gereksinimler
- Node.js 18+
- npm 9+
- Supabase hesabı (ücretsiz tier yeterli)

### Adımlar

```bash
# 1. Repoyu klonla
git clone https://github.com/KULLANICI_ADIN/nihongo-learn.git
cd nihongo-learn

# 2. Bağımlılıkları yükle
npm install

# 3. Ortam değişkenlerini ayarla
cp .env.example .env.local
# .env.local dosyasını kendi Supabase bilgilerinle düzenle

# 4. Geliştirme sunucusunu başlat
npm run dev
```

Uygulama `http://localhost:3000` adresinde çalışır.

---

## ⚙️ Ortam Değişkenleri

`.env.example` dosyasını kopyalayıp düzenle:

```bash
cp .env.example .env.local
```

Supabase Dashboard → Settings → API bölümünden anahtarları al.

---

## 🏗️ Teknoloji Stack

| Katman | Teknoloji |
|--------|-----------|
| Framework | Next.js 14 (App Router) |
| Dil | TypeScript 5 |
| Stil | Tailwind CSS 3 + özel Material Design 3 token sistemi |
| Animasyon | Framer Motion 12 |
| State | Zustand 5 (localStorage persist + Supabase sync) |
| Backend | Supabase (Auth + PostgreSQL + RLS) |
| SRS | SM-2 (SuperMemo-2) algoritması — `lib/sm2.ts` |

---

## 📁 Klasör Yapısı

```
├── app/                  # Next.js App Router sayfaları
│   ├── auth/             # Giriş / Kayıt
│   ├── drawing/          # Kana çizim tahtası
│   ├── exam/             # N5 sınav simülatörü
│   ├── leaderboard/      # Sıralama & rozetler
│   ├── learn/            # Kurs ve quiz
│   ├── profile/          # Kullanıcı profili
│   ├── quiz/             # İnteraktif quiz
│   ├── reading/          # Mini hikayeler
│   └── review/           # SM-2 tekrar seansı
├── components/           # Yeniden kullanılabilir bileşenler
│   ├── canvas/           # DrawingBoard
│   ├── gamification/     # StreakWidget, DailyQuests
│   ├── reading/          # FuriganaText
│   ├── srs/              # ReviewCard, ReviewSummary
│   └── exam/             # ExamTimer
├── data/                 # Statik kurs verileri (TS)
│   ├── course/           # 31 ayrı bölüm dosyası (chapter1.ts…)
│   ├── hiragana.ts
│   ├── katakana.ts
│   └── stories.ts
├── lib/                  # Yardımcı kütüphaneler
│   ├── sm2.ts            # SM-2 algoritması
│   ├── types.ts          # Global tipler
│   └── supabase/         # Client, server, sync, social
├── store/                # Zustand store (useLearningStore.ts)
└── supabase/             # DB migration dosyaları
```

---

## 🧪 Geliştirme Komutları

```bash
npm run dev      # Geliştirme sunucusu
npm run build    # Production build
npm run start    # Production sunucusu
npm run lint     # ESLint kontrolü
```

---

## 🗺️ Yol Haritası

- **Faz 1 ✅** — Hiragana, Local SM-2, Dashboard
- **Faz 2 ✅** — Katakana, Supabase Auth & DB, Bulut Senkronizasyonu
- **Faz 3 ✅** — A1 Kurs (31 Bölüm), SRS, Gamification
- **Faz 3.5 ✅** — Mini Hikayeler, N5 Sınavı, Liderlik, Canvas Çizim
- **Faz 4 🔜** — Ses Entegrasyonu (TTS), PWA Desteği
- **Faz 5 🔜** — N4 Müfredatı, Kanji sistemi

---

## 🤝 Katkı

[CONTRIBUTING.md](./CONTRIBUTING.md) dosyasını incele.

---

## 📄 Lisans

MIT License — dilediğin gibi kullan, geliştir, dağıt.

---

*Bu proje Antigravity AI rehberliğinde geliştirilmektedir.*
