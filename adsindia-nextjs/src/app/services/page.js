'use client';

import React from 'react';
import Header from '@/components/Header';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import {
    MessageSquare,
    Smartphone,
    Send,
    Megaphone,
    Palette,
    Globe,
    ShieldCheck,
    Zap,
    Bot,
    ArrowRight,
    Sparkles
} from 'lucide-react';

const services = [
    {
        title: 'Promotional SMS',
        slug: 'promotional-sms',
        keywords: 'High-Impact Marketing, DND Bypass',
        description: "Scale your reach instantly with AI-driven promotional campaigns. Our SMART Link tracking provides real-time conversion insights for every message sent.",
        image: '/images/new/684ba8c14f7e2d3b7021b6f2_Frame 4273209-p-1600.webp',
        icon: <Megaphone className="w-6 h-6 text-blue-600" />,
        color: 'from-blue-50 to-indigo-100',
        border: 'border-blue-200',
        accent: 'text-blue-600'
    },
    {
        title: 'WhatsApp Marketing',
        slug: 'whatsapp-marketing',
        keywords: 'Automated Broadcasting, API Support',
        description: "Connect with customers on their favorite platform. High-volume WhatsApp broadcasting with real-time engagement and multi-agent support.",
        image: '/images/new/WhatsApp-Chatbot-Automate.webp',
        icon: <MessageSquare className="w-6 h-6 text-green-600" />,
        color: 'from-green-50 to-emerald-100',
        border: 'border-green-200',
        accent: 'text-green-600'
    },
    {
        title: 'Transactional SMS',
        slug: 'transactional-sms',
        keywords: 'Reliable Notifications, 2FA Alerts',
        description: "Mission-critical alerts, order updates, and booking confirmations delivered in seconds. Guaranteed 99.9% uptime for your business operations.",
        image: '/images/new/transactional-sms.webp',
        icon: <Smartphone className="w-6 h-6 text-purple-600" />,
        color: 'from-purple-50 to-violet-100',
        border: 'border-purple-200',
        accent: 'text-purple-600'
    },
    {
        title: 'Meta Ads Management',
        slug: 'meta-ads',
        keywords: 'Targeted ROI, Facebook & Instagram',
        description: "Scale your business with surgical precision. Data-driven Meta ad campaigns designed to lower CPA and maximize your return on ad spend.",
        image: '/images/new/meta-2.webp',
        icon: <Zap className="w-6 h-6 text-blue-500" />,
        color: 'from-blue-50 to-cyan-100',
        border: 'border-blue-200',
        accent: 'text-blue-500'
    },
    {
        title: 'Digital Branding',
        slug: 'graphic-design',
        keywords: 'Premium Visual Identity',
        description: "Visual storytelling that commands attention. From striking logos to comprehensive brand identities that differentiate your brand.",
        image: '/images/new/images (3).webp',
        icon: <Palette className="w-6 h-6 text-rose-600" />,
        color: 'from-rose-50 to-pink-100',
        border: 'border-rose-200',
        accent: 'text-rose-600'
    },
    {
        title: 'Web & App Development',
        slug: 'web-design',
        keywords: 'Modern UI/UX, Scalable Code',
        description: "Digital experiences built for performance. Lightning-fast, SEO-optimized web applications engineered for high conversion rates.",
        image: '/images/new/680a1b80b7a094ef37ed03b5_Frame 1805.webp',
        icon: <Globe className="w-6 h-6 text-indigo-600" />,
        color: 'from-indigo-50 to-blue-100',
        border: 'border-indigo-200',
        accent: 'text-indigo-600'
    },
    {
        title: 'Secure OTP SMS',
        slug: 'otp-sms',
        keywords: 'Bank-Grade Auth, Global Routing',
        description: "Bulletproof security for your applications. Our ultra-reliable OTP gateway provides instant verification codes with sub-3 second delivery.",
        image: '/images/new/OTP-SMS.webp',
        icon: <ShieldCheck className="w-6 h-6 text-red-600" />,
        color: 'from-red-50 to-orange-100',
        border: 'border-red-200',
        accent: 'text-red-600'
    },
    {
        title: 'Dynamic SMS',
        slug: 'dynamic-sms',
        keywords: 'Hyper-Personalization, API CRM',
        description: "Personalize your communication at scale. Inject unique user data and variables into large-scale messaging campaigns for higher engagement.",
        image: '/images/new/Frame-1.webp',
        icon: <Send className="w-6 h-6 text-sky-600" />,
        color: 'from-sky-50 to-blue-100',
        border: 'border-sky-200',
        accent: 'text-sky-600'
    },
    {
        title: 'Meta WhatsApp API',
        slug: 'meta-whatsapp-api',
        keywords: 'Official API, Green Tick',
        description: "Enterprise-grade messaging automation. Build sophisticated chatbots and manage scalable conversations with official Meta verification.",
        image: '/images/new/689c301c1ae7b481d0e33317_whatsapp chatbot.webp',
        icon: <Bot className="w-6 h-6 text-emerald-600" />,
        color: 'from-emerald-50 to-teal-100',
        border: 'border-emerald-200',
        accent: 'text-emerald-600'
    },
    {
        title: 'Voice Solutions (IVR)',
        slug: 'voice-solutions',
        keywords: 'Interactive Voice, Missed Call',
        description: "Professionalize your business with Multi-level IVR, automated voice feedback, and missed call marketing systems.",
        image: '/images/new/Route-Mobile_Products_Voice_IVR_Banner-copy.webp',
        icon: <Smartphone className="w-6 h-6 text-amber-600" />,
        color: 'from-amber-50 to-yellow-100',
        border: 'border-amber-200',
        accent: 'text-amber-600'
    },
    {
        title: 'RCS Business Messaging',
        slug: 'rcs-messaging',
        keywords: 'Rich Media, Verified Brand',
        description: "Upgrade from SMS to verified, rich media conversations with images, buttons, and carousels directly in the native messaging app.",
        image: '/images/new/rcs1.webp',
        icon: <MessageSquare className="w-6 h-6 text-blue-700" />,
        color: 'from-blue-50 to-sky-100',
        border: 'border-blue-200',
        accent: 'text-blue-700'
    },
    {
        title: 'AI Custom Workflows',
        slug: 'ai-workflows',
        keywords: 'Automation Logic, CRM Sync',
        description: "Tailor-made automation flows that sync your CRM, messaging apps, and tools using advanced AI-driven logic.",
        image: '/images/new/673d214247579fc17d125657_01 - Dynamic Content.webp',
        icon: <Zap className="w-6 h-6 text-fuchsia-600" />,
        color: 'from-fuchsia-50 to-purple-100',
        border: 'border-fuchsia-200',
        accent: 'text-fuchsia-600'
    },
];

