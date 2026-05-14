import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bird as BirdType, Language } from '../types';
import { cn } from '../lib/utils';
import { RotateCw, Bird, ChevronLeft, ChevronRight, CheckCircle2, AlertCircle, Eye, EyeOff, Info, X, ExternalLink } from 'lucide-react';
import { getBirdStatus, getStats } from '../lib/stats';

interface BirdCardProps {
  bird: BirdType;
  language: Language;
  className?: string;
}

export const BirdCard: React.FC<BirdCardProps> = ({ bird, language, className }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);
  const [showNameOnFront, setShowNameOnFront] = useState(false);
  const [showStatusInfo, setShowStatusInfo] = useState(false);

  const status = getBirdStatus(bird.id);
  const stats = getStats()[bird.id] || { correct: 0, incorrect: 0 };

  const nextImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImgIndex((prev) => (prev + 1) % bird.imageUrls.length);
  };

  const prevImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImgIndex((prev) => (prev - 1 + bird.imageUrls.length) % bird.imageUrls.length);
  };

  const toggleNameVisibility = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowNameOnFront(!showNameOnFront);
  };

  const openStatusInfo = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowStatusInfo(true);
  };

  const fallbackUrl = `https://www.vogelwarte.ch/de/vogel-der-schweiz/${bird.germanName.toLowerCase()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/\s+/g, '-')}`;

  const vogelwarteUrl = bird.vogelwarteUrl || fallbackUrl;

  return (
    <div 
      className={cn("relative w-full aspect-[4/5] md:aspect-[3/4] cursor-pointer group perspective-1000", className)}
    >
      {/* Status Info Modal */}
      <AnimatePresence>
        {showStatusInfo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 bg-brand-ink/80 backdrop-blur-md rounded-3xl p-6 flex flex-col justify-center text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setShowStatusInfo(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="flex flex-col items-center text-center">
              <div className={cn(
                "w-16 h-16 rounded-full flex items-center justify-center mb-4",
                status === 'known' ? "bg-green-500/20 text-green-400" : "bg-orange-500/20 text-orange-400"
              )}>
                {status === 'known' ? <CheckCircle2 className="w-8 h-8" /> : <AlertCircle className="w-8 h-8" />}
              </div>
              <h3 className="text-xl font-serif italic mb-2">
                {status === 'known' ? 'Status: Gelernt' : 'Status: Verwechselt'}
              </h3>
              <p className="text-sm text-white/70 mb-6">
                {status === 'known' 
                  ? 'Du hast diesen Vogel bereits mehrmals richtig erkannt. Er gilt als gelernt.' 
                  : 'Dieser Vogel wurde im Quiz verwechselt. Übe ihn weiter, um ihn sicher zu erkennen.'}
              </p>
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="bg-white/5 rounded-2xl p-4">
                  <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Richtig</p>
                  <p className="text-2xl font-serif">{stats.correct}</p>
                </div>
                <div className="bg-white/5 rounded-2xl p-4">
                  <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Falsch</p>
                  <p className="text-2xl font-serif">{stats.incorrect}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="w-full h-full relative preserve-3d will-change-transform"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front */}
        <div className={cn(
          "absolute inset-0 backface-hidden rounded-3xl overflow-hidden bg-white shadow-lg border border-brand-olive/10 flex flex-col"
        )}>
          <div className="relative flex-1 overflow-hidden">
            {/* Status Badge */}
            {!isFlipped && status !== 'new' && (
              <div className="absolute top-4 left-4 z-10">
                <motion.button 
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  onClick={openStatusInfo}
                  whileHover={{ scale: 1.05 }}
                  className={cn(
                    "flex items-center gap-1.5 px-3 py-1.5 rounded-full backdrop-blur-md text-[10px] font-bold uppercase tracking-widest transition-all",
                    status === 'known' ? "bg-green-500/20 text-green-600 border border-green-500/30 hover:bg-green-500/40" : "bg-orange-500/20 text-orange-600 border border-orange-500/30 hover:bg-orange-500/40"
                  )}
                >
                  {status === 'known' ? (
                    <><CheckCircle2 className="w-3 h-3" /> Gelernt</>
                  ) : (
                    <><AlertCircle className="w-3 h-3" /> Verwechselt</>
                  )}
                  <Info className="w-2.5 h-2.5 ml-0.5 opacity-50" />
                </motion.button>
              </div>
            )}

            <AnimatePresence mode="wait">
              <motion.img 
                key={imgIndex}
                src={bird.imageUrls[imgIndex]} 
                alt={bird.germanName} 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
                loading="eager"
              />
            </AnimatePresence>

            {bird.imageUrls.length > 1 && (
              <div className="absolute inset-0 flex items-center justify-between px-4 transition-opacity">
                <button 
                  onClick={prevImg}
                  className="w-8 h-8 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/40 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={nextImg}
                  className="w-8 h-8 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/40 transition-colors"
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
          <div className="py-4 px-6 bg-white flex items-center gap-3 w-full">
            {!isFlipped && (
              <button 
                onClick={toggleNameVisibility}
                className={cn(
                  "flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all",
                  showNameOnFront ? "bg-brand-olive text-white shadow-sm" : "bg-brand-olive/5 text-brand-olive hover:bg-brand-olive/10"
                )}
                title={showNameOnFront ? "Name ausblenden" : "Name einblenden"}
              >
                {showNameOnFront ? <Eye className="w-4.5 h-4.5" /> : <EyeOff className="w-4.5 h-4.5" />}
              </button>
            )}
            <div className="flex-1 text-center">
              {showNameOnFront ? (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center"
                >
                  <p className="text-base font-serif italic text-brand-ink leading-tight">{bird.germanName}</p>
                  <p className="text-[9px] text-brand-olive/40 font-semibold uppercase tracking-widest leading-tight">({bird.names[language]})</p>
                </motion.div>
              ) : (
                <p className="text-[10px] text-brand-olive/40 group-hover:text-brand-ink uppercase tracking-widest font-bold transition-colors">Zeige Name...</p>
              )}
            </div>
            <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-brand-olive/5 group-hover:bg-brand-olive shadow-sm group-hover:shadow-brand-olive/20 transition-all duration-300">
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
            <div className="pt-4">
              <a 
                href={vogelwarteUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 text-[10px] font-bold tracking-widest uppercase transition-all"
              >
                Vogelwarte.ch <ExternalLink className="w-3 h-3" />
              </a>
            </div>
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
