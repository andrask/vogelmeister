import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BIRDS } from '../constants';
import { BirdCard } from './BirdCard';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Language } from '../types';

interface StudyViewProps {
  onBack: () => void;
  language: Language;
}

export const StudyView: React.FC<StudyViewProps> = ({ onBack, language }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const prevCard = () => {
    setCurrentIndex((prev) => (prev === 0 ? BIRDS.length - 1 : prev - 1));
  };

  const nextCard = () => {
    setCurrentIndex((prev) => (prev === BIRDS.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="max-w-4xl mx-auto w-full px-6 pt-0 pb-12 md:pb-16">
      <div className="flex justify-between items-center mb-4 md:mb-6">
        <div>
          <h2 className="text-4xl font-serif italic text-brand-ink">Lern-Deck</h2>
          <p className="text-brand-olive/60">Karte {currentIndex + 1} von {BIRDS.length}</p>
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
              key={BIRDS[currentIndex].id}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <BirdCard bird={BIRDS[currentIndex]} language={language} />
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
          {BIRDS.map((_, idx) => (
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
