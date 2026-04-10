/**
 * Nihongo Learn — Kurs Yol Haritası Veri Dosyası
 *
 * Busuu tarzı yapılandırılmış ders sistemi.
 * Her bölümde dersler, her derste ilgili kart ID'leri veya özel içerik tanımlı.
 */

// ── Tip Tanımları ───────────────────────────────────────────────

export type LessonType = "flashcard" | "quiz" | "matching" | "reading" | "checkpoint" | "grammar";

export interface SlideContent {
  title: string;
  content: string;
  emoji?: string;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  icon: string;           // material-symbols-outlined icon adı
  type: LessonType;
  cardIds?: string[];     // flashcard/quiz türü için kart ID listesi
  vocabItems?: VocabItem[];  // kelime/kalıp dersleri için
  grammarItems?: GrammarItem[]; // gramer kuralları ve cümle çalışması için
  readingContent?: ReadingContent; // okuma dersleri için
  slides?: SlideContent[]; // Ders öncesi gösterilecek bilgi slaytları
  xpReward: number;
}

export interface VocabItem {
  japanese: string;
  romaji: string;
  meaning_tr: string;
  emoji?: string;
  audio?: string;
}

export interface ReadingContent {
  title: string;
  japanese: string;
  romaji: string;
  translation: string;
  questions: {
    question: string;
    options: string[];
    correctIndex: number;
  }[];
}

export interface GrammarItem {
  id: string;
  sentence: string;      // e.g. "わたし は 学生 です"
  romaji: string;        // e.g. "watashi wa gakusei desu"
  translation: string;   // e.g. "Ben öğrenciyim."
  explanation: string;   // Gramer kuralının açıklaması
  breakdown: {           // Cümle öğeleri
    word: string;
    romaji: string;
    meaning: string;
    isParticle?: boolean; // Ek mi (örn: wa, ga, wo)
  }[];
}

export interface Section {
  id: string;
  title: string;
  description: string;
  emoji: string;
  color: string;          // Tailwind renk adı: "emerald", "blue", "purple" vb.
  lessons: Lesson[];
}

export interface Course {
  id: string;
  title: string;
  level: string;
  levelLabel: string;
  sections: Section[];
}

// ── Kurs Verisi ─────────────────────────────────────────────────

