import { Section } from '../types/course';

export const chapter30: Section = {
  id: "sec-30",
  title: "Te Formu: Giriş",
  description: "Japonca'nın en güçlü formu: te ile rica, izin ve bağlaç",
  emoji: "🙏",
  color: "violet",
  lessons: [
    {
      id: "les-30-1",
      title: "Te Formu Nedir?",
      description: "Japonca'nın en çok yönlü formu.",
      icon: "info",
      type: "reading",
      slides: [
        {
          title: "Te Formu (て形)",
          content: "Te formu çok işlevlidir:\n1. Rica: ~te kudasai (lütfen yapın)\n2. İzin: ~te mo ii (yapabilirsiniz)\n3. Yasak: ~te wa ikemasen (yapmamalısınız)\n4. Sıralama: ~te, ~te (hem... hem...)\n\nEn yaygın kullanımları bu üç tanedir.",
          emoji: "🧩"
        },
        {
          title: "Te Formu Nasıl Yapılır?",
          content: "RU fiilleri: -ru → -te\n(taberu → tabete, miru → mite)\n\nU fiilleri değişkendir:\n-ku → -ite (kaku → kaite)\n-su → -shite (hanasu → hanashite)\n-mu/-bu/-nu → -nde (nomu → nonde)\n-u/-tsu/-ru → -tte (matsu → matte)\n\nDüzensizler: suru → shite, kuru → kite",
          emoji: "📝"
        }
      ],
      xpReward: 10,
    },
    {
      id: "les-30-2",
      title: "Te Formu: En Yaygın Fiiller",
      description: "Sık kullanılan fiillerin te formları.",
      icon: "list",
      type: "flashcard",
      vocabItems: [
        { japanese: "たべて", romaji: "tabete", meaning_tr: "Yiyerek (taberu'nun te formu)", emoji: "🍱" },
        { japanese: "のんで", romaji: "nonde", meaning_tr: "İçerek (nomu'nun te formu)", emoji: "🥤" },
        { japanese: "みて", romaji: "mite", meaning_tr: "Görerek / İzleyerek", emoji: "👀" },
        { japanese: "きいて", romaji: "kiite", meaning_tr: "Dinleyerek (kiku'nun te formu)", emoji: "👂" },
        { japanese: "かいて", romaji: "kaite", meaning_tr: "Yazarak (kaku'nun te formu)", emoji: "✍️" },
        { japanese: "まって", romaji: "matte", meaning_tr: "Bekleyerek (matsu'nun te formu)", emoji: "⏳" },
        { japanese: "して", romaji: "shite", meaning_tr: "Yaparak (suru'nun te formu)", emoji: "✅" },
        { japanese: "きて", romaji: "kite", meaning_tr: "Gelerek (kuru'nun te formu)", emoji: "🚶" },
      ],
      xpReward: 25,
    },
    {
      id: "les-30-3",
      title: "Gramer: Rica ve İzin",
      description: "Te kudasai ve te mo ii ile nezaket cümleleri kur.",
      icon: "architecture",
      type: "grammar",
      grammarItems: [
        {
          id: "gr-sec30-1",
          sentence: "ちょっと まって ください",
          romaji: "Chotto matte kudasai.",
          translation: "Lütfen biraz bekleyin.",
          explanation: "'Chotto' = biraz. 'Matte' te formu. 'Kudasai' = lütfen yapın. Bu kalıp her yerde duyarsın!",
          breakdown: [
            { word: "ちょっと", romaji: "chotto", meaning: "biraz" },
            { word: "まって", romaji: "matte", meaning: "bekleyerek (te formu)" },
            { word: "ください", romaji: "kudasai", meaning: "lütfen yapın" },
          ]
        },
        {
          id: "gr-sec30-2",
          sentence: "しゃしん を とって も いい です か",
          romaji: "Shashin wo totte mo ii desu ka?",
          translation: "Fotoğraf çekebilir miyim?",
          explanation: "'Totte' = çekerek (te formu). '-te mo ii desu ka' = yapabilir miyim? (izin isteme kalıbı).",
          breakdown: [
            { word: "しゃしん", romaji: "shashin", meaning: "fotoğraf" },
            { word: "を", romaji: "wo", meaning: "(nesne eki)", isParticle: true },
            { word: "とって", romaji: "totte", meaning: "çekerek (te formu)" },
            { word: "も いい です か", romaji: "mo ii desu ka", meaning: "yapabilir miyim?", isParticle: true },
          ]
        },
        {
          id: "gr-sec30-3",
          sentence: "ここ で タバコ を すって は いけません",
          romaji: "Koko de tabako wo sutte wa ikemasen.",
          translation: "Burada sigara içilmez.",
          explanation: "'-te wa ikemasen' = yapmamalısınız / yasak. Kurallar ve yasaklar için kullanılır.",
          breakdown: [
            { word: "ここ で", romaji: "koko de", meaning: "burada" },
            { word: "タバコ を", romaji: "tabako wo", meaning: "sigara (nesne)" },
            { word: "すって", romaji: "sutte", meaning: "içerek (te formu)" },
            { word: "は いけません", romaji: "wa ikemasen", meaning: "olmaz / yasak", isParticle: true },
          ]
        }
      ],
      xpReward: 25,
    },
    {
      id: "les-30-4",
      title: "Bölüm 30 Kontrol Noktası",
      description: "Te formunu ve kullanımlarını test et.",
      icon: "flag",
      type: "checkpoint",
      xpReward: 40,
    }
  ],
};