const tiltOptions = {
    max: 12,
    perspective: 1000,
    scale: 1.02,
    speed: 1000,
    transition: true,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
}

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-[#F1F5FF] text-slate-900 overflow-hidden relative selection:bg-blue-100">
            {/* Fixed White Header */}
            <div className="h-20 bg-white border-b border-slate-200 fixed top-0 w-full z-[60] flex items-center shadow-sm">
                <Header />
            </div>

            <div className="relative z-10 pt-20">
                {/* Title Section */}
                <section className="pt-24 pb-16 px-4 text-center max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-blue-100 text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 mb-8 shadow-sm"
                    >
                        <Sparkles size={14} className="text-blue-500" />
                        Next-Gen Marketing Infrastructure
                    </motion.div>

                    <h1 className="text-4xl md:text-6xl font-[900] mb-8 tracking-tighter text-slate-900 leading-[0.95] lg:max-w-4xl mx-auto">
                         Elevate Your <span className="text-blue-600">Digital</span> Presence.
                    </h1>
                    <p className="text-slate-500 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed opacity-80">
                        Powering modern enterprises with scalable communication protocols and high-performance marketing automation systems.
                    </p>
                </section>

                {/* Clean Grid Section */}
                <section className="py-12 px-4 md:px-8 lg:px-12 max-w-[1440px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                            >
                                <Tilt options={tiltOptions} className="h-full">
                                    <div className={`group relative h-full bg-white border border-slate-100 rounded-[3rem] overflow-hidden hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] transition-all duration-700 p-8 lg:p-10 flex flex-col`}>
                                        
                                        {/* Background Subtle Gradient */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-700`} />

                                        {/* Visual Area */}
                                        <div className="relative h-60 w-full mb-10 rounded-[2rem] overflow-hidden bg-slate-50/50 flex items-center justify-center border border-slate-100/50 group-hover:bg-white transition-all duration-700 shadow-inner">
                                            <div className="relative w-full h-full p-4">
                                                <Image
                                                    src={service.image}
                                                    alt={service.title}
                                                    fill
                                                    className="object-contain p-4 transform duration-1000 group-hover:scale-105 group-hover:rotate-1"
                                                />
                                            </div>
                                        </div>

                                        <div className="flex-1 flex flex-col pt-2">
                                            <div className="flex items-center gap-4 mb-5">
                                                <div className={`p-3 rounded-2xl bg-gradient-to-br ${service.color} ${service.border} border shadow-sm group-hover:scale-110 transition-transform duration-500`}>
                                                    {service.icon}
                                                </div>
                                                <h3 className="text-2xl font-[900] text-slate-900 tracking-tight leading-none group-hover:text-blue-600 transition-colors duration-500">
                                                    {service.title}
                                                </h3>
                                            </div>

                                            <p className={`text-[10px] font-black ${service.accent} uppercase tracking-[0.2em] mb-4 opacity-80`}>
                                                {service.keywords}
                                            </p>

                                            <p className="text-slate-500 text-[15px] leading-relaxed font-medium mb-10 opacity-70 group-hover:opacity-100 transition-opacity">
                                                {service.description}
                                            </p>

                                            <div className="mt-auto">
                                                <motion.a
                                                    href={`/services/${service.slug}`}
                                                    whileHover={{ x: 5 }}
                                                    className="inline-flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.2em] text-blue-600 group/btn transition-all"
                                                >
                                                    Exploration <ArrowRight size={16} className="group-hover/btn:translate-x-1.5 transition-transform" />
                                                </motion.a>
                                            </div>
                                        </div>
                                    </div>
                                </Tilt>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Unified Solution Section */}
                <section className="py-32 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        {/* Image Side */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-[0_48px_96px_-24px_rgba(0,0,0,0.12)] border border-white">
                                <Image
                                    src="/images/new/680a085693e0014238588223_Frame 1875.webp"
                                    alt="Unified Messaging Platform"
                                    width={800}
                                    height={1000}
                                    className="w-full h-auto object-cover"
                                />
                            </div>

                            {/* Floating Decorative Elements */}
                            <motion.div
                                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-12 -right-8 w-32 h-32 bg-white/90 backdrop-blur-xl p-6 rounded-[2.5rem] shadow-2xl z-20 hidden md:flex items-center justify-center border border-blue-50"
                            >
                                <MessageSquare className="w-12 h-12 text-blue-600" />
                                <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-600 text-white text-[12px] font-black flex items-center justify-center rounded-xl shadow-lg shadow-blue-500/30">1</div>
                            </motion.div>
                        </motion.div>

                        {/* Content Side */}
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 mb-10 border border-blue-100/50">
                                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                                Ecosystem Integration
                            </div>

                            <h2 className="text-5xl md:text-7xl font-[900] text-slate-900 mb-10 tracking-tighter leading-[0.95]">
                                The Unified <span className="text-blue-600">Omnichannel</span> Powerhouse.
                            </h2>

                            <p className="text-slate-500 text-xl font-medium mb-14 leading-relaxed opacity-75">
                                Orchestrate your entire customer lifecycle through a single intelligent interface. From bulk delivery to conversational commerce, everything works in perfect harmony.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-8 mb-16">
                                {[
                                    { icon: <Bot className="w-6 h-6" />, title: 'Smart Routing', text: 'AI-optimized delivery paths' },
                                    { icon: <ShieldCheck className="w-6 h-6" />, title: 'Enterprise Security', text: 'ISO certified infrastructure' },
                                    { icon: <Zap className="w-6 h-6" />, title: 'Real-time Sync', text: 'Instant CRM data processing' },
                                    { icon: <Sparkles className="w-6 h-6" />, title: 'Predictive Analytics', text: 'Behavior-based performance' },
                                ].map((feature, i) => (
                                    <div key={i} className="flex gap-5 p-2 transition-all">
                                        <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shadow-sm border border-blue-100/50">
                                            {feature.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-base font-black text-slate-900 mb-1 tracking-tight">{feature.title}</h4>
                                            <p className="text-[12px] text-slate-500 font-medium leading-normal opacity-70">{feature.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <motion.a
                                href="/contact-us"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-4 px-12 py-6 bg-blue-600 text-white font-black rounded-3xl hover:bg-blue-700 transition-all uppercase tracking-[0.2em] text-[11px] shadow-[0_20px_40px_-12px_rgba(37,99,235,0.3)]"
                            >
                                Deploy Solution <ArrowRight size={20} />
                            </motion.a>
                        </div>
                    </div>
                </section>

                {/* Simplified CTA */}
                <section className="py-32 px-4 text-center bg-slate-50 border-y border-slate-100 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent opacity-50" />
                    <div className="max-w-4xl mx-auto relative z-10">
                        <h2 className="text-4xl md:text-7xl font-[900] mb-8 tracking-tighter leading-none">Ready to Scale?</h2>
                        <p className="text-slate-500 text-xl mb-14 font-medium max-w-2xl mx-auto opacity-70">
                            Partner with our lead engineers to construct a custom digital infrastructure tailored for your unique operational scale.
                        </p>
                        <motion.a
                            href="/contact-us"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-4 px-12 py-6 bg-slate-900 text-white font-black rounded-3xl hover:bg-black transition-all uppercase tracking-[0.2em] text-[11px] shadow-2xl shadow-slate-900/20"
                        >
                            Get Started Now <ArrowRight size={20} />
                        </motion.a>
                    </div>
                </section>
            </div>

            <style jsx global>{`
        header {
          background-color: white !important;
          box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1) !important;
        }
        header span.text-white {
          color: #0f172a !important;
        }
        header .bg-white\/20 {
          background-color: white !important;
          border-color: #e2e8f0 !important;
          color: #0f172a !important;
        }
      `}</style>
        </main>
    );
}

