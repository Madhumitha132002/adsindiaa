"use client";

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Star, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import emailjs from '@emailjs/browser';

const pricingPlans = [
    {
        id: 'startup',
        name: 'Startup Elite',
        price: '4,999',
        period: 'per month',
        description: 'Perfect for new businesses looking to establish their digital footprint.',
        features: [
            'Basic Bulk SMS (10k/mo)',
            'WhatsApp Personal Broadcast',
            'Essential Graphic Design (2/mo)',
            'Meta Ads Setup (Basic)',
            'Standard SEO Indexing',
            'Business Hours Support'
        ],
        icon: <Star className="w-6 h-6 text-blue-500" />,
        highlight: false,
        theme: 'blue'
    },
    {
        id: 'business',
        name: 'Business Pro',
        price: '14,999',
        period: 'per month',
        description: 'Our most popular plan for established brands seeking rapid scale.',
        features: [
            'Premium Bulk SMS (50k/mo)',
            'Full Meta WhatsApp API Access',
            'Advanced Graphic Design (8/mo)',
            'Meta Ads Management (Pro)',
            'Full Technical SEO Audit',
            '24/7 Dedicated Support',
            'AI Chatbot Integration'
        ],
        icon: <Sparkles className="w-6 h-6 text-violet-400" />,
        highlight: true,
        theme: 'violet'
    },
    {
        id: 'enterprise',
        name: 'Enterprise Apex',
        price: 'Custom',
        period: 'Contact for Quote',
        description: 'Elite infrastructure for high-volume corporate messaging and global scale.',
        features: [
            'Unlimited Bulk SMS (Tiered)',
            'Multi-Agent WhatsApp Inbox',
            'Unlimited Creative Assets',
            'High-Scale Meta Ad Campaigns',
            'Priority SEO Architecture',
            'Dedicated Account Manager',
            'Custom API Integrations',
            'White-label DASHBOARD'
        ],
        icon: <ShieldCheck className="w-6 h-6 text-indigo-500" />,
        highlight: false,
        theme: 'indigo'
    }
];

