"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { storiesData, type Story } from "@/data/stories";
import { useLearningStore } from "@/store/useLearningStore";
import FuriganaText from "@/components/reading/FuriganaText";

type ViewMode = "list" | "reading" | "quiz" | "result";

export default function ReadingPage() {
  const { completedLessons } = useLearningStore();
  const [mounted, setMounted] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>("list");
  const [activeStory, setActiveStory] = useState<Story | null>(null);
  const [showTranslation, setShowTranslation] = useState<Record<number, boolean>>({});
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  React.useEffect(() => { setMounted(true); }, []);

  const completedChapterCount = useMemo(() => {
    if (!mounted) return 0;
    // Tamamlanan bölüm sayısını yaklaşık olarak hesapla
    const chapterIds = new Set(completedLessons.map((l) => l.split("-")[0] + "-" + l.split("-")[1]));
    return chapterIds.size;
  }, [mounted, completedLessons]);

  const openStory = (story: Story) => {
    setActiveStory(story);
    setViewMode("reading");
    setShowTranslation({});
    setQuizIndex(0);
    setQuizScore(0);
    setSelectedAnswer(null);
  };

  const startQuiz = () => {
    setViewMode("quiz");
    setQuizIndex(0);
    setQuizScore(0);
    setSelectedAnswer(null);
  };

  const handleQuizAnswer = (optionIndex: number) => {
    if (selectedAnswer !== null || !activeStory) return;
    setSelectedAnswer(optionIndex);
    const isCorrect = optionIndex === activeStory.questions[quizIndex].correctIndex;
    if (isCorrect) setQuizScore((s) => s + 1);

    setTimeout(() => {
      if (quizIndex + 1 < activeStory.questions.length) {
        setQuizIndex((i) => i + 1);
        setSelectedAnswer(null);
      } else {
        setViewMode("result");
      }
    }, 1200);
  };

  const goBack = () => {
    setViewMode("list");
    setActiveStory(null);
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-surface-bright flex items-center justify-center">
        <div className="animate-pulse w-16 h-16 bg-primary-container rounded-full" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface-bright">
      {/* Header */}
      <div className="bg-white border-b border-outline-variant/20 px-4 py-3 sticky top-0 z-30">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          {viewMode === "list" ? (
            <Link href="/" className="flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined">arrow_back</span>
            </Link>
          ) : (
            <button onClick={goBack} className="flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
          )}
          <h1 className="text-base font-bold text-on-surface font-headline">
            {viewMode === "list" ? "Okuma Parçaları" : viewMode === "quiz" ? "Anlama Testi" : viewMode === "result" ? "Sonuç" : activeStory?.title || "Okuma"}
          </h1>
          <div className="w-10" />
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6">

        {/* ── Hikaye Listesi ── */}
        {viewMode === "list" && (
          <div className="space-y-4">
            {/* Hero */}
            <div className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] rounded-3xl p-8 text-center relative overflow-hidden mb-6">
              <div className="absolute top-0 right-0 text-white/[0.04] text-[100px] leading-none select-none font-japanese">読書</div>
              <div className="relative z-10">
                <div className="text-5xl mb-3">📖</div>
                <h2 className="text-2xl font-extrabold text-white font-headline">Mini Hikayeler</h2>
                <p className="text-white/60 text-sm mt-2">Öğrendiğin kelime ve grameri bağlam içinde oku.</p>
              </div>
            </div>

            {storiesData.map((story, i) => {
              const isLocked = completedChapterCount < story.requiredChapter && story.requiredChapter > 3;
              return (
                <motion.button
                  key={story.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  disabled={isLocked}
                  onClick={() => !isLocked && openStory(story)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all ${
                    isLocked
                      ? "bg-surface-container border-outline-variant/20 opacity-60 cursor-not-allowed"
                      : "bg-white border-outline-variant/20 hover:shadow-lg hover:-translate-y-1 active:scale-[0.98]"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{isLocked ? "🔒" : story.emoji}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-on-surface">{story.title}</h3>
                        <span className="text-xs font-bold bg-primary/10 text-primary px-2 py-0.5 rounded-full">{story.level}</span>
                      </div>
                      <p className="text-sm text-on-surface-variant font-japanese mt-0.5">{story.titleJp}</p>
                      <p className="text-xs text-on-surface-variant/70 mt-1">{story.description}</p>
                    </div>
                    {!isLocked && (
                      <span className="material-symbols-outlined text-primary">chevron_right</span>
                    )}
                  </div>
                </motion.button>
              );
            })}
          </div>
        )}

        {/* ── Okuma Modu ── */}
        {viewMode === "reading" && activeStory && (
          <div className="space-y-6">
            <div className="text-center mb-4">
              <span className="text-5xl">{activeStory.emoji}</span>
              <h2 className="text-xl font-bold text-on-surface font-headline mt-2">{activeStory.title}</h2>
              <p className="text-sm font-japanese text-on-surface-variant">{activeStory.titleJp}</p>
            </div>

            <div className="bg-amber-50/50 border border-amber-200/60 rounded-2xl px-4 py-3 text-center">
              <p className="text-xs font-bold text-amber-700 flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-sm">touch_app</span>
                Kelimelere dokunarak anlamını gör
              </p>
            </div>

            {activeStory.paragraphs.map((para, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="bg-white rounded-3xl border border-outline-variant/20 shadow-sm p-6"
              >
                <FuriganaText japanese={para.japanese} words={para.words} />

                <p className="text-sm text-on-surface-variant mt-3 italic">{para.romaji}</p>

                <button
                  onClick={() => setShowTranslation((prev) => ({ ...prev, [i]: !prev[i] }))}
                  className="mt-3 text-xs font-bold text-primary flex items-center gap-1 hover:underline"
                >
                  <span className="material-symbols-outlined text-sm">
                    {showTranslation[i] ? "visibility_off" : "visibility"}
                  </span>
                  {showTranslation[i] ? "Çeviriyi Gizle" : "Çeviriyi Göster"}
                </button>

                <AnimatePresence>
                  {showTranslation[i] && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-sm text-secondary font-medium mt-2 bg-secondary-container/20 px-3 py-2 rounded-xl"
                    >
                      {para.translation}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}

            <button
              onClick={startQuiz}
              className="w-full py-4 rounded-2xl bg-primary text-on-primary font-bold text-sm uppercase tracking-wider shadow-lg hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined">quiz</span>
              Anlama Testine Geç
            </button>
          </div>
        )}

        {/* ── Quiz Modu ── */}
        {viewMode === "quiz" && activeStory && (
          <div className="space-y-6">
            {/* Progress */}
            <div className="flex items-center gap-3">
              <div className="flex-1 h-2 bg-surface-variant/30 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary rounded-full"
                  animate={{ width: `${((quizIndex + 1) / activeStory.questions.length) * 100}%` }}
                />
              </div>
              <span className="text-xs font-bold text-on-surface-variant">
                {quizIndex + 1}/{activeStory.questions.length}
              </span>
            </div>

            <motion.div
              key={quizIndex}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-3xl border border-outline-variant/20 shadow-sm p-6"
            >
              <h3 className="text-lg font-bold text-on-surface mb-6">
                {activeStory.questions[quizIndex].question}
              </h3>

              <div className="space-y-3">
                {activeStory.questions[quizIndex].options.map((opt, oi) => {
                  const isCorrect = oi === activeStory.questions[quizIndex].correctIndex;
                  const isSelected = selectedAnswer === oi;
                  let optionClass = "bg-surface-container-lowest border-outline-variant/30 text-on-surface hover:border-primary/50";

                  if (selectedAnswer !== null) {
                    if (isCorrect) optionClass = "bg-emerald-50 border-emerald-400 text-emerald-800";
                    else if (isSelected) optionClass = "bg-red-50 border-red-400 text-red-800";
                  }

                  return (
                    <button
                      key={oi}
                      onClick={() => handleQuizAnswer(oi)}
                      disabled={selectedAnswer !== null}
                      className={`w-full text-left p-4 rounded-2xl border font-bold text-sm transition-all ${optionClass}`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{opt}</span>
                        {selectedAnswer !== null && isCorrect && <span>✅</span>}
                        {selectedAnswer !== null && isSelected && !isCorrect && <span>❌</span>}
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </div>
        )}

        {/* ── Sonuç ── */}
        {viewMode === "result" && activeStory && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-6"
          >
            <div className="text-6xl mb-4">
              {quizScore === activeStory.questions.length ? "🏆" : quizScore >= 2 ? "🌟" : "💪"}
            </div>
            <h2 className="text-3xl font-extrabold text-on-surface font-headline">
              {quizScore}/{activeStory.questions.length} Doğru!
            </h2>
            <p className="text-on-surface-variant">
              {quizScore === activeStory.questions.length
                ? "Mükemmel! Hikayeyi tamamen anladın!"
                : "Tekrar okuyarak daha iyi anlayabilirsin."}
            </p>

            <div className="flex flex-col gap-3 pt-4">
              <button
                onClick={() => { setViewMode("reading"); setShowTranslation({}); }}
                className="w-full py-3.5 rounded-2xl bg-primary text-on-primary font-bold text-sm uppercase tracking-wider"
              >
                Tekrar Oku
              </button>
              <button
                onClick={goBack}
                className="w-full py-3.5 rounded-2xl border border-outline-variant/40 text-on-surface font-bold text-sm uppercase tracking-wider"
              >
                Diğer Hikayeler
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
