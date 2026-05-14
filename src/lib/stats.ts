
export interface BirdStats {
  correct: number;
  incorrect: number;
}

export type AllStats = Record<string, BirdStats>;

const STATS_KEY = 'vogelmeister_bird_stats';

export const getStats = (): AllStats => {
  const stored = localStorage.getItem(STATS_KEY);
  if (!stored) return {};
  try {
    return JSON.parse(stored);
  } catch (e) {
    console.error('Failed to parse bird stats', e);
    return {};
  }
};

export const updateBirdStat = (birdId: string, isCorrect: boolean) => {
  const stats = getStats();
  const current = stats[birdId] || { correct: 0, incorrect: 0 };
  
  if (isCorrect) {
    current.correct += 1;
  } else {
    current.incorrect += 1;
  }
  
  stats[birdId] = current;
  localStorage.setItem(STATS_KEY, JSON.stringify(stats));
};

export const resetStats = () => {
  localStorage.removeItem(STATS_KEY);
};

export const getBirdStatus = (birdId: string): 'known' | 'mistaken' | 'new' => {
  const stats = getStats();
  const bird = stats[birdId];
  if (!bird) return 'new';
  
  // If correct answers significantly outweigh incorrect ones
  if (bird.correct > bird.incorrect && bird.correct >= 2) return 'known';
  // If many mistakes
  if (bird.incorrect >= 1) return 'mistaken';
  
  return 'new';
};
