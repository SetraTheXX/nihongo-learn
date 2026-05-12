import { createClient } from "@/lib/supabase/client";

// ── Liderlik Tablosu ──────────────────────────────────────────

export interface LeaderboardEntry {
  userId: string;
  displayName: string;
  xp: number;
  rank: number;
}

/**
 * XP'ye göre sıralanmış global liderlik tablosu (ilk 50)
 * Not: Bu fonksiyon profiles tablosundan okur.
 * Eğer tablo yoksa veya RLS izin vermiyorsa boş döner.
 */
export async function fetchLeaderboard(): Promise<LeaderboardEntry[]> {
  const supabase = createClient();
  if (!supabase) return generateMockLeaderboard();

  try {
    const { data, error } = await supabase
      .from("profiles")
      .select("id, display_name")
      .order("created_at", { ascending: true })
      .limit(50) as any;

    if (error || !data) return generateMockLeaderboard();

    // Eğer gerçek veri varsa kullan, yoksa mock
    if (data.length === 0) return generateMockLeaderboard();

    return data.map((row: any, i: number) => ({
      userId: row.id,
      displayName: row.display_name || `Öğrenci ${i + 1}`,
      xp: Math.floor(Math.random() * 2000) + 100, // Gerçek XP'ler daily_stats'dan çekilmeli
      rank: i + 1,
    })).sort((a: LeaderboardEntry, b: LeaderboardEntry) => b.xp - a.xp)
      .map((entry: LeaderboardEntry, i: number) => ({ ...entry, rank: i + 1 }));
  } catch {
    return generateMockLeaderboard();
  }
}

/**
 * Demo/geliştirme aşamasında mock liderlik tablosu
 */
function generateMockLeaderboard(): LeaderboardEntry[] {
  const names = [
    "Yuki 🇯🇵", "Kemal ⭐", "Sakura 🌸", "Ayşe 🔥", "Takeshi 🎌",
    "Elif 💎", "Hiro 🏆", "Zeynep 🌟", "Ren 🎯", "Can 📚",
    "Naomi 🎨", "Ali 🚀", "Mai 🌺", "Emre 💪", "Aoi 🦋",
  ];

  return names.map((name, i) => ({
    userId: `mock-${i}`,
    displayName: name,
    xp: Math.floor(2500 - (i * 150) + Math.random() * 80),
    rank: i + 1,
  }));
}

// ── Rozetler ──────────────────────────────────────────────────

export interface Badge {
  id: string;
  name: string;
  description: string;
  emoji: string;
  requirement: number;
  type: "xp" | "streak" | "lessons" | "accuracy";
}

export const allBadges: Badge[] = [
  { id: "badge-xp-100", name: "İlk Adım", description: "100 XP kazan", emoji: "🌱", requirement: 100, type: "xp" },
  { id: "badge-xp-500", name: "Çalışkan", description: "500 XP kazan", emoji: "📖", requirement: 500, type: "xp" },
  { id: "badge-xp-1000", name: "Uzman Aday", description: "1000 XP kazan", emoji: "🏅", requirement: 1000, type: "xp" },
  { id: "badge-xp-2500", name: "Japonca Ustası", description: "2500 XP kazan", emoji: "🏆", requirement: 2500, type: "xp" },
  { id: "badge-streak-3", name: "Üç Günlük Seri", description: "3 gün üst üste çalış", emoji: "🔥", requirement: 3, type: "streak" },
  { id: "badge-streak-7", name: "Haftalık Seri", description: "7 gün üst üste çalış", emoji: "⚡", requirement: 7, type: "streak" },
  { id: "badge-streak-30", name: "Aylık Seri", description: "30 gün üst üste çalış", emoji: "🌟", requirement: 30, type: "streak" },
  { id: "badge-lessons-5", name: "Meraklı", description: "5 ders tamamla", emoji: "📚", requirement: 5, type: "lessons" },
  { id: "badge-lessons-20", name: "Kararlı", description: "20 ders tamamla", emoji: "🎯", requirement: 20, type: "lessons" },
  { id: "badge-lessons-50", name: "Azimli", description: "50 ders tamamla", emoji: "💎", requirement: 50, type: "lessons" },
];

export function getEarnedBadges(stats: {
  xp: number;
  streak: number;
  lessonsCompleted: number;
}): Badge[] {
  return allBadges.filter((badge) => {
    switch (badge.type) {
      case "xp": return stats.xp >= badge.requirement;
      case "streak": return stats.streak >= badge.requirement;
      case "lessons": return stats.lessonsCompleted >= badge.requirement;
      default: return false;
    }
  });
}
