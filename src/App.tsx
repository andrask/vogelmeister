/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { StartScreen } from './components/StartScreen';
import { StudyView } from './components/StudyView';
import { QuizView } from './components/QuizView';
import { StatsView } from './components/StatsView';
import { AppState, Language } from './types';
import { motion, AnimatePresence } from 'motion/react';
import { Bird, X, BarChart3 } from 'lucide-react';

export default function App() {
  const [view, setView] = useState<AppState>('Selection');
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <div className="min-h-screen bg-brand-cream selection:bg-brand-olive/20 selection:text-brand-olive">
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-1 md:py-6 pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-between items-center">          
          <div className="hidden md:flex items-center gap-8 pointer-events-auto">
             <button 
              onClick={() => setView('Study')}
              className={`text-sm font-semibold uppercase tracking-widest transition-colors ${view === 'Study' ? 'text-brand-olive' : 'text-brand-olive/40 hover:text-brand-olive/60'}`}
             >
               Lernen
             </button>
             <button 
              onClick={() => setView('Quiz')}
              className={`text-sm font-semibold uppercase tracking-widest transition-colors ${view === 'Quiz' ? 'text-brand-olive' : 'text-brand-olive/40 hover:text-brand-olive/60'}`}
             >
               Quiz
             </button>
             <button 
              onClick={() => setView('Stats')}
              className={`text-sm font-semibold uppercase tracking-widest transition-colors ${view === 'Stats' ? 'text-brand-olive' : 'text-brand-olive/40 hover:text-brand-olive/60'}`}
             >
               Lernstatus
             </button>
          </div>
        </div>
      </nav>

      <main className="pt-4 md:pt-12 pb-12 relative overflow-hidden">
        {/* Simplified background decoration */}
        <div className="absolute top-[-10%] right-[-5%] w-[40%] aspect-square rounded-full bg-brand-olive/[0.03] -z-10" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[30%] aspect-square rounded-full bg-brand-olive/[0.02] -z-10" />

        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            {view === 'Selection' && (
              <StartScreen 
                onStart={setView} 
                language={language} 
              />
            )}
            {view === 'LanguageSelection' && (
              <div className="flex flex-col items-center justify-center min-h-[70vh] px-6">
                <h2 className="text-2xl font-serif italic mb-8">Alternative Sprache wählen</h2>
                <div className="flex flex-wrap justify-center gap-3 max-w-2xl">
                  {['en', 'fr', 'it', 'es', 'pt', 'nl', 'sv', 'da', 'pl', 'cs', 'hu'].map((code) => {
                    const langMap: Record<string, {label: string, flag: string}> = {
                      en: { label: 'English', flag: '🇬🇧' },
                      fr: { label: 'Français', flag: '🇫🇷' },
                      it: { label: 'Italiano', flag: '🇮🇹' },
                      es: { label: 'Español', flag: '🇪🇸' },
                      pt: { label: 'Português', flag: '🇵🇹' },
                      nl: { label: 'Nederlands', flag: '🇳🇱' },
                      sv: { label: 'Svenska', flag: '🇸🇪' },
                      da: { label: 'Dansk', flag: '🇩🇰' },
                      pl: { label: 'Polski', flag: '🇵🇱' },
                      cs: { label: 'Čeština', flag: '🇨🇿' },
                      hu: { label: 'Magyar', flag: '🇭🇺' },
                    };
                    const lang = langMap[code];
                    return (
                      <button
                        key={code}
                        onClick={() => {
                          setLanguage(code as Language);
                          setView('Selection');
                        }}
                        className={`px-6 py-3 rounded-full border-2 transition-all flex items-center gap-3 ${
                          language === code 
                            ? 'bg-brand-olive text-white border-brand-olive shadow-lg scale-105' 
                            : 'bg-white text-brand-olive/60 border-brand-olive/10 hover:border-brand-olive/30 hover:bg-brand-cream'
                        }`}
                      >
                        <span className="text-xl">{lang.flag}</span>
                        <span className="font-semibold">{lang.label}</span>
                      </button>
                    );
                  })}
                </div>
                <button 
                  onClick={() => setView('Selection')}
                  className="mt-12 text-brand-olive/60 hover:text-brand-olive font-medium flex items-center gap-2"
                >
                  <X className="w-5 h-5" /> Abbrechen
                </button>
              </div>
            )}
            {view === 'Study' && (
              <StudyView 
                language={language}
                onBack={() => setView('Selection')} 
              />
            )}
            {view === 'Quiz' && (
              <QuizView 
                language={language}
                onBack={() => setView('Selection')} 
              />
            )}
            {view === 'Stats' && (
              <StatsView 
                language={language}
                onBack={() => setView('Selection')} 
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="py-12 border-t border-brand-olive/5 mt-auto">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-olive/40">
            © 2026 VogelMeister • Für Naturliebhaber
          </p>
          <div className="flex gap-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-olive/20 italic">Ausgewählte Liste mitteleuropäischer Vögel</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
