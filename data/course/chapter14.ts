import { Section } from '../types/course';

export const chapter14: Section = {
  id: "sec-14",
  title: "Aile Kelimeleri",
  description: "Kendi ailen ve başkasının ailesi hakkında nasıl konuşursun?",
  emoji: "👨‍👩‍👧‍👦",
  color: "rose",
  lessons: [
    {
      id: "les-14-1",
      title: "Katakana: ya yu yo",
      description: "Y sırasındaki Katakana harfleri.",
      icon: "sort_by_alpha",
      type: "flashcard",
      vocabItems: [
        { japanese: "ヤ", romaji: "ya", meaning_tr: "ya" },
        { japanese: "ユ", romaji: "yu", meaning_tr: "yu" },
        { japanese: "ヨ", romaji: "yo", meaning_tr: "yo" },
      ],
      xpReward: 10,
    },
    {
      id: "les-14-2",
      title: "Kendi Aile Üyelerin",
      description: "Kendi ailen hakkında konuşurken kullanılan kelimeler (alçakgönüllü).",
      icon: "home",
      type: "flashcard",
      vocabItems: [
        { japanese: "ちち", romaji: "chichi", meaning_tr: "Babam", emoji: "👨" },
        { japanese: "はは", romaji: "haha", meaning_tr: "Annem", emoji: "👩" },
        { japanese: "あに", romaji: "ani", meaning_tr: "Ağabeyim", emoji: "👦" },
        { japanese: "あね", romaji: "ane", meaning_tr: "Ablam", emoji: "👧" },
        { japanese: "おとうと", romaji: "otouto", meaning_tr: "Erkek kardeşim (küçük)", emoji: "👶" },
        { japanese: "いもうと", romaji: "imouto", meaning_tr: "Kız kardeşim (küçük)", emoji: "👶" },
        { japanese: "かぞく", romaji: "kazoku", meaning_tr: "Aile (kendi)", emoji: "🏠" },
      ],
      xpReward: 20,
    },
    {
      id: "les-14-3",
      title: "Başkasının Aile Üyeleri",
      description: "Başkasının ailesi hakkında konuşurken kullanılan saygılı kelimeler.",
      icon: "people",
      type: "flashcard",
      vocabItems: [
        { japanese: "おとうさん", romaji: "otousan", meaning_tr: "Babanız / Onun babası", emoji: "👨" },
        { japanese: "おかあさん", romaji: "okaasan", meaning_tr: "Anneniz / Onun annesi", emoji: "👩" },
        { japanese: "おにいさん", romaji: "oniisan", meaning_tr: "Ağabeyiniz / Onun ağabeyi", emoji: "👦" },
        { japanese: "おねえさん", romaji: "oneesan", meaning_tr: "Ablanız / Onun ablası", emoji: "👧" },
        { japanese: "おとうとさん", romaji: "otoutosan", meaning_tr: "Erkek kardeşi (saygılı)", emoji: "👶" },
        { japanese: "いもうとさん", romaji: "imoutosan", meaning_tr: "Kız kardeşi (saygılı)", emoji: "👶" },
      ],
      xpReward: 20,
    },
    {
      id: "les-14-4",
      title: "Neden İki Farklı Kelime?",
      description: "Japonca'da alçakgönüllülük neden önemlidir?",
      icon: "info",
      type: "reading",
      slides: [
        {
          title: "Uchi-Soto: İç ve Dış Kavramı",
          content: "Japonca'da kendi grubun (uchi = iç) ve başkasının grubu (soto = dış) ayrımı çok önemlidir. Kendi ailenden söz ederken alçakgönüllü kelimeler ('chichi', 'haha') kullanırsın. Başkasının ailesinden söz ederken ise saygılı kelimeler ('-san' eki) kullanırsın.",
          emoji: "🏯"
        },
        {
          title: "Pratik Kural",
          content: "'Benim babam' için → 'chichi'\n'Senin baban' için → 'otousan'\n\nBu ayrımı yapmamak saygısızlık sayılabilir. Ama merak etme, öğrendikçe otomatikleşiyor!",
          emoji: "🎌"
        }
      ],
      xpReward: 10,
    },
    {
      id: "les-14-5",
      title: "Gramer: Ailemden Bahsetme",
      description: "Aile kelimelerini cümlede kullan.",
      icon: "architecture",
      type: "grammar",
      grammarItems: [
        {
          id: "gr-sec14-1",
          sentence: "わたし の ちち は いしゃ です",
          romaji: "Watashi no chichi wa isha desu.",
          translation: "Babam doktor.",
          explanation: "'No' tamlamasıyla kendi aile üyelerini tanıtabiliriz. 'Isha' (いしゃ) = doktor.",
          breakdown: [
            { word: "わたし の", romaji: "watashi no", meaning: "benim", isParticle: true },
            { word: "ちち", romaji: "chichi", meaning: "babam" },
            { word: "は", romaji: "wa", meaning: "(konu)", isParticle: true },
            { word: "いしゃ", romaji: "isha", meaning: "doktor" },
            { word: "です", romaji: "desu", meaning: "dir" },
          ]
        },
        {
          id: "gr-sec14-2",
          sentence: "おかあさん は おげんき です か",
          romaji: "Okaasan wa o-genki desu ka?",
          translation: "Anneniz nasıl / iyi midir?",
          explanation: "'O-genki' (おげんき) = iyi, sağlıklı. 'O-' ön eki saygı ekler. Bu kalıp selamlaşmada da kullanılır.",
          breakdown: [
            { word: "おかあさん", romaji: "okaasan", meaning: "anneniz (saygılı)" },
            { word: "は", romaji: "wa", meaning: "(konu)", isParticle: true },
            { word: "おげんき", romaji: "o-genki", meaning: "iyi / sağlıklı (saygılı)" },
            { word: "です か", romaji: "desu ka", meaning: "... mi?", isParticle: true },
          ]
        }
      ],
      xpReward: 25,
    },
    {
      id: "les-14-6",
      title: "Bölüm 14 Kontrol Noktası",
      description: "Aile kelimelerini ve kullanım farkını test et.",
      icon: "flag",
      type: "checkpoint",
      xpReward: 35,
    }
  ],
};
