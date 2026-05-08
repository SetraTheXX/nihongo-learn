import { Section } from '../types/course';

export const chapter9: Section = {
  id: "sec-9",
  title: "Çevremdeki İnsanlar",
  description: "İsimleri birbirine bağlamayı ve ilk Katakana harflerini öğren",
  emoji: "🧑‍🤝‍🧑",
  color: "indigo",
  lessons: [
    {
      id: "les-9-1",
      title: "Gramer: İsimleri Bağlama (-no)",
      description: "Japonca'da sahiplik ve aidiyet belirten 'no' edatını öğren.",
      icon: "link",
      type: "grammar",
      grammarItems: [
        {
          id: "gr-sec9-1",
          sentence: "わたし の ともだち は トルコじん です",
          romaji: "watashi no tomodachi wa torukojin desu",
          translation: "Benim arkadaşım Türk.",
          explanation: "'No' (の) edatı, İngilizcedeki 's veya Türkçe'deki 'ın/in' tamlaması gibi çalışır. İki ismi birbirine bağlar (Ben + in = Benim).",
          breakdown: [
            { word: "わたし", romaji: "watashi", meaning: "Ben" },
            { word: "の", romaji: "no", meaning: "(sahiplik / tamlama)", isParticle: true },
            { word: "ともだち", romaji: "tomodachi", meaning: "Arkadaş" },
            { word: "は", romaji: "wa", meaning: "(konu)", isParticle: true },
            { word: "トルコじん", romaji: "torukojin", meaning: "Türk" },
            { word: "です", romaji: "desu", meaning: "dir", isParticle: true }
          ]
        },
        {
          id: "gr-sec9-2",
          sentence: "にほんご の せんせい",
          romaji: "nihongo no sensei",
          translation: "Japonca öğretmeni",
          explanation: "İki ismi birleştirirken araya her zaman 'no' girer. Japonca (isim) + Öğretmen (isim) = Japonca'nın öğretmeni -> Japonca Öğretmeni.",
          breakdown: [
            { word: "にほんご", romaji: "nihongo", meaning: "Japonca" },
            { word: "の", romaji: "no", meaning: "(tamlama)", isParticle: true },
            { word: "せんせい", romaji: "sensei", meaning: "Öğretmen" }
          ]
        }
      ],
      xpReward: 25,
    },
    {
      id: "les-9-2",
      title: "Çevremdeki Kişiler",
      description: "Ailen veya arkadaşların hakkında kelimeler.",
      icon: "people",
      type: "flashcard",
      vocabItems: [
        { japanese: "ともだち", romaji: "tomodachi", meaning_tr: "Arkadaş", emoji: "🤝" },
        { japanese: "かぞく", romaji: "kazoku", meaning_tr: "Aile", emoji: "👨‍👩‍👧‍👦" },
        { japanese: "ちち", romaji: "chichi", meaning_tr: "Baba (Kendi Baban)", emoji: "👨" },
        { japanese: "はは", romaji: "haha", meaning_tr: "Anne (Kendi Annen)", emoji: "👩" },
      ],
      xpReward: 20,
    },
    {
      id: "les-9-3",
      title: "Katakana Kuralları",
      description: "Katakana alfabesine giriş.",
      icon: "info",
      type: "reading",
      slides: [
        {
          title: "Katakana Neden Var?",
          content: "Japonya'ya dışarıdan giren yabancı kelimeleri, özellikle ülke isimleri, yabancı isimler (örn: Ali, Mary), şirket isimleri gibi kelimeleri yazmak için kullanılır.",
          emoji: "🌍"
        },
        {
          title: "Köşeli ve Keskin",
          content: "Katakana karakterleri, oldukça kıvrımlı olan Hiragana'nın aksine çok daha köşeli ve keskin hatlara sahiptir.",
          emoji: "📐"
        }
      ],
      xpReward: 15,
    },
    {
      id: "les-9-4",
      title: "Katakana: a i u e o",
      description: "Sesli harflerin Katakana yazılışları.",
      icon: "sort_by_alpha",
      type: "flashcard",
      vocabItems: [
        { japanese: "ア", romaji: "a", meaning_tr: "a" },
        { japanese: "イ", romaji: "i", meaning_tr: "i" },
        { japanese: "ウ", romaji: "u", meaning_tr: "u" },
        { japanese: "エ", romaji: "e", meaning_tr: "e" },
        { japanese: "オ", romaji: "o", meaning_tr: "o" },
      ],
      xpReward: 20,
    },
    {
      id: "les-9-5",
      title: "Katakana: ka ki ku ke ko",
      description: "K sırasındaki Katakana harfleri.",
      icon: "sort_by_alpha",
      type: "flashcard",
      vocabItems: [
        { japanese: "カ", romaji: "ka", meaning_tr: "ka (Hiragana'ya çok benzer)" },
        { japanese: "キ", romaji: "ki", meaning_tr: "ki" },
        { japanese: "ク", romaji: "ku", meaning_tr: "ku" },
        { japanese: "ケ", romaji: "ke", meaning_tr: "ke" },
        { japanese: "コ", romaji: "ko", meaning_tr: "ko" },
      ],
      xpReward: 20,
    },
    {
      id: "les-9-6",
      title: "Bölüm Sonu Değerlendirmesi",
      description: "No tamlamasını ve ilk Katakana'ları test et.",
      icon: "flag",
      type: "checkpoint",
      xpReward: 30,
    }
  ]
};
