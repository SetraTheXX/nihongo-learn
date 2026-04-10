"use client";
import React, { useState, useEffect } from "react";
import { hiraganaData } from "@/data/hiragana";
import { generateQuizOptions, QuizOption } from "@/lib/quiz";
import { useLearningStore } from "@/store/useLearningStore";
import TopAppBar from "@/components/TopAppBar";
import BottomNavBar from "@/components/BottomNavBar";
import { motion, AnimatePresence } from "framer-motion";

export default function QuizPage() {
  const { recordQuizAnswer } = useLearningStore();
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [options, setOptions] = useState<QuizOption[]>([]);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);

  const currentCard = hiraganaData[currentCardIndex];
  const progressPercent = ((currentCardIndex + 1) / hiraganaData.length) * 100;

  useEffect(() => {
    setOptions(generateQuizOptions(currentCard, hiraganaData));
    setSelectedOptionId(null);
  }, [currentCardIndex, currentCard]);

  const handleNext = () => {
    setCurrentCardIndex((prev) => (prev + 1) % hiraganaData.length);
  };

  const handleSelectOption = (optId: string) => {
    if (selectedOptionId !== null) return; // Çift tıklama engelleme
    const selected = options.find((o) => o.id === optId);
    if (selected) {
      recordQuizAnswer(selected.isCorrect);
    }
    setSelectedOptionId(optId);
  };

  const letters = ["A", "B", "C", "D"];

  // Determine if user got it right
  const isRevealed = selectedOptionId !== null;
  const isCorrectAnswer = isRevealed && options.find((o) => o.id === selectedOptionId)?.isCorrect;

  return (
    <div className="bg-surface-bright text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container min-h-screen">
      <TopAppBar progressPercent={progressPercent} />

      <main className="min-h-screen pt-24 pb-32 px-6 flex flex-col items-center justify-center max-w-4xl mx-auto space-y-8 animate-fade-in">
        {/* Question Card */}
        <section className="w-full relative group mt-8 md:mt-2">
          {/* Decorative blurs */}
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-tertiary-container/30 rounded-full blur-3xl opacity-60 pointer-events-none" />
          <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-secondary-container/20 rounded-full blur-3xl opacity-60 pointer-events-none" />

          <div className="relative bg-surface-container-lowest rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,50,75,0.04)] overflow-hidden border border-outline-variant/20">
            {/* Left accent bar */}
            <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-primary via-tertiary to-secondary rounded-l-3xl" />

            <div className="flex flex-col items-center text-center space-y-6">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-tertiary-container text-on-tertiary-container font-label text-sm font-bold tracking-wide shadow-sm">
                SEVİYE 1 • HIRAGANA
              </span>
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-headline font-extrabold text-on-surface tracking-tight leading-tight">
                  Bu karakterin okunuşu nedir?
                </h2>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentCard.character}
                    initial={{ scale: 0.5, opacity: 0, rotateY: 90 }}
                    animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                    exit={{ scale: 0.5, opacity: 0, rotateY: -90 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="text-primary text-[100px] md:text-[140px] block mt-4 font-japanese leading-none drop-shadow-sm font-bold"
                  >
                    {currentCard.character}
                  </motion.span>
                </AnimatePresence>
                <p className="text-on-surface-variant font-medium text-lg">
                  Aşağıdaki doğru telaffuzu seçin
                </p>
              </div>
            </div>

            <div className="mt-8 flex justify-center opacity-80">
              <div className="w-24 h-1 bg-surface-container-highest rounded-full" />
            </div>
          </div>
        </section>

        {/* Answer Grid */}
        <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 relative">
          {options.map((opt, i) => {
            const isSelected = selectedOptionId === opt.id;

            // Dynamic styling based on state
            let containerStyle = "";
            let iconBg = "bg-surface-container-low";
            let iconTextStyle = "text-primary";
            let labelStyle = "text-on-surface-variant";
            let answerStyle = "text-on-surface";
            let iconContent: React.ReactNode = (
              <span className="text-2xl font-bold">{letters[i]}</span>
            );

            if (!isRevealed) {
              containerStyle =
                "bg-surface-container-lowest border border-outline-variant/20 hover:bg-surface-container-low hover:shadow-lg hover:-translate-y-1 active:scale-[0.98] cursor-pointer";
            } else if (opt.isCorrect) {
              // ✅ CORRECT — vivid green
              containerStyle =
                "bg-[#d4f8d4] border-2 border-[#2e7d32] shadow-[0_0_20px_rgba(46,125,50,0.15)] scale-[1.02] z-20";
              iconBg = "bg-[#2e7d32]";
              iconTextStyle = "text-white";
              labelStyle = "text-[#1b5e20]";
              answerStyle = "text-[#1b5e20]";
              iconContent = (
                <span
                  className="material-symbols-outlined text-2xl text-white"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
              );
            } else if (isSelected) {
              // ❌ WRONG — vivid red
              containerStyle =
                "bg-[#ffe0e0] border-2 border-[#c62828] shadow-[0_0_20px_rgba(198,40,40,0.15)] animate-[shake_0.5s_ease-in-out]";
              iconBg = "bg-[#c62828]";
              iconTextStyle = "text-white";
              labelStyle = "text-[#b71c1c]";
              answerStyle = "text-[#b71c1c]";
              iconContent = (
                <span
                  className="material-symbols-outlined text-2xl text-white"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  cancel
                </span>
              );
            } else {
              // Neutral disabled
              containerStyle =
                "bg-surface-container-lowest border border-outline-variant/10 opacity-40 grayscale pointer-events-none";
            }

            return (
              <motion.button
                key={opt.id}
                disabled={isRevealed}
                onClick={() => handleSelectOption(opt.id)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className={`group relative flex items-center p-5 md:p-6 rounded-2xl transition-all duration-300 ${containerStyle} text-left`}
              >
                <div
                  className={`w-14 h-14 md:w-16 md:h-16 rounded-xl ${iconBg} flex items-center justify-center transition-all ${iconTextStyle} shrink-0`}
                >
                  {iconContent}
                </div>
                <div className="ml-5 flex-1">
                  <div className={`font-label text-[10px] font-bold uppercase tracking-widest mb-1 ${labelStyle}`}>
                    {i + 1}. Seçenek
                  </div>
                  <div className={`text-2xl font-headline font-bold ${answerStyle}`}>
                    {opt.romaji}
                  </div>
                </div>

                {/* "DOĞRU" badge */}
                {isRevealed && opt.isCorrect && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1, rotate: [-5, 5, 0] }}
                    className="absolute -top-3 -right-3 bg-[#2e7d32] text-white rounded-full px-3 py-1 text-xs font-bold shadow-lg"
                  >
                    DOĞRU
                  </motion.div>
                )}

                {/* "YANLIŞ" badge */}
                {isRevealed && isSelected && !opt.isCorrect && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="absolute -top-3 -right-3 bg-[#c62828] text-white rounded-full px-3 py-1 text-xs font-bold shadow-lg"
                  >
                    YANLIŞ
                  </motion.div>
                )}
              </motion.button>
            );
          })}
        </section>

        {/* Info Card + Next Button */}
        <AnimatePresence>
          {selectedOptionId && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={`w-full rounded-2xl p-6 flex flex-col items-start gap-4 z-10 relative overflow-hidden border-2 ${
                isCorrectAnswer
                  ? "bg-[#e8f5e9] border-[#2e7d32]/30"
                  : "bg-[#fce4ec] border-[#c62828]/30"
              }`}
            >
              <div className="flex items-start gap-4 flex-1 w-full">
                <div
                  className={`p-3 rounded-xl shrink-0 mt-1 ${
                    isCorrectAnswer ? "bg-[#2e7d32]/10" : "bg-[#c62828]/10"
                  }`}
                >
                  <span
                    className={`material-symbols-outlined ${
                      isCorrectAnswer ? "text-[#2e7d32]" : "text-[#c62828]"
                    }`}
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {isCorrectAnswer ? "check_circle" : "info"}
                  </span>
                </div>
                <div className="flex-1">
                  <h4 className={`font-headline font-bold ${isCorrectAnswer ? "text-[#1b5e20]" : "text-[#b71c1c]"}`}>
                    {isCorrectAnswer ? "Harika! Doğru cevap! 🎉" : "Yanlış cevap 😅"}
                  </h4>
                  <p className="text-on-surface-variant text-sm mt-1 leading-relaxed">
                    {currentCard.word_example ? (
                      <>
                        <strong className="text-primary">
                          {currentCard.word_example?.japanese}
                        </strong>{" "}
                        ({currentCard.word_example?.romaji}) kelimesi &ldquo;{currentCard.word_example?.meaning_tr}&rdquo; anlamına gelir.
                      </>
                    ) : (
                      `${currentCard.character} (${currentCard.romaji}) karakteri Hiragana alfabesinin temel taşlarından biridir.`
                    )}
                  </p>
                </div>
              </div>
              <div className="w-full flex justify-end mt-2 md:mt-0">
                <button
                  onClick={handleNext}
                  className="px-6 py-2.5 bg-primary hover:bg-primary-dim text-on-primary font-headline font-bold rounded-xl transition-all active:scale-95 shadow-md hover:shadow-lg flex items-center gap-2 text-sm"
                >
                  Sonraki Soru
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <BottomNavBar />
    </div>
  );
}
