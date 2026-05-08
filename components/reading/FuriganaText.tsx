"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FuriganaTextProps {
  japanese: string;
  words: {
    japanese: string;
    romaji: string;
    meaning: string;
    isParticle?: boolean;
  }[];
}

interface TooltipData {
  word: string;
  romaji: string;
  meaning: string;
  isParticle: boolean;
  x: number;
  y: number;
}

export default function FuriganaText({ japanese, words }: FuriganaTextProps) {
  const [tooltip, setTooltip] = useState<TooltipData | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setTooltip(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Metni kelimelere böl ve eşle
  const segments = buildSegments(japanese, words);

  const handleWordClick = (
    word: (typeof words)[number],
    event: React.MouseEvent
  ) => {
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    const containerRect = containerRef.current?.getBoundingClientRect();
    if (!containerRect) return;

    setTooltip({
      word: word.japanese,
      romaji: word.romaji,
      meaning: word.meaning,
      isParticle: word.isParticle || false,
      x: rect.left - containerRect.left + rect.width / 2,
      y: rect.top - containerRect.top,
    });
  };

  return (
    <div ref={containerRef} className="relative inline">
      <p className="text-2xl md:text-3xl font-japanese leading-relaxed tracking-wide text-on-surface">
        {segments.map((seg, i) => {
          if (seg.matched) {
            return (
              <span
                key={i}
                onClick={(e) => handleWordClick(seg.matched!, e)}
                className={`cursor-pointer rounded-md px-0.5 transition-all duration-200 hover:bg-primary/10 active:scale-95 ${
                  seg.matched.isParticle
                    ? "text-blue-500 font-bold"
                    : "text-on-surface underline decoration-primary/30 decoration-wavy underline-offset-4"
                }`}
              >
                {seg.text}
              </span>
            );
          }
          return <span key={i}>{seg.text}</span>;
        })}
      </p>

      {/* Tooltip Popup */}
      <AnimatePresence>
        {tooltip && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 pointer-events-none"
            style={{
              left: tooltip.x,
              top: tooltip.y - 8,
              transform: "translate(-50%, -100%)",
            }}
          >
            <div className="bg-[#1a1a2e] text-white rounded-2xl px-4 py-3 shadow-2xl border border-white/10 min-w-[160px]">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg font-japanese font-bold">{tooltip.word}</span>
                {tooltip.isParticle && (
                  <span className="text-[10px] bg-blue-500/30 text-blue-300 px-2 py-0.5 rounded-full font-bold uppercase">
                    Takı
                  </span>
                )}
              </div>
              <p className="text-white/60 text-xs font-medium">{tooltip.romaji}</p>
              <p className="text-white/90 text-sm font-bold mt-1">{tooltip.meaning}</p>
              {/* Arrow */}
              <div className="absolute left-1/2 -bottom-1.5 -translate-x-1/2 w-3 h-3 bg-[#1a1a2e] rotate-45 border-r border-b border-white/10" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Yardımcı: Metni kelimelere bölüp eşleştir ──
interface Segment {
  text: string;
  matched: FuriganaTextProps["words"][number] | null;
}

function buildSegments(
  text: string,
  words: FuriganaTextProps["words"]
): Segment[] {
  const segments: Segment[] = [];
  let remaining = text;

  while (remaining.length > 0) {
    let found = false;

    for (const word of words) {
      if (remaining.startsWith(word.japanese)) {
        segments.push({ text: word.japanese, matched: word });
        remaining = remaining.slice(word.japanese.length);
        found = true;
        break;
      }
    }

    if (!found) {
      // Eşleşmeyen karakter (boşluk, noktalama vb.)
      segments.push({ text: remaining[0], matched: null });
      remaining = remaining.slice(1);
    }
  }

  return segments;
}
