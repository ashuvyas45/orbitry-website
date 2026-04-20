import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us | Orbitry Upsell Apps",
  description: "We build the tools we wished we had, so you can build the store you always wanted.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-hidden text-gray-900">
      <Header />
      
      <main className="flex-1 w-full relative pt-20">
        
        {/* SECTION 1: THE EMPATHY HERO */}
        <section className="relative px-6 pt-24 pb-32 sm:pt-40 sm:pb-48 text-center max-w-6xl mx-auto flex flex-col items-center">
          <div className="absolute top-0 inset-x-0 h-[600px] w-full mx-auto max-w-[1400px] bg-gradient-to-b from-blue-50/50 via-white to-transparent -z-10 rounded-full blur-[100px] opacity-70 pointer-events-none"></div>
          
          <span className="text-xs font-bold text-blue-600 tracking-widest uppercase mb-6 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100 shadow-sm">Our Story</span>
          
          <h1 className="font-serif text-5xl sm:text-6xl md:text-8xl font-medium tracking-tighter text-gray-900 leading-[1.05] mb-8 max-w-5xl">
            We build the tools we <span className="italic text-gray-400">wished</span> we had.
          </h1>
          
          <p className="text-xl sm:text-3xl font-light text-gray-500 max-w-3xl leading-relaxed">
            So you can build the eCommerce business you always wanted. Beautiful, seamless, and endlessly profitable.
          </p>
        </section>


        {/* SECTION 2: OUR PROMISE / CORE PRINCIPLES */}
        <section className="w-full bg-[#f5f6f8] rounded-tl-[3rem] sm:rounded-tl-[5rem] rounded-tr-[3rem] sm:rounded-tr-[5rem] px-6 py-32 sm:py-48 border-t border-black/5 shadow-[inset_0_2px_20px_rgba(0,0,0,0.02)]">
          <div className="max-w-6xl mx-auto">
            
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <h2 className="font-serif text-4xl sm:text-5xl font-medium text-gray-900 mb-6 tracking-tight">Built to elevate your brand.</h2>
              <p className="text-lg text-gray-500">We exist entirely to help you maximize your store's potential, ensuring every shopper enjoys a premium experience while your margins grow.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Pillar 1 */}
              <div className="bg-white rounded-[2rem] p-10 shadow-sm border border-black/5 flex flex-col hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Seamless Experience</h3>
                <p className="text-gray-500 leading-relaxed">
                  We believe upsells should never feel annoying or out of place. Our tools are designed to look naturally integrated, delighting your customers with the exact products they need.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="bg-[#1f2431] rounded-[2rem] p-10 shadow-xl border border-white/10 flex flex-col transform md:-translate-y-4 hover:-translate-y-6 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-400/30 transition-all duration-500"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 bg-white/10 text-blue-300 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm border border-white/5">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Genuine Partnership</h3>
                  <p className="text-gray-400 leading-relaxed flex-1">
                    Your success is our only metric. We don't just provide tools; we act as a direct extension of your team, continually offering strategy and dedicated support.
                  </p>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="bg-white rounded-[2rem] p-10 shadow-sm border border-black/5 flex flex-col hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-8">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Obsessive Growth</h3>
                <p className="text-gray-500 leading-relaxed">
                  Every feature we build is meticulously crafted to increase your conversions, raise your Average Order Value, and safely compound your revenue over time.
                </p>
              </div>
            </div>

          </div>
        </section>


        {/* SECTION 3: THE MISSION LAYER (Overlap Concept) */}
        <section className="max-w-5xl mx-auto px-6 -mt-24 sm:-mt-32 relative z-10 mb-32">
          <div className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-[2rem] sm:rounded-[4rem] p-10 sm:p-24 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)] text-center relative overflow-hidden ring-1 ring-white/10">
             
             {/* Decorative Grid SVG Graphic */}
             <div className="absolute inset-0 opacity-[0.03]">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="2" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#gridPattern)" />
                </svg>
             </div>

             <div className="relative z-10">
               <h3 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-medium mb-10 leading-[1.1] tracking-tight">
                 "Our mission is simple: <br className="hidden sm:block" /> Retrieve the margins you thought were lost."
               </h3>
               <p className="text-xl sm:text-2xl text-blue-100/90 max-w-3xl mx-auto font-light leading-relaxed">
                 Customer acquisition costs are never going down. Survival in modern eCommerce relies entirely on maximizing the value of every single cart. We exist to build the automated intelligence that makes 20% bumps in AOV effortless.
               </p>
             </div>
          </div>
        </section>


        {/* SECTION 4: THE PARTNERSHIP GUARANTEE */}
        <section className="px-6 py-24 sm:py-32 mb-16 relative overflow-hidden bg-white">
          <div className="max-w-4xl mx-auto text-center">
             
             <div className="w-24 h-24 bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-10 shadow-lg">
               <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>
             </div>

             <h2 className="font-serif text-4xl sm:text-6xl font-medium text-gray-900 mb-8 tracking-tight">We are always here.</h2>
             <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed">
               When you join Orbitry, you are partnering with a team that cares about your storefront as much as you do. We are constantly analyzing the market to bring you new conversion strategies that actually move the needle. Your growth is our priority.
             </p>

             <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
               <a href="/#apps" className="h-16 px-10 bg-[#050505] text-white rounded-2xl font-bold text-lg inline-flex items-center justify-center shadow-xl hover:bg-gray-800 hover:scale-105 transition-all w-full sm:w-auto hover:shadow-2xl hover:shadow-black/20">
                 Explore our Apps
               </a>
               <a href="mailto:support@orbitry.com" className="h-16 px-10 bg-white border-2 border-gray-100 text-gray-800 rounded-2xl font-bold text-lg inline-flex items-center justify-center shadow-sm hover:bg-gray-50 hover:border-gray-200 transition-all w-full sm:w-auto cursor-pointer">
                 Contact Us
               </a>
             </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
