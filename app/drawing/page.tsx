"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { hiraganaData } from "@/data/hiragana";
import { katakanaData } from "@/data/katakana";
import DrawingBoard from "@/components/canvas/DrawingBoard";

type CharSet = "hiragana" | "katakana";

export default function DrawingPage() {
  const [charSet, setCharSet] = useState<CharSet>("hiragana");
  const [charIndex, setCharIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => { setMounted(true); }, []);

  const chars = useMemo(() => {
    const data = charSet === "hiragana" ? hiraganaData : katakanaData;
    return data.map((d) => ({
      char: d.character,
      romaji: d.romaji,
      group: d.group,
    }));
  }, [charSet]);

  const currentChar = chars[charIndex];

  const nextChar = () => setCharIndex((i) => (i + 1) % chars.length);
  const prevChar = () => setCharIndex((i) => (i - 1 + chars.length) % chars.length);

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
        <div className="max-w-lg mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-primary">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <h1 className="text-base font-bold text-on-surface font-headline">Yazma Pratiği</h1>
          <div className="w-10" />
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 py-6 space-y-6">
        {/* Hero */}
        <div className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] rounded-3xl p-6 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 text-white/[0.04] text-[90px] leading-none select-none font-japanese">書</div>
          <div className="relative z-10">
            <div className="text-4xl mb-2">✍️</div>
            <h2 className="text-xl font-extrabold text-white font-headline">Kana Çizim Tahtası</h2>
            <p className="text-white/60 text-xs mt-1">Parmağınla veya farenle harfi çiz.</p>
          </div>
        </div>

        {/* Charset Switcher */}
        <div className="flex bg-surface-container-low rounded-2xl p-1 gap-1">
          <button
            onClick={() => { setCharSet("hiragana"); setCharIndex(0); }}
            className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all ${
              charSet === "hiragana" ? "bg-white shadow-sm text-primary" : "text-on-surface-variant"
            }`}
          >
            あ Hiragana
          </button>
          <button
            onClick={() => { setCharSet("katakana"); setCharIndex(0); }}
            className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all ${
              charSet === "katakana" ? "bg-white shadow-sm text-primary" : "text-on-surface-variant"
            }`}
          >
            ア Katakana
          </button>
        </div>

        {/* Karakter Bilgisi */}
        <div className="flex items-center justify-between">
          <button
            onClick={prevChar}
            className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-surface-container-high transition-colors"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>

          <motion.div
            key={`${charSet}-${charIndex}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <p className="text-6xl font-japanese font-bold text-on-surface">{currentChar.char}</p>
            <p className="text-sm font-bold text-primary mt-1">{currentChar.romaji}</p>
            <p className="text-xs text-on-surface-variant">
              {charIndex + 1}/{chars.length} • {currentChar.group} grubu
            </p>
          </motion.div>

          <button
            onClick={nextChar}
            className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-surface-container-high transition-colors"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>

        {/* Canvas */}
        <DrawingBoard
          templateChar={currentChar.char}
          width={320}
          height={320}
        />

        {/* Bilgi Notu */}
        <div className="bg-amber-50/50 border border-amber-200/60 rounded-2xl px-4 py-3 text-center">
          <p className="text-xs font-bold text-amber-700 flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-sm">lightbulb</span>
            Gri şablon üzerinden geçerek harfi öğren!
          </p>
        </div>
      </div>
    </div>
  );
}
