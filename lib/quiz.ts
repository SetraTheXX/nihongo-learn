import { FlashcardData } from "./types";

export interface QuizOption {
  id: string;
  romaji: string;
  isCorrect: boolean;
}

export function generateQuizOptions(
  correctCard: FlashcardData, 
  allCards: FlashcardData[]
): QuizOption[] {
  // Extract all romajis except the correct one
  const distractors = allCards
    .map(c => c.romaji)
    .filter(r => r !== correctCard.romaji);
  
  // Shuffle distractors
  const shuffledDistractors = distractors.sort(() => 0.5 - Math.random());
  
  // Pick 3 unique ones
  const selected: string[] = [];
  for (const item of shuffledDistractors) {
    if (!selected.includes(item)) {
       selected.push(item);
    }
    if (selected.length === 3) break;
  }
  
  // Fallback in case there aren't enough cards
  while (selected.length < 3) {
      selected.push('x' + selected.length);
  }
  
  // Assemble 4 options
  const options: QuizOption[] = [
    { id: correctCard.id, romaji: correctCard.romaji, isCorrect: true },
    { id: 'fake-1', romaji: selected[0], isCorrect: false },
    { id: 'fake-2', romaji: selected[1], isCorrect: false },
    { id: 'fake-3', romaji: selected[2], isCorrect: false }
  ];
  
  // Randomize the placement
  return options.sort(() => 0.5 - Math.random());
}
