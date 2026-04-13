import React from 'react';

const industries = [
  {
    title: "E-commerce & Retail",
    icon: "fas fa-shopping-cart",
    desc: "Boost sales with automated abandoned cart reminders, personalized offer broadcasts, and seamless WhatsApp catalogs.",
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Banking & BFSI",
    icon: "fas fa-university",
    desc: "Secure OTP delivery, real-time transaction alerts, and automated account balance queries with 99.9% uptime.",
    color: "from-indigo-500 to-blue-600"
  },
  {
    title: "Healthcare",
    icon: "fas fa-hospital-user",
    desc: "Automate appointment bookings, prescription reminders, and patient feedback surveys via WhatsApp and Voice.",
    color: "from-rose-500 to-pink-500"
  },
  {
    title: "Real Estate",
    icon: "fas fa-building",
    desc: "Generate high-quality leads with virtual tours on WhatsApp and automated follow-ups for property inquiries.",
    color: "from-amber-500 to-orange-400"
  },
  {
    title: "Education",
    icon: "fas fa-graduation-cap",
    desc: "Send fee reminders, result alerts, and admission notifications to parents and students instantly.",
    color: "from-violet-500 to-purple-600"
  },
  {
    title: "Logistics",
    icon: "fas fa-truck",
    desc: "Real-time shipment tracking, delivery updates, and driver communication via automated SMS and WhatsApp.",
    color: "from-blue-600 to-violet-600"
  }
];

export default function IndustrySolutions() {
  return (
    <section className="py-24 bg-[#F1F5FF] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full mb-4">
            Industries We Serve
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Solutions Tailored for{' '}
            <span className="bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent">Your Industry</span>
          </h2>
          <p className="text-slate-500 text-lg font-medium">
            We understand that every business has unique challenges. Our messaging solutions are customized to fit your specific industry needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group p-8 rounded-[2rem] bg-white border border-slate-100 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-100/50 hover:-translate-y-2 hover:border-blue-200"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${industry.color} flex items-center justify-center text-white text-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                <i className={industry.icon}></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{industry.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm font-medium">
                {industry.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
