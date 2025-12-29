
import React, { useState } from 'react';
import { Watch } from '../types';

export const ProductDetailPage: React.FC<{ 
  watch: Watch, 
  onAddToCart: (w: Watch, qty: number) => void,
  onBack: () => void 
}> = ({ watch, onAddToCart, onBack }) => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity(prev => prev + 1);
  const decrement = () => setQuantity(prev => Math.max(1, prev - 1));

  return (
    <div className="max-w-7xl mx-auto py-24 px-6 animate-fade-in">
      <button onClick={onBack} className="text-[#c5a059] uppercase tracking-widest text-[10px] mb-12 flex items-center group">
        <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span> Back to Collection
      </button>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="aspect-[4/5] overflow-hidden bg-[#111] border border-white/5 shadow-2xl">
          <img src={watch.imageUrl} className="w-full h-full object-cover" alt={watch.name} />
        </div>
        
        <div className="flex flex-col justify-center">
          <h4 className="text-[#c5a059] text-sm uppercase tracking-[0.4em] mb-4">{watch.brand}</h4>
          <h1 className="text-5xl font-serif mb-6 text-white">{watch.name}</h1>
          <p className="text-3xl font-light mb-8 text-[#c5a059]">${watch.price.toLocaleString()}</p>
          
          <p className="text-gray-400 font-light leading-relaxed mb-12 text-lg">
            {watch.description}
          </p>
          
          <div className="flex flex-col space-y-6 mb-12 border-t border-white/10 pt-12">
            <div className="flex items-center space-x-6">
              <div className="flex items-center border border-white/10 bg-black h-14">
                <button 
                  onClick={decrement}
                  className="px-6 h-full text-gray-400 hover:text-[#c5a059] transition-colors text-lg"
                >
                  -
                </button>
                <span className="w-12 text-center text-sm font-medium text-white">{quantity}</span>
                <button 
                  onClick={increment}
                  className="px-6 h-full text-gray-400 hover:text-[#c5a059] transition-colors text-lg"
                >
                  +
                </button>
              </div>
              <button 
                onClick={() => onAddToCart(watch, quantity)}
                className="flex-1 py-4 bg-[#c5a059] text-black font-bold uppercase tracking-[0.2em] text-xs hover:bg-white transition-all h-14"
              >
                Acquire Specimen
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
            <div>
              <h5 className="text-[10px] uppercase text-gray-500 tracking-widest mb-2 font-bold">Movement</h5>
              <p className="text-sm text-gray-300 font-light">{watch.movement}</p>
            </div>
            <div>
              <h5 className="text-[10px] uppercase text-gray-500 tracking-widest mb-2 font-bold">Case Size</h5>
              <p className="text-sm text-gray-300 font-light">{watch.caseSize}</p>
            </div>
            <div>
              <h5 className="text-[10px] uppercase text-gray-500 tracking-widest mb-2 font-bold">Category</h5>
              <p className="text-sm text-gray-300 font-light">{watch.category}</p>
            </div>
            <div>
              <h5 className="text-[10px] uppercase text-gray-500 tracking-widest mb-2 font-bold">Reference</h5>
              <p className="text-sm text-gray-300 font-light">#BW-{watch.id.slice(0, 4)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
