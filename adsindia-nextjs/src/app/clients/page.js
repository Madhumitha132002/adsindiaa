"use client";

import Link from "next/link";
import Header from "@/components/Header";

const clients = [
  { id: 1, name: "Global Tech", industry: "Technology", logo: "🚀", highlight: "200% ROI in 6 months", pastel: "from-blue-50 to-blue-100", accent: "#3b82f6" },
  { id: 2, name: "Swift Move", industry: "Logistics", logo: "📦", highlight: "50k+ Leads Generated", pastel: "from-violet-50 to-violet-100", accent: "#7c3aed" },
  { id: 3, name: "Sky Finance", industry: "Banking", logo: "🏦", highlight: "99.9% SMS Delivery Rate", pastel: "from-indigo-50 to-indigo-100", accent: "#4f46e5" },
  { id: 4, name: "Eco Mart", industry: "E-commerce", logo: "🛒", highlight: "3x Checkout Conversion", pastel: "from-purple-50 to-purple-100", accent: "#9333ea" },
  { id: 5, name: "Pulse Health", industry: "Healthcare", logo: "🏥", highlight: "Seamless OTP Integration", pastel: "from-sky-50 to-sky-100", accent: "#0284c7" },
  { id: 6, name: "Apex Media", industry: "Entertainment", logo: "🎬", highlight: "Social Media 10x Reach", pastel: "from-fuchsia-50 to-fuchsia-100", accent: "#a21caf" },
  { id: 7, name: "Vertex Real Estate", industry: "Developers", logo: "🏗️", highlight: "Luxury Project Sold Out", pastel: "from-blue-50 to-indigo-100", accent: "#6366f1" },
  { id: 8, name: "Terra Energy", industry: "Industrial", logo: "⚡", highlight: "Corporate Identity Redesign", pastel: "from-violet-50 to-purple-100", accent: "#8b5cf6" },
];

const testimonials = [
  {
    quote: "Ads Indiaa transformed our customer engagement completely. Their bulk WhatsApp campaigns delivered a 450% jump in traffic within just 3 months — absolutely unmatched results.",
    name: "Rahul Sharma",
    company: "Eco Mart",
    service: "WhatsApp Marketing",
    stars: 5,
    bg: "bg-blue-50",
    border: "border-blue-100",
    badge: "bg-blue-100 text-blue-700",
    avatar: "bg-gradient-to-br from-blue-400 to-blue-600",
  },
  {
    quote: "The OTP SMS integration was flawless. Our customer verification drop-offs reduced by 40% and trust scores soared. The team is incredibly responsive and professional.",
    name: "Priya Nair",
    company: "Global Tech",
    service: "OTP SMS Integration",
    stars: 5,
    bg: "bg-violet-50",
    border: "border-violet-100",
    badge: "bg-violet-100 text-violet-700",
    avatar: "bg-gradient-to-br from-violet-400 to-violet-600",
  },
  {
    quote: "We partnered with Ads Indiaa for our Meta Ads campaigns and the ROI was phenomenal. Their creativity and data-backed strategies helped us scale faster than we imagined.",
    name: "Anand Kumar",
    company: "Apex Media",
    service: "Meta Ads Management",
    stars: 5,
    bg: "bg-indigo-50",
    border: "border-indigo-100",
    badge: "bg-indigo-100 text-indigo-700",
    avatar: "bg-gradient-to-br from-indigo-400 to-indigo-600",
  },
];

