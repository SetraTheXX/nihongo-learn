import { Section } from '../types/course';

export const chapter27: Section = {
  id: "sec-27",
  title: "Geçmiş Zaman: Fiiller",
  description: "Mashita ve masen deshita ile geçmişte ne yaptığını anlat",
  emoji: "⏮️",
  color: "amber",
  lessons: [
    {
      id: "les-27-1",
      title: "Geçmiş Zaman Formu",
      description: "Masu → Mashita: Nasıl yapılır?",
      icon: "info",
      type: "reading",
      slides: [
        {
          title: "Geçmiş Zaman Kuralı",
          content: "Japonca'da kibar geçmiş zaman oluşturmak çok kolay!\n\nOlumlu: -masu → -mashita\ntabemasu → tabemashita (yedim)\nikimasu → ikimashita (gittim)\n\nOlumsuz: -masen → -masen deshita\ntabemasen → tabemasen deshita (yemedim)",
          emoji: "⏮️"
        },
        {
          title: "Sadece Son Ek Değişir",
          content: "Fiil kökü hiç değişmez! Sadece son ek:\n\n• Şimdiki/Gelecek: -masu / -masen\n• Geçmiş Olumlu: -mashita\n• Geçmiş Olumsuz: -masen deshita\n\nBu kadar basit!",
          emoji: "💡"
        }
      ],
      xpReward: 10,
    },
    {
      id: "les-27-2",
      title: "Dün Ne Yaptın?",
      description: "Geçmiş zaman fiilleri ile alıştırma.",
      icon: "history",
      type: "flashcard",
      vocabItems: [
        { japanese: "たべました", romaji: "tabemashita", meaning_tr: "Yedim", emoji: "🍽️" },
        { japanese: "のみました", romaji: "nomimashita", meaning_tr: "İçtim", emoji: "🥤" },
        { japanese: "みました", romaji: "mimashita", meaning_tr: "Gördüm / İzledim", emoji: "👀" },
        { japanese: "いきました", romaji: "ikimashita", meaning_tr: "Gittim", emoji: "🚶" },
        { japanese: "きました", romaji: "kimashita", meaning_tr: "Geldim", emoji: "🤗" },
        { japanese: "よみました", romaji: "yomimashita", meaning_tr: "Okudum", emoji: "📖" },
        { japanese: "かきました", romaji: "kakimashita", meaning_tr: "Yazdım", emoji: "✍️" },
        { japanese: "しました", romaji: "shimashita", meaning_tr: "Yaptım", emoji: "✅" },
      ],
      xpReward: 20,
    },
    {
      id: "les-27-3",
      title: "Gramer: Geçmiş Zaman Cümleleri",
      description: "Dün ve geçen hafta ne yaptığını anlat.",
      icon: "architecture",
      type: "grammar",
      grammarItems: [
        {
          id: "gr-sec27-1",
          sentence: "きのう えいが を みました",
          romaji: "Kinou eiga wo mimashita.",
          translation: "Dün film izledim.",
          explanation: "'Kinou' = dün. Geçmiş zaman için fiil kökü değişmez, sadece '-masu' → '-mashita' olur.",
          breakdown: [
            { word: "きのう", romaji: "kinou", meaning: "dün" },
            { word: "えいが", romaji: "eiga", meaning: "film" },
            { word: "を", romaji: "wo", meaning: "(nesne eki)", isParticle: true },
            { word: "みました", romaji: "mimashita", meaning: "izledim (geçmiş)" },
          ]
        },
        {
          id: "gr-sec27-2",
          sentence: "せんしゅう にほんに いきませんでした",
          romaji: "Senshuu nihon ni ikimasen deshita.",
          translation: "Geçen hafta Japonya'ya gitmedim.",
          explanation: "Olumsuz geçmiş: '-masen deshita'. 'Ikimasen' (gitmiyorum) → 'ikimasen deshita' (gitmedim).",
          breakdown: [
            { word: "せんしゅう", romaji: "senshuu", meaning: "geçen hafta" },
            { word: "にほん に", romaji: "nihon ni", meaning: "Japonya'ya" },
            { word: "いきませんでした", romaji: "ikimasen deshita", meaning: "gitmedim (olumsuz geçmiş)" },
          ]
        },
        {
          id: "gr-sec27-3",
          sentence: "きのう なに を しましたか",
          romaji: "Kinou nani wo shimashita ka?",
          translation: "Dün ne yaptınız?",
          explanation: "Birini geçmişte ne yaptığı hakkında sormak için: 'Kinou nani wo shimashita ka?' Çok kullanışlı günlük soru!",
          breakdown: [
            { word: "きのう", romaji: "kinou", meaning: "dün" },
            { word: "なに を", romaji: "nani wo", meaning: "ne (nesne)" },
            { word: "しました か", romaji: "shimashita ka", meaning: "yaptınız? (geçmiş soru)" },
          ]
        }
      ],
      xpReward: 25,
    },
    {
      id: "les-27-4",
      title: "Bölüm 27 Kontrol Noktası",
      description: "Geçmiş zaman fiil formlarını test et.",
      icon: "flag",
      type: "checkpoint",
      xpReward: 35,
    }
  ],
};
