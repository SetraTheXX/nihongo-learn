import { Section } from '../types/course';

export const chapter20: Section = {
  id: "sec-20",
  title: "Nesne Takısı: Wo (を)",
  description: "Cümledeki nesneyi belirten 'wo' takısını ustaca kullan",
  emoji: "🎯",
  color: "red",
  lessons: [
    {
      id: "les-20-1",
      title: "Wo Takısı Nedir?",
      description: "Cümlenin nesnesini nasıl işaretleriz?",
      icon: "info",
      type: "reading",
      slides: [
        {
          title: "を (Wo) - Nesne Takısı",
          content: "Japonca'da cümledeki nesneyi (ne yapıldığını / ne'yi) belirtmek için 'wo' (を) takısı kullanılır.\n\nÖrnek:\nRingo wo tabemasu. (Elma YİYORUM.)\n\nBurada 'elma' nesne, yani yapılan şeyin hedefi. 'Wo' onu işaretler.",
          emoji: "🎯"
        },
        {
          title: "Türkçe ile Karşılaştırma",
          content: "Türkçe'de de buna benzer bir yapı var: '-i/-ı/-u/-ü' hal eki.\n\n'Elma yi-yorum' → Ringo wo tabemasu\n'Müzik dinilyorum' → Ongaku wo kikimasu\n\nTakı daima isimden sonra, fiilden önce gelir.",
          emoji: "🔄"
        }
      ],
      xpReward: 10,
    },
    {
      id: "les-20-2",
      title: "Yiyecek ve İçecekler",
      description: "Wo takısıyla kullanabileceğin temel yiyecekler.",
      icon: "restaurant",
      type: "flashcard",
      vocabItems: [
        { japanese: "ごはん", romaji: "gohan", meaning_tr: "Pirinç yemeği / Yemek", emoji: "🍚" },
        { japanese: "パン", romaji: "pan", meaning_tr: "Ekmek", emoji: "🍞" },
        { japanese: "さかな", romaji: "sakana", meaning_tr: "Balık", emoji: "🐟" },
        { japanese: "にく", romaji: "niku", meaning_tr: "Et", emoji: "🥩" },
        { japanese: "やさい", romaji: "yasai", meaning_tr: "Sebze", emoji: "🥦" },
        { japanese: "くだもの", romaji: "kudamono", meaning_tr: "Meyve", emoji: "🍎" },
        { japanese: "みず", romaji: "mizu", meaning_tr: "Su", emoji: "💧" },
        { japanese: "おちゃ", romaji: "ocha", meaning_tr: "Çay (Japon çayı)", emoji: "🍵" },
      ],
      xpReward: 20,
    },
    {
      id: "les-20-3",
      title: "Gramer: Wo ile Yeme/İçme Cümleleri",
      description: "Wo takısını farklı fiillerle kullan.",
      icon: "architecture",
      type: "grammar",
      grammarItems: [
        {
          id: "gr-sec20-1",
          sentence: "まいにち やさい を たべます",
          romaji: "Mainichi yasai wo tabemasu.",
          translation: "Her gün sebze yiyorum.",
          explanation: "'Mainichi' = her gün. 'Yasai wo tabemasu' = sebze yiyorum. Sağlıklı bir alışkanlık!",
          breakdown: [
            { word: "まいにち", romaji: "mainichi", meaning: "her gün" },
            { word: "やさい", romaji: "yasai", meaning: "sebze" },
            { word: "を", romaji: "wo", meaning: "(nesne eki)", isParticle: true },
            { word: "たべます", romaji: "tabemasu", meaning: "yerim" },
          ]
        },
        {
          id: "gr-sec20-2",
          sentence: "にほんご の うた を ききます",
          romaji: "Nihongo no uta wo kikimasu.",
          translation: "Japonca şarkı dinliyorum.",
          explanation: "'Nihongo no uta' = Japonca şarkı ('no' tamlaması). 'Wo kikimasu' = dinlerim.",
          breakdown: [
            { word: "にほんご の", romaji: "nihongo no", meaning: "Japonca'nın (tamlama)", isParticle: true },
            { word: "うた", romaji: "uta", meaning: "şarkı" },
            { word: "を", romaji: "wo", meaning: "(nesne eki)", isParticle: true },
            { word: "ききます", romaji: "kikimasu", meaning: "dinlerim" },
          ]
        },
        {
          id: "gr-sec20-3",
          sentence: "なに を のみたい です か",
          romaji: "Nani wo nomitai desu ka?",
          translation: "Ne içmek istiyorsunuz?",
          explanation: "'-tai desu' = '-mek istiyorum'. Bu forma 'masu' yerine '-tai' eklenince istek anlamı çıkar.",
          breakdown: [
            { word: "なに", romaji: "nani", meaning: "ne" },
            { word: "を", romaji: "wo", meaning: "(nesne eki)", isParticle: true },
            { word: "のみたい", romaji: "nomitai", meaning: "içmek istiyorum" },
            { word: "です か", romaji: "desu ka", meaning: "... mi?", isParticle: true },
          ]
        }
      ],
      xpReward: 25,
    },
    {
      id: "les-20-4",
      title: "Bölüm 20 Kontrol Noktası",
      description: "Wo takısını ve yiyecek kelimelerini test et.",
      icon: "flag",
      type: "checkpoint",
      xpReward: 35,
    }
  ],
};
