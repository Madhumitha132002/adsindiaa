import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowRight, MessageCircle } from 'lucide-react';

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://facebook.com/adsindiaa',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    )
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/ads_indiaa',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    )
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/ads-indiaa',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    )
  },
  {
    name: 'X',
    href: 'https://twitter.com/adsindiaa',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.293 19.494h2.039L6.482 3.239h-2.19l13.316 17.408z" />
      </svg>
    )
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/917339109747',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.434 5.63 1.434h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    )
  }
];

export default function Footer() {
  return (
    <footer className="relative bg-[#F8FAFF] pt-96 lg:pt-56 pb-16 overflow-hidden mt-10">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      <div className="absolute -top-48 -left-48 w-[600px] h-[600px] bg-blue-100/20 blur-[150px] rounded-full" />
      <div className="absolute top-1/2 -right-48 w-[500px] h-[500px] bg-violet-100/20 blur-[150px] rounded-full" />
      
      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2563eb 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* ── Floating CTA Banner ── */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[135%] lg:-translate-y-[160%] w-[calc(100%-48px)] max-w-6xl">
          <div
            id="main-footer-card"
            className="relative overflow-hidden rounded-[3.5rem] bg-white/80 backdrop-blur-2xl shadow-[0_32px_80px_-20px_rgba(37,99,235,0.15)] p-12 lg:p-20 flex flex-col md:flex-row items-center justify-between gap-12 border border-white group"
          >
            {/* Animated Glow Effect */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-[100px] -mr-32 -mt-32 transition-colors duration-700 group-hover:bg-blue-400/20" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-400/10 rounded-full blur-[100px] -ml-32 -mb-32 transition-colors duration-700 group-hover:bg-violet-400/20" />

            <div className="relative z-10 space-y-8 max-w-2xl text-center md:text-left">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-blue-50/50 border border-blue-100/50 text-[11px] font-black uppercase tracking-[0.2em] text-blue-600 shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
                </span>
                Scale Your Growth
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.05] tracking-tight">
                Ready to dominate <br />
                <span className="text-blue-600 italic lg:not-italic">your market?</span>
              </h2>
              <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
                Join 5000+ businesses leveraging our high-performance messaging infrastructure to scale their reach unlimited.
              </p>
            </div>

            <div className="relative z-10 shrink-0">
              <Link href="/contact-us" className="group relative inline-flex items-center justify-center gap-4 px-10 py-6 bg-slate-900 text-white font-black rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-blue-500/25 active:scale-95 text-xs uppercase tracking-widest">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">Start Growing</span>
                <ArrowRight size={18} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* ── Footer Content Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-12">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-12">
            <div className="space-y-8">
              <Link href="/" className="inline-block group">
                <Image
                  src="/images/Ads_indiaa_logo.webp"
                  alt="Ads Indiaa Logo"
                  width={240}
                  height={80}
                  className="h-14 lg:h-16 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </Link>
              <p className="text-slate-500 font-medium leading-relaxed text-lg max-w-sm">
                India's leading high-performance digital marketing and bulk SMS ecosystem. Built for growth-focused enterprises.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                {socialLinks.map((social) => (
                  <a 
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-2xl bg-white border border-slate-200/60 flex items-center justify-center text-slate-500 hover:text-white hover:bg-blue-600 hover:border-blue-600 hover:shadow-xl hover:shadow-blue-600/20 transition-all duration-300 transform hover:-translate-y-1"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Links System */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-16 lg:gap-8">
              
              {/* Navigation */}
              <div className="space-y-10">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Navigation</h4>
                <ul className="space-y-6">
                  {[
                    { name: 'About Us', href: '/about-us' },
                    { name: 'Services', href: '/services' },
                    { name: 'Digital Growth', href: '/digital-marketing' },
                    { name: 'Packages', href: '/packages' },
                    { name: 'Our Clients', href: '/clients' }
                  ].map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-[15px] font-bold text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-3 group">
                        <span className="w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-4" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal */}
              <div className="space-y-10">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Legal</h4>
                <ul className="space-y-6">
                  {[
                    { name: 'Terms of Service', href: '/terms-of-service' },
                    { name: 'Privacy Policy', href: '/privacy-policy' },
                    { name: 'Cookie Policy', href: '/cookie-policy' }
                  ].map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-[15px] font-bold text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-3 group">
                        <span className="w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-4" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Area */}
              <div className="space-y-10 col-span-2 md:col-span-1">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Connectivity</h4>
                <div className="space-y-4">
                  <div className="group bg-white p-6 rounded-3xl border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-xl hover:shadow-blue-500/5 hover:border-blue-200 transition-all duration-300">
                    <p className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-slate-400 mb-2">
                       <Phone size={10} className="text-blue-500" /> Direct Assistance
                    </p>
                    <a href="tel:+917339109747" className="text-lg font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                      +91 73391 09747
                    </a>
                  </div>

                  <div className="group bg-white p-6 rounded-3xl border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-xl hover:shadow-blue-500/5 hover:border-blue-200 transition-all duration-300">
                    <p className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-slate-400 mb-2">
                      <Mail size={10} className="text-violet-500" /> Email Support
                    </p>
                    <a href="mailto:info@adsindiaa.in" className="text-[15px] font-black text-slate-900 group-hover:text-blue-600 transition-colors break-all">
                      info@adsindiaa.in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="mt-28 pt-12 border-t border-slate-200/60 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.3em]">
              © {new Date().getFullYear()} ADS INDIAA
            </p>
            <div className="hidden md:block w-px h-10 bg-slate-200" />
            <div className="flex items-center gap-3 text-slate-400">
              <MapPin size={14} className="text-blue-500" />
              <p className="text-[11px] font-bold tracking-tight">
                Crafted in Walajapet, TN. Globally Distributed.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100/50 flex items-center gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[9px] font-black uppercase tracking-[0.15em] text-emerald-700">Infrastructure Online</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

