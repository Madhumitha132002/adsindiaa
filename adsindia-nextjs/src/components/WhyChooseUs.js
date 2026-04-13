import Image from 'next/image';
import Link from 'next/link';

export default function WhyChooseUs() {
  return (
    <section className="w-full py-16 lg:py-24 px-4 relative bg-[#F1F5FF] overflow-hidden">
      {/* Subtle decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold leading-tight mb-6 text-slate-900">
            Enabling Effortless{' '}
            <span className="bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent">Business</span>{' '}
            Communication
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed max-w-3xl mx-auto font-medium">
            With a focus on excellence, we provide seamless support from start to finish, driving exceptional results for your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="relative flex items-center justify-center">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white border border-slate-100 max-w-lg w-full">
              <Image src="/images/why choose us.webp" alt="Business professional using messaging platform" width={800} height={600}
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105" />

              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md border border-slate-100 p-4 rounded-2xl shadow-xl">
                <div className="text-3xl font-extrabold bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent">99.99%</div>
                <div className="text-xs text-slate-600 font-bold uppercase tracking-wider">Uptime</div>
              </div>

              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md border border-slate-100 p-4 rounded-2xl shadow-xl">
                <div className="text-3xl font-extrabold bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent">24/7</div>
                <div className="text-xs text-slate-600 font-bold uppercase tracking-wider">Support</div>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div className="bg-white border border-slate-100 border-l-4 border-l-blue-500 p-6 md:p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-100/50">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 border border-blue-100">
                  <i className="fas fa-sync-alt text-2xl"></i>
                </div>
                <div className="flex-1">
                  <h3 className="font-extrabold text-slate-900 text-xl mb-3">Uptime & Reliability</h3>
                  <p className="text-slate-500 text-base leading-relaxed">
                    Stay connected with 99.99% uptime for seamless messaging and business continuity. Our robust infrastructure ensures your communications never miss a beat.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-100 border-l-4 border-l-violet-500 p-6 md:p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-100/50">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 bg-violet-50 rounded-2xl flex items-center justify-center text-violet-600 border border-violet-100">
                  <i className="fas fa-headset text-2xl"></i>
                </div>
                <div className="flex-1">
                  <h3 className="font-extrabold text-slate-900 text-xl mb-3">24/7 Customer Service</h3>
                  <p className="text-slate-500 text-base leading-relaxed">
                    Our expert team ensures uninterrupted business communication with round-the-clock support for all your messaging needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          {[
            { icon: 'fa-shield-alt', title: 'Enterprise Security', desc: 'Bank-level encryption and compliance with industry standards to protect your data.', color: 'text-blue-600 bg-blue-50 border-blue-100', hover: 'hover:border-blue-300 hover:shadow-blue-100/50' },
            { icon: 'fa-plug', title: 'Seamless Integration', desc: 'Easy integration with your existing tools and CRM systems for workflow efficiency.', color: 'text-violet-600 bg-violet-50 border-violet-100', hover: 'hover:border-violet-300 hover:shadow-violet-100/50' },
            { icon: 'fa-chart-line', title: 'Scalable Solutions', desc: 'Grow your business without limits with our flexible, scalable messaging platform.', color: 'text-indigo-600 bg-indigo-50 border-indigo-100', hover: 'hover:border-indigo-300 hover:shadow-indigo-100/50' },
            { icon: 'fa-dollar-sign', title: 'Cost-Effective', desc: 'Maximize ROI with competitive pricing and transparent billing — no hidden costs.', color: 'text-purple-600 bg-purple-50 border-purple-100', hover: 'hover:border-purple-300 hover:shadow-purple-100/50' },
          ].map((card, i) => (
            <div key={i} className={`bg-white border border-slate-100 p-8 rounded-3xl text-center group transition-all hover:-translate-y-2 hover:shadow-xl ${card.hover}`}>
              <div className={`w-14 h-14 ${card.color} border rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform`}>
                <i className={`fas ${card.icon} text-2xl`}></i>
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-3">{card.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Link href="/contact-us" className="group inline-flex items-center justify-center gap-3 px-10 py-5 font-bold tracking-widest text-white uppercase bg-gradient-to-r from-blue-500 to-violet-600 rounded-2xl shadow-lg shadow-blue-500/20 transition-all hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30 text-sm">
            Experience The Difference
            <i className="fas fa-arrow-right transition-transform group-hover:translate-x-1"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
