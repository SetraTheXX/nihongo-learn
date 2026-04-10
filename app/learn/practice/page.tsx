"use client";
import React, { useEffect, useState } from "react";
import Flashcard from "@/components/Flashcard";
import { hiraganaData } from "@/data/hiragana";
import { katakanaData } from "@/data/katakana";
import { allGrammarData } from "@/data/course";
import GrammarFlashcard from "@/components/GrammarFlashcard";

const allAlphabetData = [...hiraganaData, ...katakanaData];
import { useLearningStore } from "@/store/useLearningStore";
import TopAppBar from "@/components/TopAppBar";
import BottomNavBar from "@/components/BottomNavBar";
import { motion } from "framer-motion";

export default function LearnPage() {
  const { currentSessionQueue, currentIndex, initializeSession, reviewCard } = useLearningStore();
  const [mounted, setMounted] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (currentSessionQueue.length === 0) {
      setShowOptions(true);
    }
  }, [currentSessionQueue.length]);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-surface-bright flex items-center justify-center p-8">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="w-16 h-16 bg-primary-container rounded-full" />
          <div className="h-4 w-24 bg-surface-container-high rounded-full" />
        </div>
      </div>
    );
  }

  const handleReview = (quality: number) => {
    if (currentIndex < currentSessionQueue.length) {
      reviewCard(currentSessionQueue[currentIndex], quality);
    }
  };

  const isSessionComplete = currentSessionQueue.length > 0 && currentIndex >= currentSessionQueue.length;
  const currentCardId = currentSessionQueue[currentIndex];
  const currentAlphabetData = allAlphabetData.find((c) => c.id === currentCardId);
  const currentGrammarData = allGrammarData.find((c) => c.id === currentCardId);
  const currentData = currentAlphabetData || currentGrammarData;
  const progressPercent =
    currentSessionQueue.length > 0 ? (currentIndex / currentSessionQueue.length) * 100 : 0;

  const handleStartSession = (alphabet: "hiragana" | "katakana" | "all" | "grammar") => {
    initializeSession(alphabet as any);
    setShowOptions(false);
  };

  if (showOptions) {
    return (
      <div className="bg-surface-bright text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col pt-24 pb-32">
        <TopAppBar progressPercent={0} />
        <main className="flex flex-col items-center justify-center p-6 flex-1 w-full max-w-2xl mx-auto space-y-8 animate-fade-in relative">
          <div className="w-full text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold text-on-surface mb-3 font-headline tracking-tight">
              Pratik Seansı Başlat
            </h2>
            <p className="text-base md:text-lg text-on-surface-variant font-medium">
              Çalışmak istediğin alfabe grubunu seç.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            <button
              onClick={() => handleStartSession("hiragana")}
              className="flex flex-col items-center gap-3 p-6 bg-white border-2 border-primary/20 rounded-3xl hover:border-primary hover:bg-primary/5 transition-all shadow-sm hover:shadow-md"
            >
              <span className="text-5xl font-japanese text-primary">あ</span>
              <span className="font-bold text-lg">Hiragana</span>
            </button>
            <button
              onClick={() => handleStartSession("katakana")}
              className="flex flex-col items-center gap-3 p-6 bg-white border-2 border-secondary/20 rounded-3xl hover:border-secondary hover:bg-secondary/5 transition-all shadow-sm hover:shadow-md"
            >
              <span className="text-5xl font-japanese text-secondary">ア</span>
              <span className="font-bold text-lg">Katakana</span>
            </button>
            <button
              onClick={() => handleStartSession("all")}
              className="flex flex-col items-center gap-3 p-6 bg-white border-2 border-tertiary/20 rounded-3xl hover:border-tertiary hover:bg-tertiary/5 transition-all shadow-sm hover:shadow-md"
            >
              <span className="text-5xl font-japanese text-tertiary">あア</span>
              <span className="font-bold text-lg">Karışık</span>
            </button>
            <button
              onClick={() => handleStartSession("grammar")}
              className="flex flex-col items-center gap-3 p-6 bg-white border-2 border-emerald-500/20 rounded-3xl hover:border-emerald-500 hover:bg-emerald-500/5 transition-all shadow-sm hover:shadow-md"
            >
              <span className="text-5xl font-japanese text-emerald-500 font-bold">文法</span>
              <span className="font-bold text-lg">Gramer</span>
            </button>
          </div>
        </main>
        <BottomNavBar />
      </div>
    );
  }

  return (
    <div className="bg-surface-bright text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col pt-24 pb-32">
      <TopAppBar progressPercent={progressPercent} />

      <main className="flex flex-col items-center justify-center p-6 flex-1 w-full max-w-4xl mx-auto space-y-8 animate-fade-in relative">
        {/* Mobile progress bar */}
        <div className="md:hidden w-full px-4 mb-4">
          <div className="h-2 w-full bg-surface-container-high rounded-full overflow-hidden relative">
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-primary-container rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <p className="text-xs text-center text-on-surface-variant mt-2 font-bold tracking-widest">
            {currentIndex} / {currentSessionQueue.length} KART
          </p>
        </div>

        {/* Title */}
        <div className="w-full text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-on-surface mb-3 font-headline tracking-tight">
            {isSessionComplete ? "Tebrikler! 🎉" : "Günün Hedefi"}
          </h2>
          <p className="text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto font-medium">
            {isSessionComplete
              ? "Bugünkü kelime ve harf limitini tamamladın. Verilerin güvenle kaydedildi."
              : "Kartın üzerine dokunarak arka yüzünü çevirebilirsin."}
          </p>
        </div>

        {/* Card or Completion */}
        {!isSessionComplete && currentData ? (
          <div key={currentCardId} className="flex flex-col items-center relative w-full">
            <div className="absolute top-10 left-10 md:left-24 w-32 h-32 bg-primary-container/30 rounded-full blur-3xl opacity-60 pointer-events-none" />
            <div className="absolute -bottom-10 right-10 md:right-24 w-40 h-40 bg-secondary-container/30 rounded-full blur-3xl opacity-60 pointer-events-none" />

            {currentGrammarData ? (
              <GrammarFlashcard data={currentGrammarData} />
            ) : (
              <Flashcard data={currentAlphabetData as any} />
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-10 flex flex-wrap justify-center gap-3 md:gap-4 z-10"
            >
              <button
                onClick={() => handleReview(1)}
                className="flex items-center gap-2 px-6 py-3.5 bg-surface-container-lowest border border-outline-variant/30 text-on-surface-variant font-bold rounded-2xl hover:bg-surface-container hover:shadow-md transition-all shadow-sm active:scale-95 group"
              >
                <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors text-[20px]">
                  refresh
                </span>
                Tekrarla
              </button>
              <button
                onClick={() => handleReview(4)}
                className="flex items-center gap-2 px-8 py-3.5 bg-secondary-container border border-secondary/20 text-on-secondary-container font-bold rounded-2xl hover:shadow-[0_8px_24px_rgba(44,103,60,0.2)] hover:-translate-y-1 transition-all shadow-sm active:scale-95"
              >
                <span className="material-symbols-outlined text-[20px]">check</span>
                İyi
              </button>
              <button
                onClick={() => handleReview(5)}
                className="flex items-center gap-2 px-8 py-3.5 bg-tertiary-container border border-tertiary/20 text-on-tertiary-container font-bold rounded-2xl hover:shadow-[0_8px_24px_rgba(83,73,104,0.2)] hover:-translate-y-1 transition-all shadow-sm active:scale-95"
              >
                <span className="material-symbols-outlined text-[20px]">thumb_up</span>
                Kolay
              </button>
            </motion.div>
          </div>
        ) : (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="mt-12 bg-surface-container-lowest p-8 md:p-12 rounded-3xl shadow-xl flex flex-col items-center border border-primary-container/50 max-w-md mx-auto w-full"
          >
            <div className="w-24 h-24 mb-6 bg-primary-container text-primary rounded-[2rem] flex items-center justify-center shadow-inner border border-primary-fixed">
              <span className="material-symbols-outlined text-5xl">celebration</span>
            </div>
            <button
              onClick={() => setShowOptions(true)}
              className="w-full flex justify-center items-center gap-3 px-8 py-4 bg-primary hover:bg-primary-dim border border-transparent text-on-primary font-bold rounded-2xl transition-all shadow-lg hover:shadow-xl active:scale-95"
            >
              <span className="material-symbols-outlined">replay</span>
              Ekstra Çalışma Seansı Başlat
            </button>
          </motion.div>
        )}
      </main>

      <BottomNavBar />
    </div>
  );
}
