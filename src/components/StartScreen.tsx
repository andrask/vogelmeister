import React from 'react';
import { motion } from 'motion/react';
import { Bird, GraduationCap, PlayCircle, BookOpen } from 'lucide-react';
import { AppState, Language } from '../types';

interface StartScreenProps {
  onStart: (mode: AppState) => void;
  language: Language;
}

const LANGUAGES: Record<string, { label: string; flag: string }> = {
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

export const StartScreen: React.FC<StartScreenProps> = ({ onStart, language }) => {
  const currentLang = LANGUAGES[language as string] || LANGUAGES.en;
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] md:min-h-[80vh] px-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-8 md:mb-12"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-brand-olive text-white mb-4 md:mb-6 shadow-lg">
          <Bird className="w-8 h-8 md:w-10 md:h-10" />
        </div>
        <h1 className="text-5xl md:text-7xl font-serif italic text-brand-ink mb-2 md:mb-4 font-medium">
          VogelMeister
        </h1>
        <p className="text-base md:text-lg text-brand-olive/70 max-w-md mx-auto leading-relaxed">
          Der elegante Weg, mitteleuropäische Vogelnamen auf Deutsch zu meistern.
        </p>
      </motion.div>

      {/* Language Display */}
      <div className="mb-12">
        <button
          onClick={() => onStart('LanguageSelection')}
          className="group px-6 py-3 rounded-full bg-white border border-brand-olive/10 shadow-sm hover:shadow-md transition-all flex items-center gap-3 mx-auto"
        >
          <span className="text-xl">{currentLang.flag}</span>
          <div className="text-left">
            <p className="text-[10px] font-bold uppercase tracking-widest text-brand-olive/40 leading-none mb-1">Zweite Sprache</p>
            <p className="font-semibold text-sm text-brand-olive group-hover:text-brand-ink">{currentLang.label}</p>
          </div>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full max-w-3xl">
        <motion.button
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onStart('Study')}
          className="group flex flex-col items-start p-6 md:p-8 rounded-3xl bg-white border border-brand-olive/10 shadow-xl shadow-brand-olive/5 text-left transition-all hover:border-brand-olive/30"
        >
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-brand-olive/10 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-brand-olive group-hover:text-white transition-colors">
            <BookOpen className="w-5 h-5 md:w-6 h-6" />
          </div>
          <h2 className="text-xl md:text-2xl font-serif italic mb-1 md:mb-2">Lernkarten</h2>
          <p className="text-brand-ink/60 text-xs md:text-sm">
            Mache dich mit Namen und Fotos vertraut. Ganz ohne Druck, einfach lernen.
          </p>
        </motion.button>

        <motion.button
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onStart('Quiz')}
          className="group flex flex-col items-start p-6 md:p-8 rounded-3xl bg-brand-olive shadow-xl shadow-brand-olive/20 text-left transition-all hover:bg-brand-olive/90"
        >
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-4 md:mb-6 text-white group-hover:bg-white group-hover:text-brand-olive transition-colors">
            <GraduationCap className="w-5 h-5 md:w-6 h-6" />
          </div>
          <h2 className="text-xl md:text-2xl font-serif italic mb-1 md:mb-2 text-white">Erinnerungs-Quiz</h2>
          <p className="text-white/70 text-xs md:text-sm">
            Teste dein Wissen. Sieh einen Vogel, wähle den richtigen deutschen Namen.
          </p>
        </motion.button>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-8 md:mt-16 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-brand-olive/40"
      >
        <div className="h-px w-8 bg-brand-olive/20" />
        Erkunde die Voliere
        <div className="h-px w-8 bg-brand-olive/20" />
      </motion.div>
    </div>
  );
};
