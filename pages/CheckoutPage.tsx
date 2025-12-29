
import React, { useState } from 'react';
import { CartItem } from '../types';

interface CheckoutPageProps {
  items: CartItem[];
  onComplete: (details: any) => void;
  onBack: () => void;
}

export const CheckoutPage: React.FC<CheckoutPageProps> = ({ items, onComplete, onBack }) => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    country: '',
    zip: '',
    phone: ''
  });

  const subtotal = items.reduce((s, i) => s + i.price * i.quantity, 0);
  const shipping = 150; // Luxury shipping fee
  const total = subtotal + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-7xl mx-auto py-24 px-6 animate-fade-in">
      <button onClick={onBack} className="text-[#c5a059] uppercase tracking-widest text-[10px] mb-12 flex items-center group">
        <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span> Back to Collection
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2">
          <h2 className="text-4xl font-serif text-[#c5a059] mb-12">Acquisition Details</h2>
          
          <form onSubmit={handleSubmit} className="space-y-12">
            <section>
              <h3 className="text-[10px] uppercase tracking-[0.4em] text-gray-500 mb-6 font-bold">Contact Information</h3>
              <div className="grid grid-cols-1 gap-6">
                <input 
                  required
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-[#111] border border-white/10 px-6 py-4 text-sm focus:border-[#c5a059] outline-none transition-colors text-white"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </section>

            <section>
              <h3 className="text-[10px] uppercase tracking-[0.4em] text-gray-500 mb-6 font-bold">Shipping Destination</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  required
                  name="firstName"
                  placeholder="First Name"
                  className="w-full bg-[#111] border border-white/10 px-6 py-4 text-sm focus:border-[#c5a059] outline-none transition-colors text-white"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <input 
                  required
                  name="lastName"
                  placeholder="Last Name"
                  className="w-full bg-[#111] border border-white/10 px-6 py-4 text-sm focus:border-[#c5a059] outline-none transition-colors text-white"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                <input 
                  required
                  name="address"
                  placeholder="Street Address"
                  className="w-full bg-[#111] border border-white/10 px-6 py-4 text-sm md:col-span-2 focus:border-[#c5a059] outline-none transition-colors text-white"
                  value={formData.address}
                  onChange={handleChange}
                />
                <input 
                  required
                  name="city"
                  placeholder="City"
                  className="w-full bg-[#111] border border-white/10 px-6 py-4 text-sm focus:border-[#c5a059] outline-none transition-colors text-white"
                  value={formData.city}
                  onChange={handleChange}
                />
                <input 
                  required
                  name="country"
                  placeholder="Country"
                  className="w-full bg-[#111] border border-white/10 px-6 py-4 text-sm focus:border-[#c5a059] outline-none transition-colors text-white"
                  value={formData.country}
                  onChange={handleChange}
                />
                <input 
                  required
                  name="zip"
                  placeholder="Postal Code"
                  className="w-full bg-[#111] border border-white/10 px-6 py-4 text-sm focus:border-[#c5a059] outline-none transition-colors text-white"
                  value={formData.zip}
                  onChange={handleChange}
                />
                <input 
                  required
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full bg-[#111] border border-white/10 px-6 py-4 text-sm focus:border-[#c5a059] outline-none transition-colors text-white"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </section>

            <button 
              type="submit"
              className="w-full py-6 bg-[#c5a059] text-black font-bold uppercase tracking-[0.3em] text-xs hover:bg-white transition-all shadow-xl"
            >
              Confirm Acquisition
            </button>
          </form>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-[#111] border border-white/5 p-8 sticky top-32">
            <h3 className="text-xl font-serif text-[#c5a059] mb-8">Order Summary</h3>
            
            <div className="space-y-6 mb-8 max-h-80 overflow-y-auto pr-2">
              {items.map(item => (
                <div key={item.id} className="flex space-x-4">
                  <div className="w-16 h-20 bg-black flex-shrink-0">
                    <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[10px] text-[#c5a059] uppercase tracking-widest">{item.brand}</h4>
                    <p className="text-xs text-white line-clamp-1">{item.name}</p>
                    <p className="text-xs text-gray-500 mt-1">${item.price.toLocaleString()} x {item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4 border-t border-white/10 pt-8">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500 uppercase tracking-widest text-[10px]">Subtotal</span>
                <span className="text-white font-light">${subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500 uppercase tracking-widest text-[10px]">Vault Shipping</span>
                <span className="text-white font-light">${shipping.toLocaleString()}</span>
              </div>
              <div className="flex justify-between pt-4 border-t border-white/10">
                <span className="text-[#c5a059] uppercase tracking-widest text-xs font-bold">Total</span>
                <span className="text-2xl font-light text-white">${total.toLocaleString()}</span>
              </div>
            </div>
            
            <div className="mt-8">
              <p className="text-[10px] text-gray-600 italic text-center">
                All acquisitions are insured and handled with extreme confidentiality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
