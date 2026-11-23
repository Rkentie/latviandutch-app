import { describe, it, expect } from 'vitest';
import { checkAnswerWithFuzzyMatch, typoTolerance } from '../utils/stringUtils';
import { getAcceptedAnswers, getBaseVocabulary, getPrimaryAnswer } from '../services/vocabularyService';
import { LanguageDirection } from '../types';

const byId = (id: string) => getBaseVocabulary().find(i => i.id === id)!;

describe('checkAnswerWithFuzzyMatch', () => {
  it('accepts an exact answer, ignoring case and punctuation', () => {
    expect(checkAnswerWithFuzzyMatch('ik begrijp het niet', 'Ik begrijp het niet.')).toMatchObject({
      isCorrect: true,
      isCloseCall: false,
    });
  });

  it('rejects a different short word that is one letter away', () => {
    expect(checkAnswerWithFuzzyMatch('zij', 'Hij').isCorrect).toBe(false);
    expect(checkAnswerWithFuzzyMatch('wij', 'Jij').isCorrect).toBe(false);
    expect(checkAnswerWithFuzzyMatch('ja', 'Je').isCorrect).toBe(false);
  });

  it('treats a missing accent as an accent issue, not a wrong answer', () => {
    expect(checkAnswerWithFuzzyMatch('ludzu', 'Lūdzu')).toMatchObject({
      isCorrect: true,
      isCloseCall: true,
      isAccentIssue: true,
      matchedAnswer: 'Lūdzu',
    });
    // Short words too: accents don't use up the (zero) typo budget
    expect(checkAnswerWithFuzzyMatch('ja', 'Jā').isAccentIssue).toBe(true);
  });

  it('forgives one typo in medium words and two in long ones', () => {
    expect(checkAnswerWithFuzzyMatch('goedemorgan', 'Goedemorgen').isCloseCall).toBe(true);
    expect(checkAnswerWithFuzzyMatch('alsjeblift', 'Alsjeblieft').isCorrect).toBe(true);
    expect(checkAnswerWithFuzzyMatch('station', 'Stadion').isCorrect).toBe(true); // 1 typo, 7 letters
    expect(checkAnswerWithFuzzyMatch('statoin', 'Stadion').isCorrect).toBe(false); // 3 edits
  });

  it('rejects empty input', () => {
    expect(checkAnswerWithFuzzyMatch('   ', 'Ja').isCorrect).toBe(false);
  });

  it('prefers an exact match over a typo match among several answers', () => {
    const result = checkAnswerWithFuzzyMatch('bedankt', ['Dank je', 'Bedankt']);
    expect(result).toMatchObject({ isCorrect: true, isCloseCall: false, matchedAnswer: 'Bedankt' });
  });

  it('has no typo tolerance for words of 4 letters or fewer', () => {
    expect(typoTolerance(3)).toBe(0);
    expect(typoTolerance(4)).toBe(0);
    expect(typoTolerance(5)).toBe(1);
    expect(typoTolerance(9)).toBe(2);
  });
});

describe('getAcceptedAnswers', () => {
  it('includes listed alternatives', () => {
    const answers = getAcceptedAnswers(byId('2'), LanguageDirection.LV_TO_NL);
    expect(answers).toContain('Dank je');
    expect(answers).toContain('Bedankt');
  });

  it('swaps alsjeblieft and alstublieft for Dutch answers', () => {
    const answers = getAcceptedAnswers(byId('34'), LanguageDirection.LV_TO_NL);
    expect(answers).toContain('Spreek langzamer alstublieft.');
    expect(answers).toContain('Spreek langzamer alsjeblieft.');
  });

  it('splits slash variants', () => {
    const answers = getAcceptedAnswers(byId('441'), LanguageDirection.LV_TO_NL);
    expect(answers).toEqual(expect.arrayContaining(['Wie', 'Wat?']));
  });

  it('accepts both Labi and Labs for "Goed" in Dutch → Latvian', () => {
    const answers = getAcceptedAnswers(byId('17'), LanguageDirection.NL_TO_LV);
    expect(answers).toEqual(expect.arrayContaining(['Labi', 'Labs']));
  });

  it('uses the English translation for Latvian → English', () => {
    expect(getPrimaryAnswer(byId('1'), LanguageDirection.LV_TO_EN)).toBe('Hello');
  });
});

describe('vocabulary data', () => {
  it('has unique ids', () => {
    const ids = getBaseVocabulary().map(i => i.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it.each([
    ['LV_TO_NL', LanguageDirection.LV_TO_NL, 'latvian'],
    ['NL_TO_LV', LanguageDirection.NL_TO_LV, 'dutch'],
    ['LV_TO_EN', LanguageDirection.LV_TO_EN, 'latvian'],
  ] as const)('never shows the same prompt with conflicting answers (%s)', (_name, direction, promptKey) => {
    // If two items share a prompt, each must accept the other's answer,
    // otherwise the learner can't know which one we want.
    const vocab = getBaseVocabulary();
    const byPrompt = new Map<string, typeof vocab>();
    for (const item of vocab) {
      const key = item[promptKey].toLowerCase();
      byPrompt.set(key, [...(byPrompt.get(key) ?? []), item]);
    }
    const conflicts: string[] = [];
    for (const [prompt, items] of byPrompt) {
      for (const a of items) {
        for (const b of items) {
          if (a === b) continue;
          const accepted = getAcceptedAnswers(a, direction);
          if (!checkAnswerWithFuzzyMatch(getPrimaryAnswer(b, direction), accepted).isCorrect) {
            conflicts.push(`"${prompt}": ${a.id} does not accept "${getPrimaryAnswer(b, direction)}" (${b.id})`);
          }
        }
      }
    }
    expect(conflicts).toEqual([]);
  });

  it('has no exact duplicate word pairs', () => {
    const pairs = getBaseVocabulary().map(i => `${i.latvian}|${i.dutch}|${i.category === 'Technology' ? 'tech' : ''}`);
    expect(new Set(pairs).size).toBe(pairs.length);
  });
});