export default function ClientsPage() {
  return (
    <>
      <Header />
      <main className="clients-page">

        {/* ── HERO ── */}
        <section className="cl-hero">
          <div className="cl-hero-blobs">
            <div className="blob blob-1" />
            <div className="blob blob-2" />
            <div className="blob blob-3" />
          </div>
          <div className="hero-inner">
            <span className="cl-badge">✦ Success at Scale</span>
            <h1 className="cl-title">
              We don&apos;t just serve<br />
              <span className="g-text">We Accelerate.</span>
            </h1>
            <p className="cl-sub">
              Join the league of 2,000+ businesses who trust Ads Indiaa to handle
              their most critical marketing and communication channels.
            </p>
            <div className="hero-stats">
              <div className="stat-pill"><b>2K+</b> <span>Global Clients</span></div>
              <div className="stat-pill"><b>98%</b> <span>Client Retention</span></div>
              <div className="stat-pill"><b>50M+</b> <span>Daily Reach</span></div>
            </div>
          </div>
        </section>

        {/* ── MARQUEE ── */}
        <div className="cl-marquee">
          <div className="marquee-content">
            {[...Array(20)].map((_, i) => (
              <span key={i} className="m-item">Our Partners · Trusted · Results · Scale · Growth · </span>
            ))}
          </div>
        </div>

        <div className="cl-content">

          {/* ── CLIENT CARDS GRID ── */}
          <section className="cl-section">
            <div className="cl-header">
              <span className="cl-eyebrow">Our Clients</span>
              <h2 className="cl-sec-title">The Client Ecosystem</h2>
              <p className="cl-sec-sub">Hover over each partner to see the impact we&apos;ve made together.</p>
            </div>
            <div className="cl-grid">
              {clients.map((c, idx) => (
                <div key={c.id} className="cl-card" style={{ animationDelay: `${idx * 0.08}s` }}>
                  <div className="cl-card-front">
                    <span className="cl-logo">{c.logo}</span>
                    <div className="cl-info">
                      <h3 className="cl-name">{c.name}</h3>
                      <p className="cl-ind">{c.industry}</p>
                    </div>
                  </div>
                  <div className="cl-card-reveal">
                    <p className="cl-highlight">{c.highlight}</p>
                    <Link href="/contact-us" className="cl-view">Explore Path →</Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── TESTIMONIALS ── */}
          <section className="cl-section">
            <div className="cl-header">
              <span className="cl-eyebrow">Testimonials</span>
              <h2 className="cl-sec-title">Voices of Our Clients</h2>
              <p className="cl-sec-sub">Real stories from our most valued partners about their journey with us.</p>
            </div>
            <div className="testimonials-grid">
              {testimonials.map((t, i) => (
                <div key={i} className={`tcard ${t.bg} border ${t.border}`} style={{ animationDelay: `${i * 0.12}s` }}>
                  <div className="tcard-stars">
                    {[...Array(t.stars)].map((_, s) => (
                      <span key={s} className="star">★</span>
                    ))}
                  </div>
                  <blockquote className="tcard-quote">&ldquo;{t.quote}&rdquo;</blockquote>
                  <div className="tcard-footer">
                    <div className={`tcard-avatar ${t.avatar}`}>
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="tcard-name">{t.name}</p>
                      <p className="tcard-company">{t.company}</p>
                      <span className={`tcard-service ${t.badge}`}>{t.service}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── CTA ── */}
          <section className="cl-bottom-cta">
            <div className="cta-box">
              <div className="cta-blob" />
              <div className="cta-blob cta-blob-2" />
              <div className="relative z-10">
                <span className="cta-badge">Ready to Grow?</span>
                <h2 className="cta-title">Ready to be our next success story?</h2>
                <p className="cta-sub">Let&apos;s build something that actually converts.</p>
                <Link href="/contact-us" className="cta-btn">Start Your Growth Journey →</Link>
              </div>
            </div>
          </section>

        </div>
      </main>

      <style jsx global>{`
        .clients-page {
          background: #F1F5FF;
          min-height: 100vh;
          font-family: 'Inter', system-ui, sans-serif;
          color: #0f172a;
          padding-top: 80px;
          overflow-x: hidden;
        }

        /* ── HERO ── */
        .cl-hero {
          position: relative;
          padding: 100px 24px 120px;
          text-align: center;
          overflow: hidden;
        }
        .cl-hero-blobs { position: absolute; inset: 0; pointer-events: none; z-index: 0; }
        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
        }
        .blob-1 {
          top: -10%; left: -5%;
          width: 55%; height: 100%;
          background: rgba(59,130,246,0.12);
          animation: floatBlob 10s ease-in-out infinite;
        }
        .blob-2 {
          top: 10%; right: -5%;
          width: 50%; height: 90%;
          background: rgba(147,51,234,0.10);
          animation: floatBlob 13s ease-in-out infinite reverse;
        }
        .blob-3 {
          bottom: -20%; left: 25%;
          width: 45%; height: 70%;
          background: rgba(99,102,241,0.08);
          animation: floatBlob 16s ease-in-out infinite 2s;
        }
        @keyframes floatBlob {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-30px) scale(1.04); }
        }

        .hero-inner {
          position: relative;
          z-index: 2;
          max-width: 800px;
          margin: 0 auto;
        }

        .cl-badge {
          display: inline-block;
          background: rgba(59,130,246,0.1);
          border: 1px solid rgba(59,130,246,0.2);
          color: #3b82f6;
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          padding: 6px 18px;
          border-radius: 999px;
          margin-bottom: 28px;
        }
        .cl-title {
          font-size: clamp(2.5rem, 6vw, 5rem);
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
        .cl-sub {
          font-size: 18px;
          color: #64748b;
          max-width: 680px;
          margin: 0 auto 48px;
          line-height: 1.6;
        }
        .hero-stats {
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .stat-pill {
          background: rgba(255,255,255,0.85);
          border: 1.5px solid rgba(59,130,246,0.15);
          padding: 14px 28px;
          border-radius: 999px;
          display: flex;
          align-items: center;
          gap: 10px;
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 12px rgba(59,130,246,0.08);
        }
        .stat-pill b { color: #0f172a; font-size: 20px; }
        .stat-pill span { color: #64748b; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; }

        /* ── MARQUEE ── */
        .cl-marquee {
          background: #eff6ff;
          border-top: 1px solid rgba(59,130,246,0.1);
          border-bottom: 1px solid rgba(59,130,246,0.1);
          padding: 14px 0;
          overflow: hidden;
          white-space: nowrap;
        }
        .marquee-content {
          display: inline-block;
          animation: marquee 50s linear infinite;
        }
        .m-item {
          font-size: 12px;
          font-weight: 900;
          color: rgba(59,130,246,0.3);
          text-transform: uppercase;
          letter-spacing: 0.2em;
          padding-right: 8px;
        }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }

        /* ── LAYOUT ── */
        .cl-content { max-width: 1240px; margin: 0 auto; padding: 80px 24px 120px; }
        .cl-section { margin-bottom: 100px; }
        .cl-header { margin-bottom: 48px; }
        .cl-eyebrow {
          display: inline-block;
          font-size: 10px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: #3b82f6;
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          padding: 5px 14px;
          border-radius: 999px;
          margin-bottom: 12px;
        }
        .cl-sec-title { font-size: 32px; font-weight: 900; margin-bottom: 8px; color: #0f172a; }
        .cl-sec-sub { color: #64748b; font-size: 16px; }

        /* ── CLIENT CARDS ── */
        .cl-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        .cl-card {
          position: relative;
          background: #fff;
          border: 1.5px solid rgba(59,130,246,0.1);
          border-radius: 24px;
          padding: 32px 24px;
          height: 180px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(59,130,246,0.06);
          animation: slideUpCard 0.5s ease-out both;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        @keyframes slideUpCard {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .cl-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(59,130,246,0.14);
        }
        .cl-card-front {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
          transition: transform 0.4s ease, opacity 0.3s ease;
        }
        .cl-card:hover .cl-card-front {
          transform: translateY(-100%);
          opacity: 0;
        }
        .cl-logo { font-size: 32px; transition: transform 0.3s; }
        .cl-card:hover .cl-logo { transform: scale(1.15); }
        .cl-name { font-size: 15px; font-weight: 800; margin: 0; color: #0f172a; }
        .cl-ind { font-size: 11px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.1em; margin: 0; }

        .cl-card-reveal {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #3b82f6, #9333ea);
          padding: 28px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transform: translateY(101%);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 22px;
        }
        .cl-card:hover .cl-card-reveal { transform: translateY(0); }
        .cl-highlight { color: #fff; font-size: 17px; font-weight: 900; line-height: 1.25; }
        .cl-view {
          color: rgba(255,255,255,0.85);
          font-size: 12px;
          font-weight: 800;
          text-decoration: none;
          border-bottom: 1.5px solid rgba(255,255,255,0.3);
          padding-bottom: 2px;
          align-self: flex-start;
          transition: color 0.2s;
        }
        .cl-view:hover { color: #fff; }

        /* ── TESTIMONIALS ── */
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .tcard {
          border-radius: 28px;
          padding: 36px 32px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          animation: slideUpCard 0.6s ease-out both;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .tcard:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 48px rgba(59,130,246,0.12);
        }
        .tcard-stars { display: flex; gap: 4px; }
        .star { color: #f59e0b; font-size: 18px; }
        .tcard-quote {
          font-size: 15px;
          color: #334155;
          line-height: 1.7;
          font-style: italic;
          margin: 0;
          flex: 1;
        }
        .tcard-footer { display: flex; align-items: center; gap: 16px; margin-top: 8px; }
        .tcard-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 20px;
          font-weight: 900;
          flex-shrink: 0;
        }
        .tcard-name { font-size: 14px; font-weight: 800; color: #0f172a; margin: 0 0 2px; }
        .tcard-company { font-size: 12px; color: #64748b; font-weight: 600; margin: 0 0 6px; }
        .tcard-service {
          display: inline-block;
          font-size: 10px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding: 3px 10px;
          border-radius: 999px;
        }

        /* ── CTA ── */
        .cl-bottom-cta { text-align: center; }
        .cta-box {
          background: linear-gradient(135deg, #fff 0%, #f0f5ff 100%);
          border: 1.5px solid rgba(59,130,246,0.12);
          border-radius: 48px;
          padding: 80px 40px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(59,130,246,0.08);
        }
        .cta-blob {
          position: absolute;
          top: -60px; right: -60px;
          width: 300px; height: 300px;
          background: rgba(59,130,246,0.08);
          border-radius: 50%;
          filter: blur(60px);
        }
        .cta-blob-2 {
          bottom: -60px; left: -60px;
          top: auto; right: auto;
          background: rgba(147,51,234,0.08);
        }
        .cta-badge {
          display: inline-block;
          font-size: 10px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: #9333ea;
          background: #f3e8ff;
          border: 1px solid #e9d5ff;
          padding: 5px 14px;
          border-radius: 999px;
          margin-bottom: 20px;
        }
        .cta-title { font-size: 36px; font-weight: 900; margin-bottom: 12px; color: #0f172a; }
        .cta-sub { color: #64748b; font-size: 18px; margin-bottom: 32px; }
        .cta-btn {
          display: inline-block;
          background: linear-gradient(90deg, #3b82f6, #9333ea);
          color: #fff;
          font-size: 15px;
          font-weight: 900;
          padding: 18px 44px;
          border-radius: 999px;
          text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 12px 32px rgba(59,130,246,0.3);
        }
        .cta-btn:hover { transform: translateY(-3px); box-shadow: 0 20px 40px rgba(59,130,246,0.35); }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .cl-grid { grid-template-columns: repeat(2, 1fr); }
          .testimonials-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .cl-hero { padding: 60px 20px 80px; }
          .cl-grid { grid-template-columns: 1fr; }
          .testimonials-grid { grid-template-columns: 1fr; }
          .hero-stats { gap: 10px; }
          .stat-pill { width: 100%; justify-content: center; }
          .cta-box { padding: 60px 24px; border-radius: 32px; }
          .cta-title { font-size: 26px; }
        }
      `}</style>
    </>
  );
}
