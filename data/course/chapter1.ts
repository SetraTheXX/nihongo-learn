import { Section } from '../types/course';

export const chapter1: Section = {
  id: "sec-1",
  title: "Kendini Tanıtma",
  description: "Japoncada selamlaşmayı ve kendini tanıtmayı öğren",
  emoji: "👋",
  color: "blue",
  lessons: [
    {
      id: "les-1-1",
      title: "Konnichiwa!",
      description: "İnsanları ilk defa selamlamayı öğren",
      icon: "waving_hand",
      type: "flashcard",
      slides: [
        {
          title: "Japonca'ya Hoş Geldin!",
          content: "Japoncada ilk intiba çok önemlidir. İlk olarak gün içinde kullanabileceğin en yaygın selamlaşmayı öğreneceğiz: Konnichiwa!",
          emoji: "🇯🇵"
        }
      ],
      grammarItems: [
        {
          id: "gr-1-1",
          sentence: "こんにちは。",
          romaji: "Konnichiwa.",
          translation: "Merhaba / İyi günler.",
          explanation: "Herkesle gün içinde kullanılabilecek standart selamlaşma.",
          breakdown: [
            { word: "こんにちは", romaji: "Konnichiwa", meaning: "Merhaba" }
          ]
        },
        {
          id: "gr-1-2",
          sentence: "はじめまして。",
          romaji: "Hajimemashite.",
          translation: "Tanıştığıma memnun oldum.",
          explanation: "Biriyle ilk defa tanıştığınızda kullanılan kalıptır.",
          breakdown: [
            { word: "はじめまして", romaji: "Hajimemashite", meaning: "Tanıştığıma memnun oldum" }
          ]
        }
      ],
      xpReward: 15,
    },
    {
      id: "les-1-2",
      title: "Adını Söyleme",
      description: "Kendini tanıtmak için adını söylemeyi öğren",
      icon: "badge",
      type: "grammar",
      grammarItems: [
        {
          id: "gr-1-3",
          sentence: "わたし は 学生 です",
          romaji: "Watashi wa gakusei desu.",
          translation: "Ben öğrenciyim.",
          explanation: "Japoncada cümleler genelde ÖZNE + wa + NESNE + desu kuralıyla kurulur.",
          breakdown: [
            { word: "わたし", romaji: "Watashi", meaning: "Ben" },
            { word: "は", romaji: "wa", meaning: "konu eki", isParticle: true },
            { word: "学生", romaji: "gakusei", meaning: "öğrenci" },
            { word: "です", romaji: "desu", meaning: "dır/dir" }
          ]
        },
        {
          id: "gr-1-4",
          sentence: "わたし は トゥンジャ です",
          romaji: "Watashi wa Tunca desu.",
          translation: "Ben Tunca'yım.",
          explanation: "Adınızı bu kalıba yerleştirerek kendinizi tanıtabilirsiniz.",
          breakdown: [
            { word: "わたし", romaji: "Watashi", meaning: "Ben" },
            { word: "は", romaji: "wa", meaning: "konu eki", isParticle: true },
            { word: "トゥンジャ", romaji: "Tunca", meaning: "[Adınız]" },
            { word: "です", romaji: "desu", meaning: "dır/dir" }
          ]
        }
      ],
      xpReward: 20,
    },
    {
      id: "les-1-3",
      title: "Kontrol Noktası",
      description: "Kendini tanıtma becerilerini test et",
      icon: "flag",
      type: "checkpoint",
      cardIds: ["h_a", "h_i"], // Sadece placeholder quiz soru düşmemesi için
      xpReward: 30,
    }
  ],
};
