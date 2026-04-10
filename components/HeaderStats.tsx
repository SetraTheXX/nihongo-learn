"use client";
import { useLearningStore } from "@/store/useLearningStore";
import { useEffect, useState } from "react";

export default function HeaderStats() {
  const { stats } = useLearningStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
     return (
        <nav className="flex space-x-3 font-medium text-sm">
          <span className="cursor-default text-foreground/40 px-3 py-1.5 rounded-lg shadow-sm border border-border/20 bg-[var(--card-bg)]">🔥 ...</span>
          <span className="cursor-default text-foreground/40 px-3 py-1.5 rounded-lg shadow-sm border border-border/20 bg-[var(--card-bg)]">⭐ ...</span>
        </nav>
     );
  }

  return (
    <nav className="flex space-x-3 font-medium text-sm">
      <span className="cursor-default tracking-wide text-orange-500 border-2 border-orange-200 bg-orange-50/50 px-3 py-1.5 rounded-xl shadow-sm font-bold flex items-center gap-1.5">
        🔥 <span className="text-orange-600">{stats.streak} Gün</span>
      </span>
      <span className="cursor-default tracking-wide text-yellow-500 border-2 border-yellow-200 bg-yellow-50/50 px-3 py-1.5 rounded-xl shadow-sm font-bold flex items-center gap-1.5">
        ⭐ <span className="text-yellow-600">{stats.xp} XP</span>
      </span>
    </nav>
  );
}
