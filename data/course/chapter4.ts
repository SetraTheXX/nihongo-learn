import { Section } from '../types/course';

export const chapter4: Section = {
  id: "sec-4",
  title: "Ülkeler ve Milliyetler",
  description: "Olumsuz cümleler kurmayı, ülkeleri ve milliyetini söylemeyi öğren",
  emoji: "🌍",
  color: "cyan",
  lessons: [
    {
      id: "les-4-1",
      title: "Gramer: Olumsuz Cümleler",
      description: "Japonca'daisim cümlelerini nasıl olumsuz yapacağını öğren.",
      icon: "block",
      type: "grammar",
      grammarItems: [
        {
          id: "gr-sec4-1",
          sentence: "わたし は がくせい じゃ ない です",
          romaji: "watashi wa gakusei ja nai desu",
          translation: "Ben öğrenci değilim.",
          explanation: "'desu' (dır/dir) kelimesinin olumsuzu 'ja nai desu'dur. İsimlerden sonra gelerek '...değil' anlamı katar.",
          breakdown: [
            { word: "わたし", romaji: "watashi", meaning: "Ben" },
            { word: "は", romaji: "wa", meaning: "(konu)", isParticle: true },
            { word: "がくせい", romaji: "gakusei", meaning: "Öğrenci" },
            { word: "じゃ ない です", romaji: "ja nai desu", meaning: "değilim", isParticle: true }
          ]
        },
        {
          id: "gr-sec4-2",
          sentence: "それ は くるま じゃ ない です",
          romaji: "sore wa kuruma ja nai desu",
          translation: "O araba değil.",
          explanation: "Nesneleri reddetmek için de aynı kalıbı kullanırız.",
          breakdown: [
            { word: "それ", romaji: "sore", meaning: "O (şu)" },
            { word: "は", romaji: "wa", meaning: "(konu)", isParticle: true },
            { word: "くるま", romaji: "kuruma", meaning: "Araba" },
            { word: "じゃ ない です", romaji: "ja nai desu", meaning: "değildir", isParticle: true }
          ]
        }
      ],
      xpReward: 25,
    },
    {
      id: "les-4-2",
      title: "Ülke Adları",
      description: "Dünyadaki bazı ülkelerin Japonca isimleri",
      icon: "flag",
      type: "flashcard",
      vocabItems: [
        { japanese: "にほん", romaji: "nihon", meaning_tr: "Japonya", emoji: "🇯🇵" },
        { japanese: "トルコ", romaji: "toruko", meaning_tr: "Türkiye", emoji: "🇹🇷" },
        { japanese: "アメリカ", romaji: "amerika", meaning_tr: "Amerika", emoji: "🇺🇸" },
        { japanese: "イギリス", romaji: "igirisu", meaning_tr: "İngiltere", emoji: "🇬🇧" },
        { japanese: "スペイン", romaji: "supein", meaning_tr: "İspanya", emoji: "🇪🇸" }
      ],
      xpReward: 20,
    },
    {
      id: "les-4-3",
      title: "Hiragana: sa shi su se so",
      description: "S sırasındaki Hiragana harflerini öğren.",
      icon: "draw",
      type: "flashcard",
      vocabItems: [
        { japanese: "さ", romaji: "sa", meaning_tr: "sa" },
        { japanese: "し", romaji: "shi", meaning_tr: "shi (şi okunur)" },
        { japanese: "す", romaji: "su", meaning_tr: "su" },
        { japanese: "せ", romaji: "se", meaning_tr: "se" },
        { japanese: "そ", romaji: "so", meaning_tr: "so" },
      ],
      xpReward: 20,
    },
    {
      id: "les-4-4",
      title: "Milliyetini Söyleme",
      description: "Ülke isimlerine '-jin' ekleyerek milliyet belirt.",
      icon: "public",
      type: "grammar",
      grammarItems: [
        {
          id: "gr-sec4-3",
          sentence: "わたし は トルコじん です",
          romaji: "watashi wa torukojin desu",
          translation: "Ben Türküm.",
          explanation: "Ülke isminin sonuna 'jin' (人 - İnsan) getirilirse milliyet elde edilir. (Toruko + jin = Türk)",
          breakdown: [
            { word: "わたし", romaji: "watashi", meaning: "Ben" },
            { word: "は", romaji: "wa", meaning: "(konu)", isParticle: true },
            { word: "トルコじん", romaji: "torukojin", meaning: "Türk" },
            { word: "です", romaji: "desu", meaning: "dir", isParticle: true }
          ]
        },
        {
          id: "gr-sec4-4",
          sentence: "あの ひと は アメリカじん です か",
          romaji: "ano hito wa amerikajin desu ka",
          translation: "Şu kişi Amerikan mı?",
          explanation: "Soru sormak için cümlenin sonuna '-ka' koyarız.",
          breakdown: [
            { word: "あの", romaji: "ano", meaning: "Şu" },
            { word: "ひと", romaji: "hito", meaning: "Kişi" },
            { word: "は", romaji: "wa", meaning: "(konu)", isParticle: true },
            { word: "アメリカじん", romaji: "amerikajin", meaning: "Amerikan" },
            { word: "です", romaji: "desu", meaning: "dır", isParticle: true },
            { word: "か", romaji: "ka", meaning: "(soru)", isParticle: true }
          ]
        }
      ],
      xpReward: 25,
    },
    {
      id: "les-4-5",
      title: "Hiragana: ta chi tsu te to",
      description: "T sırasındaki Hiragana harflerini öğren.",
      icon: "draw",
      type: "flashcard",
      vocabItems: [
        { japanese: "た", romaji: "ta", meaning_tr: "ta" },
        { japanese: "ち", romaji: "chi", meaning_tr: "chi (çi okunur)" },
        { japanese: "つ", romaji: "tsu", meaning_tr: "tsu" },
        { japanese: "て", romaji: "te", meaning_tr: "te" },
        { japanese: "と", romaji: "to", meaning_tr: "to" },
      ],
      xpReward: 20,
    },
    {
      id: "les-4-6",
      title: "Bölüm Sonu Değerlendirmesi",
      description: "Ülkeler, milliyetler ve t/s sıralarını test et.",
      icon: "flag",
      type: "checkpoint",
      xpReward: 30,
    }
  ]
};
