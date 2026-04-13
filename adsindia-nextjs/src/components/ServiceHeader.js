"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function ServiceHeader() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'}`}>
            <div className="flex items-center justify-between px-6 lg:px-10 max-w-[1400px] mx-auto">

                <Link href="/" className="group flex items-center gap-2 z-10">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${scrolled ? 'bg-gradient-to-br from-blue-500 to-violet-600' : 'bg-white/10 backdrop-blur-sm border border-white/20'}`}>
                        <span className="font-black text-xl text-white">A</span>
                    </div>
                    <span className={`text-2xl tracking-tighter transition-colors duration-500 ${scrolled ? 'text-slate-900' : 'text-white'}`}>
                        <span className="font-extrabold">Ads</span><span className="font-light">India</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-10">
                    {[
                        { name: 'Home', path: '/' },
                        { name: 'Services', path: '/services' },
                        { name: 'Packages', path: '/packages' },
                        { name: 'About', path: '/about-us' },
                        { name: 'Contact', path: '/contact-us' }
                    ].map((item) => (
                        <Link
                            key={item.name}
                            href={item.path}
                            className={`text-[13px] font-bold uppercase tracking-[0.2em] transition-all duration-500 hover:scale-110 ${scrolled
                                ? 'text-slate-600 hover:text-blue-600'
                                : 'text-white/80 hover:text-white'
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* CTA Button */}
                <div className="hidden lg:block">
                    <Link
                        href="/contact-us"
                        className="px-8 py-3 rounded-2xl font-black text-sm transition-all duration-500 hover:scale-105 active:scale-95 text-white bg-gradient-to-r from-blue-500 to-violet-600 shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30"
                    >
                        START PROJECT
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className={`lg:hidden z-[100] p-3 rounded-2xl transition-all duration-500 ${scrolled
                        ? 'bg-slate-100 text-slate-900'
                        : 'bg-white/10 backdrop-blur-sm text-white border border-white/20'
                        }`}
                >
                    <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars-staggered'} text-xl`}></i>
                </button>

                {/* Mobile Sidebar */}
                <div className={`fixed inset-y-0 right-0 w-full md:w-[400px] bg-white shadow-[-20px_0_60px_rgba(0,0,0,0.1)] z-50 transform transition-transform duration-700 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden flex flex-col pt-32 px-10`}>
                    <div className="flex flex-col gap-8">
                        {['Home', 'Services', 'Packages', 'About', 'Contact'].map((item, idx) => (
                            <Link
                                key={item}
                                href={`/${item === 'Home' ? '' : item.toLowerCase().replace(' ', '-')}`}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-4xl font-black text-slate-900 hover:text-blue-600 transition-colors flex items-center justify-between group"
                                style={{ transitionDelay: `${idx * 100}ms` }}
                            >
                                {item}
                                <i className="fas fa-arrow-right text-xl opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all"></i>
                            </Link>
                        ))}
                        <Link
                            href="/contact-us"
                            className="mt-10 px-8 py-5 rounded-3xl bg-gradient-to-r from-blue-500 to-violet-600 text-white font-black text-xl text-center shadow-2xl"
                        >
                            Get In Touch
                        </Link>
                    </div>

                    <div className="mt-auto pb-12">
                        <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-6">Social Connect</p>
                        <div className="flex gap-6">
                            {['facebook', 'instagram', 'linkedin', 'twitter'].map(social => (
                                <a key={social} href="#" className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-gradient-to-br hover:from-blue-500 hover:to-violet-600 hover:text-white transition-all">
                                    <i className={`fab fa-${social} text-lg`}></i>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mobile menu backdrop */}
                {mobileMenuOpen && (
                    <div
                        className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 lg:hidden"
                        onClick={() => setMobileMenuOpen(false)}
                    ></div>
                )}
            </div>
        </header>
    );
}
