# Contributing Guide

Thanks for taking an interest in Nihongo Learn.

This is a learning-focused MVP, so contributions are welcome, especially when they make the app clearer, more reliable, easier to run, or better documented.

## Before You Start

1. Fork the repository.
2. Clone it locally.
3. Install dependencies with `npm install`.
4. Run the app with `npm run dev`.
5. Supabase is optional. If you want to test auth and cloud sync, copy `.env.example` to `.env.local` and add your own public Supabase values.

## Branch Naming

```text
master        Stable public branch
feature/xxx   New features
fix/xxx       Bug fixes
content/xxx   Course content updates under data/
docs/xxx      Documentation updates
```

## Development Flow

```bash
# Create a branch
git checkout -b feature/short-description

# Make your changes

# Check the project before opening a PR
npm run lint
npm run build

# Commit
git add .
git commit -m "feat: short description"

# Push
git push origin feature/short-description
```

## Commit Message Style

Please follow [Conventional Commits](https://www.conventionalcommits.org/):

```text
feat:     New feature
fix:      Bug fix
content:  Course content addition or update
refactor: Code refactor
style:    UI or styling change
docs:     Documentation update
chore:    Build, tooling, or configuration change
```

Examples:

```text
feat: add badge progress section to leaderboard
fix: correct SM-2 review calculation for repeated cards
content: update chapter 12 grammar examples
docs: clarify Supabase demo mode
```

## Course Content Contributions

If you want to update content under `data/course/`:

1. Edit the relevant `chapterX.ts` file.
2. Keep the existing `GrammarItem`, `VocabItem`, and lesson section shapes.
3. Keep Turkish meanings in `meaning_tr`, because the app teaches Japanese through Turkish.
4. Run `npm run build` to catch TypeScript or import issues.

## Pull Request Guidelines

- Keep PRs focused and easy to review.
- Explain what changed and why.
- Include screenshots for UI changes when possible.
- Run `npm run lint` and `npm run build` before opening a PR.
- Open an issue first for large roadmap changes such as TTS, PWA, Kanji, or N4 content.

## Reporting Bugs

This project is still in active development, so bugs or rough edges may exist. If you find one, please open an issue with:

- What happened.
- What you expected.
- Steps to reproduce.
- Browser and device information, if relevant.

Clear reports help a lot. Thanks again.
