import { Section } from '../types/course';

export const chapter24: Section = {
  id: "sec-24",
  title: "na-Sıfatları",
  description: "Suki, kirei ve genki ile Japonca'daki na-sıfatlarını keşfet",
  emoji: "✨",
  color: "pink",
  lessons: [
    {
      id: "les-24-1",
      title: "na-Sıfatları: Temel Liste",
      description: "En yaygın na-sıfatlar.",
      icon: "list",
      type: "flashcard",
      vocabItems: [
        { japanese: "すき", romaji: "suki", meaning_tr: "Sevgi / Hoşlanma (sevmek)", emoji: "❤️" },
        { japanese: "きらい", romaji: "kirai", meaning_tr: "Nefret / Hoşlanmama", emoji: "💔" },
        { japanese: "きれい", romaji: "kirei", meaning_tr: "Güzel / Temiz", emoji: "🌸" },
        { japanese: "げんき", romaji: "genki", meaning_tr: "Sağlıklı / Enerjik / İyi", emoji: "💪" },
        { japanese: "しずか", romaji: "shizuka", meaning_tr: "Sessiz / Sakin", emoji: "🤫" },
        { japanese: "にぎやか", romaji: "nigiyaka", meaning_tr: "Gürültülü / Canlı / Neşeli", emoji: "🎊" },
        { japanese: "べんり", romaji: "benri", meaning_tr: "Kullanışlı / Elverişli", emoji: "🛠️" },
        { japanese: "たいせつ", romaji: "taisetsu", meaning_tr: "Önemli / Değerli", emoji: "💎" },
        { japanese: "ゆうめい", romaji: "yuumei", meaning_tr: "Ünlü / Meşhur", emoji: "⭐" },
        { japanese: "ざんねん", romaji: "zannen", meaning_tr: "Üzücü / Ne yazık ki", emoji: "😢" },
      ],
      xpReward: 25,
    },
    {
      id: "les-24-2",
      title: "i-Sıfatı vs na-Sıfatı",
      description: "İki sıfat türünün farkı ne?",
      icon: "compare",
      type: "reading",
      slides: [
        {
          title: "İsim Önünde Nasıl Kullanılır?",
          content: "i-sıfatı: Doğrudan ismin önüne gelir.\nOishii ramen. (Lezzetli ramen.)\n\nna-sıfatı: İsmin önüne 'na' eklenerek gelir!\nKirei-NA machi. (Güzel şehir.)\nShizuka-NA heya. (Sessiz oda.)\n\nEğer 'na' ekini unutursan cümle hatalı olur!",
          emoji: "⚠️"
        },
        {
          title: "Yüklem Olarak",
          content: "Her iki sıfat da yüklem olarak 'desu' ile kullanılır:\n\ni-sıfat: Atsui desu. (Sıcak.)\nna-sıfat: Kirei desu. (Güzel.)\n\nYüklem olunca 'na' eklenmez!",
          emoji: "💡"
        }
      ],
      xpReward: 10,
    },
    {
      id: "les-24-3",
      title: "Gramer: na-Sıfatlarını Kullanma",
      description: "na-sıfatlarını seviyorum/nefret ediyorum ve vasfetme cümlelerinde kullan.",
      icon: "architecture",
      type: "grammar",
      grammarItems: [
        {
          id: "gr-sec24-1",
          sentence: "にほんご が だいすき です",
          romaji: "Nihongo ga daisuki desu.",
          translation: "Japoncayı çok seviyorum!",
          explanation: "'Daisuki' = çok seviyorum ('dai' = büyük/çok). 'Suki' ile 'ga' kullanılır, 'wa' değil! Bu önemli bir kural.",
          breakdown: [
            { word: "にほんご", romaji: "nihongo", meaning: "Japonca" },
            { word: "が", romaji: "ga", meaning: "(özne eki - suki ile kullanılır)", isParticle: true },
            { word: "だいすき", romaji: "daisuki", meaning: "çok seviyorum" },
            { word: "です", romaji: "desu", meaning: "dir" },
          ]
        },
        {
          id: "gr-sec24-2",
          sentence: "ここ は しずか な まち です",
          romaji: "Koko wa shizuka na machi desu.",
          translation: "Burası sessiz bir şehir.",
          explanation: "'Shizuka' na-sıfatı olduğu için isimden önce 'na' alır: 'shizuka-NA machi'. İsim olmasa 'na' olmaz.",
          breakdown: [
            { word: "ここ", romaji: "koko", meaning: "burası" },
            { word: "は", romaji: "wa", meaning: "(konu)", isParticle: true },
            { word: "しずか な", romaji: "shizuka na", meaning: "sessiz (isim önünde -na)" },
            { word: "まち", romaji: "machi", meaning: "şehir / kasaba" },
            { word: "です", romaji: "desu", meaning: "dir" },
          ]
        },
        {
          id: "gr-sec24-3",
          sentence: "おげんき です か？　はい、げんき です！",
          romaji: "O-genki desu ka? Hai, genki desu!",
          translation: "Nasılsınız? Evet, iyiyim!",
          explanation: "Günlük selamlaşma kalıbı. 'O-' öneki saygı ekler. Cevap basit: 'Genki desu!' (iyiyim!)",
          breakdown: [
            { word: "おげんき", romaji: "o-genki", meaning: "iyi/sağlıklı (saygılı)" },
            { word: "です か", romaji: "desu ka", meaning: "... misiniz?", isParticle: true },
            { word: "はい", romaji: "hai", meaning: "evet" },
            { word: "げんき です", romaji: "genki desu", meaning: "iyiyim" },
          ]
        }
      ],
      xpReward: 25,
    },
    {
      id: "les-24-4",
      title: "Bölüm 24 Kontrol Noktası",
      description: "Aşama 3 Final: Tüm sıfat türlerini test et.",
      icon: "emoji_events",
      type: "checkpoint",
      xpReward: 50,
    }
  ],
};
