import Link from 'next/link';

export default function Integrations() {
  const tools = [
    { name: 'WhatsApp', icon: 'fab fa-whatsapp', color: 'text-emerald-600 bg-emerald-50' },
    { name: 'Zoho CRM', isZoho: true, color: 'text-red-500 bg-red-50' }, 
    { name: 'Shopify', icon: 'fab fa-shopify', color: 'text-[#95BF47] bg-green-50' },
    { name: 'Google Ads', icon: 'fab fa-google', color: 'text-blue-500 bg-blue-50' },
    { name: 'Meta Ads', isMeta: true, color: 'text-[#0668E1] bg-blue-50' },
    { name: 'Zapier', isZapier: true, color: 'text-[#FF4A00] bg-orange-50' },
  ];

  return (
    <section className="w-full py-16 lg:py-24 px-4 relative z-10 overflow-hidden bg-white">
      {/* Subtle blobs */}
      <div className="absolute top-[5%] left-[5%] w-[35%] h-[50%] bg-blue-100/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[5%] right-[5%] w-[35%] h-[50%] bg-violet-100/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="relative bg-[#F8FAFF] rounded-[3rem] p-8 md:p-16 lg:p-20 shadow-xl shadow-blue-100/30 border border-blue-100/50 flex flex-col lg:flex-row items-center gap-16 overflow-hidden">
          
          {/* Decorative glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200/15 blur-[100px] rounded-full pointer-events-none" />

          {/* Left Content Area */}
          <div className="flex-1 space-y-8 relative z-10 text-center lg:text-left">
            <div className="space-y-4">
              <span className="inline-block text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full">
                Integrations
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.15]">
                Connect{' '}
                <span className="bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent">Ads India</span>{' '}
                <br />with your business tools
              </h2>
              <p className="text-slate-500 text-lg md:text-xl font-medium max-w-xl mx-auto lg:mx-0">
                Seamlessly sync your favorite CRMs and e-commerce platforms with our messaging gateway to automate your customer journey.
              </p>
            </div>

            <div className="pt-4">
              <Link href="/contact-us" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-500 to-violet-600 text-white font-bold rounded-2xl hover:shadow-xl hover:shadow-blue-500/25 transition-all hover:scale-105 shadow-lg">
                Explore API Docs
                <i className="fas fa-arrow-right text-sm"></i>
              </Link>
            </div>
          </div>

          {/* Right Visual Area: Tool Grid */}
          <div className="flex-1 w-full lg:max-w-[500px] relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="group bg-white border border-slate-100 flex flex-col items-center justify-center p-5 md:p-8 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 hover:-translate-y-2 hover:border-blue-200"
                >
                  <div className={`w-14 h-14 md:w-16 md:h-16 flex items-center justify-center ${tool.color} border border-current/10 rounded-2xl mb-4 group-hover:scale-110 transition-transform`}>
                    {tool.isZoho ? (
                      <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10">
                        <g transform="scale(0.8) translate(3,3)">
                          <rect x="0" y="0" width="8" height="8" fill="#F44336" rx="1" />
                          <rect x="10" y="0" width="8" height="8" fill="#2196F3" rx="1" />
                          <rect x="0" y="10" width="8" height="8" fill="#4CAF50" rx="1" />
                          <rect x="10" y="10" width="8" height="8" fill="#FFC107" rx="1" />
                        </g>
                      </svg>
                    ) : tool.isMeta ? (
                      <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10 fill-current">
                        <path d="M17.437 6.438c-1.312 0-2.438.438-3.438 1.438-.5.5-1.125 1.562-1.625 2.188l-.375.438c-.5-.625-1.125-1.688-1.625-2.188-.937-.937-2.062-1.438-3.375-1.438-2.625 0-4.75 2.125-4.75 4.75s2.125 4.75 4.75 4.75c1.312 0 2.438-.438 3.438-1.438.5-.5 1.125-1.562 1.625-2.188l.375-.438c.5.625 1.125 1.688 1.625 2.188 1 .937 2.125 1.438 3.375 1.438 2.625 0 4.75-2.125 4.75-4.75s-2.125-4.75-4.75-4.75zm0 8.062c-.812 0-1.5-.25-2.062-.812-.375-.375-.937-1.313-1.438-1.938l-.312-.438.312-.438c.5-.625 1.063-1.625 1.438-2 .563-.563 1.25-.812 2.063-.812 1.812 0 3.25 1.438 3.25 3.25s-1.438 3.25-3.25 3.25zm-10.875 0c-1.812 0-3.25-1.438-3.25-3.25s1.438-3.25 3.25-3.25c.813 0 1.5.25 2.063.813.375.375.937 1.312 1.437 1.937l.313.438-.313.438c-.5.688-1.063 1.625-1.437 2-.563.562-1.25.812-2.063.812z" />
                      </svg>
                    ) : tool.isZapier ? (
                      <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10 fill-current">
                        <path d="M12.784 5.968l1.458-1.127a.5.5 0 01.309-.104.5.5 0 01.405.204.5.5 0 01.077.443L14.3 8.356c-.05.187.054.385.241.434s.384-.055.432-.242l.732-2.972a.5.5 0 01.954-.052l1.242 2.152a.5.5 0 01.033.45.5.5 0 01-.355.3l-2.43.43c-.191.034-.32.217-.285.408s.217.32.408.286l2.972-.525a.5.5 0 01.433.076.5.5 0 01.205.406.5.5 0 01-.104.309l-1.821 1.405a.5.5 0 01-.443.077.5.5 0 01-.302-.354l-.429-2.431c-.034-.191-.217-.32-.408-.286s-.32.217-.286.408l.525 2.973a.5.5 0 01-.433.58.5.5 0 01-.406-.205l-1.405-1.821a.5.5 0 01-.077-.443.5.5 0 01.354-.303l2.431-.429c.191-.033.32-.217.286-.408s-.217-.32-.408-.286l-2.973.525a.5.5 0 01-.433-.077.5.5 0 01-.205-.406.5.5 0 01.104-.309l1.821-1.405a.5.5 0 01.442-.077.5.5 0 01.303.354l.429 2.43c.034.192.217.32.408.286s.321-.217.287-.408l-.525-2.973zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
                      </svg>
                    ) : (
                      <i className={`${tool.icon} text-3xl md:text-4xl`}></i>
                    )}
                  </div>
                  <span className="text-[12px] md:text-xs font-black text-slate-700 tracking-tight uppercase">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
