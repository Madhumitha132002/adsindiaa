'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VideoBackground from '@/components/VideoBackground';
import Link from 'next/link';
import { motion } from 'framer-motion';

// ─── SEO STRUCTURED DATA ───
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Ads India',
  url: 'https://www.adsindia.com',
  logo: 'https://www.adsindia.com/logo.webp',
  description:
    'Ads India is a leading digital marketing and bulk SMS service provider in India, serving 5000+ clients with transactional SMS, promotional SMS, SEO, branding, and web design.',
  foundingDate: '2015',
  numberOfEmployees: { '@type': 'QuantitativeValue', value: '50+' },
  areaServed: 'IN',
  sameAs: [
    'https://www.facebook.com/adsindia',
    'https://www.twitter.com/adsindia',
    'https://www.linkedin.com/company/adsindia',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Support',
    availableLanguage: ['English', 'Hindi'],
    hoursAvailable: 'Mo-Su 00:00-23:59',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '5000',
    bestRating: '5',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What services does Ads India provide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ads India provides bulk SMS services (transactional, promotional, dynamic), digital marketing (SEO, branding, campaign management), and design & development (website design, UI/UX, ad creatives) for businesses across India.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many clients has Ads India served?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ads India has served 5000+ active clients including colleges, educational institutions, enterprises, and startups across India.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Ads India offer bulk SMS API integration?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Ads India offers robust bulk SMS API integration for businesses to automate and scale their messaging workflows seamlessly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Ads India available 24/7 for support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Ads India provides 24/7 dedicated expert support for all clients, ensuring uninterrupted service and quick resolution of any issues.',
      },
    },
  ],
};



// ─── DATA ───
const services = [
  {
    icon: 'fa-comment-dots',
    title: 'Bulk SMS & Messaging Solutions',
    color: 'from-blue-400 to-indigo-500',
    items: [
      'Transactional SMS',
      'Promotional SMS',
      'Dynamic Messaging',
      'Bulk Messaging Services',
      'API Integration',
    ],
  },
  {
    icon: 'fa-bullhorn',
    title: 'Digital Marketing Services',
    color: 'from-violet-400 to-purple-500',
    items: [
      'Search Engine Optimization (SEO)',
      'Digital Branding',
      'Campaign Management',
    ],
  },
  {
    icon: 'fa-palette',
    title: 'Website Design & Development',
    color: 'from-orange-400 to-pink-500',
    items: [
      'Website Design',
      'UI/UX Optimization',
      'Creative Ad Designs',
    ],
  },
];

const testimonials = [
  {
    quote:
      'Ads India helped us streamline our communication and reach thousands of students instantly.',
    author: 'Principal',
    company: 'Educational Institution',
    icon: '🎓',
  },
  {
    quote:
      'Their bulk messaging and API services are reliable and easy to integrate. Highly recommended.',
    author: 'Tech Lead',
    company: 'Business Client',
    icon: '🏢',
  },
  {
    quote:
      'We saw a significant improvement in our online visibility after their SEO and branding services.',
    author: 'Founder',
    company: 'Startup',
    icon: '🚀',
  },
];

const whyUs = [
  {
    icon: 'fa-bolt',
    title: 'Industry-Leading Bulk SMS',
    desc: 'Fastest and most reliable bulk messaging infrastructure available in India.',
  },
  {
    icon: 'fa-server',
    title: 'Scalable Infrastructure',
    desc: 'Built to handle everything from 100 to 10 million messages a day.',
  },
  {
    icon: 'fa-users',
    title: 'Experienced Digital Team',
    desc: 'Our team has years of deep expertise across all digital marketing channels.',
  },
  {
    icon: 'fa-heart',
    title: 'Customer-First Approach',
    desc: 'We treat every client like a partner, not just an account number.',
  },
  {
    icon: 'fa-chart-bar',
    title: 'Proven Track Record',
    desc: 'Trusted by 5000+ businesses, colleges, and large institutions across India.',
  },
  {
    icon: 'fa-headset',
    title: '24/7 Elite Support',
    desc: 'Round-the-clock dedicated support for all your critical business needs.',
  },
];

const stats = [
  { number: '5000+', label: 'Active Clients' },
  { number: '250M+', label: 'Messages Sent' },
  { number: '98%', label: 'Client Retention' },
  { number: '24/7', label: 'Expert Support' },
];

