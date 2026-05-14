import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bird as BirdType, Language } from '../types';
import { cn } from '../lib/utils';
import { RotateCw, Bird, ChevronLeft, ChevronRight } from 'lucide-react';

interface BirdCardProps {
  bird: BirdType;
  language: Language;
  className?: string;
}

export const BirdCard: React.FC<BirdCardProps> = ({ bird, language, className }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);

  const nextImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImgIndex((prev) => (prev + 1) % bird.imageUrls.length);
  };

  const prevImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImgIndex((prev) => (prev - 1 + bird.imageUrls.length) % bird.imageUrls.length);
  };

  return (
    <div 
      className={cn("relative w-full aspect-[4/5] md:aspect-[3/4] cursor-pointer group perspective-1000", className)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full relative preserve-3d will-change-transform"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
      >
        {/* Front */}
        <div className={cn(
          "absolute inset-0 backface-hidden rounded-3xl overflow-hidden bg-white shadow-lg border border-brand-olive/10 flex flex-col"
        )}>
          <div className="relative flex-1 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img 
                key={imgIndex}
                src={bird.imageUrls[imgIndex]} 
                alt={bird.germanName} 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="eager"
              />
            </AnimatePresence>

            {bird.imageUrls.length > 1 && (
              <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button 
                  onClick={prevImg}
                  className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/40 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={nextImg}
                  className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/40 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            
            <div className="absolute top-4 right-4 flex gap-1">
              {bird.imageUrls.map((_, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "w-1.5 h-1.5 rounded-full transition-all",
                    i === imgIndex ? "bg-white w-4" : "bg-white/40"
                  )}
                />
              ))}
            </div>

            <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
            </div>
          </div>
          <div className="p-6 bg-white flex justify-between items-center text-center w-full">
            <div className="flex-1">
              <p className="text-[10px] text-brand-olive/40 group-hover:text-brand-ink uppercase tracking-widest font-bold transition-colors">Zeige Name...</p>
            </div>
            <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-brand-olive/5 group-hover:bg-brand-olive shadow-sm group-hover:shadow-brand-olive/20 transition-all duration-300">
              <RotateCw className="w-5 h-5 text-brand-olive group-hover:text-white transition-colors" />
            </div>
          </div>
        </div>

        {/* Back */}
        <div className={cn(
          "absolute inset-0 backface-hidden rounded-3xl overflow-hidden bg-brand-olive text-white shadow-xl flex flex-col p-8 rotate-y-180"
        )}>
          <div className="flex-1 flex flex-col justify-center items-center text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
              <Bird className="w-8 h-8 text-white/50" />
            </div>
            <div className="space-y-2">
              <h4 className="text-white/60 text-sm font-semibold uppercase tracking-widest">Deutscher Name / {language.toUpperCase()}</h4>
              <p className="text-4xl font-serif italic">{bird.germanName}</p>
              <p className="text-white/50 text-sm italic font-light">({bird.names[language]})</p>
            </div>
            <div className="h-px w-12 bg-white/20" />
            <p className="text-white/80 leading-relaxed font-light text-sm">
              {bird.description}
            </p>
          </div>
          <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-center">
             <p className="text-sm font-medium text-white/60">Klicke, um Foto anzuzeigen</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Add CSS for flip card
// Normally this would go in index.css but I'll add a style tag or a unique property if needed.
// Perspective and backface-hidden are better as utility classes if possible.
