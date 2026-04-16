"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";

const services = [
  {
    id: "whatsapp-api",
    title: "WhatsApp Business API",
    tagline: "Powerful Features to Scale Your Business.",
    desc: "Transform your customer communication with our comprehensive Meta-verified API solution. Manage team inbox, broadcast at scale, and use AI chatbots.",
    features: ["Team Inbox & Multi-agent", "WhatsApp Broadcasting", "AI-Powered Chatbot", "Chat Commerce Integration"],
    color: "from-emerald-500 to-green-600",
    bg: "bg-emerald-50 border-emerald-100",
    textHover: "group-hover:text-emerald-700",
    icon: "fab fa-whatsapp"
  },
  {
    id: "whatsapp-bulk",
    title: "WhatsApp Bulk SMS",
    tagline: "Reach thousands via our user-friendly portal.",
    desc: "Send videos, images, audio, and PDF documents seamlessly. Includes a white-label reseller panel for redistributing services to your own clients.",
    features: ["Rich Media Support", "White-Label Reseller Panel", "Detailed Campaign Analytics", "Flexible Messaging Plans"],
    color: "from-teal-500 to-emerald-600",
    bg: "bg-teal-50 border-teal-100",
    textHover: "group-hover:text-teal-700",
    icon: "fab fa-whatsapp-square"
  },
  {
    id: "promo-sms",
    title: "Promotional SMS & DND",
    tagline: "Unmatched results for marketing and brand building.",
    desc: "Infinite reach with minimal effort. Our intuitive platform enables seamless bulk messaging while ensuring full DND compliance for all campaigns.",
    features: ["DND Compliant Messaging", "High Delivery Rates", "Campaign Analytics", "Flexible Business Plans"],
    color: "from-blue-500 to-indigo-600",
    bg: "bg-blue-50 border-blue-100",
    textHover: "group-hover:text-blue-700",
    icon: "fas fa-bullhorn"
  },
  {
    id: "trans-sms",
    title: "Transactional SMS",
    tagline: "24/7 Delivery for critical notifications.",
    desc: "Speed-focused infrastructure for transactional alerts, order updates, and service notifications. Bypasses DND for essential communications.",
    features: ["Instant 24/7 Delivery", "DND Bypass Support", "High Priority Routing", "Detailed Delivery Logs"],
    color: "from-sky-400 to-blue-600",
    bg: "bg-sky-50 border-sky-100",
    textHover: "group-hover:text-sky-700",
    icon: "fas fa-exchange-alt"
  },
  {
    id: "dynamic-sms",
    title: "Dynamic SMS",
    tagline: "Personalized conversations at scale.",
    desc: "Insert custom variables like names, order IDs, and payment links to create highly relevant messages that drive up to 3x more engagement.",
    features: ["Smart Variable Support", "Real-time Data Integration", "Automated Trigger Workflows", "REST API for Developers"],
    color: "from-violet-500 to-purple-600",
    bg: "bg-violet-50 border-violet-100",
    textHover: "group-hover:text-violet-700",
    icon: "fas fa-magic"
  },
  {
    id: "otp-sms",
    title: "Secure OTP Solutions",
    tagline: "Trust, verified in milliseconds.",
    desc: "Robust, secure verification for apps and websites. Seamless integration for 2FA, logins, and high-security transactions across any platform.",
    features: ["Fast, Reliable Delivery", "Robust Security Protocols", "Seamless App Integration", "High Volume OTP Processing"],
    color: "from-slate-700 to-slate-900",
    bg: "bg-slate-50 border-slate-200",
    textHover: "group-hover:text-slate-800",
    icon: "fas fa-shield-alt"
  },
  {
    id: "meta-ads",
    title: "Meta Ads (FB & IG)",
    tagline: "Specialized campaigns for real business results.",
    desc: "Leverage the full potential of Meta's advertising network. Data-driven strategies for demographic targeting and continuous ROI optimization.",
    features: ["Advanced Audience Targeting", "Creative Ad Production", "Continuous ROI Optimization", "A/B Testing & Analysis"],
    color: "from-blue-600 to-blue-800",
    bg: "bg-blue-50 border-blue-200",
    textHover: "group-hover:text-blue-800",
    icon: "fab fa-facebook-f"
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    tagline: "Captivate your audience with strategic visual thinking.",
    desc: "From brand identity and logos to marketing materials like brochures and digital graphics. Unlimited revisions for 100% brand satisfaction.",
    features: ["Brand Identity Packages", "Marketing & Ad Collateral", "Unlimited Design Revisions", "All Source File Formats"],
    color: "from-rose-400 to-pink-600",
    bg: "bg-rose-50 border-rose-100",
    textHover: "group-hover:text-rose-700",
    icon: "fas fa-paint-brush"
  },
  {
    id: "web-design",
    title: "Web Design & Development",
    tagline: "Stunning, functional websites that perform.",
    desc: "Tailored solutions ensuring optimal UX, fast loading times, and maximum conversions. SEO-optimized and mobile-first responsive architecture.",
    features: ["Responsive Mobile-First Design", "SEO Optimized Architecture", "E-commerce & CMS Support", "Lightning-Fast Performance"],
    color: "from-cyan-400 to-blue-500",
    bg: "bg-cyan-50 border-cyan-100",
    textHover: "group-hover:text-cyan-700",
    icon: "fas fa-laptop-code"
  },
  {
    id: "voice-obd",
    title: "Voice OTP & OBD",
    tagline: "Connect with the power of speech.",
    desc: "Automated outbound dialing with natural AI voices. Ideal for urgent notifications, IVR surveys, and mass communication at scale.",
    features: ["Natural AI Voices", "IVR Keypad Input", "Retry Capability", "Call Status Recording"],
    color: "from-amber-400 to-orange-500",
    bg: "bg-amber-50 border-amber-100",
    textHover: "group-hover:text-amber-700",
    icon: "fas fa-phone-volume"
  }
];

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className="products-page">
        
        {/* ── REDESIGNED HERO ── */}
        <section className="pr-hero overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F1F5FF] via-white to-[#F1F5FF] z-0" />
          <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[80%] bg-blue-400/10 blur-[100px] rounded-full z-0 animate-pulse-slow" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[80%] bg-violet-400/10 blur-[100px] rounded-full z-0 animate-pulse-slow" style={{ animationDelay: '2s' }} />

          <div className="pr-container relative z-10 pt-16">
            <span className="pr-badge animate-fade-in-up">The Communication Cloud</span>
            <h1 className="pr-title animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              One Platform. <br />
              <span className="g-text text-black">Infinite Reach.</span>
            </h1>
            <p className="pr-sub animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Scale your customer engagement with industry-leading infrastructure designed for developer simplicity and enterprise reliability.
            </p>
          </div>
        </section>

        {/* ── NEW FLAGSHIP PRODUCTS SECTION ── */}
        <section className="flagship-section relative z-20 -mt-8 pb-32">
          <div className="pr-container">
            <div className="flex flex-col gap-24">
              
              {/* Product 1: Bulk SMS */}
              <div className="flagship-card bg-white rounded-[3rem] shadow-2xl shadow-blue-900/5 border border-slate-100 overflow-hidden flex flex-col lg:flex-row group">
                <div className="lg:w-1/2 p-12 md:p-16 flex flex-col justify-center">
                  <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-black uppercase tracking-widest">
                    <i className="fas fa-fire"></i> Flagship Portal
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
                    Ads Indiaa <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">SMS Workspace</span>
                  </h2>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    Our proprietary portal engineered for scale. Send millions of promotional and transactional messages securely with unparalleled delivery rates.
                  </p>
                  <ul className="space-y-4 mb-10">
                    <li className="flex items-center gap-3 font-bold text-slate-700">
                      <i className="fas fa-check-circle text-blue-500 text-xl"></i> Built-in DND Engine
                    </li>
                    <li className="flex items-center gap-3 font-bold text-slate-700">
                      <i className="fas fa-check-circle text-blue-500 text-xl"></i> Live Delivery Reports
                    </li>
                    <li className="flex items-center gap-3 font-bold text-slate-700">
                      <i className="fas fa-check-circle text-blue-500 text-xl"></i> White-Label Ready
                    </li>
                  </ul>
                  <Link href="/contact-us" className="inline-flex justify-center items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl shadow-blue-500/20 hover:scale-105 transition-transform w-max">
                    Book an SMS Demo
                  </Link>
                </div>
                <div className="lg:w-1/2 bg-slate-50 relative min-h-[400px] border-t lg:border-t-0 lg:border-l border-slate-100 p-8 flex items-center justify-center">
                  {/* Decorative Video Chrome */}
                  <div className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl border border-white bg-white group-hover:shadow-blue-500/10 transition-shadow">
                    <div className="h-8 bg-slate-100 flex items-center px-4 gap-2 border-b border-slate-200">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                    </div>
                    <video 
                      autoPlay loop muted playsInline 
                      className="w-full h-auto aspect-video object-cover"
                      preload="metadata"
                    >
                      <source src="/videos/Sms Demo.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>

              {/* Product 2: WhatsApp CRM */}
              <div className="flagship-card bg-white rounded-[3rem] shadow-2xl shadow-violet-900/5 border border-slate-100 overflow-hidden flex flex-col lg:flex-row-reverse group">
                <div className="lg:w-1/2 p-12 md:p-16 flex flex-col justify-center">
                  <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#25D366]/10 text-[#128C7E] text-xs font-black uppercase tracking-widest">
                    <i className="fab fa-whatsapp"></i> WhatsApp Platform
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
                    Verified <span className="bg-gradient-to-r from-[#25D366] to-[#128C7E] bg-clip-text text-transparent">WhatsApp CRM</span>
                  </h2>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    Automate your conversations with intelligent chatbots and broadcast rich media to thousands. Your complete Meta-verified inbox solution.
                  </p>
                  <ul className="space-y-4 mb-10">
                    <li className="flex items-center gap-3 font-bold text-slate-700">
                      <i className="fas fa-check-circle text-[#25D366] text-xl"></i> AI Auto-Replies
                    </li>
                    <li className="flex items-center gap-3 font-bold text-slate-700">
                      <i className="fas fa-check-circle text-[#25D366] text-xl"></i> Bulk Media Broadcasts
                    </li>
                    <li className="flex items-center gap-3 font-bold text-slate-700">
                      <i className="fas fa-check-circle text-[#25D366] text-xl"></i> Multi-Agent Team Inbox
                    </li>
                  </ul>
                  <Link href="/contact-us" className="inline-flex justify-center items-center px-8 py-4 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl shadow-[#25D366]/20 hover:scale-105 transition-transform w-max">
                    Get Platform Access
                  </Link>
                </div>
                <div className="lg:w-1/2 bg-slate-50 relative min-h-[400px] border-t lg:border-t-0 lg:border-r border-slate-100 p-8 flex items-center justify-center">
                  {/* Decorative Video Chrome */}
                  <div className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl border border-white bg-white group-hover:shadow-[#25D366]/10 transition-shadow">
                    <div className="h-8 bg-slate-100 flex items-center px-4 gap-2 border-b border-slate-200">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                    </div>
                    <video 
                      autoPlay loop muted playsInline 
                      className="w-full h-auto aspect-video object-cover"
                      preload="metadata"
                    >
                      <source src="/videos/Whatsapp Demo.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── SERVICE ECOSYSTEM GRID ── */}
        <section className="pr-grid-section pt-10 pb-32 bg-white relative">
          <div className="pr-container">
            <div className="text-center mb-20">
              <span className="inline-block font-black text-xs uppercase tracking-widest text-violet-600 bg-violet-50 px-4 py-1.5 rounded-full mb-4">Complete Solutions</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900">The Full Service <span className="g-text">Ecosystem</span></h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto mt-6">From raw communication protocols to compelling visual design, explore everything Ads Indiaa offers.</p>
            </div>

            <div className="pr-grid">
              {services.map((p, idx) => (
                <div key={p.id} className={`pr-card group ${p.bg} transition-all duration-500 hover:-translate-y-2`} style={{ animationDelay: `${idx * 0.05}s` }}>
                  <div className="pr-card-top">
                    <div className={`pr-icon-wrap bg-gradient-to-br ${p.color} shadow-lg text-white mb-6 p-4 inline-flex rounded-2xl`}>
                      <i className={`${p.icon} text-3xl`} />
                    </div>
                    <h3 className={`pr-card-title text-2xl font-black text-slate-900 mb-2 ${p.textHover} transition-colors`}>{p.title}</h3>
                    <p className="pr-card-tagline text-sm font-bold text-slate-400 uppercase tracking-wide mb-4">{p.tagline}</p>
                    <p className="pr-card-desc text-slate-600 leading-relaxed font-medium">{p.desc}</p>
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-slate-200/50">
                    <ul className="pr-features grid gap-3">
                      {p.features.map((f, i) => (
                        <li key={i} className="pr-feature-item flex items-center gap-3 text-sm font-bold text-slate-700">
                          <i className={`fas fa-check-circle bg-clip-text text-transparent bg-gradient-to-r ${p.color}`} />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href="/contact-us" className={`mt-8 block text-center bg-white text-slate-800 border border-slate-200 hover:border-blue-400 font-bold px-6 py-4 rounded-xl transition-all shadow-sm hover:shadow-md uppercase text-xs tracking-widest`}>
                    Inquire Now →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMPARISON / FEATURE BAR ── */}
        <section className="pr-feature-bar relative overflow-hidden bg-[#0f172a] text-white py-24">
          <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none"></div>
          
          <div className="pr-container relative z-10">
             <div className="text-center mb-16">
              <h2 className="text-3xl font-black">Why choose our infrastructure?</h2>
             </div>
            <div className="pb-grid grid md:grid-cols-3 gap-12 text-center md:text-left">
              <div className="pb-item">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-blue-400 text-3xl mb-6 mx-auto md:mx-0 border border-white/10">
                  <i className="fas fa-code" />
                </div>
                <h3 className="text-xl font-bold mb-3">Developer Friendly</h3>
                <p className="text-slate-400 leading-relaxed">Robust APIs, comprehensive SDKs, and crystal clear documentation for fast engineering integration.</p>
              </div>
              <div className="pb-item">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-violet-400 text-3xl mb-6 mx-auto md:mx-0 border border-white/10">
                  <i className="fas fa-bolt" />
                </div>
                <h3 className="text-xl font-bold mb-3">Ultra-Low Latency</h3>
                <p className="text-slate-400 leading-relaxed">Direct carrier connections and proprietary routing tech ensuring your messages arrive in mere seconds.</p>
              </div>
              <div className="pb-item">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-emerald-400 text-3xl mb-6 mx-auto md:mx-0 border border-white/10">
                  <i className="fas fa-lock" />
                </div>
                <h3 className="text-xl font-bold mb-3">Enterprise Security</h3>
                <p className="text-slate-400 leading-relaxed">ISO certified data handling, strict DND compliance, and military-grade 256-bit encryption for every payload.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="pr-cta bg-[#F1F5FF] pt-32 pb-32">
          <div className="pr-container">
            <div className="pr-cta-box bg-white rounded-[3rem] p-12 md:p-20 text-center shadow-2xl border border-blue-100 relative overflow-hidden">
               <div className="absolute top-[-50%] left-[-10%] w-[50%] h-[150%] bg-blue-400/10 blur-[80px] rounded-full transform -rotate-45"></div>
               <div className="absolute bottom-[-50%] right-[-10%] w-[50%] h-[150%] bg-violet-400/10 blur-[80px] rounded-full transform rotate-45"></div>
               
               <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 drop-shadow-sm">Build Your Enterprise Stack</h2>
                <p className="text-lg text-slate-600 mb-10">Join world-class engineering and marketing teams who scale their communications with Ads Indiaa.</p>
                <Link href="/contact-us" className="inline-block px-10 py-5 bg-gradient-to-r from-blue-500 to-violet-600 text-white rounded-full font-black uppercase tracking-widest text-sm shadow-xl shadow-blue-500/20 hover:-translate-y-1 transition-transform">
                  Contact Sales Experts
                </Link>
               </div>
            </div>
          </div>
        </section>
      </main>

      <style jsx global>{`
        .products-page {
          background: #F1F5FF;
          font-family: 'Inter', system-ui, sans-serif;
          padding-top: 80px;
        }
        .pr-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* HERO */
        .pr-hero {
          position: relative;
          padding: 80px 0 160px;
          text-align: center;
        }
        .pr-badge {
          display: inline-block;
          background: rgba(59,130,246,0.1);
          border: 1px solid rgba(59,130,246,0.2);
          color: #3b82f6;
          padding: 6px 18px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          margin-bottom: 24px;
        }
        .pr-title {
          font-size: clamp(3rem, 7vw, 5.5rem);
          font-weight: 900;
          line-height: 1.05;
          letter-spacing: -0.04em;
          margin-bottom: 24px;
          color: #0f172a;
        }
        .g-text {
          background: linear-gradient(90deg, #3b82f6, #9333ea);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .pr-sub {
          font-size: 19px;
          color: #64748b;
          max-width: 720px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* GRID */
        .pr-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        .pr-card {
          border-radius: 32px;
          padding: 40px;
          display: flex;
          flex-direction: column;
          animation: slideUpCard 0.6s ease-out both;
        }
        @keyframes slideUpCard {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .pr-grid { grid-template-columns: 1fr; }
          .pb-grid { grid-template-columns: 1fr; gap: 40px; text-align: center; }
          .pb-item { display: flex; flex-direction: column; align-items: center; }
        }
      `}</style>
    </>
  );
}
