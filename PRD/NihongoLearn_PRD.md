# 日本語 Learn — Ürün Gereksinim Belgesi (PRD)

**v1.0 · Nisan 2025 · Gizli**

| Alan | Detay |
|---|---|
| Proje Adı | Nihongo Learn |
| Tür | Web Uygulaması (SPA) |
| Hedef Kitle | Türkçe konuşan yetişkinler |
| İlham | Busuu, Duolingo |
| Stack | Next.js · Tailwind · Supabase |
| Geliştirme | Claude Code ile AI destekli |

---

## 1. Genel Bakış ve Vizyon

Nihongo Learn, Türkçe konuşanların Japonca'yı görseller, ses ve tekrar sistemiyle kalıcı biçimde öğrenmesini sağlayan bir web uygulamasıdır. Hedef; busuu'nun kart+görsel odaklı, kişiselleştirilmiş öğrenme deneyimini Japonca'ya özgü ihtiyaçlarla (Hiragana, Katakana, Kanji, örnek kelimeler) uyarlamaktır.

**Temel Hedefler**

- Kullanıcı her Hiragana/Katakana karakterini görsel + okunuş + örnek kelime üçlüsüyle öğrenir
- Spaced Repetition (SM-2) algoritmasıyla bilgi uzun vadeli hafızaya yerleşir
- Gerçek kelimeler ve cümleler (ありがとう, おはよう vb.) başından itibaren öğretilir
- Okunuş (ses dosyası) ileride eklenebilecek şekilde mimari tasarlanır
- Görseller Google Stitch ile üretilir; her kart bir illüstrasyon içerir

---

## 2. Kullanıcı Kişilikleri

### Persona 1 — Meraklı Başlangıç Seviyesi

| Alan | Detay |
|---|---|
| Yaş | 20–35 |
| Motivasyon | Anime, manga veya Japonya seyahati planı |
| Teknik Seviye | Orta — akıllı telefon ve web uygulaması kullanıcısı |
| Beklenti | Hızlı ilerleme hissi, görsel destekli içerik, Türkçe arayüz |
| Engel | Hiragana alfabesine yabancı, karakterleri karıştırıyor |

### Persona 2 — Yazılımcı / Hobici

Japonca öğrenmeyi bir yan proje olarak görür. Teknik detaylara meraklı, ilerlemesini takip etmek ister. Gamification (XP, seri, rozet) motivasyonunu artırır.

---

## 3. Kapsam ve Faz Planı

| Faz | Kapsam | Süre (Hedef) |
|---|---|---|
| Faz 1 — MVP | Hiragana kartları (görsel + romaji), Flashcard motoru (localStorage), Quiz (çoktan seçmeli), Anasayfa + İlerleme çubuğu | 4–6 hafta |
| Faz 2 — Temel | Katakana eklenmesi, Örnek kelimeler (ありがとう vb.) + görselleri, Kullanıcı hesabı (Supabase Auth), Bulut ilerleme kaydı | 4–6 hafta |
| Faz 3 — Ses | Okunuş (TTS veya ses dosyası entegrasyonu), Dinleme quizi, Mobil PWA optimizasyonu | 3–4 hafta |
| Faz 4 — Kanji | N5 Kanji dersleri, Cümle pratiği, Günlük hatırlatma (push notif) | 4–6 hafta |

---

## 4. Özellik Gereksinimleri

### 4.1 Kart Sistemi (Çekirdek Özellik)

Her Hiragana ve Katakana karakteri için aşağıdaki bileşenlerden oluşan bir kart yapısı tanımlanır:

| Kart Alanı | Detay |
|---|---|
| Karakter | Büyük Japonca karakter (ör: あ, き, ね) |
| Romaji | Latin harfli okunuş (ör: a, ki, ne) |
| Görsel | Google Stitch ile üretilen illüstrasyon — karakteri çağrıştıran sahne |
| Örnek Kelime | Gerçek Japonca kelime (ör: ありがとう = arigatou = teşekkürler) |
| Kelime Görseli | Örnek kelimenin sahnesi de ayrı bir Stitch görseli olarak üretilir |
| Okunuş (v3) | Ses dosyası (.mp3) — Faz 3'te eklenecek, veri modeli şimdiden hazırlanır |
| Çizim Sırası | SVG animasyonu (isteğe bağlı, Faz 2 sonrası) |

### 4.2 Flashcard Motoru

SM-2 Spaced Repetition Algoritması:

- Her kart için "Bildim / Bilmedim" yanıtı kaydedilir
- Algoritma bir sonraki tekrar tarihini hesaplar (1 gün → 3 gün → 7 gün → 21 gün...)
- Faz 1: localStorage ile istemci tarafında saklanır
- Faz 2: Supabase'e taşınır, farklı cihazlarda senkronize çalışır
- Bugün tekrar edilecek kart sayısı anasayfada gösterilir

