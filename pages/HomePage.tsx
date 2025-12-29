
import React from 'react';
import { Watch } from '../types';
import { ProductCard } from '../components/ProductCard';

export const HomePage: React.FC<{ 
  watches: Watch[], 
  onAddToCart: (w: Watch, qty?: number) => void,
  onNavigate: (v: any) => void
}> = ({ watches, onAddToCart, onNavigate }) => (
  <div className="overflow-x-hidden">
    {/* HERO SECTION */}
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1619134778706-7015533a6150?q=80&w=2000&auto=format&fit=crop" 
          className="w-full h-full object-cover opacity-30 scale-105 animate-slow-zoom"
          alt="Hero Background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/20 via-[#0a0a0a]/60 to-[#0a0a0a]"></div>
      </div>
      <div className="relative z-10 text-center max-w-4xl px-6">
        <h2 className="text-[#c5a059] uppercase tracking-[0.8em] text-[10px] mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>Excellence in every second</h2>
        <h1 className="text-7xl md:text-9xl font-serif font-light mb-10 leading-tight tracking-tighter animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>BETAWATCH</h1>
        <p className="text-gray-400 text-lg mb-14 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
          The sanctuary for world-class horological specimens. Curated for the few who value timelessness over time.
        </p>
        <button 
          onClick={() => onNavigate({ name: 'shop' })}
          className="px-14 py-6 bg-[#c5a059] text-black hover:bg-white transition-all duration-700 uppercase tracking-[0.3em] text-[10px] font-bold shadow-2xl animate-fade-in opacity-0"
          style={{ animationDelay: '0.8s' }}
        >
          Explore Collection
        </button>
      </div>
    </div>

    {/* BRAND SHOWCASE */}
    <section className="bg-black py-16 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          <span className="text-xl font-serif tracking-widest text-white">ROLEX</span>
          <span className="text-xl font-serif tracking-widest text-white">PATEK PHILIPPE</span>
          <span className="text-xl font-serif tracking-widest text-white">AUDEMARS PIGUET</span>
          <span className="text-xl font-serif tracking-widest text-white">OMEGA</span>
          <span className="text-xl font-serif tracking-widest text-white">CARTIER</span>
        </div>
      </div>
    </section>

    {/* FEATURED SPECIMENS */}
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-center mb-24">
        <h4 className="text-[#c5a059] text-[10px] uppercase tracking-[0.4em] mb-4">Curated Selection</h4>
        <h2 className="text-5xl font-serif text-white text-center">Featured Masterpieces</h2>
        <div className="h-px w-24 bg-[#c5a059] mt-8 opacity-40"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {watches.slice(0, 3).map(w => (
          <ProductCard 
            key={w.id} 
            watch={w} 
            onAddToCart={onAddToCart} 
            onClick={(watch) => onNavigate({ name: 'detail', params: watch })}
          />
        ))}
      </div>
      <div className="mt-20 text-center">
        <button 
          onClick={() => onNavigate({ name: 'shop' })}
          className="text-[#c5a059] uppercase tracking-[0.4em] text-[10px] border-b border-[#c5a059]/40 pb-2 hover:border-[#c5a059] transition-all"
        >
          View Full Inventory
        </button>
      </div>
    </section>

    {/* HERITAGE SECTION */}
    <section className="bg-[#050505] py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="relative group">
          <div className="absolute -inset-4 border border-[#c5a059]/20 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-700"></div>
          <img 
            src="https://images.unsplash.com/photo-1508685096489-7aac291ba597?q=80&w=1200&auto=format&fit=crop" 
            alt="Heritage" 
            className="relative z-10 grayscale hover:grayscale-0 transition-all duration-1000"
          />
        </div>
        <div className="space-y-8">
          <h4 className="text-[#c5a059] text-[10px] uppercase tracking-[0.5em]">The Betawatch Legacy</h4>
          <h2 className="text-5xl font-serif leading-tight">Born from a passion for precision.</h2>
          <p className="text-gray-400 font-light leading-relaxed text-lg">
            Since our inception, Betawatch has been more than a dealer. We are custodians of history. 
            Every timepiece in our vault undergoes a rigorous 40-point verification by our master horologists.
          </p>
          <p className="text-gray-500 font-light italic">
            "Time is the ultimate luxury, but a watch is the ultimate legacy."
          </p>
          <div className="pt-8">
            <button className="px-10 py-4 border border-white/10 hover:border-[#c5a059] text-white text-[10px] uppercase tracking-widest transition-all">
              Our Story
            </button>
          </div>
        </div>
      </div>
    </section>

    {/* CATEGORIES GRID */}
    <section className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            onClick={() => onNavigate({ name: 'shop' })}
            className="group relative h-[500px] overflow-hidden cursor-pointer bg-[#111]"
          >
            <img src="https://images.unsplash.com/photo-1547996160-81dfa63595dd?q=80&w=800" className="w-full h-full object-cover opacity-50 group-hover:scale-110 group-hover:opacity-70 transition-all duration-1000" alt="Sport" />
            <div className="absolute inset-0 flex flex-col justify-end p-10 bg-gradient-to-t from-black to-transparent">
              <h3 className="text-3xl font-serif mb-2">Sport</h3>
              <p className="text-[#c5a059] text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">Peak Performance</p>
            </div>
          </div>
          <div 
            onClick={() => onNavigate({ name: 'shop' })}
            className="group relative h-[500px] overflow-hidden cursor-pointer bg-[#111] md:mt-12"
          >
            <img src="https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=800" className="w-full h-full object-cover opacity-50 group-hover:scale-110 group-hover:opacity-70 transition-all duration-1000" alt="Luxury" />
            <div className="absolute inset-0 flex flex-col justify-end p-10 bg-gradient-to-t from-black to-transparent">
              <h3 className="text-3xl font-serif mb-2">Luxury</h3>
              <p className="text-[#c5a059] text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">Unrivaled Refinement</p>
            </div>
          </div>
          <div 
            onClick={() => onNavigate({ name: 'shop' })}
            className="group relative h-[500px] overflow-hidden cursor-pointer bg-[#111]"
          >
            <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800" className="w-full h-full object-cover opacity-50 group-hover:scale-110 group-hover:opacity-70 transition-all duration-1000" alt="Classic" />
            <div className="absolute inset-0 flex flex-col justify-end p-10 bg-gradient-to-t from-black to-transparent">
              <h3 className="text-3xl font-serif mb-2">Classic</h3>
              <p className="text-[#c5a059] text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">Timeless Appeal</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* CRAFTSMANSHIP FOCUS */}
    <section className="py-40 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h4 className="text-[#c5a059] text-[10px] uppercase tracking-[0.5em] mb-12">Horological Artistry</h4>
        <h2 className="text-6xl font-serif mb-16 leading-tight">Every movement is a masterpiece of engineering.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-left">
          <div className="space-y-4">
            <span className="text-4xl font-serif text-[#c5a059] opacity-20">01</span>
            <h3 className="text-xl font-serif">The Calibre</h3>
            <p className="text-gray-500 text-sm font-light leading-relaxed">Micro-mechanics at the highest level, where hundreds of parts work in perfect harmony.</p>
          </div>
          <div className="space-y-4">
            <span className="text-4xl font-serif text-[#c5a059] opacity-20">02</span>
            <h3 className="text-xl font-serif">The Finish</h3>
            <p className="text-gray-500 text-sm font-light leading-relaxed">Hand-polished surfaces and intricate engravings that define the soul of luxury.</p>
          </div>
          <div className="space-y-4">
            <span className="text-4xl font-serif text-[#c5a059] opacity-20">03</span>
            <h3 className="text-xl font-serif">The Dial</h3>
            <p className="text-gray-500 text-sm font-light leading-relaxed">Sunburst patterns, enamel work, and applied indices that capture the light perfectly.</p>
          </div>
        </div>
      </div>
    </section>

    {/* TESTIMONIALS */}
    <section className="py-32 bg-[#050505] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <h4 className="text-[#c5a059] text-[10px] uppercase tracking-[0.4em] mb-4">Elite Circle</h4>
          <h2 className="text-3xl font-serif text-white">Member Experiences</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-12 border border-white/5 bg-[#0a0a0a] hover:border-[#c5a059]/20 transition-all duration-500">
            <p className="text-gray-300 font-light italic text-lg mb-8 leading-relaxed">
              "Betawatch provided an acquisition experience that rivaled the finest auction houses. The AI Concierge helped me find a rare Daytona I'd been seeking for years."
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-[#c5a059]/20 rounded-full"></div>
              <div>
                <h5 className="text-white text-xs uppercase tracking-widest">James V.</h5>
                <p className="text-[#c5a059] text-[10px]">Private Collector</p>
              </div>
            </div>
          </div>
          <div className="p-12 border border-white/5 bg-[#0a0a0a] hover:border-[#c5a059]/20 transition-all duration-500">
            <p className="text-gray-300 font-light italic text-lg mb-8 leading-relaxed">
              "The level of service and the absolute confidence in authenticity makes Betawatch my only destination for horological investments."
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-[#c5a059]/20 rounded-full"></div>
              <div>
                <h5 className="text-white text-xs uppercase tracking-widest">Sophia L.</h5>
                <p className="text-[#c5a059] text-[10px]">Elite Member</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* TRUST PILLARS */}
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div>
            <h5 className="text-[#c5a059] text-[10px] uppercase tracking-[0.3em] mb-2">Authenticity</h5>
            <p className="text-white text-sm font-light">100% Guaranteed</p>
          </div>
          <div>
            <h5 className="text-[#c5a059] text-[10px] uppercase tracking-[0.3em] mb-2">Shipping</h5>
            <p className="text-white text-sm font-light">Global & Insured</p>
          </div>
          <div>
            <h5 className="text-[#c5a059] text-[10px] uppercase tracking-[0.3em] mb-2">Support</h5>
            <p className="text-white text-sm font-light">24/7 Concierge</p>
          </div>
          <div>
            <h5 className="text-[#c5a059] text-[10px] uppercase tracking-[0.3em] mb-2">Vault</h5>
            <p className="text-white text-sm font-light">Secure Custody</p>
          </div>
        </div>
      </div>
    </section>

    {/* FINAL CTA */}
    <section className="py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#c5a059] opacity-5"></div>
      <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
        <h2 className="text-5xl font-serif mb-8 text-white">Begin your legacy today.</h2>
        <p className="text-gray-400 mb-12 font-light">Join the most exclusive horological community in the world.</p>
        <button 
          onClick={() => onNavigate({ name: 'shop' })}
          className="px-16 py-6 bg-white text-black font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-[#c5a059] transition-all"
        >
          Explore the Vault
        </button>
      </div>
    </section>
  </div>
);
