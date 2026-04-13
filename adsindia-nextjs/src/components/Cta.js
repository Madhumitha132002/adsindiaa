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

          <div className="relative z-10 p-10 md:p-16 flex flex-col items-center">
            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-3 bg-blue-50 border border-blue-200 px-6 py-2.5 rounded-full mb-8">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                </span>
                <span className="text-sm font-bold tracking-widest text-blue-700 uppercase">Join Thousands of Satisfied Customers</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-slate-900">
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

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {[
            { icon: 'fa-envelope', title: 'Email Us', sub: 'Drop us a line anytime', link: 'mailto:support@adsindiaa.in', label: 'support@adsindiaa.in', color: 'text-blue-600 bg-blue-50 border-blue-100', hover: 'hover:border-blue-300 hover:shadow-blue-100/50' },
            { icon: 'fa-phone-alt', title: 'Call Us', sub: 'Mon–Sat from 9am to 6pm', link: 'tel:+917339109747', label: '+91 73391 09747', color: 'text-violet-600 bg-violet-50 border-violet-100', hover: 'hover:border-violet-300 hover:shadow-violet-100/50' },
            { icon: 'fa-comment-dots', title: 'WhatsApp', sub: 'Chat with our team now', link: 'https://wa.me/917339109747', label: 'Start Chatting', color: 'text-indigo-600 bg-indigo-50 border-indigo-100', hover: 'hover:border-indigo-300 hover:shadow-indigo-100/50' },
          ].map((item, i) => (
            <div key={i} className={`bg-white border border-slate-100 p-8 rounded-3xl text-center group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${item.hover}`}>
              <div className={`w-14 h-14 ${item.color} border rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform`}>
                <i className={`fas ${item.icon} text-2xl`}></i>
              </div>
              <h3 className="font-extrabold text-slate-900 text-xl mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm mb-4 font-medium">{item.sub}</p>
              <a href={item.link} target={item.link.startsWith('http') ? '_blank' : undefined} className="text-blue-600 font-bold hover:text-violet-600 transition-colors text-sm">
                {item.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}