"use client";

import React, { useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { motion } from "framer-motion";

export default function RegisterPage() {

  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const supabase = createClient();

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    // Şifre kontrolü
    if (password !== confirmPassword) {
      setError("Şifreler eşleşmiyor. Lütfen kontrol edin.");
      return;
    }

    if (password.length < 6) {
      setError("Şifre en az 6 karakter olmalıdır.");
      return;
    }

    setLoading(true);

    const { error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: displayName || "Öğrenci",
        },
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    setLoading(false);

    if (signUpError) {
      if (signUpError.message.includes("already registered")) {
        setError("Bu email adresi zaten kayıtlı. Giriş yapmayı deneyin.");
      } else if (signUpError.message.includes("valid email")) {
        setError("Lütfen geçerli bir email adresi girin.");
      } else {
        setError(signUpError.message);
      }
      return;
    }

    setSuccess(true);
  }

  async function handleGoogleRegister() {
    setError(null);
    const { error: oauthError } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (oauthError) {
      setError("Google ile kayıt sırasında bir hata oluştu.");
    }
  }

  // Başarılı kayıt ekranı
  if (success) {
    return (
      <div className="min-h-screen bg-surface-bright flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md bg-white rounded-3xl shadow-lg border border-outline-variant/20 p-8 text-center"
        >
          <div className="text-6xl mb-4">📧</div>
          <h2 className="text-2xl font-bold text-on-surface font-headline mb-3">
            Email Doğrulama Gerekli
          </h2>
          <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
            <span className="font-bold text-primary">{email}</span> adresine bir doğrulama
            linki gönderdik. Lütfen emailinizi kontrol edin ve linke tıklayarak
            hesabınızı aktifleştirin.
          </p>
          <div className="bg-secondary-container/30 rounded-xl p-4 text-xs text-on-secondary-container mb-6">
            <span className="material-symbols-outlined text-base align-middle mr-1">info</span>
            Spam klasörünü de kontrol etmeyi unutmayın!
          </div>
          <Link
            href="/auth/login"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-on-primary font-bold text-sm uppercase tracking-wider hover:bg-primary-dim transition-colors"
          >
            <span className="material-symbols-outlined text-lg">login</span>
            Giriş Sayfasına Git
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface-bright flex items-center justify-center p-4">
      {/* Dekoratif arka plan */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-secondary-container/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-primary-container/20 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 text-[200px] opacity-[0.03] select-none font-japanese">新</div>
        <div className="absolute bottom-1/3 left-1/4 text-[160px] opacity-[0.03] select-none font-japanese">生</div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative z-10"
      >
        {/* Başlık */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <h1 className="text-3xl font-bold text-primary font-headline tracking-tight">
              🎌 Nihongo Learn
            </h1>
          </Link>
          <p className="mt-2 text-on-surface-variant text-sm">
            Ücretsiz hesap oluştur ve Japonca öğrenmeye başla
          </p>
        </div>

        {/* Form Kartı */}
        <div className="bg-white rounded-3xl shadow-lg border border-outline-variant/20 p-8">
          <form onSubmit={handleRegister} className="space-y-4">
            {/* İsim */}
            <div>
              <label htmlFor="displayName" className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-2">
                Görünen İsim
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-xl">
                  person
                </span>
                <input
                  id="displayName"
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  placeholder="Adınız"
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-outline-variant/30 bg-surface-container-low text-on-surface placeholder:text-outline-variant/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-2">
                Email Adresi
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-xl">
                  mail
                </span>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ornek@email.com"
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-outline-variant/30 bg-surface-container-low text-on-surface placeholder:text-outline-variant/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                />
              </div>
            </div>

            {/* Şifre */}
            <div>
              <label htmlFor="password" className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-2">
                Şifre
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-xl">
                  lock
                </span>
                <input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="En az 6 karakter"
                  minLength={6}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-outline-variant/30 bg-surface-container-low text-on-surface placeholder:text-outline-variant/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                />
              </div>
            </div>

            {/* Şifre Tekrar */}
            <div>
              <label htmlFor="confirmPassword" className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-2">
                Şifre Tekrar
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-xl">
                  lock_reset
                </span>
                <input
                  id="confirmPassword"
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Şifrenizi tekrar girin"
                  minLength={6}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-outline-variant/30 bg-surface-container-low text-on-surface placeholder:text-outline-variant/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                />
              </div>
            </div>

            {/* Hata Mesajı */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 p-3 rounded-xl bg-error/10 text-error text-sm font-medium border border-error/20"
              >
                <span className="material-symbols-outlined text-lg">error</span>
                {error}
              </motion.div>
            )}

            {/* Kayıt Ol Butonu */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl bg-primary text-on-primary font-bold text-sm uppercase tracking-wider hover:bg-primary-dim transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Kayıt oluşturuluyor...
                </span>
              ) : (
                "Kayıt Ol"
              )}
            </button>
          </form>

          {/* Ayraç */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-outline-variant/20" />
            </div>
            <div className="relative flex justify-center text-xs uppercase tracking-wider">
              <span className="bg-white px-3 text-outline-variant">veya</span>
            </div>
          </div>

          {/* Google ile Kayıt */}
          <button
            onClick={handleGoogleRegister}
            className="w-full py-3.5 rounded-xl bg-surface-container-low border border-outline-variant/30 text-on-surface font-semibold text-sm flex items-center justify-center gap-3 hover:bg-surface-container hover:border-outline-variant/50 transition-all"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            Google ile Kayıt Ol
          </button>
        </div>

        {/* Alt Giriş Linki */}
        <p className="mt-6 text-center text-sm text-on-surface-variant">
          Zaten hesabınız var mı?{" "}
          <Link
            href="/auth/login"
            className="text-primary font-bold hover:underline"
          >
            Giriş Yap
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
