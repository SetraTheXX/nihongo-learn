"use client";

import React, { useState, useCallback, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { hiraganaData } from "@/data/hiragana";
import { katakanaData } from "@/data/katakana";
import { allGrammarData } from "@/data/course";
import ExamTimer from "@/components/exam/ExamTimer";
import type { GrammarItem } from "@/data/types/course";

// ── Soru Üretici ──────────────────────────────────────────────

interface ExamQuestion {
  id: string;
  type: "kana" | "grammar";
  question: string;
  options: string[];
  correctIndex: number;
  category: string;
}

function generateExam(count: number = 30): ExamQuestion[] {
  const questions: ExamQuestion[] = [];

  // 1. Hiragana soruları (10 adet)
  const shuffledH = [...hiraganaData].sort(() => Math.random() - 0.5).slice(0, 10);
  for (const h of shuffledH) {
    const wrong = hiraganaData
      .filter((x) => x.id !== h.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map((x) => x.romaji);
    const options = [h.romaji, ...wrong].sort(() => Math.random() - 0.5);
    questions.push({
      id: `exam-h-${h.id}`,
      type: "kana",
      question: `"${h.character}" karakterinin okunuşu nedir?`,
      options,
      correctIndex: options.indexOf(h.romaji),
      category: "Hiragana",
    });
  }

  // 2. Katakana soruları (5 adet)
  const shuffledK = [...katakanaData].sort(() => Math.random() - 0.5).slice(0, 5);
  for (const k of shuffledK) {
    const wrong = katakanaData
      .filter((x) => x.id !== k.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map((x) => x.romaji);
    const options = [k.romaji, ...wrong].sort(() => Math.random() - 0.5);
    questions.push({
      id: `exam-k-${k.id}`,
      type: "kana",
      question: `"${k.character}" (katakana) ne okunur?`,
      options,
      correctIndex: options.indexOf(k.romaji),
      category: "Katakana",
    });
  }

  // 3. Gramer soruları (15 adet max)
  const grammarItems = allGrammarData as GrammarItem[];
  const shuffledG = [...grammarItems].sort(() => Math.random() - 0.5).slice(0, 15);
  for (const g of shuffledG) {
    const wrong = grammarItems
      .filter((x) => x.id !== g.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map((x) => x.translation);
    const options = [g.translation, ...wrong].sort(() => Math.random() - 0.5);
    questions.push({
      id: `exam-g-${g.id}`,
      type: "grammar",
      question: `"${g.sentence}" cümlesinin anlamı nedir?`,
      options,
      correctIndex: options.indexOf(g.translation),
      category: "Gramer",
    });
  }

  return questions.sort(() => Math.random() - 0.5).slice(0, count);
}

// ── Ana Sayfa ──────────────────────────────────────────────

type ExamState = "intro" | "active" | "result";

export default function ExamPage() {
  const [examState, setExamState] = useState<ExamState>("intro");
  const [questions, setQuestions] = useState<ExamQuestion[]>([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => { setMounted(true); }, []);

  const startExam = useCallback(() => {
    const q = generateExam(30);
    setQuestions(q);
    setAnswers(new Array(q.length).fill(null));
    setCurrentQ(0);
    setSelectedAnswer(null);
    setExamState("active");
  }, []);

  const handleAnswer = useCallback((optionIndex: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(optionIndex);

    setAnswers((prev) => {
      const next = [...prev];
      next[currentQ] = optionIndex;
      return next;
    });

    setTimeout(() => {
      setSelectedAnswer(null);
      if (currentQ + 1 < questions.length) {
        setCurrentQ((i) => i + 1);
      } else {
        setExamState("result");
      }
    }, 800);
  }, [selectedAnswer, currentQ, questions.length]);

  const handleTimeUp = useCallback(() => {
    setExamState("result");
  }, []);

  // Sonuç hesaplama
  const results = useMemo(() => {
    if (examState !== "result") return null;
    let correct = 0;
    const categoryStats: Record<string, { correct: number; total: number }> = {};

    questions.forEach((q, i) => {
      if (!categoryStats[q.category]) categoryStats[q.category] = { correct: 0, total: 0 };
      categoryStats[q.category].total++;

      if (answers[i] === q.correctIndex) {
        correct++;
        categoryStats[q.category].correct++;
      }
    });

    const percent = Math.round((correct / questions.length) * 100);
    const passed = percent >= 60; // N5 geçme barajı %60
    return { correct, total: questions.length, percent, passed, categoryStats };
  }, [examState, questions, answers]);

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
          {examState === "active" ? (
            <div className="flex-1">
              <ExamTimer totalSeconds={1800} onTimeUp={handleTimeUp} />
            </div>
          ) : (
            <>
              <Link href="/" className="flex items-center gap-2 text-primary">
                <span className="material-symbols-outlined">arrow_back</span>
              </Link>
              <h1 className="text-base font-bold text-on-surface font-headline">
                {examState === "result" ? "Sınav Sonucu" : "JLPT N5 Sınavı"}
              </h1>
              <div className="w-10" />
            </>
          )}
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6">

        {/* ── Giriş Ekranı ── */}
        {examState === "intro" && (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] rounded-3xl p-8 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 text-white/[0.04] text-[100px] leading-none select-none font-japanese">試験</div>
              <div className="relative z-10">
                <div className="text-5xl mb-3">🎓</div>
                <h2 className="text-2xl font-extrabold text-white font-headline">JLPT N5 Deneme</h2>
                <p className="text-white/60 text-sm mt-2">Gerçekçi sınav deneyimi ile kendini test et.</p>
              </div>
            </div>

            {/* Sınav bilgileri */}
            <div className="bg-white rounded-3xl border border-outline-variant/20 shadow-sm p-6 space-y-4">
              <h3 className="font-bold text-on-surface text-sm uppercase tracking-wider">Sınav Detayları</h3>
              {[
                { icon: "quiz", label: "Soru Sayısı", value: "30 soru" },
                { icon: "timer", label: "Süre", value: "30 dakika" },
                { icon: "check_circle", label: "Geçme Barajı", value: "%60 (18/30)" },
                { icon: "category", label: "Kategoriler", value: "Hiragana, Katakana, Gramer" },
              ].map((info) => (
                <div key={info.label} className="flex items-center gap-3 p-3 bg-surface-container-lowest rounded-xl">
                  <span className="material-symbols-outlined text-primary">{info.icon}</span>
                  <div className="flex-1">
                    <span className="text-xs text-on-surface-variant font-bold uppercase tracking-wide">{info.label}</span>
                    <p className="text-sm font-bold text-on-surface">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={startExam}
              className="w-full py-4 rounded-2xl bg-primary text-on-primary font-bold text-base uppercase tracking-wider shadow-lg hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined">play_arrow</span>
              Sınava Başla
            </button>
          </div>
        )}

        {/* ── Aktif Sınav ── */}
        {examState === "active" && questions[currentQ] && (
          <div className="space-y-6">
            {/* Progress */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-on-surface-variant bg-surface-container-low px-3 py-1 rounded-full">
                {currentQ + 1}/{questions.length}
              </span>
              <div className="flex-1 h-2 bg-surface-variant/30 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary rounded-full"
                  animate={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}
                />
              </div>
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                {questions[currentQ].category}
              </span>
            </div>

            {/* Soru */}
            <motion.div
              key={currentQ}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-3xl border border-outline-variant/20 shadow-sm p-6"
            >
              <h3 className="text-lg font-bold text-on-surface mb-6 font-japanese">
                {questions[currentQ].question}
              </h3>

              <div className="space-y-3">
                {questions[currentQ].options.map((opt, oi) => {
                  const isCorrect = oi === questions[currentQ].correctIndex;
                  const isSelected = selectedAnswer === oi;
                  let cls = "bg-surface-container-lowest border-outline-variant/30 text-on-surface hover:border-primary/50";
                  if (selectedAnswer !== null) {
                    if (isCorrect) cls = "bg-emerald-50 border-emerald-400 text-emerald-800";
                    else if (isSelected) cls = "bg-red-50 border-red-400 text-red-800";
                  }

                  return (
                    <button
                      key={oi}
                      onClick={() => handleAnswer(oi)}
                      disabled={selectedAnswer !== null}
                      className={`w-full text-left p-4 rounded-2xl border font-bold text-sm transition-all ${cls}`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </div>
        )}

        {/* ── Sonuç ── */}
        {examState === "result" && results && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-6"
          >
            {/* Geçti/Kaldı */}
            <div className={`rounded-3xl p-8 text-center ${
              results.passed
                ? "bg-gradient-to-br from-emerald-500 to-teal-600"
                : "bg-gradient-to-br from-red-500 to-orange-600"
            }`}>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                className="text-7xl mb-4"
              >
                {results.passed ? "🎉" : "📚"}
              </motion.div>
              <h2 className="text-3xl font-extrabold text-white font-headline">
                {results.passed ? "TEBRİKLER! GEÇTİN!" : "MAALESEF KALDIN"}
              </h2>
              <p className="text-white/80 mt-2 text-lg font-bold">
                %{results.percent} — {results.correct}/{results.total} doğru
              </p>
              {!results.passed && (
                <p className="text-white/60 mt-1 text-sm">Geçmek için en az %60 gerekli. Tekrar dene!</p>
              )}
            </div>

            {/* Kategori Analizi */}
            <div className="bg-white rounded-3xl border border-outline-variant/20 shadow-sm p-6">
              <h3 className="font-bold text-on-surface text-sm uppercase tracking-wider mb-4">
                📊 Kategori Analizi
              </h3>
              <div className="space-y-3">
                {Object.entries(results.categoryStats).map(([cat, stat]) => {
                  const catPercent = Math.round((stat.correct / stat.total) * 100);
                  return (
                    <div key={cat}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-bold text-on-surface">{cat}</span>
                        <span className="font-bold text-on-surface-variant">{stat.correct}/{stat.total} ({catPercent}%)</span>
                      </div>
                      <div className="h-2 bg-surface-variant/30 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${catPercent}%` }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className={`h-full rounded-full ${catPercent >= 60 ? "bg-emerald-400" : "bg-red-400"}`}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Aksiyonlar */}
            <div className="flex flex-col gap-3">
              <button
                onClick={startExam}
                className="w-full py-3.5 rounded-2xl bg-primary text-on-primary font-bold text-sm uppercase tracking-wider"
              >
                Tekrar Sınava Gir
              </button>
              <Link
                href="/"
                className="w-full py-3.5 rounded-2xl border border-outline-variant/40 text-on-surface font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2"
              >
                Ana Sayfaya Dön
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
