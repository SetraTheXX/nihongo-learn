export interface StoryWord {
  japanese: string;
  romaji: string;
  meaning: string;
  isParticle?: boolean;
}

export interface StoryParagraph {
  japanese: string;
  romaji: string;
  translation: string;
  words: StoryWord[];
}

export interface StoryQuestion {
  question: string;
  options: string[];
  correctIndex: number;
}

export interface Story {
  id: string;
  title: string;
  titleJp: string;
  emoji: string;
  level: string;
  requiredChapter: number;
  description: string;
  paragraphs: StoryParagraph[];
  questions: StoryQuestion[];
}

export const storiesData: Story[] = [
  {
    id: "story-1",
    title: "Tanışma",
    titleJp: "はじめまして",
    emoji: "🤝",
    level: "A1.1",
    requiredChapter: 3,
    description: "İlk tanışma diyaloğu — kendini tanıt ve selamlaş.",
    paragraphs: [
      {
        japanese: "はじめまして。わたし は たなか です。",
        romaji: "Hajimemashite. Watashi wa Tanaka desu.",
        translation: "Memnun oldum. Ben Tanaka'yım.",
        words: [
          { japanese: "はじめまして", romaji: "hajimemashite", meaning: "Memnun oldum (ilk tanışma)" },
          { japanese: "わたし", romaji: "watashi", meaning: "Ben" },
          { japanese: "は", romaji: "wa", meaning: "konu belirten takı", isParticle: true },
          { japanese: "たなか", romaji: "Tanaka", meaning: "Tanaka (isim)" },
          { japanese: "です", romaji: "desu", meaning: "-dır / -dir (kibarlık eki)" },
        ],
      },
      {
        japanese: "にほんじん です。がくせい です。",
        romaji: "Nihonjin desu. Gakusei desu.",
        translation: "Japonum. Öğrenciyim.",
        words: [
          { japanese: "にほんじん", romaji: "nihonjin", meaning: "Japon (kişi)" },
          { japanese: "です", romaji: "desu", meaning: "-dır / -dir" },
          { japanese: "がくせい", romaji: "gakusei", meaning: "Öğrenci" },
        ],
      },
      {
        japanese: "どうぞ よろしく おねがいします。",
        romaji: "Douzo yoroshiku onegaishimasu.",
        translation: "Lütfen iyi geçinelim. (Resmi tanışma sonu)",
        words: [
          { japanese: "どうぞ", romaji: "douzo", meaning: "Lütfen / Buyurun" },
          { japanese: "よろしく", romaji: "yoroshiku", meaning: "İyi geçinelim" },
          { japanese: "おねがいします", romaji: "onegaishimasu", meaning: "Rica ederim (resmi)" },
        ],
      },
    ],
    questions: [
      { question: "Tanaka ne iş yapıyor?", options: ["Öğretmen", "Öğrenci", "Doktor", "Mühendis"], correctIndex: 1 },
      { question: "'はじめまして' ne demek?", options: ["Günaydın", "Memnun oldum", "Hoşça kal", "Teşekkürler"], correctIndex: 1 },
      { question: "Tanaka hangi milletten?", options: ["Türk", "Koreli", "Çinli", "Japon"], correctIndex: 3 },
    ],
  },
  {
    id: "story-2",
    title: "Kahvaltı Vakti",
    titleJp: "あさごはん の じかん",
    emoji: "🍳",
    level: "A1.2",
    requiredChapter: 6,
    description: "Yiyecek ve içecek kelimelerini bir sabah sahnesinde öğren.",
    paragraphs: [
      {
        japanese: "おはようございます。あさごはん を たべます。",
        romaji: "Ohayou gozaimasu. Asagohan wo tabemasu.",
        translation: "Günaydın. Kahvaltı yiyeceğim.",
        words: [
          { japanese: "おはようございます", romaji: "ohayou gozaimasu", meaning: "Günaydın (resmi)" },
          { japanese: "あさごはん", romaji: "asagohan", meaning: "Kahvaltı" },
          { japanese: "を", romaji: "wo", meaning: "nesne takısı", isParticle: true },
          { japanese: "たべます", romaji: "tabemasu", meaning: "Yemek (kibarlık)" },
        ],
      },
      {
        japanese: "コーヒー を のみます。パン も たべます。",
        romaji: "Koohii wo nomimasu. Pan mo tabemasu.",
        translation: "Kahve içeceğim. Ekmek de yiyeceğim.",
        words: [
          { japanese: "コーヒー", romaji: "koohii", meaning: "Kahve" },
          { japanese: "のみます", romaji: "nomimasu", meaning: "İçmek (kibarlık)" },
          { japanese: "パン", romaji: "pan", meaning: "Ekmek" },
          { japanese: "も", romaji: "mo", meaning: "~da / ~de (benzerlik)", isParticle: true },
        ],
      },
      {
        japanese: "おいしい です ね。いただきます！",
        romaji: "Oishii desu ne. Itadakimasu!",
        translation: "Lezzetli, değil mi? Afiyet olsun!",
        words: [
          { japanese: "おいしい", romaji: "oishii", meaning: "Lezzetli" },
          { japanese: "ね", romaji: "ne", meaning: "değil mi? (onay)", isParticle: true },
          { japanese: "いただきます", romaji: "itadakimasu", meaning: "Afiyet olsun! (yemekten önce)" },
        ],
      },
    ],
    questions: [
      { question: "Kahvaltıda ne içiliyor?", options: ["Çay", "Su", "Kahve", "Süt"], correctIndex: 2 },
      { question: "'いただきます' ne zaman söylenir?", options: ["Yemekten sonra", "Yemekten önce", "Yatarken", "Tanışırken"], correctIndex: 1 },
      { question: "'も' takısı ne anlama gelir?", options: ["ama", "ve", "~da/~de", "çünkü"], correctIndex: 2 },
    ],
  },
  {
    id: "story-3",
    title: "Hafta Sonu Planı",
    titleJp: "しゅうまつ の けいかく",
    emoji: "📅",
    level: "A1.3",
    requiredChapter: 12,
    description: "Arkadaşınla hafta sonu planı yapma diyaloğu.",
    paragraphs: [
      {
        japanese: "どようび に なに を しますか？",
        romaji: "Doyoubi ni nani wo shimasuka?",
        translation: "Cumartesi günü ne yapacaksın?",
        words: [
          { japanese: "どようび", romaji: "doyoubi", meaning: "Cumartesi" },
          { japanese: "に", romaji: "ni", meaning: "~da / ~de (zaman)", isParticle: true },
          { japanese: "なに", romaji: "nani", meaning: "Ne" },
          { japanese: "を", romaji: "wo", meaning: "nesne takısı", isParticle: true },
          { japanese: "しますか", romaji: "shimasuka", meaning: "Yapacak mısın?" },
        ],
      },
      {
        japanese: "えいが を みます。いっしょ に いきませんか？",
        romaji: "Eiga wo mimasu. Issho ni ikimasenka?",
        translation: "Film izleyeceğim. Birlikte gitmez misin?",
        words: [
          { japanese: "えいが", romaji: "eiga", meaning: "Film" },
          { japanese: "みます", romaji: "mimasu", meaning: "İzlemek / Görmek" },
          { japanese: "いっしょ", romaji: "issho", meaning: "Birlikte" },
          { japanese: "いきませんか", romaji: "ikimasenka", meaning: "Gitmez misiniz? (Davet)" },
        ],
      },
      {
        japanese: "いいですね！いきましょう。",
        romaji: "Ii desu ne! Ikimashou.",
        translation: "İyi fikir! Gidelim.",
        words: [
          { japanese: "いいですね", romaji: "ii desu ne", meaning: "İyi fikir / Güzel" },
          { japanese: "いきましょう", romaji: "ikimashou", meaning: "Gidelim (-mashō formu)" },
        ],
      },
    ],
    questions: [
      { question: "Cumartesi ne yapılacak?", options: ["Alışveriş", "Film izleme", "Spor", "Ders çalışma"], correctIndex: 1 },
      { question: "'いっしょに' ne demek?", options: ["Tek başına", "Birlikte", "Hızlıca", "Sessizce"], correctIndex: 1 },
      { question: "'-ましょう' formu ne ifade eder?", options: ["Geçmiş zaman", "Rica/Teklif (Gidelim)", "Soru", "Olumsuz"], correctIndex: 1 },
    ],
  },
  {
    id: "story-4",
    title: "Kayıp Çanta",
    titleJp: "なくした かばん",
    emoji: "👜",
    level: "A1.4",
    requiredChapter: 20,
    description: "Eşyalar ve var/yok ifadelerini kullanan kısa bir hikaye.",
    paragraphs: [
      {
        japanese: "わたし の かばん が ありません。",
        romaji: "Watashi no kaban ga arimasen.",
        translation: "Çantam yok (bulamıyorum).",
        words: [
          { japanese: "わたし", romaji: "watashi", meaning: "Ben" },
          { japanese: "の", romaji: "no", meaning: "~nın / ~nin (sahiplik)", isParticle: true },
          { japanese: "かばん", romaji: "kaban", meaning: "Çanta" },
          { japanese: "が", romaji: "ga", meaning: "özne belirten takı", isParticle: true },
          { japanese: "ありません", romaji: "arimasen", meaning: "Yok (cansız nesneler)" },
        ],
      },
      {
        japanese: "つくえ の うえ に ありますか？",
        romaji: "Tsukue no ue ni arimasuka?",
        translation: "Masanın üstünde mi?",
        words: [
          { japanese: "つくえ", romaji: "tsukue", meaning: "Masa" },
          { japanese: "うえ", romaji: "ue", meaning: "Üst" },
          { japanese: "に", romaji: "ni", meaning: "~da / ~de (konum)", isParticle: true },
          { japanese: "ありますか", romaji: "arimasuka", meaning: "Var mı?" },
        ],
      },
      {
        japanese: "あ！いす の した に ありました！",
        romaji: "A! Isu no shita ni arimashita!",
        translation: "Ah! Sandalyenin altındaydı!",
        words: [
          { japanese: "いす", romaji: "isu", meaning: "Sandalye" },
          { japanese: "した", romaji: "shita", meaning: "Alt" },
          { japanese: "ありました", romaji: "arimashita", meaning: "Vardı (geçmiş)" },
        ],
      },
    ],
    questions: [
      { question: "Çanta nerede bulundu?", options: ["Masanın üstünde", "Sandalyenin altında", "Dolapta", "Yerde"], correctIndex: 1 },
      { question: "'ありません' ne anlama gelir?", options: ["Var", "Yok (cansız)", "İstiyorum", "Bilmiyorum"], correctIndex: 1 },
      { question: "'うえ' ne demek?", options: ["Alt", "Yan", "Üst", "İç"], correctIndex: 2 },
    ],
  },
  {
    id: "story-5",
    title: "Dün ve Bugün",
    titleJp: "きのう と きょう",
    emoji: "🕰️",
    level: "A1.5",
    requiredChapter: 28,
    description: "Geçmiş zaman formlarını doğal konuşmada kullanma pratiği.",
    paragraphs: [
      {
        japanese: "きのう は あつかった です。",
        romaji: "Kinou wa atsukatta desu.",
        translation: "Dün sıcaktı.",
        words: [
          { japanese: "きのう", romaji: "kinou", meaning: "Dün" },
          { japanese: "あつかった", romaji: "atsukatta", meaning: "Sıcaktı (i-sıfat geçmiş)" },
        ],
      },
      {
        japanese: "ともだち と こうえん に いきました。",
        romaji: "Tomodachi to kouen ni ikimashita.",
        translation: "Arkadaşımla parka gittim.",
        words: [
          { japanese: "ともだち", romaji: "tomodachi", meaning: "Arkadaş" },
          { japanese: "と", romaji: "to", meaning: "ile / ~la", isParticle: true },
          { japanese: "こうえん", romaji: "kouen", meaning: "Park" },
          { japanese: "いきました", romaji: "ikimashita", meaning: "Gittim (geçmiş)" },
        ],
      },
      {
        japanese: "きょう は すずしい です。うち で べんきょう します。",
        romaji: "Kyou wa suzushii desu. Uchi de benkyou shimasu.",
        translation: "Bugün serin. Evde ders çalışacağım.",
        words: [
          { japanese: "きょう", romaji: "kyou", meaning: "Bugün" },
          { japanese: "すずしい", romaji: "suzushii", meaning: "Serin" },
          { japanese: "うち", romaji: "uchi", meaning: "Ev" },
          { japanese: "で", romaji: "de", meaning: "~da / ~de (yer)", isParticle: true },
          { japanese: "べんきょう します", romaji: "benkyou shimasu", meaning: "Ders çalışmak" },
        ],
      },
    ],
    questions: [
      { question: "Dünkü hava nasıldı?", options: ["Soğuk", "Sıcak", "Yağmurlu", "Karlı"], correctIndex: 1 },
      { question: "Dün nereye gidildi?", options: ["Okula", "Parka", "Eve", "Markete"], correctIndex: 1 },
      { question: "'あつかった' hangi formun geçmiş halidir?", options: ["na-sıfat", "Fiil", "i-sıfat", "İsim"], correctIndex: 2 },
    ],
  },
];
