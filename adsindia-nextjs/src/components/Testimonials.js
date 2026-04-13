import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    { name: "Sneha R.", role: "Operations Manager", icon: '🏢', text: "Their 24/7 customer support is truly exceptional. Whenever we need assistance, the team is always ready to help. Highly recommended for any business!" },
    { name: "Rahul M.", role: "Business Owner", icon: '🚀', text: "Ads India has transformed our business communication with lightning-fast delivery and 99.99% uptime. We never worry about downtime anymore!" },
    { name: "Vikram S.", role: "CEO", icon: '🎓', text: "With Ads India's powerful messaging infrastructure, we've streamlined our customer interactions like never before. Fast, reliable, and easy to use!" }
  ];

  return (
    <section className="relative w-full py-16 lg:py-24 px-4 z-10 overflow-hidden bg-[#F1F5FF]">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -ml-32 -mt-32 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-violet-200/20 rounded-full blur-3xl -mr-24 -mb-24 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto">
        <div className="relative bg-white rounded-[3rem] p-8 md:p-16 lg:p-20 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center gap-12 overflow-hidden">
          
          {/* Decorative accent */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100/30 blur-[100px] rounded-full pointer-events-none" />

          <div className="text-center space-y-4 relative z-10 mb-4">
            <span className="inline-block text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full">
              Client Reviews
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.15]">
              What Our Clients{' '}
              <span className="bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent">Say About Us</span>
            </h2>
            <p className="text-slate-500 text-lg md:text-xl font-medium max-w-2xl mx-auto">
              Don't just take our word for it — hear from businesses that have transformed their communication with Ads India.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative z-10 w-full">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="group bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 hover:border-blue-200 hover:-translate-y-2 flex flex-col"
              >
                <div className="text-4xl mb-4">{testimonial.icon}</div>

                <div className="flex gap-1 mb-5 text-amber-400 text-sm">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>

                <p className="text-slate-600 text-base leading-relaxed mb-8 font-medium italic flex-grow">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white font-extrabold text-xl shadow-md shadow-blue-200/50">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-extrabold text-slate-800 text-sm">{testimonial.name}</div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}