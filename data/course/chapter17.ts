import { Section } from '../types/course';

export const chapter17: Section = {
  id: "sec-17",
  title: "RU Fiilleri",
  description: "Ichidan fiilleri öğren ve cümlelerinde akıcı kullan",
  emoji: "🔤",
  color: "blue",
  lessons: [
    {
      id: "les-17-1",
      title: "RU Fiilleri: Temel Liste",
      description: "En yaygın RU (Ichidan) fiiller.",
      icon: "list",
      type: "flashcard",
      vocabItems: [
        { japanese: "たべる → たべます", romaji: "taberu → tabemasu", meaning_tr: "Yemek yemek", emoji: "🍱" },
        { japanese: "みる → みます", romaji: "miru → mimasu", meaning_tr: "Görmek / İzlemek", emoji: "👁️" },
        { japanese: "おきる → おきます", romaji: "okiru → okimasu", meaning_tr: "Kalkmak / Uyanmak", emoji: "⏰" },
        { japanese: "ねる → ねます", romaji: "neru → nemasu", meaning_tr: "Uyumak / Yatmak", emoji: "😴" },
        { japanese: "でる → でます", romaji: "deru → demasu", meaning_tr: "Çıkmak", emoji: "🚪" },
        { japanese: "おしえる → おしえます", romaji: "oshieru → oshiemasu", meaning_tr: "Öğretmek", emoji: "👩‍🏫" },
        { japanese: "おぼえる → おぼえます", romaji: "oboeru → oboemasu", meaning_tr: "Ezberlemek / Hatırlamak", emoji: "🧠" },
      ],
      xpReward: 25,
    },
    {
      id: "les-17-2",
      title: "Zaman Kelimeleri",
      description: "Günün zamanlarını ve zaman zarflarını öğren.",
      icon: "schedule",
      type: "flashcard",
      vocabItems: [
        { japanese: "あさ", romaji: "asa", meaning_tr: "Sabah", emoji: "🌅" },
        { japanese: "ひる", romaji: "hiru", meaning_tr: "Öğle", emoji: "☀️" },
        { japanese: "よる", romaji: "yoru", meaning_tr: "Gece", emoji: "🌙" },
        { japanese: "まいあさ", romaji: "maiasa", meaning_tr: "Her sabah", emoji: "🌄" },
        { japanese: "まいばん", romaji: "maiban", meaning_tr: "Her gece", emoji: "🌃" },
        { japanese: "いつも", romaji: "itsumo", meaning_tr: "Her zaman", emoji: "♾️" },
        { japanese: "ときどき", romaji: "tokidoki", meaning_tr: "Bazen", emoji: "🔄" },
        { japanese: "あまり", romaji: "amari", meaning_tr: "Pek fazla değil (olumsuzla kullanılır)", emoji: "🚫" },
      ],
      xpReward: 20,
    },
    {
      id: "les-17-3",
      title: "Gramer: Rutin Anlatma",
      description: "Günlük rutinini RU fiilleriyle anlat.",
      icon: "architecture",
      type: "grammar",
      grammarItems: [
        {
          id: "gr-sec17-1",
          sentence: "まいあさ ろくじ に おきます",
          romaji: "Maiasa roku-ji ni okimasu.",
          translation: "Her sabah saat 6'da kalkıyorum.",
          explanation: "'Ni' (に) zaman takısı - belirli saatleri ve zamanları belirtir. 'Roku-ji' = saat 6. 'Ji' (じ) = saat.",
          breakdown: [
            { word: "まいあさ", romaji: "maiasa", meaning: "her sabah" },
            { word: "ろくじ", romaji: "roku-ji", meaning: "saat 6" },
            { word: "に", romaji: "ni", meaning: "(zaman eki - saat)", isParticle: true },
            { word: "おきます", romaji: "okimasu", meaning: "kalkarım" },
          ]
        },
        {
          id: "gr-sec17-2",
          sentence: "テレビ を あまり みません",
          romaji: "Terebi wo amari mimasen.",
          translation: "Pek fazla TV izlemiyorum.",
          explanation: "'Amari' (あまり) olumsuz cümlelerle kullanılır: 'amari ~ masen' = pek fazla ... değil. Dikkat: 'Amari' tek başına kullanılmaz.",
          breakdown: [
            { word: "テレビ", romaji: "terebi", meaning: "TV (televizyon)" },
            { word: "を", romaji: "wo", meaning: "(nesne eki)", isParticle: true },
            { word: "あまり", romaji: "amari", meaning: "pek fazla (olumsuzla)" },
            { word: "みません", romaji: "mimasen", meaning: "izlemiyorum" },
          ]
        },
        {
          id: "gr-sec17-3",
          sentence: "よる じゅうじ に ねます",
          romaji: "Yoru juu-ji ni nemasu.",
          translation: "Gece saat 10'da yatıyorum.",
          explanation: "Günlük rutinleri anlatmak için çok kullanışlı bir kalıp. Saat sayısı + 'ji' + 'ni' + fiil.",
          breakdown: [
            { word: "よる", romaji: "yoru", meaning: "gece" },
            { word: "じゅうじ", romaji: "juu-ji", meaning: "saat 10" },
            { word: "に", romaji: "ni", meaning: "(zaman eki)", isParticle: true },
            { word: "ねます", romaji: "nemasu", meaning: "yatarım / uyurum" },
          ]
        }
      ],
      xpReward: 25,
    },
    {
      id: "les-17-4",
      title: "Bölüm 17 Kontrol Noktası",
      description: "RU fiillerini ve zaman zarflarını test et.",
      icon: "flag",
      type: "checkpoint",
      xpReward: 35,
    }
  ],
};
