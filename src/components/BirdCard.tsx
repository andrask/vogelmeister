import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bird } from '../types';
import { cn } from '../lib/utils';
import { RotateCw, Info } from 'lucide-react';

interface BirdCardProps {
  bird: Bird;
  className?: string;
}

export const BirdCard: React.FC<BirdCardProps> = ({ bird, className }) => {
  const [isFlipped, setIsFlipped] = useState(false);

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
            <img 
              src={bird.imageUrl} 
              alt={bird.germanName} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-block px-3 py-1 rounded-full bg-brand-olive/90 text-white text-[10px] font-semibold tracking-wider uppercase mb-2">
                {bird.category}
              </span>
              <h3 className="text-3xl font-serif text-white font-medium italic">
                {bird.germanName}
              </h3>
            </div>
          </div>
          <div className="p-6 bg-white flex justify-between items-center">
            <p className="text-brand-olive font-medium">Click to reveal English name</p>
            <RotateCw className="w-5 h-5 text-brand-olive/40" />
          </div>
        </div>

        {/* Back */}
        <div className={cn(
          "absolute inset-0 backface-hidden rounded-3xl overflow-hidden bg-brand-olive text-white shadow-xl flex flex-col p-8 rotate-y-180"
        )}>
          <div className="flex-1 flex flex-col justify-center items-center text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
              <Info className="w-8 h-8 text-white/50" />
            </div>
            <div className="space-y-2">
              <h4 className="text-white/60 text-sm font-semibold uppercase tracking-widest">Scientific / English</h4>
              <p className="text-3xl font-serif italic">{bird.englishName}</p>
            </div>
            <div className="h-px w-12 bg-white/20" />
            <p className="text-white/80 leading-relaxed font-light">
              {bird.description}
            </p>
          </div>
          <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-center">
             <p className="text-sm font-medium text-white/60">Click to show photo</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Add CSS for flip card
// Normally this would go in index.css but I'll add a style tag or a unique property if needed.
// Perspective and backface-hidden are better as utility classes if possible.
