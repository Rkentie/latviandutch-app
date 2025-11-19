
export interface VocabularyItem {
  id: string;
  latvian: string;
  dutch: string;
  isSentence?: boolean;
}

export enum FeedbackStatus {
  NEUTRAL = 'NEUTRAL',
  CORRECT = 'CORRECT',
  INCORRECT = 'INCORRECT',
}

export enum LanguageDirection {
  LV_TO_NL = 'LV_TO_NL', // Latvian to Dutch
  NL_TO_LV = 'NL_TO_LV', // Dutch to Latvian
}

export interface RoundHistoryItem {
  item: VocabularyItem;
  userAttempts: string[]; // Store up to two attempts
  isCorrectOnFirstTry: boolean;
  isCorrectOnSecondTry: boolean;
  correctTranslation: string;
}

export interface LeaderboardEntry {
  name: string;
  score: number;
  accuracy: number; // Percentage
  date: number; // Timestamp
}

export type AppLanguage = 'en' | 'nl' | 'lv';

export interface Translation {
  title_suffix: string;
  how_it_works: string;
  step_1: string;
  step_2: string;
  step_3: string;
  marathon_tip: string;
  lesson_length: string;
  words: string;
  round_labels: string[];
  i_speak_lv: string;
  learn_nl: string;
  i_speak_nl: string;
  learn_lv: string;
  footer: string;
  quit: string;
  score: string;
  translate_from: string;
  sentence: string;
  type_in: string;
  placeholder: string;
  check_answer: string;
  try_again: string;
  continue: string;
  excellent: string;
  incorrect: string;
  correct_answer: string;
  feedback_perfect: string;
  feedback_try_again: string;
  feedback_correct: string;
  feedback_incorrect: string;
  feedback_close_call: string;
  round_summary: string;
  marathon_results: string;
  my_results: string;
  leaderboard: string;
  round_complete: string;
  marathon_complete: string;
  amazing_work: string;
  good_job: string;
  keep_practicing: string;
  hall_of_fame: string;
  enter_name: string;
  your_name: string;
  save: string;
  score_saved: string;
  prompt: string;
  your_answer: string;
  result: string;
  correct: string;
  status_perfect: string;
  status_correct_2nd: string;
  status_missed: string;
  accuracy: string;
  points: string;
  acc: string;
  no_records: string;
  start_new_round: string;
  lang_latvian: string;
  lang_dutch: string;
  // Tutorial keys
  tut_welcome_title: string;
  tut_welcome_desc: string;
  tut_lang_title: string;
  tut_lang_desc: string;
  tut_slider_title: string;
  tut_slider_desc: string;
  tut_start_title: string;
  tut_start_desc: string;
  tut_next: string;
  tut_skip: string;
  tut_finish: string;
}
