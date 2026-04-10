"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { motion } from "framer-motion";
import type { User } from "@supabase/supabase-js";

export default function ProfilePage() {
  const router = useRouter();
  const supabase = createClient();

  const [user, setUser] = useState<User | null>(null);
  const [displayName, setDisplayName] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [avatarError, setAvatarError] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  useEffect(() => {
    async function loadProfile() {
      const { data: { user: currentUser } } = await supabase.auth.getUser();

      if (!currentUser) {
        router.push("/auth/login");
        return;
      }

      setUser(currentUser);

      // Profil verisini al
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
    if (!user) return;

    setSaving(true);
    setMessage(null);

    const { error } = await (supabase
      .from("profiles") as any)
      .update({
        display_name: displayName,
        updated_at: new Date().toISOString(),
      })
      .eq("id", user.id);

    setSaving(false);

    if (error) {
      setMessage({ type: "error", text: "Profil kaydedilirken bir hata oluştu." });
    } else {
      setMessage({ type: "success", text: "Profil başarıyla güncellendi!" });
    }
  }

  async function handleLogout() {
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
    ? new Date(user.created_at).toLocaleDateString("tr-TR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  const initial = (displayName || userEmail || "Ö")[0].toUpperCase();
  const showFallback = !avatarUrl || avatarError;

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

      <div className="max-w-2xl mx-auto p-4 space-y-6 mt-4">
        {/* Profil Kartı */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-lg border border-outline-variant/20 overflow-hidden"
        >
          {/* Banner — koyu, temiz gradient */}
          <div className="h-32 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] relative overflow-hidden">
            {/* Dekoratif Japon karakterleri */}
            <div className="absolute right-6 top-4 text-white/[0.06] text-[80px] font-japanese select-none leading-none">
              学生
            </div>
            {/* Dekoratif daireler */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white/[0.04] rounded-full" />
            <div className="absolute top-3 right-1/3 w-16 h-16 bg-white/[0.03] rounded-full" />
          </div>

          {/* Avatar — banner'ın altında ortalanmış */}
          <div className="flex flex-col items-center -mt-12 relative z-10 px-6 pb-5">
            <div className="w-24 h-24 rounded-full border-4 border-white shadow-lg overflow-hidden bg-primary-container flex-shrink-0">
              {showFallback ? (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary to-primary-dim">
                  <span className="text-4xl font-bold text-white">
                    {initial}
                  </span>
                </div>
              ) : (
                <img
                  src={avatarUrl}
                  alt="Avatar"
                  className="w-full h-full object-cover"
                  onError={() => setAvatarError(true)}
                />
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

            {/* İstatistik çipleri */}
            <div className="mt-4 flex gap-3">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200/60">
                <span className="text-amber-500 text-sm">⭐</span>
                <span className="text-xs font-bold text-amber-700">571 XP</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/60">
                <span className="text-emerald-500 text-sm">🔥</span>
                <span className="text-xs font-bold text-emerald-700">1 Gün Seri</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200/60">
                <span className="material-symbols-outlined text-sm text-blue-500">school</span>
                <span className="text-xs font-bold text-blue-700">Seviye 12</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Profil Düzenleme */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
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
              <label className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-2">
                Email
              </label>
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

        {/* Çıkış Yap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
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
