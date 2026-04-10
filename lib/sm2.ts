// SuperMemo-2 Algorithm Implementation

export interface SM2Item {
  repetitions: number;
  interval: number;
  easeFactor: number;
  nextReviewDate: string; // ISO Date string
}

export const createInitialItem = (): SM2Item => ({
  repetitions: 0,
  interval: 0,
  easeFactor: 2.5,
  nextReviewDate: new Date().toISOString(),
});

/**
 * Calculates the next state for an SM2 item based on user quality response.
 * Quality scale:
 * 0 - Complete blackout.
 * 1 - Incorrect response; the correct one remembered.
 * 2 - Incorrect response; where the correct one seemed easy to recall.
 * 3 - Correct response recalled with serious difficulty.
 * 4 - Correct response after a hesitation.
 * 5 - Perfect response.
 */
export const updateSM2 = (item: SM2Item, quality: number): SM2Item => {
  let { repetitions, interval, easeFactor } = item;

  if (quality >= 3) {
    if (repetitions === 0) {
      interval = 1;
    } else if (repetitions === 1) {
      interval = 6;
    } else {
      interval = Math.round(interval * easeFactor);
    }
    repetitions += 1;
  } else {
    repetitions = 0;
    interval = 1;
  }

  easeFactor = easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  if (easeFactor < 1.3) {
    easeFactor = 1.3;
  }

  const nextReviewDate = new Date();
  nextReviewDate.setDate(nextReviewDate.getDate() + interval);

  return {
    repetitions,
    interval,
    easeFactor,
    nextReviewDate: nextReviewDate.toISOString(),
  };
};
