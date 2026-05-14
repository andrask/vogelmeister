import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BIRDS } from '../constants';
import { BirdCard } from './BirdCard';
import { ChevronLeft, ChevronRight, X, SortAsc, Shuffle, AlertCircle } from 'lucide-react';
import { Language } from '../types';
import { getStats } from '../lib/stats';

interface StudyViewProps {
  onBack: () => void;
  language: Language;
}

export const StudyView: React.FC<StudyViewProps> = ({ onBack, language }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [orderedBirds, setOrderedBirds] = useState<typeof BIRDS>([]);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [isStarted]);

  const startSession = (mode: 'alphabetical' | 'random' | 'mistaken') => {
    let list = [...BIRDS];
    if (mode === 'random') {
      list = list.sort(() => Math.random() - 0.5);
    } else if (mode === 'alphabetical') {
      list = list.sort((a, b) => a.germanName.localeCompare(b.germanName, 'de'));
    } else if (mode === 'mistaken') {
      const stats = getStats();
      
      const mistakenBirds = list.filter(b => {
        const birdStats = stats[b.id];
        return birdStats && birdStats.incorrect >= 1 && (birdStats.correct <= birdStats.incorrect || birdStats.correct < 2);
      }).sort(() => Math.random() - 0.5);

      const newBirds = list.filter(b => !stats[b.id]).sort(() => Math.random() - 0.5);
      
      const others = list.filter(b => 
        !mistakenBirds.find(m => m.id === b.id) && 
        !newBirds.find(n => n.id === b.id)
      ).sort(() => Math.random() - 0.5);

      list = [...mistakenBirds, ...newBirds, ...others];
    }
    setOrderedBirds(list);
    setIsStarted(true);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev === 0 ? orderedBirds.length - 1 : prev - 1));
  };

  const nextCard = () => {
    setCurrentIndex((prev) => (prev === orderedBirds.length - 1 ? 0 : prev + 1));
  };

  if (!isStarted) {
    return (
      <div className="max-w-4xl mx-auto w-full px-6 py-12 md:py-20 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif italic text-brand-ink mb-4">Lernkarten</h2>
          <p className="text-brand-olive/60">Wähle eine Reihenfolge für deine Lernkarten</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-3xl">
          <motion.button
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => startSession('alphabetical')}
            className="p-8 rounded-3xl bg-white border border-brand-olive/10 shadow-sm hover:shadow-md transition-all text-left flex flex-col gap-4 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-brand-olive/5 flex items-center justify-center text-brand-olive group-hover:bg-brand-olive group-hover:text-white transition-colors">
              <SortAsc className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-serif italic text-brand-ink mb-1">Alphabetisch</h3>
              <p className="text-xs text-brand-olive/60 font-medium uppercase tracking-wider">A bis Z (Deutsch)</p>
            </div>
          </motion.button>

          <motion.button
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => startSession('mistaken')}
            className="p-8 rounded-3xl bg-orange-50 border border-orange-100 shadow-sm hover:shadow-md transition-all text-left flex flex-col gap-4 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-colors">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-serif italic text-brand-ink mb-1">Lern-Fokus</h3>
              <p className="text-xs text-orange-600/60 font-medium uppercase tracking-wider">Fehler & neue zuerst</p>
            </div>
          </motion.button>

          <motion.button
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => startSession('random')}
            className="p-8 rounded-3xl bg-brand-olive text-white shadow-xl shadow-brand-olive/20 text-left flex flex-col gap-4 group sm:col-span-2 lg:col-span-1"
          >
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-brand-olive transition-colors">
              <Shuffle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-serif italic mb-1">Zufällig</h3>
              <p className="text-xs text-white/60 font-medium uppercase tracking-wider">Gemischte Reihenfolge</p>
            </div>
          </motion.button>
        </div>

        <button 
          onClick={onBack}
          className="mt-12 text-brand-olive/60 hover:text-brand-olive font-medium transition-colors"
        >
          Abbrechen
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto w-full px-6 pt-0 pb-12 md:pb-16">
      <div className="flex justify-between items-center mb-4 md:mb-6">
        <div>
          <h2 className="text-4xl font-serif italic text-brand-ink">Lern-Deck</h2>
          <p className="text-brand-olive/60">Karte {currentIndex + 1} von {orderedBirds.length}</p>
        </div>
        <button 
          onClick={onBack}
          className="w-10 h-10 rounded-full bg-white border border-brand-olive/10 flex items-center justify-center text-brand-olive hover:bg-brand-cream transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="flex items-center justify-center">
        <div className="w-full max-w-sm">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={orderedBirds[currentIndex].id}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <BirdCard bird={orderedBirds[currentIndex]} language={language} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-8 md:mt-12 flex items-center justify-center gap-6">
        <button 
          onClick={prevCard}
          className="w-12 h-12 rounded-full bg-white border border-brand-olive/10 shadow-sm flex items-center justify-center text-brand-olive hover:scale-110 active:scale-95 transition-all"
          aria-label="Vorherige Karte"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="flex flex-wrap justify-center gap-1.5 px-4 max-w-full">
          {orderedBirds.map((_, idx) => (
            <div 
              key={idx}
              className={`h-1 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'w-4 bg-brand-olive' : 'w-1 bg-brand-olive/20'
              }`}
            />
          ))}
        </div>

        <button 
          onClick={nextCard}
          className="w-12 h-12 rounded-full bg-white border border-brand-olive/10 shadow-sm flex items-center justify-center text-brand-olive hover:scale-110 active:scale-95 transition-all"
          aria-label="Nächste Karte"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};
