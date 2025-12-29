
import React from 'react';
import { Watch } from '../types';

export const HomePage: React.FC<{ 
  watches: Watch[], 
  onAddToCart: (w: Watch) => void,
  onNavigate: (v: any) => void
}> = ({ watches, onAddToCart, onNavigate }) => (
  <div className="pt-20">
    <section className="h-[70vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-6xl md:text-8xl font-serif mb-6 animate-fade-in">Timeless Heritage</h1>
      <p className="text-gray-400 max-w-xl mx-auto mb-10 font-light">Explore our curated collection of horological masterpieces from the world's most prestigious houses.</p>
      <button onClick={() => onNavigate({ name: 'shop' })} className="px-10 py-4 bg-[#c5a059] text-black uppercase text-xs font-bold tracking-widest hover:bg-white transition-all">Explore Collection</button>
    </section>

    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-[#c5a059] text-[10px] uppercase tracking-[0.5em] mb-12 text-center">Featured Specimens</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {watches.map(w => (
          <div key={w.id} className="group bg-[#111] border border-white/5 p-4 transition-all hover:border-[#c5a059]/30">
            <div className="aspect-square overflow-hidden mb-6 cursor-pointer" onClick={() => onNavigate({ name: 'detail', params: w })}>
              <img src={w.imageUrl} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={w.name} />
            </div>
            <h4 className="text-[#c5a059] text-[10px] uppercase tracking-widest mb-1">{w.brand}</h4>
            <h3 className="text-lg font-serif mb-4">{w.name}</h3>
            <div className="flex justify-between items-center">
              <span className="text-gray-400 font-light">${w.price.toLocaleString()}</span>
              <button onClick={() => onAddToCart(w)} className="text-[10px] uppercase tracking-widest text-[#c5a059] border-b border-[#c5a059] pb-1">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);
