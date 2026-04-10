"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import TopAppBar from "@/components/TopAppBar";
import BottomNavBar from "@/components/BottomNavBar";

export default function LearnHubPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="bg-surface-bright text-on-surface font-body min-h-screen pb-32">
      <TopAppBar />

      <main className="pt-28 px-6 max-w-2xl mx-auto animate-fade-in">
        <section className="mb-10 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-on-surface mb-2 font-headline">
            Nasıl Çalışmak İstersin?
          </h1>
          <p className="text-on-surface-variant font-medium">
            Öğrenme modunu seçerek çalışmaya başla.
          </p>
        </section>

        <div className="flex flex-col gap-6">
          {/* ── Yol Haritası (Kurs) ── */}
          <Link
            href="/learn/course"
            className="group relative overflow-hidden bg-primary-container/20 rounded-3xl p-6 shadow-sm border border-primary/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 active:scale-[0.98] block"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
            <div className="relative z-10 flex items-center gap-5">
              <div className="w-16 h-16 bg-primary text-on-primary rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
                <span className="material-symbols-outlined text-3xl">map</span>
              </div>
              <div>
                <h2 className="text-xl font-bold font-headline text-on-surface mb-1">
                  Tam Japonca Kursu
                </h2>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Bölüm bölüm ilerleyerek, rehber eşliğinde adım adım Japonca öğren. Yeni başlayanlar için ideal.
                </p>
              </div>
            </div>
            <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center bg-white shadow-sm transition-transform group-hover:translate-x-1">
              <span className="material-symbols-outlined text-primary text-sm">arrow_forward</span>
            </div>
          </Link>

          {/* ── Serbest Flashcard Pratiği ── */}
          <Link
            href="/learn/practice"
            className="group relative overflow-hidden bg-surface-container-lowest rounded-3xl p-6 shadow-sm border border-outline-variant/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 active:scale-[0.98] block"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-container/30 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
            <div className="relative z-10 flex items-center gap-5">
              <div className="w-16 h-16 bg-secondary-container text-on-secondary-container rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
                <span className="material-symbols-outlined text-3xl">style</span>
              </div>
              <div>
                <h2 className="text-xl font-bold font-headline text-on-surface mb-1">
                  Günlük Flashcard Pratiği
                </h2>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Aralıklı tekrar algoritması ile kelime ve alfabe ezberini güçlendir. Sadece serbest tekrar için.
                </p>
              </div>
            </div>
            <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full border border-secondary/30 flex items-center justify-center bg-white shadow-sm transition-transform group-hover:translate-x-1">
              <span className="material-symbols-outlined text-secondary text-sm">arrow_forward</span>
            </div>
          </Link>
        </div>
      </main>

      <BottomNavBar />
    </div>
  );
}
