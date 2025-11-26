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

export const updateStreak = (): number => {
    const progress = getProgress();
    const today = new Date().toISOString().split('T')[0];
    const lastPlayed = progress.streak.lastPlayedDate;

    if (lastPlayed === today) {
        return progress.streak.currentStreak;
    }

    const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString().split('T')[0];

    if (lastPlayed === yesterday) {
        progress.streak.currentStreak += 1;
    } else {
        progress.streak.currentStreak = 1; // Reset or start new
    }

    progress.streak.lastPlayedDate = today;
    saveProgress(progress);
    return progress.streak.currentStreak;
};

export const getDueItems = (allVocabulary: VocabularyItem[], limit: number): VocabularyItem[] => {
    const progress = getProgress();
    const now = Date.now();

    // Filter items that are due for review or new (level 0)
    const dueItems = allVocabulary.filter(item => {
        const itemProgress = progress.items[item.id];
        if (!itemProgress) return true; // New item
        return itemProgress.nextReviewDate <= now;
    });

    // Shuffle due items to randomize order, then take the first 'limit' items
    // This ensures randomization while still prioritizing due items over non-due items
    const shuffledDueItems = shuffleArray(dueItems);

    return shuffledDueItems.slice(0, limit);
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
