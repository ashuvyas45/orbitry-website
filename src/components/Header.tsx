"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 z-50 w-full pt-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 xl:px-12">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-2 group">
            <svg className="h-6 w-auto text-black" viewBox="0 0 100 40" fill="currentColor">
              <path d="M0 0h12v40H0V0zm24 0h12v15l15-15h16L48 18l22 22H54L36 22v18H24V0z"/>
            </svg>
            <span className="text-xl font-bold tracking-tight text-gray-900">Orbitry</span>
          </Link>
          
          <nav className="hidden items-center gap-6 md:flex">
            <Link href="#apps" className="text-sm font-medium text-gray-600 transition-colors hover:text-black">
              Apps
            </Link>
            <Link href="#testimonials" className="text-sm font-medium text-gray-600 transition-colors hover:text-black">
              Testimonials
            </Link>
            <Link href="#blog" className="text-sm font-medium text-gray-600 transition-colors hover:text-black">
              Blog
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-3 relative z-10">
          <Link
            href="#apps"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('apps')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hidden sm:inline-flex h-10 items-center justify-center rounded-full bg-white px-6 text-sm font-bold text-gray-900 shadow-sm transition-all hover:bg-gray-50 active:scale-[0.98]"
          >
            Explore app
          </Link>
          
          <button 
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-gray-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>
      
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 mt-2 w-full px-6 md:hidden">
          <div className="flex flex-col gap-2 rounded-2xl border border-black/5 bg-white p-4 shadow-xl text-gray-900">
            {['Apps', 'Testimonials', 'Blog'].map((item) => (
              <Link 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="rounded-xl px-4 py-3 text-base font-medium text-gray-600 hover:bg-black/5 hover:text-gray-900"
              >
                {item}
              </Link>
            ))}
            <Link 
              href="#apps" 
              className="mt-2 flex h-12 items-center justify-center rounded-xl bg-gray-900 text-base font-bold text-white shadow-md"
            >
              Explore app
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}