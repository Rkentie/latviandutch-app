
import React, { useState } from 'react';
import { Translation } from '../types';

interface TutorialOverlayProps {
  onComplete: () => void;
  t: Translation;
}

const TutorialOverlay: React.FC<TutorialOverlayProps> = ({ onComplete, t }) => {
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: t.tut_welcome_title,
      desc: t.tut_welcome_desc,
      positionClass: "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2", // Center
      arrowClass: "hidden"
    },
    {
      title: t.tut_lang_title,
      desc: t.tut_lang_desc,
      positionClass: "top-20 right-4 sm:right-10", // Top Right
      arrowClass: "absolute -top-3 right-6 w-6 h-6 bg-white transform rotate-45 border-t-0 border-l-0"
    },
    {
      title: t.tut_slider_title,
      desc: t.tut_slider_desc,
      positionClass: "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3", // Center-ish
      arrowClass: "hidden" // No specific arrow needed, standard modal is fine here
    },
    {
      title: t.tut_start_title,
      desc: t.tut_start_desc,
      positionClass: "bottom-24 left-1/2 transform -translate-x-1/2 w-11/12 max-w-md", // Bottom
      arrowClass: "absolute -bottom-3 left-1/2 transform -translate-x-1/2 rotate-45 bg-white w-6 h-6"
    }
  ];

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      onComplete();
    }
  };

  const currentStepData = steps[step];

  return (
    <div className="fixed inset-0 z-50 flex bg-black/20 transition-all duration-500">
      
      {/* Click outside to skip not implemented to force interaction, but we have a skip button */}
      
      <div className={`absolute ${currentStepData.positionClass} transition-all duration-500 ease-in-out`}>
        <div className="bg-white rounded-2xl p-6 shadow-2xl border-4 border-indigo-100 max-w-sm relative animate-pop mx-auto">
          
          {/* Directional Arrow (pseudo-element style) */}
          <div className={currentStepData.arrowClass}></div>

          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-black text-indigo-600 nunito-font">{currentStepData.title}</h3>
            <button 
              onClick={onComplete} 
              className="text-xs font-bold text-slate-400 uppercase hover:text-red-400 tracking-wider"
            >
              {t.tut_skip}
            </button>
          </div>
          
          <p className="text-slate-600 mb-6 font-medium leading-relaxed">
            {currentStepData.desc}
          </p>
          
          <div className="flex justify-between items-center">
            <div className="flex gap-1">
              {steps.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`w-2 h-2 rounded-full transition-colors ${idx === step ? 'bg-indigo-500' : 'bg-slate-200'}`}
                ></div>
              ))}
            </div>
            
            <button 
              onClick={handleNext}
              className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold shadow-lg shadow-indigo-200 transform active:scale-95 transition-all"
            >
              {step === steps.length - 1 ? t.tut_finish : t.tut_next}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialOverlay;
