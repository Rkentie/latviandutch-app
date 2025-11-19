
import React from 'react';
import { FeedbackStatus, Translation } from '../types';

interface FeedbackDisplayProps {
  status: FeedbackStatus;
  message: string;
  correctAnswer?: string;
  t: Translation;
}

const FeedbackDisplay: React.FC<FeedbackDisplayProps> = ({ 
  status, 
  message, 
  correctAnswer,
  t,
}) => {
  // Reserve layout space to prevent jumps
  if (status === FeedbackStatus.NEUTRAL) {
    return <div className="h-24 w-full transition-all duration-300"></div>; 
  }

  const isCorrect = status === FeedbackStatus.CORRECT;
  
  // Animation classes
  const animationClass = isCorrect ? "animate-pop" : "animate-slideUp";
  
  // Style configs
  const containerStyle = isCorrect 
    ? "bg-green-100 border-green-200 text-green-900" 
    : "bg-red-50 border-red-200 text-red-900";
    
  const iconBg = isCorrect ? "bg-green-500" : "bg-red-500";
  const icon = isCorrect ? "✓" : "✕";

  return (
    <div className={`w-full max-w-2xl mt-4 p-5 rounded-2xl border-b-4 ${containerStyle} ${animationClass} flex items-start gap-4 shadow-sm transition-all duration-300 relative overflow-hidden`}>
      
      <div className={`flex-shrink-0 w-12 h-12 rounded-full ${iconBg} flex items-center justify-center text-white shadow-md text-2xl font-bold`}>
         {icon}
      </div>
      
      <div className="flex-grow pt-1">
        <h3 className={`font-black text-xl nunito-font mb-1 ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
          {isCorrect ? t.excellent : t.incorrect}
        </h3>
        <p className="font-medium opacity-90 text-lg leading-snug mb-2">{message}</p>
        
        {!isCorrect && correctAnswer && (
          <div className="p-3 bg-white/80 rounded-xl border border-red-100 inline-block shadow-sm w-full mt-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-red-400 block mb-1">{t.correct_answer}</span>
            <span className="font-bold text-slate-800 text-lg block">{correctAnswer}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedbackDisplay;
