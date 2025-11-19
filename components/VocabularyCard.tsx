
import React from 'react';
import { VocabularyItem, LanguageDirection, Translation } from '../types';

interface VocabularyCardProps {
  item: VocabularyItem;
  userInput: string;
  onInputChange: (value: string) => void;
  isInputDisabled: boolean;
  onSubmit: () => void;
  languageDirection: LanguageDirection;
  feedbackStatus: string; // 'NEUTRAL', 'CORRECT', 'INCORRECT'
  t: Translation;
}

const VocabularyCard: React.FC<VocabularyCardProps> = ({
  item,
  userInput,
  onInputChange,
  isInputDisabled,
  onSubmit,
  languageDirection,
  feedbackStatus,
  t,
}) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && !isInputDisabled) {
      onSubmit();
    }
  };

  const sourceLanguageName = languageDirection === LanguageDirection.LV_TO_NL ? t.lang_latvian : t.lang_dutch;
  const targetLanguageName = languageDirection === LanguageDirection.LV_TO_NL ? t.lang_dutch : t.lang_latvian;
  const wordToDisplay = languageDirection === LanguageDirection.LV_TO_NL ? item.latvian : item.dutch;
  const targetFlag = languageDirection === LanguageDirection.LV_TO_NL ? "🇳🇱" : "🇱🇻";

  // Dynamic Styles
  let containerBorder = "border-slate-100";
  let inputClass = "border-slate-200 focus:border-indigo-500 focus:ring-indigo-500 focus:ring-4";
  let cardAnimation = "animate-slideUp";

  if (feedbackStatus === 'CORRECT') {
      containerBorder = "border-green-200";
      inputClass = "border-green-500 bg-green-50 text-green-900 placeholder-green-300 focus:ring-green-200";
  } else if (feedbackStatus === 'INCORRECT') {
      containerBorder = "border-red-200";
      inputClass = "border-red-400 bg-red-50 text-red-900 placeholder-red-300 focus:ring-red-200 animate-shake";
  }

  return (
    <div 
      className={`bg-white p-6 sm:p-12 rounded-[2rem] shadow-xl w-full max-w-2xl mx-auto relative overflow-hidden transition-colors duration-300 border-4 ${containerBorder} ${cardAnimation}`}
      key={item.id}
    >
      {/* Background Blob */}
      <div className={`absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-20 transition-colors duration-500 ${feedbackStatus === 'CORRECT' ? 'bg-green-400' : feedbackStatus === 'INCORRECT' ? 'bg-red-400' : 'bg-indigo-400'}`}></div>
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-8">
           <div className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
              <span>{t.translate_from} {sourceLanguageName}</span>
           </div>
           {item.isSentence && (
             <span className="inline-block bg-indigo-100 text-indigo-700 text-[10px] px-2 py-1 rounded-md font-bold tracking-wide">{t.sentence}</span>
           )}
        </div>
        
        <div className="mb-12 flex-grow flex items-center justify-center min-h-[100px]">
           <h2 className="text-3xl sm:text-5xl font-black text-slate-800 text-center break-words nunito-font leading-tight drop-shadow-sm">
            {wordToDisplay}
          </h2>
        </div>

        <div className="space-y-3">
          <label className="block text-sm font-bold text-slate-500 ml-1 uppercase tracking-wide mb-1">
            {t.type_in} {targetLanguageName} {targetFlag}
          </label>
          <input
            type="text"
            value={userInput}
            onChange={(e) => onInputChange(e.target.value)}
            placeholder={t.placeholder}
            className={`w-full px-6 py-5 border-2 rounded-2xl outline-none transition-all duration-200 text-2xl font-medium shadow-inner ${inputClass}`}
            disabled={isInputDisabled}
            onKeyDown={handleKeyDown}
            autoFocus
            autoComplete="off"
            spellCheck={false}
          />
        </div>
      </div>
    </div>
  );
};

export default VocabularyCard;
