import BlogPostCard from './BlogPostCard';
import SidebarWidget from './SidebarWidget';

// Mock data based on the reference image vibe
const BLOG_POSTS = [
  {
    id: 1,
    title: 'New FarvilKids Ride-on Mailout',
    category: 'Email Marketing',
    author: 'Ben Harris',
    excerpt: 'It\'s a beautiful time of the year for a good old, new-fashioned mailout. And, a great mailout we\'ve produced for megaphone thumping companions...',
    image: '/images/about_us.webp', // Placeholder
    date: '10 Comments', // Repurposing as fun detail
    align: 'left',
    topPosition: '10%',
  },
  {
    id: 2,
    title: '\'Moon\' Video Banner Duo For Lift-Off On Play.com',
    category: 'Xmas Video Banners',
    author: 'Owner',
    excerpt: 'Here at The Pixel we\'re entirely chuffed being in the middle of producing our latest banner for Play.com - and this time it\'s for the new Sam Rockwell flick \'Moon\'.',
    image: '/images/slider_img2.webp', // Placeholder
    date: '32 Comments',
    align: 'left',
    topPosition: '45%',
  }
];

export default function BlogTreeLayout() {
  return (
    <section className="relative w-full min-h-[1600px] bg-[#87CEEB] overflow-hidden pb-32">
      
      {/* Decorative clouds across the tree area */}
      <div className="absolute top-[30%] left-0 w-full h-48 bg-white/20 blur-3xl pointer-events-none"></div>
      <div className="absolute top-[60%] left-0 w-full h-64 bg-white/30 blur-3xl pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto relative h-full mt-10">
        
        {/* THE CENTRAL TRUNK */}
        <div className="absolute left-1/2 -mt-20 bottom-0 w-12 md:w-16 bg-gradient-to-r from-[#5C3A21] via-[#8B5A2B] to-[#5C3A21] transform -translate-x-1/2 z-0 shadow-2xl">
           {/* Tree texture / lines */}
           <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDBMOCA4Wk04IDBMMCA4WiIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')] mix-blend-overlay"></div>
        </div>

        {/* --- LEFT SIDE: BLOG POSTS --- */}
        <div className="relative w-full h-full z-10 hidden sm:block pt-10">
           {BLOG_POSTS.map((post) => (
             <BlogPostCard 
                key={post.id} 
                post={post} 
                align={post.align} 
                topPosition={post.topPosition} 
             />
           ))}
        </div>

        {/* --- RIGHT SIDE: WIDGETS --- */}
        <div className="relative w-full h-full z-10 hidden sm:block">
             <SidebarWidget 
                title="Our Services" 
                topPosition="15%" 
                align="right"
                icon="nest" 
                links={[
                  'Website Design', 
                  'Magento Development', 
                  'Video Banners', 
                  'Email Marketing',
                  'Print & E-Catalogues',
                  'Copywriting',
                  'Google AdWords'
                ]} 
             />
             
             <SidebarWidget 
                title="Portfolio" 
                topPosition="60%" 
                align="right"
                icon="balloon"
                links={[
                  'Website Design', 
                  'Video Banners', 
                  'Email Marketing', 
                  'Print Media & Campaigns'
                ]} 
             />
        </div>

        {/* --- MOBILE FALLBACK --- */}
        {/* On small screens, hide the complex tree and just stack everything elegantly */}
        <div className="sm:hidden flex flex-col gap-8 px-4 relative z-10 pt-10">
            {BLOG_POSTS.map((post) => (
               <div key={post.id} className="relative !w-full !left-auto !right-auto !top-auto !flex-row !justify-center">
                  <div className="relative z-10 flex flex-col bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl w-full border border-white/50">
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{post.title}</h3>
                    <div className="inline-block bg-[#FF1493] text-white text-xs font-bold px-3 py-1 mb-3 rounded-sm w-fit uppercase tracking-wider">
                      {post.category}
                    </div>
                    <p className="text-sm text-slate-600 mb-4">{post.excerpt}</p>
                    <a href="#" className="text-[#FF1493] text-sm font-bold hover:underline">Read More &rarr;</a>
                  </div>
               </div>
            ))}
        </div>

      </div>
    </section>
  );
}

