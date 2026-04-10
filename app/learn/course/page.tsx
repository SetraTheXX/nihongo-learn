"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import TopAppBar from "@/components/TopAppBar";
import BottomNavBar from "@/components/BottomNavBar";
import { japaneseCourse, isLessonUnlocked, getTotalLessons } from "@/data/course";
import type { Section, Lesson } from "@/data/course";
import { useLearningStore } from "@/store/useLearningStore";

// Renk haritası
const colorMap: Record<string, { bg: string; border: string; text: string; ring: string; light: string }> = {
  emerald: { bg: "bg-emerald-500", border: "border-emerald-400", text: "text-emerald-700", ring: "ring-emerald-300", light: "bg-emerald-50" },
  blue:    { bg: "bg-blue-500",    border: "border-blue-400",    text: "text-blue-700",    ring: "ring-blue-300",    light: "bg-blue-50" },
  violet:  { bg: "bg-violet-500",  border: "border-violet-400",  text: "text-violet-700",  ring: "ring-violet-300",  light: "bg-violet-50" },
  amber:   { bg: "bg-amber-500",   border: "border-amber-400",   text: "text-amber-700",   ring: "ring-amber-300",   light: "bg-amber-50" },
  rose:    { bg: "bg-rose-500",    border: "border-rose-400",    text: "text-rose-700",    ring: "ring-rose-300",    light: "bg-rose-50" },
  cyan:    { bg: "bg-cyan-500",    border: "border-cyan-400",    text: "text-cyan-700",    ring: "ring-cyan-300",    light: "bg-cyan-50" },
  orange:  { bg: "bg-orange-500",  border: "border-orange-400",  text: "text-orange-700",  ring: "ring-orange-300",  light: "bg-orange-50" },
  pink:    { bg: "bg-pink-500",    border: "border-pink-400",    text: "text-pink-700",    ring: "ring-pink-300",    light: "bg-pink-50" },
};

export default function CoursePage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const completedLessons = useLearningStore((s) => s.completedLessons || []);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-surface-bright flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="w-16 h-16 bg-primary-container rounded-full" />
          <div className="h-4 w-32 bg-surface-container-high rounded-full" />
        </div>
      </div>
    );
  }

  const course = japaneseCourse;
  const totalLessons = getTotalLessons(course);
  const completed = completedLessons.length;
  const progressPercent = totalLessons > 0 ? Math.round((completed / totalLessons) * 100) : 0;

  return (
    <div className="bg-surface-bright text-on-surface min-h-screen flex flex-col pt-20 pb-28">
      <TopAppBar progressPercent={progressPercent} />

      <main className="flex-1 w-full max-w-2xl mx-auto px-4 py-6">
        {/* Kurs Başlığı */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-2xl font-bold font-headline text-on-surface">
            🎌 {course.title}
          </h1>

          <div className="mt-2 flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-lg bg-primary/10 text-primary text-xs font-bold uppercase tracking-wide">
              {course.level} {course.levelLabel}
            </span>
            <span className="text-xs text-on-surface-variant">
              {completed}/{totalLessons} ders tamamlandı
            </span>
          </div>

          {/* Genel Progress Bar */}
          <div className="mt-4 h-3 bg-surface-container-high rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>
          <p className="mt-1 text-right text-xs font-bold text-on-surface-variant">
            %{progressPercent}
          </p>
        </motion.div>

        {/* Bölümler */}
        <div className="space-y-6">
          {course.sections.map((section, sIdx) => (
            <SectionCard
              key={section.id}
              section={section}
              sectionIndex={sIdx}
              completedLessons={completedLessons}
              course={course}
              onLessonClick={(lessonId) => router.push(`/learn/lesson/${lessonId}`)}
            />
          ))}
        </div>
      </main>

      <BottomNavBar />
    </div>
  );
}

// ── Bölüm Kartı ─────────────────────────────────────────────────

