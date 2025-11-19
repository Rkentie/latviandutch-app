
import React from 'react';
import { Translation } from '../types';
import { X } from 'lucide-react';

interface HeaderProps {
  score: number;
  currentWordIndex: number;
  totalWords: number;
  onGoHome?: () => void;
  t: Translation;
}

const Header: React.FC<HeaderProps> = ({ score, currentWordIndex, totalWords, onGoHome, t }) => {
  // Calculate progress percentage
  const progress = totalWords > 0 ? ((currentWordIndex) / totalWords) * 100 : 0;

  return (
    <div className="w-full flex flex-col items-center pt-6 px-4 max-w-3xl mx-auto relative z-10">
      <div className="w-full flex justify-between items-center mb-6 gap-4">
        {onGoHome ? (
           <button
            onClick={onGoHome}
            className="p-3 rounded-xl bg-white border-2 border-slate-100 text-slate-400 hover:border-red-200 hover:text-red-500 hover:bg-red-50 transition-all duration-200 shadow-sm"
            aria-label={t.quit}
            title={t.quit}
          >
            <X className="w-5 h-5" strokeWidth={2.5} />
          </button>
        ) : <div className="w-12" />}

        <div className="flex-grow max-w-md">
           {/* Progress Bar Container */}
           <div className="h-5 w-full bg-slate-100 rounded-full overflow-hidden shadow-inner border border-slate-200 relative">
              {/* Fill */}
              <div 
                className="h-full bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full transition-all duration-700 ease-out relative shadow-lg"
                style={{ width: `${progress}%` }}
              >
                 <div className="absolute top-0 right-0 bottom-0 w-full bg-gradient-to-b from-white/30 to-transparent"></div>
                 {/* Leading edge shine */}
                 <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/50 blur-[2px]"></div>
              </div>
           </div>
        </div>

        <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-xl border-2 border-orange-100 shadow-sm" title={t.score}>
          <span className="text-orange-500 text-2xl animate-pulse-soft">♥</span>
          <span className="font-bold text-orange-600 text-xl nunito-font">{score}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