export const japaneseCourse: Course = {
  id: "full-japanese-a1",
  title: "Tam Japonca Kursu",
  level: "A1",
  levelLabel: "Başlangıç Seviyesi",
  sections: [
    // ═══════════════════════════════════════════════════════════
    // BÖLÜM 1: HİRAGANA TEMELLERİ
    // ═══════════════════════════════════════════════════════════
    {
      id: "sec-1",
      title: "Hiragana Temelleri",
      description: "İlk 10 hiragana harfini öğren: あ-お ve か-こ satırları",
      emoji: "🔤",
      color: "emerald",
      lessons: [
        {
          id: "les-1-1",
          title: "あ Satırı: a i u e o",
          description: "İlk 5 hiragana harfini tanı ve öğren",
          icon: "text_fields",
          type: "flashcard",
          slides: [
            {
              title: "Japonca'ya Hoş Geldin!",
              content: "Japoncada 3 farklı yazı sistemi kullanılır: Hiragana, Katakana ve Kanji. \nBiz en temel olan **Hiragana** ile başlıyoruz.",
              emoji: "🇯🇵"
            },
            {
              title: "Hiragana Nedir?",
              content: "Hiragana, Japonca'nın temel taşıdır ve toplam 46 sesten oluşur.\nŞimdi Japonca'nın ünlü harfleriyle başlıyoruz: a, i, u, e, o.",
              emoji: "✍️"
            }
          ],
          cardIds: ["h_a", "h_i", "h_u", "h_e", "h_o"],
          xpReward: 15,
        },
        {
          id: "les-1-2",
          title: "か Satırı: ka ki ku ke ko",
          description: "Sonraki 5 hiragana harfini öğren",
          icon: "text_fields",
          type: "flashcard",
          cardIds: ["h_ka", "h_ki", "h_ku", "h_ke", "h_ko"],
          xpReward: 15,
        },
        {
          id: "les-1-3",
          title: "Tekrar: İlk 10 Harf",
          description: "Öğrendiğin 10 harfi flashcard ile tekrar et",
          icon: "replay",
          type: "flashcard",
          cardIds: ["h_a", "h_i", "h_u", "h_e", "h_o", "h_ka", "h_ki", "h_ku", "h_ke", "h_ko"],
          xpReward: 10,
        },
        {
          id: "les-1-4",
          title: "Quiz: İlk 10 Harf",
          description: "Çoktan seçmeli sorularla bilgini test et",
          icon: "quiz",
          type: "quiz",
          cardIds: ["h_a", "h_i", "h_u", "h_e", "h_o", "h_ka", "h_ki", "h_ku", "h_ke", "h_ko"],
          xpReward: 20,
        },
        {
          id: "les-1-5",
          title: "Kontrol Noktası",
          description: "Bölüm 1 sınavı — bilgini kanıtla!",
          icon: "flag",
          type: "checkpoint",
          cardIds: ["h_a", "h_i", "h_u", "h_e", "h_o", "h_ka", "h_ki", "h_ku", "h_ke", "h_ko"],
          xpReward: 30,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════
    // BÖLÜM 2: SELAMLAŞMALAR
    // ═══════════════════════════════════════════════════════════
    {
      id: "sec-2",
      title: "Selamlaşmalar",
      description: "Japoncada temel selamlaşma ve nezaket ifadelerini öğren",
      emoji: "👋",
      color: "blue",
      lessons: [
        {
          id: "les-2-1",
          title: "Konnichiwa!",
          description: "İnsanları ilk defa selamlamayı öğren",
          icon: "waving_hand",
          type: "flashcard",
          slides: [
            {
              title: "Japoncada Selamlaşma",
              content: "Japon kültüründe selamlaşma çok önemlidir.\nGünlük hayatta karşana en çok çıkacak kelime 'Konnichiwa' (Merhaba) olacak.",
              emoji: "🤝"
            },
            {
              title: "Saygı ve Nezaket",
              content: "Japoncada resmi ve samimi konuşma şekilleri farklıdır.\nÖrneğin arkadaşına 'Ohayou', tanımadığın veya saygı gösterdiğin birine 'Ohayou gozaimasu' dersin.",
              emoji: "🙇"
            }
          ],
          vocabItems: [
            { japanese: "こんにちは", romaji: "konnichiwa", meaning_tr: "Merhaba / İyi günler", emoji: "👋" },
            { japanese: "おはようございます", romaji: "ohayou gozaimasu", meaning_tr: "Günaydın (resmi)", emoji: "🌅" },
            { japanese: "おはよう", romaji: "ohayou", meaning_tr: "Günaydın (samimi)", emoji: "☀️" },
            { japanese: "こんばんは", romaji: "konbanwa", meaning_tr: "İyi akşamlar", emoji: "🌙" },
          ],
          xpReward: 15,
        },
        {
          id: "les-2-2",
          title: "Temel İfadeler",
          description: "Teşekkür etme ve özür dilemeyi öğren",
          icon: "favorite",
          type: "flashcard",
          vocabItems: [
            { japanese: "ありがとうございます", romaji: "arigatou gozaimasu", meaning_tr: "Teşekkür ederim (resmi)", emoji: "🙏" },
            { japanese: "ありがとう", romaji: "arigatou", meaning_tr: "Teşekkürler (samimi)", emoji: "😊" },
            { japanese: "すみません", romaji: "sumimasen", meaning_tr: "Özür dilerim / Pardon", emoji: "🙇" },
            { japanese: "ごめんなさい", romaji: "gomen nasai", meaning_tr: "Affedersiniz", emoji: "😔" },
          ],
          xpReward: 15,
        },
        {
          id: "les-2-3",
          title: "Vedalaşma",
          description: "Farklı resmiyet seviyelerinde vedalaşmayı öğren",
          icon: "door_open",
          type: "flashcard",
          vocabItems: [
            { japanese: "さようなら", romaji: "sayounara", meaning_tr: "Hoşçakal (resmi)", emoji: "🤝" },
            { japanese: "じゃあね", romaji: "jaa ne", meaning_tr: "Görüşürüz (samimi)", emoji: "✌️" },
            { japanese: "またね", romaji: "mata ne", meaning_tr: "Tekrar görüşürüz", emoji: "👋" },
            { japanese: "おやすみなさい", romaji: "oyasumi nasai", meaning_tr: "İyi geceler", emoji: "🌛" },
          ],
          xpReward: 15,
        },
        {
          id: "les-2-4",
          title: "Gramer: Hitap Ekleri (-san, -sensei)",
          description: "İnsanlara isimleriyle hitap ederken kullanılan ekleri öğren",
          icon: "architecture",
          type: "grammar",
          grammarItems: [
            {
              id: "gr-sec2-1",
              sentence: "たなか さん",
              romaji: "Tanaka san",
              translation: "Tanaka Bey / Hanım",
              explanation: "Japonca'da başkalarının isminin veya soyisminin sonuna '-san' eklenir. Bu, Bey/Hanım anlamına gelen temel saygı ekidir. (Kendi ismine ASLA -san ekleme!)",
              breakdown: [
                { word: "たなか", romaji: "Tanaka", meaning: "Tanaka (İsim)" },
                { word: "さん", romaji: "san", meaning: "Bey/Hanım", isParticle: true }
              ]
            },
            {
              id: "gr-sec2-2",
              sentence: "やまだ せんせい",
              romaji: "Yamada sensei",
              translation: "Yamada Öğretmen",
              explanation: "Öğretmenlere, doktorlara veya ustalara hitap ederken '-san' yerine '-sensei' kullanılır.",
              breakdown: [
                { word: "やまだ", romaji: "Yamada", meaning: "Yamada (İsim)" },
                { word: "せんせい", romaji: "sensei", meaning: "Öğretmen", isParticle: true }
              ]
            }
          ],
          xpReward: 25,
        },
        {
          id: "les-2-5",
          title: "Kontrol Noktası",
          description: "Selamlaşma bilgini test et!",
          icon: "flag",
          type: "checkpoint",
          xpReward: 30,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════
    // BÖLÜM 3: KENDİNİ TANITMA
    // ═══════════════════════════════════════════════════════════
    {
      id: "sec-3",
      title: "Kendini Tanıtma",
      description: "Adını söyleme, mesleğini ve ülkeni anlatmayı öğren",
      emoji: "🙋",
      color: "violet",
      lessons: [
        {
          id: "les-3-1",
          title: "Adını Söyleme",
          description: "Japon tarzında kendini tanıtmayı öğren",
          icon: "badge",
          type: "flashcard",
          vocabItems: [
            { japanese: "わたしは＿です", romaji: "watashi wa __ desu", meaning_tr: "Ben ___-yım/ım", emoji: "🙋" },
            { japanese: "はじめまして", romaji: "hajimemashite", meaning_tr: "Memnun oldum (tanışma)", emoji: "🤝" },
            { japanese: "よろしくおねがいします", romaji: "yoroshiku onegaishimasu", meaning_tr: "Tanıştığıma memnunum", emoji: "🎌" },
            { japanese: "おなまえは？", romaji: "onamae wa?", meaning_tr: "Adınız nedir?", emoji: "❓" },
          ],
          xpReward: 15,
        },
        {
          id: "les-3-1-grammar-1",
          title: "İlk Gramer: です (desu)",
          description: "Japonca'da dır/dir yapısını nasıl kuracağımızı öğrenelim.",
          icon: "architecture",
          type: "grammar",
          grammarItems: [
            {
              id: "gr-desu-1",
              sentence: "がくせい です",
              romaji: "gakusei desu",
              translation: "Öğrenciyim.",
              explanation: "Japoncada cümlelerin sonuna gelen 'desu', Türkçe'deki '-dır/-dir' veya '-yım/-yim' eklerine karşılık gelir. Cümleyi kibar ve tamamlanmış yapar.",
              breakdown: [
                { word: "がくせい", romaji: "gakusei", meaning: "Öğrenci" },
                { word: "です", romaji: "desu", meaning: "(Ben) ...yım", isParticle: true }
              ]
            },
            {
              id: "gr-desu-2",
              sentence: "にほんじん です",
              romaji: "nihonjin desu",
              translation: "Japonum.",
              explanation: "Kendini tanıtırken mesleğinin veya milliyetinin sonuna sadece 'desu' ekleyebilirsin.",
              breakdown: [
                { word: "にほんじん", romaji: "nihonjin", meaning: "Japon" },
                { word: "です", romaji: "desu", meaning: "(Ben) ...um", isParticle: true }
              ]
            },
            {
              id: "gr-desu-3",
              sentence: "せんせい です",
              romaji: "sensei desu",
              translation: "Öğretmenim.",
              explanation: "Başkası için konuşuyorsan 'O bir öğretmendir' anlamına da gelebilir. Japonca'da özne genellikle bağlamdan anlaşılır.",
              breakdown: [
                { word: "せんせい", romaji: "sensei", meaning: "Öğretmen" },
                { word: "です", romaji: "desu", meaning: "(Ben) ...im", isParticle: true }
              ]
            },
            {
              id: "gr-desu-4",
              sentence: "エンジニア です",
              romaji: "enjinia desu",
              translation: "Mühendisim.",
              explanation: "Katakana ile yazılan yabancı kökenli meslekler (engineer -> enjinia) için de aynı kural geçerlidir.",
              breakdown: [
                { word: "エンジニア", romaji: "enjinia", meaning: "Mühendis" },
                { word: "です", romaji: "desu", meaning: "(Ben) ...im", isParticle: true }
              ]
            }
          ],
          xpReward: 20,
        },
        {
          id: "les-3-1-grammar-2",
          title: "Konu Eki: は (wa)",
          description: "Kimden veya neden bahsettiğimizi belirtmek için は ekini öğreniyoruz.",
          icon: "link",
          type: "grammar",
          grammarItems: [
            {
              id: "gr-wa-1",
              sentence: "わたし は がくせい です",
              romaji: "watashi wa gakusei desu",
              translation: "Ben öğrenciyim.",
              explanation: "は (wa) eki, cümlenin NE HAKKINDA olduğunu gösterir. Yazılışı 'ha' (は) olmasına rağmen, partikel(ek) olarak kullanıldığında 'WA' diye okunur. 'Bana gelince, ben öğrenciyim' demektir.",
              breakdown: [
                { word: "わたし", romaji: "watashi", meaning: "Ben" },
                { word: "は", romaji: "wa", meaning: "(Konu Eki)", isParticle: true },
                { word: "がくせい", romaji: "gakusei", meaning: "Öğrenci" },
                { word: "です", romaji: "desu", meaning: "...yım", isParticle: true }
              ]
            },
            {
              id: "gr-wa-2",
              sentence: "アリ は せんせい です",
              romaji: "Ari wa sensei desu",
              translation: "Ali öğretmendir.",
              explanation: "Başkalarından bahsederken de kural aynıdır. [Kişi] + wa + [Durum] + desu.",
              breakdown: [
                { word: "アリ", romaji: "Ari", meaning: "Ali" },
                { word: "は", romaji: "wa", meaning: "(Konu Eki)", isParticle: true },
                { word: "せんせい", romaji: "sensei", meaning: "Öğretmen" },
                { word: "です", romaji: "desu", meaning: "...dir", isParticle: true }
              ]
            },
            {
              id: "gr-wa-3",
              sentence: "メルト は いしゃ です",
              romaji: "Meruto wa isha desu",
              translation: "Mert doktordur.",
              explanation: "İsimler yabancı olduğu için Katakana (メルト) ile yazılıyor, kural her zaman baştaki cümlenin konusunu belirten [は] ekidir.",
              breakdown: [
                { word: "メルト", romaji: "Meruto", meaning: "Mert" },
                { word: "は", romaji: "wa", meaning: "(Konu Eki)", isParticle: true },
                { word: "いしゃ", romaji: "isha", meaning: "Doktor" },
                { word: "です", romaji: "desu", meaning: "...dur", isParticle: true }
              ]
            },
            {
              id: "gr-wa-4",
              sentence: "わたし は トルコじん です",
              romaji: "watashi wa torukojin desu",
              translation: "Ben Türküm.",
              explanation: "Milliyet söylerken Ülke adının sonuna JIN (じん) eklenir. トルコ (Toruko) + じん (jin) = Türk.",
              breakdown: [
                { word: "わたし", romaji: "watashi", meaning: "Ben" },
                { word: "は", romaji: "wa", meaning: "(Konu Eki)", isParticle: true },
                { word: "トルコじん", romaji: "torukojin", meaning: "Türk (Kişi)" },
                { word: "です", romaji: "desu", meaning: "...üm", isParticle: true }
              ]
            }
          ],
          xpReward: 20,
        },
        {
          id: "les-3-1-grammar-3",
          title: "Soru Eki: か (ka)",
          description: "Japonca'da soru sormak için soru işareti yerine か (ka) kullanılır.",
          icon: "help_center",
          type: "grammar",
          grammarItems: [
            {
              id: "gr-ka-1",
              sentence: "がくせい です か",
              romaji: "gakusei desu ka",
              translation: "Öğrenci misin?",
              explanation: "Japonca'da soru işareti yoktur (modern yazımda bazen kullanılsa da). Cümlenin en sonuna か (ka) ekleyerek cümleyi soru yaparsınız.",
              breakdown: [
                { word: "がくせい", romaji: "gakusei", meaning: "Öğrenci" },
                { word: "です", romaji: "desu", meaning: "...dir / ...misin", isParticle: true },
                { word: "か", romaji: "ka", meaning: "(Soru Eki)", isParticle: true }
              ]
            },
            {
              id: "gr-ka-2",
              sentence: "にほんじん です か",
              romaji: "nihonjin desu ka",
              translation: "Japon musun?",
              explanation: "[İsim] + desu + ka? = [İsim] misin? kalıbı ile karşımızdakine soru sorabiliriz.",
              breakdown: [
                { word: "にほんじん", romaji: "nihonjin", meaning: "Japon" },
                { word: "です", romaji: "desu", meaning: "..." },
                { word: "か", romaji: "ka", meaning: "(Soru Eki)", isParticle: true }
              ]
            },
            {
              id: "gr-ka-3",
              sentence: "アリ は せんせい です か",
              romaji: "Ari wa sensei desu ka",
              translation: "Ali öğretmen midir?",
              explanation: "Uzun cümlelerde de kural değişmez, sadece en sona か (ka) eklenir.",
              breakdown: [
                { word: "アリ", romaji: "Ari", meaning: "Ali" },
                { word: "は", romaji: "wa", meaning: "(Konu Eki)", isParticle: true },
                { word: "せんせい", romaji: "sensei", meaning: "Öğretmen" },
                { word: "です", romaji: "desu", meaning: "...dir" },
                { word: "か", romaji: "ka", meaning: "(Soru Eki)", isParticle: true }
              ]
            }
          ],
          xpReward: 20,
        },
        {
          id: "les-3-2",
          title: "Mesleğini Söyleme",
          description: "Çeşitli meslekleri Japoncada söylemeyi öğren",
          icon: "work",
          type: "flashcard",
          vocabItems: [
            { japanese: "がくせい", romaji: "gakusei", meaning_tr: "Öğrenci", emoji: "🎓" },
            { japanese: "せんせい", romaji: "sensei", meaning_tr: "Öğretmen", emoji: "👨‍🏫" },
            { japanese: "いしゃ", romaji: "isha", meaning_tr: "Doktor", emoji: "👨‍⚕️" },
            { japanese: "エンジニア", romaji: "enjinia", meaning_tr: "Mühendis", emoji: "👷" },
            { japanese: "かいしゃいん", romaji: "kaishain", meaning_tr: "Şirket çalışanı", emoji: "💼" },
          ],
          xpReward: 15,
        },
        {
          id: "les-3-3",
          title: "Ülke ve Milliyetler",
          description: "Ülke adlarını ve milliyetleri söylemeyi öğren",
          icon: "public",
          type: "flashcard",
          vocabItems: [
            { japanese: "にほん", romaji: "nihon", meaning_tr: "Japonya", emoji: "🇯🇵" },
            { japanese: "トルコ", romaji: "toruko", meaning_tr: "Türkiye", emoji: "🇹🇷" },
            { japanese: "アメリカ", romaji: "amerika", meaning_tr: "Amerika", emoji: "🇺🇸" },
            { japanese: "にほんじん", romaji: "nihonjin", meaning_tr: "Japon (kişi)", emoji: "🧑‍🦰" },
            { japanese: "トルコじん", romaji: "torukojin", meaning_tr: "Türk (kişi)", emoji: "🧑" },
          ],
          xpReward: 15,
        },
        {
          id: "les-3-4",
          title: "Kontrol Noktası",
          description: "Kendini tanıtma becerilerini test et!",
          icon: "flag",
          type: "checkpoint",
          xpReward: 30,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════
    // BÖLÜM 4: HİRAGANA İLERİ
    // ═══════════════════════════════════════════════════════════
    {
      id: "sec-4",
      title: "Hiragana İleri",
      description: "さ-そ, た-と ve な-の satırlarını öğren",
      emoji: "📝",
      color: "amber",
      lessons: [
        {
          id: "les-4-1",
          title: "さ Satırı: sa shi su se so",
          description: "Sonraki 5 hiragana harfini ve 2 eski harfi öğren",
          icon: "text_fields",
          type: "flashcard",
          cardIds: ["h_a", "h_ka", "h_sa", "h_shi", "h_su", "h_se", "h_so"],
          xpReward: 15,
        },
        {
          id: "les-4-2",
          title: "た Satırı: ta chi tsu te to",
          description: "Sonraki 5 hiragana harfini ve 2 eski harfi öğren",
          icon: "text_fields",
          type: "flashcard",
          cardIds: ["h_i", "h_ki", "h_ta", "h_chi", "h_tsu", "h_te", "h_to"],
          xpReward: 15,
        },
        {
          id: "les-4-3",
          title: "な Satırı: na ni nu ne no",
          description: "Sonraki 5 hiragana harfini ve 2 eski harfi öğren",
          icon: "text_fields",
          type: "flashcard",
          cardIds: ["h_u", "h_ku", "h_na", "h_ni", "h_nu", "h_ne", "h_no"],
          xpReward: 15,
        },
        {
          id: "les-4-4",
          title: "Quiz: 25 Harf Tekrarı",
          description: "Tüm öğrendiğin harflerle büyük quiz!",
          icon: "quiz",
          type: "quiz",
          cardIds: [
            "h_a","h_i","h_u","h_e","h_o",
            "h_ka","h_ki","h_ku","h_ke","h_ko",
            "h_sa","h_shi","h_su","h_se","h_so",
            "h_ta","h_chi","h_tsu","h_te","h_to",
            "h_na","h_ni","h_nu","h_ne","h_no",
          ],
          xpReward: 25,
        },
        {
          id: "les-4-5",
          title: "Kontrol Noktası",
          description: "25 harfin tamamını biliyor musun?",
          icon: "flag",
          type: "checkpoint",
          cardIds: [
            "h_a","h_i","h_u","h_e","h_o",
            "h_ka","h_ki","h_ku","h_ke","h_ko",
            "h_sa","h_shi","h_su","h_se","h_so",
            "h_ta","h_chi","h_tsu","h_te","h_to",
            "h_na","h_ni","h_nu","h_ne","h_no",
          ],
          xpReward: 35,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════
    // BÖLÜM 5: TEMEL KALILAR
    // ═══════════════════════════════════════════════════════════
    {
      id: "sec-5",
      title: "Temel Kalıplar",
      description: "Soru sorma, olumsuz cümle ve basit fiilleri öğren",
      emoji: "💬",
      color: "rose",
      lessons: [
        {
          id: "les-5-1",
          title: "Soru Cümleleri",
          description: "'ka' eki ile soru sormayı öğren",
          icon: "help",
          type: "flashcard",
          vocabItems: [
            { japanese: "〜ですか？", romaji: "~ desu ka?", meaning_tr: "~ mi/mı? (soru)", emoji: "❓" },
            { japanese: "なに？", romaji: "nani?", meaning_tr: "Ne?", emoji: "🤔" },
            { japanese: "だれ？", romaji: "dare?", meaning_tr: "Kim?", emoji: "👤" },
            { japanese: "どこ？", romaji: "doko?", meaning_tr: "Nerede?", emoji: "📍" },
            { japanese: "いつ？", romaji: "itsu?", meaning_tr: "Ne zaman?", emoji: "⏰" },
          ],
          xpReward: 15,
        },
        {
          id: "les-5-2",
          title: "Olumsuz Cümleler",
          description: "Olumsuz cümleler kurmayı öğren",
          icon: "block",
          type: "flashcard",
          vocabItems: [
            { japanese: "〜じゃないです", romaji: "~ ja nai desu", meaning_tr: "~ değildir", emoji: "❌" },
            { japanese: "〜ません", romaji: "~ masen", meaning_tr: "~ yapmaz (olumsuz fiil)", emoji: "🚫" },
            { japanese: "いいえ", romaji: "iie", meaning_tr: "Hayır", emoji: "🙅" },
            { japanese: "はい", romaji: "hai", meaning_tr: "Evet", emoji: "🙆" },
          ],
          xpReward: 15,
        },
        {
          id: "les-5-3",
          title: "Temel Fiiller",
          description: "Kullanışlı Japonca fiiller öğren",
          icon: "directions_run",
          type: "flashcard",
          vocabItems: [
            { japanese: "たべます", romaji: "tabemasu", meaning_tr: "yemek yemek", emoji: "🍚" },
            { japanese: "のみます", romaji: "nomimasu", meaning_tr: "içmek", emoji: "🍵" },
            { japanese: "いきます", romaji: "ikimasu", meaning_tr: "gitmek", emoji: "🚶" },
            { japanese: "きます", romaji: "kimasu", meaning_tr: "gelmek", emoji: "🏃" },
            { japanese: "みます", romaji: "mimasu", meaning_tr: "bakmak / izlemek", emoji: "👀" },
          ],
          xpReward: 15,
        },
        {
          id: "les-5-4",
          title: "Gramer: Soru ve Olumsuzluk",
          description: "Japonca'da soru sormayı ve olumsuz cümleleri kurmayı öğrenelim.",
          icon: "architecture",
          type: "grammar",
          grammarItems: [
            {
              id: "gr-sec5-1",
              sentence: "これ は なに です か",
              romaji: "kore wa nani desu ka",
              translation: "Bu nedir?",
              explanation: "Soru sormak için cümlenin sonuna sadece 'ka' (か) eklenir. Soru işareti (?) yazılı dilde her zaman kullanılmaz, ancak vurguyu 'ka' sağlar.",
              breakdown: [
                { word: "これ", romaji: "kore", meaning: "Bu" },
                { word: "は", romaji: "wa", meaning: "(konu)", isParticle: true },
                { word: "なに", romaji: "nani", meaning: "Ne" },
                { word: "です", romaji: "desu", meaning: "dır/dir", isParticle: true },
                { word: "か", romaji: "ka", meaning: "(soru)", isParticle: true }
              ]
            },
            {
              id: "gr-sec5-2",
              sentence: "がくせい じゃ ない です",
              romaji: "gakusei ja nai desu",
              translation: "Öğrenci değilim.",
              explanation: "'desu' (olumlu) yapısının olumsuz hali 'ja nai desu' şeklindedir. İsimlerin ve bazı sıfatların sonuna gelerek onları olumsuz yapar.",
              breakdown: [
                { word: "がくせい", romaji: "gakusei", meaning: "Öğrenci" },
                { word: "じゃ ない です", romaji: "ja nai desu", meaning: "değilim", isParticle: true }
              ]
            },
            {
              id: "gr-sec5-3",
              sentence: "すし を たべます",
              romaji: "sushi o tabemasu",
              translation: "Suşi yiyorum.",
              explanation: "Japoncada fiillerin standart, kibar bitişi '-masu'dur (tabemasu = yerim). Nesneleri belirtmek için 'o' (を) eki kullanılır.",
              breakdown: [
                { word: "すし", romaji: "sushi", meaning: "Suşi" },
                { word: "を", romaji: "o", meaning: "(belirtme)", isParticle: true },
                { word: "たべます", romaji: "tabemasu", meaning: "yerim / yiyorum" }
              ]
            }
          ],
          xpReward: 25,
        },
        {
          id: "les-5-5",
          title: "Kontrol Noktası",
          description: "Kalıp bilgini test et!",
          icon: "flag",
          type: "checkpoint",
          xpReward: 30,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════
    // BÖLÜM 6: SAYILAR VE ZAMAN
    // ═══════════════════════════════════════════════════════════
    {
      id: "sec-6",
      title: "Sayılar ve Zaman",
      description: "Japoncada sayıları ve saati söylemeyi öğren",
      emoji: "🔢",
      color: "cyan",
      lessons: [
        {
          id: "les-6-1",
          title: "1'den 10'a Kadar Sayma",
          description: "Japoncada 10'a kadar saymayı öğren",
          icon: "looks_one",
          type: "flashcard",
          vocabItems: [
            { japanese: "いち", romaji: "ichi", meaning_tr: "1 (bir)", emoji: "1️⃣" },
            { japanese: "に", romaji: "ni", meaning_tr: "2 (iki)", emoji: "2️⃣" },
            { japanese: "さん", romaji: "san", meaning_tr: "3 (üç)", emoji: "3️⃣" },
            { japanese: "し / よん", romaji: "shi / yon", meaning_tr: "4 (dört)", emoji: "4️⃣" },
            { japanese: "ご", romaji: "go", meaning_tr: "5 (beş)", emoji: "5️⃣" },
            { japanese: "ろく", romaji: "roku", meaning_tr: "6 (altı)", emoji: "6️⃣" },
            { japanese: "しち / なな", romaji: "shichi / nana", meaning_tr: "7 (yedi)", emoji: "7️⃣" },
            { japanese: "はち", romaji: "hachi", meaning_tr: "8 (sekiz)", emoji: "8️⃣" },
            { japanese: "きゅう / く", romaji: "kyuu / ku", meaning_tr: "9 (dokuz)", emoji: "9️⃣" },
            { japanese: "じゅう", romaji: "juu", meaning_tr: "10 (on)", emoji: "🔟" },
          ],
          xpReward: 20,
        },
        {
          id: "les-6-2",
          title: "100'e Kadar Sayma",
          description: "10'lu ve 100'lü sayıları öğren",
          icon: "calculate",
          type: "flashcard",
          vocabItems: [
            { japanese: "にじゅう", romaji: "nijuu", meaning_tr: "20 (yirmi)", emoji: "📊" },
            { japanese: "さんじゅう", romaji: "sanjuu", meaning_tr: "30 (otuz)", emoji: "📊" },
            { japanese: "ごじゅう", romaji: "gojuu", meaning_tr: "50 (elli)", emoji: "📊" },
            { japanese: "ひゃく", romaji: "hyaku", meaning_tr: "100 (yüz)", emoji: "💯" },
          ],
          xpReward: 15,
        },
        {
          id: "les-6-3",
          title: "Saati Söyleme",
          description: "Japoncada saati söylemeyi öğren",
          icon: "schedule",
          type: "flashcard",
          vocabItems: [
            { japanese: "いまなんじですか？", romaji: "ima nanji desu ka?", meaning_tr: "Şimdi saat kaç?", emoji: "⏰" },
            { japanese: "いちじ", romaji: "ichiji", meaning_tr: "Saat 1", emoji: "🕐" },
            { japanese: "ごぜん", romaji: "gozen", meaning_tr: "Öğleden önce (ÖÖ)", emoji: "🌅" },
            { japanese: "ごご", romaji: "gogo", meaning_tr: "Öğleden sonra (ÖS)", emoji: "🌇" },
          ],
          xpReward: 15,
        },
        {
          id: "les-6-4",
          title: "Gramer: Zaman ve Yaş",
          description: "Japonca'da sayıları cümle içinde nasıl kullandığımızı öğrenelim.",
          icon: "architecture",
          type: "grammar",
          grammarItems: [
            {
              id: "gr-sec6-1",
              sentence: "いま さんじ です",
              romaji: "ima sanji desu",
              translation: "Şimdi saat üç.",
              explanation: "Saatleri söylemek için sayının sonuna '-ji' (zaman/saat) eklenir.",
              breakdown: [
                { word: "いま", romaji: "ima", meaning: "Şimdi" },
                { word: "さんじ", romaji: "sanji", meaning: "Saat 3" },
                { word: "です", romaji: "desu", meaning: "dır/dir", isParticle: true }
              ]
            },
            {
              id: "gr-sec6-2",
              sentence: "わたし は にじゅうさい です",
              romaji: "watashi wa nijuusai desu",
              translation: "Ben yirmi yaşındayım.",
              explanation: "Yaş söylerken sayının sonuna '-sai' (yaşında) eklenir. Nijuu (20) + sai = Nijuusai.",
              breakdown: [
                { word: "わたし", romaji: "watashi", meaning: "Ben" },
                { word: "は", romaji: "wa", meaning: "(konu)", isParticle: true },
                { word: "にじゅうさい", romaji: "nijuusai", meaning: "20 yaşında" },
                { word: "です", romaji: "desu", meaning: "(yım)", isParticle: true }
              ]
            }
          ],
          xpReward: 25,
        },
        {
          id: "les-6-5",
          title: "Kontrol Noktası",
          description: "Sayılar ve zaman bilgini test et!",
          icon: "flag",
          type: "checkpoint",
          xpReward: 30,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════
    // BÖLÜM 7: HİRAGANA USTALIK
    // ═══════════════════════════════════════════════════════════
    {
      id: "sec-7",
      title: "Hiragana Ustalık",
      description: "Kalan tüm hiragana harflerini öğren ve ustalaş",
      emoji: "🏆",
      color: "orange",
      lessons: [
        {
          id: "les-7-1",
          title: "は Satırı: ha hi fu he ho",
          description: "Sonraki 5 hiragana harfini ve 2 eski harfi öğren",
          icon: "text_fields",
          type: "flashcard",
          cardIds: ["h_ka", "h_sa", "h_ha", "h_hi", "h_fu", "h_he", "h_ho"],
          xpReward: 15,
        },
        {
          id: "les-7-2",
          title: "ま Satırı: ma mi mu me mo",
          description: "Sonraki 5 hiragana harfini ve 2 eski harfi öğren",
          icon: "text_fields",
          type: "flashcard",
          cardIds: ["h_ta", "h_na", "h_ma", "h_mi", "h_mu", "h_me", "h_mo"],
          xpReward: 15,
        },
        {
          id: "les-7-3",
          title: "や-ら-わ Satırları",
          description: "Kalan harfler ve eski harflerle çalışma",
          icon: "text_fields",
          type: "flashcard",
          cardIds: ["h_a", "h_i", "h_ya", "h_yu", "h_yo", "h_ra", "h_ri", "h_ru", "h_re", "h_ro", "h_wa", "h_wo", "h_n"],
          xpReward: 20,
        },
        {
          id: "les-7-4",
          title: "Büyük Quiz: Tüm 46 Harf",
          description: "Tüm hiragana harflerini test et!",
          icon: "quiz",
          type: "quiz",
          cardIds: [
            "h_a","h_i","h_u","h_e","h_o",
            "h_ka","h_ki","h_ku","h_ke","h_ko",
            "h_sa","h_shi","h_su","h_se","h_so",
            "h_ta","h_chi","h_tsu","h_te","h_to",
            "h_na","h_ni","h_nu","h_ne","h_no",
            "h_ha","h_hi","h_fu","h_he","h_ho",
            "h_ma","h_mi","h_mu","h_me","h_mo",
            "h_ya","h_yu","h_yo",
            "h_ra","h_ri","h_ru","h_re","h_ro",
            "h_wa","h_wo","h_n",
          ],
          xpReward: 40,
        },
        {
          id: "les-7-5",
          title: "Gramer: Fiiller ve Ekler (ni/e /de)",
          description: "Japonca'da yönelme ve bulunma eklerini öğren",
          icon: "architecture",
          type: "grammar",
          grammarItems: [
            {
              id: "gr-sec7-1",
              sentence: "がっこう に いきます",
              romaji: "gakkou ni ikimasu",
              translation: "Okula gidiyorum.",
              explanation: "Bir yere yönelmeyi anlatırken 'ni' (e/a) eki kullanılır.",
              breakdown: [
                { word: "がっこう", romaji: "gakkou", meaning: "Okul" },
                { word: "に", romaji: "ni", meaning: "(yönelme -a/-e)", isParticle: true },
                { word: "いきます", romaji: "ikimasu", meaning: "gidiyorum" }
              ]
            },
            {
              id: "gr-sec7-2",
              sentence: "いえ で たべます",
              romaji: "ie de tabemasu",
              translation: "Evde yiyorum.",
              explanation: "Bir eylemin yapıldığı yeri belirtmek için 'de' (de/da) kullanılır.",
              breakdown: [
                { word: "いえ", romaji: "ie", meaning: "Ev" },
                { word: "で", romaji: "de", meaning: "(bulunma -de/-da)", isParticle: true },
                { word: "たべます", romaji: "tabemasu", meaning: "yerim / yiyorum" }
              ]
            }
          ],
          xpReward: 25,
        },
        {
          id: "les-7-6",
          title: "Kontrol Noktası",
          description: "Hiragana ustalık sınavı — hepsini biliyor musun?",
          icon: "flag",
          type: "checkpoint",
          cardIds: [
            "h_a","h_i","h_u","h_e","h_o",
            "h_ka","h_ki","h_ku","h_ke","h_ko",
            "h_sa","h_shi","h_su","h_se","h_so",
            "h_ta","h_chi","h_tsu","h_te","h_to",
            "h_na","h_ni","h_nu","h_ne","h_no",
            "h_ha","h_hi","h_fu","h_he","h_ho",
            "h_ma","h_mi","h_mu","h_me","h_mo",
            "h_ya","h_yu","h_yo",
            "h_ra","h_ri","h_ru","h_re","h_ro",
            "h_wa","h_wo","h_n",
          ],
          xpReward: 50,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════
    // BÖLÜM 8: GÜNLÜK HAYAT
    // ═══════════════════════════════════════════════════════════
    {
      id: "sec-8",
      title: "Günlük Hayat",
      description: "Yiyecek-içecek, aile ve hobiler hakkında konuşma",
      emoji: "🍱",
      color: "pink",
      lessons: [
        {
          id: "les-8-1",
          title: "Yiyecek ve İçecekler",
          description: "Yiyecek ve içeceklerin adlarını öğren",
          icon: "restaurant",
          type: "flashcard",
          vocabItems: [
            { japanese: "みず", romaji: "mizu", meaning_tr: "Su", emoji: "💧" },
            { japanese: "おちゃ", romaji: "ocha", meaning_tr: "Çay", emoji: "🍵" },
            { japanese: "ごはん", romaji: "gohan", meaning_tr: "Pirinç / Yemek", emoji: "🍚" },
            { japanese: "さかな", romaji: "sakana", meaning_tr: "Balık", emoji: "🐟" },
            { japanese: "にく", romaji: "niku", meaning_tr: "Et", emoji: "🥩" },
            { japanese: "やさい", romaji: "yasai", meaning_tr: "Sebze", emoji: "🥬" },
          ],
          xpReward: 15,
        },
        {
          id: "les-8-2",
          title: "Aileyi Tanıtma",
          description: "Aile üyelerini Japoncada söylemeyi öğren",
          icon: "family_restroom",
          type: "flashcard",
          vocabItems: [
            { japanese: "おかあさん", romaji: "okaasan", meaning_tr: "Anne", emoji: "👩" },
            { japanese: "おとうさん", romaji: "otousan", meaning_tr: "Baba", emoji: "👨" },
            { japanese: "おにいさん", romaji: "oniisan", meaning_tr: "Ağabey", emoji: "🧑" },
            { japanese: "おねえさん", romaji: "oneesan", meaning_tr: "Abla", emoji: "👩" },
            { japanese: "いもうと", romaji: "imouto", meaning_tr: "Kız kardeş", emoji: "👧" },
            { japanese: "おとうと", romaji: "otouto", meaning_tr: "Erkek kardeş", emoji: "👦" },
          ],
          xpReward: 15,
        },
        {
          id: "les-8-3",
          title: "Hobiler",
          description: "Hobilerin hakkında konuşmayı öğren",
          icon: "sports_esports",
          type: "flashcard",
          vocabItems: [
            { japanese: "しゅみ", romaji: "shumi", meaning_tr: "Hobi", emoji: "🎨" },
            { japanese: "おんがく", romaji: "ongaku", meaning_tr: "Müzik", emoji: "🎵" },
            { japanese: "えいが", romaji: "eiga", meaning_tr: "Film", emoji: "🎬" },
            { japanese: "りょこう", romaji: "ryokou", meaning_tr: "Seyahat", emoji: "✈️" },
            { japanese: "ゲーム", romaji: "geemu", meaning_tr: "Oyun", emoji: "🎮" },
          ],
          xpReward: 15,
        },
        {
          id: "les-8-4",
          title: "Gramer: Sıfatlar ve Beğeniler (Suki / Kirai)",
          description: "Japonca'da sevdiğimiz ve sevmediğimiz şeyleri nasıl söyleriz?",
          icon: "architecture",
          type: "grammar",
          grammarItems: [
            {
              id: "gr-sec8-1",
              sentence: "すし が すき です",
              romaji: "sushi ga suki desu",
              translation: "Suşiyi severim.",
              explanation: "'Suki' (sevmek/beğenmek) cümlesinde nesne her zaman 'ga' (が) eki alır. Unutmayın, 'o' (を) eki kullanılmaz.",
              breakdown: [
                { word: "すし", romaji: "sushi", meaning: "Suşi" },
                { word: "が", romaji: "ga", meaning: "(özne/belirtme)", isParticle: true },
                { word: "すき です", romaji: "suki desu", meaning: "severim" }
              ]
            },
            {
              id: "gr-sec8-2",
              sentence: "にく が きらい です",
              romaji: "niku ga kirai desu",
              translation: "Et sevmem / nefret ederim.",
              explanation: "'Kirai' sevmemek anlamına gelir. Tıpkı 'suki' gibi 'ga' ekiyle kullanılır.",
              breakdown: [
                { word: "にく", romaji: "niku", meaning: "Et" },
                { word: "が", romaji: "ga", meaning: "(özne/belirtme)", isParticle: true },
                { word: "きらい です", romaji: "kirai desu", meaning: "sevmem" }
              ]
            }
          ],
          xpReward: 25,
        },
        {
          id: "les-8-5",
          title: "Final Sınavı",
          description: "A1 Bölüm 1 final sınavı — tüm bilgini kanıtla!",
          icon: "emoji_events",
          type: "checkpoint",
          xpReward: 50,
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════
    // BÖLÜM 9: KATAKANA TEMELLERİ
    // ═══════════════════════════════════════════════════════════
    {
      id: "sec-9",
      title: "Katakana ve Yabancı Kelimeler",
      description: "Japoncadeki yabancı kökenli kelimeleri yazmak için kullanılan Katakana ile tanış",
      emoji: "🌎",
      color: "blue",
      lessons: [
        {
          id: "les-9-1",
          title: "Katakana Nedir?",
          description: "Katakana'nın İngilizce ve diğer dillerden geçen kelimelerde kullanımını gör",
          icon: "public",
          type: "flashcard",
          slides: [
            {
              title: "Katakana Neden Var?",
              content: "Japonlar dışarıdan kendi dillerine geçen kelimeleri (örneğin bilgisayar, kamera, kahve) Hiragana ile değil, Katakana ile yazarlar.",
              emoji: "🌍"
            },
            {
              title: "Keskin ve Düz Çizgiler",
              content: "Katakana harfleri, Hiragana'nın aksine çok daha keskin ve düz çizgilere sahiptir.\nÖrn: A (ア), K (カ).",
              emoji: "📐"
            }
          ],
          cardIds: ["h_a", "h_ka", "h_sa", "k_a", "k_i", "k_u", "k_e", "k_o"],
          xpReward: 15,
        },
        {
          id: "les-9-2",
          title: "Ka, Sa, Ta Grupları",
          description: "カ(Ka), サ(Sa) ve タ(Ta) gruplarını öğren",
          icon: "text_fields",
          type: "flashcard",
          cardIds: ["h_ta", "h_na", "h_ma", "k_ka", "k_ki", "k_ku", "k_ke", "k_ko", "k_sa", "k_shi", "k_su", "k_se", "k_so"],
          xpReward: 20,
        },
        {
          id: "les-9-3",
          title: "Quiz: Katakana Giriş",
          description: "Şimdiye kadar öğrendiğin Katakana harflerini test et",
          icon: "quiz",
          type: "quiz",
          cardIds: ["k_a", "k_i", "k_u", "k_e", "k_o", "k_ka", "k_ki", "k_ku", "k_ke", "k_ko", "k_sa", "k_shi", "k_su", "k_se", "k_so"],
          xpReward: 25,
        },
        {
          id: "les-9-4",
          title: "Yabancı Kelimeler (Gairaigo)",
          description: "Japonların günlük hayatta kullandığı İngilizce kökenli kelimeler",
          icon: "fastfood",
          type: "flashcard",
          vocabItems: [
            { japanese: "カメラ", romaji: "kamera", meaning_tr: "Kamera", emoji: "📷" },
            { japanese: "コーヒー", romaji: "koohii", meaning_tr: "Kahve", emoji: "☕" },
            { japanese: "タクシー", romaji: "takushii", meaning_tr: "Taksi", emoji: "🚕" },
            { japanese: "ホテル", romaji: "hoteru", meaning_tr: "Otel", emoji: "🏨" },
            { japanese: "サッカー", romaji: "sakkaa", meaning_tr: "Futbol", emoji: "⚽" },
          ],
          xpReward: 15,
        },
        {
          id: "les-9-5",
          title: "Gramer: Katakana ile Cümle Kurmak",
          description: "Öğrendiğin yabancı kelimeleri Japonca gramer yapısında kullan.",
          icon: "architecture",
          type: "grammar",
          grammarItems: [
            {
              id: "gr-sec9-1",
              sentence: "コーヒー を のみます",
              romaji: "koohii o nomimasu",
              translation: "Kahve içiyorum.",
              explanation: "Japonlar katakana kelimeleri tamamen normal Japonca kurallarıyla birleştirir. Kelime İngilizce kökenli 'Coffee' olsa da gramer tamamen Japonca.",
              breakdown: [
                { word: "コーヒー", romaji: "koohii", meaning: "Kahve" },
                { word: "を", romaji: "o", meaning: "(belirtme)", isParticle: true },
                { word: "のみます", romaji: "nomimasu", meaning: "içerim" }
              ]
            },
            {
              id: "gr-sec9-2",
              sentence: "サッカー が すき です",
              romaji: "sakkaa ga suki desu",
              translation: "Futbol (soccer) severim.",
              explanation: "Burada da bildiğimiz 'suki' (sevmek) yapısını 'soccer' (futbol) kelimesi ile kullandık.",
              breakdown: [
                { word: "サッカー", romaji: "sakkaa", meaning: "Futbol" },
                { word: "が", romaji: "ga", meaning: "(özne/belirtme)", isParticle: true },
                { word: "すき です", romaji: "suki desu", meaning: "severim" }
              ]
            }
          ],
          xpReward: 25,
        },
        {
          id: "les-9-6",
          title: "Kontrol Noktası",
          description: "Katakana ve Yabancı Kelimeler testini geç!",
          icon: "flag",
          type: "checkpoint",
          cardIds: ["k_a", "k_i", "k_u", "k_e", "k_o", "k_ka", "k_ki", "k_ku", "k_ke", "k_ko"],
          xpReward: 40,
        },
      ],
    },
  ],
};

// Pratik modu vb. için sistemdeki tüm gramer kartlarını düz bir liste yapar
export const allGrammarData = japaneseCourse.sections
  .flatMap(s => s.lessons)
  .flatMap(l => l.grammarItems || []);

// ── Yardımcı Fonksiyonlar ───────────────────────────────────────

/** Toplam ders sayısı */
export function getTotalLessons(course: Course): number {
  return course.sections.reduce((sum, sec) => sum + sec.lessons.length, 0);
}

/** Toplam kazanılabilir XP */
export function getTotalXP(course: Course): number {
  return course.sections.reduce(
    (sum, sec) => sum + sec.lessons.reduce((s, l) => s + l.xpReward, 0),
    0
  );
}

/** Ders ID'sine göre ders ve bölüm bul */
export function findLesson(course: Course, lessonId: string): { section: Section; lesson: Lesson } | null {
  for (const section of course.sections) {
    const lesson = section.lessons.find(l => l.id === lessonId);
    if (lesson) return { section, lesson };
  }
  return null;
}

/** Bir dersin kilidinin açık olup olmadığını kontrol et */
export function isLessonUnlocked(course: Course, lessonId: string, completedLessons: string[]): boolean {
  return true; // Test aşaması için tüm dersler açık
  /*
  for (const section of course.sections) {
    for (let i = 0; i < section.lessons.length; i++) {
      if (section.lessons[i].id === lessonId) {
        // İlk ders her zaman açık
        if (i === 0) {
          // Önceki bölümün son dersi tamamlanmış mı kontrol et
          const sectionIndex = course.sections.indexOf(section);
          if (sectionIndex === 0) return true;
          const prevSection = course.sections[sectionIndex - 1];
          const prevLastLesson = prevSection.lessons[prevSection.lessons.length - 1];
          return completedLessons.includes(prevLastLesson.id);
        }
        // Önceki ders tamamlanmışsa açık
        return completedLessons.includes(section.lessons[i - 1].id);
      }
    }
  }
  return false;
  */
}