function SectionCard({
  section,
  sectionIndex,
  completedLessons,
  course,
  onLessonClick,
}: {
  section: Section;
  sectionIndex: number;
  completedLessons: string[];
  course: typeof japaneseCourse;
  onLessonClick: (id: string) => void;
}) {
  const colors = colorMap[section.color] || colorMap.emerald;
  const completedInSection = section.lessons.filter(l => completedLessons.includes(l.id)).length;
  const sectionProgress = Math.round((completedInSection / section.lessons.length) * 100);
  const isSectionComplete = completedInSection === section.lessons.length;

  // Bölüm kilitli mi? İlk bölüm her zaman açık, diğerleri önceki bölümün son dersi tamamlanmışsa açık
  const isSectionLocked = sectionIndex > 0 && !completedLessons.includes(
    course.sections[sectionIndex - 1].lessons[course.sections[sectionIndex - 1].lessons.length - 1].id
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: sectionIndex * 0.1 }}
      className={`rounded-3xl border-2 overflow-hidden transition-all ${
        isSectionLocked
          ? "border-outline-variant/20 opacity-60"
          : isSectionComplete
          ? `${colors.border} border-opacity-50`
          : `${colors.border} border-opacity-30`
      }`}
    >
      {/* Bölüm Başlığı */}
      <div className={`px-5 py-4 ${isSectionLocked ? "bg-surface-container" : colors.light}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{section.emoji}</span>
            <div>
              <h2 className={`font-bold font-headline text-base ${isSectionLocked ? "text-on-surface-variant" : "text-on-surface"}`}>
                Bölüm {sectionIndex + 1}: {section.title}
                {isSectionComplete && <span className="ml-1.5">✅</span>}
              </h2>
              <p className="text-xs text-on-surface-variant mt-0.5">
                {section.description}
              </p>
            </div>
          </div>

          {isSectionLocked && (
            <span className="material-symbols-outlined text-xl text-outline-variant">lock</span>
          )}
        </div>

        {/* Bölüm Progress Bar */}
        {!isSectionLocked && (
          <div className="mt-3 flex items-center gap-3">
            <div className="flex-1 h-2 bg-white/60 rounded-full overflow-hidden">
              <motion.div
                className={`h-full ${colors.bg} rounded-full`}
                initial={{ width: 0 }}
                animate={{ width: `${sectionProgress}%` }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 + 0.3 }}
              />
            </div>
            <span className={`text-xs font-bold ${colors.text}`}>{sectionProgress}%</span>
          </div>
        )}
      </div>

      {/* Dersler Timeline */}
      {!isSectionLocked && (
        <div className="bg-white px-5 py-4">
          <div className="space-y-0">
            {section.lessons.map((lesson, lIdx) => (
              <LessonItem
                key={lesson.id}
                lesson={lesson}
                lessonIndex={lIdx}
                isLast={lIdx === section.lessons.length - 1}
                isCompleted={completedLessons.includes(lesson.id)}
                isUnlocked={isLessonUnlocked(course, lesson.id, completedLessons)}
                color={section.color}
                onClick={() => onLessonClick(lesson.id)}
              />
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}

// ── Ders Öğesi ──────────────────────────────────────────────────

function LessonItem({
  lesson,
  lessonIndex,
  isLast,
  isCompleted,
  isUnlocked,
  color,
  onClick,
}: {
  lesson: Lesson;
  lessonIndex: number;
  isLast: boolean;
  isCompleted: boolean;
  isUnlocked: boolean;
  color: string;
  onClick: () => void;
}) {
  const colors = colorMap[color] || colorMap.emerald;
  const isCheckpoint = lesson.type === "checkpoint";
  const isActive = isUnlocked && !isCompleted;

  return (
    <div className="flex items-stretch">
      {/* Timeline çizgisi + daire */}
      <div className="flex flex-col items-center mr-4 w-10">
        {/* Daire */}
        <button
          onClick={isUnlocked ? onClick : undefined}
          disabled={!isUnlocked}
          className={`
            w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all
            ${isCompleted
              ? `${colors.bg} text-white shadow-md`
              : isActive
              ? `bg-white border-2 ${colors.border} ${colors.text} shadow-md ring-4 ${colors.ring}/30 animate-pulse`
              : "bg-surface-container-high text-outline-variant border-2 border-outline-variant/30"
            }
            ${isUnlocked ? "cursor-pointer hover:scale-110" : "cursor-not-allowed"}
          `}
        >
          {isCompleted ? (
            <span className="material-symbols-outlined text-lg">check</span>
          ) : isCheckpoint ? (
            <span className="material-symbols-outlined text-lg">flag</span>
          ) : !isUnlocked ? (
            <span className="material-symbols-outlined text-lg">lock</span>
          ) : (
            <span className="material-symbols-outlined text-lg">{lesson.icon}</span>
          )}
        </button>

        {/* Dikey çizgi */}
        {!isLast && (
          <div className={`w-0.5 flex-1 min-h-[24px] ${
            isCompleted ? colors.bg : "bg-outline-variant/20"
          }`} />
        )}
      </div>

      {/* Ders bilgisi */}
      <button
        onClick={isUnlocked ? onClick : undefined}
        disabled={!isUnlocked}
        className={`
          flex-1 pb-5 text-left transition-all
          ${isUnlocked ? "cursor-pointer" : "cursor-not-allowed"}
        `}
      >
        <div className={`
          flex items-center gap-2
          ${isCompleted ? "text-on-surface" : isActive ? colors.text : "text-on-surface-variant/60"}
        `}>
          <h3 className={`font-bold text-sm ${isCheckpoint ? "uppercase tracking-wider" : ""}`}>
            {lesson.title}
          </h3>
          {isCheckpoint && (
            <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 text-[10px] font-bold uppercase">
              Sınav
            </span>
          )}
        </div>
        <p className={`text-xs mt-0.5 ${
          isCompleted || isActive ? "text-on-surface-variant" : "text-outline-variant/50"
        }`}>
          {lesson.description}
        </p>
        {isActive && (
          <span className={`inline-flex items-center gap-1 mt-1.5 text-[11px] font-bold ${colors.text}`}>
            <span className="material-symbols-outlined text-sm">play_arrow</span>
            Derse Başla · +{lesson.xpReward} XP
          </span>
        )}
        {isCompleted && (
          <span className="inline-flex items-center gap-1 mt-1.5 text-[11px] font-medium text-emerald-600">
            <span className="material-symbols-outlined text-sm">check_circle</span>
            Tamamlandı · +{lesson.xpReward} XP
          </span>
        )}
      </button>
    </div>
  );
}
