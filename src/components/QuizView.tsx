import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bird, QuizQuestion } from '../types';
import { BIRDS } from '../constants';
import { CheckCircle2, XCircle, RotateCcw, ArrowRight, X } from 'lucide-react';
import { cn } from '../lib/utils';

interface QuizViewProps {
  onBack: () => void;
}

export const QuizView: React.FC<QuizViewProps> = ({ onBack }) => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isFinished, setIsFinished] = useState(false);

  // Initialize quiz
  useEffect(() => {
    const generateQuiz = () => {
      const shuffled = [...BIRDS].sort(() => Math.random() - 0.5);
      const quizQuestions = shuffled.map((bird) => {
        const others = BIRDS.filter((b) => b.id !== bird.id)
          .sort(() => Math.random() - 0.5)
          .slice(0, 3)
          .map((b) => b.germanName);
        
        const options = [...others, bird.germanName].sort(() => Math.random() - 0.5);
        
        return {
          bird,
          options,
          correctAnswer: bird.germanName,
        };
      });
      setQuestions(quizQuestions);
    };

    generateQuiz();
  }, []);

  const handleSelect = (option: string) => {
    if (selectedOption) return;
    setSelectedOption(option);
    if (option === questions[currentIndex].correctAnswer) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((c) => c + 1);
      setSelectedOption(null);
    } else {
      setIsFinished(true);
    }
  };

  const restart = () => {
    const shuffled = [...BIRDS].sort(() => Math.random() - 0.5);
    const quizQuestions = shuffled.map((bird) => {
      const others = BIRDS.filter((b) => b.id !== bird.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map((b) => b.germanName);
      
      const options = [...others, bird.germanName].sort(() => Math.random() - 0.5);
      
      return {
        bird,
        options,
        correctAnswer: bird.germanName,
      };
    });
    setQuestions(quizQuestions);
    setCurrentIndex(0);
    setScore(0);
    setSelectedOption(null);
    setIsFinished(false);
  };

  if (questions.length === 0) return null;

  if (isFinished) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
        <motion.div
           initial={{ scale: 0.95, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           transition={{ duration: 0.3 }}
           className="bg-white p-12 rounded-[3rem] shadow-xl border border-brand-olive/10 max-w-lg w-full"
        >
          <div className="w-20 h-20 rounded-full bg-brand-olive/10 flex items-center justify-center mx-auto mb-6 text-brand-olive font-serif italic text-3xl">
            {Math.round((score / questions.length) * 100)}%
          </div>
          <h2 className="text-4xl font-serif italic mb-2">Quiz Complete</h2>
          <p className="text-brand-olive/60 mb-8">
            You identified {score} out of {questions.length} birds correctly.
          </p>
          
          <div className="flex flex-col gap-4">
            <button
              onClick={restart}
              className="w-full py-4 rounded-2xl bg-brand-olive text-white font-medium flex items-center justify-center gap-2 hover:bg-brand-olive/90 transition-colors"
            >
              <RotateCcw className="w-5 h-5" /> Retry Quiz
            </button>
            <button
              onClick={onBack}
              className="w-full py-4 rounded-2xl bg-white border border-brand-olive/20 text-brand-olive font-medium hover:bg-brand-cream transition-colors"
            >
              Back to Home
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  const current = questions[currentIndex];

  return (
    <div className="max-w-xl mx-auto w-full px-6 py-6 md:py-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-serif italic text-brand-ink">Recall Quiz</h2>
          <p className="text-brand-olive/60 text-sm">Question {currentIndex + 1} of {questions.length}</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="px-3 py-1 rounded-full bg-brand-olive/10 text-brand-olive text-xs font-bold">
            Score: {score}
          </div>
          <button 
            onClick={onBack}
            className="w-10 h-10 rounded-full bg-white border border-brand-olive/10 flex items-center justify-center text-brand-olive hover:bg-brand-cream transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="mb-8 overflow-hidden rounded-3xl aspect-[16/9] shadow-inner bg-brand-olive/5 relative">
        <img 
          src={current.bird.imageUrl} 
          alt="Bird to identify" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-x-0 bottom-0 h-1 bg-brand-olive/10">
          <motion.div 
            className="h-full bg-brand-olive"
            initial={{ width: 0 }}
            animate={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {current.options.map((option) => {
          const isCorrect = option === current.correctAnswer;
          const isSelected = selectedOption === option;
          const showAnswer = selectedOption !== null;

          return (
            <button
              key={option}
              onClick={() => handleSelect(option)}
              disabled={showAnswer}
              className={cn(
                "w-full p-5 rounded-2xl text-left border-2 transition-all duration-300 flex justify-between items-center group",
                !showAnswer && "bg-white border-brand-olive/5 hover:border-brand-olive hover:bg-brand-cream",
                showAnswer && isCorrect && "bg-green-50 border-green-500 text-green-700",
                showAnswer && isSelected && !isCorrect && "bg-red-50 border-red-500 text-red-700",
                showAnswer && !isCorrect && !isSelected && "bg-white border-transparent opacity-40"
              )}
            >
              <span className="font-serif italic text-xl">{option}</span>
              {showAnswer && isCorrect && <CheckCircle2 className="w-6 h-6 text-green-500" />}
              {showAnswer && isSelected && !isCorrect && <XCircle className="w-6 h-6 text-red-500" />}
            </button>
          );
        })}
      </div>

      <div className="mt-8 h-12 flex items-center justify-center">
        <AnimatePresence>
          {selectedOption && (
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              onClick={handleNext}
              className="px-8 py-3 rounded-full bg-brand-olive text-white font-medium flex items-center gap-2 hover:bg-brand-olive/90 transition-colors shadow-lg"
            >
              {currentIndex < questions.length - 1 ? 'Next Question' : 'See Results'}
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
