import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bg-[#F1F5FF] pt-96 lg:pt-48 pb-16 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-200/15 blur-[100px] rounded-full" />
      <div className="absolute top-1/2 -right-24 w-80 h-80 bg-violet-200/15 blur-[100px] rounded-full" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">

        {/* ── Floating CTA Banner ── */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[130%] lg:-translate-y-[150%] w-[calc(100%-48px)] max-w-6xl">
          <div
            id="main-footer-card"
            className="relative overflow-hidden rounded-[3rem] bg-white/70 backdrop-blur-xl shadow-2xl shadow-blue-200/30 p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 border border-white/60 group"
          >
            {/* Subtle gradient blobs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-200/20 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none" />
            {/* Shine effect */}
            <div className="absolute inset-0 z-2 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

            <div className="relative z-10 space-y-6 max-w-2xl text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-[10px] font-black uppercase tracking-widest text-blue-600">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                Next-Gen Communication
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tighter">
                Scale your reach <br />
                <span className="gradient-text-shine italic">unlimited.</span>
              </h2>
              <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed max-w-lg">
                Join 5000+ businesses leveraging our high-performance messaging infrastructure to dominate their markets.
              </p>
            </div>

            <div className="relative z-10 shrink-0">
              <Link href="/contact-us" className="pulse-ring-btn inline-flex items-center justify-center gap-4 px-12 py-6 bg-gradient-to-r from-blue-500 to-violet-600 text-white font-black rounded-2xl hover:scale-105 transition-all shadow-2xl shadow-blue-500/20 uppercase tracking-widest text-xs">
                Start Growing <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>

        {/* ── Footer Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

          {/* Column 1: Brand & Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-12">
            <div className="space-y-8">
              <Link href="/" className="flex items-center justify-center lg:justify-start gap-3 group">
                <Image
                  src="/images/Ads_indiaa_logo.webp"
                  alt="Ads India Logo"
                  width={240}
                  height={72}
                  className="h-16 lg:h-18 w-auto object-contain"
                />
              </Link>

              <p className="text-slate-500 font-medium leading-relaxed text-lg max-w-xs">
                Delivering high-performance digital marketing and bulk SMS solutions for businesses across India.
              </p>

              <div className="flex gap-4">
                {[
                  { icon: 'fa-facebook-f', href: 'https://facebook.com/adsindiaa' },
                  { icon: 'fa-instagram', href: 'https://instagram.com/ads_indiaa' },
                  { icon: 'fa-linkedin-in', href: 'https://linkedin.com/company/ads-indiaa' },
                  { icon: 'fa-twitter', href: 'https://twitter.com/adsindiaa' }
                ].map((social, i) => (
                  <a key={i} href={social.href} target="_blank" className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-gradient-to-br hover:from-blue-500 hover:to-violet-600 hover:text-white hover:border-transparent transition-all shadow-sm">
                    <i className={`fab ${social.icon} text-lg`} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Links Grid (8 cols) */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-8">
              {/* Navigation */}
              <div className="space-y-8">
                <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-400">Navigation</h4>
                <ul className="space-y-5">
                  {[
                    { name: 'About Us', href: '/about-us' },
                    { name: 'Services', href: '/services' },
                    { name: 'Marketing', href: '/digital-marketing' },
                    { name: 'Packages', href: '/packages' },
                    { name: 'Client List', href: '/clients' }
                  ].map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-[15px] font-bold text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-2 group">
                        <span className="w-0 h-[2px] bg-gradient-to-r from-blue-500 to-violet-600 transition-all group-hover:w-3" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal */}
              <div className="space-y-8">
                <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-400">Legal</h4>
                <ul className="space-y-5">
                  {[
                    { name: 'Terms of Service', href: '/terms-of-service' },
                    { name: 'Privacy Policy', href: '/privacy-policy' },
                    { name: 'Cookie Policy', href: '/cookie-policy' }
                  ].map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-[15px] font-bold text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-2 group">
                        <span className="w-0 h-[2px] bg-gradient-to-r from-blue-500 to-violet-600 transition-all group-hover:w-3" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Information */}
              <div className="space-y-8 col-span-2 md:col-span-1">
                <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-400">Get in Touch</h4>
                <div className="space-y-4">
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all">
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Direct Line</p>
                    <a href="tel:+917339109747" className="text-lg font-black text-slate-900 hover:text-blue-600 transition-colors">
                      +91 73391 09747
                    </a>
                  </div>
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all">
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Email</p>
                    <a href="mailto:info@adsindiaa.in" className="text-base font-black text-slate-900 hover:text-blue-600 transition-colors break-words">
                      info@adsindiaa.in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Final Credits ── */}
        <div className="mt-24 pt-12 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <span className="text-[11px] font-black text-slate-400 uppercase tracking-[0.4em]">© {new Date().getFullYear()} ADS INDIAA</span>
            <div className="hidden md:block w-px h-10 bg-slate-200" />
            <p className="text-[11px] font-medium text-slate-400 max-w-xs text-center md:text-left">
              Built with care in Walajapet, Tamil Nadu. Your trusted digital growth partner.
            </p>
          </div>

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">All Systems Operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

