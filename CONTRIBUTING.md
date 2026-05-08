# Katkı Rehberi

Nihongo Learn'e katkıda bulunmak istediğin için teşekkürler! 🎌

## Başlamadan Önce

1. Repoyu fork'la
2. `git clone` ile yerel makinene çek
3. `npm install` ile bağımlılıkları yükle
4. `cp .env.example .env.local` yap ve Supabase bilgilerini doldur

## Branch Stratejisi

```
main          → Kararlı, production-ready kod
feature/xxx   → Yeni özellikler
fix/xxx       → Hata düzeltmeleri
content/xxx   → Kurs içeriği güncellemeleri (data/ dizini)
```

## Geliştirme Süreci

```bash
# Feature branch oluştur
git checkout -b feature/yeni-ozellik

# Değişikliklerini yap
# ...

# Build doğrulaması (PR açmadan önce ZORUNLU)
npm run build

# Lint kontrolü
npm run lint

# Commit
git add .
git commit -m "feat: yeni özellik açıklaması"

# Push
git push origin feature/yeni-ozellik
```

## Commit Mesajı Formatı

[Conventional Commits](https://www.conventionalcommits.org/) standardı:

```
feat:     Yeni özellik
fix:      Hata düzeltmesi
content:  Kurs içeriği ekleme/güncelleme
refactor: Kod refactoring
style:    Stil/UI değişikliği
docs:     Belge güncellemesi
chore:    Build, config değişikliği
```

Örnekler:
```
feat: leaderboard sayfasına rozet sistemi ekle
fix: review sayfasındaki SM-2 hesaplama hatası
content: chapter12 gramer örnekleri güncelle
```

## Kurs İçeriği Katkısı

`data/course/` altındaki bölümlere yeni kelime/gramer eklemek istiyorsan:

1. İlgili `chapterX.ts` dosyasını düzenle
2. `GrammarItem` veya `VocabItem` tipine uymaya dikkat et
3. Türkçe anlamları (`meaning_tr`) eksiksiz yaz
4. `npm run build` ile TypeScript hatası olmadığını doğrula

## PR Açma Kuralları

- PR başlığı Türkçe veya İngilizce olabilir
- PR açıklamasında ne yaptığını, neden yaptığını anlat
- `npm run build` başarılı olmalı (CI bunu kontrol eder)
- Büyük değişiklikler için önce bir Issue aç

## Sorular?

Issue açarak sorabilirsin.
