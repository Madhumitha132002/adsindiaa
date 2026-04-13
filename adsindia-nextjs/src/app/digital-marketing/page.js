'use client';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';

const services = [
  {
    icon: 'fab fa-whatsapp',
    title: 'WhatsApp Marketing',
    desc: 'Reach customers on India\'s #1 messaging app with rich media broadcasts, chatbots, and AI automation.',
    slug: '/services/whatsapp-marketing',
    color: 'bg-green-50 text-green-600'
  },
  {
    icon: 'fas fa-sms',
    title: 'Promotional SMS',
    desc: 'Reach thousands instantly with targeted bulk SMS campaigns — DND compliant with real-time analytics.',
    slug: '/services/promotional-sms',
    color: 'bg-pink-50 text-pink-600'
  },
  {
    icon: 'fab fa-facebook',
    title: 'Meta Ads (FB & Instagram)',
    desc: 'Data-driven Facebook and Instagram ad campaigns with expert strategy, creative design, and daily optimisation.',
    slug: '/services/meta-ads',
    color: 'bg-blue-50 text-blue-600'
  },
  {
    icon: 'fas fa-laptop-code',
    title: 'Web Design & Development',
    desc: 'Stunning, fast-loading websites built mobile-first and SEO-optimised to turn visitors into paying customers.',
    slug: '/services/web-design',
    color: 'bg-cyan-50 text-cyan-600'
  },
  {
    icon: 'fas fa-palette',
    title: 'Graphic Design & Branding',
    desc: 'Logo design, brand identity, and marketing creatives that make your business look professional and memorable.',
    slug: '/services/graphic-design',
    color: 'bg-orange-50 text-orange-600'
  },
  {
    icon: 'fas fa-shield-alt',
    title: 'Transactional & OTP SMS',
    desc: 'Instant OTP and alert SMS delivery with 99.9% uptime — reaching even DND numbers legally and reliably.',
    slug: '/services/transactional-sms',
    color: 'bg-purple-50 text-purple-600'
  }
];

const stats = [
  { value: '5000+', label: 'Happy Clients' },
  { value: '10+ Yrs', label: 'Industry Experience' },
  { value: '98%', label: 'Avg Delivery Rate' },
  { value: '24/7', label: 'Customer Support' }
];

const whyUs = [
  { icon: 'fas fa-bullseye', title: 'Results-First Approach', desc: 'Every strategy is built around your business goals — not vanity metrics. We measure what actually matters to your bottom line.' },
  { icon: 'fas fa-chart-line', title: 'Data-Driven Decisions', desc: 'Real-time dashboards, weekly reports, and live tracking. You always know where your budget is going and what it\'s returning.' },
  { icon: 'fas fa-headset', title: '24/7 Expert Support', desc: 'A dedicated account manager for your business. Real humans, fast replies — not a chatbot. Direct WhatsApp access always.' },
  { icon: 'fas fa-rupee-sign', title: 'Best Value in India', desc: 'Enterprise-grade digital marketing at SME-friendly pricing. Transparent costs, zero surprises, maximum value for every rupee spent.' },
  { icon: 'fas fa-rocket', title: 'Fast Launch — 48 Hours', desc: 'We get campaigns live in 48 hours. No endless meetings or delays. Speed-to-market is a competitive advantage we take seriously.' },
  { icon: 'fas fa-star', title: '4.9/5 Client Satisfaction', desc: 'Rated 4.9 out of 5 by our clients. 5000+ businesses across India trust Ads India with their marketing and communication needs.' }
];