const faqs = [
  {
    q: 'What services does Ads India provide?',
    a: 'Ads India provides bulk SMS services (transactional, promotional, dynamic), digital marketing (SEO, branding, campaign management), and design & development (website design, UI/UX, ad creatives) for businesses across India.',
  },
  {
    q: 'How many clients has Ads India served?',
    a: 'Ads India has served 5000+ active clients including colleges, educational institutions, enterprises, and startups across India.',
  },
  {
    q: 'Does Ads India offer bulk SMS API integration?',
    a: 'Yes, Ads India offers robust bulk SMS API integration for businesses to automate and scale their messaging workflows seamlessly.',
  },
  {
    q: 'Is Ads India available 24/7 for support?',
    a: 'Yes, Ads India provides 24/7 dedicated expert support for all clients, ensuring uninterrupted service and quick resolution of any issues.',
  },
];

export default function AboutUs() {
  return (
    <>
      <main className="overflow-x-hidden font-inter bg-[#F1F5FF]" itemScope itemType="https://schema.org/Organization">

        {/* Hidden SEO meta for schema.org */}
        <meta itemProp="name" content="Ads India" />
        <meta itemProp="description" content="Leading bulk SMS service provider and digital marketing company in India serving 5000+ clients." />
        <meta itemProp="url" content="https://www.adsindia.com" />

        <Header />



        {/* ─── HERO ─── */}
        <section className="relative pt-16 pb-32 px-4 text-center overflow-hidden" aria-label="About Ads India - Digital Marketing Company India">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 pointer-events-none" />
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-400/8 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-tight tracking-tight">
              Empowering Brands Through{' '}
              <span className="bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent">
                Smart Digital Growth
              </span>
            </h1>
            <p className="text-slate-500 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium mb-4">
              Ads India is one of the leading <strong className="text-slate-700">digital marketing companies in India</strong>, helping businesses scale with innovative <strong className="text-slate-700">bulk SMS services</strong>, branding, and performance-driven strategies.
            </p>
            <p className="text-slate-400 text-base max-w-2xl mx-auto leading-relaxed font-medium mb-12">
              Trusted by <strong className="text-slate-600">5000+ businesses, colleges & institutions</strong> across India for <strong className="text-slate-600">transactional SMS, promotional SMS, SEO, and web design</strong>.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact-us"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-violet-600 text-white font-black rounded-2xl shadow-xl shadow-blue-500/20 hover:scale-105 transition-all uppercase tracking-widest text-xs"
                aria-label="Contact Ads India to start your business"
              >
                Start Your Business
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 bg-white text-slate-700 font-black rounded-2xl border border-slate-200 shadow-lg hover:scale-105 transition-all uppercase tracking-widest text-xs"
                aria-label="Explore Ads India digital marketing and bulk SMS services"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </section>

        {/* ─── STATS ─── */}
        <section className="relative z-10 px-4 pb-20" aria-label="Ads India Key Statistics">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div
                key={i}
                className="bg-white border border-slate-100 rounded-[2rem] p-8 text-center shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:scale-[1.02] transition-all group"
                itemProp="aggregateRating"
                itemScope
                itemType="https://schema.org/QuantitativeValue"
              >
                <p className="text-4xl font-black bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                  <span itemProp="value">{s.number}</span>
                </p>
                <p className="text-slate-400 text-[11px] font-black uppercase tracking-widest">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── WHO WE ARE ─── */}
        <section className="px-4 py-20" aria-labelledby="about-heading">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 mb-4 block">About Us</span>
              <h2 id="about-heading" className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
                A Fast-Growing <strong className="italic bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent">Digital Marketing Company</strong> with a Proven Formula
              </h2>
              <p className="text-slate-500 leading-relaxed font-medium text-lg mb-6">
                Ads India is a fast-growing <strong className="text-slate-700">digital marketing company in India</strong> dedicated to delivering high-impact marketing and communication solutions. With a strong portfolio of <strong className="text-slate-700">5000+ satisfied clients</strong>, including reputed colleges, institutions, and enterprises, we specialize in <strong className="text-slate-700">bulk SMS services</strong> and connecting brands with their audience effectively.
              </p>
              <p className="text-slate-500 leading-relaxed font-medium text-lg">
                Our approach combines <strong className="text-slate-700">technology, creativity, and data-driven strategies</strong> to ensure measurable results for businesses of all sizes — from startups to large-scale organizations across India.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '🎯', label: 'Targeted Reach', value: 'Zero wasted impressions' },
                { icon: '⚡', label: 'Instant SMS Delivery', value: 'Sub-3s message delivery' },
                { icon: '📊', label: 'Data-Driven SEO', value: 'Analytics at every step' },
                { icon: '🏆', label: 'Award-Winning', value: 'Trusted by 5000+ brands' },
              ].map((t, i) => (
                <div key={i} className="bg-white border border-slate-100 rounded-[2rem] p-6 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all">
                  <span className="text-3xl block mb-3" aria-hidden="true">{t.icon}</span>
                  <p className="font-black text-slate-900 text-sm mb-1">{t.label}</p>
                  <p className="text-slate-400 text-xs font-medium">{t.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SERVICES ─── */}
        <section className="px-4 py-20 bg-[#F1F5FF] relative overflow-hidden" aria-labelledby="services-heading">
          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full mb-4">What We Do</span>
              <h2 id="services-heading" className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                A Complete Suite of <span className="bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent">Digital Marketing & SMS Solutions</span>
              </h2>
              <p className="text-slate-500 text-lg mt-4 max-w-xl mx-auto font-medium">
                Our <strong className="text-slate-800">bulk SMS and digital marketing services</strong> are designed to help businesses <strong className="text-slate-800">reach, engage, and convert</strong> their audience efficiently.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((s, i) => (
                <article key={i} className="bg-white border border-slate-100 rounded-[2.5rem] p-8 hover:shadow-xl hover:shadow-blue-100/50 hover:border-blue-200 transition-all group">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform`}>
                    <i className={`fas ${s.icon} text-white text-xl`} aria-hidden="true"></i>
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-5 tracking-tight">{s.title}</h3>
                  <ul className="space-y-2.5" aria-label={`${s.title} services`}>
                    {s.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-violet-600 flex-shrink-0" aria-hidden="true"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ─── MISSION & VISION ─── */}
        <section className="px-4 py-20" aria-label="Ads India Mission and Vision">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
            <div className="relative bg-white border border-slate-100 rounded-[3rem] p-12 overflow-hidden group shadow-xl shadow-blue-100/30">
              <VideoBackground overlayOpacity={0.2} />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center mb-8 shadow-lg shadow-blue-500/20">
                  <i className="fas fa-bullseye text-white text-xl" aria-hidden="true"></i>
                </div>
                <h2 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">Our Mission</h2>
                <p className="text-slate-500 leading-relaxed font-medium text-lg">
                  To engineer India's most reliable and scalable <strong className="text-slate-700">digital marketing and bulk SMS infrastructure</strong>. We are committed to driving explosive growth for our partners through transparency, innovation, and relentless execution.
                </p>
              </div>
            </div>
            <div className="bg-white border border-slate-100 rounded-[3rem] p-12 shadow-xl">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center mb-8 shadow-lg">
                <i className="fas fa-eye text-white text-xl" aria-hidden="true"></i>
              </div>
              <h2 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">Our Vision</h2>
              <p className="text-slate-500 leading-relaxed font-medium text-lg">
                To redefine the boundaries of <strong className="text-slate-700">digital communication in India</strong>. We strive to be the standard-bearer for <strong className="text-slate-700">SMS marketing technology</strong>, enabling every brand to connect with their audience with surgical precision and creative brilliance.
              </p>
            </div>
          </div>
        </section>

        {/* ─── TESTIMONIALS ─── */}
        <section className="px-4 py-20 bg-white" aria-labelledby="testimonials-heading">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full mb-4">Client Reviews</span>
              <h2 id="testimonials-heading" className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                What Our <span className="italic bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent">Clients Say</span> About Us
              </h2>
              <p className="text-slate-400 font-medium mt-3 max-w-xl mx-auto">Rated 4.8/5 by 5000+ businesses using our bulk SMS and digital marketing services in India.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <article
                  key={i}
                  className="bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:scale-[1.02] transition-all flex flex-col gap-6"
                  itemScope
                  itemType="https://schema.org/Review"
                >
                  <div className="text-4xl" aria-hidden="true">{t.icon}</div>
                  <blockquote className="text-slate-600 font-medium leading-relaxed text-[15px] flex-1" itemProp="reviewBody">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div itemProp="author" itemScope itemType="https://schema.org/Person">
                    <p className="font-black text-slate-900 text-sm" itemProp="name">{t.author}</p>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-0.5">{t.company}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ─── WORK CULTURE ─── */}
        <section className="px-4 py-20" aria-labelledby="culture-heading">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white border border-slate-100 rounded-[3rem] p-12 md:p-20 shadow-2xl shadow-slate-200/40 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-blue-200/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-200/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />
              <div className="relative z-10 grid md:grid-cols-2 gap-14 items-center">
                <div>
                  <span className="inline-block text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full mb-4">Our Culture</span>
                  <h2 id="culture-heading" className="text-4xl font-black text-slate-900 tracking-tight mb-6 leading-tight">
                    Built on Collaboration, Driven by <span className="italic bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent">Innovation</span>
                  </h2>
                  <p className="text-slate-500 leading-relaxed font-medium text-lg">
                    At Ads India, we believe in collaboration, innovation, and continuous improvement. Our team works closely with clients to understand their goals and deliver customized <strong className="text-slate-700">digital marketing and SMS solutions</strong> that drive real growth for businesses across India.
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { icon: '🤝', text: 'Collaborative client relationships' },
                    { icon: '💡', text: 'Innovation-first digital strategy' },
                    { icon: '📈', text: 'Continuous learning & improvement' },
                    { icon: '🎯', text: 'Customized SMS & marketing strategy for every client' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 bg-slate-50 border border-slate-100 rounded-2xl p-5">
                      <span className="text-2xl" aria-hidden="true">{item.icon}</span>
                      <p className="text-slate-700 font-bold text-sm">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── WHY CHOOSE US ─── */}
        <section className="px-4 py-20 bg-[#F1F5FF]" aria-labelledby="why-us-heading">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full mb-4">Why Choose Us</span>
              <h2 id="why-us-heading" className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
                Why Choose <span className="italic bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent">Ads India</span> for Bulk SMS & Digital Marketing?
              </h2>
              <p className="text-slate-500 font-medium max-w-xl mx-auto">Why 5000+ industry leaders trust us with their digital marketing and SMS communication needs in India.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {whyUs.map((item, i) => (
                <div key={i} className="bg-white border border-slate-100 rounded-[2.5rem] p-8 hover:shadow-2xl hover:shadow-slate-200/50 hover:scale-[1.02] transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-violet-600 group-hover:border-transparent transition-all">
                    <i className={`fas ${item.icon} text-blue-500 group-hover:text-white text-lg transition-colors`} aria-hidden="true"></i>
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section className="px-4 py-20" aria-labelledby="faq-heading">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full mb-4">FAQs</span>
              <h2 id="faq-heading" className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                Frequently Asked <span className="italic bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent">Questions</span>
              </h2>
              <p className="text-slate-400 font-medium mt-3 max-w-xl mx-auto">Common questions about our bulk SMS services and digital marketing solutions in India.</p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="bg-white border border-slate-100 rounded-[2rem] p-8 shadow-lg group open:shadow-xl transition-all"
                  itemScope
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                >
                  <summary className="cursor-pointer flex items-center justify-between gap-4 font-black text-slate-900 text-base md:text-lg list-none group-open:text-blue-600 transition-colors" itemProp="name">
                    {faq.q}
                    <span className="w-8 h-8 rounded-full bg-slate-50 group-open:bg-blue-50 flex items-center justify-center flex-shrink-0 transition-colors">
                      <i className="fas fa-chevron-down text-slate-400 group-open:text-blue-600 text-xs transition-all group-open:rotate-180" aria-hidden="true"></i>
                    </span>
                  </summary>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p className="text-slate-500 font-medium leading-relaxed mt-5 text-base" itemProp="text">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FINAL CTA ─── */}
        <section className="px-4 py-20" aria-label="Get Started with Ads India">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 rounded-[3.5rem] p-16 text-center relative overflow-hidden shadow-2xl shadow-blue-500/30">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.1),_transparent_70%)] pointer-events-none"></div>
              <div className="relative z-10">
                <span className="inline-block text-[10px] font-black uppercase tracking-[0.3em] text-white/70 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full mb-4">Get Started Today</span>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
                  Ready to Grow Your Business with India's{' '}
                  <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">Best Bulk SMS & Marketing Company?</span>
                </h2>
                <p className="text-white/70 text-lg mb-12 max-w-xl mx-auto font-medium">
                  Join <strong className="text-white">5000+ businesses</strong> who trust Ads India to power their <strong className="text-white">bulk SMS communications and digital marketing growth</strong> across India.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-3 px-10 py-5 bg-white text-blue-700 font-black rounded-2xl hover:scale-105 transition-all shadow-xl uppercase tracking-widest text-xs"
                    aria-label="Contact Ads India - Leading Bulk SMS and Digital Marketing Company in India"
                  >
                    Start Your Business Today <i className="fas fa-arrow-right" aria-hidden="true"></i>
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-3 px-10 py-5 bg-white/10 border border-white/20 text-white font-black rounded-2xl hover:scale-105 transition-all uppercase tracking-widest text-xs backdrop-blur-sm"
                    aria-label="Explore Ads India bulk SMS and digital marketing services"
                  >
                    Explore Our Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />

        <style jsx global>{`
          .font-inter { font-family: 'Inter', system-ui, sans-serif; }
          details summary::-webkit-details-marker { display: none; }
        `}</style>
      </main>
    </>
  );
}
