import { Section } from '../types/course';

export const chapter7: Section = {
  id: "sec-7",
  title: "Konuşma Becerileri",
  description: "Karşılık vermeyi, sana sorulanı geri sormayı ve son Hiragana harflerini öğren",
  emoji: "💬",
  color: "indigo",
  lessons: [
    {
      id: "les-7-1",
      title: "Gramer: 'Peki ya sen?'",
      description: "Sana sorulan bir soruyu karşı tarafa geri çevir.",
      icon: "swap_horiz",
      type: "grammar",
      grammarItems: [
        {
          id: "gr-sec7-1",
          sentence: "わたし は トルコじん です。あなた は？",
          romaji: "watashi wa torukojin desu. anata wa?",
          translation: "Ben Türküm. Peki ya sen?",
          explanation: "Soruları geri çevirirken cümleyi tekrar etmek yerine sadece '(isim) + wa?' demek yeterlidir.",
          breakdown: [
            { word: "わたし", romaji: "watashi", meaning: "Ben" },
            { word: "は", romaji: "wa", meaning: "(konu)", isParticle: true },
            { word: "トルコじん", romaji: "torukojin", meaning: "Türk" },
            { word: "です", romaji: "desu", meaning: "dir", isParticle: true },
            { word: "あなた", romaji: "anata", meaning: "Sen" },
            { word: "は", romaji: "wa", meaning: "(konu, soru takısı gibi)", isParticle: true }
          ]
        },
        {
          id: "gr-sec7-2",
          sentence: "おちゃ は どう です か。 コーヒー は？",
          romaji: "ocha wa dou desu ka. koohii wa?",
          translation: "Çaya ne dersin? Peki ya kahveye?",
          explanation: "Bir alternatifi sunarken yine 'isim + wa' kullanarak kısa sorular sorabiliriz.",
          breakdown: [
            { word: "おちゃ", romaji: "ocha", meaning: "Çay" },
            { word: "はどうですか", romaji: "wa dou desu ka", meaning: "nasıl olur?" },
            { word: "コーヒー", romaji: "koohii", meaning: "Kahve" },
            { word: "は", romaji: "wa", meaning: "peki(ya)?", isParticle: true }
          ]
        }
      ],
      xpReward: 25,
    },
    {
      id: "les-7-2",
      title: "Hiragana: ma mi mu me mo",
      description: "M sırasındaki Hiragana harflerini öğren.",
      icon: "draw",
      type: "flashcard",
      vocabItems: [
        { japanese: "ま", romaji: "ma", meaning_tr: "ma" },
        { japanese: "み", romaji: "mi", meaning_tr: "mi" },
        { japanese: "む", romaji: "mu", meaning_tr: "mu" },
        { japanese: "め", romaji: "me", meaning_tr: "me" },
        { japanese: "も", romaji: "mo", meaning_tr: "mo" },
      ],
      xpReward: 20,
    },
    {
      id: "les-7-3",
      title: "Tanışma ve Karşılık Verme",
      description: "İnsanların dediklerine doğal bir şekilde cevap ver.",
      icon: "forum",
      type: "flashcard",
      vocabItems: [
        { japanese: "そう です か", romaji: "sou desu ka", meaning_tr: "Öyle mi? / Anlıyorum.", emoji: "🤔" },
        { japanese: "そう です ね", romaji: "sou desu ne", meaning_tr: "Evet, öyle / Haklısın.", emoji: "👍" },
        { japanese: "ほんとう です か", romaji: "hontou desu ka", meaning_tr: "Gerçekten mi?", emoji: "😮" },
      ],
      xpReward: 20,
    },
    {
      id: "les-7-4",
      title: "Hiragana: ra ri ru re ro",
      description: "R (veya L arası) sırasındaki Hiragana harflerini öğren.",
      icon: "draw",
      type: "flashcard",
      vocabItems: [
        { japanese: "ら", romaji: "ra", meaning_tr: "ra" },
        { japanese: "り", romaji: "ri", meaning_tr: "ri" },
        { japanese: "る", romaji: "ru", meaning_tr: "ru" },
        { japanese: "れ", romaji: "re", meaning_tr: "re" },
        { japanese: "ろ", romaji: "ro", meaning_tr: "ro" },
      ],
      xpReward: 20,
    },
    {
      id: "les-7-5",
      title: "Son Hiragana: ya yu yo wa wo n",
      description: "Hiragana alfabesinin son harfleri.",
      icon: "draw",
      type: "flashcard",
      vocabItems: [
        { japanese: "や", romaji: "ya", meaning_tr: "ya" },
        { japanese: "ゆ", romaji: "yu", meaning_tr: "yu" },
        { japanese: "よ", romaji: "yo", meaning_tr: "yo" },
        { japanese: "わ", romaji: "wa", meaning_tr: "wa" },
        { japanese: "を", romaji: "wo (o)", meaning_tr: "o (Sadece nesne eki olarak kullanılır)" },
        { japanese: "ん", romaji: "n", meaning_tr: "n (Tek başına okunabilen tek sessiz harf)" },
      ],
      xpReward: 25,
    },
    {
      id: "les-7-6",
      title: "Bölüm Sonu Değerlendirmesi",
      description: "Soru sormayı, tepkileri ve m/r/y/w/n sıralarını test et.",
      icon: "flag",
      type: "checkpoint",
      xpReward: 30,
    }
  ]
};
