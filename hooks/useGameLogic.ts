import { useState, useEffect, useCallback } from 'react';
import { VocabularyItem, FeedbackStatus, LanguageDirection, RoundHistoryItem, AppLanguage } from '../types';
import { MARATHON_SIZE } from '../constants';
import { getBaseVocabulary } from '../services/vocabularyService';
import { updateItemProgress, updateStreak, getDueItems, getProgress } from '../services/progressService';
import { checkAnswerWithFuzzyMatch } from '../utils/stringUtils';

const STORAGE_KEYS = {
  LANGUAGE_DIRECTION: 'latvianDutch_languageDirection',
  ROUND_SIZE: 'latvianDutch_roundSize',
  APP_LANGUAGE: 'latvianDutch_appLanguage',
  CURRENT_SESSION: 'latvianDutch_currentSession',
  SELECTED_CATEGORIES: 'latvianDutch_selectedCategories',
};

interface CurrentSession {
  score: number;
  currentRoundIndex: number;
  roundHistory: RoundHistoryItem[];
  currentRoundVocabulary: VocabularyItem[];
  currentWord: VocabularyItem | null;
  attemptCount: number;
  timestamp: number; // To check if session is stale
  selectedCategories: string[];
}

export const useGameLogic = () => {
  // Load initial state from localStorage
  const loadFromStorage = <T,>(key: string, defaultValue: T): T => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch {
      return defaultValue;
    }
  };

  const [fullVocabularyList, setFullVocabularyList] = useState<VocabularyItem[]>([]);
  const [currentRoundVocabulary, setCurrentRoundVocabulary] = useState<VocabularyItem[]>([]);
  const [currentRoundIndex, setCurrentRoundIndex] = useState<number>(0);
  const [currentWord, setCurrentWord] = useState<VocabularyItem | null>(null);
  const [userInput, setUserInput] = useState<string>('');
  const [feedbackMessage, setFeedbackMessage] = useState<string>('');
  const [feedbackStatus, setFeedbackStatus] = useState<FeedbackStatus>(FeedbackStatus.NEUTRAL);
  const [isAnswerChecked, setIsAnswerChecked] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [roundSize, setRoundSize] = useState<number>(() => loadFromStorage(STORAGE_KEYS.ROUND_SIZE, 10));
  const [attemptCount, setAttemptCount] = useState<number>(0);
  const [roundHistory, setRoundHistory] = useState<RoundHistoryItem[]>([]);
  const [isRoundOverviewVisible, setIsRoundOverviewVisible] = useState<boolean>(false);
  const [languageDirection, setLanguageDirection] = useState<LanguageDirection | null>(() =>
    loadFromStorage(STORAGE_KEYS.LANGUAGE_DIRECTION, null)
  );
  const [isAppStarted, setIsAppStarted] = useState<boolean>(false);
  const [isCategorySelectionMode, setIsCategorySelectionMode] = useState<boolean>(false);
  const [isLoadingVocabulary, setIsLoadingVocabulary] = useState<boolean>(false);
  const [showMainContent, setShowMainContent] = useState<boolean>(false);
  const [appLanguage, setAppLanguage] = useState<AppLanguage>(() =>
    loadFromStorage(STORAGE_KEYS.APP_LANGUAGE, 'en')
  );
  const [selectedCategories, setSelectedCategories] = useState<string[]>(() =>
    loadFromStorage(STORAGE_KEYS.SELECTED_CATEGORIES, [])
  );
  const [streak, setStreak] = useState<number>(0);

  // Initialize streak
  useEffect(() => {
    const progress = getProgress();
    setStreak(progress.streak.currentStreak);
  }, []);

  // Save preferences to localStorage
  useEffect(() => {
    if (languageDirection !== null) {
      localStorage.setItem(STORAGE_KEYS.LANGUAGE_DIRECTION, JSON.stringify(languageDirection));
    }
  }, [languageDirection]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.ROUND_SIZE, JSON.stringify(roundSize));
  }, [roundSize]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.APP_LANGUAGE, JSON.stringify(appLanguage));
  }, [appLanguage]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.SELECTED_CATEGORIES, JSON.stringify(selectedCategories));
  }, [selectedCategories]);

  // Save current session to localStorage
  useEffect(() => {
    if (isAppStarted && currentRoundVocabulary.length > 0 && !isRoundOverviewVisible) {
      const session: CurrentSession = {
        score,
        currentRoundIndex,
        roundHistory,
        currentRoundVocabulary,
        currentWord,
        attemptCount,
        timestamp: Date.now(),
        selectedCategories,
      };
      localStorage.setItem(STORAGE_KEYS.CURRENT_SESSION, JSON.stringify(session));
    }
  }, [score, currentRoundIndex, roundHistory, currentRoundVocabulary, currentWord, attemptCount, isAppStarted, isRoundOverviewVisible, selectedCategories]);

  // Try to restore session on mount
  useEffect(() => {
    const savedSession = loadFromStorage<CurrentSession | null>(STORAGE_KEYS.CURRENT_SESSION, null);
    const TWO_HOURS = 2 * 60 * 60 * 1000; // 2 hours in milliseconds

    if (savedSession && Date.now() - savedSession.timestamp < TWO_HOURS) {
      // Session is still valid
      setScore(savedSession.score);
      setCurrentRoundIndex(savedSession.currentRoundIndex);
      setRoundHistory(savedSession.roundHistory);
      setCurrentRoundVocabulary(savedSession.currentRoundVocabulary);
      setCurrentWord(savedSession.currentWord);
      setAttemptCount(savedSession.attemptCount);
      setSelectedCategories(savedSession.selectedCategories || []);
      setIsAppStarted(true);
      setShowMainContent(true);
    }
  }, []);

  const resetPerWordState = useCallback(() => {
    setUserInput('');
    setFeedbackMessage('');
    setFeedbackStatus(FeedbackStatus.NEUTRAL);
    setIsAnswerChecked(false);
    setAttemptCount(0);
  }, []);

  const loadFullVocabulary = useCallback(async () => {
    if (!languageDirection || !isAppStarted) return;
    setIsLoadingVocabulary(true);
    setShowMainContent(false);
    const baseVocab = getBaseVocabulary();
    setFullVocabularyList(baseVocab);
    setTimeout(() => {
      setIsLoadingVocabulary(false);
    }, 500);
  }, [languageDirection, isAppStarted]);

  useEffect(() => {
    if (isAppStarted && languageDirection) {
      loadFullVocabulary();
    }
  }, [isAppStarted, languageDirection, loadFullVocabulary]);

  const startNewRound = useCallback(() => {
    if (fullVocabularyList.length === 0) return;

    // 1. Filter by Category
    let candidates = fullVocabularyList;
    if (selectedCategories.length > 0 && !selectedCategories.includes('All')) {
      candidates = fullVocabularyList.filter(item => item.category && selectedCategories.includes(item.category));
    }

    if (candidates.length === 0) {
      // Fallback if category empty (shouldn't happen)
      candidates = fullVocabularyList;
    }

    // 2. Select Items (SRS Priority)
    let roundVocab: VocabularyItem[] = [];

    if (roundSize >= MARATHON_SIZE) {
      // Marathon mode: take all candidates
      roundVocab = candidates;
    } else {
      // Get due items from candidates
      const dueItems = getDueItems(candidates, roundSize);

      // If we need more items to fill the round
      if (dueItems.length < roundSize) {
        const remainingCount = roundSize - dueItems.length;
        const usedIds = new Set(dueItems.map(i => i.id));
        const remainingCandidates = candidates.filter(i => !usedIds.has(i.id));

        // Shuffle remaining
        const shuffledRemaining = [...remainingCandidates].sort(() => Math.random() - 0.5);
        const fillers = shuffledRemaining.slice(0, remainingCount);

        roundVocab = [...dueItems, ...fillers];
      } else {
        roundVocab = dueItems;
      }
    }

    // Shuffle the final round vocabulary so due items aren't always first
    roundVocab = roundVocab.sort(() => Math.random() - 0.5);

    setCurrentRoundVocabulary(roundVocab);
    setCurrentRoundIndex(0);
    setCurrentWord(roundVocab[0] || null);
    setScore(0);
    setRoundHistory([]);
    setIsRoundOverviewVisible(false);
    resetPerWordState();
    setShowMainContent(true);
  }, [fullVocabularyList, resetPerWordState, roundSize, selectedCategories]);

  useEffect(() => {
    if (fullVocabularyList.length > 0 && isAppStarted && !isRoundOverviewVisible) {
      if (currentRoundVocabulary.length === 0 || currentWord === null) {
        startNewRound();
      } else {
        setShowMainContent(true);
      }
    }
  }, [fullVocabularyList, isAppStarted, startNewRound, isRoundOverviewVisible, currentRoundVocabulary.length, currentWord]);

  const handleSelectDirection = (direction: LanguageDirection, selectedRoundSize: number) => {
    setLanguageDirection(direction);
    setRoundSize(selectedRoundSize);
    setIsCategorySelectionMode(true);
    setIsAppStarted(false);
  };

  const startGame = (categories: string[]) => {
    setSelectedCategories(categories);
    setIsCategorySelectionMode(false);
    setIsAppStarted(true);

    // Update streak on start
    const newStreak = updateStreak();
    setStreak(newStreak);

    // Reset state
    setFullVocabularyList([]);
    setCurrentRoundVocabulary([]);
    setCurrentRoundIndex(0);
    setCurrentWord(null);
    setScore(0);
    setRoundHistory([]);
    setIsRoundOverviewVisible(false);
    resetPerWordState();
    setShowMainContent(false);
    // Clear saved session
    localStorage.removeItem(STORAGE_KEYS.CURRENT_SESSION);
  };

  const handleGoHome = () => {
    setIsAppStarted(false);
    setIsCategorySelectionMode(false);
    setLanguageDirection(null);
    setFullVocabularyList([]);
    setCurrentRoundVocabulary([]);
    setCurrentRoundIndex(0);
    setCurrentWord(null);
    setScore(0);
    setRoundHistory([]);
    setIsRoundOverviewVisible(false);
    resetPerWordState();
    setIsLoadingVocabulary(false);
    setShowMainContent(false);
    // Clear saved session
    localStorage.removeItem(STORAGE_KEYS.CURRENT_SESSION);

    // Refresh streak
    const progress = getProgress();
    setStreak(progress.streak.currentStreak);
  };

  const handleInputChange = (value: string) => {
    setUserInput(value);
  };

  const checkAnswer = useCallback((t: any) => {
    if (!currentWord || languageDirection === null) return;

    let correctTranslationRaw = '';
    if (languageDirection === LanguageDirection.LV_TO_NL) {
      correctTranslationRaw = currentWord.dutch;
    } else if (languageDirection === LanguageDirection.NL_TO_LV) {
      correctTranslationRaw = currentWord.latvian;
    } else if (languageDirection === LanguageDirection.LV_TO_EN) {
      correctTranslationRaw = currentWord.english;
    }

    const answerResult = checkAnswerWithFuzzyMatch(userInput, correctTranslationRaw);
    const { isCorrect, isCloseCall } = answerResult;

    let historyItemUpdate: Partial<RoundHistoryItem>;

    if (attemptCount === 0) {
      // Update SRS Progress
      updateItemProgress(currentWord.id, isCorrect);

      if (isCorrect) {
        setFeedbackMessage(isCloseCall ? t.feedback_close_call : t.feedback_perfect);
        setFeedbackStatus(FeedbackStatus.CORRECT);
        setScore((prevScore) => prevScore + 1);
        setIsAnswerChecked(true);
        historyItemUpdate = { userAttempts: [userInput], isCorrectOnFirstTry: true, isCorrectOnSecondTry: false };
      } else {
        setFeedbackMessage(t.feedback_try_again);
        setFeedbackStatus(FeedbackStatus.INCORRECT);
        setAttemptCount(1);
        historyItemUpdate = { userAttempts: [userInput], isCorrectOnFirstTry: false, isCorrectOnSecondTry: false };
      }
      setRoundHistory(prev => [...prev, { item: currentWord, correctTranslation: correctTranslationRaw, ...historyItemUpdate } as RoundHistoryItem]);
    } else {
      setIsAnswerChecked(true);
      let existingHistoryItem = roundHistory[roundHistory.length - 1];
      if (isCorrect) {
        setFeedbackMessage(isCloseCall ? t.feedback_close_call : t.feedback_correct);
        setFeedbackStatus(FeedbackStatus.CORRECT);
        historyItemUpdate = { userAttempts: [...existingHistoryItem.userAttempts, userInput], isCorrectOnSecondTry: true };
        // We don't update SRS on second attempt to avoid gaming it, or we could with a smaller increment
        // For now, only first attempt counts for SRS
      } else {
        setFeedbackMessage(t.feedback_incorrect);
        setFeedbackStatus(FeedbackStatus.INCORRECT);
        historyItemUpdate = { userAttempts: [...existingHistoryItem.userAttempts, userInput], isCorrectOnSecondTry: false };
      }
      setRoundHistory(prev => {
        const newHistory = [...prev];
        newHistory[newHistory.length - 1] = { ...existingHistoryItem, ...historyItemUpdate };
        return newHistory;
      });
    }
  }, [currentWord, languageDirection, userInput, attemptCount, roundHistory]);

  const nextWord = () => {
    setShowMainContent(false);
    setTimeout(() => {
      if (currentRoundIndex < currentRoundVocabulary.length - 1) {
        const newIndex = currentRoundIndex + 1;
        setCurrentRoundIndex(newIndex);
        setCurrentWord(currentRoundVocabulary[newIndex]);
        resetPerWordState();
      } else {
        setIsRoundOverviewVisible(true);
      }
      setShowMainContent(true);
    }, 300);
  };

  const restartQuiz = () => {
    setShowMainContent(false);
    setTimeout(() => startNewRound(), 100);
  };

  return {
    // State
    fullVocabularyList,
    currentRoundVocabulary,
    currentRoundIndex,
    currentWord,
    userInput,
    feedbackMessage,
    feedbackStatus,
    isAnswerChecked,
    score,
    roundSize,
    attemptCount,
    roundHistory,
    isRoundOverviewVisible,
    languageDirection,
    isAppStarted,
    isCategorySelectionMode,
    isLoadingVocabulary,
    showMainContent,
    appLanguage,
    selectedCategories,
    streak,
    // Actions
    setAppLanguage,
    handleSelectDirection,
    startGame,
    handleGoHome,
    handleInputChange,
    checkAnswer,
    nextWord,
    restartQuiz,
    setSelectedCategories,
  };
};

