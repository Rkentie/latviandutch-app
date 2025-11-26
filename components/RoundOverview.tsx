
import React, { useEffect, useState } from 'react';
import { RoundHistoryItem, LanguageDirection, VocabularyItem, LeaderboardEntry, Translation } from '../types';
import { getLeaderboard, saveScore } from '../services/leaderboardService';
import { Home } from 'lucide-react';

interface RoundOverviewProps {
  history: RoundHistoryItem[];
  score: number;
  roundSize: number;
  onStartNewRound: () => void;
  languageDirection: LanguageDirection;
  onGoHome: () => void;
  isMarathon: boolean;
  t: Translation;
}

const RoundOverview: React.FC<RoundOverviewProps> = ({
  history,
  score,
  roundSize,
  onStartNewRound,
  languageDirection,
  onGoHome,
  isMarathon,
  t,
}) => {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [playerName, setPlayerName] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<'summary' | 'leaderboard'>('summary');

  useEffect(() => {
    if (isMarathon) {
      setLeaderboard(getLeaderboard());
      // Auto switch to leaderboard if score is high enough? Maybe not, let user choose.
      // But we can encourage them in the UI.
    }
  }, [isMarathon]);

  const getPromptedWord = (item: VocabularyItem): string => {
    // Source word shown as the prompt depends on language direction
    switch (languageDirection) {
      case LanguageDirection.LV_TO_NL:
      case LanguageDirection.LV_TO_EN:
        return item.latvian; // Latvian is the source
      case LanguageDirection.NL_TO_LV:
        return item.dutch; // Dutch is the source
      default:
        return item.latvian;
    }
  };

  const getStatusText = (item: RoundHistoryItem): string => {
    if (item.isCorrectOnFirstTry) return t.status_perfect;
    if (item.isCorrectOnSecondTry) return t.status_correct_2nd;
    return t.status_missed;
  };

  const getStatusColor = (item: RoundHistoryItem): string => {
    if (item.isCorrectOnFirstTry) return "text-green-700 bg-green-100 border-green-200";
    if (item.isCorrectOnSecondTry) return "text-yellow-700 bg-yellow-100 border-yellow-200"; 
    return "text-red-700 bg-red-100 border-red-200";
  };

  const percentage = Math.round((score / roundSize) * 100);
  let resultMessage = t.keep_practicing;
  if (percentage > 80) resultMessage = t.amazing_work;
  else if (percentage > 50) resultMessage = t.good_job;

  const handleSubmitScore = (e: React.FormEvent) => {
    e.preventDefault();
    if (!playerName.trim()) return;
    
    const newBoard = saveScore(playerName, score, percentage);
    setLeaderboard(newBoard);
    setHasSubmitted(true);
    setActiveTab('leaderboard');
  };

  const renderMedal = (index: number) => {
    if (index === 0) return <span className="text-2xl" role="img" aria-label="Gold">🥇</span>;
    if (index === 1) return <span className="text-2xl" role="img" aria-label="Silver">🥈</span>;
    if (index === 2) return <span className="text-2xl" role="img" aria-label="Bronze">🥉</span>;
    return <span className="w-8 h-8 flex items-center justify-center font-bold text-slate-400">{index + 1}</span>;
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-slate-50 to-indigo-50 p-4 sm:p-6 animate-fadeIn">
      <header className="w-full max-w-4xl mb-8">
        <div className="bg-white p-4 sm:px-8 sm:py-6 rounded-2xl shadow-xl border border-indigo-50 flex justify-between items-center">
            <h1 className="text-2xl sm:text-3xl font-black text-indigo-600 nunito-font tracking-tight">
               {isMarathon ? t.marathon_results : t.round_summary}
            </h1>
            <button
                onClick={onGoHome}
                className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 transition-all transform hover:scale-105 active:scale-95 text-slate-600"
                aria-label="Go to Home Screen"
            >
                <Home className="h-6 w-6" strokeWidth={2} />
            </button>
        </div>
      </header>
      
      <main className="container mx-auto flex flex-col items-center flex-grow w-full max-w-4xl">
        
        {isMarathon && (
          <div className="flex w-full mb-6 bg-white/50 p-1 rounded-xl border border-white/60">
            <button 
              onClick={() => setActiveTab('summary')}
              className={`flex-1 py-3 rounded-lg font-bold text-sm uppercase tracking-wide transition-all ${activeTab === 'summary' ? 'bg-white shadow-md text-indigo-600' : 'text-slate-500 hover:bg-white/40'}`}
            >
              {t.my_results}
            </button>
            <button 
              onClick={() => setActiveTab('leaderboard')}
              className={`flex-1 py-3 rounded-lg font-bold text-sm uppercase tracking-wide transition-all ${activeTab === 'leaderboard' ? 'bg-white shadow-md text-orange-500' : 'text-slate-500 hover:bg-white/40'}`}
            >
              🏆 {t.leaderboard}
            </button>
          </div>
        )}

        <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-2xl w-full animate-slideUp transition-all duration-500 border border-white relative overflow-hidden">
          
          {/* TOP SECTION: SCORE SUMMARY (Always Visible on Summary Tab) */}
          {activeTab === 'summary' && (
            <>
              <div className="text-center mb-10">
                <span className="inline-block px-4 py-1 rounded-full bg-indigo-100 text-indigo-700 font-bold text-sm uppercase tracking-wider mb-4">
                  {isMarathon ? t.marathon_complete : t.round_complete}
                </span>
                <h2 className="text-4xl sm:text-5xl font-black text-slate-800 mb-4 nunito-font">
                  {resultMessage}
                </h2>
                <div className="flex items-center justify-center gap-4">
                    <div className="text-center p-4 bg-slate-50 rounded-2xl border border-slate-100 min-w-[100px]">
                        <div className="text-3xl font-bold text-indigo-600">{score}</div>
                        <div className="text-xs text-slate-500 font-bold uppercase">{t.score}</div>
                    </div>
                    <div className="text-center p-4 bg-slate-50 rounded-2xl border border-slate-100 min-w-[100px]">
                        <div className="text-3xl font-bold text-slate-700">{percentage}%</div>
                        <div className="text-xs text-slate-500 font-bold uppercase">{t.accuracy}</div>
                    </div>
                </div>

                {/* MARATHON SUBMISSION FORM */}
                {isMarathon && !hasSubmitted && (
                  <div className="mt-8 max-w-md mx-auto bg-orange-50 border-2 border-orange-100 rounded-2xl p-6 animate-pop">
                    <h3 className="font-bold text-orange-800 mb-2 flex items-center justify-center gap-2">
                      🏆 {t.hall_of_fame}
                    </h3>
                    <p className="text-sm text-orange-600/80 mb-4">{t.enter_name}</p>
                    <form onSubmit={handleSubmitScore} className="flex gap-2">
                      <input 
                        type="text" 
                        placeholder={t.your_name}
                        value={playerName}
                        onChange={(e) => setPlayerName(e.target.value)}
                        className="flex-grow px-4 py-2 rounded-xl border-2 border-orange-200 focus:border-orange-400 outline-none text-slate-800 font-bold bg-white"
                        maxLength={15}
                        required
                      />
                      <button 
                        type="submit"
                        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-xl font-bold transition-colors shadow-md"
                      >
                        {t.save}
                      </button>
                    </form>
                  </div>
                )}
                
                {isMarathon && hasSubmitted && (
                   <div className="mt-6 text-green-600 font-bold bg-green-50 p-3 rounded-xl inline-block border border-green-100">
                     ✓ {t.score_saved}
                   </div>
                )}
              </div>

              {/* DETAILED HISTORY TABLE */}
              <div className="overflow-hidden rounded-2xl border border-slate-200 mb-8 shadow-sm">
                <div className="max-h-[400px] overflow-y-auto scrollbar-thin">
                  <table className="min-w-full divide-y divide-slate-200">
                    <thead className="bg-slate-50 sticky top-0 z-10">
                      <tr>
                        <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">
                          {t.prompt}
                        </th>
                        <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider hidden sm:table-cell">
                          {t.your_answer}
                        </th>
                        <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">
                          {t.result}
                        </th>
                        <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">
                          {t.correct}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-slate-100">
                      {history.map((record, index) => (
                        <tr key={index} className="hover:bg-slate-50 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-slate-800">
                              {getPromptedWord(record.item)}
                          </td>
                          <td className="px-6 py-4 text-sm text-slate-500 hidden sm:table-cell">
                            {record.userAttempts[record.userAttempts.length - 1]}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <span className={`px-3 py-1 inline-flex text-xs leading-5 font-bold rounded-full border ${getStatusColor(record)}`}>
                              {getStatusText(record)}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-700">{record.correctTranslation}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}

          {/* LEADERBOARD TAB */}
          {activeTab === 'leaderboard' && (
             <div className="animate-fadeIn">
               <div className="text-center mb-8">
                 <h2 className="text-3xl font-black text-orange-500 nunito-font mb-2">{t.leaderboard_title}</h2>
                 <p className="text-slate-500">{t.leaderboard_subtitle}</p>
               </div>
               
               {leaderboard.length === 0 ? (
                 <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
                   <p className="text-slate-400 font-medium">{t.no_records}</p>
                 </div>
               ) : (
                 <div className="space-y-3">
                   {leaderboard.map((entry, idx) => (
                     <div 
                       key={idx} 
                       className={`flex items-center justify-between p-4 rounded-2xl border-2 transition-all ${entry.name === playerName && hasSubmitted ? 'bg-orange-50 border-orange-200 transform scale-[1.02] shadow-md' : 'bg-white border-slate-100 hover:border-indigo-100'}`}
                     >
                       <div className="flex items-center gap-4">
                         <div className="w-10 flex justify-center">
                           {renderMedal(idx)}
                         </div>
                         <div>
                           <div className="font-bold text-lg text-slate-800">{entry.name}</div>
                           <div className="text-xs text-slate-400 font-mono">{new Date(entry.date).toLocaleDateString()}</div>
                         </div>
                       </div>
                       <div className="text-right">
                         <div className="font-black text-xl text-indigo-600">{entry.score} <span className="text-xs font-medium text-slate-400">{t.points}</span></div>
                         <div className={`text-xs font-bold ${entry.accuracy >= 90 ? 'text-green-500' : 'text-slate-400'}`}>{entry.accuracy}% {t.acc}</div>
                       </div>
                     </div>
                   ))}
                 </div>
               )}
             </div>
          )}

          {/* FOOTER BUTTONS */}
          <div className="flex justify-center mt-8 pt-6 border-t border-slate-100">
            <button
              onClick={onStartNewRound}
              className="px-10 py-4 rounded-2xl font-bold text-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-all focus:outline-none shadow-lg shadow-indigo-200 hover:shadow-xl hover:-translate-y-1 transform active:scale-95"
            >
              {t.start_new_round}
            </button>
          </div>
        </div>
      </main>
      <footer className="text-center py-8 text-slate-400 text-sm font-medium">
        LatvianDutch App &copy; {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default RoundOverview;
