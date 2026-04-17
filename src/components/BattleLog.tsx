import React from 'react';
import { BattleAction } from '../types';

interface BattleLogProps {
  logs: BattleAction[];
}

export const BattleLog: React.FC<BattleLogProps> = ({ logs }) => {
  return (
    <div className="w-full mt-4 bg-slate-900/50 rounded-lg p-3 h-32 overflow-y-auto border border-white/5 scrollbar-hide">
      <div className="flex flex-col gap-1">
        {logs.map((log) => (
          <div 
            key={log.id} 
            className={`text-xs font-mono py-1 px-2 rounded ${
              log.type === 'player' ? 'text-blue-400 bg-blue-400/10' :
              log.type === 'enemy' ? 'text-red-400 bg-red-400/10' :
              'text-slate-400'
            }`}
          >
            <span className="opacity-40 mr-2">[{new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })}]</span>
            {log.text}
          </div>
        ))}
      </div>
    </div>
  );
};
