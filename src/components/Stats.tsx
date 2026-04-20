"use client";

import React from "react";

// Custom SVG Icons matching the requested premium layout
const BrandLogo = ({ icon, name, colorClass }: { icon: React.ReactNode, name: string, colorClass: string }) => (
  <div className="flex items-center gap-2 px-6">
    <div className={`flex h-8 w-8 items-center justify-center ${colorClass}`}>
      {icon}
    </div>
    <span className="font-sans text-xl font-extrabold tracking-tight text-gray-900">
      {name}
    </span>
  </div>
);

const brands = [
  {
    name: "Nietzsche",
    colorClass: "text-indigo-600",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
      </svg>
    ),
  },
  {
    name: "FocalPoint",
    colorClass: "text-orange-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <circle cx="12" cy="12" r="4" fill="currentColor" />
        <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41" />
      </svg>
    ),
  },
  {
    name: "Alt+Shift",
    colorClass: "text-gray-800",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M2 12c3-4 6-4 10 0 4 4 7 4 10 0" />
        <path d="M2 7c3-4 6-4 10 0 4 4 7 4 10 0" />
        <path d="M2 17c3-4 6-4 10 0 4 4 7 4 10 0" />
      </svg>
    ),
  },
  {
    name: "Command+R",
    colorClass: "text-blue-600",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M4 4h4v16H4V4zm6 0h8c3.31 0 6 2.69 6 6s-2.69 6-6 6h-2.58l-2.01 4H10V4zm0 8h8c1.1 0 2-.9 2-2s-.9-2-2-2h-8v4z"/>
      </svg>
    ),
  },
  {
    name: "GlobalBank",
    colorClass: "text-emerald-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
         <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
         <circle cx="12" cy="12" r="3" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "sparkle",
    colorClass: "text-gray-900",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12 2l2.4 7.6H22l-6.2 4.5 2.4 7.6-6.2-4.5-6.2 4.5 2.4-7.6-6.2-4.5h7.6z" />
      </svg>
    ),
  },
  {
    name: "Comma",
    colorClass: "text-purple-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M8 5v14l11-7z" />
      </svg>
    ),
  }
];

export default function Stats() {
  // Multiply array to ensure seamless infinite scroll
  const duplicatedBrands = [...brands, ...brands, ...brands, ...brands];

  return (
    <section className="relative overflow-hidden border-b border-black/5 bg-[#ffffff] pt-12 pb-24">
      {/* Background ambience removed so the rail is super clean and white matching the image */}
      
      <div className="relative z-10 mb-20 w-full bg-white">
        <h3 className="mb-5 text-center text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">
          Trusted by the world&apos;s best eCommerce brands
        </h3>
        
        {/* Bottom subtle border defining the rail */}
        <div className="border-b border-gray-100 py-5 w-full">
          <div className="relative flex overflow-hidden w-full">
            {/* Fade masks for smooth entry/exit */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-32 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-32 bg-gradient-to-l from-white to-transparent" />
            
            <div className="animate-marquee-left flex items-center pr-8 w-max">
              {duplicatedBrands.map((brand, i) => (
                <div key={i} className="flex-shrink-0 transition-opacity opacity-90 hover:opacity-100 px-6">
                  <BrandLogo icon={brand.icon} name={brand.name} colorClass={brand.colorClass} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
          <div className="absolute top-0 right-1/4 h-72 w-72 rounded-full bg-blue-400/10 blur-[80px]" />
          <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-indigo-400/10 blur-[80px]" />
        </div>

        {/* Stats Numbers */}
        <div className="grid gap-8 sm:gap-10 text-center md:grid-cols-3 lg:gap-16 pt-8">
          {[
            { value: "40,000+", label: "Merchants Using Our Apps", accent: "from-blue-600 to-indigo-600" },
            { value: "$600M+", label: "Additional Revenue Generated", accent: "from-emerald-600 to-teal-600" },
            { value: "1,400+", label: "5-Star Reviews", accent: "from-amber-500 to-orange-500" },
          ].map((stat, i) => (
            <div key={i} className="group relative flex flex-col items-center p-6 z-10">
              <div className="absolute inset-0 rounded-[2rem] bg-black/[0.02] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className={`mb-3 bg-gradient-to-r ${stat.accent} bg-clip-text text-4xl sm:text-5xl font-bold tracking-tight text-transparent drop-shadow-sm md:text-6xl lg:text-[4.5rem]`}>
                {stat.value}
              </div>
              <div className="text-sm font-semibold uppercase tracking-widest text-gray-500 lg:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}