
import React from 'react';
import { Translation } from '../types';
import { Check, ArrowRight } from 'lucide-react';

interface ControlsProps {
  onCheckAnswer: () => void;
  onNextWord: () => void;
  isAnswerChecked: boolean;
  isCurrentItemSentence: boolean;
  isSecondAttempt: boolean;
  isCorrect: boolean;
  t: Translation;
}

const Controls: React.FC<ControlsProps> = ({
  onCheckAnswer,
  onNextWord,
  isAnswerChecked,
  isSecondAttempt,
  isCorrect,
  t,
}) => {
  
  // Button styling logic
  let buttonBase = "w-full sm:w-auto px-12 py-4 rounded-2xl font-bold text-lg uppercase tracking-wider transition-all duration-200 transform active:scale-95 shadow-lg flex items-center justify-center gap-2";
  let buttonColor = "bg-slate-800 text-white hover:bg-slate-700 shadow-slate-300/50";
  let buttonText = isSecondAttempt ? t.try_again : t.check_answer;
  let ButtonIcon = <Check className="w-5 h-5" strokeWidth={2.5} />;

  if (isAnswerChecked) {
      buttonText = t.continue;
      ButtonIcon = <ArrowRight className="w-5 h-5" strokeWidth={2.5} />;

      if (isCorrect) {
          buttonColor = "bg-green-500 text-white hover:bg-green-600 shadow-green-300/50";
      } else {
          buttonColor = "bg-indigo-500 text-white hover:bg-indigo-600 shadow-indigo-300/50"; // "Moving on" color
      }
  }

  // Sticky footer on mobile, standard block on desktop
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-md border-t border-slate-100 p-4 sm:static sm:bg-transparent sm:border-0 sm:p-0 sm:mt-8 flex justify-center z-30 pb-8 sm:pb-0">
      <div className="w-full max-w-2xl">
        <button 
            onClick={isAnswerChecked ? onNextWord : onCheckAnswer} 
            className={`${buttonBase} ${buttonColor} ${isAnswerChecked ? 'animate-pop' : ''} w-full`}
        >
            <span>{buttonText}</span>
            {ButtonIcon}
        </button>
      </div>
    </div>
  );
};

export default Controls;
