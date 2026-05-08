import { Section } from '../types/course';

export const chapter31: Section = {
  id: "sec-31",
  title: "A1 Final: Te Formu ve Kapanış",
  description: "Te iru ile devam eden eylemler ve tüm A1 yolculuğunun finali!",
  emoji: "🎌",
  color: "red",
  lessons: [
    {
      id: "les-31-1",
      title: "Te Iru: Devam Eden Eylem",
      description: "Şu an yapılan veya devam eden durumlar.",
      icon: "info",
      type: "reading",
      slides: [
        {
          title: "~Te Iru (ている): -yor / -mekte",
          content: "Te formu + 'iru' = süregelen bir eylem veya durum:\n\nTabete imasu. (Yemek yiyorum [şu an].)\nNihongo wo benkyou shite imasu. (Japonca çalışıyorum [şu an/sürekli].)\n\nBu form İngilizcedeki '-ing' gibi düşünülebilir.",
          emoji: "🔄"
        },
        {
          title: "Durum mu, Eylem mi?",
          content: "Te iru bazen süregelen bir durum da bildirebilir:\n\nKekkon shite imasu. (Evliyim. [evlenmiş durumda devam ediyor])\nNihon ni sunde imasu. (Japonya'da oturuyorum.)\nMegane wo kakete imasu. (Gözlük takıyorum [gözlüklü durumda].)",
          emoji: "💡"
        }
      ],
      xpReward: 10,
    },
    {
      id: "les-31-2",
      title: "Te Iru: Yaygın Kullanımlar",
      description: "Günlük hayatta 'şu an yapılan' eylemler.",
      icon: "list",
      type: "flashcard",
      vocabItems: [
        { japanese: "たべています", romaji: "tabete imasu", meaning_tr: "Yemek yiyorum (şu an)", emoji: "🍽️" },
        { japanese: "はたらいています", romaji: "hataraite imasu", meaning_tr: "Çalışıyorum (iş)", emoji: "💼" },
        { japanese: "すんでいます", romaji: "sunde imasu", meaning_tr: "Oturuyorum / Yaşıyorum", emoji: "🏠" },
        { japanese: "けっこんしています", romaji: "kekkon shite imasu", meaning_tr: "Evliyim", emoji: "💍" },
        { japanese: "べんきょうしています", romaji: "benkyou shite imasu", meaning_tr: "Çalışıyorum (ders)", emoji: "📚" },
        { japanese: "まっています", romaji: "matte imasu", meaning_tr: "Bekliyorum", emoji: "⏳" },
      ],
      xpReward: 20,
    },
    {
      id: "les-31-3",
      title: "A1 Kelime Hazinesi Tekrar",
      description: "En önemli A1 kelimeler - son bir geçiş.",
      icon: "refresh",
      type: "flashcard",
      vocabItems: [
        { japanese: "すみません", romaji: "sumimasen", meaning_tr: "Özür dilerim / Affedersiniz", emoji: "🙏" },
        { japanese: "ありがとう ございます", romaji: "arigatou gozaimasu", meaning_tr: "Teşekkür ederim (resmi)", emoji: "🙇" },
        { japanese: "どういたしまして", romaji: "dou itashimashite", meaning_tr: "Rica ederim", emoji: "😊" },
        { japanese: "わかりません", romaji: "wakarimasen", meaning_tr: "Anlamıyorum", emoji: "🤷" },
        { japanese: "もう いちど おねがいします", romaji: "mou ichido onegaishimasu", meaning_tr: "Bir kez daha lütfen", emoji: "🔁" },
        { japanese: "ゆっくり はなして ください", romaji: "yukkuri hanashite kudasai", meaning_tr: "Yavaş konuşun lütfen", emoji: "🐢" },
      ],
      xpReward: 20,
    },
    {
      id: "les-31-4",
      title: "Gramer: Te Iru ile Cümle",
      description: "Devam eden eylemleri ve durumları ifade et.",
      icon: "architecture",
      type: "grammar",
      grammarItems: [
        {
          id: "gr-sec31-1",
          sentence: "いま なに を して います か",
          romaji: "Ima nani wo shite imasu ka?",
          translation: "Şu an ne yapıyorsunuz?",
          explanation: "'Ima' = şu an. 'Shite imasu' = yapıyorum (te iru). Günlük konuşmada sıkça kullanılan bir soru.",
          breakdown: [
            { word: "いま", romaji: "ima", meaning: "şu an" },
            { word: "なに を", romaji: "nani wo", meaning: "ne (nesne)" },
            { word: "して います か", romaji: "shite imasu ka", meaning: "yapıyorsunuz? (te iru soru)" },
          ]
        },
        {
          id: "gr-sec31-2",
          sentence: "とうきょう に すんでいます",
          romaji: "Tokyo ni sunde imasu.",
          translation: "Tokyo'da yaşıyorum.",
          explanation: "'Sunde imasu' = yaşıyorum/oturuyorum. 'Sumu' (yaşamak) → 'sunde' (te formu) + 'imasu'. Bu devam eden bir durum.",
          breakdown: [
            { word: "とうきょう に", romaji: "tokyo ni", meaning: "Tokyo'da (ni = yer)" },
            { word: "すんでいます", romaji: "sunde imasu", meaning: "yaşıyorum (te iru - durum)" },
          ]
        },
        {
          id: "gr-sec31-3",
          sentence: "にほんご を べんきょう して います。 むずかしい です が、たのしい です",
          romaji: "Nihongo wo benkyou shite imasu. Muzukashii desu ga, tanoshii desu.",
          translation: "Japonca çalışıyorum. Zor ama eğlenceli.",
          explanation: "'Ga' (が) burada 'ama/fakat' anlamında bağlaç. 'Muzukashii desu ga, tanoshii desu' = Zor ama eğlenceli.",
          breakdown: [
            { word: "にほんごを べんきょう して います", romaji: "nihongo wo benkyou shite imasu", meaning: "Japonca çalışıyorum" },
            { word: "むずかしい です", romaji: "muzukashii desu", meaning: "zor" },
            { word: "が", romaji: "ga", meaning: "(ama / fakat)", isParticle: true },
            { word: "たのしい です", romaji: "tanoshii desu", meaning: "eğlenceli" },
          ]
        }
      ],
      xpReward: 25,
    },
    {
      id: "les-31-5",
      title: "🎌 A1 FINAL SINAVI",
      description: "Tüm A1 yolculuğunun büyük finali! Japonca A1 seviyesini tamamladın!",
      icon: "emoji_events",
      type: "checkpoint",
      xpReward: 100,
    }
  ],
};
