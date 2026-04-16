import Image from 'next/image';
import Link from 'next/link';

export default function Cta() {
  return (
    <section className="w-full py-20 px-4 relative z-10 overflow-x-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-[#F1F5FF] backdrop-blur-xl rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-100/50 animate-fade-in-up border border-blue-100">
          {/* Decorative blobs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-200/20 rounded-full blur-3xl -ml-24 -mb-24 pointer-events-none" />

          <div className="relative z-10 p-6 sm:p-10 md:p-16 flex flex-col items-center">
            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-3 bg-blue-50 border border-blue-200 px-4 py-2 md:px-6 md:py-2.5 rounded-full mb-8">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                </span>
                <span className="text-[10px] sm:text-xs md:text-sm font-bold tracking-widest text-blue-700 uppercase">Join Thousands of Satisfied Customers</span>
              </div>

              <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-slate-900">
                Ready to Transform Your{' '}<br className="hidden md:block" />
                <span className="bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent">Business Communication?</span>
              </h2>

              <p className="text-slate-500 font-medium text-lg md:text-xl leading-relaxed mb-10 max-w-3xl mx-auto">
                Get started today and experience the power of unified messaging. Our team is ready to help you streamline your customer communications and drive growth effortlessly.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
                <Link href="/contact-us" className="inline-flex items-center justify-center gap-3 px-12 py-5 font-bold tracking-widest text-white uppercase bg-gradient-to-r from-blue-500 to-violet-600 rounded-2xl shadow-xl shadow-blue-500/20 transition-all hover:scale-105 hover:shadow-blue-500/30 text-sm">
                  <i className="fas fa-paper-plane"></i>
                  Contact Us Now
                </Link>
                <Link href="/packages" className="inline-flex items-center justify-center gap-3 px-10 py-5 font-bold text-slate-700 border-2 border-slate-200 bg-white rounded-2xl hover:border-blue-400 hover:text-blue-600 transition-all text-sm">
                  View Packages
                </Link>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {[
                  { value: '5000+', label: 'Active Clients' },
                  { value: '99.9%', label: 'Uptime SLA' },
                  { value: '24/7', label: 'Support' },
                  { value: '250M+', label: 'Messages Sent' },
                ].map((stat, i) => (
                  <div key={i} className="bg-white border border-slate-100 p-6 text-center rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                    <div className="text-3xl font-extrabold bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent mb-1">{stat.value}</div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Unified Contact Section */}
        <div className="relative mt-20 max-w-6xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {/* Background Decoration */}
          <div className="absolute inset-0 z-0 overflow-hidden rounded-[3rem] pointer-events-none">
             {/* Radiating Lines */}
             <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-[0.03] scale-150" viewBox="0 0 100 100">
               <circle cx="50" cy="50" r="1" fill="currentColor" />
               {[...Array(24)].map((_, i) => (
                 <line key={i} x1="50" y1="50" x2={50 + 50 * Math.cos((i * 15 * Math.PI) / 180)} y2={50 + 50 * Math.sin((i * 15 * Math.PI) / 180)} stroke="currentColor" strokeWidth="0.1" />
               ))}
             </svg>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/30 rounded-full blur-[120px]" />
          </div>

          <div className="relative z-10 bg-gradient-to-br from-white/95 via-blue-50/80 to-indigo-50/90 backdrop-blur-3xl border border-white shadow-[0_40px_100px_-20px_rgba(45,78,255,0.15)] rounded-[3rem] overflow-hidden">
            <div className="flex flex-col md:flex-row items-stretch">
              
              {/* Email Us */}
              <div className="flex-1 p-10 md:p-12 flex flex-col items-center text-center relative group">
                <div className="w-16 h-16 bg-[#EEF4FF] rounded-2xl flex items-center justify-center mb-6 text-[#2D60FF] transition-transform group-hover:scale-110">
                  <i className="far fa-envelope text-3xl"></i>
                </div>
                <h3 className="font-extrabold text-slate-900 text-2xl mb-3">Email Us</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-[200px]">
                  Our team is here to help with your inquiries.
                </p>
                <a href="mailto:support@adsindiaa.in" className="text-[#2D60FF] font-bold hover:text-violet-600 transition-colors text-sm underline-offset-4 hover:underline">
                  support@adsindiaa.in
                </a>
                
                {/* Vertical Divider 1 */}
                <div className="hidden md:block absolute right-0 top-[20%] bottom-[20%] w-[1px] bg-indigo-100/50 shadow-[0_0_20px_rgba(79,70,229,0.4)]"></div>
              </div>

              {/* Call Us */}
              <div className="flex-1 p-10 md:p-12 flex flex-col items-center text-center relative group">
                <div className="w-16 h-16 bg-[#F5F3FF] rounded-2xl flex items-center justify-center mb-6 text-[#7C3AED] transition-transform group-hover:scale-110">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform -rotate-12">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <h3 className="font-extrabold text-slate-900 text-2xl mb-3">Call Us</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-[200px]">
                  Available: Mon – Sat,<br />9:00 AM – 6:00 PM (IST)
                </p>
                <a href="tel:+917339109747" className="text-[#2D60FF] font-bold hover:text-violet-600 transition-colors text-sm underline-offset-4 hover:underline">
                  +91 73391 09747
                </a>

                {/* Vertical Divider 2 */}
                <div className="hidden md:block absolute right-0 top-[20%] bottom-[20%] w-[1px] bg-emerald-100/50 shadow-[0_0_20px_rgba(16,185,129,0.4)]"></div>
              </div>

              {/* WhatsApp */}
              <div className="flex-1 p-10 md:p-12 flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-[#F0FDF4] rounded-2xl flex items-center justify-center mb-6 text-[#10B981] transition-transform group-hover:scale-110">
                  <i className="far fa-comment-dots text-3xl"></i>
                </div>
                <h3 className="font-extrabold text-slate-900 text-2xl mb-3">WhatsApp</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-[200px]">
                  Instant chat with our expert team.
                </p>
                <Link href="https://wa.me/917339109747" target="_blank" className="inline-flex items-center justify-center px-10 py-4 font-bold tracking-wide text-white bg-gradient-to-r from-[#4F7DFF] to-[#8A56FF] rounded-2xl shadow-[0_12px_24px_-8px_rgba(79,125,255,0.4)] transition-all hover:scale-105 hover:shadow-[0_16px_32px_-8px_rgba(79,125,255,0.5)] text-sm">
                  Start Chatting
                </Link>
              </div>


            </div>
          </div>
        </div>

      </div>
    </section>
  );
}