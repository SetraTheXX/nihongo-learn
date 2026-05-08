import { Section } from '../types/course';

export const chapter29: Section = {
  id: "sec-29",
  title: "Var/Yok: Aru ve Iru",
  description: "Canlı ve cansız varlıkların olduğunu Japonca'da nasıl ifade edersin?",
  emoji: "🐱",
  color: "green",
  lessons: [
    {
      id: "les-29-1",
      title: "Aru ve Iru Farkı",
      description: "Japonca'da 'var' iki farklı şekilde söylenir.",
      icon: "info",
      type: "reading",
      slides: [
        {
          title: "Aru (あります) - Cansız Var",
          content: "Cansız nesneler, bitkiler ve kavramlar için:\n\nHon ga arimasu. (Kitap var.)\nKouen ga arimasu. (Park var.)\nJikan ga arimasu. (Zaman var.)\n\nKural: İnsan ve hayvan dışı her şey için 'aru'.",
          emoji: "📚"
        },
        {
          title: "Iru (います) - Canlı Var",
          content: "İnsanlar ve hayvanlar için:\n\nNeko ga imasu. (Kedi var.)\nTomodachi ga imasu. (Arkadaş var.)\nSensei ga imasu. (Öğretmen var.)\n\nKural: Hareket edebilen canlılar için 'iru'.",
          emoji: "🐱"
        }
      ],
      xpReward: 10,
    },
    {
      id: "les-29-2",
      title: "Konum Kelimeleri",
      description: "Nerede? Sağda, solda, önde...",
      icon: "place",
      type: "flashcard",
      vocabItems: [
        { japanese: "みぎ", romaji: "migi", meaning_tr: "Sağ", emoji: "➡️" },
        { japanese: "ひだり", romaji: "hidari", meaning_tr: "Sol", emoji: "⬅️" },
        { japanese: "まえ", romaji: "mae", meaning_tr: "Ön", emoji: "⬆️" },
        { japanese: "うしろ", romaji: "ushiro", meaning_tr: "Arka", emoji: "⬇️" },
        { japanese: "うえ", romaji: "ue", meaning_tr: "Üst / Yukarı", emoji: "🆙" },
        { japanese: "した", romaji: "shita", meaning_tr: "Alt / Aşağı", emoji: "👇" },
        { japanese: "となり", romaji: "tonari", meaning_tr: "Yan / Komşu", emoji: "↔️" },
        { japanese: "なか", romaji: "naka", meaning_tr: "İçi / Ortası", emoji: "📦" },
      ],
      xpReward: 20,
    },
    {
      id: "les-29-3",
      title: "Gramer: Nerede Var?",
      description: "Aru/Iru ile konumu belirt.",
      icon: "architecture",
      type: "grammar",
      grammarItems: [
        {
          id: "gr-sec29-1",
          sentence: "つくえ の うえ に ほん が あります",
          romaji: "Tsukue no ue ni hon ga arimasu.",
          translation: "Masanın üstünde kitap var.",
          explanation: "'Tsukue no ue' = masanın üstü ('no' + konum kelimesi). 'Ni' var olma yerini belirtir. 'Ga arimasu' = var (cansız).",
          breakdown: [
            { word: "つくえ の うえ", romaji: "tsukue no ue", meaning: "masanın üstü" },
            { word: "に", romaji: "ni", meaning: "(varlık yeri eki)", isParticle: true },
            { word: "ほん", romaji: "hon", meaning: "kitap" },
            { word: "が", romaji: "ga", meaning: "(özne)", isParticle: true },
            { word: "あります", romaji: "arimasu", meaning: "var (cansız)" },
          ]
        },
        {
          id: "gr-sec29-2",
          sentence: "へや に ねこ が います",
          romaji: "Heya ni neko ga imasu.",
          translation: "Odada kedi var.",
          explanation: "'Heya' = oda. 'Neko' = kedi. Kedi canlı olduğu için 'imasu' kullanılır.",
          breakdown: [
            { word: "へや", romaji: "heya", meaning: "oda" },
            { word: "に", romaji: "ni", meaning: "(varlık yeri)", isParticle: true },
            { word: "ねこ", romaji: "neko", meaning: "kedi" },
            { word: "が", romaji: "ga", meaning: "(özne)", isParticle: true },
            { word: "います", romaji: "imasu", meaning: "var (canlı)" },
          ]
        },
        {
          id: "gr-sec29-3",
          sentence: "えき の まえ に コンビニ が あります",
          romaji: "Eki no mae ni konbini ga arimasu.",
          translation: "İstasyonun önünde bir market var.",
          explanation: "'Eki no mae' = istasyonun önü. 'Konbini' (コンビニ) = convenience store (market). Yön verirken çok kullanışlı.",
          breakdown: [
            { word: "えき の まえ", romaji: "eki no mae", meaning: "istasyonun önü" },
            { word: "に", romaji: "ni", meaning: "(varlık yeri)", isParticle: true },
            { word: "コンビニ", romaji: "konbini", meaning: "market / büfe" },
            { word: "が あります", romaji: "ga arimasu", meaning: "var (cansız)" },
          ]
        }
      ],
      xpReward: 25,
    },
    {
      id: "les-29-4",
      title: "Bölüm 29 Kontrol Noktası",
      description: "Aru/Iru farkını ve konum kelimelerini test et.",
      icon: "flag",
      type: "checkpoint",
      xpReward: 35,
    }
  ],
};
