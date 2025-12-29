
import React, { useState, useEffect } from 'react';
import { Watch, CartItem, User } from './types';
import { api } from './services/api';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';

type ViewState = { name: 'home' | 'shop' | 'admin' | 'detail' | 'profile' | 'checkout'; params?: any; };

export const App = () => {
  const [view, setView] = useState<ViewState>({ name: 'home' });
  const [watches, setWatches] = useState<Watch[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  useEffect(() => {
    const init = async () => {
      try {
        const data = await api.products.getAll();
        setWatches(data);
      } finally {
        setLoading(false);
      }
    };
    init();
  }, []);

  const addToCart = (watch: Watch) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === watch.id);
      if (existing) return prev.map(i => i.id === watch.id ? { ...i, quantity: i.quantity + 1 } : i);
      return [...prev, { ...watch, quantity: 1 }];
    });
  };

  const handleLogin = () => {
    setUser({ id: '1', username: 'Member', email: 'member@betawatch.com', role: 'admin' });
    setIsAuthOpen(false);
  };

  if (loading) return <div className="h-screen flex items-center justify-center bg-black text-[#c5a059] uppercase tracking-widest text-xs">Loading Inventory...</div>;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar 
        user={user} 
        cartCount={cart.reduce((s, i) => s + i.quantity, 0)}
        onOpenCart={() => alert("Cart View")}
        onLogout={() => setUser(null)}
        onOpenAuth={() => handleLogin()}
        onNavigate={setView}
      />
      
      <main>
        {view.name === 'home' && <HomePage watches={watches} onAddToCart={addToCart} onNavigate={setView} />}
        {view.name !== 'home' && (
          <div className="pt-32 px-10 text-center">
            <h2 className="text-3xl font-serif text-[#c5a059] mb-4">Under Construction</h2>
            <button onClick={() => setView({ name: 'home' })} className="text-xs uppercase tracking-widest underline">Return Home</button>
          </div>
        )}
      </main>

      <footer className="py-20 border-t border-white/5 text-center mt-20">
        <h2 className="text-[#c5a059] font-serif text-2xl mb-4 tracking-widest">BETAWATCH</h2>
        <p className="text-gray-600 text-[10px] uppercase tracking-widest">© 2024 Timeless Excellence</p>
      </footer>
    </div>
  );
};
