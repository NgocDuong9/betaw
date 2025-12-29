
import React from 'react';
import { Watch } from '../types';

interface ProductCardProps {
  watch: Watch;
  onAddToCart: (w: Watch) => void;
  onClick: (w: Watch) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ watch, onAddToCart, onClick }) => (
  <div className="group bg-[#111] border border-white/5 overflow-hidden transition-all duration-500 hover:border-[#c5a059]/40">
    <div className="aspect-[4/5] overflow-hidden relative cursor-pointer" onClick={() => onClick(watch)}>
      <img 
        src={watch.imageUrl} 
        alt={watch.name} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
      />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2">
        <button 
          onClick={(e) => { e.stopPropagation(); onAddToCart(watch); }}
          className="px-6 py-2 bg-[#c5a059] text-black font-bold uppercase text-xs tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-all"
        >
          Add to Cart
        </button>
      </div>
    </div>
    <div className="p-6">
      <div className="flex justify-between items-start mb-2 cursor-pointer" onClick={() => onClick(watch)}>
        <div>
          <h4 className="text-[#c5a059] text-[10px] uppercase tracking-widest mb-1">{watch.brand}</h4>
          <h3 className="text-lg font-serif font-medium hover:text-[#c5a059] transition-colors">{watch.name}</h3>
        </div>
        <span className="text-lg font-light">${watch.price.toLocaleString()}</span>
      </div>
      <p className="text-gray-500 text-xs line-clamp-2 font-light">{watch.description}</p>
    </div>
  </div>
);
