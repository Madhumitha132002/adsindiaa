import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-[#F1F5FF] overflow-hidden pt-24 pb-16 lg:pt-0">

      {/* Subtle decorative blobs */}
      <div className="absolute top-[-120px] right-[-120px] w-[480px] h-[480px] rounded-full bg-gradient-to-br from-blue-400/15 to-violet-400/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-80px] left-[-80px] w-[320px] h-[320px] rounded-full bg-gradient-to-tr from-violet-400/15 to-blue-400/10 blur-2xl pointer-events-none" />

      <div className="max-w-[1380px] mx-auto w-full px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-10 items-center min-h-[calc(100vh-96px)] lg:min-h-0 lg:py-24">

          {/* ── Left Column ── */}
          <div className="space-y-7 text-center lg:text-left">
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-extrabold leading-[1.1] text-slate-900 tracking-tight">
              The Best{' '}
              <span className="bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent">
                Digital Marketing
              </span>{' '}
              Company in India.
            </h1>

            {/* Subheadline */}
            <p className="text-slate-500 text-lg md:text-xl font-medium max-w-xl leading-relaxed mx-auto lg:mx-0">
              Scale your brand, increase organic traffic, and generate high-quality leads with our data-driven bulk SMS, SEO, and marketing strategies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <Link
                href="/contact-us"
                className="px-8 py-4 rounded-2xl font-bold text-[15px] text-white bg-gradient-to-r from-blue-500 to-violet-600 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-[1.03] transition-all text-center"
              >
                Get a Free Proposal
              </Link>
              <Link
                href="/packages"
                className="px-8 py-4 rounded-2xl font-bold text-[15px] text-slate-700 border-2 border-slate-200 bg-white hover:border-blue-400 hover:text-blue-600 transition-all text-center shadow-sm hover:shadow-md"
              >
                View Our Packages
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-3 justify-center lg:justify-start pt-1">
              <div className="flex -space-x-2">
                {[
                  'bg-gradient-to-br from-blue-400 to-blue-600',
                  'bg-gradient-to-br from-violet-400 to-violet-600',
                  'bg-gradient-to-br from-indigo-400 to-indigo-600',
                  'bg-gradient-to-br from-purple-400 to-purple-600',
                ].map((c, i) => (
                  <div
                    key={i}
                    className={`w-9 h-9 rounded-full border-2 border-white ${c} flex items-center justify-center text-white font-bold text-xs`}
                  >
                    {['A', 'R', 'S', 'M'][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  Trusted by <span className="text-slate-800 font-bold">5000+ businesses</span>
                </p>
              </div>
            </div>
          </div>

          {/* ── Right Column ── */}
          <div className="relative h-[520px] lg:h-[600px] hidden lg:flex items-center justify-center">

            {/* Main image */}
            <div className="absolute inset-0 flex items-center justify-end pr-4">
              <div className="relative w-[88%] h-[92%] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-200/30 border border-slate-100">
                <Image
                  src="/images/about_us.webp"
                  alt="Ads India team at work"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 to-transparent" />
              </div>
            </div>

            {/* Floating stat chip — Traffic */}
            <div className="absolute top-12 left-0 z-20 flex items-center gap-3 bg-white rounded-2xl px-4 py-3 shadow-xl border border-slate-100 animate-hero-float">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Organic Traffic</p>
                <p className="text-base font-extrabold text-slate-900">+45% Growth</p>
              </div>
            </div>

            {/* Floating stat chip — Rating */}
            <div className="absolute bottom-16 left-[-16px] z-20 flex items-center gap-3 bg-white rounded-2xl px-4 py-3 shadow-xl border border-slate-100 animate-hero-float-delay">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Client Satisfaction</p>
                <p className="text-base font-extrabold text-slate-900">⭐ 4.9 / 5 Rating</p>
              </div>
            </div>

            {/* Floating stat chip — Projects */}
            <div className="absolute top-[45%] right-[-10px] z-20 flex items-center gap-3 bg-white rounded-2xl px-4 py-3 shadow-xl border border-slate-100 animate-hero-float-slow">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Projects Delivered</p>
                <p className="text-base font-extrabold text-slate-900">5000+ Clients</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
