"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useLearningStore } from "@/store/useLearningStore";
import { hiraganaData } from "@/data/hiragana";
import TopAppBar from "@/components/TopAppBar";
import BottomNavBar from "@/components/BottomNavBar";

export default function DashboardPage() {
  const { stats, cardsData } = useLearningStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-surface-bright flex items-center justify-center p-8">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="w-16 h-16 bg-primary-container rounded-full" />
          <div className="h-4 w-24 bg-surface-container-high rounded-full" />
        </div>
      </div>
    );
  }

  const totalCardsCount = hiraganaData.length;
  const cardsInteracted = Object.keys(cardsData).length;
  const newCardsCount = totalCardsCount - cardsInteracted;
  const progressPercent = totalCardsCount > 0 ? (cardsInteracted / totalCardsCount) * 100 : 0;
  const level = Math.floor(stats.xp / 50) + 1;
  const totalAnswered = stats.totalAnswered || 0;
  const totalCorrect = stats.totalCorrect || 0;
  const accuracy = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;

  const welcomeMsg =
    cardsInteracted === 0
      ? "Hadi başlayalım! İlk kartını öğrenmeye hazır mısın? 🎌"
      : `Japonca yolculuğunun %${Math.round(progressPercent)}'ini tamamladın. Harika gidiyorsun!`;

  return (
    <div className="bg-surface-bright text-on-surface font-body min-h-screen pb-32 selection:bg-primary-container selection:text-on-primary-container">
      <TopAppBar />

      <main className="pt-28 px-6 max-w-7xl mx-auto animate-fade-in">
        {/* Hoş Geldin */}
        <section className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface mb-2 font-headline">
            Tekrar hoş geldin!
          </h1>
          <p className="text-on-surface-variant text-lg font-medium">{welcomeMsg}</p>
        </section>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* ── Kelime Kartları ── */}
          <Link
            href="/learn"
            className="group relative overflow-hidden bg-surface-container-lowest rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-outline-variant/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 active:scale-[0.98] block"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/30 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
            <div className="relative z-10">
              <div className="w-16 h-16 bg-primary-container rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                <span className="material-symbols-outlined text-primary text-4xl">style</span>
              </div>
              <h2 className="text-3xl font-extrabold text-on-surface mb-4 font-headline tracking-tight">
                Kelime Kartları
              </h2>
              <p className="text-on-surface-variant text-lg max-w-xs mb-8 font-medium">
                Aralıklı tekrar yöntemiyle Hiragana öğren ve tekrar et.
              </p>
              <div className="flex items-center gap-3">
                <div className="px-5 py-2.5 bg-primary text-on-primary rounded-[1rem] font-bold text-sm shadow-sm">
                  {newCardsCount > 0 ? `${newCardsCount} Yeni Kart` : "Hepsini Pratik Yap"}
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-primary-container flex items-center justify-center bg-white shadow-sm transition-transform group-hover:translate-x-1">
                  <span className="material-symbols-outlined text-primary text-sm">arrow_forward</span>
                </div>
              </div>
            </div>
            {/* Dekoratif resim — daha belirgin */}
            <div className="absolute -bottom-2 -right-2 w-44 h-44 opacity-40 group-hover:opacity-60 transition-opacity duration-300">
              <img
                className="w-full h-full object-contain"
                alt="Kelime kartları görseli"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSZQm-0F_ytEU9Sa9Wt-qOX4cpVABLq3Mg9rGCMrWekrPESkLS_udQRlWYBwPDmlbx-snkW7LoDzpB3BbpS0dF1JKgD9jqkQ12T7kSX58FxaTLCqDrAbpNlnyhHkrSZNSwn9frnUFcQHoH1p4beOZOv6KxralAMrTUmbJcQYdGoVv3vpuIIGV45uoGM5OBImYRp3wTRVgfL5Ts--2Txn8BKdfFj0r3CsMLHbkM0Z9D1osRN63FOGDZSvl5q5x1wOQiTmf_adQWk6w"
              />
            </div>
          </Link>

          {/* ── İnteraktif Quiz ── */}
          <Link
            href="/quiz"
            className="block group relative overflow-hidden bg-secondary-container/20 rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-secondary-container transition-all duration-300 hover:shadow-[0_8px_30px_rgba(44,103,60,0.12)] hover:-translate-y-2 active:scale-[0.98]"
          >
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-secondary-fixed-dim/20 rounded-tr-full -ml-12 -mb-12 transition-transform group-hover:scale-110" />
            <div className="relative z-10">
              <div className="w-16 h-16 bg-[#d4e4bc] rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                <span className="material-symbols-outlined text-secondary text-4xl">auto_stories</span>
              </div>
              <h2 className="text-3xl font-extrabold text-on-surface mb-4 font-headline tracking-tight">
                İnteraktif Quiz
              </h2>
              <p className="text-on-surface-variant text-lg max-w-xs mb-8 font-medium">
                Çoktan seçmeli sorularla hafızanı test et.
              </p>
              <div className="flex items-center gap-3">
                <div className="px-5 py-2.5 bg-secondary text-on-secondary rounded-[1rem] font-bold text-sm shadow-sm">
                  Günlük Meydan Okuma
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-secondary-fixed-dim flex items-center justify-center bg-white shadow-sm transition-transform group-hover:translate-x-1">
                  <span className="material-symbols-outlined text-secondary text-sm">play_arrow</span>
                </div>
              </div>
            </div>
            {/* Dekoratif resim — daha belirgin */}
            <div className="absolute top-6 right-6 w-36 h-36 opacity-50 group-hover:opacity-70 group-hover:rotate-6 transition-all duration-300">
              <img
                className="w-full h-full object-contain drop-shadow-md"
                alt="Quiz görseli"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzHQKn-hImvGZrOWdg--OdZODs1HfDZ9hQtNDFwE5vWeoSwBQgSMox90twRZaFtq0K39CFE8Gs6KYR80LpkedL-K078nyxpl6IvP8GwhJZ0mhrHsL6WI6kAIjt8gmuAMtq0vdYKU0McxYdO-QJ-cGsdSX__a3p1mwkIZM_e-8AOe_O3gS3CNh1kXa_ASlNvAqJF_5MhcpgTJK0bzLExNuMfUo0HRFT_-GBJmK1dd86sRUnUxqwA1HLEe67GGtK9DkMw8lj0jwgYpo"
              />
            </div>
          </Link>
        </div>

        {/* Haftalık Ustalık */}
        <section className="mt-12 bg-surface-container-lowest rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-outline-variant/30 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-tertiary-container/30 rounded-tl-full -mr-16 -mb-16 pointer-events-none" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
            <div className="flex-1 w-full flex flex-col pt-3">
              <h3 className="text-2xl font-extrabold mb-4 text-on-surface font-headline tracking-tight">
                Haftalık Ustalık
              </h3>
              <div className="w-full bg-surface-variant/30 h-4 rounded-full overflow-hidden flex shadow-inner">
                <div
                  className="bg-gradient-to-r from-primary to-primary-container transition-all duration-1000 ease-out rounded-full"
                  style={{ width: `${Math.min(100, progressPercent)}%` }}
                />
              </div>
              <div className="flex justify-between mt-3 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
                <span className={progressPercent > 0 ? "text-primary" : ""}>Başlangıç</span>
                <span className={progressPercent >= 50 ? "text-primary" : ""}>Orta Seviye</span>
                <span className={progressPercent >= 100 ? "text-primary" : ""}>Uzman</span>
              </div>
            </div>
            <div className="flex gap-4 md:gap-8 mt-4 md:mt-0">
              <div className="text-center group bg-surface-bright px-6 py-4 rounded-2xl shadow-sm border border-outline-variant/20 hover:-translate-y-1 transition-transform">
                <div className="text-4xl font-black text-primary font-headline tracking-tighter">{level}</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mt-1 group-hover:text-primary transition-colors">
                  Seviye
                </div>
              </div>
              <div className="text-center group bg-surface-bright px-6 py-4 rounded-2xl shadow-sm border border-outline-variant/20 hover:-translate-y-1 transition-transform">
                <div className="text-4xl font-black text-secondary font-headline tracking-tighter">
                  {totalAnswered > 0 ? `${accuracy}%` : "—"}
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mt-1 group-hover:text-secondary transition-colors">
                  Doğruluk
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <BottomNavBar />
    </div>
  );
}
