
import React, { useState, useEffect } from 'react';
import { Watch, CartItem, User } from './types';
import { api } from './services/api';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { ProfilePage } from './pages/ProfilePage';
import { AdminPanel } from './pages/AdminPanel';
import { CartDrawer } from './components/CartDrawer';
import { AuthModal } from './components/AuthModal';
import { GeminiConcierge } from './components/GeminiConcierge';

type ViewState = {
  name: 'home' | 'shop' | 'admin' | 'detail' | 'profile';
  params?: any;
};

export const App = () => {
  const [view, setView] = useState<ViewState>({ name: 'home' });
  const [watches, setWatches] = useState<Watch[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  useEffect(() => {
    const init = async () => {
      try {
        const data = await api.products.getAll();
        setWatches(data);
      } catch (e) {
        console.error("Initialization error", e);
      } finally {
        setLoading(false);
      }
      const token = localStorage.getItem('betawatch_token');
      if (token) setUser({ id: '1', username: 'Member', email: 'member@betawatch.com', role: 'admin' });
    };
    init();
  }, []);

  const addToCart = (watch: Watch) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === watch.id);
      if (existing) return prev.map(i => i.id === watch.id ? { ...i, quantity: i.quantity + 1 } : i);
      return [...prev, { ...watch, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleLogin = (u: User) => {
    setUser(u);
    setIsAuthOpen(false);
    localStorage.setItem('betawatch_token', 'demo-token');
  };

  const renderContent = () => {
    if (loading) return (
      <div className="h-screen flex items-center justify-center bg-black">
        <div className="text-[#c5a059] animate-pulse uppercase tracking-[0.5em] text-xs font-bold">Summoning Inventory...</div>
      </div>
    );

    switch (view.name) {
      case 'detail':
        return <ProductDetailPage watch={view.params} onAddToCart={addToCart} onBack={() => setView({ name: 'shop' })} />;
      case 'shop':
        return (
          <div className="max-w-7xl mx-auto py-24 px-6 animate-fade-in">
            <h2 className="text-6xl font-serif mb-4 text-[#c5a059]">The Collection</h2>
            <p className="text-gray-500 mb-16 uppercase tracking-[0.3em] text-[10px]">Horological Masterpieces</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {watches.map(w => (
                <div key={w.id} className="group bg-[#111] border border-white/5 overflow-hidden transition-all duration-500 hover:border-[#c5a059]/40">
                  <div className="aspect-[4/5] overflow-hidden relative cursor-pointer" onClick={() => setView({ name: 'detail', params: w })}>
                    <img src={w.imageUrl} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={w.name} />
                  </div>
                  <div className="p-6">
                    <h4 className="text-[#c5a059] text-[10px] uppercase tracking-widest mb-1">{w.brand}</h4>
                    <h3 onClick={() => setView({ name: 'detail', params: w })} className="text-lg font-serif mb-2 cursor-pointer hover:text-[#c5a059] text-white">{w.name}</h3>
                    <p className="text-lg font-light mb-4 text-gray-300">${w.price.toLocaleString()}</p>
                    <button onClick={() => addToCart(w)} className="text-[10px] uppercase tracking-widest text-[#c5a059] border-b border-[#c5a059] pb-1 hover:text-white hover:border-white transition-all">Add to Cart</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'profile':
        return <ProfilePage user={user} />;
      case 'admin':
        return <AdminPanel watches={watches} />;
      default:
        return <HomePage watches={watches} onAddToCart={addToCart} onNavigate={setView} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar 
        user={user} 
        cartCount={cart.reduce((s, i) => s + i.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
        onLogout={() => { localStorage.removeItem('betawatch_token'); setUser(null); setView({ name: 'home' }); }}
        onOpenAuth={() => setIsAuthOpen(true)}
        onNavigate={setView}
      />
      
      <main className="min-h-[80vh]">{renderContent()}</main>

      <footer className="bg-[#050505] border-t border-white/5 py-16 px-6 mt-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-[#c5a059] font-serif text-3xl mb-4 tracking-widest">BETAWATCH</h2>
          <p className="text-gray-600 text-[10px] uppercase tracking-[0.5em] mb-8">Elegance Refined. Time Perfected.</p>
        </div>
      </footer>

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cart} 
      />
      
      <AuthModal 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)} 
        onLogin={handleLogin} 
      />
      
      <GeminiConcierge watches={watches} />
    </div>
  );
};
