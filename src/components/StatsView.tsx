import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, CheckCircle2, AlertCircle, HelpCircle, BarChart3, Search, RefreshCcw, Trash2, X, AlertTriangle } from 'lucide-react';
import { BIRDS } from '../constants';
import { getBirdStatus, getStats, resetStats } from '../lib/stats';
import { Bird, Language } from '../types';
import { cn } from '../lib/utils';

interface StatsViewProps {
  onBack: () => void;
  language: Language;
}

export const StatsView: React.FC<StatsViewProps> = ({ onBack, language }) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [showResetConfirm, setShowResetConfirm] = React.useState(false);
  const [revision, setRevision] = React.useState(0);
  
  const stats = React.useMemo(() => getStats(), [revision]);
  
  const birdStatusList = React.useMemo(() => BIRDS.map(bird => ({
    bird,
    status: getBirdStatus(bird.id),
    counts: stats[bird.id] || { correct: 0, incorrect: 0 }
  })), [stats, language]);

  const counts = React.useMemo(() => ({
    known: birdStatusList.filter(b => b.status === 'known').length,
    mistaken: birdStatusList.filter(b => b.status === 'mistaken').length,
    new: birdStatusList.filter(b => b.status === 'new').length,
  }), [birdStatusList]);

  const filteredBirds = React.useMemo(() => birdStatusList.filter(b => 
    b.bird.germanName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    b.bird.names[language].toLowerCase().includes(searchTerm.toLowerCase())
  ), [birdStatusList, searchTerm, language]);

  const total = BIRDS.length;

  const handleReset = () => {
    resetStats();
    setRevision(prev => prev + 1);
    setShowResetConfirm(false);
  };

  return (
    <div className="min-h-screen bg-brand-cream text-brand-ink pb-12">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-brand-cream/80 backdrop-blur-md border-b border-brand-olive/10 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-brand-olive hover:text-brand-ink transition-colors font-medium"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Zurück</span>
          </button>
          <div className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-brand-olive" />
            <h1 className="text-xl font-serif italic font-bold">Lernstatus</h1>
          </div>
          <div className="flex items-center justify-end w-20">
            <button 
              onClick={() => setShowResetConfirm(true)}
              className="p-2 rounded-full hover:bg-brand-olive/5 text-brand-olive/40 hover:text-red-500 transition-colors"
              title="Statistik zurücksetzen"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 pt-8">
        {/* Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl p-6 shadow-sm border border-brand-olive/5 flex flex-col items-center text-center"
          >
            <div className="w-12 h-12 rounded-full bg-green-50 text-green-600 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <p className="text-4xl font-serif italic mb-1">{counts.known}</p>
            <p className="text-xs uppercase tracking-widest font-bold text-brand-olive/60">Gelernt</p>
            <p className="text-[10px] text-brand-olive/40 mt-2">{Math.round((counts.known/total)*100)}% der Vögel</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-3xl p-6 shadow-sm border border-brand-olive/5 flex flex-col items-center text-center"
          >
            <div className="w-12 h-12 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center mb-4">
              <AlertCircle className="w-6 h-6" />
            </div>
            <p className="text-4xl font-serif italic mb-1">{counts.mistaken}</p>
            <p className="text-xs uppercase tracking-widest font-bold text-brand-olive/60">Verwechselt</p>
            <p className="text-[10px] text-brand-olive/40 mt-2">Dranbleiben!</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-6 shadow-sm border border-brand-olive/5 flex flex-col items-center text-center"
          >
            <div className="w-12 h-12 rounded-full bg-brand-olive/5 text-brand-olive flex items-center justify-center mb-4">
              <HelpCircle className="w-6 h-6" />
            </div>
            <p className="text-4xl font-serif italic mb-1">{counts.new}</p>
            <p className="text-xs uppercase tracking-widest font-bold text-brand-olive/60">Noch offen</p>
            <p className="text-[10px] text-brand-olive/40 mt-2">{counts.new} Vögel ungetestet</p>
          </motion.div>
        </div>

        {/* Detailed Table */}
        <div className="bg-white rounded-3xl shadow-sm border border-brand-olive/5 overflow-hidden">
          <div className="p-6 border-b border-brand-olive/5 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h2 className="text-lg font-serif italic text-brand-ink">Detaillierte Übersicht</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-olive/40" />
              <input 
                type="text" 
                placeholder="Vogel suchen..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 bg-brand-olive/5 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-brand-olive/20 w-full md:w-64"
              />
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-brand-olive/[0.02] text-[10px] uppercase tracking-widest font-bold text-brand-olive/60">
                  <th className="px-6 py-4">Vogel</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-center">Richtig</th>
                  <th className="px-6 py-4 text-center">Falsch</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-olive/5">
                {filteredBirds.map(({ bird, status, counts }) => (
                  <tr key={bird.id} className="hover:bg-brand-olive/[0.01] transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img 
                          src={bird.imageUrls[0]} 
                          alt="" 
                          className="w-10 h-10 rounded-lg object-cover bg-brand-olive/5"
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <p className="font-serif italic leading-tight">{bird.germanName}</p>
                          <p className="text-[10px] text-brand-olive/40 uppercase tracking-widest font-bold leading-tight mt-0.5">{bird.names[language]}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className={cn(
                        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border",
                        status === 'known' ? "bg-green-50 text-green-600 border-green-100" : 
                        status === 'mistaken' ? "bg-orange-50 text-orange-600 border-orange-100" :
                        "bg-brand-olive/5 text-brand-olive/40 border-brand-olive/5"
                      )}>
                        {status === 'known' ? <CheckCircle2 className="w-3 h-3" /> : 
                         status === 'mistaken' ? <AlertCircle className="w-3 h-3" /> :
                         <HelpCircle className="w-3 h-3" />}
                        {status === 'known' ? 'Gelernt' : status === 'mistaken' ? 'Verwechselt' : 'Neu'}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center font-serif">{counts.correct}</td>
                    <td className="px-6 py-4 text-center font-serif">{counts.incorrect}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {filteredBirds.length === 0 && (
            <div className="p-12 text-center">
              <p className="text-brand-olive/40 italic">Keine Vögel passend zur Suche gefunden.</p>
            </div>
          )}
        </div>
      </main>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {showResetConfirm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowResetConfirm(false)}
              className="absolute inset-0 bg-brand-ink/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-sm bg-white rounded-[2rem] p-8 shadow-2xl text-center"
            >
              <div className="w-16 h-16 rounded-full bg-red-50 text-red-500 flex items-center justify-center mx-auto mb-6">
                <AlertTriangle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif italic mb-3">Statistik zurücksetzen?</h3>
              <p className="text-brand-olive/60 text-sm leading-relaxed mb-8">
                Dein gesamter Lernfortschritt wird unwiderruflich gelöscht. Möchtest du wirklich von vorne beginnen?
              </p>
              <div className="flex flex-col gap-3">
                <button 
                  onClick={handleReset}
                  className="w-full py-4 rounded-2xl bg-red-500 text-white font-bold uppercase tracking-widest text-xs hover:bg-red-600 transition-colors flex items-center justify-center gap-2"
                >
                  <RefreshCcw className="w-4 h-4" />
                  Ja, alles löschen
                </button>
                <button 
                  onClick={() => setShowResetConfirm(false)}
                  className="w-full py-4 rounded-2xl bg-brand-olive/5 text-brand-olive font-bold uppercase tracking-widest text-xs hover:bg-brand-olive/10 transition-colors"
                >
                  Abbrechen
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
