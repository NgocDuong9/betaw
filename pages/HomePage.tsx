
import React from 'react';
import { Watch } from '../types';
import { ProductCard } from '../components/ProductCard';

export const HomePage: React.FC<{ 
  watches: Watch[], 
  onAddToCart: (w: Watch) => void,
  onNavigate: (v: any) => void
}> = ({ watches, onAddToCart, onNavigate }) => (
  <>
    <div className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1619134778706-7015533a6150?q=80&w=2000&auto=format&fit=crop" 
          className="w-full h-full object-cover opacity-30 scale-105 animate-slow-zoom"
          alt="Hero"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/20 via-[#0a0a0a]/60 to-[#0a0a0a]"></div>
      </div>
      <div className="relative z-10 text-center max-w-4xl px-6">
        <h2 className="text-[#c5a059] uppercase tracking-[0.6em] text-[10px] mb-6 animate-fade-in">Excellence in every second</h2>
        <h1 className="text-6xl md:text-9xl font-serif font-light mb-8 leading-tight tracking-tighter">BETAWATCH</h1>
        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          The sanctuary for world-class horological specimens. Curated for the few who value timelessness over time.
        </p>
        <button 
          onClick={() => onNavigate({ name: 'shop' })}
          className="px-12 py-5 bg-[#c5a059] text-black hover:bg-white transition-all duration-500 uppercase tracking-widest text-xs font-bold"
        >
          View Collection
        </button>
      </div>
    </div>

    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-center mb-16">
        <h4 className="text-[#c5a059] text-[10px] uppercase tracking-[0.4em] mb-4">The Selection</h4>
        <h2 className="text-4xl font-serif">Featured Specimens</h2>
        <div className="h-px w-20 bg-[#c5a059] mt-6 opacity-40"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {watches.slice(0, 3).map(w => (
          <ProductCard 
            key={w.id} 
            watch={w} 
            onAddToCart={onAddToCart} 
            onClick={(watch) => onNavigate({ name: 'detail', params: watch })}
          />
        ))}
      </div>
    </section>
  </>
);
