import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BIRDS } from '../constants';
import { BirdCard } from './BirdCard';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface StudyViewProps {
  onBack: () => void;
}

export const StudyView: React.FC<StudyViewProps> = ({ onBack }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevCard = () => {
    setCurrentIndex((prev) => (prev === 0 ? BIRDS.length - 1 : prev - 1));
  };

  const nextCard = () => {
    setCurrentIndex((prev) => (prev === BIRDS.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="max-w-4xl mx-auto w-full px-6 py-6 md:py-12">
      <div className="flex justify-between items-center mb-12">
        <div>
          <h2 className="text-4xl font-serif italic text-brand-ink">Study Deck</h2>
          <p className="text-brand-olive/60">Card {currentIndex + 1} of {BIRDS.length}</p>
        </div>
        <button 
          onClick={onBack}
          className="w-10 h-10 rounded-full bg-white border border-brand-olive/10 flex items-center justify-center text-brand-olive hover:bg-brand-cream transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="relative flex items-center justify-center">
        <button 
          onClick={prevCard}
          className="absolute left-[-2rem] md:left-[-4rem] z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-brand-olive hover:scale-110 transition-transform"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="w-full max-w-sm">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={BIRDS[currentIndex].id}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <BirdCard bird={BIRDS[currentIndex]} />
            </motion.div>
          </AnimatePresence>
        </div>

        <button 
          onClick={nextCard}
          className="absolute right-[-2rem] md:right-[-4rem] z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-brand-olive hover:scale-110 transition-transform"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="mt-16 flex justify-center gap-2">
        {BIRDS.map((_, idx) => (
          <div 
            key={idx}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === currentIndex ? 'w-8 bg-brand-olive' : 'w-2 bg-brand-olive/20'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
