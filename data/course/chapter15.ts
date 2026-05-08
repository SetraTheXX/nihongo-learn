import { Section } from '../types/course';

export const chapter15: Section = {
  id: "sec-15",
  title: "İlk Kanji Adımları",
  description: "Japonca'daki sayı Kanjilarını ve para birimini öğren",
  emoji: "漢",
  color: "amber",
  lessons: [
    {
      id: "les-15-1",
      title: "Katakana: ra ri ru re ro + wa wo n",
      description: "R ve W sıralarındaki Katakana harfleri.",
      icon: "sort_by_alpha",
      type: "flashcard",
      vocabItems: [
        { japanese: "ラ", romaji: "ra", meaning_tr: "ra" },
        { japanese: "リ", romaji: "ri", meaning_tr: "ri" },
        { japanese: "ル", romaji: "ru", meaning_tr: "ru" },
        { japanese: "レ", romaji: "re", meaning_tr: "re" },
        { japanese: "ロ", romaji: "ro", meaning_tr: "ro" },
        { japanese: "ワ", romaji: "wa", meaning_tr: "wa" },
        { japanese: "ヲ", romaji: "wo", meaning_tr: "wo (sadece edat olarak)" },
        { japanese: "ン", romaji: "n", meaning_tr: "n (tek başına sessiz harf)" },
      ],
      xpReward: 20,
    },
    {
      id: "les-15-2",
      title: "Kanji Nedir?",
      description: "Çin kökenli Japon yazı karakterleri.",
      icon: "info",
      type: "reading",
      slides: [
        {
          title: "Kanji'ye Giriş",
          content: "Kanji (漢字), Japonların Çince'den adapte ettiği ideografik karakterlerdir. Her Kanji bir kavramı temsil eder. Japonca'da yaklaşık 2000+ yaygın kullanılan Kanji vardır. JLPT N5 seviyesi için 100 Kanji öğrenmek gerekir.",
          emoji: "🀄"
        },
        {
          title: "Sayı Kanjileri En Kolayı!",
          content: "Sayı Kanjileri görsel olarak anlamlıdır:\n一 = Bir çizgi = 1\n二 = İki çizgi = 2\n三 = Üç çizgi = 3\n\nSonraki derste bunları öğreneceğiz!",
          emoji: "🔢"
        }
      ],
      xpReward: 10,
    },
    {
      id: "les-15-3",
      title: "Sayı Kanjileri: 1-10",
      description: "En temel Kanji karakterleri - sayılar.",
      icon: "format_list_numbered",
      type: "flashcard",
      vocabItems: [
        { japanese: "一", romaji: "ichi", meaning_tr: "1 (Bir)", emoji: "1️⃣" },
        { japanese: "二", romaji: "ni", meaning_tr: "2 (İki)", emoji: "2️⃣" },
        { japanese: "三", romaji: "san", meaning_tr: "3 (Üç)", emoji: "3️⃣" },
        { japanese: "四", romaji: "shi / yon", meaning_tr: "4 (Dört)", emoji: "4️⃣" },
        { japanese: "五", romaji: "go", meaning_tr: "5 (Beş)", emoji: "5️⃣" },
        { japanese: "六", romaji: "roku", meaning_tr: "6 (Altı)", emoji: "6️⃣" },
        { japanese: "七", romaji: "shichi / nana", meaning_tr: "7 (Yedi)", emoji: "7️⃣" },
        { japanese: "八", romaji: "hachi", meaning_tr: "8 (Sekiz)", emoji: "8️⃣" },
        { japanese: "九", romaji: "ku / kyuu", meaning_tr: "9 (Dokuz)", emoji: "9️⃣" },
        { japanese: "十", romaji: "juu", meaning_tr: "10 (On)", emoji: "🔟" },
      ],
      xpReward: 25,
    },
    {
      id: "les-15-4",
      title: "Büyük Sayı Kanjileri",
      description: "Yüz, Bin, On Bin ve Yen Kanjileri.",
      icon: "currency_yen",
      type: "flashcard",
      vocabItems: [
        { japanese: "百", romaji: "hyaku", meaning_tr: "100 (Yüz)", emoji: "💯" },
        { japanese: "千", romaji: "sen", meaning_tr: "1000 (Bin)", emoji: "💴" },
        { japanese: "万", romaji: "man", meaning_tr: "10.000 (On Bin) - Japon'ların en sık kullandığı büyük sayı", emoji: "💰" },
        { japanese: "円", romaji: "en", meaning_tr: "Yen (Japon Para Birimi)", emoji: "🪙" },
      ],
      xpReward: 20,
    },
    {
      id: "les-15-5",
      title: "Gramer: Kanji ile Fiyat",
      description: "Kanji rakamlarını kullanarak fiyat ifade et.",
      icon: "architecture",
      type: "grammar",
      grammarItems: [
        {
          id: "gr-sec15-1",
          sentence: "千 円 です",
          romaji: "Sen en desu.",
          translation: "1000 yen.",
          explanation: "Kanjilerle yazılan fiyatlar tüm Japonya'da kullanılır. 千 (bin) + 円 (yen) = 1000 yen. Menülerde, fiyat etiketlerinde bu kombinasyonu çok görürsün.",
          breakdown: [
            { word: "千", romaji: "sen", meaning: "bin (1000)" },
            { word: "円", romaji: "en", meaning: "yen" },
            { word: "です", romaji: "desu", meaning: "dir" },
          ]
        },
        {
          id: "gr-sec15-2",
          sentence: "三 万 円 の かばん",
          romaji: "San-man en no kaban.",
          translation: "30.000 yen'lik bir çanta.",
          explanation: "三 (3) × 万 (10.000) = 30.000. Japonya'da büyük sayılar 'man' (10.000) üzerinden hesaplanır, Türkçe'deki gibi 'bin' üzerinden değil.",
          breakdown: [
            { word: "三 万", romaji: "san-man", meaning: "30.000" },
            { word: "円", romaji: "en", meaning: "yen" },
            { word: "の", romaji: "no", meaning: "(tamlama: ...lik)", isParticle: true },
            { word: "かばん", romaji: "kaban", meaning: "çanta" },
          ]
        }
      ],
      xpReward: 25,
    },
    {
      id: "les-15-6",
      title: "Bölüm 15 Kontrol Noktası",
      description: "Aşama 2 Final: Sayılar, Aile, İşaret Zamirleri ve Kanji.",
      icon: "emoji_events",
      type: "checkpoint",
      xpReward: 50,
    }
  ],
};
