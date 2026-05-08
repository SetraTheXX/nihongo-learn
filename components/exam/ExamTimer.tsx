"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface ExamTimerProps {
  totalSeconds: number;
  onTimeUp: () => void;
  isPaused?: boolean;
}

export default function ExamTimer({ totalSeconds, onTimeUp, isPaused = false }: ExamTimerProps) {
  const [remaining, setRemaining] = useState(totalSeconds);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPaused) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    intervalRef.current = setInterval(() => {
      setRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current!);
          onTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, onTimeUp]);

  const minutes = Math.floor(remaining / 60);
  const seconds = remaining % 60;
  const percent = (remaining / totalSeconds) * 100;
  const isLow = remaining < 60;

  return (
    <div className={`flex items-center gap-3 px-4 py-2 rounded-2xl border font-mono text-sm font-bold transition-colors ${
      isLow
        ? "bg-red-50 border-red-200 text-red-600 animate-pulse"
        : "bg-surface-container-lowest border-outline-variant/20 text-on-surface"
    }`}>
      <span className="material-symbols-outlined text-base">timer</span>
      <span>
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </span>
      <div className="flex-1 h-1.5 bg-surface-variant/30 rounded-full overflow-hidden ml-2">
        <motion.div
          className={`h-full rounded-full ${isLow ? "bg-red-400" : "bg-primary"}`}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  );
}
