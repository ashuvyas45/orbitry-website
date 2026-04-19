"use client";

import Link from "next/link";

export default function Cta() {
  return (
    <section className="relative px-6 pt-32">
      {/* Dual Background to create overlap bridging effect */}
      <div className="absolute inset-x-0 inset-y-0 z-0">
        <div className="h-1/2 w-full bg-[#fafafa]" />
        <div className="h-1/2 w-full bg-[#050505]" />
      </div>

      <div className="mx-auto max-w-5xl relative z-10 translate-y-12">
        <div className="relative overflow-hidden rounded-[3rem] border border-white/20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 px-6 py-20 text-center shadow-2xl shadow-indigo-900/50 md:px-16 md:py-24">
          
          {/* Intense gradient back drop inside the card */}
          <div className="absolute inset-0 z-0 opacity-40">
            <div className="absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 via-white/5 to-transparent blur-[80px]" />
          </div>
          
          <div className="relative z-10 mx-auto max-w-3xl">
            <h2 className="mb-6 font-serif text-[2.5rem] font-bold leading-tight tracking-tight text-white md:text-[4rem]">
              Ready to break your <br/>
               revenue ceiling?
            </h2>
            <p className="mb-10 text-xl text-blue-100 md:text-2xl font-light">
              Join the top 1% of Shopify merchants who are multiplying their store&apos;s profitability with Orbitry.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="https://apps.shopify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex h-16 w-full items-center justify-center overflow-hidden rounded-xl bg-white px-10 font-bold text-gray-900 transition-transform hover:scale-[1.02] active:scale-[0.98] sm:w-auto shadow-xl shadow-black/10"
              >
                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-150%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(150%)]">
                  <div className="relative h-full w-8 bg-black/10" />
                </div>
                <span className="text-lg">Start 14-Day Free Trial</span>
              </Link>
              <Link
                href="#apps"
                className="inline-flex h-16 w-full items-center justify-center rounded-xl border border-white/20 bg-white/10 px-10 text-lg font-bold text-white transition-all hover:bg-white/20 backdrop-blur-md sm:w-auto"
              >
                Explore Apps
              </Link>
            </div>
            <div className="mt-8 text-sm font-medium text-blue-200">
               No credit card required · Install in 2 minutes
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}