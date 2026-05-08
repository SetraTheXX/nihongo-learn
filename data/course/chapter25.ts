import { Section } from '../types/course';

export const chapter25: Section = {
  id: "sec-25",
  title: "Günler ve Tarihler",
  description: "Haftanın günleri ve tarihleri Japonca'da nasıl söylenir?",
  emoji: "📅",
  color: "blue",
  lessons: [
    {
      id: "les-25-1",
      title: "Haftanın Günleri",
      description: "Japonca'da günler element/gezegen adlarından gelir.",
      icon: "calendar_today",
      type: "flashcard",
      vocabItems: [
        { japanese: "にちようび", romaji: "nichi-youbi", meaning_tr: "Pazar (Güneş Günü)", emoji: "☀️" },
        { japanese: "げつようび", romaji: "getsu-youbi", meaning_tr: "Pazartesi (Ay Günü)", emoji: "🌙" },
        { japanese: "かようび", romaji: "ka-youbi", meaning_tr: "Salı (Ateş Günü)", emoji: "🔥" },
        { japanese: "すいようび", romaji: "sui-youbi", meaning_tr: "Çarşamba (Su Günü)", emoji: "💧" },
        { japanese: "もくようび", romaji: "moku-youbi", meaning_tr: "Perşembe (Ağaç Günü)", emoji: "🌳" },
        { japanese: "きんようび", romaji: "kin-youbi", meaning_tr: "Cuma (Altın Günü)", emoji: "⭐" },
        { japanese: "どようび", romaji: "do-youbi", meaning_tr: "Cumartesi (Toprak Günü)", emoji: "⛰️" },
      ],
      xpReward: 25,
    },
    {
      id: "les-25-2",
      title: "Zaman Referansları",
      description: "Dün, bugün, yarın ve daha fazlası.",
      icon: "date_range",
      type: "flashcard",
      vocabItems: [
        { japanese: "きょう", romaji: "kyou", meaning_tr: "Bugün", emoji: "📌" },
        { japanese: "きのう", romaji: "kinou", meaning_tr: "Dün", emoji: "⏪" },
        { japanese: "あした / あす", romaji: "ashita / asu", meaning_tr: "Yarın", emoji: "⏩" },
        { japanese: "おととい", romaji: "ototoi", meaning_tr: "Önceki gün", emoji: "⏮️" },
        { japanese: "あさって", romaji: "asatte", meaning_tr: "Öbür gün", emoji: "⏭️" },
        { japanese: "こんしゅう", romaji: "konshuu", meaning_tr: "Bu hafta", emoji: "📅" },
        { japanese: "らいしゅう", romaji: "raishuu", meaning_tr: "Gelecek hafta", emoji: "📆" },
        { japanese: "せんしゅう", romaji: "senshuu", meaning_tr: "Geçen hafta", emoji: "🔙" },
      ],
      xpReward: 20,
    },
    {
      id: "les-25-3",
      title: "Gramer: Plan Anlatma",
      description: "Günler ve zaman ifadelerini cümlede kullan.",
      icon: "architecture",
      type: "grammar",
      grammarItems: [
        {
          id: "gr-sec25-1",
          sentence: "きんようび に えいが を みます",
          romaji: "Kinyoubi ni eiga wo mimasu.",
          translation: "Cuma günü film izliyorum.",
          explanation: "'Ni' zaman takısı belirli günlerle de kullanılır: 'Cuma' + 'ni' + 'film' + 'wo' + 'izlerim'.",
          breakdown: [
            { word: "きんようび", romaji: "kinyoubi", meaning: "Cuma" },
            { word: "に", romaji: "ni", meaning: "(zaman eki)", isParticle: true },
            { word: "えいが", romaji: "eiga", meaning: "film" },
            { word: "を", romaji: "wo", meaning: "(nesne eki)", isParticle: true },
            { word: "みます", romaji: "mimasu", meaning: "izlerim" },
          ]
        },
        {
          id: "gr-sec25-2",
          sentence: "らいしゅう の げつようび に あいましょう",
          romaji: "Raishuu no getsuyoubi ni aimashou.",
          translation: "Gelecek hafta Pazartesi buluşalım.",
          explanation: "'Aimashou' = buluşalım/görüşelim. '-mashou' formu teklif eder. 'Raishuu no getsuyoubi' = gelecek hafta Pazartesi.",
          breakdown: [
            { word: "らいしゅう の", romaji: "raishuu no", meaning: "gelecek hafta'nın" },
            { word: "げつようび", romaji: "getsuyoubi", meaning: "Pazartesi" },
            { word: "に", romaji: "ni", meaning: "(zaman eki)", isParticle: true },
            { word: "あいましょう", romaji: "aimashou", meaning: "buluşalım" },
          ]
        }
      ],
      xpReward: 25,
    },
    {
      id: "les-25-4",
      title: "Bölüm 25 Kontrol Noktası",
      description: "Haftanın günlerini ve zaman ifadelerini test et.",
      icon: "flag",
      type: "checkpoint",
      xpReward: 35,
    }
  ],
};
