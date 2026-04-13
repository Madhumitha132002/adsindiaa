'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { ShieldAlert, Lock, UserCheck } from 'lucide-react';

export default function PrivacyPolicy() {
    const lastUpdated = "March 19, 2026";
    
    return (
        <main className="min-h-screen bg-white text-slate-900 font-inter selection:bg-emerald-100 overflow-hidden relative">
            <Header />

            <div className="relative z-10 pt-40 pb-24 px-4 md:px-8 lg:px-12 max-w-4xl mx-auto">
                <div className="mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-[10px] font-black uppercase tracking-widest text-emerald-700 mb-6">
                        <Lock size={12} /> Data Privacy
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-6">
                        Privacy <span className="text-emerald-600 italic">Policy</span>
                    </h1>
                    <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest leading-none bg-slate-50 w-fit px-4 py-2 rounded-lg border border-slate-100">
                      Last Updated: {lastUpdated}
                    </div>
                </div>

                <div className="space-y-12 text-slate-600 font-medium leading-relaxed">
                    <section>
                        <h2 className="text-xl font-black text-slate-900 mb-4 tracking-tight flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center text-xs font-black">01</span>
                            Data Collection
                        </h2>
                        <p>
                            We collect information necessary to provide elite digital marketing and messaging services. This includes contact details, usage data, and information provided through our communication APIs. We never sell your data to third parties.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-black text-slate-900 mb-4 tracking-tight flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center text-xs font-black">02</span>
                            Usage Optimization
                        </h2>
                        <p>
                            Collected data is utilized to optimize campaign performance, ensure messaging security, and provide technical support. We use behavioral analytics to improve our dashboard and reporting tools for a superior client experience.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-black text-slate-900 mb-4 tracking-tight flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center text-xs font-black">03</span>
                            Security Infrastructure
                        </h2>
                        <p>
                            Ads Indiaa employs enterprise-grade encryption and isolated data enclaves to protect client information. Our infrastructure is audited regularly to maintain 99.9% resilience against unauthorized access.
                        </p>
                    </section>

                    <section className="bg-slate-900 p-8 rounded-[2rem] text-white">
                        <h2 className="text-lg font-black mb-3 tracking-tight flex items-center gap-3">
                          <UserCheck className="text-emerald-400" /> Your Rights
                        </h2>
                        <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                          You have the right to access, rectify, or delete your data at any time. Our privacy officer is available to handle all data sovereignty requests immediately.
                        </p>
                        <a href="/contact-us" className="text-xs font-black uppercase tracking-widest text-[#1ce5b2] hover:underline transition-all">
                            Manage Privacy Settings
                        </a>
                    </section>
                </div>
            </div>
            
            <Footer />
        </main>
    );
}
