"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fetchLeaderboard, getEarnedBadges, allBadges, type LeaderboardEntry } from "@/lib/supabase/social";
import { useLearningStore } from "@/store/useLearningStore";

export default function LeaderboardPage() {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState<"leaderboard" | "badges">("leaderboard");
  const { stats, completedLessons } = useLearningStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    fetchLeaderboard().then((data) => {
      setEntries(data);
      setLoading(false);
    });
  }, []);

  const earnedBadges = mounted
    ? getEarnedBadges({ xp: stats.xp, streak: stats.streak, lessonsCompleted: completedLessons.length })
    : [];

  const podiumColors = [
    "from-amber-400 to-yellow-500", // 1st
    "from-slate-300 to-slate-400",  // 2nd
    "from-orange-400 to-amber-600", // 3rd
  ];
  const podiumHeights = ["h-28", "h-20", "h-16"];
  const podiumOrder = [1, 0, 2]; // Ortadaki 1. sıra

  return (
    <div className="min-h-screen bg-surface-bright">
      {/* Header */}
      <div className="bg-white border-b border-outline-variant/20 px-4 py-3 sticky top-0 z-30">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-primary">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <h1 className="text-base font-bold text-on-surface font-headline">Sıralama & Rozetler</h1>
          <div className="w-10" />
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
        {/* Tab Switcher */}
        <div className="flex bg-surface-container-low rounded-2xl p-1 gap-1">
          <button
            onClick={() => setTab("leaderboard")}
            className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all ${
              tab === "leaderboard" ? "bg-white shadow-sm text-primary" : "text-on-surface-variant"
            }`}
          >
            🏆 Liderlik
          </button>
          <button
            onClick={() => setTab("badges")}
            className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all ${
              tab === "badges" ? "bg-white shadow-sm text-primary" : "text-on-surface-variant"
            }`}
          >
            🏅 Rozetler
          </button>
        </div>

        {/* ── Liderlik Tablosu ── */}
        {tab === "leaderboard" && (
          <>
            {loading ? (
              <div className="flex justify-center py-16">
                <div className="animate-pulse w-16 h-16 bg-primary-container rounded-full" />
              </div>
            ) : (
              <>
                {/* Kürsü (İlk 3) */}
                {entries.length >= 3 && (
                  <div className="flex items-end justify-center gap-3 pt-4 pb-2">
                    {podiumOrder.map((pIdx, visualIdx) => {
                      const entry = entries[pIdx];
                      return (
                        <motion.div
                          key={entry.userId}
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: visualIdx * 0.15 }}
                          className="flex flex-col items-center"
                        >
                          {/* Avatar */}
                          <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${podiumColors[pIdx]} flex items-center justify-center text-white font-bold text-xl shadow-lg mb-2`}>
                            {entry.displayName[0]}
                          </div>
                          <p className="text-xs font-bold text-on-surface text-center max-w-[80px] truncate">
                            {entry.displayName}
                          </p>
                          <p className="text-xs font-bold text-on-surface-variant">{entry.xp} XP</p>
                          {/* Kürsü */}
                          <div className={`w-20 ${podiumHeights[pIdx]} bg-gradient-to-t ${podiumColors[pIdx]} rounded-t-xl mt-2 flex items-start justify-center pt-2`}>
                            <span className="text-white font-black text-lg">#{pIdx + 1}</span>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                )}

                {/* Liste (4+) */}
                <div className="bg-white rounded-3xl border border-outline-variant/20 shadow-sm overflow-hidden">
                  {entries.slice(3).map((entry, i) => (
                    <motion.div
                      key={entry.userId}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (i + 3) * 0.03 }}
                      className="flex items-center gap-4 px-5 py-3.5 border-b border-outline-variant/10 last:border-0"
                    >
                      <span className="text-sm font-black text-on-surface-variant w-8 text-center">
                        {entry.rank}
                      </span>
                      <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant font-bold">
                        {entry.displayName[0]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-sm text-on-surface truncate">{entry.displayName}</p>
                      </div>
                      <span className="text-sm font-bold text-primary">{entry.xp} XP</span>
                    </motion.div>
                  ))}
                </div>
              </>
            )}
          </>
        )}

        {/* ── Rozetler ── */}
        {tab === "badges" && (
          <div className="space-y-3">
            <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">
              {earnedBadges.length}/{allBadges.length} Rozet Kazanıldı
            </p>
            <div className="grid grid-cols-2 gap-3">
              {allBadges.map((badge, i) => {
                const earned = earnedBadges.some((b) => b.id === badge.id);
                return (
                  <motion.div
                    key={badge.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className={`p-4 rounded-2xl border text-center transition-all ${
                      earned
                        ? "bg-amber-50 border-amber-200/60 shadow-sm"
                        : "bg-surface-container border-outline-variant/20 opacity-50 grayscale"
                    }`}
                  >
                    <div className="text-3xl mb-2">{badge.emoji}</div>
                    <p className="font-bold text-sm text-on-surface">{badge.name}</p>
                    <p className="text-xs text-on-surface-variant mt-1">{badge.description}</p>
                    {earned && (
                      <span className="inline-block mt-2 text-xs font-bold text-amber-600 bg-amber-100 px-2 py-0.5 rounded-full">
                        ✅ Kazanıldı
                      </span>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
