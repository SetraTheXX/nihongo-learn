import { Section } from '../types/course';

export const chapter13: Section = {
  id: "sec-13",
  title: "Kono, Sono, Ano + Nani",
  description: "İşaret sıfatlarıyla eşyaları nitele ve 'ne?' diye sor",
  emoji: "🏷️",
  color: "orange",
  lessons: [
    {
      id: "les-13-1",
      title: "Katakana: ma mi mu me mo",
      description: "M sırasındaki Katakana harfleri.",
      icon: "sort_by_alpha",
      type: "flashcard",
      vocabItems: [
        { japanese: "マ", romaji: "ma", meaning_tr: "ma" },
        { japanese: "ミ", romaji: "mi", meaning_tr: "mi" },
        { japanese: "ム", romaji: "mu", meaning_tr: "mu" },
        { japanese: "メ", romaji: "me", meaning_tr: "me" },
        { japanese: "モ", romaji: "mo", meaning_tr: "mo" },
      ],
      xpReward: 15,
    },
    {
      id: "les-13-2",
      title: "Kono / Sono / Ano",
      description: "Sıfat olarak işaret kelimeleri.",
      icon: "label",
      type: "reading",
      slides: [
        {
          title: "İsim Önünde Kullanım",
          content: "Kore/Sore/Are tek başına durur (bu, şu, o). Ama bir ismi nitelemek istersen önüne gelirler:\n\nKono hon = Bu kitap (bana yakın)\nSono hon = Şu kitap (sana yakın)\nAno hon = O kitap (ikimizden uzak)",
          emoji: "📖"
        },
        {
          title: "Fark Nedir?",
          content: "Kore wa hon desu = Bu bir kitap.\nKono hon wa omoshiroi desu = Bu kitap ilginç.\n\n'Kore' isimsiz kullanılır. 'Kono' + isim birlikte kullanılır.",
          emoji: "💡"
        }
      ],
      xpReward: 10,
    },
    {
      id: "les-13-3",
      title: "Soru Kelimeleri",
      description: "Japonca'daki temel soru kelimeleri.",
      icon: "help",
      type: "flashcard",
      vocabItems: [
        { japanese: "なに / なん", romaji: "nani / nan", meaning_tr: "Ne?", emoji: "❓" },
        { japanese: "だれ", romaji: "dare", meaning_tr: "Kim?", emoji: "🧑" },
        { japanese: "どこ", romaji: "doko", meaning_tr: "Nerede?", emoji: "📍" },
        { japanese: "いつ", romaji: "itsu", meaning_tr: "Ne zaman?", emoji: "🕐" },
        { japanese: "どうして / なぜ", romaji: "doushite / naze", meaning_tr: "Neden? / Niçin?", emoji: "🤔" },
        { japanese: "どんな", romaji: "donna", meaning_tr: "Nasıl bir? / Ne tür?", emoji: "💭" },
      ],
      xpReward: 20,
    },
    {
      id: "les-13-4",
      title: "Gramer: Kono + İsim",
      description: "Kono/Sono/Ano'yu cümlede kullan.",
      icon: "architecture",
      type: "grammar",
      grammarItems: [
        {
          id: "gr-sec13-1",
          sentence: "この ほん は おもしろい です",
          romaji: "Kono hon wa omoshiroi desu.",
          translation: "Bu kitap ilginç.",
          explanation: "'Kono' (この) doğrudan ismin önüne gelir. 'Omoshiroi' (ilginç/eğlenceli) bir i-sıfatıdır.",
          breakdown: [
            { word: "この", romaji: "kono", meaning: "bu (isim önünde)" },
            { word: "ほん", romaji: "hon", meaning: "kitap" },
            { word: "は", romaji: "wa", meaning: "(konu)", isParticle: true },
            { word: "おもしろい", romaji: "omoshiroi", meaning: "ilginç" },
            { word: "です", romaji: "desu", meaning: "dir" },
          ]
        },
        {
          id: "gr-sec13-2",
          sentence: "あの ひと は だれ です か",
          romaji: "Ano hito wa dare desu ka?",
          translation: "O kişi kim?",
          explanation: "'Hito' (ひと) = insan/kişi. 'Ano hito' = o kişi. Biri hakkında bilgi soruyoruz.",
          breakdown: [
            { word: "あの", romaji: "ano", meaning: "o (uzaktaki, isim önünde)" },
            { word: "ひと", romaji: "hito", meaning: "kişi" },
            { word: "は", romaji: "wa", meaning: "(konu)", isParticle: true },
            { word: "だれ", romaji: "dare", meaning: "kim" },
            { word: "です か", romaji: "desu ka", meaning: "... mi?", isParticle: true },
          ]
        }
      ],
      xpReward: 25,
    },
    {
      id: "les-13-5",
      title: "Bölüm 13 Kontrol Noktası",
      description: "Kono/Sono/Ano ve soru kelimelerini test et.",
      icon: "flag",
      type: "checkpoint",
      xpReward: 30,
    }
  ],
};