### 4.3 Quiz Sistemi

- Çoktan seçmeli: Gösterilen karakterin romajisini bul (4 seçenek)
- Ters quiz: Romaji göster → doğru karakteri seç
- Kelime eşleştirme: Japonca kelimeyi Türkçe anlamıyla eşleştir
- Faz 3: Dinleme quizi — sesi duyduktan sonra karakteri seç

### 4.4 Gamification

- XP Sistemi: Her doğru yanıt, tamamlanan ders için XP kazanılır
- Günlük Seri (Streak): Art arda giriş günleri sayılır, emoji ile gösterilir
- Seviye Sistemi: XP eşiklerine göre otomatik seviye atlanır
- İlerleme Grafikleri: Haftalık doğruluk oranı, öğrenilen kart sayısı

### 4.5 Müfredat Yapısı

Öğrenme yolu aşağıdaki sırayla ilerler:

1. Hiragana — 5 grup (a-satırı, ka-satırı, sa-satırı, ta-satırı, na-satırı...) · 46 karakter
2. Temel Kelimeler — ありがとう, おはよう, こんにちは gibi günlük kullanım
3. Katakana — 46 karakter + yabancı kelimeler (コーヒー, アイス)
4. N5 Kanji — 80 temel karakter
5. N5 Gramer — は/が/を partikülleri, temel cümle yapısı

---

## 5. Ekran ve Sayfa Listesi

| Ekran | İçerik & Bileşenler | Görsel Varlıklar |
|---|---|---|
| Anasayfa / Dashboard | Günlük hedef, streak, bugünkü tekrar kartları, hızlı başlat | Dekoratif Japonca arka plan (Stitch) |
| Hiragana Haritası | 46 karakter ızgara, her biri tıklanabilir, öğrenilmiş = yeşil | Hiragana karakteri görselleri (Stitch) |
| Ders Sayfası | Tek karakter öğretimi: görsel + ses + örnek kelime | Karakter illüstrasyonu + kelime sahnesi |
| Flashcard | Büyük kart, ön = Japonca, arka = görsel + romaji + anlam | Kart arka yüzü görselleri (Stitch) |
| Quiz | Soru + 4 şık, doğru/yanlış animasyonu, XP bildirimi | Soru başlığı görseli (isteğe bağlı) |
| Kelime Listesi | Öğrenilen kelimeler, arama ve filtreleme | Küçük kelime görseli (thumbnail) |
| Profil / İstatistik | XP, seviye, streak, haftalık grafik, rozetler | Avatar (isteğe bağlı Stitch) |
| Ayarlar | Bildirim tercihi, tema (açık/koyu), dil (TR/EN) | Yok |

---

## 6. Görsel Varlık Üretim Planı (Google Stitch)

### 6.1 Hiragana Karakter Görselleri

Her bir Hiragana karakteri için Google Stitch'te tutarlı bir illüstrasyon seti üretilir. Karakterin okunuşunu çağrıştıran bir sahne veya nesne gösterilir.

| Karakter | Romaji | Stitch Prompt Örneği | Adet |
|---|---|---|---|
| あ (ア) | a | *"Cute anime character opening mouth wide saying AH, pastel style"* | 1 görsel |
| き (キ) | ki | *"A golden key with Japanese aesthetic, flat illustration"* | 1 görsel |
| ね (ネ) | ne | *"Sleeping cat curled up, kawaii style, soft colors"* | 1 görsel |
| す (ス) | su | *"Clear water ripple with Japanese wave pattern"* | 1 görsel |
| ... (46 harf) | ... | Her harf için aynı prompt formatı | 46 görsel |

### 6.2 Örnek Kelime Görselleri

Öğretilen her örnek kelime için ayrı bir sahne görseli üretilir. Görseller kelimeyi bağlam içinde somutlaştırır.

| Kelime | Anlam | Stitch Sahne Prompt'u |
|---|---|---|
| ありがとう | Teşekkür ederim | *"Two anime friends bowing to each other, sakura petals falling, warm pastel tones"* |
| おはよう | Günaydın | *"Anime character stretching at sunrise, cozy Japanese room background"* |
| こんにちは | Merhaba | *"Smiling character waving hand, blue sky and Japanese street"* |
| さようなら | Hoşça kal | *"Character waving goodbye at train station, nostalgic soft light"* |
| はい / いいえ | Evet / Hayır | *"Split scene: character nodding vs shaking head, clean flat style"* |
| みず | Su | *"Glass of clear water with Japanese kanji 水 reflection"* |
| ねこ | Kedi | *"Fluffy Japanese cat (maneki neko style), sitting, cute"* |

**Google Stitch Görsel Standartları**

