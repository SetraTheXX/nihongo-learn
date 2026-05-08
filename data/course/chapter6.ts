import { Section } from '../types/course';

export const chapter6: Section = {
  id: "sec-6",
  title: "Yiyecek ve İçecek",
  description: "İçecek teklif etmeyi, tekliflere yanıt vermeyi ve katılmayı öğren",
  emoji: "☕",
  color: "orange",
  lessons: [
    {
      id: "les-6-1",
      title: "Gramer: Teklif Etme",
      description: "İnsanlara kibarca içecek veya yiyecek ikram etmeyi öğren.",
      icon: "coffee",
      type: "grammar",
      grammarItems: [
        {
          id: "gr-sec6-1",
          sentence: "コーヒー、のみます か",
          romaji: "koohii, nomimasu ka",
          translation: "Kahve içer misiniz?",
          explanation: "Masu (kibar fiil) kalıbının sonuna 'ka' eklenerek çok nazik ikramlar ve davetler yapılır.",
          breakdown: [
            { word: "コーヒー", romaji: "koohii", meaning: "Kahve" },
            { word: "のみます", romaji: "nomimasu", meaning: "İçer(im)" },
            { word: "か", romaji: "ka", meaning: "(Soru)", isParticle: true }
          ]
        },
        {
          id: "gr-sec6-2",
          sentence: "おちゃ は どう です か",
          romaji: "ocha wa dou desu ka",
          translation: "Çaya ne dersiniz?",
          explanation: "'Dou desu ka?' kalıbı 'Nasıl olur? / Ne dersin?' anlamındadır ve popüler bir ikram/fikir sorma ifadesidir.",
          breakdown: [
            { word: "おちゃ", romaji: "ocha", meaning: "Yeşil Çay" },
            { word: "は", romaji: "wa", meaning: "(konu)", isParticle: true },
            { word: "どう", romaji: "dou", meaning: "Nasıl" },
            { word: "です", romaji: "desu", meaning: "dır", isParticle: true },
            { word: "か", romaji: "ka", meaning: "(soru)", isParticle: true }
          ]
        }
      ],
      xpReward: 25,
    },
    {
      id: "les-6-2",
      title: "Teklifleri Kabul ve Ret",
      description: "Sunulan ikramları kibarca kabul veya ret etmeyi öğren.",
      icon: "thumbs_up_down",
      type: "flashcard",
      vocabItems: [
        { japanese: "はい、おねがいします", romaji: "hai, onegaishimasu", meaning_tr: "Evet, lütfen.", emoji: "😊" },
        { japanese: "いいえ、けっこう です", romaji: "iie, kekkou desu", meaning_tr: "Hayır, teşekkürler. (Almayayım/Tokum)", emoji: "✋" },
        { japanese: "ありがとう ございます", romaji: "arigatou gozaimasu", meaning_tr: "Çok teşekkür ederim.", emoji: "🙏" },
        { japanese: "すいません", romaji: "suimasen", meaning_tr: "Özür dilerim / Affedersiniz (Ret için kibar yol)", emoji: "😅" },
      ],
      xpReward: 20,
    },
    {
      id: "les-6-3",
      title: "Gramer: Onaylama (-ne)",
      description: "Cümle sonunda 'ne' takısını kullanarak karşındakinin sana katılmasını bekle.",
      icon: "chat",
      type: "grammar",
      grammarItems: [
        {
          id: "gr-sec6-3",
          sentence: "おいしい です ね",
          romaji: "oishii desu ne",
          translation: "Lezzetli, değil mi?",
          explanation: "Cümle sonundaki 'ne' (ね), Türkçe'deki '...değil mi?' gibidir. Konuştuğun kişinin sana katılmasını istediğinde kullanılır.",
          breakdown: [
            { word: "おいしい", romaji: "oishii", meaning: "Lezzetli" },
            { word: "です", romaji: "desu", meaning: "dir", isParticle: true },
            { word: "ね", romaji: "ne", meaning: "değil mi?", isParticle: true }
          ]
        },
        {
          id: "gr-sec6-4",
          sentence: "いい てんき です ね",
          romaji: "ii tenki desu ne",
          translation: "Hava güzel, değil mi?",
          explanation: "Havadan sudan konuşurken sohbet başlatmak için en popüler ifade.",
          breakdown: [
            { word: "いい", romaji: "ii", meaning: "İyi / Güzel" },
            { word: "てんき", romaji: "tenki", meaning: "Hava Durumu" },
            { word: "です", romaji: "desu", meaning: "dir", isParticle: true },
            { word: "ね", romaji: "ne", meaning: "değil mi?", isParticle: true }
          ]
        }
      ],
      xpReward: 25,
    },
    {
      id: "les-6-4",
      title: "Kültür: İkramlar",
      description: "Japon kültüründe misafirlikte içecek ikramı",
      icon: "restaurant",
      type: "reading",
      slides: [
        {
          title: "İki Elle Sunmak",
          content: "Japonya'da size kahve veya çay sunulurken genellikle fincan iki elle tutulur, alırken de aynı şekilde iki elle alarak minnet gösterilir.",
          emoji: "🤲"
        },
        {
          title: "İkramı Reddetmek",
          content: "Bir şeyi doğrudan 'Iie' (Hayır) diyerek reddetmek bazen kaba karşılanabilir. Genellikle 'Kekkou desu' veya 'Daijoubu desu' (Ben iyiyim/sorun yok) tercih edilir.",
          emoji: "🍵"
        }
      ],
      xpReward: 15,
    },
    {
      id: "les-6-5",
      title: "Bölüm Sonu Değerlendirmesi",
      description: "Teklifler ve 'ne' kullanımını test et.",
      icon: "flag",
      type: "checkpoint",
      xpReward: 30,
    }
  ]
};
