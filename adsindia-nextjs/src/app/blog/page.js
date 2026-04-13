"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import emailjs from '@emailjs/browser';

const recentPosts = [
  { id: 1, image: "/images/poster1.webp", tag: "Branding", tagColor: "#10b981", title: "Premium Brand Identity Solutions", date: "Mar 19, 2026", color: "from-emerald-400 to-emerald-600" },
  { id: 2, image: "/images/poster2.webp", tag: "WhatsApp", tagColor: "#22c55e", title: "WACTO: AI-Powered Automation", date: "Mar 18, 2026", color: "from-green-400 to-green-600" },
  { id: 3, image: "/images/poster3.webp", tag: "SMS", tagColor: "#3b82f6", title: "Smart Link SMS Marketing", date: "Mar 17, 2026", color: "from-blue-400 to-blue-600" },
  { id: 4, image: "/images/poster4.webp", tag: "Meta Ads", tagColor: "#a855f7", title: "Precision-Targeted Meta Ads", date: "Mar 16, 2026", color: "from-purple-400 to-purple-600" },
  { id: 5, image: "/images/poster5.webp", tag: "Growth", tagColor: "#f59e0b", title: "Scale Your Business", date: "Mar 15, 2026", color: "from-amber-400 to-orange-500" },
  { id: 6, image: "/images/poster6.webp", tag: "Product", tagColor: "#ec4899", title: "Unified Product Suite", date: "Mar 14, 2026", color: "from-pink-400 to-rose-500" },
];

const offers = [
  { emoji: "🚀", title: "Free Campaign Audit", desc: "Get your WhatsApp & SMS campaigns reviewed at zero cost." },
  { emoji: "🎯", title: "Meta Ads Starter Pack", desc: "Launch your first Meta Ad in 48 hrs with full setup." },
  { emoji: "💬", title: "Bulk SMS Trial — 500 Free", desc: "Try our bulk SMS platform with 500 messages on us." },
  { emoji: "🌐", title: "Free Landing Page Review", desc: "Send us your URL and get a detailed UX report." },
];

const infoTiles = [
  { icon: "✨", label: "New Feature", value: "Voice OTP Calls Live", color: "text-blue-600 bg-blue-100", promoted: true },
  { icon: "🕐", label: "Hours", value: "Mon – Sat · 9 AM – 7 PM", color: "text-slate-600 bg-slate-100" },
  { icon: "📍", label: "Office", value: "Walajapet - 632513", color: "text-violet-600 bg-violet-100" },
  { icon: "📧", label: "Email", value: "info@adsindiaa.in", color: "text-emerald-600 bg-emerald-100" },
];

