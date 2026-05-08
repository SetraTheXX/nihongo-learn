import { Section } from '../types/course';

export const chapter3: Section = {
  id: "sec-3",
  title: "Meslekler",
  description: "Meslekleri söylemeyi, soru sormayı ve cevaplamayı öğren",
  emoji: "💼",
  color: "purple",
  lessons: [
    {
      id: "les-3-1",
      title: "Meslekler",
      description: "Çeşitli meslekleri nasıl söyleyeceğini öğren",
      icon: "work",
      type: "grammar",
      grammarItems: [
        {
          id: "gr-3-1",
          sentence: "わたし は 先生 です。",
          romaji: "Watashi wa sensei desu.",
          translation: "Ben öğretmenim.",
          explanation: "Önceki derste öğrendiğimiz kalıpla mesleklerimizi söyleyebiliriz.",
          breakdown: [
            { word: "わたし", romaji: "Watashi", meaning: "Ben" },
            { word: "は", romaji: "wa", meaning: "konu eki", isParticle: true },
            { word: "先生", romaji: "sensei", meaning: "öğretmen" },
            { word: "です", romaji: "desu", meaning: "dır/dir" }
          ]
        },
        {
          id: "gr-3-2",
          sentence: "わたし は 医者 です。",
          romaji: "Watashi wa isha desu.",
          translation: "Ben doktorum.",
          explanation: "Isha (doktor) kelimesini kullanarak cümleyi kurduk.",
          breakdown: [
            { word: "わたし", romaji: "Watashi", meaning: "Ben" },
            { word: "は", romaji: "wa", meaning: "konu eki", isParticle: true },
            { word: "医者", romaji: "isha", meaning: "doktor" },
            { word: "です", romaji: "desu", meaning: "dır/dir" }
          ]
        }
      ],
      xpReward: 20,
    },
    {
      id: "les-3-2",
      title: "Soru Sorma: -ka",
      description: "İfade oluşturmayı ve soru sormayı öğren",
      icon: "help_outline",
      type: "grammar",
      grammarItems: [
        {
          id: "gr-3-3",
          sentence: "学生 です か。",
          romaji: "Gakusei desu ka.",
          translation: "Öğrenci misin(iz)?",
          explanation: "Japoncada cümlenin sonuna 'ka' (か) ekleyerek soru cümlesi oluştururuz.",
          breakdown: [
            { word: "学生", romaji: "Gakusei", meaning: "Öğrenci" },
            { word: "です", romaji: "desu", meaning: "dır/dir" },
            { word: "か", romaji: "ka", meaning: "soru eki", isParticle: true }
          ]
        }
      ],
      xpReward: 15,
    },
    {
      id: "les-3-3",
      title: "Sorulara Cevap Verme",
      description: "Soruları cevaplamayı öğren",
      icon: "chat",
      type: "grammar",
      grammarItems: [
        {
          id: "gr-3-4",
          sentence: "はい、 学生 です。",
          romaji: "Hai, gakusei desu.",
          translation: "Evet, öğrenciyim.",
          explanation: "Hai (Evet) diyerek olumlu yanıt verebilirsiniz.",
          breakdown: [
            { word: "はい", romaji: "Hai", meaning: "Evet" },
            { word: "学生", romaji: "gakusei", meaning: "öğrenci" },
            { word: "です", romaji: "desu", meaning: "dır/dir" }
          ]
        },
        {
          id: "gr-3-5",
          sentence: "いいえ、 先生 です。",
          romaji: "Iie, sensei desu.",
          translation: "Hayır, öğretmenim.",
          explanation: "Iie (Hayır) diyerek ardından doğru olan durumu söyleyebilirsiniz.",
          breakdown: [
            { word: "いいえ", romaji: "Iie", meaning: "Hayır" },
            { word: "先生", romaji: "sensei", meaning: "öğretmen" },
            { word: "です", romaji: "desu", meaning: "dır/dir" }
          ]
        }
      ],
      xpReward: 15,
    },
    {
      id: "les-3-4",
      title: "Hiragana: ka ki ku ke ko",
      description: "Sonraki 5 hiragana harfin yazılışını öğren",
      icon: "text_fields",
      type: "flashcard",
      cardIds: ["h_ka", "h_ki", "h_ku", "h_ke", "h_ko"],
      xpReward: 20,
    },
    {
      id: "les-3-5",
      title: "Quiz: ka ki ku ke ko",
      description: "Öğrendiğin sesleri test et",
      icon: "quiz",
      type: "quiz",
      cardIds: ["h_a", "h_i", "h_ka", "h_ki", "h_ku", "h_ke", "h_ko"], // Öncekilerden de 2 tane serpiştirdik (Aralıklı tekrar)
      xpReward: 20,
    },
    {
      id: "les-3-6",
      title: "Kontrol Noktası",
      description: "Meslekler, Soru cümleleri ve Harfleri test et",
      icon: "flag",
      type: "checkpoint",
      cardIds: ["h_ka", "h_ki", "h_ku", "h_ke", "h_ko"],
      xpReward: 30,
    }
  ],
};
