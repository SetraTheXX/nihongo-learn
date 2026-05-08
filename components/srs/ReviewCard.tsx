"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { playAudio } from "@/lib/tts";

interface ReviewCardProps {
  front: {
    japanese: string;
    romaji?: string;
  };
  back: {
    meaning: string;
    explanation?: string;
  };
  cardIndex: number;
  totalCards: number;
  onAnswer: (quality: number) => void;
}

export default function ReviewCard({
  front,
  back,
  cardIndex,
  totalCards,
  onAnswer,
}: ReviewCardProps) {
  const [flipped, setFlipped] = useState(false);

  // Kart değiştiğinde (yeni kart geldiğinde) kelimeyi otomatik seslendir
  useEffect(() => {
    if (!flipped && front.japanese) {
      playAudio(front.japanese);
    }
  }, [cardIndex, front.japanese, flipped]);

  const handleFlip = () => {
    if (!flipped) setFlipped(true);
  };

  const handleAnswer = (quality: number) => {
    setFlipped(false);
    // Küçük gecikme: kart düz konuma dönsün, sonra sonraki gelsin
    setTimeout(() => onAnswer(quality), 200);
  };

  const progress = totalCards > 0 ? ((cardIndex) / totalCards) * 100 : 0;

  const qualityButtons = [
    { label: "Tekrar", emoji: "😓", quality: 1, color: "bg-red-100 text-red-700 border-red-200 hover:bg-red-200" },
    { label: "Zor", emoji: "😅", quality: 3, color: "bg-amber-100 text-amber-700 border-amber-200 hover:bg-amber-200" },
    { label: "İyi", emoji: "😊", quality: 4, color: "bg-emerald-100 text-emerald-700 border-emerald-200 hover:bg-emerald-200" },
    { label: "Kolay", emoji: "🚀", quality: 5, color: "bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-200" },
  ];

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-lg mx-auto">
      {/* Progress Bar */}
      <div className="w-full">
        <div className="flex justify-between text-xs font-bold text-on-surface-variant mb-2">
          <span>{cardIndex} / {totalCards} kart</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="w-full h-2 bg-surface-variant/30 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Card */}
      <div
        className="w-full cursor-pointer select-none"
        style={{ perspective: "1200px" }}
        onClick={handleFlip}
      >
        <motion.div
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
          style={{ transformStyle: "preserve-3d", position: "relative" }}
          className="w-full"
        >
          {/* Front */}
          <div
            style={{ backfaceVisibility: "hidden" }}
            className="w-full min-h-[260px] bg-white rounded-3xl shadow-xl border border-outline-variant/20 flex flex-col items-center justify-center p-8 gap-3 relative"
          >
            {/* Ses Butonu */}
            <button
              onClick={(e) => {
                e.stopPropagation(); // Kartın dönmesini engelle
                playAudio(front.japanese);
              }}
              className="absolute top-4 right-4 p-3 rounded-full bg-surface-variant/30 text-on-surface-variant hover:bg-primary/10 hover:text-primary transition-colors"
              aria-label="Sesli oku"
            >
              <span className="material-symbols-outlined">volume_up</span>
            </button>

            <p className="text-7xl font-japanese text-on-surface font-bold tracking-tight">
              {front.japanese}
            </p>
            {front.romaji && (
              <p className="text-lg text-on-surface-variant font-medium">{front.romaji}</p>
            )}
            <div className="mt-6 flex items-center gap-2 text-xs text-on-surface-variant/60 font-medium">
              <span className="material-symbols-outlined text-base">touch_app</span>
              Görmek için dokunun
            </div>
          </div>

          {/* Back */}
          <div
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)", position: "absolute", top: 0, left: 0, right: 0 }}
            className="w-full min-h-[260px] bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] rounded-3xl shadow-xl flex flex-col items-center justify-center p-8 gap-3"
          >
            <p className="text-3xl font-bold text-white text-center">{back.meaning}</p>
            {back.explanation && (
              <p className="text-sm text-white/60 text-center max-w-xs">{back.explanation}</p>
            )}
          </div>
        </motion.div>
      </div>

      {/* Answer Buttons — sadece çevrilince görünür */}
      <AnimatePresence>
        {flipped && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.25 }}
            className="w-full grid grid-cols-4 gap-2"
          >
            {qualityButtons.map((btn) => (
              <button
                key={btn.quality}
                id={`review-answer-${btn.quality}`}
                onClick={() => handleAnswer(btn.quality)}
                className={`flex flex-col items-center gap-1 p-3 rounded-2xl border font-bold text-sm transition-all active:scale-95 ${btn.color}`}
              >
                <span className="text-xl">{btn.emoji}</span>
                <span className="text-xs">{btn.label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {!flipped && (
        <p className="text-xs text-on-surface-variant/50 font-medium">
          Cevabını bilip bilmediğini düşün, sonra kartı çevir
        </p>
      )}
    </div>
  );
}
