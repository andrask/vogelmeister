import React from 'react';
import { motion } from 'motion/react';
import { Bird, GraduationCap, PlayCircle, BookOpen } from 'lucide-react';
import { AppState } from '../types';

interface StartScreenProps {
  onStart: (mode: AppState) => void;
}

export const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-olive text-white mb-6 shadow-lg">
          <Bird className="w-10 h-10" />
        </div>
        <h1 className="text-6xl md:text-7xl font-serif italic text-brand-ink mb-4 font-medium">
          VogelMeister
        </h1>
        <p className="text-lg text-brand-olive/70 max-w-md mx-auto leading-relaxed">
          The elegant way to master central European bird names in German.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
        <motion.button
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onStart('Study')}
          className="group flex flex-col items-start p-8 rounded-3xl bg-white border border-brand-olive/10 shadow-xl shadow-brand-olive/5 text-left transition-all hover:border-brand-olive/30"
        >
          <div className="w-12 h-12 rounded-2xl bg-brand-olive/10 flex items-center justify-center mb-6 group-hover:bg-brand-olive group-hover:text-white transition-colors">
            <BookOpen className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-serif italic mb-2">Study Cards</h2>
          <p className="text-brand-ink/60 text-sm">
            Familiarize yourself with names and photos. No pressure, just learning.
          </p>
        </motion.button>

        <motion.button
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onStart('Quiz')}
          className="group flex flex-col items-start p-8 rounded-3xl bg-brand-olive shadow-xl shadow-brand-olive/20 text-left transition-all hover:bg-brand-olive/90"
        >
          <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-brand-olive transition-colors">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-serif italic mb-2 text-white">Recall Quiz</h2>
          <p className="text-white/70 text-sm">
            Test your knowledge. See a bird, choose the correct German name.
          </p>
        </motion.button>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-16 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-olive/40"
      >
        <div className="h-px w-8 bg-brand-olive/20" />
        Explore the Aviary
        <div className="h-px w-8 bg-brand-olive/20" />
      </motion.div>
    </div>
  );
};