export default function BlogPage() {
  const sliderRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleClaimOffer = (offer) => {
    setSelectedOffer(offer);
    setIsModalOpen(true);
    setIsSubmitted(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_weqzrik',
        'template_6oydkri',
        {
          name: formData.name,
          email: 'Not provided via quick claim',
          phone: formData.phone,
          service: `OFFER CLAIM: ${selectedOffer.title}`,
          message: `
⚡ URGENT: OFFER CLAIMED ⚡\n
User: ${formData.name}\n
Phone: ${formData.phone}\n
Offer Name: ${selectedOffer.title}\n
Please assign a rep for immediate follow-up.
          `,
          to_name: 'Ads Indiaa Team',
        },
        'BiD4cZPT8qRxvtBFT'
      );

      setIsSubmitted(true);
      setTimeout(() => {
        setIsModalOpen(false);
        setFormData({ name: '', phone: '' });
      }, 3000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('Failed to send claim request. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      sliderRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <>
      <Header />
      <main className="bp-page">

        {/* ── REDESIGNED HERO ── */}
        <section className="bp-hero relative">
          <div className="hero-bg-blobs">
            <div className="h-blob h-blob-1" />
            <div className="h-blob h-blob-2" />
          </div>
          <div className="hero-content relative z-10">
            <div className="live-pill mb-6">
              <span className="live-dot" /> Live Updates
            </div>
            <h1 className="hero-title">
              Our <span className="g-text">News &amp; Blog</span>
            </h1>
            <p className="hero-sub">
              Stay ahead with our latest insights, product updates, and exclusive offers crafted for our clients.
            </p>
            <div className="hero-actions pt-6">
              <a href="#offers" className="hero-cta-primary">Explore Offers →</a>
              <Link href="/contact-us" className="hero-cta-secondary hidden sm:inline-flex">Get in Touch</Link>
            </div>
          </div>
          
          {/* Ticker / Marquee */}
          <div className="hero-ticker mt-16 relative z-10 w-full overflow-hidden bg-white/40 backdrop-blur-md border-y border-white/60 shadow-sm py-4">
            <div className="t-content animate-marquee whitespace-nowrap flex gap-12 text-sm font-black text-slate-800 uppercase tracking-widest">
              <span>● Offers</span><span>● Updates</span><span>● News</span><span>● Insights</span><span>● Exclusive</span>
              <span>● Offers</span><span>● Updates</span><span>● News</span><span>● Insights</span><span>● Exclusive</span>
              <span>● Offers</span><span>● Updates</span><span>● News</span><span>● Insights</span><span>● Exclusive</span>
            </div>
          </div>
        </section>

        <div className="bp-content space-y-32">

          {/* ── CLEAN POSTS SLIDER ── */}
          <section className="bp-section relative">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <span className="section-eyebrow">Insights</span>
                <h2 className="section-title">Trending Post &amp; <span className="g-text">Expert Updates</span></h2>
                <p className="text-slate-500 mt-2">Swipe through our latest strategies and announcements.</p>
              </div>
              <div className="flex gap-3">
                <button onClick={() => scrollSlider('left')} className="slider-btn"><i className="fas fa-arrow-left"></i></button>
                <button onClick={() => scrollSlider('right')} className="slider-btn"><i className="fas fa-arrow-right"></i></button>
              </div>
            </div>

            <div ref={sliderRef} className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth pb-8 pt-4 -mx-4 px-4 sm:mx-0 sm:px-0">
              {recentPosts.map(p => (
                <div className="w-full sm:w-[500px] shrink-0 snap-center sm:snap-start pr-4 sm:pr-8" key={p.id}>
                  {/* Clean Poster Only */}
                  <div className="w-full aspect-[4/5] bg-slate-100 rounded-3xl overflow-hidden shadow-xl border border-slate-200 relative group">
                     <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        sizes="(max-width:640px) 100vw, 500px"
                        style={{ objectFit: "cover" }}
                        className="transition-transform duration-700 group-hover:scale-105"
                      />
                  </div>
                  {/* Info Below Poster */}
                  <div className="mt-5 space-y-2">
                    <div className="flex items-center gap-3">
                      <span className={`px-2.5 py-1 text-[10px] font-black uppercase tracking-widest text-white rounded bg-gradient-to-r ${p.color}`}>
                        {p.tag}
                      </span>
                      <span className="text-xs font-bold text-slate-400">{p.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 leading-tight">{p.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── QUOTE OF THE WEEK (Animated & Vibrant) ── */}
          <section className="quote-of-week relative overflow-hidden rounded-[3rem] p-10 md:p-20 shadow-2xl">
            {/* Animated Grad BG */}
            <div className="absolute inset-0 bg-[linear-gradient(45deg,#3b82f6,#9333ea,#ec4899,#3b82f6)] bg-[length:400%_400%] animate-gradient-slow z-0" />
            
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start text-white">
              <div className="huge-quote-mark text-6xl md:text-8xl opacity-30 animate-pulse-slow">"</div>
              <div className="flex-1 space-y-6 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur border border-white/30 text-xs font-black uppercase tracking-widest shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-white animate-ping" /> Quote of the Week
                </div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight drop-shadow-xl">
                  Growth is not a coincidence — it's the result of consistent, targeted marketing.
                </h3>
                <div className="flex items-center justify-center md:justify-start gap-4 pt-4">
                  <span className="w-12 h-1 bg-white/50 rounded-full" />
                  <span className="font-bold tracking-widest uppercase text-sm opacity-90">Ads Indiaa Team</span>
                </div>
              </div>
            </div>
          </section>

          {/* ── OFFERS + QUICK INFO + OUTREACH ── */}
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* OFFERS */}
            <section className="flex flex-col gap-6">
              <div className="mb-2">
                <span className="section-eyebrow">Exclusive</span>
                <h2 className="section-title">Unique Opportunities</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {offers.map((o, i) => (
                  <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all group flex flex-col" key={i}>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">{o.emoji}</span>
                      <h3 className="font-bold text-slate-900 leading-tight">{o.title}</h3>
                    </div>
                    <p className="text-sm text-slate-500 mb-6 flex-1">{o.desc}</p>
                    <button onClick={() => handleClaimOffer(o)} className="w-full py-3 bg-slate-50 text-slate-800 font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-blue-600 hover:text-white transition-colors border border-slate-200 hover:border-blue-600">
                      Claim Now
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* INFO & REACH OUT */}
            <section className="flex flex-col gap-6">
              <div className="mb-2">
                <span className="section-eyebrow">Connect</span>
                <h2 className="section-title">Keep in Touch</h2>
              </div>
              
              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm grid grid-cols-2 gap-4">
                 {infoTiles.map((t, i) => (
                   <div key={i} className="flex flex-col gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                     <span className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg shadow-sm ${t.color}`}>{t.icon}</span>
                     <div>
                       <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">{t.label}</p>
                       <p className="text-sm font-bold text-slate-900 mt-0.5">{t.value}</p>
                     </div>
                   </div>
                 ))}
              </div>

              {/* NEW REACH OUT ROW */}
              <div className="grid grid-cols-2 gap-4">
                <a href="https://wa.me/917339109747" target="_blank" className="reach-btn bg-[#25D366] text-white">
                  <i className="fab fa-whatsapp text-xl"></i>
                  <span>WhatsApp Let's talk</span>
                </a>
                <a href="tel:+917339109747" className="reach-btn bg-slate-900 text-white">
                  <i className="fas fa-phone-alt text-lg"></i>
                  <span>Call Us Now +91 73391 09747</span>
                </a>
              </div>
            </section>
          </div>
          
          <div className="pb-10" />

          {/* ── CLAIM OFFER MODAL ── */}
          {isModalOpen && (
            <div className="fixed inset-0 z-[1000] flex items-center justify-center p-6 sm:p-0">
              <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
              <div className="relative bg-white w-full max-w-sm rounded-3xl shadow-2xl border border-slate-100 overflow-hidden transform animate-modal-pop">
                <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center hover:bg-slate-200">
                  <i className="fas fa-times"></i>
                </button>

                <div className="p-8">
                  {!isSubmitted ? (
                    <div className="space-y-6">
                      <div>
                        <span className="text-3xl mb-2 block">{selectedOffer?.emoji}</span>
                        <h3 className="text-xl font-black text-slate-900 leading-tight">Claim: {selectedOffer?.title}</h3>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <input
                            required type="text" placeholder="Full Name"
                            className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-400 outline-none font-bold text-sm"
                            value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          />
                        </div>
                        <div>
                          <input
                            required type="tel" placeholder="Phone Number"
                            className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-400 outline-none font-bold text-sm"
                            value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          />
                        </div>

                        <button disabled={isSubmitting} type="submit" className="w-full py-4 rounded-xl bg-blue-600 text-white font-black uppercase tracking-widest text-[11px] hover:bg-blue-700 transition disabled:opacity-50">
                          {isSubmitting ? 'Sending Request...' : 'Send to Team →'}
                        </button>
                      </form>
                      <p className="text-center text-[10px] font-bold text-slate-400">Our team will reach out to you via WhatsApp or Call immediately.</p>
                    </div>
                  ) : (
                    <div className="py-10 text-center space-y-4">
                      <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl mx-auto">
                        <i className="fas fa-check"></i>
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-slate-900">Request Sent!</h3>
                        <p className="text-sm text-slate-500 mt-2">Our team has been notified and will contact you shortly.</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <style jsx global>{`
        .bp-page {
          min-height: 100vh;
          background: #FAFCFF;
          font-family: 'Inter', system-ui, sans-serif;
          padding-top: 64px;
        }

        /* ── HERO ── */
        .bp-hero {
          min-height: 450px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 80px 24px 0;
          overflow: hidden;
        }
        .hero-bg-blobs { position: absolute; inset: 0; z-index: 0; pointer-events: none; }
        .h-blob { position: absolute; border-radius: 50%; filter: blur(80px); }
        .h-blob-1 { top: 10%; left: -5%; width: 40%; height: 80%; background: rgba(59,130,246,0.15); animation: floatBlog 8s infinite alternate; }
        .h-blob-2 { top: -10%; right: -5%; width: 50%; height: 90%; background: rgba(147,51,234,0.12); animation: floatBlog 10s infinite alternate-reverse; }
        @keyframes floatBlog { to { transform: translateY(40px) scale(1.05); } }

        .live-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #fff;
          border: 1px solid #bfdbfe;
          padding: 6px 16px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 800;
          color: #3b82f6;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          box-shadow: 0 4px 12px rgba(59,130,246,0.08);
        }
        .live-dot { width: 6px; height: 6px; background: #3b82f6; border-radius: 50%; animation: pulse 1.5s infinite; }
        @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(59,130,246,0.4); } 70% { box-shadow: 0 0 0 6px rgba(59,130,246,0); } 100% { box-shadow: 0 0 0 0 rgba(59,130,246,0); } }

        .hero-title {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 900;
          color: #0f172a;
          line-height: 1.1;
          letter-spacing: -0.03em;
          max-width: 800px;
          margin: 0 auto 20px;
        }
        .g-text {
          background: linear-gradient(90deg, #3b82f6, #9333ea);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero-sub { color: #64748b; font-size: 18px; max-width: 600px; margin: 0 auto; line-height: 1.6; }
        .hero-actions { display: flex; gap: 12px; justify-content: center; }
        .hero-cta-primary, .hero-cta-secondary {
          display: inline-flex;
          align-items: center;
          padding: 14px 28px;
          border-radius: 999px;
          font-weight: 800;
          text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .hero-cta-primary { background: #3b82f6; color: #fff; box-shadow: 0 8px 20px rgba(59,130,246,0.25); }
        .hero-cta-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 24px rgba(59,130,246,0.3); }
        .hero-cta-secondary { background: #fff; border: 1.5px solid #e2e8f0; color: #475569; }

        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 30s linear infinite; }

        /* ── LAYOUT ── */
        .bp-content { max-width: 1240px; margin: 0 auto; padding: 60px 24px; }
        .section-eyebrow { font-size: 11px; font-weight: 900; color: #3b82f6; text-transform: uppercase; letter-spacing: 0.15em; }
        .section-title { font-size: 32px; font-weight: 900; color: #0f172a; line-height: 1.2; margin-top: 4px; }

        /* SLIDER BUTTONS */
        .slider-btn {
          width: 48px; height: 48px;
          border-radius: 50%;
          background: #fff;
          border: 1px solid #e2e8f0;
          display: flex; align-items: center; justify-content: center;
          color: #475569;
          transition: all 0.2s;
          box-shadow: 0 4px 6px rgba(0,0,0,0.02);
        }
        .slider-btn:hover { border-color: #3b82f6; color: #3b82f6; transform: translateY(-2px); }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

        /* QUOTE */
        @keyframes gradSlow { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        .animate-gradient-slow { animation: gradSlow 10s ease infinite; }
        .animate-pulse-slow { animation: pulseSlow 4s ease-in-out infinite; font-family: Georgia, serif; line-height: 0.5; }
        @keyframes pulseSlow { 0%, 100% { transform: scale(1); opacity: 0.3; } 50% { transform: scale(1.1); opacity: 0.5; } }

        /* REACH BUTTONS */
        .reach-btn {
          display: flex; flex-direction: column; align-items: flex-start; gap: 8px;
          padding: 24px; border-radius: 20px; text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .reach-btn:hover { transform: translateY(-4px); box-shadow: 0 12px 24px rgba(0,0,0,0.1); }
        .reach-btn span { font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; line-height: 1.4; }

        /* MODAL */
        @keyframes modal-pop { from { opacity: 0; transform: scale(0.95) translateY(10px); } to { opacity: 1; transform: scale(1) translateY(0); } }
        .animate-modal-pop { animation: modal-pop 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
      `}</style>
    </>
  );
}

