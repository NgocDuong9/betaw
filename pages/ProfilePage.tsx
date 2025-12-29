
import React from 'react';
import { User } from '../types';

export const ProfilePage: React.FC<{ user: User | null }> = ({ user }) => {
  if (!user) return <div className="py-24 text-center">Unauthorized Access</div>;

  return (
    <div className="max-w-4xl mx-auto py-24 px-6">
      <div className="bg-[#111] border border-[#c5a059]/20 p-12">
        <div className="flex items-center space-x-8 mb-12 border-b border-white/5 pb-12">
          <div className="w-24 h-24 bg-[#c5a059] rounded-full flex items-center justify-center text-black text-4xl font-serif">
            {user.username[0].toUpperCase()}
          </div>
          <div>
            <h2 className="text-4xl font-serif">{user.username}</h2>
            <p className="text-gray-500 text-sm uppercase tracking-widest mt-1">{user.role} member</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-[#c5a059] uppercase tracking-widest text-[10px] mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div>
                <label className="text-gray-500 text-[10px] uppercase block mb-1">Email</label>
                <p className="text-sm">{user.email}</p>
              </div>
              <div>
                <label className="text-gray-500 text-[10px] uppercase block mb-1">Member Since</label>
                <p className="text-sm">October 2024</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-[#c5a059] uppercase tracking-widest text-[10px] mb-6">Vault Summary</h3>
            <p className="text-xs text-gray-500 italic mb-4">No recent acquisitions found in the vault.</p>
            <button className="text-[10px] text-[#c5a059] border-b border-[#c5a059] pb-1 uppercase tracking-widest">Refresh History</button>
          </div>
        </div>
      </div>
    </div>
  );
};
