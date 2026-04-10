"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { FlashcardData } from "@/lib/types";

interface FlashcardProps {
  data: FlashcardData;
}

// Flip animasyonu: scaleX 1→0 (kapat) → 0→1 (aç)
// backface-visibility KULLANILMIYOR — iki yüz aynı anda DOM'da OLMAZ
const flipVariants: Variants = {
  enter: { scaleX: 0 },
  center: { 
    scaleX: 1, 
    transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] } 
  },
  exit: { 
    scaleX: 0, 
    transition: { duration: 0.15, ease: [0.4, 0, 0.2, 1] } 
  },
};

export default function Flashcard({ data }: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      onClick={() => setIsFlipped((f) => !f)}
      className="cursor-pointer"
      style={{ width: "20rem", height: "24rem", position: "relative" }}
    >
      <AnimatePresence mode="wait" initial={false}>

        {/* ── ÖN YÜZ ─────────────────────────────────────────────── */}
        {!isFlipped && (
          <motion.div
            key="front"
            variants={flipVariants}
            initial="enter"
            animate="center"
            exit="exit"
            style={{ width: "100%", height: "100%", position: "absolute", inset: 0, originX: 0.5 }}
            className="bg-white rounded-[2rem] shadow-lg border border-outline-variant/20 flex flex-col items-center justify-center p-6 text-on-surface overflow-hidden"
          >
            {/* Dekoratif köşeler */}
            <div className="absolute top-0 right-0 w-28 h-28 bg-primary-container/20 rounded-bl-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-secondary-container/20 rounded-tr-full pointer-events-none" />

            {/* Büyük Japonca harf */}
            <span className="text-[110px] text-primary font-japanese leading-none font-bold relative z-10 select-none">
              {data.character}
            </span>

            {/* Alt ipucu */}
            <div className="absolute bottom-6 flex flex-col items-center text-primary/50 gap-1 z-10">
              <span className="material-symbols-outlined text-2xl select-none animate-bounce">touch_app</span>
              <p className="text-[9px] uppercase tracking-[0.2em] font-bold select-none">
                Çevirmek için dokun
              </p>
            </div>
          </motion.div>
        )}

        {/* ── ARKA YÜZ ────────────────────────────────────────────── */}
        {isFlipped && (
          <motion.div
            key="back"
            variants={flipVariants}
            initial="enter"
            animate="center"
            exit="exit"
            style={{ width: "100%", height: "100%", position: "absolute", inset: 0, originX: 0.5 }}
            className="bg-white rounded-[2rem] shadow-lg border border-secondary-container/60 flex flex-col items-center justify-center p-6 text-on-surface overflow-hidden"
          >
            {/* Dekoratif köşeler */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-primary-container/15 rounded-bl-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-28 h-28 bg-secondary-container/20 rounded-tr-full pointer-events-none" />

            <div className="relative z-10 text-center flex flex-col items-center gap-4 w-full">
              {/* Romaji */}
              <div className="flex flex-col items-center gap-0.5">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary/50 select-none">
                  Romaji
                </span>
                <h2 className="text-6xl font-black text-on-surface tracking-tight font-headline select-none">
                  {data.romaji}
                </h2>
              </div>

              {/* Ayraç */}
              <div className="w-16 h-0.5 bg-outline-variant/40 rounded-full" />

              {/* Kelime Örneği */}
              {data.word_example ? (
                <div className="w-full bg-surface-container-low rounded-2xl px-4 py-3 border border-outline-variant/20 flex flex-col items-center gap-1.5 shadow-sm">
                  {data.word_example.emoji && (
                    <span className="text-4xl leading-none select-none">{data.word_example.emoji}</span>
                  )}
                  <p className="text-2xl font-japanese text-primary font-bold select-none">
                    {data.word_example.japanese}
                  </p>
                  <p className="text-sm text-on-surface-variant font-medium italic select-none">
                    {data.word_example.romaji}
                  </p>
                  <span className="inline-flex items-center px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold uppercase tracking-wider select-none">
                    {data.word_example.meaning_tr}
                  </span>
                </div>
              ) : (
                <div className="w-full bg-surface-container-low rounded-2xl px-4 py-3 border border-outline-variant/20 flex flex-col items-center gap-2 shadow-sm">
                  <span className="text-3xl select-none">📖</span>
                  <p className="text-sm text-on-surface-variant font-medium text-center select-none">
                    Henüz kelime örneği eklenmedi.
                  </p>
                </div>
              )}
            </div>

          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}
