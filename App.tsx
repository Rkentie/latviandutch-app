import React from 'react';
import { FeedbackStatus, LanguageDirection } from './types';
import { translations } from './services/translations';
import { useGameLogic } from './hooks/useGameLogic';
import VocabularyCard from './components/VocabularyCard';
import FeedbackDisplay from './components/FeedbackDisplay';
import Controls from './components/Controls';
import Header from './components/Header';
import LoadingSpinner from './components/LoadingSpinner';
import StartScreen from './components/StartScreen';
import RoundOverview from './components/RoundOverview';

const App: React.FC = () => {
  const {
    currentRoundVocabulary,
    currentRoundIndex,
    currentWord,
    userInput,
    feedbackMessage,
    feedbackStatus,
    isAnswerChecked,
    score,
    attemptCount,
    roundHistory,
    isRoundOverviewVisible,
    languageDirection,
    isAppStarted,
    isLoadingVocabulary,
    showMainContent,
    appLanguage,
    setAppLanguage,
    handleSelectDirection,
    handleGoHome,
    handleInputChange,
    checkAnswer,
    nextWord,
    restartQuiz,
  } = useGameLogic();

  const t = translations[appLanguage];

  if (!isAppStarted) {
    return (
      <StartScreen 
        onSelectDirection={handleSelectDirection} 
        appLanguage={appLanguage} 
        setAppLanguage={setAppLanguage} 
      />
    );
  }
  
  if (isLoadingVocabulary) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-4">
        <LoadingSpinner size="lg" color="text-indigo-500" />
        <p className="mt-6 text-indigo-900 font-semibold animate-pulse">Preparing your lesson...</p>
      </div>
    );
  }

  const isMarathon = currentRoundVocabulary.length >= 180; 

  if (isRoundOverviewVisible) {
    return (
      <RoundOverview 
        history={roundHistory}
        score={score}
        roundSize={currentRoundVocabulary.length}
        onStartNewRound={restartQuiz}
        languageDirection={languageDirection!} 
        onGoHome={handleGoHome}
        isMarathon={isMarathon}
        t={t}
      />
    );
  }
  
  const correctTranslationForFeedback = currentWord && languageDirection !== null ? 
    (languageDirection === LanguageDirection.LV_TO_NL ? currentWord.dutch : currentWord.latvian) 
    : undefined;

  return (
    <div className="min-h-screen flex flex-col items-center bg-slate-50 pb-24 sm:pb-0 relative">
      {/* Subtle animated background pattern */}
      <div className="fixed inset-0 z-0 opacity-40 pointer-events-none bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
       
      <Header 
        score={score} 
        currentWordIndex={currentRoundIndex} 
        totalWords={currentRoundVocabulary.length} 
        onGoHome={handleGoHome}
        t={t}
      />
      
      <main className={`container mx-auto p-4 flex flex-col items-center flex-grow w-full transition-all duration-300 ease-in-out z-10 ${showMainContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        {currentWord && languageDirection !== null && (
          <div className="w-full max-w-2xl flex flex-col items-center" key={currentWord.id}>
            <VocabularyCard
              item={currentWord}
              userInput={userInput}
              onInputChange={handleInputChange}
              isInputDisabled={isAnswerChecked}
              onSubmit={() => checkAnswer(t)}
              languageDirection={languageDirection}
              feedbackStatus={feedbackStatus}
              t={t}
            />
            
            <FeedbackDisplay
              status={feedbackStatus}
              message={feedbackMessage}
              correctAnswer={feedbackStatus === FeedbackStatus.INCORRECT ? correctTranslationForFeedback : undefined}
              key={`${currentWord.id}-${feedbackStatus}-${attemptCount}`}
              t={t}
            />

            <Controls
              onCheckAnswer={() => checkAnswer(t)}
              onNextWord={nextWord}
              isAnswerChecked={isAnswerChecked}
              isCurrentItemSentence={!!currentWord?.isSentence}
              isSecondAttempt={attemptCount > 0 && !isAnswerChecked}
              isCorrect={feedbackStatus === FeedbackStatus.CORRECT}
              t={t}
            />
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
