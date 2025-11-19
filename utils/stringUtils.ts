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
    .replace(/[.,!?;:"']/g, '')
    .replace(/\s+/g, ' ')
    .trim();
};

export type AnswerResult = {
  isCorrect: boolean;
  isCloseCall: boolean; // typo within tolerance
};

/**
 * Check if the user's answer is correct, allowing for small typos
 * @param userAnswer - The user's input
 * @param correctAnswer - The correct translation
 * @returns Object with isCorrect and isCloseCall flags
 */
export const checkAnswerWithFuzzyMatch = (
  userAnswer: string,
  correctAnswer: string
): AnswerResult => {
  const sanitizedUser = sanitizeAnswer(userAnswer);
  const sanitizedCorrect = sanitizeAnswer(correctAnswer);
  
  // Exact match
  if (sanitizedUser === sanitizedCorrect) {
    return { isCorrect: true, isCloseCall: false };
  }
  
  // Calculate allowed typos based on word length
  const distance = levenshteinDistance(sanitizedUser, sanitizedCorrect);
  const wordLength = sanitizedCorrect.length;
  
  // Tolerance: 1 mistake for words up to 5 chars, 2 mistakes for longer words
  const tolerance = wordLength <= 5 ? 1 : 2;
  
  if (distance <= tolerance) {
    return { isCorrect: true, isCloseCall: true };
  }
  
  return { isCorrect: false, isCloseCall: false };
};

