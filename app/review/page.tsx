"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useLearningStore } from "@/store/useLearningStore";
import { hiraganaData } from "@/data/hiragana";
import { katakanaData } from "@/data/katakana";
import { allGrammarData } from "@/data/course";
import ReviewCard from "@/components/srs/ReviewCard";
import ReviewSummary from "@/components/srs/ReviewSummary";
import type { GrammarItem } from "@/data/types/course";
import type { FlashcardData } from "@/lib/types";

// ─────────────────────────────────────────────
// Kart tipi birleştirici: hiragana/katakana/grammar → ortak ReviewItem
// ─────────────────────────────────────────────

interface ReviewItem {
  id: string;
  frontJapanese: string;
  frontRomaji?: string;
  backMeaning: string;
  backExplanation?: string;
}

type FilterType = "all" | "hiragana" | "katakana" | "grammar";

function buildReviewQueue(
  cardsData: ReturnType<typeof useLearningStore.getState>["cardsData"],
  filter: FilterType
): ReviewItem[] {
  const now = new Date();
  const items: ReviewItem[] = [];

  const addVocab = (vocab: FlashcardData) => {
    const sm2 = cardsData[vocab.id];
    const isDue = !sm2 || new Date(sm2.nextReviewDate) <= now;
    if (isDue) {
      items.push({
        id: vocab.id,
        frontJapanese: vocab.character,
        frontRomaji: vocab.romaji,
        backMeaning: vocab.word_example?.meaning_tr ?? vocab.romaji,
      });
    }
  };

  const addGrammar = (g: GrammarItem) => {
    const sm2 = cardsData[g.id];
    const isDue = !sm2 || new Date(sm2.nextReviewDate) <= now;
    if (isDue) {
      items.push({
        id: g.id,
        frontJapanese: g.sentence,
        frontRomaji: g.romaji,
        backMeaning: g.translation,
        backExplanation: g.explanation,
      });
    }
  };

  if (filter === "all" || filter === "hiragana") {
    hiraganaData.forEach((v) => addVocab(v));
  }
  if (filter === "all" || filter === "katakana") {
    katakanaData.forEach((v) => addVocab(v));
  }
  if (filter === "all" || filter === "grammar") {
    (allGrammarData as GrammarItem[]).forEach(addGrammar);
  }

  // Vadesi gelmiş kartları öne al, kalanı da ekle (max 30 kart / seans)
  return items.slice(0, 30);
}

// ─────────────────────────────────────────────
// Ana Sayfa
// ─────────────────────────────────────────────

