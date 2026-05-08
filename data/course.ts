import { Course, Section, Lesson } from './types/course';
export * from './types/course';

import { chapter1 } from './course/chapter1';
import { chapter2 } from './course/chapter2';
import { chapter3 } from './course/chapter3';
import { chapter4 } from './course/chapter4';
import { chapter5 } from './course/chapter5';
import { chapter6 } from './course/chapter6';
import { chapter7 } from './course/chapter7';
import { chapter8 } from './course/chapter8';
import { chapter9 } from './course/chapter9';
import { chapter10 } from './course/chapter10';
import { chapter11 } from './course/chapter11';
import { chapter12 } from './course/chapter12';
import { chapter13 } from './course/chapter13';
import { chapter14 } from './course/chapter14';
import { chapter15 } from './course/chapter15';
import { chapter16 } from './course/chapter16';
import { chapter17 } from './course/chapter17';
import { chapter18 } from './course/chapter18';
import { chapter19 } from './course/chapter19';
import { chapter20 } from './course/chapter20';
import { chapter21 } from './course/chapter21';
import { chapter22 } from './course/chapter22';
import { chapter23 } from './course/chapter23';
import { chapter24 } from './course/chapter24';
import { chapter25 } from './course/chapter25';
import { chapter26 } from './course/chapter26';
import { chapter27 } from './course/chapter27';
import { chapter28 } from './course/chapter28';
import { chapter29 } from './course/chapter29';
import { chapter30 } from './course/chapter30';
import { chapter31 } from './course/chapter31';

export const japaneseCourse: Course = {
  id: "full-japanese-a1",
  title: "Tam Japonca Kursu",
  level: "A1",
  levelLabel: "Başlangıç Seviyesi",
  sections: [
    chapter1,
    chapter2,
    chapter3,
    chapter4,
    chapter5,
    chapter6,
    chapter7,
    chapter8,
    chapter9,
    chapter10,
    chapter11,
    chapter12,
    chapter13,
    chapter14,
    chapter15,
    chapter16,
    chapter17,
    chapter18,
    chapter19,
    chapter20,
    chapter21,
    chapter22,
    chapter23,
    chapter24,
    chapter25,
    chapter26,
    chapter27,
    chapter28,
    chapter29,
    chapter30,
    chapter31,
  ],
};

// Pratik modu için tüm gramer kartlarını düz bir liste yapar
export const allGrammarData = japaneseCourse.sections
  .flatMap(s => s.lessons)
  .flatMap(l => l.grammarItems || []);

/** Toplam XP hesaplama */
export function getTotalXP(course: Course): number {
  return course.sections.reduce((total, section) => {
    return total + section.lessons.reduce((sum, lesson) => sum + lesson.xpReward, 0);
  }, 0);
}
export const getTotalPossibleXP = getTotalXP;

/** Toplam ders sayısı */
export function getTotalLessons(course: Course): number {
  return course.sections.reduce((total, section) => total + section.lessons.length, 0);
}

/** Ders ID'sine göre ders ve bölüm bul */
export function findLesson(course: Course, lessonId: string): { section: Section; lesson: Lesson } | null {
  for (const section of course.sections) {
    const lesson = section.lessons.find(l => l.id === lessonId);
    if (lesson) return { section, lesson };
  }
  return null;
}

/** Bir dersin kilidinin açık olup olmadığını kontrol et */
export function isLessonUnlocked(course: Course, lessonId: string, completedLessons: string[]): boolean {
  return true; // Test aşaması için tüm dersler açık
}
