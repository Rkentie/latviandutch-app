// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from 'vitest';
import { getDueItems, updateItemProgress, updateStreak, getProgress, saveProgress, toLocalDateString } from '../services/progressService';
import { VocabularyItem } from '../types';

const item = (id: string): VocabularyItem => ({ id, latvian: `lv${id}`, dutch: `nl${id}`, english: `en${id}` });
const DAY = 24 * 60 * 60 * 1000;

beforeEach(() => localStorage.clear());

describe('getDueItems', () => {
  it('puts due reviews before new words, most overdue first', () => {
    const vocab = Array.from({ length: 50 }, (_, i) => item(String(i)));
    const now = Date.now();
    const progress = getProgress();
    progress.items['10'] = { masteryLevel: 2, nextReviewDate: now - 1 * DAY, lastReviewed: now - 4 * DAY };
    progress.items['20'] = { masteryLevel: 3, nextReviewDate: now - 5 * DAY, lastReviewed: now - 12 * DAY };
    progress.items['30'] = { masteryLevel: 4, nextReviewDate: now + 5 * DAY, lastReviewed: now }; // not due
    saveProgress(progress);

    const picked = getDueItems(vocab, 5, now).map(i => i.id);
    expect(picked.slice(0, 2)).toEqual(['20', '10']);
    expect(picked).not.toContain('30');
    expect(picked).toHaveLength(5);
  });

  it('moves a word up a level when correct and down two when wrong', () => {
    updateItemProgress('a', true);
    updateItemProgress('a', true);
    updateItemProgress('a', true);
    expect(getProgress().items['a'].masteryLevel).toBe(3);
    updateItemProgress('a', false);
    expect(getProgress().items['a'].masteryLevel).toBe(1);
  });
});

describe('updateStreak', () => {
  it('uses the local calendar date', () => {
    expect(toLocalDateString(new Date(2026, 0, 5, 23, 30))).toBe('2026-01-05');
  });

  it('continues the streak on the next day and resets after a gap', () => {
    expect(updateStreak(new Date(2026, 0, 5, 23, 30))).toBe(1);
    expect(updateStreak(new Date(2026, 0, 5, 23, 50))).toBe(1); // same day
    expect(updateStreak(new Date(2026, 0, 6, 0, 10))).toBe(2); // just after midnight
    expect(updateStreak(new Date(2026, 0, 8, 12, 0))).toBe(1); // skipped a day
  });
});
