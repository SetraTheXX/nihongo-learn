import { Section } from '../types/course';

export const chapter22: Section = {
  id: "sec-22",
  title: "Mo ve To Takıları",
  description: "'Ben de' ve birden fazla şeyi birleştirmeyi öğren",
  emoji: "➕",
  color: "purple",
  lessons: [
    {
      id: "les-22-1",
      title: "Mo (も) - Ben De!",
      description: "Benzerlik ifade eden 'mo' takısı.",
      icon: "info",
      type: "reading",
      slides: [
        {
          title: "Mo (も) = De / Da",
          content: "'Mo' (も) takısı 'de/da' anlamına gelir. Bir önceki cümleye katılımı, benzerliği ifade eder.\n\nA: Watashi wa gakusei desu. (Ben öğrenciyim.)\nB: Watashi mo gakusei desu. (Ben de öğrenciyim.)\n\nDikkat: 'Wa' yerine 'mo' geldiğinde 'wa' düşer!",
          emoji: "✨"
        }
      ],
      xpReward: 10,
    },
    {
      id: "les-22-2",
      title: "To (と) - Ve / Birlikte",
      description: "İsimleri birleştiren ve 'birlikte' anlamına gelen 'to'.",
      icon: "info",
      type: "reading",
      slides: [
        {
          title: "To (と) = Ve / İle",
          content: "İki kullanımı var:\n1. İsimleri bağlar (ve): Ringo to mikan. (Elma ve mandalina.)\n2. Birlikte: Tomodachi to ikimasu. (Arkadaşımla gidiyorum.)\n\nCümle içindeki 've' için genellikle 'to' yeterliyken, fiil listelerinde 'te' formu kullanılır.",
          emoji: "🤝"
        }
      ],
      xpReward: 10,
    },
    {
      id: "les-22-3",
      title: "Renk Kelimeleri",
      description: "Japonca renkleri öğren.",
      icon: "palette",
      type: "flashcard",
      vocabItems: [
        { japanese: "あか", romaji: "aka", meaning_tr: "Kırmızı", emoji: "🔴" },
        { japanese: "あお", romaji: "ao", meaning_tr: "Mavi / Yeşil (geniş kullanım)", emoji: "🔵" },
        { japanese: "きいろ", romaji: "kiiro", meaning_tr: "Sarı", emoji: "🟡" },
        { japanese: "しろ", romaji: "shiro", meaning_tr: "Beyaz", emoji: "⚪" },
        { japanese: "くろ", romaji: "kuro", meaning_tr: "Siyah", emoji: "⚫" },
        { japanese: "みどり", romaji: "midori", meaning_tr: "Yeşil", emoji: "🟢" },
        { japanese: "ちゃいろ", romaji: "chairou", meaning_tr: "Kahverengi", emoji: "🟤" },
        { japanese: "むらさき", romaji: "murasaki", meaning_tr: "Mor", emoji: "🟣" },
      ],
      xpReward: 20,
    },
    {
      id: "les-22-4",
      title: "Gramer: Mo ve To ile Cümle",
      description: "'Mo' ve 'to' takılarını doğal konuşmada kullan.",
      icon: "architecture",
      type: "grammar",
      grammarItems: [
        {
          id: "gr-sec22-1",
          sentence: "わたし も にほんご が すき です",
          romaji: "Watashi mo nihongo ga suki desu.",
          translation: "Ben de Japoncayı seviyorum.",
          explanation: "'Mo' (も) 'de/da' anlamına gelir ve 'wa' takısını değiştirir. 'Watashi wa' → 'Watashi mo' olur.",
          breakdown: [
            { word: "わたし", romaji: "watashi", meaning: "ben" },
            { word: "も", romaji: "mo", meaning: "(de / da)", isParticle: true },
            { word: "にほんご", romaji: "nihongo", meaning: "Japonca" },
            { word: "が", romaji: "ga", meaning: "(özne eki)", isParticle: true },
            { word: "すき です", romaji: "suki desu", meaning: "severim" },
          ]
        },
        {
          id: "gr-sec22-2",
          sentence: "りんご と みかん を かいました",
          romaji: "Ringo to mikan wo kaimashita.",
          translation: "Elma ve mandalina satın aldım.",
          explanation: "'To' (と) isimleri bağlar: elma VE mandalina. 'Kaimashita' geçmiş zaman - sonraki derslerde detaylı göreceğiz!",
          breakdown: [
            { word: "りんご", romaji: "ringo", meaning: "elma" },
            { word: "と", romaji: "to", meaning: "(ve)", isParticle: true },
            { word: "みかん", romaji: "mikan", meaning: "mandalina" },
            { word: "を", romaji: "wo", meaning: "(nesne eki)", isParticle: true },
            { word: "かいました", romaji: "kaimashita", meaning: "satın aldım (geçmiş)" },
          ]
        }
      ],
      xpReward: 25,
    },
    {
      id: "les-22-5",
      title: "Bölüm 22 Kontrol Noktası",
      description: "Mo ve To takılarıyla renk kelimelerini test et.",
      icon: "flag",
      type: "checkpoint",
      xpReward: 35,
    }
  ],
};
