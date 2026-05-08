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
  
  // Pitch (Tiz/Bas) - Doğal sesler için 1 en idealidir
  utterance.pitch = 1;

  // Cihazdaki Japonca sesleri bulmaya çalış
  const voices = window.speechSynthesis.getVoices();
  const japaneseVoices = voices.filter(voice => voice.lang.includes('ja') || voice.lang.includes('JP'));
  
  if (japaneseVoices.length > 0) {
    // Daha doğal sesleri (Premium/Online/Google) standart robotik seslere tercih et
    const bestVoice = japaneseVoices.find(v => 
      v.name.includes('Google') || 
      v.name.includes('Natural') || 
      v.name.includes('Online') ||
      v.name.includes('Premium')
    ) || japaneseVoices[0]; // Kaliteli ses yoksa listelenen ilk Japonca sesi al
    
    utterance.voice = bestVoice;
  }

  // Seslendir
  window.speechSynthesis.speak(utterance);
};

// Chrome gibi bazı tarayıcılar sesleri asenkron yükler. 
// Ön yükleme tetikleyicisi:
if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  window.speechSynthesis.getVoices();
}