export default function ReviewPage() {
  const { cardsData, stats, reviewCard, getDueCardsCount } = useLearningStore();
  const [mounted, setMounted] = useState(false);
  const [filter, setFilter] = useState<FilterType>("all");
  const [queue, setQueue] = useState<ReviewItem[]>([]);
  const [index, setIndex] = useState(0);
  const [started, setStarted] = useState(false);
  const [sessionStats, setSessionStats] = useState({ correct: 0, xpEarned: 0 });

  useEffect(() => { setMounted(true); }, []);

  const dueCount = useMemo(() => mounted ? getDueCardsCount() : 0, [mounted, getDueCardsCount, cardsData]);

  const startSession = useCallback(() => {
    const q = buildReviewQueue(cardsData, filter);
    setQueue(q);
    setIndex(0);
    setSessionStats({ correct: 0, xpEarned: 0 });
    setStarted(true);
  }, [cardsData, filter]);

  const handleAnswer = useCallback((quality: number) => {
    const card = queue[index];
    if (!card) return;

    reviewCard(card.id, quality);

    const xp = quality === 5 ? 10 : quality === 4 ? 5 : 2;
    setSessionStats((prev) => ({
      correct: quality >= 4 ? prev.correct + 1 : prev.correct,
      xpEarned: prev.xpEarned + xp,
    }));
    setIndex((i) => i + 1);
  }, [queue, index, reviewCard]);

  const handleRestart = () => {
    startSession();
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-surface-bright flex items-center justify-center">
        <div className="animate-pulse w-16 h-16 bg-primary-container rounded-full" />
      </div>
    );
  }

  const isFinished = started && index >= queue.length;
  const currentCard = queue[index];

  return (
    <div className="min-h-screen bg-surface-bright">
      {/* Header */}
      <div className="bg-white border-b border-outline-variant/20 px-4 py-3 sticky top-0 z-30">
        <div className="max-w-lg mx-auto flex items-center justify-between">
          <Link href="/" id="review-back-btn" className="flex items-center gap-2 text-primary">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <h1 className="text-base font-bold text-on-surface font-headline">
            {started ? (isFinished ? "Seans Bitti" : "Tekrar Modu") : "Tekrar Et"}
          </h1>
          {started && !isFinished && (
            <div className="flex items-center gap-1.5 text-amber-600 text-sm font-bold">
              <span>⭐</span>
              <span>+{sessionStats.xpEarned}</span>
            </div>
          )}
          {(!started || isFinished) && <div className="w-10" />}
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 py-8">

        {/* ── Başlangıç Ekranı ── */}
        {!started && (
          <div className="flex flex-col gap-6">
            {/* Hero */}
            <div className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] rounded-3xl p-8 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 text-white/[0.04] text-[120px] leading-none select-none font-japanese">
                復習
              </div>
              <div className="relative z-10">
                <div className="text-5xl mb-4">🧠</div>
                <h2 className="text-2xl font-extrabold text-white font-headline mb-2">
                  Aralıklı Tekrar
                </h2>
                <p className="text-white/60 text-sm">
                  SM-2 algoritması ile unutmadan önce hatırlat.
                </p>
                {dueCount > 0 && (
                  <div className="mt-4 inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 text-sm font-bold px-4 py-2 rounded-full border border-amber-400/30">
                    <span>⏰</span>
                    Bugün {dueCount} kart bekliyor
                  </div>
                )}
              </div>
            </div>

            {/* Filtre */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3">
                Kart Türü
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { value: "all", label: "Tüm Kartlar", emoji: "🎌" },
                  { value: "hiragana", label: "Hiragana", emoji: "あ" },
                  { value: "katakana", label: "Katakana", emoji: "ア" },
                  { value: "grammar", label: "Gramer", emoji: "📖" },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    id={`review-filter-${opt.value}`}
                    onClick={() => setFilter(opt.value as FilterType)}
                    className={`p-4 rounded-2xl border font-bold text-sm text-left flex items-center gap-3 transition-all ${
                      filter === opt.value
                        ? "border-primary bg-primary/5 text-primary shadow-sm"
                        : "border-outline-variant/30 bg-white text-on-surface-variant hover:border-primary/40"
                    }`}
                  >
                    <span className="text-2xl">{opt.emoji}</span>
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Başlat */}
            <button
              id="review-start-btn"
              onClick={startSession}
              className="w-full py-4 rounded-2xl bg-primary text-on-primary font-bold text-base uppercase tracking-wider shadow-lg hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined">play_arrow</span>
              Tekrar Başlat
            </button>
          </div>
        )}

        {/* ── Aktif Kart ── */}
        {started && !isFinished && currentCard && (
          <ReviewCard
            front={{ japanese: currentCard.frontJapanese, romaji: currentCard.frontRomaji }}
            back={{ meaning: currentCard.backMeaning, explanation: currentCard.backExplanation }}
            cardIndex={index}
            totalCards={queue.length}
            onAnswer={handleAnswer}
          />
        )}

        {/* ── Boş Seans ── */}
        {started && !isFinished && !currentCard && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🎉</div>
            <p className="text-xl font-bold text-on-surface">Tüm kartlar tamam!</p>
            <p className="text-on-surface-variant text-sm mt-2">Bugün tekrar edilecek kart yok.</p>
          </div>
        )}

        {/* ── Özet ── */}
        {isFinished && (
          <ReviewSummary
            totalReviewed={queue.length}
            correctCount={sessionStats.correct}
            xpEarned={sessionStats.xpEarned}
            streak={stats.streak}
            onRestart={handleRestart}
          />
        )}
      </div>
    </div>
  );
}
