'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  { 
    name: "Sneha R.", 
    role: "Operations Manager", 
    icon: '🏢', 
    color: 'bg-blue-500',
    text: "Their 24/7 customer support is truly exceptional. Whenever we need assistance, the team is always ready to help. Highly recommended for any business!" 
  },
  { 
    name: "Rahul M.", 
    role: "Business Owner", 
    icon: '🚀', 
    color: 'bg-indigo-500',
    text: "Ads India has transformed our business communication with lightning-fast delivery and 99.99% uptime. We never worry about downtime anymore!" 
  },
  { 
    name: "Vikram S.", 
    role: "CEO", 
    icon: '🎓', 
    color: 'bg-violet-500',
    text: "With Ads India's powerful messaging infrastructure, we've streamlined our customer interactions like never before. Fast, reliable, and easy to use!" 
  },
  { 
    name: "Priya K.", 
    role: "Marketing Lead", 
    icon: '📊', 
    color: 'bg-emerald-500',
    text: "The bulk SMS campaigns have a response rate like nothing we've seen before. The platform is intuitive and the delivery reports are detailed." 
  },
  { 
    name: "Anil T.", 
    role: "E-commerce Founder", 
    icon: '🛍️', 
    color: 'bg-rose-500',
    text: "Integrating their API was seamless. Now our OTP delivery is instant, which has significantly improved our user signup experience!" 
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9
    })
  };

  return (
    <section className="relative w-full py-20 lg:py-28 px-4 z-10 overflow-hidden bg-[#F8FAFF]">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400 rounded-full blur-[120px] mix-blend-multiply transition-all duration-1000" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-400 rounded-full blur-[120px] mix-blend-multiply transition-all duration-1000" />
      </div>

      <div className="max-w-[1400px] mx-auto relative px-4">
        {/* Main Glass Container */}
        <div className="relative bg-white/70 backdrop-blur-3xl rounded-[3rem] p-8 md:p-16 lg:p-20 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.06)] border border-white flex flex-col items-center overflow-hidden">
          
          {/* Header Section */}
          <div className="text-center space-y-6 relative z-10 max-w-3xl mb-16">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-block text-[11px] font-black uppercase tracking-[0.4em] text-blue-600 bg-blue-50/50 border border-blue-100 px-5 py-2 rounded-full backdrop-blur-md"
            >
              Client Reviews
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-slate-900 leading-tight"
            >
              What Our Clients <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-700 bg-clip-text text-transparent">
                Say About Us
              </span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed"
            >
              Don't just take our word for it — hear from businesses that have transformed their communication with Ads India.
            </motion.p>
          </div>

          {/* Slider Container */}
          <div className="relative w-full max-w-4xl min-h-[460px] flex items-center justify-center">
            {/* Nav Buttons */}
            <button 
              onClick={prevSlide}
              className="absolute left-0 md:-left-4 lg:-left-20 z-30 p-4 rounded-full bg-white shadow-xl shadow-blue-900/5 text-slate-400 hover:text-blue-600 hover:scale-110 active:scale-95 transition-all duration-300 border border-slate-100 hidden md:flex items-center justify-center"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-0 md:-right-4 lg:-right-20 z-30 p-4 rounded-full bg-white shadow-xl shadow-blue-900/5 text-slate-400 hover:text-blue-600 hover:scale-110 active:scale-95 transition-all duration-300 border border-slate-100 hidden md:flex items-center justify-center"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 }
                }}
                className="absolute w-full px-4"
              >
                <div className="bg-white border border-slate-100 p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.03)] flex flex-col items-center text-center">
                  <div className="text-6xl mb-8 transform hover:scale-110 transition-transform duration-300">
                    {testimonials[index].icon}
                  </div>

                  <div className="flex gap-1.5 mb-8 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>

                  <div className="relative mb-12">
                    <span className="absolute -top-6 -left-4 text-7xl text-blue-50 font-serif leading-none italic pointer-events-none select-none">“</span>
                    <p className="text-slate-600 text-xl md:text-2xl leading-relaxed font-medium italic relative z-10 px-4">
                      {testimonials[index].text}
                    </p>
                    <span className="absolute -bottom-14 -right-4 text-7xl text-blue-50 font-serif leading-none italic pointer-events-none select-none">”</span>
                  </div>

                  <div className="w-full h-px bg-slate-50 mb-10" />

                  <div className="flex flex-col items-center gap-4">
                    <div className={`w-16 h-16 rounded-3xl ${testimonials[index].color} flex items-center justify-center text-white font-black text-2xl shadow-lg ring-4 ring-white`}>
                      {testimonials[index].name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-black text-slate-800 text-xl">{testimonials[index].name}</div>
                      <div className="text-[11px] font-black text-blue-500 uppercase tracking-[0.3em]">{testimonials[index].role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Indicators */}
          <div className="flex gap-3 mt-16 relative z-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                }}
                className={`transition-all duration-500 rounded-full h-2.5 ${
                  i === index ? 'w-10 bg-blue-600 shadow-lg shadow-blue-200' : 'w-2.5 bg-slate-200 hover:bg-slate-300'
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}