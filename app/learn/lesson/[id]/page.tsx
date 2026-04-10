"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { japaneseCourse, findLesson } from "@/data/course";
import type { Lesson, VocabItem, SlideContent } from "@/data/course";
import { hiraganaData } from "@/data/hiragana";
import { katakanaData } from "@/data/katakana";
const allAlphabetData = [...hiraganaData, ...katakanaData];
import { useLearningStore } from "@/store/useLearningStore";

export default function LessonPage() {
  const params = useParams();
  const router = useRouter();
  const lessonId = params.id as string;

  const [mounted, setMounted] = useState(false);
  const result = findLesson(japaneseCourse, lessonId);
  
  // Bilgi slaytları varsa ve henüz bitmediyse önce onları göster. 
  // HOOK KURALI GEREĞİ return'lerden önce çağrılmalıdır.
  const [showSlides, setShowSlides] = useState(() => {
    return result?.lesson?.slides && result.lesson.slides.length > 0;
  });

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-surface-bright flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="w-16 h-16 bg-primary-container rounded-full" />
          <div className="h-4 w-32 bg-surface-container-high rounded-full" />
        </div>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="min-h-screen bg-surface-bright flex items-center justify-center p-8">
        <div className="text-center">
          <span className="text-6xl">🤷</span>
          <h1 className="text-xl font-bold mt-4">Ders bulunamadı</h1>
          <button
            onClick={() => router.push("/learn/course")}
            className="mt-4 px-6 py-3 bg-primary text-on-primary rounded-xl font-bold"
          >
            Kursa Dön
          </button>
        </div>
      </div>
    );
  }

  const { section, lesson } = result;

  if (showSlides && lesson.slides) {
    return (
      <SlideLesson 
        slides={lesson.slides} 
        sectionTitle={section.title} 
        lessonTitle={lesson.title} 
        onComplete={() => setShowSlides(false)} 
      />
    );
  }

  // Ders türüne göre doğru bileşeni yükle
  if (lesson.type === "flashcard" || lesson.type === "checkpoint") {
    return <FlashcardLesson lesson={lesson} sectionTitle={section.title} />;
  }

  if (lesson.type === "quiz") {
    return <QuizLesson lesson={lesson} sectionTitle={section.title} />;
  }

  if (lesson.type === "grammar") {
    return <GrammarLesson lesson={lesson} sectionTitle={section.title} />;
  }

  // Fallback: flashcard modunda aç
  return <FlashcardLesson lesson={lesson} sectionTitle={section.title} />;
}

// ── Bilgi Slaytı Dersi ──────────────────────────────────────────

