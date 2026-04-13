'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
    MapPin,
    Phone,
    Mail,
    MessageSquare,
    ArrowRight,
    Send,
    Zap,
    CheckCircle2,
    XCircle,
    Loader2
} from 'lucide-react';

export default function ContactUs() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
    const [formData, setFormData] = useState({
        firstName: '',
        email: '',
        phone: '',
        subject: 'WhatsApp Marketing',
        customService: '',
        message: ''
    });

    const isFormValid = formData.firstName && formData.email && formData.phone && formData.message && (formData.subject !== 'Others' || formData.customService);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isFormValid) return;

        setIsSubmitting(true);
        setSubmitStatus(null);

        const finalServiceInfo = formData.subject === 'Others'
            ? `Others — ${formData.customService}`
            : formData.subject;

        try {
            await emailjs.send(
                'service_weqzrik',
                'template_6oydkri',
                {
                    name: formData.firstName,
                    email: formData.email,
                    phone: formData.phone,
                    service: finalServiceInfo,
                    message: `
📧 NEW CONTACT FORM SUBMISSION

👤 Name: ${formData.firstName}
✉️ Email: ${formData.email}
📞 Phone: ${formData.phone}
🎯 Interest: ${finalServiceInfo}

📝 Message:
${formData.message}
                    `,
                    to_name: 'Ads Indiaa Team',
                },
                'BiD4cZPT8qRxvtBFT'
            );

            setSubmitStatus('success');
            setFormData({
                firstName: '',
                email: '',
                phone: '',
                subject: 'WhatsApp Marketing',
                customService: '',
                message: ''
            });

            // Clear status after 5 seconds
            setTimeout(() => setSubmitStatus(null), 5000);
        } catch (error) {
            console.error('EmailJS Error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen bg-[#F1F5FF] text-slate-900 font-inter selection:bg-blue-100 overflow-hidden relative">
            <Header />

            <motion.div
                className="relative z-10 pt-40 pb-20 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto"
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
                {/* Header Section */}
                <div className="text-center mb-20">
                    <div className="bg-white/70 backdrop-blur-xl rounded-[3rem] p-12 md:p-20 border border-white/50 shadow-2xl shadow-slate-200/40 relative overflow-hidden">
                        {/* Decorative background elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl -mr-32 -mt-32" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-400/5 rounded-full blur-3xl -ml-32 -mb-32" />

                        <div className="relative z-10">
                            <motion.h1
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                                className="text-4xl md:text-7xl font-black tracking-tight text-slate-900 mb-6"
                            >
                                Let's Discuss <span className="bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent">Your Growth</span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                                className="text-slate-500 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed"
                            >
                                Have questions about our marketing services? Want a custom quote? Reach out to our team of experts and we'll get back to you within 24 hours.
                            </motion.p>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left Side: Contact Info */}
                    <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-slate-200/50 border border-slate-100 space-y-12 h-full flex flex-col justify-between">
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-2xl font-black tracking-tight text-slate-900 mb-8">Contact Information</h2>
                                <div className="space-y-8">
                                    {/* Office Location */}
                                    <div className="flex gap-5 items-start">
                                        <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center flex-shrink-0 text-slate-600">
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-black text-slate-900 mb-1">Office Location</h3>
                                            <p className="text-slate-500 text-sm font-medium leading-relaxed">
                                                Ads Indiaa No: 63 MBT Trunk Road,<br />
                                                Walajapet - 632513, Ranipet District
                                            </p>
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="flex gap-5 items-start">
                                        <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center flex-shrink-0 text-purple-600">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-black text-slate-900 mb-1">Phone</h3>
                                            <div className="space-y-1">
                                                <p className="text-slate-500 text-sm font-medium">Sales: <a href="tel:+917339109747" className="hover:text-emerald-600 transition-colors">+91 73391 09747</a></p>
                                                <p className="text-slate-500 text-sm font-medium">Support: <a href="tel:+917339109747" className="hover:text-emerald-600 transition-colors">+91 73391 09747</a></p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="flex gap-5 items-start">
                                        <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center flex-shrink-0 text-orange-600">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-black text-slate-900 mb-1">Email</h3>
                                            <div className="space-y-1">
                                                <p className="text-slate-500 text-sm font-medium"><a href="mailto:adsindiaa@gmail.com" className="hover:text-emerald-600 transition-colors">adsindiaa@gmail.com</a></p>
                                                <p className="text-slate-500 text-sm font-medium"><a href="mailto:adsindiaasupport@gmail.com" className="hover:text-emerald-600 transition-colors">adsindiaasupport@gmail.com</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Answer */}
                            <div className="bg-gradient-to-br from-slate-50 to-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm">
                                <h3 className="text-xl font-black text-slate-900 mb-3">Need a quick answer?</h3>
                                <p className="text-slate-500 text-sm font-medium mb-8">Reach out on our social channels for immediate assistance and updates.</p>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    {/* WhatsApp Button */}
                                    <motion.a
                                        href="https://wa.me/917339109747"
                                        target="_blank"
                                        whileHover={{ scale: 1.02, y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="flex-1 inline-flex justify-center items-center gap-3 px-6 py-4 bg-[#25D366] text-white font-black rounded-2xl shadow-lg shadow-[#25D366]/20 text-[11px] tracking-widest uppercase"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                                        </svg>
                                        WhatsApp
                                    </motion.a>

                                    {/* Instagram Button */}
                                    <motion.a
                                        href="#"
                                        target="_blank"
                                        whileHover={{ scale: 1.02, y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="flex-1 inline-flex justify-center items-center gap-3 px-6 py-4 bg-gradient-to-tr from-[#fd5949] via-[#d6249f] to-[#285AEB] text-white font-black rounded-2xl shadow-lg shadow-pink-500/20 text-[11px] tracking-widest uppercase"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.036 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                        </svg>
                                        Instagram
                                    </motion.a>
                                </div>
                            </div>
                        </div>

                        {/* Map Container */}
                        {/* <div className="w-full h-80 rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-sm relative group mt-8">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.724512815785!2d79.35802637404976!3d12.925419515891134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad350027300659%3A0x141e3dddcaa1d214!2sAds%20India%20Digital%20Marketing!5e0!3m2!1sen!2sin!4v1773128340106!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Office Location"
                                className="grayscale-[0.2] contrast-[1.1] brightness-[1.02] group-hover:grayscale-0 transition-all duration-700"
                            ></iframe>
                            <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-900 shadow-sm">
                                <MapPin size={12} className="text-emerald-600" /> Office Location
                            </div>
                        </div> */}
                    </div>

                    {/* Right Side: Form */}
                    <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-slate-200/50 border border-slate-100">
                        <h2 className="text-2xl font-black tracking-tight text-slate-900 mb-8">Send us a message</h2>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-slate-900 font-bold text-[10px] uppercase tracking-widest mb-2 px-1">First Name *</label>
                                <input
                                    required
                                    type="text"
                                    className="w-full bg-[#F1F5FF] border-none rounded-2xl px-5 py-4 text-slate-900 text-sm font-medium focus:ring-2 focus:ring-blue-500/20 transition-all placeholder:text-slate-400"
                                    placeholder="Enter your first name"
                                    value={formData.firstName}
                                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-slate-900 font-bold text-[10px] uppercase tracking-widest mb-2 px-1">Email Address *</label>
                                <input
                                    required
                                    type="email"
                                    className="w-full bg-[#F1F5FF] border-none rounded-2xl px-5 py-4 text-slate-900 text-sm font-medium focus:ring-2 focus:ring-blue-500/20 transition-all placeholder:text-slate-400"
                                    placeholder="name@company.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-slate-900 font-bold text-[10px] uppercase tracking-widest mb-2 px-1">Phone Number *</label>
                                <input
                                    type="tel"
                                    required
                                    className="w-full bg-[#F1F5FF] border-none rounded-2xl px-5 py-4 text-slate-900 text-sm font-medium focus:ring-2 focus:ring-blue-500/20 transition-all placeholder:text-slate-400"
                                    placeholder="+91 XXXXX XXXXX"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-slate-900 font-bold text-[10px] uppercase tracking-widest mb-2 px-1">Subject / Service of Interest</label>
                                <select
                                    className="w-full bg-[#F1F5FF] border-none rounded-2xl px-5 py-4 text-slate-900 text-sm font-medium focus:ring-2 focus:ring-blue-500/20 transition-all appearance-none cursor-pointer"
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                >
                                    <option>WhatsApp Marketing</option>
                                    <option>Bulk SMS Services</option>
                                    <option>Meta Ads Management</option>
                                    <option>Web & Graphic Design</option>
                                    <option>General Inquiry</option>
                                    <option>Others</option>
                                </select>
                            </div>

                            <AnimatePresence>
                                {formData.subject === 'Others' && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                        animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
                                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <label className="block text-slate-900 font-bold text-[10px] uppercase tracking-widest mb-2 px-1">Describe your service need *</label>
                                        <input
                                            required
                                            type="text"
                                            className="w-full bg-[#f8fafc] border border-blue-200/50 rounded-2xl px-5 py-4 text-slate-900 text-sm font-medium focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all placeholder:text-slate-400"
                                            placeholder="E.g. SEO Optimization, Custom App..."
                                            value={formData.customService}
                                            onChange={(e) => setFormData({ ...formData, customService: e.target.value })}
                                        />
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div>
                                <label className="block text-slate-900 font-bold text-[10px] uppercase tracking-widest mb-2 px-1">Message *</label>
                                <textarea
                                    required
                                    rows={4}
                                    className="w-full bg-[#F1F5FF] border-none rounded-2xl px-5 py-4 text-slate-900 text-sm font-medium focus:ring-2 focus:ring-blue-500/20 transition-all placeholder:text-slate-400 resize-none"
                                    placeholder="Tell us about your project or goals..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>

                            <AnimatePresence mode="wait">
                                {submitStatus === 'success' ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        className="w-full py-5 bg-blue-50 text-blue-800 font-bold rounded-[1.5rem] flex items-center justify-center gap-3"
                                    >
                                        <CheckCircle2 size={20} /> Message Sent Successfully!
                                    </motion.div>
                                ) : submitStatus === 'error' ? (
                                    <motion.div
                                        key="error"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        className="w-full py-5 bg-red-100 text-red-800 font-bold rounded-[1.5rem] flex items-center justify-center gap-3"
                                    >
                                        <XCircle size={20} /> Failed to send. Please try again.
                                    </motion.div>
                                ) : (
                                    <motion.button
                                        key="submit"
                                        type="submit"
                                        whileHover={{ scale: 1.01 }}
                                        whileTap={{ scale: 0.99 }}
                                        disabled={isSubmitting}
                                        onClick={handleSubmit}
                                        className={`w-full py-5 bg-gradient-to-r from-blue-500 to-violet-600 text-white font-black rounded-[1.5rem] shadow-xl shadow-blue-500/20 hover:opacity-90 transition-all uppercase tracking-widest text-[11px] flex items-center justify-center gap-3 ${isSubmitting ? 'opacity-70 pointer-events-none' : ''}`}
                                    >
                                        {isSubmitting ? (
                                            <>Sending Message <Loader2 size={16} className="animate-spin" /></>
                                        ) : (
                                            <>Send Message <Send size={16} /></>
                                        )}
                                    </motion.button>
                                )}
                            </AnimatePresence>
                        </form>
                    </div>
                </div>
            </motion.div>

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
