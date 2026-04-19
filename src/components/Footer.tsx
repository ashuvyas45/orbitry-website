"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] pt-32 pb-12 w-full border-t border-white/5">
      <div className="mx-auto max-w-5xl px-6 flex flex-col items-center">
        
        {/* Logo */}
        <Link href="/" className="mb-6 flex items-center justify-center">
           <svg className="h-8 w-auto text-white" viewBox="0 0 100 40" fill="currentColor">
              <path d="M0 0h12v40H0V0zm24 0h12v15l15-15h16L48 18l22 22H54L36 22v18H24V0z"/>
           </svg>
        </Link>
        
        {/* Slogan */}
        <p className="mb-10 text-center text-[15px] text-gray-400">
           The smartest upsell ecosystem for ambitious Shopify brands.
        </p>
        
        {/* Minimal Navigation */}
        <nav className="mb-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          <a 
            href="/" 
            className="text-[15px] font-semibold text-gray-300 hover:text-white transition-colors"
          >
            Home
          </a>
          <a 
            href="/#apps" 
            onClick={(e) => {
              if (window.location.pathname === '/') {
                e.preventDefault();
                document.getElementById('apps')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="text-[15px] font-semibold text-gray-300 hover:text-white transition-colors cursor-pointer"
          >
            App
          </a>
          <a 
            href="/#testimonials" 
            onClick={(e) => {
              if (window.location.pathname === '/') {
                e.preventDefault();
                document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="text-[15px] font-semibold text-gray-300 hover:text-white transition-colors cursor-pointer"
          >
            Testimonials
          </a>
          <Link 
            href="/blogs" 
            className="text-[15px] font-semibold text-gray-300 hover:text-white transition-colors cursor-pointer"
          >
            Blogs
          </Link>
          <a 
            href="/#about" 
            onClick={(e) => {
              if (window.location.pathname === '/') {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="text-[15px] font-semibold text-gray-300 hover:text-white transition-colors cursor-pointer"
          >
            About Us
          </a>
          <Link href="/privacy" className="text-[15px] font-semibold text-gray-300 hover:text-white transition-colors">
            Privacy
          </Link>
        </nav>
        
        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-8" />
        
        {/* Copyright & Socials */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-500">
            © {currentYear} Orbitry. All rights reserved.
          </div>
          
          <div className="flex items-center gap-4">
            <Link 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
              aria-label="YouTube"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.498 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.498-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </Link>
          </div>
        </div>
        
      </div>
    </footer>
  );
}