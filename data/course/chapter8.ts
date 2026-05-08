import { Section } from '../types/course';

export const chapter8: Section = {
  id: "sec-8",
  title: "Diller ve Gelişmiş Hiragana",
  description: "Özel işaretleri, birleşik sesleri ve yabancı diller hakkında konuşmayı öğren",
  emoji: "🗣️",
  color: "violet",
  lessons: [
    {
      id: "les-8-1",
      title: "Hiragana: Dakuten ve Handakuten",
      description: "Harflerin üzerine gelen (\") ve (°) işaretlerinin sesi nasıl değiştirdiğini öğren.",
      icon: "spellcheck",
      type: "reading",
      slides: [
        {
          title: "Dakuten (\")",
          content: "K, S, T, H sıralarındaki harflerin sağ üstüne iki küçük çizgi (\") koyduğumuzda ses yumuşar.\n\nK -> G (か ka -> が ga)\nS -> Z (さ sa -> ざ za)\nT -> D (た ta -> だ da)\nH -> B (は ha -> ば ba)",
          emoji: "✨"
        },
        {
          title: "Handakuten (°)",
          content: "Sadece H sırasındaki harflerin sağ üstüne küçük bir yuvarlak (°) konabilir. Bu da H sesini P sesine dönüştürür.\n\nH -> P (は ha -> ぱ pa)\n(ひ hi -> ぴ pi)",
          emoji: "🫧"
        }
      ],
      xpReward: 15,
    },
    {
      id: "les-8-2",
      title: "Özel İşaretler Pratiği",
      description: "Dakuten harflerini ezberleyelim.",
      icon: "draw",
      type: "flashcard",
      vocabItems: [
        { japanese: "が", romaji: "ga", meaning_tr: "ga" },
        { japanese: "ざ", romaji: "za", meaning_tr: "za" },
        { japanese: "だ", romaji: "da", meaning_tr: "da" },
        { japanese: "ば", romaji: "ba", meaning_tr: "ba" },
        { japanese: "ぱ", romaji: "pa", meaning_tr: "pa" },
      ],
      xpReward: 20,
    },
    {
      id: "les-8-3",
      title: "Uzun Sesler ve Sessizler",
      description: "Japonca'da küçük 'tsu' ve sesli harf uzatmaları.",
      icon: "keyboard_double_arrow_right",
      type: "reading",
      slides: [
        {
          title: "Uzun Sesli Harfler",
          content: "A, I, U, E, O seslerini uzatmak için yanına bir sesli harf daha ekleriz.\nÖrn: おかあさん (okaasan - anne), おにいさん (oniisan - abi), くうき (kuuki - hava).",
          emoji: "〰️"
        },
        {
          title: "Çift Ünsüzler (Küçük Tsu)",
          content: "Eğer bir harfin önüne küçük bir tsu (っ) konulursa, kendisinden sonra gelen sessiz harf çift okunur ve anlık bir duraklama yaratır.\nÖrn: きって (kitte - pul), ざっし (zasshi - dergi).",
          emoji: "⏸️"
        }
      ],
      xpReward: 15,
    },
    {
      id: "les-8-4",
      title: "Birleşen Sesler (kya, shu, cho)",
      description: "Harflerin küçük 'ya', 'yu', 'yo' ile birleşmesi.",
      icon: "group_add",
      type: "flashcard",
      vocabItems: [
        { japanese: "きゃ", romaji: "kya", meaning_tr: "ki + küçük ya = kya" },
        { japanese: "しゅ", romaji: "shu", meaning_tr: "shi + küçük yu = shu" },
        { japanese: "ちょ", romaji: "cho", meaning_tr: "chi + küçük yo = cho" },
        { japanese: "にゃ", romaji: "nya", meaning_tr: "ni + küçük ya = nya" },
        { japanese: "みょ", romaji: "myo", meaning_tr: "mi + küçük yo = myo" },
      ],
      xpReward: 20,
    },
    {
      id: "les-8-5",
      title: "Yabancı Diller",
      description: "Farklı dillerin Japonca isimleri.",
      icon: "translate",
      type: "flashcard",
      vocabItems: [
        { japanese: "えいご", romaji: "eigo", meaning_tr: "İngilizce", emoji: "🇬🇧" },
        { japanese: "にほんご", romaji: "nihongo", meaning_tr: "Japonca", emoji: "🇯🇵" },
        { japanese: "トルコご", romaji: "torukogo", meaning_tr: "Türkçe", emoji: "🇹🇷" },
        { japanese: "スペインご", romaji: "supeingo", meaning_tr: "İspanyolca", emoji: "🇪🇸" },
      ],
      xpReward: 20,
    },
    {
      id: "les-8-6",
      title: "Gramer: Dil Konuşma",
      description: "Hangi dilleri bildiğini söylemeyi öğren.",
      icon: "chat",
      type: "grammar",
      grammarItems: [
        {
          id: "gr-sec8-1",
          sentence: "わたし は トルコご を はなします",
          romaji: "watashi wa torukogo o hanashimasu",
          translation: "Ben Türkçe konuşurum(konuşuyorum).",
          explanation: "Ülke isminin sonuna 'go' (語) getirilirse o ülkenin dili elde edilir. Dili konuşma eylemini 'hanashimasu' fiili ile belirtiriz. Nesneyi(dili) belirtmek için 'o' (を) takısı kullanılır.",
          breakdown: [
            { word: "わたし", romaji: "watashi", meaning: "Ben" },
            { word: "は", romaji: "wa", meaning: "(konu)", isParticle: true },
            { word: "トルコご", romaji: "torukogo", meaning: "Türkçe (Dil)" },
            { word: "を", romaji: "o", meaning: "(belirtme)", isParticle: true },
            { word: "はなします", romaji: "hanashimasu", meaning: "Konuşurum" }
          ]
        }
      ],
      xpReward: 25,
    },
    {
      id: "les-8-7",
      title: "Bölüm Sonu Değerlendirmesi",
      description: "Özel işaretleri ve yabancı dilleri test et.",
      icon: "flag",
      type: "checkpoint",
      xpReward: 30,
    }
  ]
};
