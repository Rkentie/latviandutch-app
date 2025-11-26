import React, { useState, useEffect } from 'react';
import { getCategories } from '../services/vocabularyService';
import { getCategoryIcon } from '../utils/categoryIcons';
import { Check, ArrowRight, ArrowLeft, Layers } from 'lucide-react';
import { AppLanguage } from '../types';
import { translations } from '../services/translations';

interface CategorySelectionScreenProps {
    onStartGame: (categories: string[]) => void;
    onBack: () => void;
    appLanguage: AppLanguage;
}

const CategorySelectionScreen: React.FC<CategorySelectionScreenProps> = ({ onStartGame, onBack, appLanguage }) => {
    const t = translations[appLanguage];
    const [allCategories, setAllCategories] = useState<string[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    useEffect(() => {
        const cats = getCategories();
        setAllCategories(cats);
        setSelectedCategories(cats); // Default to all selected
    }, []);

    const toggleCategory = (category: string) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter(c => c !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    const selectAll = () => {
        setSelectedCategories(allCategories);
    };

    const deselectAll = () => {
        setSelectedCategories([]);
    };

    return (
        <div className="min-h-screen flex flex-col items-center bg-slate-50 relative">
            {/* Subtle animated background pattern */}
            <div className="fixed inset-0 z-0 opacity-40 pointer-events-none bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>

            <div className="w-full max-w-4xl p-4 z-10 flex flex-col h-screen">

                {/* Header */}
                <div className="flex items-center justify-between mb-6 mt-4">
                    <button
                        onClick={onBack}
                        className="p-2 rounded-full hover:bg-slate-200 transition-colors text-slate-600"
                    >
                        <ArrowLeft className="w-6 h-6" />
                    </button>
                    <h1 className="text-2xl font-black text-slate-800 nunito-font">{t.select_categories}</h1>
                    <div className="w-10"></div> {/* Spacer for centering */}
                </div>

                {/* Controls */}
                <div className="flex gap-3 mb-6 justify-center">
                    <button
                        onClick={selectAll}
                        className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-bold text-indigo-600 hover:bg-indigo-50 transition-colors shadow-sm"
                    >
                        {t.select_all}
                    </button>
                    <button
                        onClick={deselectAll}
                        className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-bold text-slate-500 hover:bg-slate-50 transition-colors shadow-sm"
                    >
                        {t.deselect_all}
                    </button>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 overflow-y-auto pb-24 px-1 custom-scrollbar">
                    {allCategories.map(category => {
                        const isSelected = selectedCategories.includes(category);
                        return (
                            <button
                                key={category}
                                onClick={() => toggleCategory(category)}
                                className={`
                  relative flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all duration-200
                  ${isSelected
                                        ? 'border-indigo-500 bg-indigo-50 shadow-md transform scale-[1.02]'
                                        : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                                    }
                `}
                            >
                                {isSelected && (
                                    <div className="absolute top-2 right-2 bg-indigo-500 text-white rounded-full p-0.5">
                                        <Check className="w-3 h-3" strokeWidth={3} />
                                    </div>
                                )}

                                <div className={`mb-2 p-3 rounded-full ${isSelected ? 'bg-indigo-100 text-indigo-600' : 'bg-slate-100 text-slate-400'}`}>
                                    {getCategoryIcon(category)}
                                </div>

                                <span className={`text-sm font-bold text-center leading-tight ${isSelected ? 'text-indigo-900' : 'text-slate-500'}`}>
                                    {category}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Footer Action */}
                <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-slate-200 flex justify-center z-20">
                    <button
                        onClick={() => onStartGame(selectedCategories)}
                        disabled={selectedCategories.length === 0}
                        className={`
              flex items-center gap-2 px-8 py-4 rounded-full text-lg font-black shadow-lg transition-all duration-300
              ${selectedCategories.length > 0
                                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:scale-105 hover:shadow-xl'
                                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                            }
            `}
                    >
                        <span>{t.start_practice}</span>
                        <ArrowRight className="w-6 h-6" />
                    </button>
                </div>

            </div>
        </div>
    );
};

export default CategorySelectionScreen;
