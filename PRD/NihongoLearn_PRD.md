# Nihongo Learn Product Brief

## Kısa Özet

Nihongo Learn, Türkçe konuşan başlangıç seviyesi kullanıcılar için hazırlanmış bir Japonca öğrenme MVP'sidir. Proje; kana öğrenimi, spaced repetition, kısa okuma parçaları, sınav pratiği ve küçük gamification öğelerini tek bir web uygulamasında toplar.

Bu doküman eski gizli PRD yerine public product brief olarak tutulur. Amaç, projenin hangi fazda olduğunu ve sıradaki geliştirme kararlarını açık göstermektir.

## Hedef Kullanıcı

- Japonca öğrenmeye yeni başlayan Türkçe konuşan kullanıcı.
- Hiragana/Katakana karakterlerini görerek, tekrar ederek ve küçük quizlerle öğrenmek isteyen kişi.
- Günlük kısa çalışma oturumlarıyla ilerleme hissi görmek isteyen öğrenci.

## Mevcut Faz Durumu

| Faz | Durum | Kapsam |
| --- | --- | --- |
| Faz 1 | Tamamlandı | Hiragana, local SM-2, dashboard |
| Faz 2 | Tamamlandı | Katakana, Supabase auth/db/sync altyapısı |
| Faz 3 | Tamamlandı | 31 bölümlük A1 kurs, SRS ekranları, XP/streak |
| Faz 3.5 | Tamamlandı | Mini hikayeler, N5 sınavı, leaderboard, canvas çizim |
| Faz 4 | Beklemede | Ses/TTS araştırması ve PWA desteği |

## Çalışan Ana Özellikler

- Hiragana ve Katakana kartları.
- Örnek kelime, romaji ve Türkçe anlam gösterimi.
- Çoktan seçmeli quiz akışı.
- SM-2 tabanlı tekrar planlama.
- XP, streak, günlük görevler ve rozetler.
- 31 bölümlük A1 kurs içeriği.
- Furigana destekli mini hikayeler.
- JLPT N5 odaklı deneme sınavı.
- Kana çizim tahtası.
- Supabase env varsa auth/sync, yoksa local demo mode.

## Faz 4 Öncesi Karar

Ses/TTS desteği daha önce Web Speech API ile denendi. Tarayıcı ve ses kalitesi farkları nedeniyle bu özellik geri alındı. Faz 4'e geçmeden önce proje public repo olarak temizlenir, demo mode stabil hale getirilir ve Supabase opsiyonel çalışır durumda tutulur.

Faz 4'e dönüldüğünde TTS için kabul kriterleri:

- Tarayıcılar arası tutarlı fallback.
- Japonca telaffuz için kabul edilebilir kalite.
- Ses yoksa UI'ın sessizce bozulmadan devam etmesi.
- Dinleme quizinin metin quizinden ayrı, kapatılabilir bir mod olması.

## Kapsam Dışı

- Bu temizlik fazında yeni Kanji/N4 içeriği eklenmeyecek.
- TTS tekrar eklenmeyecek.
- Service role key veya private Supabase secret hiçbir dokümana alınmayacak.
- Public demo auth zorunlu olmayacak.

## Başarı Kriterleri

- Repo geçmişinde kişisel çalışma notları bulunmaz.
- README ve product brief public GitHub görünümü için anlaşılırdır.
- Env olmadan uygulama local demo mode ile build alır.
- Env varken mevcut Supabase auth/sync davranışı korunur.
- Faz 4'e geçmeden önce mevcut MVP'nin nerede durduğu net görünür.
