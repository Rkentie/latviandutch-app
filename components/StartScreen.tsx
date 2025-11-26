
import React, { useState, useEffect } from 'react';
import { LanguageDirection, AppLanguage } from '../types';
import { translations } from '../services/translations';
import TutorialOverlay from './TutorialOverlay';

interface StartScreenProps {
  onSelectDirection: (direction: LanguageDirection, roundSize: number) => void;
  appLanguage: AppLanguage;
  setAppLanguage: (lang: AppLanguage) => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onSelectDirection, appLanguage, setAppLanguage }) => {
  const t = translations[appLanguage];
  const [showTutorial, setShowTutorial] = useState(false);
  
  // Discrete steps for the slider
  // Updated to 180 as the new max (Full List)
  const roundOptions = [5, 10, 20, 50, 180];
  const roundLabels = t.round_labels;
  
  // We track the index (0-4), not the raw value
  const [sliderIndex, setSliderIndex] = useState<number>(1); // Default to 10 (index 1)

  const currentRoundSize = roundOptions[sliderIndex];
  const currentLabel = roundLabels[sliderIndex];
  const isMarathon = currentRoundSize === 180;

  useEffect(() => {
    const tutorialSeen = localStorage.getItem('latviandutch_tutorial_seen');
    if (!tutorialSeen) {
      // Small delay to let the UI mount smoothly before showing modal
      const timer = setTimeout(() => setShowTutorial(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleTutorialComplete = () => {
    localStorage.setItem('latviandutch_tutorial_seen', 'true');
    setShowTutorial(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-orange-500 p-4 animate-fadeIn relative overflow-hidden">
      
      {showTutorial && <TutorialOverlay onComplete={handleTutorialComplete} t={t} />}

      {/* Decorative background elements */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse-soft"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-orange-400/20 rounded-full blur-3xl animate-pulse-soft" style={{animationDelay: '1s'}}></div>

      {/* Language Switcher */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 flex gap-2">
        <button 
          onClick={() => setAppLanguage('en')} 
          className={`w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-lg transition-transform hover:scale-110 border-2 ${appLanguage === 'en' ? 'border-white bg-white/20' : 'border-transparent bg-white/10 opacity-70'}`}
          aria-label="English"
        >
          🇬🇧
        </button>
        <button 
          onClick={() => setAppLanguage('nl')} 
          className={`w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-lg transition-transform hover:scale-110 border-2 ${appLanguage === 'nl' ? 'border-white bg-white/20' : 'border-transparent bg-white/10 opacity-70'}`}
          aria-label="Dutch"
        >
          🇳🇱
        </button>
        <button 
          onClick={() => setAppLanguage('lv')} 
          className={`w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-lg transition-transform hover:scale-110 border-2 ${appLanguage === 'lv' ? 'border-white bg-white/20' : 'border-transparent bg-white/10 opacity-70'}`}
          aria-label="Latvian"
        >
          🇱🇻
        </button>
      </div>

      <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center z-10 mt-12 sm:mt-0">
        
        {/* Left Column: Explainer */}
        <div className="text-white space-y-6 animate-slideUp px-4">
          <h1 className="text-5xl sm:text-6xl font-black nunito-font tracking-tight drop-shadow-lg">
            LatvianDutch
            <span className="block text-orange-300 text-2xl sm:text-3xl mt-2 font-bold">{t.title_suffix}</span>
          </h1>
          
          <div className="space-y-4 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-lg">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <span className="bg-orange-500 p-1 rounded-md">🚀</span> {t.how_it_works}
            </h2>
            <ul className="space-y-3 text-indigo-50 text-base sm:text-lg">
              <li className="flex items-start gap-3">
                <span className="bg-white/20 rounded-full w-6 h-6 flex items-center justify-center text-xs flex-shrink-0 mt-1 font-bold">1</span>
                <span>{t.step_1}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-white/20 rounded-full w-6 h-6 flex items-center justify-center text-xs flex-shrink-0 mt-1 font-bold">2</span>
                <span>{t.step_2}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-white/20 rounded-full w-6 h-6 flex items-center justify-center text-xs flex-shrink-0 mt-1 font-bold">3</span>
                <span>{t.step_3}</span>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-white/20 text-sm text-orange-200 font-medium flex items-center gap-2">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.504-1.125-1.125-1.125h-8.719c-.621 0-1.125.504-1.125 1.125v3.375m16.5 0v3.375c0 .621-.504 1.125-1.125 1.125h-15c-.621 0-1.125-.504-1.125-1.125v-3.375m9-3.825c.495.495.588.828.915 1.125h-6.15c.327-.297.42-.63.915-1.125L7.5 12.5h9l-2.91 2.425z" />
                </svg>
               {t.marathon_tip}
            </div>
          </div>
        </div>

        {/* Right Column: Controls */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-2xl w-full transform transition-all duration-500 ease-out animate-slideUp border border-white/50" style={{animationDelay: '0.2s'}}>
          
          <div className="mb-10">
             <div className="flex justify-between items-end mb-6">
                <label className="text-slate-500 font-bold uppercase tracking-wider text-sm">{t.lesson_length}</label>
                <div className="text-right">
                    <span className={`block text-3xl font-black nunito-font transition-colors ${isMarathon ? 'text-orange-500' : 'text-indigo-600'}`}>
                        {currentRoundSize === 180 ? 'All' : currentRoundSize} <span className="text-lg text-slate-400 font-bold">{t.words}</span>
                    </span>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">{currentLabel}</span>
                </div>
             </div>
            
            {/* Custom Range Slider Container */}
            <div className="relative w-full h-12 flex items-center justify-center">
              
              {/* Visual Track Background */}
              <div className="absolute w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                 <div 
                    className={`h-full transition-all duration-200 ease-out ${isMarathon ? 'bg-orange-400' : 'bg-indigo-200'}`} 
                    style={{ width: `${(sliderIndex / (roundOptions.length - 1)) * 100}%` }}
                 ></div>
              </div>

              {/* Snap Points (Dots) */}
              <div className="absolute w-full flex justify-between px-[10px] pointer-events-none">
                 {roundOptions.map((_, idx) => (
                    <div 
                        key={idx} 
                        className={`w-4 h-4 rounded-full transition-colors duration-200 ${idx <= sliderIndex ? (isMarathon ? 'bg-orange-500' : 'bg-indigo-500') : 'bg-slate-300'}`}
                    ></div>
                 ))}
              </div>

              {/* The Actual Input (Invisible but interactive) */}
              <input 
                type="range" 
                min="0" 
                max={roundOptions.length - 1} 
                step="1" 
                value={sliderIndex}
                onChange={(e) => setSliderIndex(parseInt(e.target.value))}
                className="absolute w-full h-12 opacity-0 cursor-pointer z-20"
                aria-label="Select number of words"
              />

              {/* Custom Thumb (Visual only, follows input value) */}
              <div 
                className={`absolute h-8 w-8 bg-white border-4 rounded-full shadow-lg z-10 pointer-events-none transition-all duration-200 ease-out flex items-center justify-center ${isMarathon ? 'border-orange-500' : 'border-indigo-600'}`}
                style={{ 
                    left: `calc(${(sliderIndex / (roundOptions.length - 1)) * 100}% - 16px)` 
                }}
              >
                  <div className={`w-2 h-2 rounded-full ${isMarathon ? 'bg-orange-500' : 'bg-indigo-600'}`}></div>
              </div>
            </div>

            {/* Labels below slider */}
            <div className="flex justify-between text-[10px] sm:text-xs text-slate-400 font-bold mt-3 uppercase tracking-wide select-none">
              {roundOptions.map((opt, idx) => (
                  <span 
                    key={idx} 
                    className={`transition-colors ${idx === sliderIndex ? (isMarathon ? 'text-orange-500' : 'text-indigo-600') : ''}`}
                    onClick={() => setSliderIndex(idx)} // Allow clicking labels
                    style={{cursor: 'pointer'}}
                  >
                      {opt === 180 ? 'All' : opt}
                  </span>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <button
              onClick={() => onSelectDirection(LanguageDirection.LV_TO_NL, currentRoundSize)}
              className="group w-full p-4 sm:p-5 rounded-2xl border-b-4 border-slate-200 hover:border-indigo-500 bg-slate-50 hover:bg-indigo-50 transition-all duration-200 ease-in-out flex items-center justify-between active:border-b-0 active:translate-y-1"
            >
              <div className="flex items-center space-x-4">
                 <span className="text-4xl">🇱🇻</span>
                 <div className="text-left">
                   <div className="text-xs font-bold text-slate-400 uppercase tracking-wider group-hover:text-indigo-400">{t.i_speak_lv}</div>
                   <div className="font-bold text-slate-800 text-lg group-hover:text-indigo-700 transition-colors">{t.learn_nl}</div>
                 </div>
              </div>
              <span className="bg-white p-2 rounded-full shadow-sm text-slate-300 group-hover:text-indigo-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </span>
            </button>

            <button
              onClick={() => onSelectDirection(LanguageDirection.NL_TO_LV, currentRoundSize)}
              className="group w-full p-4 sm:p-5 rounded-2xl border-b-4 border-slate-200 hover:border-orange-500 bg-slate-50 hover:bg-orange-50 transition-all duration-200 ease-in-out flex items-center justify-between active:border-b-0 active:translate-y-1"
            >
              <div className="flex items-center space-x-4">
                 <span className="text-4xl">🇳🇱</span>
                 <div className="text-left">
                   <div className="text-xs font-bold text-slate-400 uppercase tracking-wider group-hover:text-orange-400">{t.i_speak_nl}</div>
                   <div className="font-bold text-slate-800 text-lg group-hover:text-orange-700 transition-colors">{t.learn_lv}</div>
                 </div>
              </div>
              <span className="bg-white p-2 rounded-full shadow-sm text-slate-300 group-hover:text-orange-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      <footer className="absolute bottom-4 text-center py-2 text-white/60 text-xs font-medium w-full">
        {t.footer}
      </footer>
    </div>
  );
};

export default StartScreen;
