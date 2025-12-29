
import React from 'react';
import { Watch } from '../types';

export const ProductCard: React.FC<{ watch: Watch, onAddToCart: (w: Watch) => void, onClick: (w: Watch) => void }> = ({ watch, onAddToCart, onClick }) => (
  <div className="bg-[#111] border border-white/5 group overflow-hidden">
    <div className="aspect-[4/5] overflow-hidden cursor-pointer" onClick={() => onClick(watch)}>
      <img src={watch.imageUrl} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={watch.name} />
    </div>
    <div className="p-6">
      <h4 className="text-[#c5a059] text-[10px] uppercase tracking-widest mb-1">{watch.brand}</h4>
      <h3 className="text-lg font-serif mb-4">{watch.name}</h3>
      <div className="flex justify-between items-center">
        <span className="text-gray-400">${watch.price.toLocaleString()}</span>
        <button onClick={() => onAddToCart(watch)} className="text-[#c5a059] text-[10px] uppercase border-b border-[#c5a059]">Add to Cart</button>
      </div>
    </div>
  </div>
);
