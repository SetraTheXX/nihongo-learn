/**
 * Web Speech API tabanlı ücretsiz Metinden Sese (TTS) yardımcı modülü.
 * Tarayıcının yerleşik ses motorunu kullanır. Sıfır maliyetlidir.
 */

export const playAudio = (text: string, lang: string = 'ja-JP', rate: number = 0.9) => {
  // SSR (Sunucu taraflı render) sırasında çalışmasını engelle
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    console.warn('Tarayıcınız Text-to-Speech (Sesli Okuma) özelliğini desteklemiyor.');
    return;
  }

  // Önceki konuşmaları iptal et (üst üste binmemesi için)
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  
  // Dil ayarı (Varsayılan: Japonca)
  utterance.lang = lang;
  
  // Konuşma hızı (Japonca öğrenenler için %10 yavaşlatılmış - 0.9 iyi bir değerdir)
  utterance.rate = rate;
  
  // Ses yüksekliği
  utterance.volume = 1;
  
  // Pitch (Tiz/Bas) - Japonca için biraz daha doğal duyulması adına
  utterance.pitch = 1.1;

  // Cihazdaki Japonca sesleri bulmaya çalış
  const voices = window.speechSynthesis.getVoices();
  const japaneseVoice = voices.find(voice => voice.lang.includes('ja') || voice.lang.includes('JP'));
  
  if (japaneseVoice) {
    utterance.voice = japaneseVoice;
  }

  // Seslendir
  window.speechSynthesis.speak(utterance);
};

// Chrome gibi bazı tarayıcılar sesleri asenkron yükler. 
// Ön yükleme tetikleyicisi:
if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  window.speechSynthesis.getVoices();
}
