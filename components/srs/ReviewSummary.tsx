"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ReviewSummaryProps {
  totalReviewed: number;
  correctCount: number;
  xpEarned: number;
  streak: number;
  onRestart?: () => void;
}

export default function ReviewSummary({
  totalReviewed,
  correctCount,
  xpEarned,
  streak,
  onRestart,
}: ReviewSummaryProps) {
  const accuracy = totalReviewed > 0 ? Math.round((correctCount / totalReviewed) * 100) : 0;

  const getGrade = () => {
    if (accuracy >= 90) return { label: "Mükemmel!", emoji: "🏆", color: "text-amber-500" };
    if (accuracy >= 70) return { label: "Harika!", emoji: "🌟", color: "text-emerald-500" };
    if (accuracy >= 50) return { label: "İyi İş!", emoji: "👍", color: "text-blue-500" };
    return { label: "Devam Et!", emoji: "💪", color: "text-orange-500" };
  };

  const grade = getGrade();

  const stats = [
    { label: "İncelenen", value: totalReviewed, icon: "style", color: "bg-blue-50 text-blue-600" },
    { label: "Doğru", value: correctCount, icon: "check_circle", color: "bg-emerald-50 text-emerald-600" },
    { label: "Kazanılan XP", value: `+${xpEarned}`, icon: "star", color: "bg-amber-50 text-amber-600" },
    { label: "Seri", value: `${streak} 🔥`, icon: "local_fire_department", color: "bg-red-50 text-red-600" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className="flex flex-col items-center gap-8 w-full max-w-lg mx-auto"
    >
      {/* Grade */}
      <div className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          className="text-7xl mb-4"
        >
          {grade.emoji}
        </motion.div>
        <h2 className={`text-4xl font-extrabold font-headline ${grade.color}`}>
          {grade.label}
        </h2>
        <p className="text-on-surface-variant mt-2 font-medium">
          Tekrar seansını tamamladın!
        </p>
      </div>

      {/* Accuracy Ring */}
      <div className="relative w-32 h-32">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
          <circle
            cx="18" cy="18" r="15.9"
            fill="none" stroke="currentColor"
            strokeWidth="2.5"
            className="text-surface-variant/30"
          />
          <motion.circle
            cx="18" cy="18" r="15.9"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="100"
            initial={{ strokeDashoffset: 100 }}
            animate={{ strokeDashoffset: 100 - accuracy }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-primary"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-black text-on-surface font-headline">{accuracy}%</span>
          <span className="text-xs text-on-surface-variant font-medium">Doğruluk</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="w-full grid grid-cols-2 gap-3">
        {stats.map((s) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className={`${s.color} rounded-2xl p-4 flex flex-col gap-1`}
          >
            <span className="material-symbols-outlined text-lg">{s.icon}</span>
            <span className="text-2xl font-black font-headline">{s.value}</span>
            <span className="text-xs font-bold uppercase tracking-wide opacity-70">{s.label}</span>
          </motion.div>
        ))}
      </div>

      {/* Actions */}
      <div className="w-full flex flex-col gap-3">
        {onRestart && (
          <button
            id="review-restart-btn"
            onClick={onRestart}
            className="w-full py-3.5 rounded-2xl bg-primary text-on-primary font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-lg">refresh</span>
            Tekrar Çalış
          </button>
        )}
        <Link
          href="/"
          id="review-home-btn"
          className="w-full py-3.5 rounded-2xl border border-outline-variant/40 text-on-surface font-bold text-sm uppercase tracking-wider hover:bg-surface-container transition-colors flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined text-lg">home</span>
          Ana Sayfaya Dön
        </Link>
      </div>
    </motion.div>
  );
}
