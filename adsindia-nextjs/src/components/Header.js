"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const isBlogPage = pathname === '/blog' || pathname?.startsWith('/blog/');
  
  const [scrolled, setScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    // Intersection Observer to hide header when footer is in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHidden(entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "0px 0px -100px 0px" } // Hide slightly before it touches
    );

    const footer = document.getElementById('main-footer-card');
    if (footer) observer.observe(footer);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (footer) observer.unobserve(footer);
    };
  }, []);

  return (
    <>
      <header className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white shadow-md py-1.5' : 'bg-white py-2 border-b border-slate-100'} ${isHidden ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
        <div className="flex items-center justify-between px-6 lg:px-10 max-w-[1380px] mx-auto">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0 z-10 transition-transform duration-300 ease-out hover:scale-110">
            <Image 
              src="/images/Ads_indiaa_logo.webp" 
              alt="Ads Indiaa Logo" 
              width={240} 
              height={72} 
              className="h-16 md:h-14 lg:h-16 w-auto object-contain" 
              priority 
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex flex-1 items-center justify-center gap-10 xl:gap-12 z-10 pl-10">
            <Link href="/" className="relative text-[15px] font-semibold text-slate-700 hover:text-slate-900 transition-colors duration-300 ease-out after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-blue-500 after:to-violet-600 after:transition-all after:duration-300 hover:after:w-full">Home</Link>
            
            {/* Company Dropdown */}
            <div className="relative group cursor-pointer py-2">
              <div className="flex items-center gap-1.5">
                <span className="text-[15px] font-semibold text-slate-700 group-hover:text-slate-900 transition-colors duration-300 ease-out">Company</span>
                <i className="fas fa-chevron-down text-[10px] text-slate-400 group-hover:text-slate-600 transition-all duration-300 group-hover:rotate-180"></i>
              </div>
              {/* Dropdown Menu */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white rounded-2xl shadow-2xl border border-slate-100 py-3 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300">
                <Link href="/about-us" className="block px-6 py-2.5 text-[14px] font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all">About Us</Link>
                <Link href="/contact-us" className="block px-6 py-2.5 text-[14px] font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all">Contact Us</Link>
              </div>
            </div>

            {/* Services Dropdown */}
            <div className="relative group cursor-pointer py-2">
              <div className="flex items-center gap-1.5">
                <span className="text-[15px] font-semibold text-slate-700 group-hover:text-slate-900 transition-colors duration-300 ease-out">Services</span>
                <i className="fas fa-chevron-down text-[10px] text-slate-400 group-hover:text-slate-600 transition-all duration-300 group-hover:rotate-180"></i>
              </div>
              {/* Dropdown Menu - Mega Menu */}
              <div className="absolute top-full -left-20 mt-2 w-[500px] bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300">
                <div className="flex justify-between items-center pb-4 mb-4 border-b border-slate-100">
                  <span className="text-[11px] font-black uppercase tracking-widest text-slate-400">Our Expertise</span>
                  <Link href="/services" className="text-[12px] font-[900] text-blue-600 hover:text-violet-600 uppercase tracking-wider flex items-center gap-1">
                    View All <i className="fas fa-arrow-right text-[10px]"></i>
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                  <Link href="/services/promotional-sms" className="block px-4 py-3 rounded-xl hover:bg-blue-50 transition-colors group/link">
                      <div className="text-[14px] font-bold text-slate-800 group-hover/link:text-blue-600 transition-colors">Promotional SMS</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">Instant bulk offer delivery</div>
                  </Link>
                  <Link href="/services/whatsapp-marketing" className="block px-4 py-3 rounded-xl hover:bg-blue-50 transition-colors group/link">
                      <div className="text-[14px] font-bold text-slate-800 group-hover/link:text-blue-600 transition-colors">WhatsApp Marketing</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">Rich media API broadcasts</div>
                  </Link>
                  <Link href="/services/transactional-sms" className="block px-4 py-3 rounded-xl hover:bg-blue-50 transition-colors group/link">
                      <div className="text-[14px] font-bold text-slate-800 group-hover/link:text-blue-600 transition-colors">Transactional SMS</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">Critical order & alert delivery</div>
                  </Link>
                  <Link href="/services/dynamic-sms" className="block px-4 py-3 rounded-xl hover:bg-blue-50 transition-colors group/link">
                      <div className="text-[14px] font-bold text-slate-800 group-hover/link:text-blue-600 transition-colors">Dynamic SMS</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">Personalised variable texts</div>
                  </Link>
                  <Link href="/services/otp-sms" className="block px-4 py-3 rounded-xl hover:bg-blue-50 transition-colors group/link">
                      <div className="text-[14px] font-bold text-slate-800 group-hover/link:text-blue-600 transition-colors">OTP Verification</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">Secure sub-3s delivery</div>
                  </Link>
                  <Link href="/services/meta-ads" className="block px-4 py-3 rounded-xl hover:bg-blue-50 transition-colors group/link">
                      <div className="text-[14px] font-bold text-slate-800 group-hover/link:text-blue-600 transition-colors">Meta & Facebook Ads</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">High-ROI lead generation</div>
                  </Link>
                  <Link href="/services/web-design" className="block px-4 py-3 rounded-xl hover:bg-blue-50 transition-colors group/link">
                      <div className="text-[14px] font-bold text-slate-800 group-hover/link:text-blue-600 transition-colors">Web Development</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">Fast SEO-ready websites</div>
                  </Link>
                  <Link href="/services/graphic-design" className="block px-4 py-3 rounded-xl hover:bg-blue-50 transition-colors group/link">
                      <div className="text-[14px] font-bold text-slate-800 group-hover/link:text-blue-600 transition-colors">Graphic Design</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">Brand identity & creatives</div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Packages Dropdown */}
            <div className="relative group cursor-pointer py-2">
              <div className="flex items-center gap-1.5">
                <span className="text-[15px] font-semibold text-slate-700 group-hover:text-slate-900 transition-colors duration-300 ease-out">Packages</span>
                <i className="fas fa-chevron-down text-[10px] text-slate-400 group-hover:text-slate-600 transition-all duration-300 group-hover:rotate-180"></i>
              </div>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-slate-100 py-3 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300">
                <Link href="/packages" className="block px-6 py-2.5 text-[14px] font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all">View All Packages</Link>
                <div className="px-6 py-2.5 text-[11px] font-black text-slate-300 uppercase tracking-widest">Pricing Tiers</div>
                <Link href="/packages#startup" className="block px-6 py-2 text-[13px] font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all">Startup</Link>
                <Link href="/packages#business" className="block px-6 py-2 text-[13px] font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all">Business</Link>
              </div>
            </div>

            <Link href="/products" className="relative text-[15px] font-semibold text-slate-700 hover:text-slate-900 transition-colors duration-300 ease-out after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-blue-500 after:to-violet-600 after:transition-all after:duration-300 hover:after:w-full">Products</Link>
            <Link href="/clients" className="relative text-[15px] font-semibold text-slate-700 hover:text-slate-900 transition-colors duration-300 ease-out after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-blue-500 after:to-violet-600 after:transition-all after:duration-300 hover:after:w-full">Clients</Link>
            <Link href="/blog" className="relative text-[15px] font-semibold text-slate-700 hover:text-slate-900 transition-colors duration-300 ease-out after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-blue-500 after:to-violet-600 after:transition-all after:duration-300 hover:after:w-full">Blog</Link>
          </nav>

          {/* Contact Button */}
          <div className="hidden lg:block z-10">
            <Link
              href="/contact-us"
              className="px-7 py-2.5 rounded-full font-bold text-[15px] shadow-md shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-[1.05] transition-all duration-300 ease-out text-white bg-gradient-to-r from-blue-500 to-violet-600"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden z-[100] p-2.5 rounded-md border border-slate-200 bg-white text-slate-800 transition-all duration-300 ease-out hover:bg-slate-50"
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>

        </div>
      </header>

      {/* Mobile Sidebar Navigation */}
      <div className={`fixed inset-y-0 right-0 w-[280px] bg-white shadow-2xl z-[100] transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden flex flex-col pt-24 px-8 overflow-y-auto`}>
        <div className="flex flex-col gap-8">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">Home</Link>
          <Link href="/about-us" onClick={() => setMobileMenuOpen(false)} className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">Company</Link>
          <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">Services</Link>
          <Link href="/packages" onClick={() => setMobileMenuOpen(false)} className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">Packages</Link>
          <Link href="/products" onClick={() => setMobileMenuOpen(false)} className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">Products</Link>
          <Link href="/clients" onClick={() => setMobileMenuOpen(false)} className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">Clients</Link>
          <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">Blog</Link>
          <Link
            href="/contact-us"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-6 px-8 py-4 rounded-2xl font-bold text-center shadow-lg shadow-blue-500/20 text-white bg-gradient-to-r from-blue-500 to-violet-600 active:scale-95 transition-all"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Mobile menu backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}
    </>
  );
}

