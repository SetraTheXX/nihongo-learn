import { Section } from '../types/course';

export const chapter21: Section = {
  id: "sec-21",
  title: "Zaman ve Yer Takıları: Ni ve E",
  description: "'Ni' ve 'e' takılarıyla nereye gittiğini ve ne zaman olduğunu anlat",
  emoji: "🗺️",
  color: "green",
  lessons: [
    {
      id: "les-21-1",
      title: "Ulaşım Araçları",
      description: "Japoncada ulaşım araçlarını öğren.",
      icon: "directions_car",
      type: "flashcard",
      vocabItems: [
        { japanese: "でんしゃ", romaji: "densha", meaning_tr: "Tren", emoji: "🚃" },
        { japanese: "バス", romaji: "basu", meaning_tr: "Otobüs", emoji: "🚌" },
        { japanese: "タクシー", romaji: "takushii", meaning_tr: "Taksi", emoji: "🚕" },
        { japanese: "じてんしゃ", romaji: "jitensha", meaning_tr: "Bisiklet", emoji: "🚲" },
        { japanese: "あるいて", romaji: "aruite", meaning_tr: "Yürüyerek", emoji: "🚶" },
        { japanese: "ひこうき", romaji: "hikouki", meaning_tr: "Uçak", emoji: "✈️" },
      ],
      xpReward: 20,
    },
    {
      id: "les-21-2",
      title: "Ni (に) ve E (へ) Takıları",
      description: "Hareket yönü ve hedef belirtme.",
      icon: "info",
      type: "reading",
      slides: [
        {
          title: "Ni (に) - Hedef Takısı",
          content: "Ni (に) çok işlevlidir:\n1. Zaman: Ku-ji ni okimasu. (Saat 9'da kalkarım.)\n2. Hedef/Yer: Gakkou ni ikimasu. (Okula giderim.)\n3. Var olma yeri: Kouen ni imasu. (Parkta bulunuyorum.)",
          emoji: "📍"
        },
        {
          title: "E (へ) - Yön Takısı",
          content: "E (へ) sadece hareket yönünü belirtir. Ni ile çoğu zaman değiştirilebilir ama 'e' daha çok 'doğru' anlamı taşır:\n\nTokyo e ikimasu. (Tokyo'ya gidiyorum / Tokyo yönüne.)\nTokyo ni ikimasu. (Tokyo'ya gidiyorum / Tokyo'ya ulaşıyorum.)",
          emoji: "➡️"
        }
      ],
      xpReward: 10,
    },
    {
      id: "les-21-3",
      title: "Şehir Yerleri",
      description: "Gittiğin yerleri anlat.",
      icon: "location_city",
      type: "flashcard",
      vocabItems: [
        { japanese: "スーパー", romaji: "suupaa", meaning_tr: "Süpermarket", emoji: "🛒" },
        { japanese: "びょういん", romaji: "byouin", meaning_tr: "Hastane", emoji: "🏥" },
        { japanese: "ゆうびんきょく", romaji: "yuubinkyoku", meaning_tr: "Postane", emoji: "📮" },
        { japanese: "ぎんこう", romaji: "ginkou", meaning_tr: "Banka", emoji: "🏦" },
        { japanese: "レストラン", romaji: "resutoran", meaning_tr: "Restoran", emoji: "🍽️" },
        { japanese: "ホテル", romaji: "hoteru", meaning_tr: "Otel", emoji: "🏨" },
      ],
      xpReward: 20,
    },
    {
      id: "les-21-4",
      title: "Gramer: Nereye Gidiyorsun?",
      description: "Ni/E takılarıyla hareket cümleleri kur.",
      icon: "architecture",
      type: "grammar",
      grammarItems: [
        {
          id: "gr-sec21-1",
          sentence: "でんしゃ で がっこう に いきます",
          romaji: "Densha de gakkou ni ikimasu.",
          translation: "Trenle okula gidiyorum.",
          explanation: "'De' (で) = ile/kullanarak (araç). 'Ni' (に) = -a/-e (hedef). İki takıyı bir cümlede kullandık.",
          breakdown: [
            { word: "でんしゃ", romaji: "densha", meaning: "tren" },
            { word: "で", romaji: "de", meaning: "(araç eki: -ile)", isParticle: true },
            { word: "がっこう", romaji: "gakkou", meaning: "okul" },
            { word: "に", romaji: "ni", meaning: "(hedef eki: -a/-e)", isParticle: true },
            { word: "いきます", romaji: "ikimasu", meaning: "giderim" },
          ]
        },
        {
          id: "gr-sec21-2",
          sentence: "どこ に いきたい です か",
          romaji: "Doko ni ikitai desu ka?",
          translation: "Nereye gitmek istiyorsunuz?",
          explanation: "'Doko' = nerede/nereye. 'Ikitai' = gitmek istiyorum (-tai = istek formu). Seyahat planlarken sık kullanılan bir soru.",
          breakdown: [
            { word: "どこ", romaji: "doko", meaning: "nereye / nerede" },
            { word: "に", romaji: "ni", meaning: "(hedef eki)", isParticle: true },
            { word: "いきたい", romaji: "ikitai", meaning: "gitmek istiyorum" },
            { word: "です か", romaji: "desu ka", meaning: "... mi?", isParticle: true },
          ]
        }
      ],
      xpReward: 25,
    },
    {
      id: "les-21-5",
      title: "Bölüm 21 Kontrol Noktası",
      description: "Ni/E takılarını ve ulaşım kelimelerini test et.",
      icon: "flag",
      type: "checkpoint",
      xpReward: 35,
    }
  ],
};
