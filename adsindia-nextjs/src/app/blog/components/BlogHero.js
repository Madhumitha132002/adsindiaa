import Image from 'next/image';

export default function BlogHero() {
  return (
    <section className="relative w-full min-h-[40vh] md:min-h-[50vh] overflow-hidden bg-gradient-to-b from-[#87CEEB] to-[#E0F6FF] flex items-center justify-center pt-24 pb-12">
      {/* Decorative Clouds (Absolute Positioning) */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/40 blur-2xl rounded-full mix-blend-overlay"></div>
      <div className="absolute bottom-10 right-20 w-48 h-48 bg-white/50 blur-3xl rounded-full mix-blend-overlay"></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-24 bg-white/30 blur-xl rounded-full mix-blend-overlay"></div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 mt-4 flex justify-end">
        {/* Top Navigation (Homepage, Portfolio, Contact Us) */}
        <div className="flex gap-8 text-white/90 text-xs font-semibold">
           <div className="flex items-center gap-2 cursor-pointer hover:opacity-80">
              <span className="text-xl">&#127960;</span> {/* House emoji */}
              <div>
                <div className="text-[#FF1493] font-bold">Homepage</div>
                <div className="font-normal text-[10px]">Jump aboard, the link is</div>
                <div className="font-normal text-[10px]">homeward bound</div>
              </div>
           </div>
           <div className="flex items-center gap-2 cursor-pointer hover:opacity-80">
              <span className="text-xl">&#129417;</span> {/* Nest emoji */}
              <div>
                <div className="text-[#FF1493] font-bold">Portfolio</div>
                <div className="font-normal text-[10px]">Take a look at what</div>
                <div className="font-normal text-[10px]">we've been up to...</div>
              </div>
           </div>
           <div className="flex items-center gap-2 cursor-pointer hover:opacity-80">
              <span className="text-xl">&#128038;</span> {/* Pigeon emoji */}
              <div>
                <div className="text-[#FF1493] font-bold">Contact Us</div>
                <div className="font-normal text-[10px]">Via email, phone, or if you</div>
                <div className="font-normal text-[10px]">must, pigeon.</div>
              </div>
           </div>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center px-4 mt-8 w-full max-w-[1200px] mx-auto">
        <div className="w-full flex justify-between items-start">
          
          {/* Main Title Area */}
          <div className="ml-10">
            <div className="relative inline-flex items-center">
              {/* BETA Stamp */}
              <div className="absolute -left-12 -top-6 bg-slate-400 text-white text-[10px] font-bold px-2 py-0.5 rounded-sm transform -rotate-12 border border-white/50 shadow-sm uppercase tracking-widest z-20">
                BETA
              </div>
              
              {/* Main Title */}
              <h1 className="text-7xl md:text-9xl font-black text-white drop-shadow-[0_8px_8px_rgba(0,0,0,0.15)] tracking-tighter" style={{ fontFamily: 'Impact, sans-serif' }}>
                BLOG
              </h1>
            </div>
            
            {/* Subtitle */}
            <p className="mt-2 text-white text-lg md:text-xl font-bold tracking-wider drop-shadow-md">
              The creative home for the Pixel
            </p>
          </div>

          {/* Intro Text on the Top Right (From illustration) */}
          <div className="hidden lg:block max-w-[300px] text-[11px] text-[#4a5568] leading-relaxed text-right mt-32 mr-10 font-medium">
             The Pixel provides the most ingenious design and marketing solutions on the web. And with a track record of absolute excellence, you're in good hands.
          </div>
        </div>

        {/* Floating Birds Element (Simulated) */}
        <div className="absolute top-0 right-10 text-slate-800/40 text-sm transform rotate-12 flex gap-4">
           <span>&#x27A4;</span> 
           <span className="mt-4 -ml-2 text-xs">&#x27A4;</span>
        </div>
      </div>
    </section>
  );
}
