import Link from 'next/link';

export default function Services() {
  const servicesData = [
    { title: "Promotional SMS", slug: "promotional-sms", icon: "fas fa-bullhorn", color: "from-blue-500 to-violet-600", desc: "Scale your reach instantly with AI-driven promotional campaigns featuring SMART Link tracking for real-time conversion insights." },
    { title: "WhatsApp Marketing", slug: "whatsapp-marketing", icon: "fab fa-whatsapp", color: "from-violet-500 to-purple-600", desc: "Automate the entire customer journey with AI chatbots, multi-agent inboxes, and seamless product catalogs directly on WhatsApp." },
    { title: "Transactional SMS", slug: "transactional-sms", icon: "fas fa-shield-alt", color: "from-blue-500 to-indigo-600", desc: "Mission-critical alerts, order updates, and booking confirmations delivered in seconds with 99.9% uptime guarantee." },
    { title: "Secure OTP SMS", slug: "otp-sms", icon: "fas fa-key", color: "from-indigo-500 to-violet-600", desc: "Bank-grade authentication for apps and portals with sub-3 second delivery and global routing paths." },
    { title: "Voice Solutions (IVR)", slug: "voice-solutions", icon: "fas fa-phone-alt", color: "from-blue-600 to-cyan-500", isNew: true, desc: "Professionalize your business with Multi-level IVR, Missed Call marketing, and automated voice feedback systems." },
    { title: "RCS Business Messaging", slug: "rcs-messaging", icon: "fas fa-comment-alt", color: "from-violet-500 to-pink-500", isNew: true, desc: "Upgrade from SMS to rich, verified conversations with images, buttons, and carousels directly in the native messaging app." },
    { title: "Meta Ads Management", slug: "meta-ads", icon: "fas fa-magnet", color: "from-blue-500 to-violet-500", desc: "Expert Facebook & Instagram ad strategies designed to lower CPA and maximize ROAS through precise audience targeting." },
    { title: "Web & App Development", slug: "web-design", icon: "fas fa-laptop-code", color: "from-indigo-500 to-blue-600", desc: "Future-proof your digital presence with lightning-fast, SEO-optimized web applications built for conversion." },
    { title: "Digital Branding", slug: "graphic-design", icon: "fas fa-palette", color: "from-violet-500 to-purple-600", desc: "Crafting meaningful visual identities and high-impact marketing assets that differentiate your brand in a crowded market." },
    { title: "Meta WhatsApp API", slug: "meta-whatsapp-api", icon: "fas fa-robot", color: "from-blue-500 to-violet-600", desc: "Official Meta API integration for business verification (Green Tick) and scalable automated customer support." },
    { title: "Dynamic SMS", slug: "dynamic-sms", icon: "fas fa-sync", color: "from-violet-500 to-fuchsia-600", desc: "Hyper-personalize your communication by injecting unique user data and variables into large-scale messaging campaigns." },
    { title: "AI Custom Workflows", slug: "ai-workflows", icon: "fas fa-microchip", color: "from-blue-600 to-violet-600", desc: "Tailor-made automation flows that sync your CRM, messaging apps, and business tools using advanced AI logic." }
  ];

  return (
    <section className="relative w-full py-24 px-4 overflow-hidden bg-white">
      <div className="max-w-[1400px] mx-auto z-10 relative px-6 lg:px-10">
        <div className="mb-16 animate-fade-in-up md:w-1/2">
          <span className="inline-block text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full mb-4">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Discover Our{' '}
            <span className="bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent">Powerful Services</span>{' '}
            that you need
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {servicesData.map((service, index) => (
            <Link
              href={`/services/${service.slug}`}
              key={index}
              className="group flex flex-col sm:flex-row gap-8 items-start animate-fade-in-up bg-white border border-slate-100 rounded-[2.5rem] p-8 hover:shadow-2xl hover:shadow-blue-100/40 hover:border-blue-200 transition-all duration-500 cursor-pointer"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="relative flex-shrink-0">
                <div className={`w-16 h-16 shrink-0 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  <i className={`${service.icon} text-2xl text-white`}></i>
                </div>
                {service.isNew && (
                  <span className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-500 to-violet-600 text-white text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full border-2 border-white shadow-md">New</span>
                )}
              </div>

              <div className="flex-1 mt-1">
                <h3 className="text-xl font-extrabold text-slate-900 mb-3 tracking-tighter group-hover:text-blue-600 transition-colors duration-300">{service.title}</h3>
                <p className="text-slate-500 text-[15px] leading-relaxed font-medium opacity-80 group-hover:opacity-100 transition-opacity">{service.desc}</p>
                <div className="inline-flex items-center gap-2 mt-5 text-[11px] font-black uppercase tracking-widest text-blue-600 group-hover:gap-3 transition-all">
                  Exploration <i className="fas fa-arrow-right"></i>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}