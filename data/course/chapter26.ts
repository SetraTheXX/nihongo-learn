import { Section } from '../types/course';

export const chapter26: Section = {
  id: "sec-26",
  title: "Aylar ve Yaş",
  description: "Ayları ve yaşı nasıl söylersin? Doğum günü nasıl sorulur?",
  emoji: "🗓️",
  color: "teal",
  lessons: [
    {
      id: "les-26-1",
      title: "12 Ay",
      description: "Japonca aylar - sayı + 'gatsu' sistemi.",
      icon: "calendar_month",
      type: "flashcard",
      vocabItems: [
        { japanese: "いちがつ", romaji: "ichi-gatsu", meaning_tr: "Ocak (1. Ay)", emoji: "❄️" },
        { japanese: "にがつ", romaji: "ni-gatsu", meaning_tr: "Şubat (2. Ay)", emoji: "💝" },
        { japanese: "さんがつ", romaji: "san-gatsu", meaning_tr: "Mart (3. Ay)", emoji: "🌸" },
        { japanese: "しがつ", romaji: "shi-gatsu", meaning_tr: "Nisan (4. Ay)", emoji: "🌺" },
        { japanese: "ごがつ", romaji: "go-gatsu", meaning_tr: "Mayıs (5. Ay)", emoji: "🌼" },
        { japanese: "ろくがつ", romaji: "roku-gatsu", meaning_tr: "Haziran (6. Ay)", emoji: "☔" },
        { japanese: "しちがつ", romaji: "shichi-gatsu", meaning_tr: "Temmuz (7. Ay)", emoji: "🌞" },
        { japanese: "はちがつ", romaji: "hachi-gatsu", meaning_tr: "Ağustos (8. Ay)", emoji: "🏖️" },
        { japanese: "くがつ", romaji: "ku-gatsu", meaning_tr: "Eylül (9. Ay)", emoji: "🍂" },
        { japanese: "じゅうがつ", romaji: "juu-gatsu", meaning_tr: "Ekim (10. Ay)", emoji: "🎃" },
        { japanese: "じゅういちがつ", romaji: "juuichi-gatsu", meaning_tr: "Kasım (11. Ay)", emoji: "🍁" },
        { japanese: "じゅうにがつ", romaji: "juuni-gatsu", meaning_tr: "Aralık (12. Ay)", emoji: "🎄" },
      ],
      xpReward: 25,
    },
    {
      id: "les-26-2",
      title: "Yaş Kelimeleri",
      description: "Kaç yaşındasın? Nasıl söylenir?",
      icon: "cake",
      type: "flashcard",
      vocabItems: [
        { japanese: "〜さい", romaji: "~sai", meaning_tr: "~ yaşında (-sai yaş sayacı)", emoji: "🎂" },
        { japanese: "はたち", romaji: "hatachi", meaning_tr: "20 yaş (özel form)", emoji: "🎊" },
        { japanese: "たんじょうび", romaji: "tanjoubi", meaning_tr: "Doğum Günü", emoji: "🎁" },
        { japanese: "おめでとう", romaji: "omedetou", meaning_tr: "Tebrikler!", emoji: "🎉" },
      ],
      xpReward: 15,
    },
    {
      id: "les-26-3",
      title: "Gramer: Doğum Günü ve Yaş",
      description: "Doğum gününü söyle ve yıl/ay ifadelerini kullan.",
      icon: "architecture",
      type: "grammar",
      grammarItems: [
        {
          id: "gr-sec26-1",
          sentence: "たんじょうび は なんがつ なんにち です か",
          romaji: "Tanjoubi wa nan-gatsu nan-nichi desu ka?",
          translation: "Doğum gününüz hangi ay hangi gün?",
          explanation: "'Nan-gatsu' = hangi ay. 'Nan-nichi' = hangi gün. Doğum günü sormak için standart kalıp.",
          breakdown: [
            { word: "たんじょうび", romaji: "tanjoubi", meaning: "doğum günü" },
            { word: "は", romaji: "wa", meaning: "(konu)", isParticle: true },
            { word: "なんがつ", romaji: "nan-gatsu", meaning: "hangi ay" },
            { word: "なんにち", romaji: "nan-nichi", meaning: "kaçıncı gün" },
            { word: "です か", romaji: "desu ka", meaning: "... mi?", isParticle: true },
          ]
        },
        {
          id: "gr-sec26-2",
          sentence: "にがつ じゅうよっか です。にじゅうさん さい です",
          romaji: "Ni-gatsu juu-yokka desu. Nijuu-san-sai desu.",
          translation: "14 Şubat. 23 yaşındayım.",
          explanation: "'Juu-yokka' = 14. gün (özel form). Doğum günlerinizde bu kalıbı kullanın. '23 yaş' = 'nijuu-san-sai'.",
          breakdown: [
            { word: "にがつ", romaji: "ni-gatsu", meaning: "Şubat" },
            { word: "じゅうよっか", romaji: "juu-yokka", meaning: "14 (gün - özel form)" },
            { word: "にじゅうさん さい", romaji: "nijuu-san-sai", meaning: "23 yaşında" },
            { word: "です", romaji: "desu", meaning: "dir" },
          ]
        }
      ],
      xpReward: 25,
    },
    {
      id: "les-26-4",
      title: "Bölüm 26 Kontrol Noktası",
      description: "Ayları ve yaş ifadelerini test et.",
      icon: "flag",
      type: "checkpoint",
      xpReward: 35,
    }
  ],
};
