import Link from 'next/link';
import Image from 'next/image';

export default function Services() {
  const servicesData = [
    { title: "Promotional SMS", slug: "promotional-sms", icon: "fas fa-bullhorn", color: "from-blue-500 to-violet-600", image: "/images/new/684ba8c14f7e2d3b7021b6f2_Frame 4273209-p-1600.webp", desc: "Scale your reach instantly with AI-driven promotional campaigns featuring SMART Link tracking for real-time conversion insights." },
    { title: "WhatsApp Marketing", slug: "whatsapp-marketing", icon: "fab fa-whatsapp", color: "from-violet-500 to-purple-600", image: "/images/new/WhatsApp-Chatbot-Automate.webp", desc: "Automate the entire customer journey with AI chatbots, multi-agent inboxes, and seamless product catalogs directly on WhatsApp." },
    { title: "Transactional SMS", slug: "transactional-sms", icon: "fas fa-shield-alt", color: "from-blue-500 to-indigo-600", image: "/images/new/transactional-sms.webp", desc: "Mission-critical alerts, order updates, and booking confirmations delivered in seconds with 99.9% uptime guarantee." },
    { title: "Secure OTP SMS", slug: "otp-sms", icon: "fas fa-key", color: "from-indigo-500 to-violet-600", image: "/images/new/OTP-SMS.webp", desc: "Bank-grade authentication for apps and portals with sub-3 second delivery and global routing paths." },
    { title: "Meta Ads Management", slug: "meta-ads", icon: "fas fa-magnet", color: "from-blue-500 to-violet-500", image: "/images/new/meta-2.webp", desc: "Expert Facebook & Instagram ad strategies designed to lower CPA and maximize ROAS through precise audience targeting." },
    { title: "Dynamic SMS", slug: "dynamic-sms", icon: "fas fa-sync", color: "from-violet-500 to-fuchsia-600", image: "/images/new/Frame-1.webp", desc: "Hyper-personalize your communication by injecting unique user data and variables into large-scale messaging campaigns." },
    { title: "Voice Solutions (IVR)", slug: "voice-solutions", icon: "fas fa-phone-alt", color: "from-blue-600 to-cyan-500", image: "/images/new/Route-Mobile_Products_Voice_IVR_Banner-copy.webp", isNew: true, desc: "Professionalize your business with Multi-level IVR, Missed Call marketing, and automated voice feedback systems." },
    { title: "RCS Business Messaging", slug: "rcs-messaging", icon: "fas fa-comment-alt", color: "from-violet-500 to-pink-500", image: "/images/new/rcs1.webp", isNew: true, desc: "Upgrade from SMS to rich, verified conversations with images, buttons, and carousels directly in the native messaging app." },
    { title: "Web & App Development", slug: "web-design", icon: "fas fa-laptop-code", color: "from-indigo-500 to-blue-600", image: "/images/new/680a1b80b7a094ef37ed03b5_Frame 1805.webp", desc: "Future-proof your digital presence with lightning-fast, SEO-optimized web applications built for conversion." },
    { title: "Digital Branding", slug: "graphic-design", icon: "fas fa-palette", color: "from-violet-500 to-purple-600", image: "/images/new/images (3).webp", desc: "Crafting meaningful visual identities and high-impact marketing assets that differentiate your brand in a crowded market." },
    { title: "Meta WhatsApp API", slug: "meta-whatsapp-api", icon: "fas fa-robot", color: "from-blue-500 to-violet-600", image: "/images/new/689c301c1ae7b481d0e33317_whatsapp chatbot.webp", desc: "Official Meta API integration for business verification (Green Tick) and scalable automated customer support." },
    { title: "AI Custom Workflows", slug: "ai-workflows", icon: "fas fa-microchip", color: "from-blue-600 to-violet-600", image: "/images/new/673d214247579fc17d125657_01 - Dynamic Content.webp", desc: "Tailor-made automation flows that sync your CRM, messaging apps, and business tools using advanced AI logic." },
  ];

  return (
    <section className="relative w-full py-24 px-4 overflow-hidden bg-white">
      <div className="max-w-[1400px] mx-auto z-10 relative px-6 lg:px-10">
        <div className="mb-16 animate-fade-in-up md:w-1/2">
          <span className="inline-block text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full mb-4">Our Expertise</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Discover Our{' '}
            <span className="bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent">Powerful Services</span>{' '}
            that you need
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
          {servicesData.map((service, index) => (
            <Link
              href={`/services/${service.slug}`}
              key={index}
              className="group flex flex-col bg-slate-50/50 backdrop-blur-2xl border border-white max-w-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_24px_60px_-15px_rgba(59,130,246,0.2)] rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:-translate-y-2 cursor-pointer relative"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Full-width Image Header */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-slate-100 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-[1.05] transition-transform duration-700 ease-out"
                  unoptimized
                />
                {/* Subtle Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Floating Icon inside image on hover */}
                <div className="absolute top-6 right-6 w-14 h-14 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl flex items-center justify-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75 pointer-events-none">
                  <i className={`${service.icon} text-2xl bg-gradient-to-br ${service.color} bg-clip-text text-transparent drop-shadow-sm`} />
                </div>

                {service.isNew && (
                  <span className="absolute top-6 left-6 bg-gradient-to-r from-blue-500 to-violet-600 text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full border border-white/20 shadow-lg backdrop-blur-md">New</span>
                )}
              </div>

              {/* Glassmorphic Content Area */}
              <div className="relative p-8 sm:p-10 flex flex-col flex-1 bg-white/80 backdrop-blur-3xl border-t border-slate-100/50">

                <h3 className="text-2xl font-[900] text-slate-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors duration-300 flex items-center gap-4">
                  {/* Default Small Icon (fades out on hover to favor the big one) */}
                  <div className="w-10 h-10 flex-shrink-0 rounded-[14px] bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 flex items-center justify-center shadow-sm group-hover:scale-90 opacity-100 group-hover:opacity-0 transition-all duration-300">
                    <i className={`${service.icon} text-lg bg-gradient-to-br ${service.color} bg-clip-text text-transparent`} />
                  </div>
                  {service.title}
                </h3>

                <p className="text-slate-500 text-[15px] leading-relaxed font-medium mb-10 opacity-80 group-hover:opacity-100 transition-opacity flex-1">
                  {service.desc}
                </p>

                {/* Action Footer */}
                <div className="inline-flex items-center justify-between w-full mt-auto pt-5 border-t border-slate-100 group-hover:border-blue-100 transition-colors">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-blue-600 transition-colors duration-300" />
                    <span className="text-[12px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-blue-600 transition-colors duration-300">
                      Explore Service
                    </span>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-600 text-slate-400 group-hover:text-white transition-all duration-500 shadow-inner group-hover:shadow-[0_8px_20px_-6px_rgba(37,99,235,0.5)]">
                    <i className="fas fa-arrow-right -rotate-45 group-hover:rotate-0 transition-transform duration-500 ease-out" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}