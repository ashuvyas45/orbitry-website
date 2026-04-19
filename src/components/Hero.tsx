"use client";



export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] w-full overflow-hidden bg-[#fafaf9]">
      {/* Dynamic Background Gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[10%] h-[70vw] w-[70vw] rounded-full bg-gradient-to-b from-blue-100/60 to-purple-200/60 blur-[120px] transform rotate-12 animate-pulse-glow" style={{ animationDuration: '8s' }} />
        <div className="absolute top-[40%] -left-[10%] h-[50vw] w-[50vw] rounded-full bg-gradient-to-tr from-amber-50/80 to-rose-100/50 blur-[100px]" />
        
        {/* Soft Noise Overlay */}
        <div className="absolute inset-0 opacity-[0.015] mix-blend-multiply" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      </div>
      
      <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-[1400px] flex-col lg:flex-row items-center px-6 lg:px-12 xl:px-20 pt-32 pb-20 lg:pt-0 lg:pb-0">
        
        {/* Left Column: Premium Typography & Copy */}
        <div className="flex w-full flex-col justify-center lg:w-[50%] z-20">
          <div className="max-w-xl">
            {/* Headline */}
            <h1 className="mb-6 font-serif text-[4.5rem] leading-[0.95] tracking-tight text-gray-900 md:text-[5.5rem] lg:text-[6.5rem] animate-fade-in-up" style={{ animationDelay: "150ms" }}>
              Unlock your <br/>
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 pb-2">
                revenue
                {/* Subtle underline SVG */}
                <svg className="absolute w-full h-4 -bottom-1 left-0 text-blue-300/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="animate-pulse" />
                </svg>
              </span><br/>
              potential.
            </h1>
            
            {/* Subheadline */}
            <p className="mb-12 max-w-lg text-xl text-gray-600 leading-relaxed font-light animate-fade-in-up" style={{ animationDelay: "250ms" }}>
              Seamless checkout upsells, dynamic bundle deals, and quantity breaks that instantly increase your average order value.
            </p>
            
            {/* Action */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 animate-fade-in-up" style={{ animationDelay: "350ms" }}>
              <a
                href="#apps"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('apps')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group relative inline-flex h-14 items-center justify-center gap-3 overflow-hidden rounded-full bg-gray-900 px-8 font-semibold text-white shadow-xl shadow-gray-900/20 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-gray-900/30 active:translate-y-0 cursor-pointer"
              >
                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-150%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(150%)]">
                  <div className="relative h-full w-8 bg-white/20" />
                </div>
                <span className="relative z-10 text-base tracking-wide">Explore app</span>
                <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition-transform group-hover:translate-x-1">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </div>
              </a>
              
              <div className="flex items-center gap-4 text-sm font-medium text-gray-500">
                <div className="flex -space-x-2">
                  <div className="h-8 w-8 rounded-full border-2 border-[#fafaf9] bg-gradient-to-tr from-blue-400 to-indigo-400" />
                  <div className="h-8 w-8 rounded-full border-2 border-[#fafaf9] bg-gradient-to-tr from-amber-400 to-orange-400" />
                  <div className="h-8 w-8 rounded-full border-2 border-[#fafaf9] bg-gradient-to-tr from-emerald-400 to-teal-400" />
                </div>
                <span>Trusted by 90k+ brands</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Column: Creative Floating UI Composiiton */}
        <div className="w-full lg:w-[50%] relative h-[60vh] lg:h-full flex items-center justify-center lg:justify-end z-10 mt-12 lg:mt-0">
          
          <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
            {/* Center abstract shape acting as a focal point */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-purple-600/10 rounded-full blur-[80px]" />
            
            {/* Primary Glass UI Widget */}
            <div className="glass-card absolute z-30 w-[85%] max-w-[380px] rounded-3xl border border-white/60 bg-white/70 p-6 shadow-2xl backdrop-blur-xl animate-float">
              {/* Header */}
              <div className="mb-5 flex items-center justify-between border-b border-gray-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 shadow-inner flex items-center justify-center">
                    <span className="text-xl">🎒</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">Wait, add this to order!</div>
                    <div className="text-xs text-gray-500">Special one-time offer</div>
                  </div>
                </div>
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-gray-400 cursor-pointer hover:bg-gray-200">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
                </div>
              </div>
              
              {/* Product */}
              <div className="mb-5 flex gap-4">
                <div className="h-20 w-20 rounded-xl bg-gray-100 shadow-sm flex items-center justify-center overflow-hidden">
                   <div className="w-12 h-12 rounded bg-indigo-200/50" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-bold text-gray-900">Premium Leather Strap</div>
                  <div className="text-xs text-gray-500 mb-2">Style: Midnight Black</div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-green-600">$19.99</span>
                    <span className="text-sm font-medium text-gray-400 line-through">$39.99</span>
                  </div>
                </div>
              </div>
              
              {/* Button */}
              <button className="w-full rounded-xl bg-indigo-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-600/30 transition-transform active:scale-95 hover:bg-indigo-700">
                Add to my order now
              </button>
            </div>
            
            {/* Secondary Floating Widget: Stats */}
            <div className="glass-card absolute -left-10 bottom-10 z-40 w-48 rounded-2xl border border-white/60 bg-white/80 p-4 shadow-xl backdrop-blur-md animate-float-delayed">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-500">Revenue</div>
                  <div className="text-lg font-bold tracking-tight text-gray-900">+42.8%</div>
                </div>
              </div>
            </div>

            {/* Tertiary Floating Widget: Notification */}
            <div className="glass-card absolute -right-6 top-16 z-20 w-56 rounded-2xl border border-white/60 bg-white/60 p-3 shadow-lg backdrop-blur-sm animate-float-reverse">
              <div className="flex items-center gap-3">
                <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-red-500 text-[8px] text-white font-bold">1</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>
                </div>
                <div className="text-xs font-semibold text-gray-800">
                  Someone just bought<br/>a bundle deal.
                </div>
              </div>
            </div>
            
          </div>
          
        </div>
        
      </div>
    </section>
  );
}