"use client";

import React from "react";
import { motion } from "framer-motion";

interface StreakWidgetProps {
  currentStreak: number;
  longestStreak?: number;
  studiedToday: boolean;
}

export default function StreakWidget({
  currentStreak,
  longestStreak,
  studiedToday,
}: StreakWidgetProps) {
  // Son 7 günlük görsel temsil (mock — gerçek DB'ye bağlanmak için extend edilebilir)
  const days = ["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"];
  const today = new Date().getDay(); // 0=Pazar
  // Pazartesi=0 bazlı indeks
  const todayIdx = today === 0 ? 6 : today - 1;

  return (
    <div className="bg-white rounded-3xl border border-outline-variant/20 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-amber-400 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-3xl"
          >
            🔥
          </motion.div>
          <div>
            <p className="text-white/80 text-xs font-bold uppercase tracking-wider">Günlük Seri</p>
            <p className="text-white text-3xl font-black font-headline leading-none">
              {currentStreak} <span className="text-xl font-bold">gün</span>
            </p>
          </div>
        </div>
        {longestStreak !== undefined && longestStreak > 0 && (
          <div className="text-right">
            <p className="text-white/60 text-xs font-bold uppercase tracking-wider">En Uzun</p>
            <p className="text-white text-xl font-black font-headline">{longestStreak} gün</p>
          </div>
        )}
      </div>

      {/* Week View */}
      <div className="px-6 py-4">
        <div className="flex justify-between gap-1">
          {days.map((day, i) => {
            const isPast = i < todayIdx;
            const isToday = i === todayIdx;
            const active = isToday ? studiedToday : isPast && currentStreak > (todayIdx - i);

            return (
              <div key={day} className="flex flex-col items-center gap-1.5 flex-1">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-base transition-all ${
                    active
                      ? "bg-orange-400 shadow-md shadow-orange-200"
                      : isToday
                      ? "bg-orange-100 border-2 border-orange-300"
                      : "bg-surface-variant/30"
                  }`}
                >
                  {active ? "🔥" : isToday ? "⭕" : ""}
                </motion.div>
                <span className={`text-[10px] font-bold uppercase tracking-wide ${
                  isToday ? "text-orange-500" : "text-on-surface-variant/60"
                }`}>
                  {day}
                </span>
              </div>
            );
          })}
        </div>

        {/* Today's status message */}
        <div className={`mt-4 text-center text-xs font-bold rounded-xl px-3 py-2 ${
          studiedToday
            ? "bg-emerald-50 text-emerald-600"
            : "bg-amber-50 text-amber-600"
        }`}>
          {studiedToday
            ? "✅ Bugün çalıştın! Serin devam ediyor."
            : "⚠️ Bugün henüz çalışmadın. Serini koruyabilirsin!"}
        </div>
      </div>
    </div>
  );
}
