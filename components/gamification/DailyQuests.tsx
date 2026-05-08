"use client";

import React from "react";
import { motion } from "framer-motion";

interface Quest {
  id: string;
  label: string;
  emoji: string;
  current: number;
  goal: number;
  xpReward: number;
}

interface DailyQuestsProps {
  totalAnswered: number;
  totalCorrect: number;
  lessonsCompleted: number;
  xpToday: number;
}

export default function DailyQuests({
  totalAnswered,
  totalCorrect,
  lessonsCompleted,
  xpToday,
}: DailyQuestsProps) {
  const quests: Quest[] = [
    {
      id: "q-cards",
      label: "Günlük Tekrar",
      emoji: "🃏",
      current: Math.min(totalAnswered, 20),
      goal: 20,
      xpReward: 50,
    },
    {
      id: "q-accuracy",
      label: "Doğruluk Şampiyonu",
      emoji: "🎯",
      current: Math.min(totalCorrect, 15),
      goal: 15,
      xpReward: 30,
    },
    {
      id: "q-lesson",
      label: "Ders Tamamla",
      emoji: "📚",
      current: Math.min(lessonsCompleted, 1),
      goal: 1,
      xpReward: 40,
    },
    {
      id: "q-xp",
      label: "XP Avcısı",
      emoji: "⭐",
      current: Math.min(xpToday, 100),
      goal: 100,
      xpReward: 25,
    },
  ];

  const completedCount = quests.filter((q) => q.current >= q.goal).length;

  return (
    <div className="bg-white rounded-3xl border border-outline-variant/20 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="px-6 pt-5 pb-3 flex items-center justify-between border-b border-outline-variant/10">
        <div className="flex items-center gap-2">
          <span className="text-xl">🏅</span>
          <h3 className="font-bold text-on-surface text-sm uppercase tracking-wider">Günlük Görevler</h3>
        </div>
        <div className="text-xs font-bold text-on-surface-variant bg-surface-container-low px-3 py-1 rounded-full">
          {completedCount}/{quests.length} Tamamlandı
        </div>
      </div>

      {/* Quest List */}
      <div className="px-4 py-3 space-y-2">
        {quests.map((quest, i) => {
          const percent = Math.min(100, Math.round((quest.current / quest.goal) * 100));
          const done = quest.current >= quest.goal;

          return (
            <motion.div
              key={quest.id}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.07 }}
              className={`p-4 rounded-2xl border transition-all ${
                done
                  ? "bg-emerald-50 border-emerald-200/60"
                  : "bg-surface-container-lowest border-outline-variant/20"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{quest.emoji}</span>
                  <span className={`text-sm font-bold ${done ? "text-emerald-700" : "text-on-surface"}`}>
                    {quest.label}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  {done && <span className="text-emerald-500">✅</span>}
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                    done ? "bg-emerald-100 text-emerald-700" : "bg-amber-50 text-amber-600"
                  }`}>
                    +{quest.xpReward} XP
                  </span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="flex items-center gap-2">
                <div className="flex-1 h-2 bg-surface-variant/30 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${percent}%` }}
                    transition={{ duration: 0.7, delay: i * 0.07 + 0.2, ease: "easeOut" }}
                    className={`h-full rounded-full ${done ? "bg-emerald-400" : "bg-primary"}`}
                  />
                </div>
                <span className="text-xs font-bold text-on-surface-variant/70 min-w-[40px] text-right">
                  {quest.current}/{quest.goal}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* All done banner */}
      {completedCount === quests.length && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="mx-4 mb-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-4 text-center"
        >
          <p className="text-white font-bold text-sm">🎊 Tüm günlük görevleri tamamladın!</p>
          <p className="text-white/70 text-xs mt-1">Yarın yeni görevler geliyor.</p>
        </motion.div>
      )}
    </div>
  );
}
