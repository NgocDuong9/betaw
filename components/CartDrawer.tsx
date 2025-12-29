
import React from 'react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity?: (id: string, delta: number) => void;
  onRemove?: (id: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-[#0a0a0a] border-l border-[#c5a059]/30 p-8 shadow-2xl transition-transform duration-500">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-serif text-[#c5a059]">Your Selection</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-white uppercase text-[10px] tracking-widest">Close</button>
        </div>
        {items.length === 0 ? (
          <p className="text-gray-500 font-light italic">Your vault is currently empty.</p>
        ) : (
          <div className="space-y-6 overflow-y-auto max-h-[70vh] pr-4">
            {items.map(item => (
              <div key={item.id} className="flex space-x-4 border-b border-white/5 pb-6">
                <img src={item.imageUrl} className="w-20 h-24 object-cover border border-white/10" alt={item.name} />
                <div className="flex-1">
                  <h4 className="text-[10px] text-[#c5a059] uppercase tracking-widest">{item.brand}</h4>
                  <h3 className="font-medium text-white">{item.name}</h3>
                  <p className="text-sm text-gray-500">${item.price.toLocaleString()} x {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        {items.length > 0 && (
          <div className="mt-8 border-t border-white/10 pt-8">
            <div className="flex justify-between mb-8">
              <span className="text-gray-500 uppercase text-[10px] tracking-widest">Total Value</span>
              <span className="text-xl font-light text-white">${items.reduce((s, i) => s + i.price * i.quantity, 0).toLocaleString()}</span>
            </div>
            <button className="w-full py-4 bg-[#c5a059] text-black font-bold uppercase text-xs tracking-widest hover:bg-white transition-all">Proceed to Acquisition</button>
          </div>
        )}
      </div>
    </div>
  );
};
