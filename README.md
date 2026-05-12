# Nihongo Learn

Türkçe konuşanlar için Japonca öğrenme odaklı, Next.js ile geliştirilmiş bir MVP.

Bu proje benim Japonca öğrenme sürecimi yazılım pratiğiyle birleştirdiğim kişisel bir öğrenme projesi. Amacı tek seferde dev bir ürün olmak değil; çalışan parçaları net göstermek, eksikleri dürüstçe ayırmak ve faz faz geliştirilebilir bir öğrenme uygulaması ortaya koymak.

## Öne Çıkanlar

| Alan | Durum |
| --- | --- |
| Hiragana / Katakana | 46 + 46 karakter, örnek kelime ve quiz akışı |
| SM-2 tekrar | LocalStorage tabanlı spaced repetition |
| A1 kurs | 31 bölümlük temel Japonca akışı |
| Gamification | XP, streak, günlük görevler ve rozetler |
| Mini hikayeler | Furigana destekli kısa okuma parçaları |
| N5 sınavı | Süreli deneme sınavı ve sonuç ekranı |
| Canvas pratik | Kana çizim tahtası |
| Supabase | Auth ve sync için opsiyonel bulut modu |

## Canlılık Durumu

Proje şu anda Faz 4 öncesi stabilizasyon aşamasında. Faz 1-3.5 kapsamındaki ana ekranlar ve local MVP akışı çalışır durumda. Ses/TTS desteği daha önce denendi, kalite ve tutarlılık sorunları nedeniyle geri alındı; bu alan Faz 4'te daha kontrollü şekilde ele alınacak.

## Sayfa Haritası

```text
/              Dashboard
/learn         Kartlar ve kurs girişi
/learn/course  31 bölümlük A1 müfredatı
/quiz          Hiragana / Katakana quiz
/review        SM-2 tekrar seansı
/reading       Mini hikayeler
/exam          JLPT N5 deneme sınavı
/leaderboard   Sıralama ve rozetler
/drawing       Kana çizim tahtası
/profile       Profil, XP, streak ve görevler
```

## Kurulum

```bash
git clone https://github.com/SetraTheXX/nihongo-learn.git
cd nihongo-learn
npm install
npm run dev
```

Uygulama varsayılan olarak `http://localhost:3000` adresinde çalışır.

## Çalışma Modları

### Demo / Local Mode

Supabase env değerleri olmadan uygulama açılır. İlerleme, XP ve tekrar verileri bu cihazdaki localStorage üzerinde saklanır. Public demo ve hızlı inceleme için hedeflenen güvenli mod budur.

### Supabase Mode

Auth ve bulut senkronizasyonu için `.env.example` dosyasını `.env.local` olarak kopyalayın:

```bash
cp .env.example .env.local
```

Sonra Supabase Dashboard -> Settings -> API bölümünden yalnızca public client değerlerini ekleyin:

```env
NEXT_PUBLIC_SUPABASE_URL=https://PROJE_ID.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=anon-public-key
```

Service role key, database password veya admin secret bu projeye ve client env değişkenlerine eklenmemelidir. Güvenlik RLS politikaları ve public anon key modeli üzerine kuruludur.

## Teknoloji Stack

| Katman | Teknoloji |
| --- | --- |
| Framework | Next.js 14 App Router |
| Dil | TypeScript |
| Stil | Tailwind CSS + Material Design 3 token yaklaşımı |
| Animasyon | Framer Motion |
| State | Zustand + localStorage persist |
| Backend | Opsiyonel Supabase Auth / PostgreSQL / RLS |
| SRS | SM-2 algoritması |

## Yol Haritası

- **Faz 1 tamamlandı:** Hiragana, local SM-2, dashboard.
- **Faz 2 tamamlandı:** Katakana, Supabase auth/db/sync altyapısı.
- **Faz 3 tamamlandı:** A1 kurs, SRS ekranları, gamification.
- **Faz 3.5 tamamlandı:** Mini hikayeler, N5 sınavı, leaderboard, canvas çizim.
- **Faz 4 beklemede:** Ses/TTS araştırması ve PWA desteği.
- **Sonraki büyük yön:** Kanji/N4 kapsamı, Faz 4 stabil olduktan sonra ele alınacak.

## Repo Notları

- `.env.local` ve kişisel çalışma notları Git dışında tutulur.
- Public dokümanlar README ve product brief odaklıdır.
- TTS şu anda kapalıdır; tekrar eklenecekse önce kalite ve fallback stratejisi netleştirilecektir.

## Lisans

MIT
