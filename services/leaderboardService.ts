
import { LeaderboardEntry } from '../types';

const LEADERBOARD_KEY = 'latviandutch_leaderboard_v1';
const MAX_ENTRIES = 10;

export const getLeaderboard = (): LeaderboardEntry[] => {
  try {
    const stored = localStorage.getItem(LEADERBOARD_KEY);
    if (!stored) return [];
    return JSON.parse(stored);
  } catch (e) {
    console.error("Failed to load leaderboard", e);
    return [];
  }
};

export const saveScore = (name: string, score: number, accuracy: number) => {
  const currentBoard = getLeaderboard();
  
  const newEntry: LeaderboardEntry = {
    name: name.trim() || 'Anonymous',
    score,
    accuracy,
    date: Date.now(),
  };

  const updatedBoard = [...currentBoard, newEntry];

  // Sort by Score (desc), then Accuracy (desc), then Date (newest first)
  updatedBoard.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    if (b.accuracy !== a.accuracy) return b.accuracy - a.accuracy;
    return b.date - a.date;
  });

  // Keep only top N
  const slicedBoard = updatedBoard.slice(0, MAX_ENTRIES);

  try {
    localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(slicedBoard));
  } catch (e) {
    console.error("Failed to save score", e);
  }

  return slicedBoard;
};