function SlideLesson({ slides, sectionTitle, lessonTitle, onComplete }: { slides: SlideContent[], sectionTitle: string, lessonTitle: string, onComplete: () => void }) {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);

  const slide = slides[currentIndex];
  const progressPercent = Math.round((currentIndex / slides.length) * 100);

  const handleNext = () => {
    if (currentIndex + 1 >= slides.length) {
      onComplete(); // Slaytlar bitti, derse geç
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="min-h-screen bg-surface-bright flex flex-col">
      {/* Üst Bar */}
      <div className="bg-white border-b border-outline-variant/20 px-4 py-3 safe-area-top">
        <div className="max-w-2xl mx-auto flex items-center gap-3">
          <button
            onClick={() => router.push("/learn/course")}
            className="p-2 -ml-2 rounded-xl hover:bg-surface-container transition-colors"
          >
            <span className="material-symbols-outlined text-on-surface-variant">close</span>
          </button>
          <div className="flex-1">
            <div className="h-2.5 bg-surface-container-high rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </div>
          <span className="text-xs font-bold text-on-surface-variant min-w-[40px] text-right">
            Bilgi
          </span>
        </div>
      </div>

      {/* İçerik */}
      <div className="flex-1 flex flex-col px-4 py-6 max-w-2xl mx-auto w-full">
        <p className="text-sm text-primary font-bold mb-1 uppercase tracking-wider">{sectionTitle}</p>
        <h1 className="text-2xl font-bold font-headline text-on-surface mb-6">{lessonTitle}</h1>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="flex-1 flex flex-col bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-outline-variant/30"
          >
            {slide.emoji && (
              <div className="text-7xl mb-6">{slide.emoji}</div>
            )}
            <h2 className="text-2xl font-bold text-on-surface mb-4">{slide.title}</h2>
            
            <div className="text-lg text-on-surface-variant leading-relaxed whitespace-pre-wrap">
              {slide.content.split('\n').map((line, i) => (
                <p key={i} className="mb-3">
                  {line.includes('**') ? (
                    <span dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                  ) : line}
                </p>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Devam Butonu */}
      <div className="p-4 bg-white border-t border-outline-variant/20">
        <div className="max-w-2xl mx-auto">
          <button
            onClick={handleNext}
            className="w-full py-4 rounded-2xl bg-primary text-on-primary font-bold text-lg hover:bg-primary-dim transition-colors shadow-sm"
          >
            {currentIndex + 1 >= slides.length ? "Derse Başla" : "Devam Et"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Flashcard Dersi ─────────────────────────────────────────────

function FlashcardLesson({ lesson, sectionTitle }: { lesson: Lesson; sectionTitle: string }) {
  const router = useRouter();
  const reviewCard = useLearningStore((s) => s.reviewCard);
  const completeLesson = useLearningStore((s) => s.completeLesson);

  // Kartları hazırla: ya hiragana kartları ya vocabItems
  const cards = useMemo(() => {
    if (lesson.cardIds && lesson.cardIds.length > 0) {
      return lesson.cardIds.map(id => {
        const data = allAlphabetData.find(h => h.id === id);
        return data ? {
          id: data.id,
          front: data.character,
          back: data.romaji,
          hint: data.word_example ? `${data.word_example.emoji} ${data.word_example.japanese} (${data.word_example.meaning_tr})` : "",
        } : null;
      }).filter(Boolean) as { id: string; front: string; back: string; hint: string }[];
    }

    if (lesson.vocabItems && lesson.vocabItems.length > 0) {
      return lesson.vocabItems.map((v, i) => ({
        id: `vocab-${i}`,
        front: v.japanese,
        back: v.meaning_tr,
        hint: `${v.emoji || ""} ${v.romaji}`,
      }));
    }

    return [];
  }, [lesson]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const current = cards[currentIndex];
  const progressPercent = cards.length > 0 ? Math.round(((currentIndex) / cards.length) * 100) : 0;

  const handleAnswer = (quality: number) => {
    // Eğer hiragana veya katakana kartıysa SM2 güncelle
    if (lesson.cardIds && current) {
      const alphabetCard = allAlphabetData.find(h => h.id === current.id);
      if (alphabetCard) {
        reviewCard(current.id, quality);
      }
    }

    setIsFlipped(false);
    if (currentIndex + 1 >= cards.length) {
      setIsComplete(true);
      completeLesson(lesson.id, lesson.xpReward);
    } else {
      setTimeout(() => setCurrentIndex(currentIndex + 1), 200);
    }
  };

  if (isComplete) {
    return <LessonComplete lesson={lesson} onBack={() => router.push("/learn/course")} />;
  }

  return (
    <div className="min-h-screen bg-surface-bright flex flex-col">
      {/* Üst Bar */}
      <div className="bg-white border-b border-outline-variant/20 px-4 py-3 safe-area-top">
        <div className="max-w-2xl mx-auto flex items-center gap-3">
          <button
            onClick={() => router.push("/learn/course")}
            className="p-2 -ml-2 rounded-xl hover:bg-surface-container transition-colors"
          >
            <span className="material-symbols-outlined text-on-surface-variant">close</span>
          </button>

          <div className="flex-1">
            <div className="h-2.5 bg-surface-container-high rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </div>

          <span className="text-xs font-bold text-on-surface-variant min-w-[40px] text-right">
            {currentIndex + 1}/{cards.length}
          </span>
        </div>
      </div>

      {/* Ders Başlığı */}
      <div className="px-4 pt-4 pb-2 max-w-2xl mx-auto w-full">
        <p className="text-xs text-on-surface-variant">{sectionTitle}</p>
        <h1 className="text-lg font-bold font-headline text-on-surface">{lesson.title}</h1>
      </div>

      {/* Flashcard Alanı */}
      <div className="flex-1 flex items-center justify-center px-4 py-6">
        <AnimatePresence mode="wait">
          {current && (
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-md"
            >
              <button
                onClick={() => setIsFlipped(!isFlipped)}
                className="w-full aspect-[3/4] max-h-[400px] perspective"
              >
                <div className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${isFlipped ? "rotate-y-180" : ""}`}>
                  {/* Ön yüz */}
                  <div className="absolute inset-0 backface-hidden rounded-3xl bg-white shadow-xl border-2 border-primary/10 flex flex-col items-center justify-center p-8">
                    <span className="text-7xl font-japanese mb-4">{current.front}</span>
                    <p className="text-sm text-on-surface-variant">Kartı çevirmek için tıkla</p>
                  </div>

                  {/* Arka yüz */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-3xl bg-gradient-to-br from-primary to-primary-dim shadow-xl flex flex-col items-center justify-center p-8 text-white">
                    <span className="text-5xl font-bold mb-3">{current.back}</span>
                    {current.hint && (
                      <p className="text-base text-white/80 text-center">{current.hint}</p>
                    )}
                  </div>
                </div>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Cevap Butonları */}
      {isFlipped && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="px-4 pb-8 max-w-md mx-auto w-full"
        >
          <div className="grid grid-cols-3 gap-3">
            <button
              onClick={() => handleAnswer(2)}
              className="py-3 rounded-2xl bg-rose-100 text-rose-700 font-bold text-sm border-2 border-rose-200 hover:bg-rose-200 transition-colors"
            >
              😕 Tekrar
            </button>
            <button
              onClick={() => handleAnswer(4)}
              className="py-3 rounded-2xl bg-amber-100 text-amber-700 font-bold text-sm border-2 border-amber-200 hover:bg-amber-200 transition-colors"
            >
              🤔 İyi
            </button>
            <button
              onClick={() => handleAnswer(5)}
              className="py-3 rounded-2xl bg-emerald-100 text-emerald-700 font-bold text-sm border-2 border-emerald-200 hover:bg-emerald-200 transition-colors"
            >
              😎 Kolay
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}

// ── Quiz Dersi ──────────────────────────────────────────────────

function QuizLesson({ lesson, sectionTitle }: { lesson: Lesson; sectionTitle: string }) {
  const router = useRouter();
  const recordQuizAnswer = useLearningStore((s) => s.recordQuizAnswer);
  const completeLesson = useLearningStore((s) => s.completeLesson);

  // Quiz soruları oluştur
  const questions = useMemo(() => {
    if (!lesson.cardIds) return [];

    const cards = lesson.cardIds
      .map(id => allAlphabetData.find(h => h.id === id))
      .filter(Boolean);

    return cards.map(card => {
      if (!card) return null;

      const wrongOptions = allAlphabetData
        .filter(h => h.id !== card.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map(h => h.romaji);

      const allOptions = [...wrongOptions, card.romaji].sort(() => Math.random() - 0.5);

      return {
        character: card.character,
        correctAnswer: card.romaji,
        options: allOptions,
      };
    }).filter(Boolean) as { character: string; correctAnswer: string; options: string[] }[];
  }, [lesson]);

  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const question = questions[currentQ];
  const progressPercent = questions.length > 0 ? Math.round((currentQ / questions.length) * 100) : 0;

  const handleSelect = (option: string) => {
    if (showResult) return;
    setSelected(option);
    setShowResult(true);

    const isCorrect = option === question?.correctAnswer;
    if (isCorrect) setCorrectCount(c => c + 1);
    recordQuizAnswer(isCorrect);

    setTimeout(() => {
      if (currentQ + 1 >= questions.length) {
        setIsComplete(true);
        completeLesson(lesson.id, lesson.xpReward);
      } else {
        setCurrentQ(currentQ + 1);
        setSelected(null);
        setShowResult(false);
      }
    }, 1200);
  };

  if (isComplete) {
    return <LessonComplete lesson={lesson} onBack={() => router.push("/learn/course")} score={correctCount} total={questions.length} />;
  }

  return (
    <div className="min-h-screen bg-surface-bright flex flex-col">
      {/* Üst Bar */}
      <div className="bg-white border-b border-outline-variant/20 px-4 py-3">
        <div className="max-w-2xl mx-auto flex items-center gap-3">
          <button onClick={() => router.push("/learn/course")} className="p-2 -ml-2 rounded-xl hover:bg-surface-container">
            <span className="material-symbols-outlined text-on-surface-variant">close</span>
          </button>
          <div className="flex-1">
            <div className="h-2.5 bg-surface-container-high rounded-full overflow-hidden">
              <motion.div className="h-full bg-gradient-to-r from-primary to-secondary rounded-full" animate={{ width: `${progressPercent}%` }} />
            </div>
          </div>
          <span className="text-xs font-bold text-on-surface-variant">{currentQ + 1}/{questions.length}</span>
        </div>
      </div>

      {/* Soru */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8 max-w-md mx-auto w-full">
        <AnimatePresence mode="wait">
          {question && (
            <motion.div
              key={currentQ}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="w-full text-center"
            >
              <p className="text-sm text-on-surface-variant mb-2">Bu karakter ne?</p>
              <div className="text-8xl font-japanese mb-8">{question.character}</div>

              <div className="grid grid-cols-2 gap-3">
                {question.options.map((opt, i) => {
                  let btnClass = "bg-white border-2 border-outline-variant/30 text-on-surface hover:border-primary/50";

                  if (showResult) {
                    if (opt === question.correctAnswer) {
                      btnClass = "bg-emerald-100 border-2 border-emerald-400 text-emerald-800";
                    } else if (opt === selected && opt !== question.correctAnswer) {
                      btnClass = "bg-rose-100 border-2 border-rose-400 text-rose-800";
                    } else {
                      btnClass = "bg-surface-container border-2 border-outline-variant/20 text-on-surface-variant/50";
                    }
                  }

                  return (
                    <button
                      key={i}
                      onClick={() => handleSelect(opt)}
                      disabled={showResult}
                      className={`py-4 rounded-2xl font-bold text-lg transition-all ${btnClass}`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              {showResult && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-4 py-3 px-4 rounded-xl text-sm font-bold ${
                    selected === question.correctAnswer
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-rose-100 text-rose-700"
                  }`}
                >
                  {selected === question.correctAnswer
                    ? "🎉 Doğru!"
                    : `❌ Doğru cevap: ${question.correctAnswer}`}
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// ── Ders Tamamlanma Ekranı ──────────────────────────────────────

function LessonComplete({
  lesson,
  onBack,
  score,
  total,
}: {
  lesson: Lesson;
  onBack: () => void;
  score?: number;
  total?: number;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-surface-bright flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", bounce: 0.4 }}
        className="bg-white rounded-3xl shadow-xl p-8 max-w-sm w-full text-center"
      >
        <div className="text-6xl mb-4">
          {lesson.type === "checkpoint" ? "🏆" : "🎉"}
        </div>

        <h1 className="text-2xl font-bold font-headline text-on-surface mb-2">
          {lesson.type === "checkpoint" ? "Sınavı Geçtin!" : "Ders Tamamlandı!"}
        </h1>

        <p className="text-on-surface-variant text-sm mb-6">
          {lesson.title}
        </p>

        {/* XP Ödülü */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 mb-4">
          <span className="text-amber-500">⭐</span>
          <span className="font-bold text-amber-700">+{lesson.xpReward} XP</span>
        </div>

        {/* Quiz skorları */}
        {score !== undefined && total !== undefined && (
          <div className="mb-6">
            <div className="text-4xl font-bold text-on-surface">
              {score}/{total}
            </div>
            <p className="text-xs text-on-surface-variant mt-1">
              Doğru cevap · %{Math.round((score / total) * 100)} başarı
            </p>
          </div>
        )}

        <button
          onClick={onBack}
          className="w-full py-3.5 rounded-2xl bg-primary text-on-primary font-bold text-sm uppercase tracking-wider hover:bg-primary-dim transition-colors"
        >
          Devam Et
        </button>
      </motion.div>
    </div>
  );
}

// ── Gramer Dersi ───────────────────────────────────────────────

function GrammarLesson({ lesson, sectionTitle }: { lesson: Lesson; sectionTitle: string }) {
  const router = useRouter();
  const completeLesson = useLearningStore((s) => s.completeLesson);
  const items = lesson.grammarItems || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  if (items.length === 0) return null;

  const current = items[currentIndex];
  // Calculate progress percent without looking ahead (or base it on what's done)
  const progressPercent = Math.round((currentIndex / items.length) * 100);

  const handleNext = () => {
    setIsFlipped(false);
    if (currentIndex + 1 >= items.length) {
      setIsComplete(true);
      completeLesson(lesson.id, lesson.xpReward);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  if (isComplete) {
    return <LessonComplete lesson={lesson} onBack={() => router.push("/learn/course")} />;
  }

  return (
    <div className="min-h-screen bg-surface-bright flex flex-col">
      {/* Üst Bar */}
      <div className="bg-white border-b border-outline-variant/20 px-4 py-3 safe-area-top">
        <div className="max-w-2xl mx-auto flex items-center gap-3">
          <button
            onClick={() => router.push("/learn/course")}
            className="p-2 -ml-2 rounded-xl hover:bg-surface-container transition-colors"
          >
            <span className="material-symbols-outlined text-on-surface-variant">close</span>
          </button>
          <div className="flex-1">
            <div className="h-2.5 bg-surface-container-high rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </div>
          <span className="text-xs font-bold text-on-surface-variant min-w-[40px] text-right">
            {currentIndex + 1}/{items.length}
          </span>
        </div>
      </div>

      {/* Ortadaki Alan (Kart) */}
      <div className="flex-1 flex flex-col px-4 pt-8 pb-32 max-w-2xl mx-auto w-full relative">
        <p className="text-sm font-bold text-primary mb-2 text-center uppercase tracking-widest">{sectionTitle}</p>
        <h2 className="text-xl font-bold text-center text-on-surface mb-8">Gramer & Cümle Analizi</h2>

        <div className="flex-1 flex flex-col justify-center perspective-1000">
          <AnimatePresence mode="wait">
            {!isFlipped ? (
              // ÖN YÜZ - Sadece Cümle
              <motion.div
                key="front"
                initial={{ rotateY: -90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: 90, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-outline-variant/30 p-8 flex flex-col items-center justify-center min-h-[300px]"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="text-4xl sm:text-5xl font-bold font-japanese tracking-wider mb-4 text-center">
                  {current.sentence}
                </div>
                <div className="text-xl text-on-surface-variant text-center opacity-80">
                  {current.romaji}
                </div>
              </motion.div>
            ) : (
              // ARKA YÜZ - Çeviri, Analiz ve Açıklama
              <motion.div
                key="back"
                initial={{ rotateY: 90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: -90, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-outline-variant/30 p-6 sm:p-8 flex flex-col gap-6"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Çeviri */}
                <div className="text-center pb-4 border-b border-outline-variant/20">
                  <span className="text-sm text-primary font-bold uppercase block mb-1">Çeviri</span>
                  <div className="text-2xl font-bold text-on-surface">{current.translation}</div>
                </div>

                {/* Cümle Analizi (Bölünmüş kelimeler) */}
                <div>
                  <span className="text-sm text-primary font-bold uppercase block mb-3 text-center">Öğeler</span>
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    {current.breakdown.map((item, idx) => (
                      <div 
                        key={idx} 
                        className={`flex flex-col items-center p-3 rounded-2xl ${item.isParticle ? 'bg-secondary-container/50 border border-secondary/20' : 'bg-surface-container-high'}`}
                      >
                        <span className={`text-lg font-bold font-japanese ${item.isParticle ? 'text-secondary' : 'text-on-surface'}`}>
                          {item.word}
                        </span>
                        <span className="text-xs text-on-surface-variant font-medium mt-1">{item.romaji}</span>
                        <span className={`text-xs mt-0.5 ${item.isParticle ? 'text-secondary-dim font-bold' : 'text-on-surface-variant'}`}>
                          {item.meaning}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Açıklama */}
                <div className="bg-primary/5 rounded-2xl p-4 mt-2">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-0.5">lightbulb</span>
                    <p className="text-sm text-on-surface font-medium leading-relaxed">
                      {current.explanation}
                    </p>
                  </div>
                </div>

              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Sabit Alt Buton Alanı */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-outline-variant/20 safe-area-bottom">
        <div className="max-w-2xl mx-auto">
          {!isFlipped ? (
            <button
              onClick={() => setIsFlipped(true)}
              className="w-full py-4 rounded-2xl bg-primary text-on-primary font-bold text-lg hover:bg-primary-dim transition-colors shadow-sm"
            >
              Çeviriyi ve Öğeleri İncele
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="w-full py-4 rounded-2xl bg-secondary text-on-secondary font-bold text-lg hover:bg-secondary-dim transition-colors shadow-sm"
            >
              Devam Et
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
