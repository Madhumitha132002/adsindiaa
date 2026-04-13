import Link from 'next/link';

export default function Integrations() {
  const tools = [
    { name: 'Zapier', icon: 'fab fa-zapier', color: 'text-orange-500 bg-orange-50' },
    { name: 'HubSpot', icon: 'fab fa-hubspot', color: 'text-orange-600 bg-orange-50' },
    { name: 'Slack', icon: 'fab fa-slack', color: 'text-purple-600 bg-purple-50' },
    { name: 'Stripe', icon: 'fab fa-stripe', color: 'text-indigo-600 bg-indigo-50' },
    { name: 'WhatsApp', icon: 'fab fa-whatsapp', color: 'text-green-600 bg-green-50' },
    { name: 'Google Ads', icon: 'fab fa-google', color: 'text-blue-500 bg-blue-50' },
    { name: 'Meta', icon: 'fab fa-facebook', color: 'text-blue-600 bg-blue-50' },
    { name: 'LinkedIn', icon: 'fab fa-linkedin', color: 'text-blue-700 bg-blue-50' },
  ];

  return (
    <section className="w-full py-16 lg:py-24 px-4 relative z-10 overflow-hidden bg-white">
      {/* Subtle blobs */}
      <div className="absolute top-[5%] left-[5%] w-[35%] h-[50%] bg-blue-100/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[5%] right-[5%] w-[35%] h-[50%] bg-violet-100/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="relative bg-[#F1F5FF] rounded-[3rem] p-8 md:p-16 lg:p-20 shadow-xl shadow-blue-100/30 border border-blue-100/50 flex flex-col lg:flex-row items-center gap-16 overflow-hidden">
          
          {/* Decorative glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200/15 blur-[100px] rounded-full pointer-events-none" />

          {/* Left Content Area */}
          <div className="flex-1 space-y-8 relative z-10 text-center lg:text-left">
            <div className="space-y-4">
              <span className="inline-block text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full">
                Integrations
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.15]">
                Connect{' '}
                <span className="bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent">Ads India</span>{' '}
                <br />with your favorite apps
              </h2>
              <p className="text-slate-500 text-lg md:text-xl font-medium max-w-xl mx-auto lg:mx-0">
                Automate your workflows and sync data across platforms effortlessly. Build a unified communication ecosystem in minutes.
              </p>
            </div>

            <div className="pt-4">
              <Link href="/contact-us" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-500 to-violet-600 text-white font-bold rounded-2xl hover:shadow-xl hover:shadow-blue-500/25 transition-all hover:scale-105 shadow-lg">
                Explore Integrations
                <i className="fas fa-arrow-right text-sm"></i>
              </Link>
            </div>
          </div>

          {/* Right Visual Area: Tool Grid */}
          <div className="flex-1 w-full lg:max-w-[500px] relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 lg:grid-rows-4 gap-4 md:gap-5">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="group bg-white border border-slate-100 flex flex-col items-center justify-center p-5 md:p-6 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 hover:-translate-y-2 hover:border-blue-200"
                >
                  <div className={`w-12 h-12 md:w-14 md:h-14 flex items-center justify-center ${tool.color} border border-current/10 rounded-2xl mb-3 group-hover:scale-110 transition-transform`}>
                    <i className={`${tool.icon} text-2xl md:text-3xl`}></i>
                  </div>
                  <span className="text-[12px] md:text-xs font-black text-slate-700 tracking-tight uppercase">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