- Boyut: 800×600 px (ders kartı) · 400×400 px (flashcard arka yüzü) · 200×200 px (liste thumbnail)
- Stil: Tutarlı pastel/kawaii anime çizgi illüstrasyon — her görselde aynı stil rehberi kullanılır
- Format: WebP (web performansı) + PNG yedek
- İsimlendirme: `/assets/hiragana/a.webp` · `/assets/words/arigatou.webp`
- Toplam tahmini varlık: ~46 harf + ~50 kelime = ~100 görsel (MVP + Faz 2)

---

## 7. Veri Modeli

### 7.1 Kart Veri Şeması (JSON)

Her öğrenme kartı aşağıdaki yapıya sahiptir. `audio_path` alanı Faz 3'te doldurulur; boş bırakılır ama şema başından itibaren hazırlanır.

```json
{
  "id": "hiragana_a",
  "character": "あ",
  "romaji": "a",
  "type": "hiragana",
  "group": "vowel",
  "meaning_tr": null,
  "image_path": "/assets/hiragana/a.webp",
  "word_example": {
    "japanese": "ありがとう",
    "romaji": "arigatou",
    "meaning_tr": "teşekkür ederim",
    "image_path": "/assets/words/arigatou.webp"
  },
  "audio_path": null,
  "stroke_order_svg": null,
  "difficulty": 3
}
```

| Alan | Tip | Açıklama |
|---|---|---|
| id | string | "hiragana_a", "hiragana_ki" — benzersiz tanımlayıcı |
| character | string | Japonca karakter: "あ" |
| romaji | string | Latin okunuş: "a" |
| type | enum | "hiragana" \| "katakana" \| "kanji" \| "word" |
| group | string | "vowel" \| "k-group" \| "s-group" ... |
| meaning_tr | string | Türkçe anlam (kelimeler için) |
| image_path | string | "/assets/hiragana/a.webp" |
| word_example | object | { japanese, romaji, meaning_tr, image_path } |
| audio_path | string \| null | Faz 3'te doldurulur: "/audio/a.mp3" \| null |
| stroke_order_svg | string \| null | Faz 2'de eklenecek SVG animasyon yolu |
| difficulty | number | SM-2 için 1–5 arası başlangıç zorluğu |

### 7.2 Supabase Tablo Yapısı

- `users` — id, email, created_at, streak_count, total_xp, level
- `card_progress` — user_id, card_id, ease_factor, interval, repetitions, next_review_date, last_result
- `daily_sessions` — user_id, date, cards_reviewed, correct_count, xp_earned
- `achievements` — user_id, badge_id, earned_at

---

## 8. Teknik Mimari

### 8.1 Frontend

- Framework: Next.js 14 (App Router)
- Stil: Tailwind CSS
- State: Zustand (client state) + React Query (server state)
- Animasyon: Framer Motion (kart çevirme, XP animasyonu)
- PWA: next-pwa ile offline destek (Faz 3)

### 8.2 Backend

- Veritabanı: Supabase (PostgreSQL)
- Auth: Supabase Auth (email + Google OAuth)
- Storage: Supabase Storage (görsel dosyaları)
- API: Next.js Route Handlers (server actions)

### 8.3 Geliştirme Araçları

- IDE: VS Code + Claude Code
- Versiyon Kontrol: Git + GitHub
- Deploy: Vercel (ücretsiz tier yeterli)
- Görsel Üretim: Google Stitch → export WebP → `/public/assets/`

**Claude Code ile Geliştirme Stratejisi**

- Her modülü ayrı prompt ile iste: *"SM-2 algoritmasını TypeScript'e yaz, localStorage'a kaydet"*
- Stitch'ten gelen görselleri sürükle-bırak ile `/public/assets/` altına at
- Veri JSON'larını manuel olarak doldur (`/data/hiragana.json`)
- Component başına bir commit — takip etmesi kolay olur

---

## 9. Başarı Kriterleri

| Metrik | Hedef (Faz 1) | Hedef (Faz 2) |
|---|---|---|
| Hiragana tamamlama | 46 karakter öğretildi | + Katakana 46 karakter |
| Flashcard doğruluk | %80+ doğruluk (ilk 7 gün) | %85+ (1 ay sonra) |
| Sayfa yükleme | <2 saniye (LCP) | <1.5 saniye |
| Görsel kalite | Tüm kartlar Stitch görseli | Tüm kelimeler Stitch görseli |
| Kullanıcı süresi | 10 dk/gün ortalama | 15 dk/gün ortalama |

---

## 10. Kapsam Dışı (MVP)

MVP'ye dahil **olmayan** özellikler:

- Yapay zeka konuşma pratiği veya AI tutor — para gerektiriyor, sonraki faza ertelendi
- Mobil uygulama (iOS/Android) — web önce, PWA yeterli
- Sosyal özellikler (arkadaş ekleme, lider tablosu) — Faz 4+
- Video içerik — bant genişliği maliyeti, kapsam dışı
- Profesyonel ses kayıtları — ücretsiz TTS ile Faz 3'te çözülecek

---

*— Belge Sonu —*
