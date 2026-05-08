import { Section } from '../types/course';

export const chapter16: Section = {
  id: "sec-16",
  title: "Fiillere Giriş",
  description: "Japonca fiil sistemini keşfet ve ilk fiillerini öğren",
  emoji: "🏃",
  color: "teal",
  lessons: [
    {
      id: "les-16-1",
      title: "Katakana: Birleşik Sesler",
      description: "Kya, kyu, kyo gibi birleşik Katakana sesleri.",
      icon: "sort_by_alpha",
      type: "flashcard",
      vocabItems: [
        { japanese: "キャ", romaji: "kya", meaning_tr: "kya (Ki + küçük Ya)" },
        { japanese: "シャ", romaji: "sha", meaning_tr: "sha (Shi + küçük Ya)" },
        { japanese: "チャ", romaji: "cha", meaning_tr: "cha (Chi + küçük Ya)" },
        { japanese: "ニャ", romaji: "nya", meaning_tr: "nya (Ni + küçük Ya)" },
        { japanese: "ファ", romaji: "fa", meaning_tr: "fa (Fu + küçük A) - İngilizce sesler için" },
      ],
      xpReward: 15,
    },
    {
      id: "les-16-2",
      title: "Fiil Grupları",
      description: "RU fiilleri ve U fiilleri: Japonca fiil sistemi nasıl çalışır?",
      icon: "info",
      type: "reading",
      slides: [
        {
          title: "İki Büyük Fiil Grubu",
          content: "Japonca fiillerin neredeyse tamamı iki gruba girer:\n\n1. RU Fiilleri (Ichidan): Sözlük hali '-ru' ile biter. Çekimi basittir.\n2. U Fiilleri (Godan): Sözlük hali '-u' ile biter ama '-ru' değil. Biraz daha çeşitli.",
          emoji: "🔤"
        },
        {
          title: "Masu Formu",
          content: "Günlük konuşmada ve resmi ortamlarda fiillerin 'masu' (-ます) formu kullanılır. Bu form kibarca 'yapıyorum / yaparım' anlamına gelir. Olumsuz hali 'masen' (-ません) dir.",
          emoji: "🗣️"
        }
      ],
      xpReward: 10,
    },
    {
      id: "les-16-3",
      title: "Temel Eylemler",
      description: "Günlük hayatta en çok kullanılan fiiller.",
      icon: "directions_run",
      type: "flashcard",
      vocabItems: [
        { japanese: "たべます", romaji: "tabemasu", meaning_tr: "Yerim / Yiyorum", emoji: "🍽️" },
        { japanese: "のみます", romaji: "nomimasu", meaning_tr: "İçerim / İçiyorum", emoji: "🥤" },
        { japanese: "みます", romaji: "mimasu", meaning_tr: "Görürüm / Bakıyorum", emoji: "👀" },
        { japanese: "ききます", romaji: "kikimasu", meaning_tr: "Dinlerim / Duyarım", emoji: "👂" },
        { japanese: "よみます", romaji: "yomimasu", meaning_tr: "Okurum", emoji: "📖" },
        { japanese: "かきます", romaji: "kakimasu", meaning_tr: "Yazarım", emoji: "✍️" },
        { japanese: "はなします", romaji: "hanashimasu", meaning_tr: "Konuşurum", emoji: "💬" },
        { japanese: "いきます", romaji: "ikimasu", meaning_tr: "Giderim", emoji: "🚶" },
        { japanese: "きます", romaji: "kimasu", meaning_tr: "Gelirim", emoji: "🤗" },
      ],
      xpReward: 25,
    },
    {
      id: "les-16-4",
      title: "Gramer: Fiil Cümleleri",
      description: "Fiilleri cümlede kullanmayı öğren.",
      icon: "architecture",
      type: "grammar",
      grammarItems: [
        {
          id: "gr-sec16-1",
          sentence: "まいにち にほんご を べんきょう します",
          romaji: "Mainichi nihongo wo benkyou shimasu.",
          translation: "Her gün Japonca çalışıyorum.",
          explanation: "'Mainichi' = her gün. 'Wo' (を) nesne takısı - ne çalıştığımızı belirtir. 'Benkyou shimasu' = çalışmak/ders çalışmak.",
          breakdown: [
            { word: "まいにち", romaji: "mainichi", meaning: "her gün" },
            { word: "にほんご", romaji: "nihongo", meaning: "Japonca" },
            { word: "を", romaji: "wo", meaning: "(nesne eki)", isParticle: true },
            { word: "べんきょう します", romaji: "benkyou shimasu", meaning: "çalışırım" },
          ]
        },
        {
          id: "gr-sec16-2",
          sentence: "コーヒー を のみません",
          romaji: "Koohii wo nomimasen.",
          translation: "Kahve içmiyorum.",
          explanation: "'-masen' olumsuz formdur. 'Nomimasu' (içerim) → 'nomimasen' (içmiyorum). Yiyecek/içecek için 'wo' (を) nesne takısı kullanılır.",
          breakdown: [
            { word: "コーヒー", romaji: "koohii", meaning: "kahve" },
            { word: "を", romaji: "wo", meaning: "(nesne eki)", isParticle: true },
            { word: "のみません", romaji: "nomimasen", meaning: "içmiyorum (olumsuz)" },
          ]
        }
      ],
      xpReward: 25,
    },
    {
      id: "les-16-5",
      title: "Bölüm 16 Kontrol Noktası",
      description: "Temel fiilleri ve masu/masen formunu test et.",
      icon: "flag",
      type: "checkpoint",
      xpReward: 35,
    }
  ],
};
