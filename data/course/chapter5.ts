import { Section } from '../types/course';

export const chapter5: Section = {
  id: "sec-5",
  title: "Kendinden Bahsetmek ve Vedalaşma",
  description: "Zamirleri, vedalaşma ifadelerini ve Japonya'daki vücut dilini öğren",
  emoji: "👋",
  color: "pink",
  lessons: [
    {
      id: "les-5-1",
      title: "Vedalaşma İlkeleri",
      description: "Japoncada farklı seviyelerde vedalaşma kelimelerini öğren.",
      icon: "waving_hand",
      type: "flashcard",
      vocabItems: [
        { japanese: "さようなら", romaji: "sayounara", meaning_tr: "Hoşça kal / Elveda (Uzun süreli ayrılıkta)", emoji: "👋" },
        { japanese: "じゃあ、また", romaji: "jaa, mata", meaning_tr: "Sonra görüşürüz (Arkadaşça)", emoji: "✌️" },
        { japanese: "またあした", romaji: "mata ashita", meaning_tr: "Yarın görüşürüz", emoji: "🌅" },
        { japanese: "ばいばい", romaji: "baibai", meaning_tr: "Bay bay", emoji: "👋" },
        { japanese: "おやすみなさい", romaji: "oyasumi nasai", meaning_tr: "İyi geceler", emoji: "💤" }
      ],
      xpReward: 20,
    },
    {
      id: "les-5-2",
      title: "'Ben' için Farklı Biçimler",
      description: "Japoncada cinsiyete ve samimiyete göre farklı 'Ben' kullanımları.",
      icon: "person",
      type: "grammar",
      grammarItems: [
        {
          id: "gr-sec5-1",
          sentence: "わたし は ジン です",
          romaji: "watashi wa Jin desu",
          translation: "Ben Jin.",
          explanation: "'Watashi' (私), hem erkekler hem de kadınlar tarafından kullanılabilen en güvenli ve standart 'ben' kelimesidir.",
          breakdown: [
            { word: "わたし", romaji: "watashi", meaning: "Ben (Standart)" },
            { word: "は", romaji: "wa", meaning: "(konu)", isParticle: true },
            { word: "ジン", romaji: "Jin", meaning: "Jin (İsim)" },
            { word: "です", romaji: "desu", meaning: "im", isParticle: true }
          ]
        },
        {
          id: "gr-sec5-2",
          sentence: "ぼく は トルコじん です",
          romaji: "boku wa torukojin desu",
          translation: "Ben Türküm.",
          explanation: "'Boku' (僕), genellikle erkekler tarafından kullanılan, 'watashi'ye göre biraz daha rahat ama yine de oldukça kibar bir ifadedir.",
          breakdown: [
            { word: "ぼく", romaji: "boku", meaning: "Ben (Erkek, samimi/kibar)" },
            { word: "は", romaji: "wa", meaning: "(konu)", isParticle: true },
            { word: "トルコじん", romaji: "torukojin", meaning: "Türk" },
            { word: "です", romaji: "desu", meaning: "üm", isParticle: true }
          ]
        },
        {
          id: "gr-sec5-3",
          sentence: "おれ は まける じゃ ない",
          romaji: "ore wa makeru ja nai",
          translation: "Ben kaybetmeyeceğim.",
          explanation: "'Ore' (俺), erkekler arasında patronluk taslayan ya da çok samimi dostlar arasında kullanılan kaba bir 'ben' biçimidir. Anime'lerde sıkça duyulur.",
          breakdown: [
            { word: "おれ", romaji: "ore", meaning: "Ben (Erkek, Kaba/Baskın)" },
            { word: "は", romaji: "wa", meaning: "(konu)", isParticle: true }
          ]
        }
      ],
      xpReward: 25,
    },
    {
      id: "les-5-3",
      title: "Hiragana: na ni nu ne no",
      description: "N sırasındaki Hiragana harflerini öğren.",
      icon: "draw",
      type: "flashcard",
      vocabItems: [
        { japanese: "な", romaji: "na", meaning_tr: "na" },
        { japanese: "に", romaji: "ni", meaning_tr: "ni" },
        { japanese: "ぬ", romaji: "nu", meaning_tr: "nu" },
        { japanese: "ね", romaji: "ne", meaning_tr: "ne" },
        { japanese: "の", romaji: "no", meaning_tr: "no" },
      ],
      xpReward: 20,
    },
    {
      id: "les-5-4",
      title: "Kültür: El Hareketleri",
      description: "Japonya'da vücut dili nasıl kullanılır?",
      icon: "pan_tool",
      type: "reading", 
      slides: [
        {
          title: "Parmağı Burna Doğrultmak",
          content: "Batı'da kendimizi işaret ederken genelde göğsümüzü gösteririz. Japonya'da ise insanlar 'ben' derken işaret parmaklarıyla kendi burunlarını işaret ederler.",
          emoji: "👃"
        },
        {
          title: "Kolları 'X' Yapmak",
          content: "Kolları göğüs hizasında veya başın üzerinde çarpı (X) şekline getirmek 'Hayır', 'Yanlış' veya 'Yasak' anlamına gelir. 'Dame' (だめ) denir.",
          emoji: "🙅"
        },
        {
          title: "Elleri Birleştirip Özür Dilemek",
          content: "Yemekten önce 'Itadakimasu' derken yapılan elleri birleştirme hareketi, aynı zamanda minnettarlık veya af dilerken de (Sumimasen!) kullanılır.",
          emoji: "🙏"
        }
      ],
      xpReward: 15,
    },
    {
      id: "les-5-5",
      title: "Hiragana: ha hi fu he ho",
      description: "H sırasındaki Hiragana harflerini öğren.",
      icon: "draw",
      type: "flashcard",
      vocabItems: [
        { japanese: "は", romaji: "ha", meaning_tr: "ha (Ek olarak kullanıldığında 'wa' okunur)" },
        { japanese: "ひ", romaji: "hi", meaning_tr: "hi" },
        { japanese: "ふ", romaji: "fu", meaning_tr: "fu (hu yerine fu okunur)" },
        { japanese: "へ", romaji: "he", meaning_tr: "he (Ek olarak kullanıldığında 'e' okunur)" },
        { japanese: "ほ", romaji: "ho", meaning_tr: "ho" },
      ],
      xpReward: 20,
    },
    {
      id: "les-5-6",
      title: "Bölüm Sonu Değerlendirmesi",
      description: "Zamirler, kelimeler ve harfleri test et.",
      icon: "flag",
      type: "checkpoint",
      xpReward: 30,
    }
  ]
};
