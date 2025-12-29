
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

export const Navbar: React.FC<NavbarProps> = ({ user, cartCount, onOpenCart, onLogout, onOpenAuth, onNavigate }) => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5 px-6 py-4">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <div onClick={() => onNavigate({ name: 'home' })} className="text-xl font-serif text-[#c5a059] cursor-pointer tracking-widest font-bold">BETAWATCH</div>
      <div className="flex items-center space-x-6">
        <button onClick={onOpenCart} className="text-gray-400 text-xs uppercase tracking-widest relative">
          Cart ({cartCount})
        </button>
        {user ? (
          <button onClick={onLogout} className="text-[#c5a059] text-xs uppercase tracking-widest">Logout</button>
        ) : (
          <button onClick={onOpenAuth} className="bg-[#c5a059] text-black px-4 py-1 text-xs uppercase font-bold tracking-widest">Login</button>
        )}
      </div>
    </div>
  </nav>
);
