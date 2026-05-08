import { Section } from '../types/course';

export const chapter18: Section = {
  id: "sec-18",
  title: "U Fiilleri",
  description: "Godan fiilleri öğren ve daha zengin cümleler kur",
  emoji: "✍️",
  color: "indigo",
  lessons: [
    {
      id: "les-18-1",
      title: "U Fiilleri: Temel Liste",
      description: "En yaygın U (Godan) fiiller.",
      icon: "list",
      type: "flashcard",
      vocabItems: [
        { japanese: "かく → かきます", romaji: "kaku → kakimasu", meaning_tr: "Yazmak", emoji: "✍️" },
        { japanese: "はなす → はなします", romaji: "hanasu → hanashimasu", meaning_tr: "Konuşmak", emoji: "💬" },
        { japanese: "のむ → のみます", romaji: "nomu → nomimasu", meaning_tr: "İçmek", emoji: "🥤" },
        { japanese: "よむ → よみます", romaji: "yomu → yomimasu", meaning_tr: "Okumak", emoji: "📖" },
        { japanese: "きく → ききます", romaji: "kiku → kikimasu", meaning_tr: "Dinlemek / Sormak", emoji: "👂" },
        { japanese: "あそぶ → あそびます", romaji: "asobu → asobimasu", meaning_tr: "Oynamak / Vakit geçirmek", emoji: "🎮" },
        { japanese: "うたう → うたいます", romaji: "utau → utaimasu", meaning_tr: "Şarkı söylemek", emoji: "🎤" },
        { japanese: "まつ → まちます", romaji: "matsu → machimasu", meaning_tr: "Beklemek", emoji: "⏳" },
      ],
      xpReward: 25,
    },
    {
      id: "les-18-2",
      title: "Yer Kelimeleri",
      description: "Nerede bir şey yapıldığını anlat.",
      icon: "place",
      type: "flashcard",
      vocabItems: [
        { japanese: "いえ / うち", romaji: "ie / uchi", meaning_tr: "Ev", emoji: "🏠" },
        { japanese: "がっこう", romaji: "gakkou", meaning_tr: "Okul", emoji: "🏫" },
        { japanese: "としょかん", romaji: "toshokan", meaning_tr: "Kütüphane", emoji: "📚" },
        { japanese: "えき", romaji: "eki", meaning_tr: "İstasyon", emoji: "🚉" },
        { japanese: "みせ", romaji: "mise", meaning_tr: "Dükkan / Mağaza", emoji: "🏪" },
        { japanese: "こうえん", romaji: "kouen", meaning_tr: "Park", emoji: "🌳" },
      ],
      xpReward: 20,
    },
    {
      id: "les-18-3",
      title: "Gramer: Nerede Yapılır? (De で)",
      description: "'De' takısıyla eylemi yapılan yeri belirt.",
      icon: "architecture",
      type: "grammar",
      grammarItems: [
        {
          id: "gr-sec18-1",
          sentence: "としょかん で ほん を よみます",
          romaji: "Toshokan de hon wo yomimasu.",
          translation: "Kütüphanede kitap okuyorum.",
          explanation: "'De' (で) eylemin yapıldığı yeri belirtir. 'Kütüphane' + 'de' + 'kitap' + 'wo' + 'okumak' = kütüphanede kitap okumak.",
          breakdown: [
            { word: "としょかん", romaji: "toshokan", meaning: "kütüphane" },
            { word: "で", romaji: "de", meaning: "(yer - eylem yeri)", isParticle: true },
            { word: "ほん", romaji: "hon", meaning: "kitap" },
            { word: "を", romaji: "wo", meaning: "(nesne eki)", isParticle: true },
            { word: "よみます", romaji: "yomimasu", meaning: "okurum" },
          ]
        },
        {
          id: "gr-sec18-2",
          sentence: "こうえん で ともだち と あそびます",
          romaji: "Kouen de tomodachi to asobimasu.",
          translation: "Parkta arkadaşımla oynuyorum.",
          explanation: "'To' (と) 'ile/birlikte' anlamına gelir. 'De' (で) yer takısıdır. İki takıyı bir cümlede kullandık.",
          breakdown: [
            { word: "こうえん", romaji: "kouen", meaning: "park" },
            { word: "で", romaji: "de", meaning: "(yer eki)", isParticle: true },
            { word: "ともだち", romaji: "tomodachi", meaning: "arkadaş" },
            { word: "と", romaji: "to", meaning: "(ile / birlikte)", isParticle: true },
            { word: "あそびます", romaji: "asobimasu", meaning: "oynarım" },
          ]
        }
      ],
      xpReward: 25,
    },
    {
      id: "les-18-4",
      title: "Bölüm 18 Kontrol Noktası",
      description: "U fiillerini, yer kelimelerini ve 'de' takısını test et.",
      icon: "flag",
      type: "checkpoint",
      xpReward: 35,
    }
  ],
};
