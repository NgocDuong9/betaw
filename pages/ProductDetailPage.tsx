
import React from 'react';
import { Watch } from '../types';

export const ProductDetailPage: React.FC<{ 
  watch: Watch, 
  onAddToCart: (w: Watch) => void,
  onBack: () => void 
}> = ({ watch, onAddToCart, onBack }) => (
  <div className="max-w-7xl mx-auto py-24 px-6">
    <button onClick={onBack} className="text-[#c5a059] uppercase tracking-widest text-[10px] mb-12 flex items-center group">
      <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span> Back to Collection
    </button>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      <div className="aspect-[4/5] overflow-hidden bg-[#111] border border-white/5">
        <img src={watch.imageUrl} className="w-full h-full object-cover" alt={watch.name} />
      </div>
      
      <div className="flex flex-col justify-center">
        <h4 className="text-[#c5a059] text-sm uppercase tracking-[0.4em] mb-4">{watch.brand}</h4>
        <h1 className="text-5xl font-serif mb-6">{watch.name}</h1>
        <p className="text-3xl font-light mb-8 text-[#c5a059]">${watch.price.toLocaleString()}</p>
        
        <p className="text-gray-400 font-light leading-relaxed mb-12 text-lg">
          {watch.description}
        </p>
        
        <div className="grid grid-cols-2 gap-8 mb-12 border-t border-white/10 pt-12">
          <div>
            <h5 className="text-[10px] uppercase text-gray-500 tracking-widest mb-2">Movement</h5>
            <p className="text-sm">{watch.movement}</p>
          </div>
          <div>
            <h5 className="text-[10px] uppercase text-gray-500 tracking-widest mb-2">Case Size</h5>
            <p className="text-sm">{watch.caseSize}</p>
          </div>
          <div>
            <h5 className="text-[10px] uppercase text-gray-500 tracking-widest mb-2">Category</h5>
            <p className="text-sm">{watch.category}</p>
          </div>
          <div>
            <h5 className="text-[10px] uppercase text-gray-500 tracking-widest mb-2">Reference</h5>
            <p className="text-sm">#BW-{watch.id.slice(0, 4)}</p>
          </div>
        </div>
        
        <button 
          onClick={() => onAddToCart(watch)}
          className="w-full py-5 bg-[#c5a059] text-black font-bold uppercase tracking-[0.2em] text-xs hover:bg-white transition-all"
        >
          Acquire Specimen
        </button>
      </div>
    </div>
  </div>
);
