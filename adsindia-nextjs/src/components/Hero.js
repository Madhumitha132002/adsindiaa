"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  { image: "/images/new/684ba8c14f7e2d3b7021b6f2_Frame 4273209-p-1600.webp", title: "Promotional SMS", tag: "Bulk Offers", href: "/services/promotional-sms" },
  { image: "/images/new/transactional-sms.webp", title: "Transactional SMS", tag: "Alerts & OTP", href: "/services/transactional-sms" },
  { image: "/images/new/WhatsApp-Chatbot-Automate.webp", title: "WhatsApp Marketing", tag: "Rich Media Broadcast", href: "/services/whatsapp-marketing" },
  { image: "/images/new/OTP-SMS.webp", title: "OTP Verification", tag: "Sub-3s Delivery", href: "/services/otp-sms" },
  { image: "/images/new/meta-2.webp", title: "Meta & Social Ads", tag: "High-ROI Campaigns", href: "/services/meta-ads" },
  { image: "/images/new/Frame-1.webp", title: "Dynamic SMS", tag: "Personalised Texts", href: "/services/dynamic-sms" },
];

const logos = [
  "/images/clients/vit.png", "/images/clients/anna.png",
  "/images/clients/saveetha-university.png", "/images/clients/mgr.png",
  "/images/clients/vel tech.png", "/images/clients/avit.png",
  "/images/clients/vinayagam.png", "/images/clients/dhaanish.png",
  "/images/clients/mm.jpg", "/images/clients/vallalar.jpg",
  "/images/clients/vimal.jpg", "/images/clients/Texile/avm.avif",
  "/images/clients/mottors/bmg.jpg", "/images/clients/mottors/rms.jpg",
  "/images/clients/mottors/sathya.jpg", "/images/clients/mottors/sri.png",
];

