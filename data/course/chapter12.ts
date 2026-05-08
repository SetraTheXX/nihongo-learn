import { Section } from '../types/course';

export const chapter12: Section = {
  id: "sec-12",
  title: "İşaret Zamirleri: Kore, Sore, Are",
  description: "Bu, şu ve o kavramlarını Japonca'da nasıl ifade edersin?",
  emoji: "👉",
  color: "cyan",
  lessons: [
    {
      id: "les-12-1",
      title: "Katakana: ha hi fu he ho",
      description: "H sırasındaki Katakana harfleri.",
      icon: "sort_by_alpha",
      type: "flashcard",
      vocabItems: [
        { japanese: "ハ", romaji: "ha", meaning_tr: "ha" },
        { japanese: "ヒ", romaji: "hi", meaning_tr: "hi" },
        { japanese: "フ", romaji: "fu", meaning_tr: "fu" },
        { japanese: "ヘ", romaji: "he", meaning_tr: "he" },
        { japanese: "ホ", romaji: "ho", meaning_tr: "ho" },
      ],
      xpReward: 15,
    },
    {
      id: "les-12-2",
      title: "Kore, Sore, Are Nedir?",
      description: "Üç temel işaret zamirini öğren.",
      icon: "near_me",
      type: "reading",
      slides: [
        {
          title: "Uzaklık Sistemi",
          content: "Japonca'da bir nesneyi işaret etmek için konuşanın ve dinleyenin nesneye olan uzaklığı önemlidir:\n\nKore (これ) = BU (Bana yakın)\nSore (それ) = ŞU (Sana yakın)\nAre (あれ) = O (İkimizden de uzak)",
          emoji: "👈"
        },
        {
          title: "Ko-So-A Sistemi",
          content: "Bu sistem Japonca'da çok kullanılır. Ko- = bana yakın, So- = sana yakın, A- = ikimizden de uzak. Bu mantıkla Koko (burası), Soko (orası), Asoko (şurası) da gelir.",
          emoji: "🗺️"
        }
      ],
      xpReward: 10,
    },
    {
      id: "les-12-3",
      title: "Kelimeler: Eşya ve Nesneler",
      description: "Günlük eşyaları Japonca söyle.",
      icon: "inventory_2",
      type: "flashcard",
      vocabItems: [
        { japanese: "ほん", romaji: "hon", meaning_tr: "Kitap", emoji: "📚" },
        { japanese: "かばん", romaji: "kaban", meaning_tr: "Çanta", emoji: "👜" },
        { japanese: "めがね", romaji: "megane", meaning_tr: "Gözlük", emoji: "👓" },
        { japanese: "くつ", romaji: "kutsu", meaning_tr: "Ayakkabı", emoji: "👟" },
        { japanese: "でんわ", romaji: "denwa", meaning_tr: "Telefon", emoji: "📱" },
        { japanese: "かぎ", romaji: "kagi", meaning_tr: "Anahtar", emoji: "🔑" },
      ],
      xpReward: 20,
    },
    {
      id: "les-12-4",
      title: "Gramer: Kore wa ~ desu",
      description: "İşaret zamirlerini cümlede kullan.",
      icon: "architecture",
      type: "grammar",
      grammarItems: [
        {
          id: "gr-sec12-1",
          sentence: "これ は わたし の かばん です",
          romaji: "Kore wa watashi no kaban desu.",
          translation: "Bu benim çantam.",
          explanation: "'Kore' (bu) + 'wa' (konu) + 'watashi no' (benim) + 'kaban' (çanta) + 'desu' (dir). 'No' tamlamasını burada da görüyoruz.",
          breakdown: [
            { word: "これ", romaji: "kore", meaning: "bu" },
            { word: "は", romaji: "wa", meaning: "(konu)", isParticle: true },
            { word: "わたし の", romaji: "watashi no", meaning: "benim", isParticle: true },
            { word: "かばん", romaji: "kaban", meaning: "çanta" },
            { word: "です", romaji: "desu", meaning: "dir" },
          ]
        },
        {
          id: "gr-sec12-2",
          sentence: "それ は なん です か",
          romaji: "Sore wa nan desu ka?",
          translation: "O (sende olan) ne?",
          explanation: "'Nan' (なん) = ne. 'Nani' de kullanılabilir, ama 'nan' daha yaygın kullanılır. Nesne tanımlamak için temel soru kalıbı.",
          breakdown: [
            { word: "それ", romaji: "sore", meaning: "şu / o (sana yakın)" },
            { word: "は", romaji: "wa", meaning: "(konu)", isParticle: true },
            { word: "なん", romaji: "nan", meaning: "ne" },
            { word: "です か", romaji: "desu ka", meaning: "... mi?", isParticle: true },
          ]
        },
        {
          id: "gr-sec12-3",
          sentence: "あれ は だれ の くつ です か",
          romaji: "Are wa dare no kutsu desu ka?",
          translation: "O ayakkabı kimin?",
          explanation: "'Dare' (だれ) = kim. 'Dare no' = kimin. 'Are' uzakta olan bir şeyi işaret eder.",
          breakdown: [
            { word: "あれ", romaji: "are", meaning: "o (uzaktaki)" },
            { word: "は", romaji: "wa", meaning: "(konu)", isParticle: true },
            { word: "だれ の", romaji: "dare no", meaning: "kimin", isParticle: true },
            { word: "くつ", romaji: "kutsu", meaning: "ayakkabı" },
            { word: "です か", romaji: "desu ka", meaning: "... mi?", isParticle: true },
          ]
        }
      ],
      xpReward: 25,
    },
    {
      id: "les-12-5",
      title: "Bölüm 12 Kontrol Noktası",
      description: "İşaret zamirlerini ve eşya kelimelerini test et.",
      icon: "flag",
      type: "checkpoint",
      xpReward: 35,
    }
  ],
};
