import { Section } from '../types/course';

export const chapter23: Section = {
  id: "sec-23",
  title: "i-Sıfatları",
  description: "Japonca'nın '-i' ile biten sıfatlarını ve çekimlerini öğren",
  emoji: "🌡️",
  color: "orange",
  lessons: [
    {
      id: "les-23-1",
      title: "i-Sıfatları: Temel Liste",
      description: "En yaygın i-sıfatlar.",
      icon: "list",
      type: "flashcard",
      vocabItems: [
        { japanese: "あつい", romaji: "atsui", meaning_tr: "Sıcak (hava/eşya)", emoji: "🔥" },
        { japanese: "さむい", romaji: "samui", meaning_tr: "Soğuk (hava)", emoji: "🥶" },
        { japanese: "つめたい", romaji: "tsumetai", meaning_tr: "Soğuk (içecek/yüzey)", emoji: "🧊" },
        { japanese: "おおきい", romaji: "ookii", meaning_tr: "Büyük", emoji: "🐘" },
        { japanese: "ちいさい", romaji: "chiisai", meaning_tr: "Küçük", emoji: "🐭" },
        { japanese: "たかい", romaji: "takai", meaning_tr: "Pahalı / Yüksek", emoji: "💸" },
        { japanese: "やすい", romaji: "yasui", meaning_tr: "Ucuz / Kolay", emoji: "🏷️" },
        { japanese: "おいしい", romaji: "oishii", meaning_tr: "Lezzetli", emoji: "😋" },
        { japanese: "まずい", romaji: "mazui", meaning_tr: "Lezzetsiz / Berbat", emoji: "🤢" },
        { japanese: "たのしい", romaji: "tanoshii", meaning_tr: "Eğlenceli / Zevkli", emoji: "🎉" },
        { japanese: "つまらない", romaji: "tsumaranai", meaning_tr: "Sıkıcı / İlgisiz", emoji: "😑" },
        { japanese: "むずかしい", romaji: "muzukashii", meaning_tr: "Zor", emoji: "😰" },
        { japanese: "やさしい", romaji: "yasashii", meaning_tr: "Kolay / Nazik", emoji: "😊" },
      ],
      xpReward: 25,
    },
    {
      id: "les-23-2",
      title: "i-Sıfatlarının Çekimi",
      description: "Olumlu, olumsuz ve geçmiş halleri.",
      icon: "info",
      type: "reading",
      slides: [
        {
          title: "i-Sıfatı Çekimi",
          content: "i-sıfatları 4 halde çekilir:\n\n• Olumlu: atsui desu (sıcak)\n• Olumsuz: atsuku nai desu (sıcak değil)\n• Geçmiş Olumlu: atsukatta desu (sıcaktı)\n• Geçmiş Olumsuz: atsuku nakatta desu (sıcak değildi)\n\nKural: '-i' son eki düşer, yerine ek gelir.",
          emoji: "📝"
        },
        {
          title: "İsimden Önce",
          content: "i-sıfatlar doğrudan ismin önüne gelir:\n\nAtsui hi (Sıcak gün)\nOishii tabemono (Lezzetli yemek)\nChiisai neko (Küçük kedi)\n\nBu formda değişim olmaz.",
          emoji: "🔤"
        }
      ],
      xpReward: 10,
    },
    {
      id: "les-23-3",
      title: "Gramer: i-Sıfatlarını Kullanma",
      description: "i-Sıfatlarını olumlu ve olumsuz cümlelerde uygula.",
      icon: "architecture",
      type: "grammar",
      grammarItems: [
        {
          id: "gr-sec23-1",
          sentence: "きょう は あつい です ね",
          romaji: "Kyou wa atsui desu ne.",
          translation: "Bugün sıcak, değil mi?",
          explanation: "'Kyou' = bugün. i-sıfatı + 'desu' = kibar form. 'Ne' onay arar. Hava durumu konuşması için çok kullanılır!",
          breakdown: [
            { word: "きょう", romaji: "kyou", meaning: "bugün" },
            { word: "は", romaji: "wa", meaning: "(konu)", isParticle: true },
            { word: "あつい", romaji: "atsui", meaning: "sıcak" },
            { word: "です", romaji: "desu", meaning: "dir" },
            { word: "ね", romaji: "ne", meaning: "değil mi?", isParticle: true },
          ]
        },
        {
          id: "gr-sec23-2",
          sentence: "この すし は おいしく ない です",
          romaji: "Kono sushi wa oishiku nai desu.",
          translation: "Bu sushi lezzetli değil.",
          explanation: "Olumsuz form: 'oishii' → 'oishiku' (son -i düşer, -ku eklenir) → 'nai desu' eklenir.",
          breakdown: [
            { word: "この すし", romaji: "kono sushi", meaning: "bu sushi" },
            { word: "は", romaji: "wa", meaning: "(konu)", isParticle: true },
            { word: "おいしく", romaji: "oishiku", meaning: "lezzetli (sıfat kökü)" },
            { word: "ない です", romaji: "nai desu", meaning: "değil (olumsuz)" },
          ]
        },
        {
          id: "gr-sec23-3",
          sentence: "にほんご は むずかしい です か",
          romaji: "Nihongo wa muzukashii desu ka?",
          translation: "Japonca zor mu?",
          explanation: "Sıfatla soru: sıfat + 'desu ka'. Cevap: 'Hai, muzukashii desu.' veya 'Iie, yasashii desu.'",
          breakdown: [
            { word: "にほんご", romaji: "nihongo", meaning: "Japonca" },
            { word: "は", romaji: "wa", meaning: "(konu)", isParticle: true },
            { word: "むずかしい", romaji: "muzukashii", meaning: "zor" },
            { word: "です か", romaji: "desu ka", meaning: "... mi?", isParticle: true },
          ]
        }
      ],
      xpReward: 25,
    },
    {
      id: "les-23-4",
      title: "Bölüm 23 Kontrol Noktası",
      description: "i-Sıfatlarını ve çekimlerini test et.",
      icon: "flag",
      type: "checkpoint",
      xpReward: 35,
    }
  ],
};
