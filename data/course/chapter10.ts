import { Section } from '../types/course';

export const chapter10: Section = {
  id: "sec-10",
  title: "Katakana Devam + Sayılar",
  description: "Sa, Ta, Na Katakana sıralarını öğren ve 1'den 10'a kadar sayıları keşfet",
  emoji: "🔢",
  color: "violet",
  lessons: [
    {
      id: "les-10-1",
      title: "Katakana: sa si su se so",
      description: "S sırasındaki Katakana harfleri.",
      icon: "sort_by_alpha",
      type: "flashcard",
      vocabItems: [
        { japanese: "サ", romaji: "sa", meaning_tr: "sa" },
        { japanese: "シ", romaji: "shi", meaning_tr: "shi" },
        { japanese: "ス", romaji: "su", meaning_tr: "su" },
        { japanese: "セ", romaji: "se", meaning_tr: "se" },
        { japanese: "ソ", romaji: "so", meaning_tr: "so" },
      ],
      xpReward: 20,
    },
    {
      id: "les-10-2",
      title: "Katakana: ta chi tsu te to",
      description: "T sırasındaki Katakana harfleri.",
      icon: "sort_by_alpha",
      type: "flashcard",
      vocabItems: [
        { japanese: "タ", romaji: "ta", meaning_tr: "ta" },
        { japanese: "チ", romaji: "chi", meaning_tr: "chi" },
        { japanese: "ツ", romaji: "tsu", meaning_tr: "tsu" },
        { japanese: "テ", romaji: "te", meaning_tr: "te" },
        { japanese: "ト", romaji: "to", meaning_tr: "to" },
      ],
      xpReward: 20,
    },
    {
      id: "les-10-3",
      title: "Katakana: na ni nu ne no",
      description: "N sırasındaki Katakana harfleri.",
      icon: "sort_by_alpha",
      type: "flashcard",
      vocabItems: [
        { japanese: "ナ", romaji: "na", meaning_tr: "na" },
        { japanese: "ニ", romaji: "ni", meaning_tr: "ni" },
        { japanese: "ヌ", romaji: "nu", meaning_tr: "nu" },
        { japanese: "ネ", romaji: "ne", meaning_tr: "ne" },
        { japanese: "ノ", romaji: "no", meaning_tr: "no" },
      ],
      xpReward: 20,
    },
    {
      id: "les-10-4",
      title: "Sayılar: 1-5",
      description: "Japonca'da ilk beş sayıyı öğren.",
      icon: "looks_one",
      type: "flashcard",
      vocabItems: [
        { japanese: "いち", romaji: "ichi", meaning_tr: "1 (Bir)", emoji: "1️⃣" },
        { japanese: "に", romaji: "ni", meaning_tr: "2 (İki)", emoji: "2️⃣" },
        { japanese: "さん", romaji: "san", meaning_tr: "3 (Üç)", emoji: "3️⃣" },
        { japanese: "し / よん", romaji: "shi / yon", meaning_tr: "4 (Dört)", emoji: "4️⃣" },
        { japanese: "ご", romaji: "go", meaning_tr: "5 (Beş)", emoji: "5️⃣" },
      ],
      xpReward: 20,
    },
    {
      id: "les-10-5",
      title: "Sayılar: 6-10",
      description: "6'dan 10'a kadar sayılar.",
      icon: "looks_6",
      type: "flashcard",
      vocabItems: [
        { japanese: "ろく", romaji: "roku", meaning_tr: "6 (Altı)", emoji: "6️⃣" },
        { japanese: "しち / なな", romaji: "shichi / nana", meaning_tr: "7 (Yedi)", emoji: "7️⃣" },
        { japanese: "はち", romaji: "hachi", meaning_tr: "8 (Sekiz)", emoji: "8️⃣" },
        { japanese: "く / きゅう", romaji: "ku / kyuu", meaning_tr: "9 (Dokuz)", emoji: "9️⃣" },
        { japanese: "じゅう", romaji: "juu", meaning_tr: "10 (On)", emoji: "🔟" },
      ],
      xpReward: 20,
    },
    {
      id: "les-10-6",
      title: "Gramer: Sayılarla Cümle",
      description: "Sayıları kullanarak basit cümleler kur.",
      icon: "calculate",
      type: "grammar",
      grammarItems: [
        {
          id: "gr-sec10-1",
          sentence: "りんご が さん つ あります",
          romaji: "Ringo ga san-tsu arimasu.",
          translation: "Üç tane elma var.",
          explanation: "'Tsu' (つ) sayaç son ekidir. Genel eşyalar için 1'den 9'a kadar kullanılır (hitotsu, futatsu, mittsu...).",
          breakdown: [
            { word: "りんご", romaji: "ringo", meaning: "elma" },
            { word: "が", romaji: "ga", meaning: "(özne eki)", isParticle: true },
            { word: "さん つ", romaji: "san-tsu", meaning: "üç tane" },
            { word: "あります", romaji: "arimasu", meaning: "var" },
          ]
        },
        {
          id: "gr-sec10-2",
          sentence: "なんさい です か",
          romaji: "Nan-sai desu ka?",
          translation: "Kaç yaşındasınız?",
          explanation: "'Nan-sai' = 'kaç yaş'. Cevap için sayı + sai (yaş) kullanılır. Örn: Nijuu-go-sai desu. (25 yaşındayım.)",
          breakdown: [
            { word: "なん", romaji: "nan", meaning: "kaç" },
            { word: "さい", romaji: "sai", meaning: "yaş (sayaç)" },
            { word: "です か", romaji: "desu ka", meaning: "... mısınız?", isParticle: true },
          ]
        }
      ],
      xpReward: 25,
    },
    {
      id: "les-10-7",
      title: "Bölüm 10 Kontrol Noktası",
      description: "Katakana Sa-Ta-Na sıralarını ve sayıları test et.",
      icon: "flag",
      type: "checkpoint",
      xpReward: 35,
    }
  ],
};
