"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { motion } from "framer-motion";
import type { User } from "@supabase/supabase-js";
import { useLearningStore } from "@/store/useLearningStore";
import StreakWidget from "@/components/gamification/StreakWidget";
import DailyQuests from "@/components/gamification/DailyQuests";

export default function ProfilePage() {
  const router = useRouter();
  const supabase = createClient();

  const [user, setUser] = useState<User | null>(null);
  const [displayName, setDisplayName] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [avatarError, setAvatarError] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // Store'dan gerçek veriler
  const { stats, completedLessons, getDailyGoalProgress, getDueCardsCount } = useLearningStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    async function loadProfile() {
      if (!supabase) {
        setDisplayName("Demo Öğrenci");
        setLoading(false);
        return;
      }

      const { data: { user: currentUser } } = await supabase.auth.getUser();

      if (!currentUser) {
        router.push("/auth/login");
        return;
      }

      setUser(currentUser);

      const { data: profile } = await supabase
        .from("profiles")
        .select("display_name")
        .eq("id", currentUser.id)
        .single() as { data: { display_name: string | null } | null };

      if (profile?.display_name) {
        setDisplayName(profile.display_name);
      } else if (currentUser.user_metadata?.full_name) {
        setDisplayName(currentUser.user_metadata.full_name);
      }

      setLoading(false);
    }

    loadProfile();
  }, []);

  async function handleSaveProfile(e: React.FormEvent) {
    e.preventDefault();
    if (!supabase) {
      setMessage({ type: "success", text: "Demo modunda profil bu cihazdaki local ilerleme ile kullanılıyor." });
      return;
    }
    if (!user) return;
    setSaving(true);
    setMessage(null);

    const { error } = await (supabase.from("profiles") as any)
      .update({ display_name: displayName, updated_at: new Date().toISOString() })
      .eq("id", user.id);

    setSaving(false);
    if (error) {
      setMessage({ type: "error", text: "Profil kaydedilirken bir hata oluştu." });
    } else {
      setMessage({ type: "success", text: "Profil başarıyla güncellendi!" });
    }
  }

  async function handleLogout() {
    if (!supabase) {
      useLearningStore.getState().clearLocalData();
      router.push("/");
      router.refresh();
      return;
    }

    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-surface-bright flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="w-20 h-20 bg-primary-container rounded-full" />
          <div className="h-4 w-32 bg-surface-container-high rounded-full" />
        </div>
      </div>
    );
  }

  const avatarUrl = user?.user_metadata?.avatar_url;
  const userEmail = user?.email || "";
  const createdAt = user?.created_at
    ? new Date(user.created_at).toLocaleDateString("tr-TR", { year: "numeric", month: "long", day: "numeric" })
    : "";
  const initial = (displayName || userEmail || "Ö")[0].toUpperCase();
  const showFallback = !avatarUrl || avatarError;

  // Gerçek store verileri
  const level = Math.floor(stats.xp / 50) + 1;
  const todayStr = new Date().toISOString().split("T")[0];
  const studiedToday = stats.lastStudyDate === todayStr;
  const dailyGoal = mounted ? getDailyGoalProgress() : { done: 0, goal: 20, percent: 0 };
  const dueCount = mounted ? getDueCardsCount() : 0;
  const accuracy = stats.totalAnswered > 0
    ? Math.round((stats.totalCorrect / stats.totalAnswered) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-surface-bright">
      {/* Header */}
      <div className="bg-white border-b border-outline-variant/20 px-4 py-3">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-primary">
            <span className="material-symbols-outlined">arrow_back</span>
            <span className="font-bold text-sm">Ana Sayfa</span>
          </Link>
          <h1 className="text-lg font-bold text-on-surface font-headline">Profil</h1>
          <div className="w-20" />
        </div>
      </div>

      <div className="max-w-2xl mx-auto p-4 space-y-5 mt-4">

        {/* ── Profil Kartı ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-lg border border-outline-variant/20 overflow-hidden"
        >
          {/* Banner */}
          <div className="h-32 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] relative overflow-hidden">
            <div className="absolute right-6 top-4 text-white/[0.06] text-[80px] font-japanese select-none leading-none">
              学生
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white/[0.04] rounded-full" />
            <div className="absolute top-3 right-1/3 w-16 h-16 bg-white/[0.03] rounded-full" />
          </div>

          <div className="flex flex-col items-center -mt-12 relative z-10 px-6 pb-5">
            {/* Avatar */}
            <div className="w-24 h-24 rounded-full border-4 border-white shadow-lg overflow-hidden bg-primary-container flex-shrink-0">
              {showFallback ? (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary to-primary-dim">
                  <span className="text-4xl font-bold text-white">{initial}</span>
                </div>
              ) : (
                <img src={avatarUrl} alt="Avatar" className="w-full h-full object-cover" onError={() => setAvatarError(true)} />
              )}
            </div>

            <h2 className="mt-3 text-xl font-bold text-on-surface font-headline">
              {displayName || "Öğrenci"}
            </h2>
            <p className="text-sm text-on-surface-variant">{userEmail}</p>

            <div className="mt-3 flex items-center gap-1.5 text-xs text-on-surface-variant/70">
              <span className="material-symbols-outlined text-sm">calendar_today</span>
              Katılım: {createdAt}
            </div>

            {/* Stats Chips — gerçek store verisi */}
            <div className="mt-4 flex flex-wrap gap-2 justify-center">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200/60">
                <span className="text-amber-500 text-sm">⭐</span>
                <span className="text-xs font-bold text-amber-700">{stats.xp} XP</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-200/60">
                <span className="text-sm">🔥</span>
                <span className="text-xs font-bold text-orange-700">{stats.streak} Gün Seri</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200/60">
                <span className="material-symbols-outlined text-sm text-blue-500">school</span>
                <span className="text-xs font-bold text-blue-700">Seviye {level}</span>
              </div>
              {accuracy > 0 && (
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/60">
                  <span className="material-symbols-outlined text-sm text-emerald-500">target</span>
                  <span className="text-xs font-bold text-emerald-700">%{accuracy} Doğruluk</span>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* ── Günlük Hedef ── */}
        {mounted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="bg-white rounded-3xl border border-outline-variant/20 shadow-sm p-5"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-lg">🎯</span>
                <h3 className="text-sm font-bold text-on-surface uppercase tracking-wider">Günlük Hedef</h3>
              </div>
              <span className="text-xs font-bold text-on-surface-variant">
                {dailyGoal.done}/{dailyGoal.goal} aksiyon
              </span>
            </div>
            <div className="w-full h-3 bg-surface-variant/30 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${dailyGoal.percent}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
              />
            </div>
            {dueCount > 0 && (
              <Link
                href="/review"
                id="profile-review-link"
                className="mt-3 flex items-center justify-between p-3 bg-amber-50 border border-amber-200/60 rounded-2xl text-sm font-bold text-amber-700 hover:bg-amber-100 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span>⏰</span>
                  <span>{dueCount} kart tekrar bekliyor</span>
                </div>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            )}
          </motion.div>
        )}

        {/* ── Streak Widget ── */}
        {mounted && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <StreakWidget
              currentStreak={stats.streak}
              longestStreak={stats.streak}
              studiedToday={studiedToday}
            />
          </motion.div>
        )}

        {/* ── Daily Quests ── */}
        {mounted && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
            <DailyQuests
              totalAnswered={stats.totalAnswered}
              totalCorrect={stats.totalCorrect}
              lessonsCompleted={completedLessons.length}
              xpToday={stats.xp}
            />
          </motion.div>
        )}

        {/* ── İstatistikler ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-3 gap-3"
        >
          {[
            { label: "Tamamlanan Ders", value: completedLessons.length, icon: "check_circle", color: "text-emerald-600" },
            { label: "Cevaplanan", value: stats.totalAnswered, icon: "quiz", color: "text-blue-600" },
            { label: "Doğru Cevap", value: stats.totalCorrect, icon: "done_all", color: "text-primary" },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-2xl border border-outline-variant/20 shadow-sm p-4 text-center">
              <span className={`material-symbols-outlined text-xl ${s.color}`}>{s.icon}</span>
              <p className="text-2xl font-black text-on-surface font-headline mt-1">{s.value}</p>
              <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wide mt-0.5">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* ── Profil Düzenleme ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="bg-white rounded-3xl shadow-lg border border-outline-variant/20 p-6"
        >
          <h3 className="text-sm font-bold uppercase tracking-wider text-on-surface-variant mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-lg">edit</span>
            Profili Düzenle
          </h3>

          <form onSubmit={handleSaveProfile} className="space-y-4">
            <div>
              <label htmlFor="profileName" className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-2">
                Görünen İsim
              </label>
              <input
                id="profileName"
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="Adınız"
                className="w-full px-4 py-3 rounded-xl border border-outline-variant/30 bg-surface-container-low text-on-surface placeholder:text-outline-variant/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-2">Email</label>
              <input
                type="email"
                value={userEmail}
                disabled
                className="w-full px-4 py-3 rounded-xl border border-outline-variant/20 bg-surface-container text-on-surface-variant cursor-not-allowed"
              />
            </div>

            {message && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`flex items-center gap-2 p-3 rounded-xl text-sm font-medium border ${
                  message.type === "success"
                    ? "bg-secondary-container/30 text-on-secondary-container border-secondary-container/50"
                    : "bg-error/10 text-error border-error/20"
                }`}
              >
                <span className="material-symbols-outlined text-lg">
                  {message.type === "success" ? "check_circle" : "error"}
                </span>
                {message.text}
              </motion.div>
            )}

            <button
              type="submit"
              disabled={saving}
              className="w-full py-3 rounded-xl bg-primary text-on-primary font-bold text-sm uppercase tracking-wider hover:bg-primary-dim transition-colors disabled:opacity-50"
            >
              {saving ? "Kaydediliyor..." : "Kaydet"}
            </button>
          </form>
        </motion.div>

        {/* ── Çıkış Yap ── */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <button
            onClick={handleLogout}
            className="w-full py-3.5 rounded-xl bg-error/10 text-error font-bold text-sm uppercase tracking-wider hover:bg-error/20 transition-colors border border-error/20 flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-lg">logout</span>
            Çıkış Yap
          </button>
        </motion.div>

      </div>
    </div>
  );
}
