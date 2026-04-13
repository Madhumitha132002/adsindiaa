import Image from 'next/image';

export default function BlogPostCard({ post, align = 'left', topPosition }) {
  const isLeft = align === 'left';
  
  return (
    <div 
      className={`absolute w-full md:w-[45%] lg:w-[40%] flex ${isLeft ? 'left-0 justify-end pr-8 md:pr-16' : 'right-0 justify-start pl-8 md:pl-16'}`}
      style={{ top: topPosition }}
    >
      {/* The Horizontal Branch connecting card to the center trunk */}
      <div 
        className={`hidden md:block absolute top-[40px] h-2 bg-[#8B5A2B] z-0`}
        style={{
          width: '50px',
          [isLeft ? 'right' : 'left']: '10px',
          borderTopRightRadius: isLeft ? '0' : '5px',
          borderBottomRightRadius: isLeft ? '0' : '5px',
          borderTopLeftRadius: isLeft ? '5px' : '0',
          borderBottomLeftRadius: isLeft ? '5px' : '0',
          boxShadow: '0 2px 4px rgba(0,0,0,0.2) inset'
        }}
      >
        {/* Tiny branch leaf accent */}
        <div className={`absolute -top-2 w-3 h-3 bg-green-500 rounded-full ${isLeft ? 'left-1' : 'right-1'}`}></div>
      </div>

      {/* The Card Content */}
      <div className="relative z-10 flex flex-col sm:flex-row gap-6 w-full max-w-3xl group">
        
        {/* Left Column: Thumbnail & Comments */}
        <div className="w-full sm:w-[140px] shrink-0 flex flex-col items-center gap-3 relative">
          {/* Thumbnail Image as a "Picture Frame" */}
          <div className="relative w-full aspect-square overflow-hidden border-[6px] md:border-[10px] border-[#d4af37] shadow-[0_5px_15px_rgba(0,0,0,0.4)] rounded-sm group-hover:rotate-2 transition-transform duration-300">
             <div className="absolute inset-0 shadow-[inset_0_0_10px_rgba(0,0,0,0.8)] z-10 pointer-events-none"></div>
             <Image 
                src={post.image || "/images/about_us.webp"} 
                alt={post.title} 
                fill 
                className="object-cover"
             />
          </div>
          
          {/* "Balloon" comment counter approximation */}
          <div className="hidden sm:flex flex-col items-center mt-2">
             <div className="flex gap-2 text-[#FF1493] text-xl transform -translate-y-2">
                <span className="animate-bounce" style={{ animationDelay: '0s' }}>&#127880;</span>
                <span className="animate-bounce" style={{ animationDelay: '0.5s' }}>&#127880;</span>
             </div>
             <div className="bg-white/90 border border-slate-300 rounded-md px-2 py-0.5 text-[10px] uppercase font-bold text-slate-500 shadow-sm">
               {post.date || 'NO COMMENTS'}
             </div>
          </div>
        </div>

        {/* Right Column: Text Content */}
        <div className="flex flex-col justify-start flex-1 pt-2">
          {/* Title */}
          <h3 className="text-xl md:text-2xl font-black text-[#1a202c] mb-2 leading-tight tracking-tight drop-shadow-sm">
            {post.title}
          </h3>
          
          {/* Category/Author Ribbon */}
          <div className="flex items-center gap-1 mb-3">
            <span className="inline-block bg-[#E91E63] text-white text-xs md:text-sm font-bold px-2 py-0.5 shadow-sm">
              {post.category}
            </span>
            {post.author && (
              <span className="text-[#E91E63] text-xs md:text-sm font-bold">
                 by {post.author}
              </span>
            )}
          </div>
          
          {/* Excerpt */}
          <p className="text-sm md:text-base text-[#4a5568] mb-4 leading-relaxed max-w-xl font-medium">
            {post.excerpt}
          </p>
          
          {/* Read More */}
          <a href="#" className="text-[#E91E63] text-sm md:text-base font-bold hover:underline w-fit">
            Read More...
          </a>
        </div>
      </div>
    </div>
  );
}

