import Image from 'next/image';
import Link from 'next/link';

export default function MessagingSolution() {
  return (
    <section className="w-full py-16 lg:py-24 px-4 bg-white relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative flex justify-center items-center order-2 lg:order-1 animate-fade-in-up">
            {/* Floating badges */}
            <div className="absolute -top-6 left-4 md:left-8 bg-white border border-slate-100 p-4 rounded-2xl shadow-xl z-20 hover:border-blue-300 transition-colors">
              <i className="fas fa-envelope text-blue-500 text-3xl"></i>
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-500 to-violet-600 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold shadow-sm">1</div>
            </div>

            <div className="absolute top-16 right-4 md:-right-4 bg-white border border-slate-100 p-4 rounded-2xl shadow-xl z-20 hover:border-violet-300 transition-colors" style={{ animationDelay: '1s' }}>
              <i className="fab fa-whatsapp text-violet-600 text-3xl"></i>
            </div>

            <div className="absolute bottom-20 left-4 md:left-0 bg-white border border-slate-100 p-4 rounded-2xl shadow-xl z-20 hover:border-blue-300 transition-colors" style={{ animationDelay: '2s' }}>
              <i className="fas fa-sms text-indigo-500 text-3xl"></i>
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold shadow-sm">3</div>
            </div>

            <div className="absolute bottom-10 right-8 md:right-4 bg-white border border-slate-100 p-4 rounded-2xl shadow-xl z-20 hover:border-violet-300 transition-colors" style={{ animationDelay: '1.5s' }}>
              <i className="fas fa-comment-dots text-purple-500 text-3xl"></i>
            </div>

            <div className="relative z-10 w-full max-w-md lg:max-w-lg">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-blue-100/40 border-l-4 border-blue-500 border border-slate-100">
                <Image src="/images/SMART UNIFIED SYSTEM.webp" alt="Professional using messaging platform" width={800} height={600}
                  className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105" />
                <div className="absolute inset-0 bg-blue-900/3 mix-blend-multiply pointer-events-none"></div>
              </div>
            </div>
          </div>

          <div className="space-y-6 lg:space-y-8 order-1 lg:order-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div>
              <span className="inline-block py-1.5 px-4 bg-blue-50 border border-blue-200 text-blue-700 font-bold text-xs tracking-widest uppercase mb-4 rounded-full">
                Smart Unified System
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold leading-tight text-slate-900">
                <span className="block mb-2">Your Ultimate</span>
                <span className="bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent">All-In-One Messaging</span>
                <span className="block mt-2">Solution.</span>
              </h2>
            </div>

            <p className="text-slate-500 text-lg leading-relaxed max-w-xl font-medium">
              A single unified platform to send bulk SMS, WhatsApp broadcasts, and template messages, while managing customer queries seamlessly from multiple channels with a single team inbox. With WACTO AI-powered automation, ensure 24/7 sales and support engagement.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                { icon: 'fa-users-cog', title: 'Multi-Agent Inbox', desc: 'Collaborate with your team to resolve queries in one place.', color: 'text-blue-600 bg-blue-50 border-blue-100', hover: 'hover:border-blue-300' },
                { icon: 'fa-shield-alt', title: 'Scalable & Secure', desc: '99.9% uptime for mission-critical applications.', color: 'text-violet-600 bg-violet-50 border-violet-100', hover: 'hover:border-violet-300' },
                { icon: 'fa-robot', title: 'AI Chatbot (WACTO)', desc: '24/7 automated sales and customer support.', color: 'text-indigo-600 bg-indigo-50 border-indigo-100', hover: 'hover:border-indigo-300' },
                { icon: 'fa-chart-line', title: 'SMART Tracking', desc: 'Track every click, open, and conversion in real time.', color: 'text-purple-600 bg-purple-50 border-purple-100', hover: 'hover:border-purple-300' },
              ].map((item, i) => (
                <div key={i} className={`bg-white border border-slate-100 p-5 rounded-2xl transition-all duration-300 ${item.hover} hover:shadow-lg`}>
                  <div className="flex items-start gap-3">
                    <div className={`flex-shrink-0 w-11 h-11 ${item.color} border rounded-xl flex items-center justify-center`}>
                      <i className={`fas ${item.icon} text-lg`}></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h3>
                      <p className="text-xs text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link href="/services" className="group inline-flex items-center justify-center gap-3 px-10 py-4 font-bold tracking-widest text-white uppercase bg-gradient-to-r from-blue-500 to-violet-600 rounded-2xl shadow-lg shadow-blue-500/20 transition-all hover:scale-105 hover:shadow-xl text-sm">
                Explore Platform
                <i className="fas fa-arrow-right transition-transform group-hover:translate-x-1"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
