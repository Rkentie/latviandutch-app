import React, { useState } from 'react';
import { LanguageDirection, AppLanguage } from '../types';
import { translations } from '../services/translations';
import { ROUND_OPTIONS, DEFAULT_ROUND_SIZE_INDEX, MARATHON_SIZE } from '../constants';
import {
  Trophy, ChevronRight, Flame
} from 'lucide-react';

interface StartScreenProps {
  onSelectDirection: (direction: LanguageDirection, roundSize: number) => void;
  appLanguage: AppLanguage;
  setAppLanguage: (lang: AppLanguage) => void;
  streak?: number;
}

const StartScreen: React.FC<StartScreenProps> = ({ onSelectDirection, appLanguage, setAppLanguage, streak = 0 }) => {
  const t = translations[appLanguage];

  const roundLabels = t.round_labels;

  // We track the index (0-4), not the raw value
  const [sliderIndex, setSliderIndex] = useState<number>(DEFAULT_ROUND_SIZE_INDEX);

  const currentRoundSize = ROUND_OPTIONS[sliderIndex];
  const currentLabel = roundLabels[sliderIndex];
  const isMarathon = currentRoundSize === MARATHON_SIZE;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-orange-500 p-4 animate-fadeIn relative overflow-hidden">

      {/* Decorative background elements */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse-soft"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-orange-400/20 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }}></div>

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

          {/* Streak Display */}
          {streak > 0 && (
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 shadow-lg">
              <Flame className="w-6 h-6 text-orange-400 fill-orange-400 animate-pulse" />
              <span className="text-white font-bold text-lg">{streak} Day Streak!</span>
            </div>
          )}

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
              <Trophy className="w-5 h-5 flex-shrink-0" />
              {t.marathon_tip}
            </div>
          </div>
        </div>

        {/* Right Column: Controls */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-2xl w-full transform transition-all duration-500 ease-out animate-slideUp border border-white/50" style={{ animationDelay: '0.2s' }}>

          <div className="mb-8">
            <div className="flex justify-between items-end mb-6">
              <label className="text-slate-500 font-bold uppercase tracking-wider text-sm">{t.lesson_length}</label>
              <div className="text-right">
                <span className={`block text-3xl font-black nunito-font transition-colors ${isMarathon ? 'text-orange-500' : 'text-indigo-600'}`}>
                  {currentRoundSize === MARATHON_SIZE ? 'All' : currentRoundSize} <span className="text-lg text-slate-400 font-bold">{t.words}</span>
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
                  style={{ width: `${(sliderIndex / (ROUND_OPTIONS.length - 1)) * 100}%` }}
                ></div>
              </div>

              {/* Snap Points (Dots) */}
              <div className="absolute w-full flex justify-between px-[10px] pointer-events-none">
                {ROUND_OPTIONS.map((_, idx) => (
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
                max={ROUND_OPTIONS.length - 1}
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
                  left: `calc(${(sliderIndex / (ROUND_OPTIONS.length - 1)) * 100}% - 16px)`
                }}
              >
                <div className={`w-2 h-2 rounded-full ${isMarathon ? 'bg-orange-500' : 'bg-indigo-600'}`}></div>
              </div>
            </div>

            {/* Labels below slider */}
            <div className="flex justify-between text-[10px] sm:text-xs text-slate-400 font-bold mt-3 uppercase tracking-wide select-none">
              {ROUND_OPTIONS.map((opt, idx) => (
                <span
                  key={idx}
                  className={`transition-colors ${idx === sliderIndex ? (isMarathon ? 'text-orange-500' : 'text-indigo-600') : ''}`}
                  onClick={() => setSliderIndex(idx)} // Allow clicking labels
                  style={{ cursor: 'pointer' }}
                >
                  {opt === MARATHON_SIZE ? 'All' : opt}
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
                <div className="flex items-center gap-2">
                  <span className="text-3xl">🇱🇻</span>
                  <ChevronRight className="w-4 h-4 text-slate-300" />
                  <span className="text-3xl">🇳🇱</span>
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider group-hover:text-indigo-400">{t.i_speak_lv}</div>
                  <div className="font-bold text-slate-800 text-lg group-hover:text-indigo-700 transition-colors">{t.learn_nl}</div>
                </div>
              </div>
              <span className="bg-white p-2 rounded-full shadow-sm text-slate-300 group-hover:text-indigo-500 transition-colors">
                <ChevronRight className="w-5 h-5" strokeWidth={2.5} />
              </span>
            </button>

            <button
              onClick={() => onSelectDirection(LanguageDirection.NL_TO_LV, currentRoundSize)}
              className="group w-full p-4 sm:p-5 rounded-2xl border-b-4 border-slate-200 hover:border-orange-500 bg-slate-50 hover:bg-orange-50 transition-all duration-200 ease-in-out flex items-center justify-between active:border-b-0 active:translate-y-1"
            >
              <div className="flex items-center space-x-4">
                <div className="flex items-center gap-2">
                  <span className="text-3xl">🇳🇱</span>
                  <ChevronRight className="w-4 h-4 text-slate-300" />
                  <span className="text-3xl">🇱🇻</span>
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider group-hover:text-orange-400">{t.i_speak_nl}</div>
                  <div className="font-bold text-slate-800 text-lg group-hover:text-orange-700 transition-colors">{t.learn_lv}</div>
                </div>
              </div>
              <span className="bg-white p-2 rounded-full shadow-sm text-slate-300 group-hover:text-orange-500 transition-colors">
                <ChevronRight className="w-5 h-5" strokeWidth={2.5} />
              </span>
            </button>

            <button
              onClick={() => onSelectDirection(LanguageDirection.LV_TO_EN, currentRoundSize)}
              className="group w-full p-4 sm:p-5 rounded-2xl border-b-4 border-slate-200 hover:border-blue-500 bg-slate-50 hover:bg-blue-50 transition-all duration-200 ease-in-out flex items-center justify-between active:border-b-0 active:translate-y-1"
            >
              <div className="flex items-center space-x-4">
                <div className="flex items-center gap-2">
                  <span className="text-3xl">🇱🇻</span>
                  <ChevronRight className="w-4 h-4 text-slate-300" />
                  <span className="text-3xl">🇬🇧</span>
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider group-hover:text-blue-400">{t.i_speak_lv}</div>
                  <div className="font-bold text-slate-800 text-lg group-hover:text-blue-700 transition-colors">{t.learn_en}</div>
                </div>
              </div>
              <span className="bg-white p-2 rounded-full shadow-sm text-slate-300 group-hover:text-blue-500 transition-colors">
                <ChevronRight className="w-5 h-5" strokeWidth={2.5} />
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
