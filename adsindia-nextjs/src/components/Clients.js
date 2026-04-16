'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Clients() {
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', 'Education', 'SME', 'Enterprise'];

  const clientsData = [
    // Education
    { name: 'Global Academy', type: 'School', category: 'Education', icon: 'fas fa-school', color: 'text-blue-600 bg-blue-50' },
    { name: 'St. Xavier College', type: 'Institution', category: 'Education', icon: 'fas fa-graduation-cap', color: 'text-indigo-600 bg-indigo-50' },
    { name: 'Vidyalaya Group', type: 'Education', category: 'Education', icon: 'fas fa-book-reader', color: 'text-violet-600 bg-violet-50' },
    { name: 'Elite University', type: 'University', category: 'Education', icon: 'fas fa-university', color: 'text-purple-600 bg-purple-50' },
    
    // SME
    { name: 'Daily Fresh Mart', type: 'Retail', category: 'SME', icon: 'fas fa-store', color: 'text-emerald-600 bg-emerald-50' },
    { name: 'Trendz Boutique', type: 'Fashion', category: 'SME', icon: 'fas fa-tshirt', color: 'text-pink-600 bg-pink-50' },
    { name: 'Global Cafe', type: 'Hospitality', category: 'SME', icon: 'fas fa-coffee', color: 'text-amber-600 bg-amber-50' },
    { name: 'Creative Studio', type: 'Services', category: 'SME', icon: 'fas fa-paint-brush', color: 'text-orange-600 bg-orange-50' },

    // Enterprise
    { name: 'Tech Pulse', type: 'Technology', category: 'Enterprise', icon: 'fas fa-microchip', color: 'text-blue-500 bg-blue-50' },
    { name: 'Apex Logistics', type: 'Logistics', category: 'Enterprise', icon: 'fas fa-shipping-fast', color: 'text-violet-500 bg-violet-50' },
    { name: 'Sky Finance', type: 'Banking', category: 'Enterprise', icon: 'fas fa-chart-line', color: 'text-indigo-500 bg-indigo-50' },
    { name: 'Metro Infra', type: 'Infrastructure', category: 'Enterprise', icon: 'fas fa-building', color: 'text-slate-600 bg-slate-50' },
  ];

  const filteredClients = activeTab === 'All' 
    ? clientsData 
    : clientsData.filter(c => c.category === activeTab);

  return (
    <section className="w-full py-20 lg:py-28 px-4 relative z-10 overflow-hidden bg-white">
      {/* Decorative background elements */}
      <div className="absolute top-[10%] right-[-5%] w-[40%] h-[60%] bg-blue-50 rounded-full blur-[120px] pointer-events-none opacity-60" />
      <div className="absolute bottom-[10%] left-[-5%] w-[40%] h-[60%] bg-violet-50 rounded-full blur-[120px] pointer-events-none opacity-60" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="relative bg-[#F8FAFF] rounded-[4rem] p-8 md:p-16 lg:p-24 shadow-[0_32px_80px_-20px_rgba(45,78,255,0.12)] border border-blue-100/50 flex flex-col items-center overflow-hidden">
          
          {/* Header Section */}
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-12">
            <span className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.3em] text-blue-600 bg-blue-50 border border-blue-100 px-5 py-2 rounded-full shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
              Trusted by Experts
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1]">
              Empowering{' '}
              <span className="bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent">Every Sector</span>{' '}
              in India
            </h2>
            <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed">
              From top-tier schools and colleges to growing startups and large enterprises, we deliver specialized digital solutions for every scale.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 p-2 bg-white/50 backdrop-blur-md rounded-3xl border border-white">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-8 py-3.5 rounded-2xl text-sm font-bold transition-all duration-300 ${
                  activeTab === cat
                    ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-500/25'
                    : 'text-slate-500 hover:text-blue-600 hover:bg-white'
                }`}
              >
                {cat === 'SME' ? 'Small Businesses' : cat}
              </button>
            ))}
          </div>

          {/* Client Grid */}
          <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 min-h-[400px]">
            {filteredClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="group relative bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2 hover:border-blue-300 text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className={`w-16 h-16 flex items-center justify-center ${client.color} rounded-2xl mb-5 mx-auto group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                  <i className={`${client.icon} text-3xl`}></i>
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-extrabold text-slate-800 tracking-tight leading-tight group-hover:text-blue-600 transition-colors">
                    {client.name}
                  </h3>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    {client.type}
                  </p>
                </div>
                {/* Subtle Hover Decoration */}
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>

          {/* Footer Stats */}
          <div className="mt-16 pt-8 border-t border-slate-100/10 w-full flex flex-col sm:flex-row items-center justify-center gap-6">
             <div className="flex -space-x-4">
                {[
                  'bg-blue-400',
                  'bg-indigo-400',
                  'bg-violet-400',
                  'bg-purple-400'
                ].map((bg, i) => (
                  <div key={i} className={`w-12 h-12 rounded-full border-4 border-[#F8FAFF] ${bg} flex items-center justify-center text-white text-xs font-bold shadow-sm`}>
                     {['A', 'J', 'S', 'P'][i]}
                  </div>
                ))}
             </div>
             <p className="text-base font-bold text-slate-700">
               Join <span className="bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent font-black tracking-tight">5,000+</span> organizations growing with Ads Indiaa
             </p>
          </div>
        </div>
      </div>
    </section>
  );
}

