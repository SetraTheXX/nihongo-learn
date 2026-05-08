import { Section } from '../types/course';

export const chapter2: Section = {
  id: "sec-2",
  title: "Olmazsa Olmazlar",
  description: "Selamlaşmaları, teşekkür etmeyi ve ilk Hiragana harflerini öğren",
  emoji: "☕",
  color: "emerald",
  lessons: [
    {
      id: "les-2-1",
      title: "Günün Zamanları",
      description: "Japoncada günün farklı zamanlarında nasıl selamlaşıldığını öğren",
      icon: "wb_sunny",
      type: "grammar",
      grammarItems: [
        {
          id: "gr-2-1",
          sentence: "おはよう ございます。",
          romaji: "Ohayou gozaimasu.",
          translation: "Günaydın.",
          explanation: "Sabahları uyanıldığında söylenen resmi günaydın ifadesidir.",
          breakdown: [
            { word: "おはよう ございます", romaji: "Ohayou gozaimasu", meaning: "Günaydın" }
          ]
        },
        {
          id: "gr-2-2",
          sentence: "こんばんは。",
          romaji: "Konbanwa.",
          translation: "İyi akşamlar.",
          explanation: "Güneş battıktan sonra kullanılan akşam selamlamasıdır.",
          breakdown: [
            { word: "こんばんは", romaji: "Konbanwa", meaning: "İyi akşamlar" }
          ]
        }
      ],
      xpReward: 15,
    },
    {
      id: "les-2-2",
      title: "Teşekkürler ve Özür Dilerim",
      description: "Temel nezaket kurallarını anlama",
      icon: "volunteer_activism",
      type: "grammar",
      grammarItems: [
        {
          id: "gr-2-3",
          sentence: "ありがとう ございます。",
          romaji: "Arigatou gozaimasu.",
          translation: "Çok teşekkür ederim.",
          explanation: "Teşekkür etmenin en yaygın ve kibar formudur.",
          breakdown: [
            { word: "ありがとう ございます", romaji: "Arigatou gozaimasu", meaning: "Çok teşekkür ederim" }
          ]
        },
        {
          id: "gr-2-4",
          sentence: "すみません。",
          romaji: "Sumimasen.",
          translation: "Affedersiniz / Özür dilerim.",
          explanation: "Hem dikkat çekmek (affedersiniz) hem de ufak bir hata için özür dilemek amacıyla kullanılır.",
          breakdown: [
            { word: "すみません", romaji: "Sumimasen", meaning: "Özür dilerim" }
          ]
        }
      ],
      xpReward: 15,
    },
    {
      id: "les-2-3",
      title: "Hiragana: a i u e o",
      description: "Japon alfabesine giriş: İlk 5 hiragana harfini öğren",
      icon: "text_fields",
      type: "flashcard",
      slides: [
        {
          title: "Sırada Alfabe Var!",
          content: "Sözlü kalıplara giriş yaptık. Şimdi Japon yazısının yapıtaşı olan Hiragana'nın ilk 5 sesini öğreneceğiz: a, i, u, e, o.",
          emoji: "✍️"
        }
      ],
      cardIds: ["h_a", "h_i", "h_u", "h_e", "h_o"],
      xpReward: 20,
    },
    {
      id: "les-2-4",
      title: "Quiz: a i u e o",
      description: "Öğrendiğin ilk 5 harfi test et",
      icon: "quiz",
      type: "quiz",
      cardIds: ["h_a", "h_i", "h_u", "h_e", "h_o"],
      xpReward: 20,
    },
    {
      id: "les-2-5",
      title: "Kontrol Noktası",
      description: "Selamlar ve ilk harfleri test et",
      icon: "flag",
      type: "checkpoint",
      cardIds: ["h_a", "h_i", "h_u", "h_e", "h_o"],
      xpReward: 30,
    }
  ],
};
