'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Cookie, Info } from 'lucide-react';

export default function CookiePolicy() {
    const lastUpdated = "March 19, 2026";
    
    return (
        <main className="min-h-screen bg-white text-slate-900 font-inter selection:bg-emerald-100 overflow-hidden relative">
            <Header />

            <div className="relative z-10 pt-40 pb-24 px-4 md:px-8 lg:px-12 max-w-4xl mx-auto">
                <div className="mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-100 text-[10px] font-black uppercase tracking-widest text-amber-700 mb-6">
                        <Cookie size={12} /> Cookie Tracking
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-6">
                        Cookie <span className="text-amber-600 italic">Policy</span>
                    </h1>
                    <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest leading-none bg-slate-50 w-fit px-4 py-2 rounded-lg border border-slate-100">
                      Last Updated: {lastUpdated}
                    </div>
                </div>

                <div className="space-y-12 text-slate-600 font-medium leading-relaxed">
                    <section>
                        <h2 className="text-xl font-black text-slate-900 mb-4 tracking-tight flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center text-xs font-black">01</span>
                            Essential Cookies
                        </h2>
                        <p>
                           These cookies are strictly necessary for the operation of our platform. They enable core functions such as security, network management, and accessibility. Without these, the site cannot function as intended.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-black text-slate-900 mb-4 tracking-tight flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center text-xs font-black">02</span>
                            Performance Cookies
                        </h2>
                        <p>
                            We use analytical cookies to understand how clients interact with our website. This data helps us optimize page load speeds, improve design UX, and refine our service offerings based on real-time usage patterns.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-black text-slate-900 mb-4 tracking-tight flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center text-xs font-black">03</span>
                            Marketing Cookies
                        </h2>
                        <p>
                            Tracking pixels and cookies may be used to deliver more relevant advertisements across other platforms. These help us measure the effectiveness of our own marketing efforts and provide you with personalized growth strategies.
                        </p>
                    </section>

                    <section className="bg-amber-50 p-8 rounded-[2rem] border border-amber-100">
                        <h3 className="text-lg font-black text-slate-900 mb-3 tracking-tight flex items-center gap-3">
                           <Info className="text-amber-600" /> Preference Management
                        </h3>
                        <p className="text-sm mb-6 font-medium">
                          You can manage or disable non-essential cookies through your browser settings at any time. However, this may degrade some functionality of our communication dashboard.
                        </p>
                    </section>
                </div>
            </div>
            
            <Footer />
        </main>
    );
}
