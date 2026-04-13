'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Shield, Clock, FileText } from 'lucide-react';

export default function TermsOfService() {
    const lastUpdated = "March 19, 2026";
    
    return (
        <main className="min-h-screen bg-white text-slate-900 font-inter selection:bg-emerald-100 overflow-hidden relative">
            <Header />

            <div className="relative z-10 pt-40 pb-24 px-4 md:px-8 lg:px-12 max-w-4xl mx-auto">
                <div className="mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-[10px] font-black uppercase tracking-widest text-slate-500 mb-6">
                        <Shield size={12} /> Legal Documentation
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-6">
                        Terms of <span className="text-emerald-600 italic">Service</span>
                    </h1>
                    <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest leading-none bg-slate-50 w-fit px-4 py-2 rounded-lg border border-slate-100">
                      <Clock size={12} /> Last Updated: {lastUpdated}
                    </div>
                </div>

                <div className="space-y-12 text-slate-600 font-medium leading-relaxed">
                    <section>
                        <h2 className="text-xl font-black text-slate-900 mb-4 tracking-tight flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center text-xs font-black">01</span>
                            Engagement Overview
                        </h2>
                        <p>
                            By accessing Ads Indiaa's services, you agree to comply with these terms. We provide digital marketing, messaging infrastructure, and creative solutions. Any engagement with our platform constitutes a binding legal agreement.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-black text-slate-900 mb-4 tracking-tight flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center text-xs font-black">02</span>
                            Service Utilization
                        </h2>
                        <p>
                            Clients are responsible for all content transmitted through our messaging channels. Use of our SMS and WhatsApp APIs must comply with local regulations (TRAI, GDPR, etc.). Compliance with DND (Do Not Disturb) protocols is mandatory for all promotional campaigns.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-black text-slate-900 mb-4 tracking-tight flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center text-xs font-black">03</span>
                            Intellectual Property
                        </h2>
                        <p>
                            All creative assets, codebases, and strategic frameworks developed by Ads Indiaa remain our property unless explicitly transferred via a separate ownership agreement. Clients retain ownership of their proprietary data and brand marks.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-black text-slate-900 mb-4 tracking-tight flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center text-xs font-black">04</span>
                            Payment & Cancellation
                        </h2>
                        <p>
                            Fees for services are billed according to your selected package. Late payments may result in service suspension. Cancellations must be submitted in writing 30 days prior to the next billing cycle.
                        </p>
                    </section>

                    <section className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                        <h2 className="text-lg font-black text-slate-900 mb-3 tracking-tight">Need Legal Clarification?</h2>
                        <p className="text-sm mb-6">If you have questions regarding our legal framework or custom compliance requirements, reach out to our legal department.</p>
                        <a href="/contact-us" className="text-xs font-black uppercase tracking-widest text-[#1ce5b2] hover:text-[#b3f338] transition-colors flex items-center gap-2">
                            Contact Legal Team <FileText size={14} />
                        </a>
                    </section>
                </div>
            </div>
            
            <Footer />
        </main>
    );
}
