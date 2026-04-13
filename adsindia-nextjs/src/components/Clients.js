import Image from 'next/image';

export default function Clients() {
  const clients = [
    { name: 'Global Tech', industry: 'Technology', icon: 'fas fa-microchip', color: 'text-blue-500 bg-blue-50' },
    { name: 'Swift Move', industry: 'Logistics', icon: 'fas fa-shipping-fast', color: 'text-violet-500 bg-violet-50' },
    { name: 'Sky Finance', industry: 'Banking', icon: 'fas fa-chart-line', color: 'text-indigo-500 bg-indigo-50' },
    { name: 'Eco Mart', industry: 'E-commerce', icon: 'fas fa-shopping-bag', color: 'text-purple-500 bg-purple-50' },
    { name: 'Pulse Health', industry: 'Healthcare', icon: 'fas fa-heartbeat', color: 'text-blue-600 bg-blue-50' },
    { name: 'Apex Media', industry: 'Entertainment', icon: 'fas fa-play', color: 'text-violet-600 bg-violet-50' },
    { name: 'Vertex Real Estate', industry: 'Property', icon: 'fas fa-building', color: 'text-indigo-600 bg-indigo-50' },
    { name: 'Terra Energy', industry: 'Utilities', icon: 'fas fa-leaf', color: 'text-purple-600 bg-purple-50' },
  ];

  return (
    <section className="w-full py-16 lg:py-24 px-4 relative z-10 overflow-hidden bg-white">
      {/* Subtle blobs */}
      <div className="absolute top-[10%] right-[-5%] w-[40%] h-[60%] bg-blue-100/25 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-5%] w-[40%] h-[60%] bg-violet-100/25 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="relative bg-[#F1F5FF] rounded-[3rem] p-8 md:p-16 lg:p-20 shadow-xl shadow-blue-100/30 border border-blue-100/50 flex flex-col lg:flex-row-reverse items-center gap-16 overflow-hidden">
          
          {/* Decorative corner glow */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-200/15 blur-[100px] rounded-full pointer-events-none" />

          {/* Right Content Area */}
          <div className="flex-1 space-y-8 relative z-10 text-center lg:text-left">
            <div className="space-y-4">
              <span className="inline-block text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full">
                Our Clients
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.15]">
                Trusted by{' '}
                <span className="bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent">Brands</span>{' '}
                Across Industries
              </h2>
              <p className="text-slate-500 text-lg md:text-xl font-medium max-w-xl mx-auto lg:mx-0">
                Helping businesses achieve unprecedented growth through innovative digital marketing and bulk SMS strategies.
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <div className="flex -space-x-3">
                {[
                  'from-blue-400 to-blue-600',
                  'from-violet-400 to-violet-600',
                  'from-indigo-400 to-indigo-600',
                  'from-purple-400 to-purple-600',
                ].map((c, i) => (
                  <div key={i} className={`w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br ${c} flex items-center justify-center text-white text-xs font-bold`}>
                    {['A', 'R', 'S', 'M'][i]}
                  </div>
                ))}
              </div>
              <p className="text-sm font-bold text-slate-600">
                Joined by <span className="bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent font-black">5,000+</span> happy clients
              </p>
            </div>
          </div>

          {/* Left Visual Area: Client Grid */}
          <div className="flex-1 w-full lg:max-w-[500px] relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 lg:grid-rows-4 gap-4 md:gap-5">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="group bg-white border border-slate-100 flex flex-col items-center justify-center p-5 md:p-6 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 hover:-translate-y-2 hover:border-blue-200"
                >
                  <div className={`w-12 h-12 md:w-14 md:h-14 flex items-center justify-center ${client.color} rounded-2xl mb-3 group-hover:scale-110 transition-transform`}>
                    <i className={`${client.icon} text-2xl md:text-3xl`}></i>
                  </div>
                  <div className="text-center">
                    <span className="block text-[12px] md:text-sm font-black text-slate-800 tracking-tight uppercase mb-0.5">{client.name}</span>
                    <span className="block text-[9px] font-black text-slate-400 uppercase tracking-widest">{client.industry}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