export default function DigitalMarketingPage() {
  return (
    <main className="min-h-screen bg-[#F1F5FF] overflow-x-hidden">
      <div className="h-20 bg-white border-b border-slate-200 fixed top-0 w-full z-[60] flex items-center shadow-sm">
        <Header />
      </div>

      <div className="relative z-10 pt-20">
        {/* ── HERO ── */}
        <section className="relative pt-24 pb-20 px-4 overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-200/20 rounded-full blur-3xl -mr-48 -mt-48 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-200/20 rounded-full blur-3xl -ml-32 pointer-events-none" />
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-200 shadow-sm text-sm font-semibold text-slate-700 mx-auto mb-6">
              <span className="text-base">🚀</span>
              Top-Rated Digital Agency in India
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-slate-900 leading-tight mb-6 tracking-tight">
              India's Best{' '}
              <span className="bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent">
                Digital Marketing Agency
              </span>{' '}
              for Growth
            </h1>
            <p className="text-slate-500 text-lg md:text-xl font-medium max-w-3xl mx-auto mb-10 leading-relaxed">
              Ads India helps 5000+ businesses grow faster with bulk SMS, WhatsApp marketing, Meta ads, web design, and graphic branding — all under one roof. Data-driven strategies. Transparent results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-violet-600 text-white font-black rounded-2xl shadow-lg shadow-blue-500/25 hover:scale-105 transition-all">
                Get a Free Strategy Call <i className="fas fa-arrow-right"></i>
              </Link>
              <Link href="/services" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-700 font-bold rounded-2xl border border-slate-200 hover:border-blue-300 hover:text-blue-600 transition-all">
                <i className="fas fa-grid"></i> View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="px-4 pb-16">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <div key={i} className="bg-white rounded-3xl p-6 text-center border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-100/50 transition-all hover:-translate-y-1">
                <div className="text-4xl font-black bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent mb-1">{s.value}</div>
                <div className="text-slate-500 text-xs font-bold uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SERVICES GRID ── */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full mb-4">What We Do</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                Premium <span className="bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent">Digital Marketing</span> Services
              </h2>
              <p className="text-slate-500 font-medium max-w-xl mx-auto text-lg">From high-impact SMS to precision social media ads — everything you need to grow your brand in India.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((s, i) => (
                <Link key={i} href={s.slug} className="group bg-white border border-slate-100 rounded-[2rem] p-8 hover:shadow-2xl hover:shadow-blue-100/50 hover:-translate-y-2 hover:border-blue-200 transition-all duration-300 block">
                  <div className={`w-14 h-14 rounded-2xl ${s.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm shadow-current/10`}>
                    <i className={`${s.icon} text-2xl`}></i>
                  </div>
                  <h3 className="font-black text-slate-900 text-xl mb-3 tracking-tight group-hover:text-blue-600 transition-colors">{s.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium mb-5 opacity-90">{s.desc}</p>
                  <span className="inline-flex items-center gap-2 text-blue-600 text-xs font-black uppercase tracking-[0.2em] group-hover:gap-3 transition-all">
                    Learn More <i className="fas fa-arrow-right"></i>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE US ── */}
        <section className="py-20 px-4 bg-[#F1F5FF]">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-[10px] font-black uppercase tracking-[0.3em] text-violet-600 bg-violet-50 border border-violet-100 px-4 py-1.5 rounded-full mb-4">Why Ads India</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
                Why 5000+ Businesses Choose <span className="bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent">Ads India</span>
              </h2>
              <p className="text-slate-500 font-medium max-w-xl mx-auto">We're not just a vendor — we're your growth partner. Here's what makes us different from every other digital marketing agency in India.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyUs.map((w, i) => (
                <div key={i} className="bg-white border border-slate-100 rounded-3xl p-7 hover:shadow-xl hover:shadow-blue-100/50 hover:-translate-y-2 hover:border-blue-200 transition-all group">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-violet-600 group-hover:text-white transition-all">
                    <i className={`${w.icon} text-xl`}></i>
                  </div>
                  <h3 className="font-black text-slate-900 text-base mb-2">{w.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── IMAGE SHOWCASE ── */}
        <section className="py-24 px-4 bg-white border-t border-slate-50">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full mb-4">Our Track Record</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                Campaigns That <span className="bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent">Drive Impact</span>
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { img: '/images/services/Promotional SMS -DND.webp', label: 'Bulk Promotional SMS' },
                { img: '/images/services/Whatapp Bulk SMS.webp', label: 'WhatsApp Marketing' },
                { img: '/images/services/Meta Ads.webp', label: 'Meta Ads Management' },
                { img: '/images/services/WebDesign_new.webp', label: 'Elite Web Design' },
                { img: '/images/services/TRANSACTIONAL SMS.webp', label: 'Transactional Alerts' },
                { img: '/images/services/OTP SMS.webp', label: 'Secure OTP Gateway' },
                { img: '/images/services/GraphicDesign_new.webp', label: 'Creative Branding' },
                { img: '/images/services/Meta_Whatsapp.webp', label: 'WhatsApp Business API' }
              ].map((item, i) => (
                <div key={i} className="group relative rounded-[2.5rem] overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-blue-100/40 hover:-translate-y-2 transition-all duration-500 aspect-square bg-white p-3">
                  <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
                    <Image src={item.img} alt={item.label} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                      <span className="text-white text-xs font-black uppercase tracking-widest">{item.label}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 px-4 bg-[#F1F5FF]">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 rounded-[3.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-blue-500/20">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.15),transparent_70%)] pointer-events-none"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center text-white text-2xl mx-auto mb-8 backdrop-blur-sm">
                  <i className="fas fa-rocket"></i>
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
                  Ready to Lead <br className="hidden md:block" />
                  Your Market?
                </h2>
                <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto font-medium leading-relaxed">
                  Join 5,000+ top brands in India. Get a free technical audit and strategy call with our growth experts today.
                </p>
                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                  <Link href="/contact-us" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-blue-700 font-black rounded-2xl hover:scale-105 transition-all shadow-xl text-sm uppercase tracking-[0.2em]">
                    Book Strategy Call <i className="fas fa-arrow-right"></i>
                  </Link>
                  <Link href="/services" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white/10 border border-white/20 text-white font-bold rounded-2xl hover:bg-white/20 transition-all text-sm uppercase tracking-[0.2em] backdrop-blur-sm">
                    All Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx global>{`
        header {
          background-color: white !important;
          box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1) !important;
        }
      `}</style>
    </main>
  );
}

