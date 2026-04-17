import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Question } from '../types';

interface QuestionBoxProps {
  question: Question;
  timeLeft: number;
  totalTime: number;
  onAnswer: (index: number) => void;
  disabled: boolean;
  selectedAnswer: number | null;
  showFeedback: boolean;
}

export const QuestionBox: React.FC<QuestionBoxProps> = ({
  question,
  timeLeft,
  totalTime,
  onAnswer,
  disabled,
  selectedAnswer,
  showFeedback
}) => {
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);

  // Note: For simplicity and keyboard shortcuts (1-4), we won't shuffle the visual order 
  // but if we did, we'd need to map back to original index. 
  // The user wants 1-4 shortcuts usually corresponding to visual order.
  // I'll keep them as defined in question for easier feedback mapping.

  return (
    <div className="w-full mt-6 bg-slate-800 rounded-xl p-4 md:p-6 border-b-8 border-slate-900 shadow-xl overflow-hidden">
      {/* Header Info */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <div className="flex gap-2">
          <span className="px-3 py-1 bg-blue-600/30 text-blue-400 border border-blue-500/50 rounded-full text-xs font-bold uppercase tracking-wider">
            {question.topic}
          </span>
          <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
            question.difficulty === 'easy' ? 'bg-green-600/30 text-green-400 border border-green-500/50' :
            question.difficulty === 'medium' ? 'bg-yellow-600/30 text-yellow-400 border border-yellow-500/50' :
            'bg-red-600/30 text-red-400 border border-red-500/50'
          }`}>
            {question.difficulty}
          </span>
        </div>
        
        {/* Timer Bar */}
        <div className="flex-1 max-w-[200px] h-3 bg-slate-700 rounded-full overflow-hidden border border-slate-600 relative">
          <motion.div
            className={`h-full ${timeLeft < totalTime * 0.3 ? 'bg-red-500' : 'bg-yellow-500'}`}
            initial={{ width: '100%' }}
            animate={{ width: `${(timeLeft / totalTime) * 100}%` }}
            transition={{ duration: 1, ease: "linear" }}
          />
        </div>
        <span className="text-white font-mono text-sm font-bold min-w-[2ch]">
          {timeLeft}s
        </span>
      </div>

      {/* The Question */}
      <motion.h2 
        key={question.id}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-white text-xl md:text-2xl font-bold leading-tight mb-8"
      >
        {question.text}
      </motion.h2>

      {/* Answer Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {question.options.map((option, index) => {
          let stateClass = "bg-slate-700 hover:bg-slate-600 border-slate-600 text-slate-200";
          
          if (showFeedback) {
            if (index === question.correctAnswerIndex) {
              stateClass = "bg-green-600 border-green-400 text-white animate-pulse";
            } else if (index === selectedAnswer) {
              stateClass = "bg-red-600 border-red-400 text-white";
            } else {
              stateClass = "opacity-50 border-slate-700 bg-slate-800 text-slate-400";
            }
          } else if (selectedAnswer === index) {
            stateClass = "bg-blue-600 border-blue-400 text-white ring-4 ring-blue-400/30";
          }

          return (
            <motion.button
              key={index}
              disabled={disabled}
              whileHover={!disabled ? { scale: 1.02, x: 5 } : {}}
              whileTap={!disabled ? { scale: 0.98 } : {}}
              onClick={() => onAnswer(index)}
              className={`relative flex items-center p-4 rounded-lg border-b-4 text-left transition-all duration-200 group ${stateClass}`}
            >
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded bg-black/20 font-bold mr-3 group-hover:bg-black/30">
                {index + 1}
              </span>
              <span className="font-medium text-sm md:text-base">{option}</span>
            </motion.button>
          );
        })}
      </div>

      {/* Explanation Feedback */}
      <AnimatePresence>
        {showFeedback && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className={`mt-6 p-4 rounded-lg border-l-4 ${
              selectedAnswer === question.correctAnswerIndex 
                ? 'bg-green-900/30 border-green-500 text-green-200' 
                : 'bg-red-900/30 border-red-500 text-red-200'
            }`}
          >
            <p className="font-bold mb-1 uppercase text-xs tracking-widest opacity-80">
              {selectedAnswer === question.correctAnswerIndex ? '✨ Correct Action!' : '❌ Enemy Counters!'}
            </p>
            <p className="text-sm italic">{question.explanation}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-4 flex justify-end text-[10px] text-slate-500 uppercase font-bold tracking-tighter">
        Press 1-4 to answer or Ent for next
      </div>
    </div>
  );
};