export default function Hero() {
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = (idx) => {
    if (idx === active) return;
    setFading(true);
    setTimeout(() => { setActive(idx); setFading(false); }, 350);
  };

  useEffect(() => {
    const t = setInterval(() => {
      const next = (active + 1) % services.length;
      setFading(true);
      setTimeout(() => { setActive(next); setFading(false); }, 350);
    }, 4000);
    return () => clearInterval(t);
  }, [active]);

  const s = services[active];

  return (
    <section className="w-full bg-[#F8FAFF]">
      <div className="max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12">

        {/* ══ MOBILE LAYOUT: flex-col → content → slideshow → buttons ══ */}
        {/* ══ DESKTOP LAYOUT: 2-col grid ══ */}
        <div className="
          flex flex-col
          lg:grid lg:grid-cols-[1fr_1fr] lg:gap-16 lg:items-center
          pt-[72px] lg:pt-[80px]
        ">

          {/* ── 1. TEXT CONTENT (mobile: always first) ── */}
          <div className="text-center lg:text-left pt-6 lg:pt-20 lg:pb-20 order-1">
            <h1 className="text-[1.7rem] sm:text-5xl md:text-6xl lg:text-[3.8rem] font-extrabold leading-[1.15] tracking-tight text-slate-900">
              The Best{" "}
              <span className="bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent">
                Digital Marketing
              </span>{" "}
              Company in India.
            </h1>

            {/* Subtext — desktop only */}
            <p className="hidden md:block mt-5 text-slate-500 text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
              Scale your brand with data-driven Bulk SMS, WhatsApp Marketing, Meta Ads &amp; SEO — trusted by 5,000+ businesses across India.
            </p>

            {/* Stats — desktop only */}
            <div className="hidden md:flex gap-10 mt-7">
              {[["5,000+", "Clients"], ["10+", "Years Exp"], ["99%", "Delivery"]].map(([n, l]) => (
                <div key={l}>
                  <p className="text-2xl font-extrabold bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent">{n}</p>
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mt-0.5">{l}</p>
                </div>
              ))}
            </div>

            {/* CTA — visible on desktop only here; mobile has its own below */}
            <div className="hidden md:flex gap-3 mt-8">
              <Link href="/contact-us" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-violet-600 text-white font-bold text-sm px-7 py-3.5 rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] transition-all">
                Get a Free Proposal
              </Link>
              <Link href="/packages" className="inline-flex items-center gap-2 text-slate-700 font-bold text-sm px-7 py-3.5 rounded-xl border-2 border-slate-200 bg-white hover:border-blue-300 transition-all">
                View Packages
              </Link>
            </div>
          </div>

          {/* ── 2. SLIDESHOW (mobile: second) ── */}
          <div className="relative flex flex-col items-center order-2 py-3 lg:py-16">

            {/* Soft blur bg — desktop */}
            <div className="absolute inset-0 items-center justify-center hidden lg:flex pointer-events-none">
              <div className="w-72 h-72 rounded-full bg-blue-200/25 blur-[90px]" />
            </div>

            {/* Image */}
            <div className={`relative w-[280px] sm:w-[480px] lg:w-[600px] aspect-[4/3] lg:aspect-[16/10] z-10 transition-all duration-350 bg-white rounded-[2rem] border-[6px] border-white shadow-[0_24px_60px_-15px_rgba(0,0,0,0.15)] overflow-hidden group ${fading ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}>
              <Link href={s.href} className="block w-full h-full">
                <Image
                  key={active}
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover group-hover:scale-[1.05] transition-transform duration-700"
                  priority
                  unoptimized
                />
              </Link>
            </div>

            {/* Mobile service chip */}
            <div className="mt-6 flex justify-center lg:hidden">
              <Link
                href={s.href}
                className="group inline-flex items-center gap-3 bg-white/70 backdrop-blur-md border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-full pl-2 pr-4 py-1.5 transition-all active:scale-95 uppercase tracking-wide"
              >
                <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-blue-600 to-violet-500 flex items-center justify-center shadow-md">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                </div>
                <span className="text-[11px] font-[900] text-slate-800 truncate max-w-[180px] pt-0.5">{s.title}</span>
                <svg className="w-3.5 h-3.5 text-blue-600 group-active:translate-x-1 transition-transform stroke-[3px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Mobile dots */}
            <div className="flex justify-center gap-2 mt-5 lg:hidden">
              {services.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ease-out ${i === active ? "w-8 bg-slate-800" : "w-1.5 bg-slate-300"}`}
                />
              ))}
            </div>

            {/* Desktop card */}
            <div className="hidden lg:block absolute bottom-10 -right-10 w-[260px] bg-white rounded-3xl border border-slate-100 shadow-xl p-5 z-20">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.18em] mb-1.5">Current Service</p>
              <h3 className="text-lg font-extrabold text-slate-900 leading-tight">{s.title}</h3>
              <p className="text-xs text-slate-400 mt-0.5 font-medium">{s.tag}</p>
              <div className="flex gap-1.5 mt-3">
                {services.map((_, i) => (
                  <button key={i} onClick={() => goTo(i)} className={`h-1.5 rounded-full transition-all duration-400 ${i === active ? "w-7 bg-gradient-to-r from-blue-500 to-violet-500" : "w-2 bg-slate-200 hover:bg-slate-300"}`} />
                ))}
              </div>
            </div>
          </div>

          {/* ── 3. CTA BUTTONS (mobile: third, below slideshow) ── */}
          <div className="flex gap-2 justify-center order-3 pb-3 md:hidden">
            <Link href="/contact-us" className="flex-1 inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-violet-600 text-white font-bold text-[13px] px-4 py-3 rounded-xl shadow-lg shadow-blue-500/25 active:scale-95 transition-all">
              Get a Free Proposal
            </Link>
            <Link href="/packages" className="flex-1 inline-flex items-center justify-center text-slate-700 font-bold text-[13px] px-4 py-3 rounded-xl border-2 border-slate-200 bg-white active:scale-95 transition-all">
              View Packages
            </Link>
          </div>

        </div>
      </div>

      {/* ── 4. MARQUEE (colourful logos, no grayscale) ── */}
      <div className="border-t border-slate-100 bg-white py-3 md:py-5 overflow-hidden">
        <p className="text-center text-[8px] sm:text-[9px] uppercase tracking-[0.25em] text-slate-400 font-bold mb-2 md:mb-4">
          Trusted by 5,000+ businesses
        </p>
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          <div className="animate-marquee whitespace-nowrap flex items-center gap-5 md:gap-12">
            {[...logos, ...logos].map((src, i) => {
              const big = src.includes("saveetha") || src.includes("anna");
              return (
                <div key={i} className={`relative flex-shrink-0 ${big ? "h-8 md:h-14 min-w-[70px] md:min-w-[140px]" : "h-6 md:h-10 min-w-[50px] md:min-w-[100px]"}`}>
                  <Image src={src} alt="client" fill className="object-contain" sizes="120px" unoptimized />
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </section>
  );
}
