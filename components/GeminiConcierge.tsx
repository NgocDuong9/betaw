
import React, { useState } from 'react';
import { Watch } from '../types';
import { getWatchRecommendations } from '../services/gemini';

export const GeminiConcierge: React.FC<{ watches: Watch[] }> = ({ watches }) => {
  const [prompt, setPrompt] = useState('');
  const [res, setRes] = useState('');
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleAsk = async () => {
    if (!prompt) return;
    setLoading(true);
    const result = await getWatchRecommendations(prompt, watches);
    setRes(result || '');
    setLoading(false);
  };

  if (!isOpen) return (
    <button 
      onClick={() => setIsOpen(true)}
      className="fixed bottom-8 right-8 z-40 w-12 h-12 bg-[#c5a059] rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
    >
      <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    </button>
  );

  return (
    <div className="fixed bottom-8 right-8 z-40 animate-fade-in">
      <div className="bg-[#111] border border-[#c5a059]/30 w-80 p-6 shadow-2xl relative">
        <button onClick={() => setIsOpen(false)} className="absolute top-2 right-2 text-gray-500 hover:text-white">&times;</button>
        <h4 className="text-[#c5a059] text-[10px] uppercase tracking-widest mb-4 font-bold">AI Concierge</h4>
        <div className="space-y-4">
          <textarea 
            className="w-full bg-black border border-white/5 p-3 text-xs focus:border-[#c5a059] outline-none h-24 resize-none text-white font-light"
            placeholder="Describe your ideal timepiece..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button 
            onClick={handleAsk}
            disabled={loading}
            className="w-full py-2 bg-[#c5a059] text-black text-[10px] font-bold uppercase tracking-widest disabled:opacity-50 transition-opacity"
          >
            {loading ? 'Consulting Archives...' : 'Get Recommendation'}
          </button>
          {res && (
            <div className="mt-4 text-[11px] text-gray-400 leading-relaxed max-h-40 overflow-y-auto border-t border-white/5 pt-4 italic font-light">
              {res}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
