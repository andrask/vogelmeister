/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { StartScreen } from './components/StartScreen';
import { StudyView } from './components/StudyView';
import { QuizView } from './components/QuizView';
import { AppState } from './types';
import { motion, AnimatePresence } from 'motion/react';
import { Bird } from 'lucide-react';

export default function App() {
  const [view, setView] = useState<AppState>('Selection');

  return (
    <div className="min-h-screen bg-brand-cream selection:bg-brand-olive/20 selection:text-brand-olive">
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-1 md:py-6 pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 pointer-events-auto cursor-pointer"
            onClick={() => setView('Selection')}
          >
            <div className="w-8 h-8 rounded-full bg-brand-olive flex items-center justify-center text-white">
              <Bird className="w-4 h-4" />
            </div>
            <span className="font-serif italic text-xl tracking-tight text-brand-ink">VogelMeister</span>
          </motion.div>
          
          <div className="hidden md:flex items-center gap-8 pointer-events-auto">
             <button 
              onClick={() => setView('Study')}
              className={`text-sm font-semibold uppercase tracking-widest transition-colors ${view === 'Study' ? 'text-brand-olive' : 'text-brand-olive/40 hover:text-brand-olive/60'}`}
             >
               Study
             </button>
             <button 
              onClick={() => setView('Quiz')}
              className={`text-sm font-semibold uppercase tracking-widest transition-colors ${view === 'Quiz' ? 'text-brand-olive' : 'text-brand-olive/40 hover:text-brand-olive/60'}`}
             >
               Quiz
             </button>
          </div>
        </div>
      </nav>

      <main className="pt-8 md:pt-24 pb-12 relative overflow-hidden">
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
            {view === 'Selection' && <StartScreen onStart={setView} />}
            {view === 'Study' && <StudyView onBack={() => setView('Selection')} />}
            {view === 'Quiz' && <QuizView onBack={() => setView('Selection')} />}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="py-12 border-t border-brand-olive/5 mt-auto">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-olive/40">
            © 2026 VogelMeister • For Nature Enthusiasts
          </p>
          <div className="flex gap-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-olive/20 italic">Curated list of central European birds</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
