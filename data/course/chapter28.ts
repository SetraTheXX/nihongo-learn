import { Section } from '../types/course';

export const chapter28: Section = {
  id: "sec-28",
  title: "Geçmiş Zaman: İsim ve Sıfatlar",
  description: "İsimlerin ve sıfatların geçmiş zaman formlarını öğren",
  emoji: "🕰️",
  color: "rose",
  lessons: [
    {
      id: "les-28-1",
      title: "İsim + Geçmiş Zaman",
      description: "Desu → Deshita geçişi.",
      icon: "info",
      type: "reading",
      slides: [
        {
          title: "Deshita (でした) - Geçmiş",
          content: "İsimler ve na-sıfatları için:\n\n• Şimdiki: ~ desu (~ dır/dir)\n• Geçmiş: ~ deshita (~ di/du)\n\nÖrnek:\nGakusei desu. (Öğrenciyim.)\nGakusei deshita. (Öğrenciydim.)\n\nKirei desu. (Güzel.)\nKirei deshita. (Güzeldi.)",
          emoji: "📝"
        },
        {
          title: "i-Sıfatı + Geçmiş",
          content: "i-sıfatları için kural farklı:\n\n• Şimdiki: atsui desu (sıcak)\n• Geçmiş: atsukatta desu (sıcaktı)\n\nKural: '-i' düşer, '-katta' eklenir.\nOishii → oishikatta (lezzetliydi)\nTanoshii → tanoshikatta (eğlenceliydi)",
          emoji: "🔤"
        }
      ],
      xpReward: 10,
    },
    {
      id: "les-28-2",
      title: "Geçmiş Zaman Sıfat ve İsimler",
      description: "Geçmişte nasıldı? Alıştırma.",
      icon: "history",
      type: "flashcard",
      vocabItems: [
        { japanese: "がくせい でした", romaji: "gakusei deshita", meaning_tr: "Öğrenciydim (geçmiş)", emoji: "🎓" },
        { japanese: "いしゃ でした", romaji: "isha deshita", meaning_tr: "Doktordu (geçmiş)", emoji: "👨‍⚕️" },
        { japanese: "あつかった です", romaji: "atsukatta desu", meaning_tr: "Sıcaktı (geçmiş)", emoji: "🌡️" },
        { japanese: "おいしかった です", romaji: "oishikatta desu", meaning_tr: "Lezzetliydi (geçmiş)", emoji: "😋" },
        { japanese: "たのしかった です", romaji: "tanoshikatta desu", meaning_tr: "Eğlenceliydi (geçmiş)", emoji: "🎉" },
        { japanese: "むずかしかった です", romaji: "muzukashikatta desu", meaning_tr: "Zordu (geçmiş)", emoji: "😰" },
      ],
      xpReward: 20,
    },
    {
      id: "les-28-3",
      title: "Gramer: Geçmişte Nasıldı?",
      description: "Geçmiş zaman sıfat ve isimlerini cümlede kullan.",
      icon: "architecture",
      type: "grammar",
      grammarItems: [
        {
          id: "gr-sec28-1",
          sentence: "その えいが は おもしろかった です",
          romaji: "Sono eiga wa omoshirokatta desu.",
          translation: "O film ilginçti.",
          explanation: "'Omoshiroi' (ilginç) geçmiş: '-i' düşer, '-katta' eklenir → 'omoshirokatta'. 'Sono' = o (sana yakın).",
          breakdown: [
            { word: "その えいが", romaji: "sono eiga", meaning: "o film" },
            { word: "は", romaji: "wa", meaning: "(konu)", isParticle: true },
            { word: "おもしろかった", romaji: "omoshirokatta", meaning: "ilginçti (geçmiş)" },
            { word: "です", romaji: "desu", meaning: "dir (kibar)" },
          ]
        },
        {
          id: "gr-sec28-2",
          sentence: "こどもの とき やさしい せんせい でした",
          romaji: "Kodomo no toki yasashii sensei deshita.",
          translation: "Çocukken iyi bir öğretmendi.",
          explanation: "'Kodomo no toki' = çocukken. 'Deshita' geçmiş form. Geçmişteki özellikleri anlatmak için.",
          breakdown: [
            { word: "こどもの とき", romaji: "kodomo no toki", meaning: "çocukken" },
            { word: "やさしい", romaji: "yasashii", meaning: "iyi kalpli / nazik" },
            { word: "せんせい", romaji: "sensei", meaning: "öğretmen" },
            { word: "でした", romaji: "deshita", meaning: "di/du (geçmiş isim)" },
          ]
        }
      ],
      xpReward: 25,
    },
    {
      id: "les-28-4",
      title: "Bölüm 28 Kontrol Noktası",
      description: "İsim ve sıfatlarda geçmiş zamanı test et.",
      icon: "flag",
      type: "checkpoint",
      xpReward: 35,
    }
  ],
};
