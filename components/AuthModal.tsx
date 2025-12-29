
import React, { useState } from 'react';
import { User } from '../types';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (u: User) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onLogin }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />
      <div className="relative bg-[#111] border border-[#c5a059]/30 p-12 max-w-md w-full animate-fade-in">
        <h2 className="text-3xl font-serif text-[#c5a059] mb-8 text-center">Member Entrance</h2>
        <div className="space-y-6">
          <input className="w-full bg-black border border-white/10 px-4 py-3 text-sm focus:border-[#c5a059] outline-none transition-colors text-white" placeholder="Email Address" defaultValue="member@betawatch.com" />
          <input className="w-full bg-black border border-white/10 px-4 py-3 text-sm focus:border-[#c5a059] outline-none transition-colors text-white" placeholder="Password" type="password" defaultValue="password" />
          <button 
            onClick={() => onLogin({ id: '1', username: 'Member', email: 'member@betawatch.com', role: 'admin' })}
            className="w-full py-4 bg-[#c5a059] text-black font-bold uppercase text-xs tracking-widest hover:bg-white transition-all"
          >
            Authenticate
          </button>
        </div>
      </div>
    </div>
  );
};