export default function PackagesPage() {
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({ name: '', phone: '' });

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const tryScroll = (attempts = 0) => {
                const el = document.querySelector(hash);
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                } else if (attempts < 10) {
                    setTimeout(() => tryScroll(attempts + 1), 100);
                }
            };
            setTimeout(() => tryScroll(), 300);
        }
    }, []);

    const handleUnlock = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.phone) return;

        setIsSubmitting(true);

        try {
            await emailjs.send(
                'service_weqzrik',
                'template_6oydkri',
                {
                    name: formData.name,
                    email: 'Not Provided',
                    phone: formData.phone,
                    service: 'PRICING UNLOCKED EVENT',
                    message: `
⚡ NEW LEAD: PRICING UNLOCKED ⚡

User: ${formData.name}
Phone: ${formData.phone}

This user just unlocked the pricing packages page. 
Please follow up with them regarding our pricing tiers.
                    `,
                    to_name: 'Ads Indiaa Team',
                },
                'BiD4cZPT8qRxvtBFT'
            );

            // Unlock on success
            setIsUnlocked(true);
        } catch (error) {
            console.error('EmailJS Error:', error);
            alert('Failed to unlock. Please try again or contact us directly.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen bg-[#F1F5FF] text-slate-900 font-inter selection:bg-blue-100 overflow-hidden relative">
            <Header />

            {/* Background Blobs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-blue-400/10 blur-[120px] rounded-full animate-pulse-slow" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-violet-400/10 blur-[120px] rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }} />
            </div>

            <div className="relative z-10 pt-40 pb-24 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto min-h-screen flex flex-col">
                <div className="text-center mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 mb-8 shadow-sm"
                    >
                        <Sparkles size={12} /> Flexible Pricing
                    </motion.div>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 mb-8 leading-[1.1]">
                        Invest in Your <span className="bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent">Digital Future</span>
                    </h1>
                    <p className="text-slate-500 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                        Transparent, growth-focused pricing tiers designed to scale with your business goals.
                    </p>
                </div>

                {/* Pricing Grid Area (With Overlay Logic) */}
                <div className="relative flex-1">
                    
                    {/* The Grid */}
                    <div className={`grid lg:grid-cols-3 gap-8 items-stretch transition-all duration-1000 ${!isUnlocked ? 'blur-[8px] select-none opacity-40 grayscale-[0.3]' : 'blur-0 opacity-100 grayscale-0'}`}>
                        {pricingPlans.map((plan, index) => (
                            <motion.div
                                key={plan.id}
                                id={plan.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative rounded-[3rem] p-10 flex flex-col h-full border ${plan.highlight ? 'bg-gradient-to-br from-blue-900 to-violet-950 text-white border-violet-500/30 shadow-2xl scale-105 z-10 shadow-violet-900/20' : 'bg-white/80 backdrop-blur-xl text-slate-900 border-slate-200/60 shadow-xl shadow-blue-900/5'}`}
                            >
                                {plan.highlight && (
                                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-5 py-2 bg-gradient-to-r from-blue-400 to-violet-500 rounded-full text-white text-[10px] font-black uppercase tracking-widest shadow-lg shadow-violet-500/20">
                                        Best ROI Choice
                                    </div>
                                )}

                                <div className="mb-8">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm ${plan.highlight ? 'bg-white/10 border border-white/10' : 'bg-blue-50 border border-blue-100'}`}>
                                        {plan.icon}
                                    </div>
                                    <h3 className={`text-2xl font-black mb-2 tracking-tight ${plan.highlight ? 'text-white' : 'text-slate-900'}`}>{plan.name}</h3>
                                    <p className={`text-sm font-medium ${plan.highlight ? 'text-slate-400' : 'text-slate-500'}`}>{plan.description}</p>
                                </div>

                                <div className="mb-10 flex items-baseline gap-1">
                                    <span className="text-4xl font-black tracking-tighter">
                                        {!isUnlocked ? '₹??,???' : `₹${plan.price}`}
                                    </span>
                                    <span className={`text-sm font-bold ${plan.highlight ? 'text-slate-500' : 'text-slate-400'}`}>{plan.period}</span>
                                </div>

                                <div className="flex-1 space-y-5 mb-10">
                                    {plan.features.map((feature, i) => (
                                        <div key={i} className="flex gap-4 items-center">
                                            <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${plan.highlight ? 'bg-violet-500/20 text-violet-400' : 'bg-blue-50 text-blue-600'}`}>
                                                <Check size={12} strokeWidth={3} />
                                            </div>
                                            <span className={`text-[13px] font-bold ${plan.highlight ? 'text-slate-300' : 'text-slate-600'}`}>{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <a
                                    href={isUnlocked ? "/contact-us" : "#"}
                                    onClick={(e) => !isUnlocked && e.preventDefault()}
                                    className={`w-full py-5 rounded-2xl font-black text-[11px] uppercase tracking-widest flex items-center justify-center gap-3 transition-all ${plan.highlight ? 'bg-gradient-to-r from-blue-500 to-violet-600 text-white hover:scale-[1.02] shadow-lg shadow-violet-500/20' : 'bg-blue-600 text-white hover:bg-blue-700 hover:scale-[1.02]'}`}
                                >
                                    Get Started Today <ArrowRight size={16} />
                                </a>
                            </motion.div>
                        ))}
                    </div>

                    {/* The Lead Generation Gate Overlay */}
                    <AnimatePresence>
                        {!isUnlocked && (
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                className="absolute inset-0 z-20 flex items-center justify-center p-4"
                            >
                                <div className="bg-white/90 backdrop-blur-2xl border border-white p-10 md:p-14 rounded-[3rem] shadow-2xl shadow-blue-900/10 max-w-md w-full text-center relative overflow-hidden">
                                     {/* Gate Decorative Blobs */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-[40px] -mx-10 -my-10"></div>
                                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-violet-100 rounded-full blur-[40px] -mx-10 -my-10"></div>
                                    
                                    <div className="relative z-10">
                                        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl text-blue-600 border border-blue-100">
                                            <i className="fas fa-lock"></i>
                                        </div>
                                        <h2 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">Unlock Premium Pricing</h2>
                                        <p className="text-sm font-medium text-slate-500 mb-8 leading-relaxed">
                                            Enter your details below to instantly review our transparent, growth-focused pricing tiers.
                                        </p>

                                        <form onSubmit={handleUnlock} className="space-y-4">
                                            <div className="text-left">
                                                <input 
                                                    type="text" 
                                                    required
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                                    placeholder="Full Name" 
                                                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm font-bold text-slate-800 transition-all placeholder:text-slate-400"
                                                />
                                            </div>
                                            <div className="text-left">
                                                <input 
                                                    type="tel" 
                                                    required
                                                    value={formData.phone}
                                                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                                    placeholder="Phone Number" 
                                                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm font-bold text-slate-800 transition-all placeholder:text-slate-400"
                                                />
                                            </div>
                                            <button 
                                                type="submit" 
                                                disabled={isSubmitting}
                                                className="w-full py-4 mt-2 bg-gradient-to-r from-blue-500 to-violet-600 text-white rounded-xl font-black uppercase tracking-widest text-[11px] shadow-lg shadow-blue-500/20 hover:scale-[1.02] transition-transform disabled:opacity-50 flex items-center justify-center gap-2"
                                            >
                                                {isSubmitting ? (
                                                   <span>Unlocking...</span>
                                                ) : (
                                                   <><i className="fas fa-unlock-alt"></i> Unlock Pricing Now</>
                                                )}
                                            </button>
                                        </form>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-6">
                                            100% Secure & Confidential
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Trust Banner (Only shown fully if unlocked or kept outside) */}
                 <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isUnlocked ? 1 : 0.5 }}
                    transition={{ duration: 1 }}
                    className="mt-24 bg-white/50 backdrop-blur-xl border border-white rounded-[3rem] p-12 text-center md:flex items-center justify-between gap-10 shadow-sm"
                 >
                    <div className="text-left max-w-xl mb-8 md:mb-0">
                        <h2 className="text-2xl font-black text-slate-900 mb-2 tracking-tight">Need a custom enterprise solution?</h2>
                        <p className="text-slate-500 font-medium text-sm leading-relaxed">We architect tailored infrastructures for high-volume requirements. Connect with our technical experts for a deep-dive consultation.</p>
                    </div>
                    <a href={isUnlocked ? "/contact-us" : "#"} className="px-10 py-5 bg-gradient-to-r from-blue-600 to-violet-600 border border-transparent text-white font-black rounded-2xl hover:scale-105 transition-transform uppercase tracking-widest text-[11px] shadow-lg shadow-blue-500/20 whitespace-nowrap">
                        Schedule Consultation
                    </a>
                </motion.div>
            </div>
            
        </main>
    );
}
