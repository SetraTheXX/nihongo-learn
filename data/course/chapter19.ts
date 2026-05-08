import { Section } from '../types/course';

export const chapter19: Section = {
  id: "sec-19",
  title: "Düzensiz Fiiller: Suru ve Kuru",
  description: "Japonca'nın iki özel düzensiz fiilini ve günlük aktiviteleri öğren",
  emoji: "⚡",
  color: "yellow",
  lessons: [
    {
      id: "les-19-1",
      title: "Suru: Yapmak",
      description: "Japonca'nın en çok kullanılan fiili.",
      icon: "build",
      type: "flashcard",
      vocabItems: [
        { japanese: "します", romaji: "shimasu", meaning_tr: "Yaparım (suru'nun kibar hali)", emoji: "✅" },
        { japanese: "べんきょう します", romaji: "benkyou shimasu", meaning_tr: "Çalışırım / Ders çalışırım", emoji: "📚" },
        { japanese: "しごと します", romaji: "shigoto shimasu", meaning_tr: "Çalışırım (iş)", emoji: "💼" },
        { japanese: "りょこう します", romaji: "ryokou shimasu", meaning_tr: "Seyahat ederim", emoji: "✈️" },
        { japanese: "でんわ します", romaji: "denwa shimasu", meaning_tr: "Telefon ederim", emoji: "📞" },
        { japanese: "けっこん します", romaji: "kekkon shimasu", meaning_tr: "Evlenirim", emoji: "💍" },
      ],
      xpReward: 20,
    },
    {
      id: "les-19-2",
      title: "Kuru: Gelmek",
      description: "Hareket bildiren özel fiil.",
      icon: "directions_walk",
      type: "flashcard",
      vocabItems: [
        { japanese: "きます", romaji: "kimasu", meaning_tr: "Gelirim (kuru'nun kibar hali)", emoji: "🤗" },
        { japanese: "ここ に きます", romaji: "koko ni kimasu", meaning_tr: "Buraya gelirim", emoji: "📍" },
        { japanese: "あした きます", romaji: "ashita kimasu", meaning_tr: "Yarın gelirim", emoji: "📅" },
      ],
      xpReward: 15,
    },
    {
      id: "les-19-3",
      title: "Spor ve Hobiler",
      description: "'Shimasu' ile spor ve hobi cümleleri kur.",
      icon: "sports_soccer",
      type: "flashcard",
      vocabItems: [
        { japanese: "サッカー を します", romaji: "sakkaa wo shimasu", meaning_tr: "Futbol oynarım", emoji: "⚽" },
        { japanese: "テニス を します", romaji: "tenisu wo shimasu", meaning_tr: "Tenis oynarım", emoji: "🎾" },
        { japanese: "およぎます", romaji: "oyogimasu", meaning_tr: "Yüzerim", emoji: "🏊" },
        { japanese: "はしります", romaji: "hashirimasu", meaning_tr: "Koşarım", emoji: "🏃" },
        { japanese: "りょうり します", romaji: "ryouri shimasu", meaning_tr: "Yemek yaparım", emoji: "🍳" },
        { japanese: "かいもの します", romaji: "kaimono shimasu", meaning_tr: "Alışveriş yaparım", emoji: "🛍️" },
      ],
      xpReward: 20,
    },
    {
      id: "les-19-4",
      title: "Gramer: Suru ile Cümle",
      description: "Suru ve kuru fiillerini doğal cümlelerde kullan.",
      icon: "architecture",
      type: "grammar",
      grammarItems: [
        {
          id: "gr-sec19-1",
          sentence: "しゅうまつ に なに を しますか",
          romaji: "Shuumatsu ni nani wo shimasu ka?",
          translation: "Hafta sonu ne yapıyorsunuz?",
          explanation: "'Shuumatsu' = hafta sonu. 'Nani wo shimasu ka' = 'ne yapıyorsunuz?' - çok kullanışlı bir konuşma başlatıcısı!",
          breakdown: [
            { word: "しゅうまつ", romaji: "shuumatsu", meaning: "hafta sonu" },
            { word: "に", romaji: "ni", meaning: "(zaman eki)", isParticle: true },
            { word: "なに を", romaji: "nani wo", meaning: "ne (nesne)" },
            { word: "します か", romaji: "shimasu ka", meaning: "yapıyorsunuz?" },
          ]
        },
        {
          id: "gr-sec19-2",
          sentence: "ともだち と テニス を します",
          romaji: "Tomodachi to tenisu wo shimasu.",
          translation: "Arkadaşımla tenis oynuyorum.",
          explanation: "Spor aktiviteleri için 'suru' fiilini kullanırız: (spor ismi) + 'wo' + 'shimasu'. 'To' (と) = birlikte.",
          breakdown: [
            { word: "ともだち", romaji: "tomodachi", meaning: "arkadaş" },
            { word: "と", romaji: "to", meaning: "(ile)", isParticle: true },
            { word: "テニス", romaji: "tenisu", meaning: "tenis" },
            { word: "を", romaji: "wo", meaning: "(nesne eki)", isParticle: true },
            { word: "します", romaji: "shimasu", meaning: "yaparım/oynarım" },
          ]
        }
      ],
      xpReward: 25,
    },
    {
      id: "les-19-5",
      title: "Bölüm 19 Kontrol Noktası",
      description: "Suru, kuru ve aktivite kelimelerini test et.",
      icon: "flag",
      type: "checkpoint",
      xpReward: 35,
    }
  ],
};
