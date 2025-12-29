
import React from 'react';
import { Watch } from '../types';

interface AdminPanelProps {
  watches: Watch[];
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ watches }) => (
  <div className="max-w-7xl mx-auto py-24 px-6 animate-fade-in">
    <div className="flex justify-between items-center mb-12">
      <h2 className="text-4xl font-serif text-[#c5a059]">Archive Management</h2>
      <button className="px-6 py-2 border border-[#c5a059] text-[#c5a059] uppercase text-xs tracking-widest hover:bg-[#c5a059] hover:text-black transition-all">Add New Specimen</button>
    </div>
    <div className="bg-[#111] border border-white/5 overflow-hidden">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-white/10 uppercase text-[10px] tracking-widest text-gray-500 bg-black/40">
            <th className="p-4">Specimen</th>
            <th className="p-4">Brand</th>
            <th className="p-4">Value</th>
            <th className="p-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5 text-gray-300 font-light">
          {watches.map(w => (
            <tr key={w.id} className="hover:bg-white/5 transition-colors">
              <td className="p-4 text-white">{w.name}</td>
              <td className="p-4">{w.brand}</td>
              <td className="p-4 font-mono">${w.price.toLocaleString()}</td>
              <td className="p-4 text-right">
                <button className="text-red-900/60 hover:text-red-500 text-[10px] uppercase tracking-widest transition-colors font-bold">Decommission</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
