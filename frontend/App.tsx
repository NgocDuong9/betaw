
import React, { useState, useEffect } from 'react';
import { Watch, CartItem, User } from './types';
import { api } from './services/api';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { ProfilePage } from './pages/ProfilePage';
import { AdminPanel } from './pages/AdminPanel';
import { CheckoutPage } from './pages/CheckoutPage';
import { CartDrawer } from './components/CartDrawer';
import { AuthModal } from './components/AuthModal';
import { GeminiConcierge } from './components/GeminiConcierge';

type ViewState = {
  name: 'home' | 'shop' | 'admin' | 'detail' | 'profile' | 'checkout';
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
    window.scrollTo(0, 0);
  }, [view]);

  useEffect(() => {
    const init = async () => {
      try {
        const data = await api.products.getAll();
        setWatches(data);
      } catch (e) {
        console.error("Init error", e);
      } finally {
        setLoading(false);
      }
    };
    init();
  }, []);

  const addToCart = (watch: Watch, qty: number = 1) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === watch.id);
      if (existing) return prev.map(i => i.id === watch.id ? { ...i, quantity: i.quantity + qty } : i);
      return [...prev, { ...watch, quantity: qty }];
    });
    setIsCartOpen(true);
  };

  const handleLogin = (u: User) => {
    setUser(u);
    setIsAuthOpen(false);
    localStorage.setItem('betawatch_token', 'demo-token');
  };

  const renderContent = () => {
    if (loading) return <div className="h-screen flex items-center justify-center bg-black text-[#c5a059]">Loading...</div>;

    switch (view.name) {
      case 'detail': return <ProductDetailPage watch={view.params} onAddToCart={addToCart} onBack={() => setView({ name: 'home' })} />;
      case 'shop': return <div className="p-20 text-center">Collection View (Coming soon)</div>;
      case 'profile': return <ProfilePage user={user} />;
      case 'admin': return <AdminPanel watches={watches} />;
      case 'checkout': return <CheckoutPage items={cart} onComplete={() => setView({name: 'home'})} onBack={() => setView({ name: 'home' })} />;
      default: return <HomePage watches={watches} onAddToCart={addToCart} onNavigate={setView} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar 
        user={user} 
        cartCount={cart.reduce((s, i) => s + i.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
        onLogout={() => setUser(null)}
        onOpenAuth={() => setIsAuthOpen(true)}
        onNavigate={setView}
      />
      <main>{renderContent()}</main>
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} items={cart} onCheckout={() => setView({name: 'checkout'})} />
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} onLogin={handleLogin} />
      <GeminiConcierge watches={watches} />
    </div>
  );
};
