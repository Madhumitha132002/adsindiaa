"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
export default function Hero() {
  const services = [
    {
      image: '/images/services/promo_3d.webp',
      title: 'Promotional SMS Marketing'
    },
    {
      image: '/images/services/transac_3d.webp',
      title: 'Transactional SMS Solutions'
    },
    {
      image: '/images/services/whatsapp_3d.webp',
      title: 'WhatsApp Business API'
    },
    {
      image: '/images/services/OTP SMS.webp',
      title: 'OTP & Authentication Services'
    },
    {
      image: '/images/services/Meta Ads.webp',
      title: 'Meta & Social Media Advertising'
    },
    {
      image: '/images/services/Dynamic SMS.webp',
      title: 'Dynamic & Personalized Messaging'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % services.length);
        setIsAnimating(false);
      }, 500);
    }, 4000);

    return () => clearInterval(timer);
  }, [services.length]);

  return (
    <section className="relative w-full bg-[#F1F5FF] overflow-hidden pt-4 pb-6 lg:pt-6">

      {/* Subtle decorative blobs */}
      <div className="absolute top-[-120px] right-[-120px] w-[480px] h-[480px] rounded-full bg-gradient-to-br from-blue-400/15 to-violet-400/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-80px] left-[-80px] w-[320px] h-[320px] rounded-full bg-gradient-to-tr from-violet-400/15 to-blue-400/10 blur-2xl pointer-events-none" />

      <div className="max-w-[1380px] mx-auto w-full px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-10 items-center mb-10 lg:mb-24">

          {/* ── Left Column ── */}
          <div className="space-y-5 md:space-y-7 text-center lg:text-left mt-4 md:mt-0">
            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-extrabold leading-[1.1] text-slate-900 tracking-tight">
              The Best{' '}
              <span className="bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent">
                Digital Marketing
              </span>{' '}
              Company in India.
            </h1>

            {/* Subheadline */}
            <p className="text-slate-500 text-base md:text-xl font-medium max-w-xl leading-relaxed mx-auto lg:mx-0 opacity-90">
              Scale your brand, increase organic traffic, and generate high-quality leads with our data-driven bulk SMS, SEO, and marketing strategies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
              <Link
                href="/contact-us"
                className="px-8 py-3.5 md:py-4 rounded-2xl font-bold text-[14px] md:text-[15px] text-white bg-gradient-to-r from-blue-500 to-violet-600 shadow-lg shadow-blue-500/25 active:scale-95 transition-all text-center"
              >
                Get a Free Proposal
              </Link>
              <Link
                href="/packages"
                className="px-8 py-3.5 md:py-4 rounded-2xl font-bold text-[14px] md:text-[15px] text-slate-700 border-2 border-slate-200 bg-white active:scale-95 transition-all text-center"
              >
                View Our Packages
              </Link>
            </div>
          </div>

          {/* ── Right Column (Modern Premium Slideshow) ── */}
          <div className="relative h-[380px] sm:h-[450px] md:h-[550px] lg:h-[650px] flex items-center justify-center">
            
            {/* Background Aura Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400 rounded-full aura-glow animate-aura-1 hidden md:block" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-violet-400 rounded-full aura-glow animate-aura-2 hidden md:block" />

            {/* Slide Container with Perspective */}
            <div className={`relative w-full aspect-square max-w-[320px] sm:max-w-[450px] md:max-w-[550px] lg:max-w-[600px] transition-all duration-1000 transform ${isAnimating ? 'opacity-0 scale-90 -rotate-3' : 'opacity-100 scale-100 rotate-0'}`}>
              <div className="relative w-full h-full flex items-center justify-center p-2 md:p-4">
                <Image
                  src={services[currentSlide].image}
                  alt={services[currentSlide].title}
                  width={650}
                  height={650}
                  className="object-contain drop-shadow-[0_15px_40px_rgba(59,130,246,0.2)] md:drop-shadow-[0_20px_60px_rgba(59,130,246,0.25)]"
                  priority
                  unoptimized={true}
                />
              </div>

              {/* Floating Glassmorphism Card (Minimalist) */}
              <div className="absolute -bottom-2 left-6 right-6 md:bottom-8 md:-right-4 md:left-auto md:w-[240px] glass-card rounded-[1.2rem] md:rounded-[1.5rem] p-3.5 md:p-4 pt-4.5 md:pt-5 transition-all duration-700 delay-300 transform translate-y-0 group">
                <div className="flex flex-col gap-1 md:gap-1.5">
                  <span className="text-[8px] md:text-[9px] font-bold tracking-[0.15em] text-blue-600 uppercase opacity-60">Expertise</span>
                  <h3 className="text-base md:text-xl font-black text-slate-900 leading-tight">
                    {services[currentSlide].title}
                  </h3>
                  <div className="mt-1 flex md:mt-1.5 gap-1">
                    {services.map((_, idx) => (
                      <div 
                        key={idx} 
                        className={`h-1 rounded-full transition-all duration-500 ${idx === currentSlide ? 'w-6 bg-blue-600' : 'w-1.5 bg-slate-200'}`} 
                      />
                    ))}
                  </div>
                </div>

                {/* Shimmer Effect overlay */}
                <div className="absolute inset-0 rounded-[1.2rem] md:rounded-[1.5rem] overflow-hidden pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 -translate-x-full animate-marquee" style={{ animationDuration: '3s', animationIterationCount: 'infinite' }} />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Client Marquee (Steady, Top Colleges Lead) ── */}
      <div className="w-full overflow-hidden bg-white border-y border-slate-100 py-6 md:py-8 relative z-20">
        <div className="relative w-full overflow-hidden">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-12 md:gap-20">
            {[
              // ── Top Priority Colleges ──
              '/images/clients/vit.png',
              '/images/clients/anna.png',
              
              // ── Other Educational Institutions ──
              '/images/clients/saveetha-university.png',
              '/images/clients/mgr.png',
              '/images/clients/vel tech.png',
              '/images/clients/avit.png',
              '/images/clients/vinayagam.png',
              
              // ── Commercial & Service Partners ──
              '/images/clients/dhaanish.png',
              '/images/clients/mm.jpg',
              '/images/clients/vallalar.jpg',
              '/images/clients/vimal.jpg',
              '/images/clients/Texile/avm.avif',
              '/images/clients/Texile/download.png',
              '/images/clients/Texile/kgf.jpg',
              '/images/clients/mottors/bmg.jpg',
              '/images/clients/mottors/rms.jpg',
              '/images/clients/mottors/salvam.jpg',
              '/images/clients/mottors/sathya.jpg',
              '/images/clients/mottors/sri.png',
            ].concat([
              '/images/clients/vit.png',
              '/images/clients/anna.png',
              '/images/clients/saveetha-university.png',
              '/images/clients/mgr.png',
              '/images/clients/vel tech.png',
              '/images/clients/avit.png',
              '/images/clients/vinayagam.png',
              '/images/clients/dhaanish.png',
              '/images/clients/mm.jpg',
              '/images/clients/vallalar.jpg',
              '/images/clients/vimal.jpg',
              '/images/clients/Texile/avm.avif',
              '/images/clients/Texile/download.png',
              '/images/clients/Texile/kgf.jpg',
              '/images/clients/mottors/bmg.jpg',
              '/images/clients/mottors/rms.jpg',
              '/images/clients/mottors/salvam.jpg',
              '/images/clients/mottors/sathya.jpg',
              '/images/clients/mottors/sri.png',
            ]).map((src, idx) => {
              const isLarge = src.includes('saveetha-university.png') || src.includes('anna.png');
              return (
                <div 
                  key={idx} 
                  className={`relative flex-shrink-0 px-2 md:px-4 transition-transform duration-500 hover:scale-105 
                    ${isLarge 
                      ? 'h-24 md:h-36 min-w-[180px] md:min-w-[320px]' 
                      : 'h-20 md:h-28 min-w-[140px] md:min-w-[240px]'}`}
                >
                  <Image
                    src={src}
                    alt="Partner Logo"
                    fill
                    className="object-contain"
                    sizes={isLarge ? "(max-width: 768px) 180px, 320px" : "(max-width: 768px) 140px, 240px"}
                    priority
                    unoptimized={true}
                  />
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
