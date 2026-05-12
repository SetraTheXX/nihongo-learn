# Nihongo Learn

A Japanese-learning MVP for Turkish-speaking beginners, built with Next.js, TypeScript, Tailwind CSS, Zustand, and optional Supabase sync.

This is a personal learning project where I combine my own Japanese study process with practical product engineering. It is not trying to pretend to be a finished commercial app. The goal is to show a working MVP clearly, keep the unfinished parts honest, and leave a clean path for future phases.

## Highlights

| Area | Status |
| --- | --- |
| Hiragana / Katakana | 46 + 46 characters with example words and quiz flow |
| Spaced repetition | SM-2 based review data stored locally |
| A1 course | 31 beginner-friendly Japanese lessons |
| Gamification | XP, streaks, daily quests, and badges |
| Mini stories | Short reading practice with furigana support |
| N5 exam practice | Timed quiz flow with a result screen |
| Kana drawing | Canvas-based handwriting practice board |
| Supabase | Optional auth and cloud sync mode |

## Current Status

Nihongo Learn is currently in a pre-Phase 4 stabilization pass. The main Phase 1-3.5 surfaces are implemented and the local MVP flow is usable.

Text-to-speech was explored earlier, but the first implementation was removed because browser voice quality and consistency were not good enough. Audio/TTS is intentionally parked for Phase 4, where it can be reintroduced with better fallbacks and clearer quality expectations.

> **Note:** This repository is still in active development. Some bugs, rough edges, or unfinished flows may exist. If you find an issue, please report it through GitHub Issues so it can be tracked and improved.

## Routes

```text
/              Dashboard
/learn         Flashcards and learning entry point
/learn/course  31-lesson A1 course
/quiz          Hiragana / Katakana quiz
/review        SM-2 review session
/reading       Mini stories
/exam          JLPT N5 practice exam
/leaderboard   Ranking and badges
/drawing       Kana drawing board
/profile       Profile, XP, streaks, and quests
```

## Getting Started

```bash
git clone https://github.com/SetraTheXX/nihongo-learn.git
cd nihongo-learn
npm install
npm run dev
```

The app runs at `http://localhost:3000` by default.

## Running Modes

### Demo / Local Mode

The app can run without Supabase environment variables. Progress, XP, and review data are stored on the current device through localStorage. This is the safest mode for public demos and quick review.

### Supabase Mode

To enable auth and cloud sync, copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Then add the public client values from Supabase Dashboard -> Settings -> API:

```env
NEXT_PUBLIC_SUPABASE_URL=https://PROJECT_ID.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=anon-public-key
```

Do not add a service role key, database password, or admin secret to this project or any client-side environment variable. The security model relies on public anon keys plus RLS policies.

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | Next.js 14 App Router |
| Language | TypeScript |
| Styling | Tailwind CSS + Material Design 3 inspired tokens |
| Animation | Framer Motion |
| State | Zustand + localStorage persistence |
| Backend | Optional Supabase Auth / PostgreSQL / RLS |
| SRS | SM-2 spaced repetition algorithm |

## Roadmap

- **Phase 1 done:** Hiragana, local SM-2, dashboard.
- **Phase 2 done:** Katakana, Supabase auth/db/sync foundation.
- **Phase 3 done:** A1 course, SRS screens, gamification.
- **Phase 3.5 done:** Mini stories, N5 exam practice, leaderboard, canvas drawing.
- **Phase 4 parked:** Audio/TTS research and PWA support.
- **Later direction:** Kanji and N4 content after Phase 4 is stable.

## Repository Notes

- `.env.local` and personal planning notes are intentionally kept out of Git.
- Public documentation is focused on the README and product brief.
- TTS is currently disabled. If it comes back, it should ship with a clear fallback and quality strategy.

## License

MIT
