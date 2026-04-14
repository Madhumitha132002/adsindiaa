import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowRight, ShieldCheck, FileText, Globe, BookOpen, Users, Briefcase, HelpCircle } from 'lucide-react';

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
  }
];

export default function Footer() {
  return (
    <footer className="relative bg-[#F3F9FA] pt-32 pb-8 overflow-hidden font-inter">
      {/* ── Background Wave Art ── */}
      <div className="absolute inset-0 opacity-40 pointer-events-none z-0">
        <svg className="w-full h-full" viewBox="0 0 1440 400" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 120C240 80 480 200 720 160C960 120 1200 0 1440 40V400H0V120Z" fill="url(#wave-gradient)" opacity="0.1" />
          <path d="M0 200C360 280 720 120 1080 240C1260 300 1350 250 1440 200V400H0V200Z" fill="url(#wave-gradient)" opacity="0.05" />
          <defs>
            <linearGradient id="wave-gradient" x1="720" y1="0" x2="720" y2="400" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0D9488" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
          
          {/* Column 1: Brand & Identity */}
          <div className="lg:col-span-4 space-y-10">
            <div className="space-y-8">
              <Link href="/" className="inline-block transition-transform duration-300 hover:scale-[1.02]">
                <Image
                  src="/images/Ads_indiaa_logo.webp"
                  alt="Ads Indiaa Logo"
                  width={240}
                  height={80}
                  className="h-14 lg:h-16 w-auto object-contain"
                  priority
                />
              </Link>
              <p className="text-slate-600 font-medium leading-relaxed text-lg max-w-sm">
                Delivering high-performance digital marketing and bulk SMS solutions for businesses across India.
              </p>
              
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a 
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-2xl bg-white/40 backdrop-blur-md border border-[#BFA37C]/30 flex items-center justify-center text-slate-700 hover:text-white hover:bg-slate-900 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-xl group"
                  >
                    <div className="transition-transform group-hover:scale-110">
                       {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Links System */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-4">
              
              {/* Resources */}
              <div className="space-y-8">
                <h4 className="text-sm font-black text-slate-900 tracking-wider">RESOURCES</h4>
                <ul className="space-y-5">
                  {[
                    { name: 'About Us', href: '/about-us' },
                    { name: 'Services 🔧', href: '/services' },
                    { name: 'Marketing', href: '/digital-marketing' },
                    { name: 'Packages', href: '/packages' },
                    { name: 'Client List 🤝', href: '/clients' },
                    { name: 'Case Studies', href: '#' },
                    { name: 'Blog', href: '/blog' },
                    { name: 'Careers', href: '#' }
                  ].map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-[16px] font-semibold text-slate-600 hover:text-teal-600 transition-colors">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal */}
              <div className="space-y-8">
                <h4 className="text-sm font-black text-slate-900 tracking-wider">LEGAL</h4>
                <ul className="space-y-5">
                  {[
                    { name: 'Terms of Service', href: '/terms-of-service' },
                    { name: 'Privacy Policy', href: '/privacy-policy' },
                    { name: 'Cookie Policy', href: '/cookie-policy' },
                    { name: 'GDPR Compliance', href: '#' },
                    { name: 'Data Security', href: '#' }
                  ].map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-[16px] font-semibold text-slate-600 hover:text-teal-600 transition-colors">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Area */}
              <div className="space-y-8 col-span-2 md:col-span-1">
                <h4 className="text-sm font-black text-slate-900 tracking-wider">GET IN TOUCH</h4>
                <div className="space-y-6">
                  <div className="bg-white/40 backdrop-blur-md rounded-[2rem] p-8 border border-[#BFA37C]/40 shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#BFA37C]/5 rounded-full -mr-16 -mt-16 blur-2xl" />
                    <p className="text-[10px] font-black tracking-widest text-[#BFA37C] mb-3 uppercase">Direct Line</p>
                    <a href="tel:+917339109747" className="text-xl font-black text-slate-900 block group-hover:text-teal-600 transition-colors">
                      +91 73391 09747
                    </a>
                  </div>

                  <div className="bg-white/40 backdrop-blur-md rounded-[2rem] p-8 border border-[#BFA37C]/40 shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#BFA37C]/5 rounded-full -mr-16 -mt-16 blur-2xl" />
                    <p className="text-[10px] font-black tracking-widest text-[#BFA37C] mb-3 uppercase">Email</p>
                    <a href="mailto:info@adsindiaa.in" className="text-[16px] font-black text-slate-900 block group-hover:text-teal-600 transition-colors break-all">
                      info@adsindiaa.in
                    </a>
                  </div>

                  <button className="w-full py-5 bg-slate-900 text-white rounded-[1.5rem] font-black text-[11px] uppercase tracking-widest shadow-xl hover:bg-slate-800 transition-all active:scale-[0.98]">
                    Request a Free Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="bg-[#D1E7E9] py-6 px-6 lg:px-12 flex items-center justify-center">
        <p className="text-[14px] font-bold text-slate-700 tracking-tight">
          © {new Date().getFullYear()} ADS Indiaa. All rights reserved. | <Link href="/sitemap" className="hover:text-teal-900">Sitemap</Link>
        </p>
      </div>
    </footer>
  );
}

