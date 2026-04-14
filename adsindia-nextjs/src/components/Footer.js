import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowRight, ShieldCheck, FileText, Globe, BookOpen, Users, Briefcase, HelpCircle } from 'lucide-react';

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://facebook.com/adsindiaa',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="12" fill="#1877F2"/>
        <path d="M15.443 19.103v-8.385h2.796l.532-3.47h-3.328V5.04c0-.95.465-1.874 1.956-1.874h1.528V.213s-1.374-.235-2.686-.235c-2.741 0-4.533 1.662-4.533 4.669v2.595H8.601v3.47h3.047v8.385h3.795z" fill="white"/>
      </svg>
    )
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/ads_indiaa',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
        <defs>
          <linearGradient id="inst-grad" x1="12" y1="22" x2="12" y2="2" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F09433"/>
            <stop offset="0.25" stopColor="#E6683C"/>
            <stop offset="0.5" stopColor="#DC2743"/>
            <stop offset="0.75" stopColor="#CC2366"/>
            <stop offset="1" stopColor="#BC1888"/>
          </linearGradient>
        </defs>
        <rect width="20" height="20" x="2" y="2" rx="5" fill="url(#inst-grad)"/>
        <path d="M12 7a5 5 0 105 5 5 5 0 00-5-5zm0 8a3 3 0 113-3 3 3 0 01-3 3zm5.25-8.5a1.25 1.25 0 11-1.25 1.25 1.25 0 011.25-1.25z" fill="white"/>
      </svg>
    )
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/ads-indiaa',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="2" fill="#0A66C2"/>
        <path d="M7.12 20.45H3.56V9h3.56v11.45zM5.34 7.43c-1.14 0-2.06-.92-2.06-2.06s.92-2.06 2.06-2.06 2.06.92 2.06 2.06-.92 2.06-2.06 2.06zM20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04s-2.14 1.45-2.14 2.95v5.66h-3.56V9h3.42v1.56h.05c.48-.91 1.65-1.86 3.39-1.86 3.62 0 4.29 2.38 4.29 5.48v6.27z" fill="white"/>
      </svg>
    )
  },
  {
    name: 'X',
    href: 'https://twitter.com/adsindiaa',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="black"/>
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.293 19.494h2.039L6.482 3.239h-2.19l13.316 17.408z" fill="white" transform="scale(0.8) translate(3, 3)"/>
      </svg>
    )
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/917339109747',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="12" fill="#25D366"/>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.434 5.63 1.434h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="white" transform="scale(0.7) translate(5, 5)"/>
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

