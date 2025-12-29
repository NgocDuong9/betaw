
import React from 'react';
import { User } from '../types';

interface NavbarProps {
  user: User | null;
  cartCount: number;
  onOpenCart: () => void;
  onLogout: () => void;
  onOpenAuth: () => void;
  onNavigate: (view: any) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  user, cartCount, onOpenCart, onLogout, onOpenAuth, onNavigate 
}) => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#c5a059]/20 px-6 py-4">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <div 
        className="text-2xl font-serif font-bold text-[#c5a059] cursor-pointer tracking-widest"
        onClick={() => onNavigate({ name: 'home' })}
      >
        BETAWATCH
      </div>
      <div className="hidden md:flex space-x-8 items-center text-sm uppercase tracking-tighter font-medium text-gray-300">
        <button onClick={() => onNavigate({ name: 'home' })} className="hover:text-[#c5a059] transition-colors">Home</button>
        <button onClick={() => onNavigate({ name: 'shop' })} className="hover:text-[#c5a059] transition-colors">Collection</button>
        {user?.role === 'admin' && (
          <button onClick={() => onNavigate({ name: 'admin' })} className="hover:text-[#c5a059] transition-colors text-amber-500 font-bold">Admin</button>
        )}
      </div>
      <div className="flex items-center space-x-6">
        <button onClick={onOpenCart} className="relative group">
          <svg className="w-6 h-6 text-gray-300 group-hover:text-[#c5a059] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#c5a059] text-black text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full animate-bounce">
              {cartCount}
            </span>
          )}
        </button>
        {user ? (
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => onNavigate({ name: 'profile' })}
              className="text-xs text-gray-400 hover:text-[#c5a059] transition-colors hidden sm:inline"
            >
              {user.username}
            </button>
            <button 
              onClick={onLogout}
              className="px-4 py-1.5 border border-[#c5a059]/40 text-[#c5a059] text-xs uppercase tracking-widest hover:bg-[#c5a059] hover:text-black transition-all"
            >
              Logout
            </button>
          </div>
        ) : (
          <button 
            onClick={onOpenAuth}
            className="px-4 py-1.5 bg-[#c5a059] text-black text-xs uppercase tracking-widest hover:bg-[#d4b16a] transition-all font-bold"
          >
            Login
          </button>
        )}
      </div>
    </div>
  </nav>
);
