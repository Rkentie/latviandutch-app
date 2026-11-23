import { UserProgress, VocabularyItem } from '../types';
import { shuffleArray } from '../utils/stringUtils';

const STORAGE_KEY = 'latvianDutch_userProgress';

const INITIAL_PROGRESS: UserProgress = {
    items: {},
    streak: {
        currentStreak: 0,
        lastPlayedDate: '',
    },
};

// Intervals in milliseconds for each mastery level
const REVIEW_INTERVALS = [
    0, // Level 0: Immediate/Next Session
    24 * 60 * 60 * 1000, // Level 1: 1 day
    3 * 24 * 60 * 60 * 1000, // Level 2: 3 days
    7 * 24 * 60 * 60 * 1000, // Level 3: 7 days
    14 * 24 * 60 * 60 * 1000, // Level 4: 14 days
    30 * 24 * 60 * 60 * 1000, // Level 5: 30 days
];

export const getProgress = (): UserProgress => {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : INITIAL_PROGRESS;
    } catch {
        return INITIAL_PROGRESS;
    }
};

export const saveProgress = (progress: UserProgress) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
};

export const updateItemProgress = (itemId: string, isCorrect: boolean): UserProgress => {
    const progress = getProgress();
    const now = Date.now();

    const itemProgress = progress.items[itemId] || {
        masteryLevel: 0,
        nextReviewDate: now,
        lastReviewed: 0,
    };

    let newLevel = itemProgress.masteryLevel;

    if (isCorrect) {
        // Increase level, cap at 5
        newLevel = Math.min(newLevel + 1, 5);
    } else {
        // Reset to 0 on mistake (strict mode) or decrease
        newLevel = Math.max(0, newLevel - 2); // Drop 2 levels for penalty
    }

    const nextReview = now + REVIEW_INTERVALS[newLevel];

    progress.items[itemId] = {
        masteryLevel: newLevel,
        nextReviewDate: nextReview,
        lastReviewed: now,
    };

    saveProgress(progress);
    return progress;
};

/** YYYY-MM-DD in the user's own timezone (toISOString would use UTC). */
export const toLocalDateString = (date: Date): string => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
};

export const updateStreak = (now: Date = new Date()): number => {
    const progress = getProgress();
    const today = toLocalDateString(now);
    const lastPlayed = progress.streak.lastPlayedDate;

    if (lastPlayed === today) {
        return progress.streak.currentStreak;
    }

    const yesterdayDate = new Date(now);
    yesterdayDate.setDate(yesterdayDate.getDate() - 1);
    const yesterday = toLocalDateString(yesterdayDate);

    if (lastPlayed === yesterday) {
        progress.streak.currentStreak += 1;
    } else {
        progress.streak.currentStreak = 1; // Reset or start new
    }

    progress.streak.lastPlayedDate = today;
    saveProgress(progress);
    return progress.streak.currentStreak;
};

/**
 * Pick up to `limit` items to practice:
 * 1. Reviews that are due (words you've seen before), most overdue first.
 * 2. Then new words you've never seen, in random order.
 * Without this split, ~500 unseen words would crowd out the words you're
 * actually forgetting.
 */
export const getDueItems = (allVocabulary: VocabularyItem[], limit: number, now: number = Date.now()): VocabularyItem[] => {
    const progress = getProgress();

    const dueReviews = allVocabulary
        .filter(item => {
            const p = progress.items[item.id];
            return p !== undefined && p.nextReviewDate <= now;
        })
        .sort((a, b) => progress.items[a.id].nextReviewDate - progress.items[b.id].nextReviewDate);

    const newItems = shuffleArray(allVocabulary.filter(item => !progress.items[item.id]));

    return [...dueReviews, ...newItems].slice(0, limit);
};

export const getMasteryStats = (allVocabulary: VocabularyItem[]) => {
    const progress = getProgress();
    let mastered = 0;
    let learning = 0;
    let newItems = 0;

    allVocabulary.forEach(item => {
        const p = progress.items[item.id];
        if (!p || p.masteryLevel === 0) {
            newItems++;
        } else if (p.masteryLevel >= 4) {
            mastered++;
        } else {
            learning++;
        }
    });

    return { mastered, learning, newItems };
};
