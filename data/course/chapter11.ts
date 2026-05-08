import { Section } from '../types/course';

export const chapter11: Section = {
  id: "sec-11",
  title: "Sayılar 11-100 ve Fiyat Sorma",
  description: "Büyük sayıları öğren ve Japonca'da alışveriş konuşmalarını keşfet",
  emoji: "💴",
  color: "emerald",
  lessons: [
    {
      id: "les-11-1",
      title: "Sayılar: 11-19",
      description: "On birden on dokuza kadar sayılar.",
      icon: "format_list_numbered",
      type: "flashcard",
      vocabItems: [
        { japanese: "じゅういち", romaji: "juu-ichi", meaning_tr: "11 (On Bir)" },
        { japanese: "じゅうに", romaji: "juu-ni", meaning_tr: "12 (On İki)" },
        { japanese: "じゅうさん", romaji: "juu-san", meaning_tr: "13 (On Üç)" },
        { japanese: "じゅうし", romaji: "juu-shi", meaning_tr: "14 (On Dört)" },
        { japanese: "じゅうご", romaji: "juu-go", meaning_tr: "15 (On Beş)" },
        { japanese: "じゅうろく", romaji: "juu-roku", meaning_tr: "16 (On Altı)" },
        { japanese: "じゅうなな", romaji: "juu-nana", meaning_tr: "17 (On Yedi)" },
        { japanese: "じゅうはち", romaji: "juu-hachi", meaning_tr: "18 (On Sekiz)" },
        { japanese: "じゅうきゅう", romaji: "juu-kyuu", meaning_tr: "19 (On Dokuz)" },
      ],
      xpReward: 20,
    },
    {
      id: "les-11-2",
      title: "Onluklar: 20-100",
      description: "Onlukları ve 100 sayısını öğren.",
      icon: "looks_two",
      type: "flashcard",
      vocabItems: [
        { japanese: "にじゅう", romaji: "ni-juu", meaning_tr: "20 (Yirmi)" },
        { japanese: "さんじゅう", romaji: "san-juu", meaning_tr: "30 (Otuz)" },
        { japanese: "よんじゅう", romaji: "yon-juu", meaning_tr: "40 (Kırk)" },
        { japanese: "ごじゅう", romaji: "go-juu", meaning_tr: "50 (Elli)" },
        { japanese: "ろくじゅう", romaji: "roku-juu", meaning_tr: "60 (Altmış)" },
        { japanese: "ななじゅう", romaji: "nana-juu", meaning_tr: "70 (Yetmiş)" },
        { japanese: "はちじゅう", romaji: "hachi-juu", meaning_tr: "80 (Seksen)" },
        { japanese: "きゅうじゅう", romaji: "kyuu-juu", meaning_tr: "90 (Doksan)" },
        { japanese: "ひゃく", romaji: "hyaku", meaning_tr: "100 (Yüz)", emoji: "💯" },
      ],
      xpReward: 20,
    },
    {
      id: "les-11-3",
      title: "Alışveriş Kelimeleri",
      description: "Fiyat sormak için temel kelimeler.",
      icon: "shopping_cart",
      type: "flashcard",
      vocabItems: [
        { japanese: "えん", romaji: "en", meaning_tr: "Yen (Japon Para Birimi)", emoji: "💴" },
        { japanese: "いくら", romaji: "ikura", meaning_tr: "Ne kadar? / Kaç para?", emoji: "💰" },
        { japanese: "やすい", romaji: "yasui", meaning_tr: "Ucuz", emoji: "🏷️" },
        { japanese: "たかい", romaji: "takai", meaning_tr: "Pahalı / Yüksek", emoji: "💸" },
        { japanese: "おいしい", romaji: "oishii", meaning_tr: "Lezzetli", emoji: "😋" },
      ],
      xpReward: 15,
    },
    {
      id: "les-11-4",
      title: "Gramer: Fiyat Sorma",
      description: "İkura desu ka kalıbıyla fiyat sor.",
      icon: "attach_money",
      type: "grammar",
      grammarItems: [
        {
          id: "gr-sec11-1",
          sentence: "これ は いくら です か",
          romaji: "Kore wa ikura desu ka?",
          translation: "Bu ne kadar?",
          explanation: "'Kore' (これ) = bu. 'Ikura' = kaç para. 'Desu ka' soru işareti görevini görür.",
          breakdown: [
            { word: "これ", romaji: "kore", meaning: "bu" },
            { word: "は", romaji: "wa", meaning: "(konu)", isParticle: true },
            { word: "いくら", romaji: "ikura", meaning: "kaç para / ne kadar" },
            { word: "です か", romaji: "desu ka", meaning: "... mi?", isParticle: true },
          ]
        },
        {
          id: "gr-sec11-2",
          sentence: "ごひゃく えん です",
          romaji: "Go-hyaku en desu.",
          translation: "500 yen.",
          explanation: "'Go' (5) + 'hyaku' (100) = 500. Japonca'da sayılar bu şekilde birleştirilerek oluşturulur.",
          breakdown: [
            { word: "ごひゃく", romaji: "go-hyaku", meaning: "500" },
            { word: "えん", romaji: "en", meaning: "yen" },
            { word: "です", romaji: "desu", meaning: "dir" },
          ]
        },
        {
          id: "gr-sec11-3",
          sentence: "にひゃく えん は やすい です ね",
          romaji: "Ni-hyaku en wa yasui desu ne.",
          translation: "200 yen ucuz, değil mi?",
          explanation: "Cümlenin sonundaki 'ne' (ね) onay/katılım arar. Türkçe'deki '...değil mi?' veya '...öyle değil mi?' gibi.",
          breakdown: [
            { word: "にひゃく えん", romaji: "ni-hyaku en", meaning: "200 yen" },
            { word: "は", romaji: "wa", meaning: "(konu)", isParticle: true },
            { word: "やすい", romaji: "yasui", meaning: "ucuz" },
            { word: "です", romaji: "desu", meaning: "dir" },
            { word: "ね", romaji: "ne", meaning: "değil mi?", isParticle: true },
          ]
        }
      ],
      xpReward: 25,
    },
    {
      id: "les-11-5",
      title: "Bölüm 11 Kontrol Noktası",
      description: "Sayıları ve fiyat sormayı test et.",
      icon: "flag",
      type: "checkpoint",
      xpReward: 35,
    }
  ],
};
