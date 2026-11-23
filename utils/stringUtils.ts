/**
 * Calculate the Levenshtein distance between two strings
 * (minimum number of single-character edits needed to change one word into the other)
 */
export const levenshteinDistance = (str1: string, str2: string): number => {
  const len1 = str1.length;
  const len2 = str2.length;
  
  // Create a 2D array for dynamic programming
  const matrix: number[][] = Array(len1 + 1)
    .fill(null)
    .map(() => Array(len2 + 1).fill(0));
  
  // Initialize first column and row
  for (let i = 0; i <= len1; i++) {
    matrix[i][0] = i;
  }
  for (let j = 0; j <= len2; j++) {
    matrix[0][j] = j;
  }
  
  // Fill the matrix
  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,      // deletion
        matrix[i][j - 1] + 1,      // insertion
        matrix[i - 1][j - 1] + cost // substitution
      );
    }
  }
  
  return matrix[len1][len2];
};

/**
 * Sanitize answer by removing punctuation, extra spaces, and converting to lowercase
 */
export const sanitizeAnswer = (answer: string): string => {
  if (!answer) return '';
  return answer
    .toLowerCase()
    .normalize('NFC')
    .replace(/[.,!?;:"'’‘“”¿¡]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
};

/**
 * Remove diacritics (ā → a, š → s, ë → e) so we can tell accent mistakes apart from real typos.
 */
export const stripDiacritics = (text: string): string =>
  text.normalize('NFD').replace(/[̀-ͯ]/g, '').normalize('NFC');

/**
 * How many typos we forgive for an answer of this length.
 * Short words get no tolerance: one letter often turns them into a different
 * word (hij/zij, jij/wij, es/tu).
 */
export const typoTolerance = (length: number): number => {
  if (length <= 4) return 0;
  if (length <= 8) return 1;
  return 2;
};

export type AnswerResult = {
  isCorrect: boolean;
  isCloseCall: boolean; // accepted, but with a typo or missing accents
  isAccentIssue: boolean; // only the diacritics were wrong (e.g. ludzu vs lūdzu)
  matchedAnswer?: string; // the accepted answer that matched best
};

const matchSingle = (sanitizedUser: string, correctAnswer: string): AnswerResult => {
  const sanitizedCorrect = sanitizeAnswer(correctAnswer);
  const incorrect: AnswerResult = { isCorrect: false, isCloseCall: false, isAccentIssue: false };

  if (!sanitizedUser || !sanitizedCorrect) return incorrect;

  if (sanitizedUser === sanitizedCorrect) {
    return { isCorrect: true, isCloseCall: false, isAccentIssue: false, matchedAnswer: correctAnswer };
  }

  const plainUser = stripDiacritics(sanitizedUser);
  const plainCorrect = stripDiacritics(sanitizedCorrect);

  if (plainUser === plainCorrect) {
    return { isCorrect: true, isCloseCall: true, isAccentIssue: true, matchedAnswer: correctAnswer };
  }

  // Typos are measured without accents, so a missing accent never costs typo budget.
  const distance = levenshteinDistance(plainUser, plainCorrect);
  if (distance <= typoTolerance(plainCorrect.length)) {
    return { isCorrect: true, isCloseCall: true, isAccentIssue: false, matchedAnswer: correctAnswer };
  }

  return incorrect;
};

const rank = (r: AnswerResult): number => {
  if (!r.isCorrect) return 0;
  if (!r.isCloseCall) return 3;
  return r.isAccentIssue ? 2 : 1;
};

/**
 * Check if the user's answer matches one of the accepted answers.
 * Exact matches win over accent-only mistakes, which win over small typos.
 */
export const checkAnswerWithFuzzyMatch = (
  userAnswer: string,
  correctAnswers: string | string[]
): AnswerResult => {
  const answers = Array.isArray(correctAnswers) ? correctAnswers : [correctAnswers];
  const sanitizedUser = sanitizeAnswer(userAnswer);

  let best: AnswerResult = { isCorrect: false, isCloseCall: false, isAccentIssue: false };
  for (const answer of answers) {
    const result = matchSingle(sanitizedUser, answer);
    if (rank(result) > rank(best)) best = result;
    if (rank(best) === 3) break;
  }
  return best;
};

/**
 * Fisher-Yates shuffle algorithm for truly random array shuffling
 * @param array - The array to shuffle
 * @returns A new shuffled array (does not mutate the original)
 */
export const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

