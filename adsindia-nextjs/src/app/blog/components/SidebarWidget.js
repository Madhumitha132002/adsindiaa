export default function SidebarWidget({ title, links, topPosition, align = 'right', icon }) {
  const isRight = align === 'right';

  return (
    <div 
      className={`absolute w-full md:w-[45%] lg:w-[40%] flex ${isRight ? 'right-0 justify-start pl-8 md:pl-16' : 'left-0 justify-end pr-8 md:pr-16'}`}
      style={{ top: topPosition }}
    >
       {/* Branch connecting Widget to Trunk */}
       <div 
        className={`hidden md:block absolute top-[25px] h-2 bg-[#8B5A2B] z-0`}
        style={{
          width: '60px',
          [isRight ? 'left' : 'right']: '10px',
          borderTopRightRadius: isRight ? '5px' : '0',
          borderBottomRightRadius: isRight ? '5px' : '0',
          borderTopLeftRadius: isRight ? '0' : '5px',
          borderBottomLeftRadius: isRight ? '0' : '5px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.2) inset'
        }}
      >
        {/* Tiny branch leaf accent */}
        <div className={`absolute -top-4 w-4 h-4 bg-lime-500 rounded-bl-full rounded-tr-full rotate-45 ${isRight ? 'right-2' : 'left-2'}`}></div>
      </div>

      {/* Widget Container */}
      <div className="relative z-10 w-full max-w-[250px] group transition-all duration-300 hover:translate-x-2">
         {/* Hanging Rope (Decorative) */}
         <div className="absolute -top-[120px] right-6 w-0.5 h-[120px] bg-[#333] z-0"></div>
         
         {/* Widget Header (Pill Shape) */}
         <div className="relative bg-gradient-to-b from-[#f8f9fa] to-[#e9ecef] px-5 py-2 rounded-full border border-white/60 shadow-[0_4px_6px_rgba(0,0,0,0.1),_inset_0_-2px_4px_rgba(0,0,0,0.05)] flex items-center justify-between mb-4 mt-2">
            {/* Rope Attachment Ring */}
            <div className="absolute -top-3 right-4 w-4 h-4 rounded-full border-4 border-[#333] z-10 bg-transparent"></div>
            
            <h4 className="text-[#E91E63] font-extrabold text-sm md:text-base tracking-wide drop-shadow-sm">{title}</h4>
            {icon === 'nest' && (
              <div className="relative w-8 h-8 flex items-center justify-center bg-[#8B5A2B] rounded-full shadow-inner transform rotate-12">
                 <span className="text-xl leading-none">&#129417;</span>
              </div>
            )}
            {icon === 'balloon' && (
              <div className="relative flex items-center justify-center transform -rotate-12 translate-y-2">
                <span className="text-2xl text-[#E91E63] animate-bounce">&#127880;</span>
              </div>
            )}
         </div>
         
         {/* Widget Links (No Background, directly on sky) */}
         <div className="pl-2">
            <ul className="space-y-3">
              {links.map((link, idx) => (
                <li key={idx} className="border-b border-[#4a5568]/20 pb-2 last:border-0 last:pb-0">
                  <a href="#" className="text-[#2d3748] font-semibold text-sm hover:text-[#E91E63] transition-colors flex items-center gap-2">
                     {link}
                  </a>
                </li>
              ))}
            </ul>
         </div>
         
         {/* Bottom decorative element (like a birdhouse) */}
         {icon === 'nest' && (
           <div className="absolute -bottom-24 right-2 flex flex-col items-center">
             <div className="w-0.5 h-16 bg-[#333]"></div>
             <div className="w-16 h-20 bg-[#8B5A2B] rounded-t-[50%] relative shadow-[0_10px_15px_rgba(0,0,0,0.3)] border-b-8 border-[#5C3A21]">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-black rounded-full"></div>
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-20 h-8 bg-[#5C3A21] rotate-[-20deg] rounded-sm"></div>
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-20 h-8 bg-[#5C3A21] rotate-[20deg] rounded-sm"></div>
             </div>
           </div>
         )}

      </div>
    </div>
  );
}
