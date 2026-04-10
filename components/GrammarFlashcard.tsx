"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { GrammarItem } from "@/data/course";

interface GrammarFlashcardProps {
  data: GrammarItem;
}

const flipVariants: Variants = {
  enter: { rotateY: -90, opacity: 0 },
  center: { 
    rotateY: 0, 
    opacity: 1,
    transition: { duration: 0.3 } 
  },
  exit: { 
    rotateY: 90, 
    opacity: 0,
    transition: { duration: 0.3 } 
  },
};

export default function GrammarFlashcard({ data }: GrammarFlashcardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      onClick={() => setIsFlipped((f) => !f)}
      className="cursor-pointer perspective-1000 w-full max-w-lg"
    >
      <AnimatePresence mode="wait" initial={false}>
        {!isFlipped ? (
            // ÖN YÜZ
            <motion.div
              key="front"
              variants={flipVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="bg-white rounded-[2rem] shadow-lg border border-outline-variant/30 p-8 flex flex-col items-center justify-center min-h-[360px] relative overflow-hidden"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Dekoratif köşeler */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/20 rounded-bl-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary-container/20 rounded-tr-full pointer-events-none" />

              <div className="text-4xl sm:text-5xl font-bold font-japanese tracking-wider mb-6 text-center text-on-surface z-10">
                {data.sentence}
              </div>
              <div className="text-xl text-on-surface-variant text-center opacity-80 font-medium z-10">
                {data.romaji}
              </div>

              {/* Alt ipucu */}
              <div className="absolute bottom-6 flex flex-col items-center text-primary/50 gap-1 z-10">
                <span className="material-symbols-outlined text-2xl select-none animate-bounce">touch_app</span>
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold select-none">
                  İncelemek için dokun
                </p>
              </div>
            </motion.div>
          ) : (
            // ARKA YÜZ
            <motion.div
              key="back"
              initial={{ rotateY: 90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: -90, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-[2rem] shadow-lg border border-outline-variant/30 p-6 sm:p-8 flex flex-col gap-6 min-h-[360px]"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Çeviri */}
              <div className="text-center pb-4 border-b border-outline-variant/20">
                <span className="text-xs text-primary font-bold uppercase tracking-widest block mb-2">Çeviri</span>
                <div className="text-2xl font-bold text-on-surface">{data.translation}</div>
              </div>

              {/* Öğeler */}
              <div>
                <span className="text-xs text-primary font-bold uppercase tracking-widest block mb-3 text-center">Öğeler</span>
                <div className="flex flex-wrap items-center justify-center gap-2">
                  {data.breakdown.map((item, idx) => (
                    <div 
                      key={idx} 
                      className={`flex flex-col items-center p-3 rounded-2xl ${item.isParticle ? 'bg-secondary-container/50 border border-secondary/20' : 'bg-surface-container-high'}`}
                    >
                      <span className={`text-lg font-bold font-japanese ${item.isParticle ? 'text-secondary' : 'text-on-surface'}`}>
                        {item.word}
                      </span>
                      <span className="text-xs text-on-surface-variant font-medium mt-1">{item.romaji}</span>
                      <span className={`text-[10px] mt-0.5 uppercase tracking-wide ${item.isParticle ? 'text-secondary-dim font-bold' : 'text-on-surface-variant'}`}>
                        {item.meaning}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Açıklama */}
              <div className="bg-primary/5 rounded-2xl p-4 mt-auto">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-0.5 text-xl">lightbulb</span>
                  <p className="text-sm text-on-surface font-medium leading-relaxed">
                    {data.explanation}
                  </p>
                </div>
              </div>

            </motion.div>
          )}
      </AnimatePresence>
    </div>
  );
}
