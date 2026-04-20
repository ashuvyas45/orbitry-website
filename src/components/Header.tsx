"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 z-50 w-full pt-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 xl:px-12">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center group">
            <Image 
              src="/blacklogo.svg" 
              alt="Orbitry Logo" 
              width={140} 
              height={32} 
              className="object-contain h-8 w-auto mix-blend-multiply" 
              priority
            />
          </Link>
          
          <nav className="hidden items-center gap-6 md:flex">
            <a 
              href="/#apps" 
              onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  document.getElementById('apps')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-black cursor-pointer"
            >
              Apps
            </a>
            <a 
              href="/#testimonials" 
              onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-black cursor-pointer"
            >
              Testimonials
            </a>
            <Link 
              href="/blogs" 
              className="text-sm font-medium text-gray-600 transition-colors hover:text-black cursor-pointer"
            >
              Blogs
            </Link>
            <Link 
              href="/about" 
              className="text-sm font-medium text-gray-600 transition-colors hover:text-black cursor-pointer"
            >
              About Us
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-3 relative z-10">
          <a
            href="/#apps"
            onClick={(e) => {
              if (window.location.pathname === '/') {
                e.preventDefault();
                document.getElementById('apps')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="hidden sm:inline-flex h-10 items-center justify-center rounded-full bg-white px-6 text-sm font-bold text-gray-900 shadow-sm transition-all hover:bg-gray-50 active:scale-[0.98] cursor-pointer"
          >
            Explore app
          </a>
          
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
            {['Apps', 'Testimonials'].map((item) => (
              <a 
                key={item}
                href={`/#${item.toLowerCase()}`} 
                onClick={(e) => {
                  if (window.location.pathname === '/') {
                    e.preventDefault();
                    document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                    setMobileMenuOpen(false);
                  }
                }}
                className="rounded-xl px-4 py-3 text-base font-medium text-gray-600 hover:bg-black/5 hover:text-gray-900"
              >
                {item}
              </a>
            ))}
            <Link 
              href="/blogs" 
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-medium text-gray-600 hover:bg-black/5 hover:text-gray-900"
            >
              Blogs
            </Link>
            <Link 
              href="/about" 
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-medium text-gray-600 hover:bg-black/5 hover:text-gray-900"
            >
              About Us
            </Link>
            <a 
              href="/#apps" 
              onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  document.getElementById('apps')?.scrollIntoView({ behavior: 'smooth' });
                  setMobileMenuOpen(false);
                }
              }}
              className="mt-2 flex h-12 items-center justify-center rounded-xl bg-gray-900 text-base font-bold text-white shadow-md cursor-pointer"
            >
              Explore app
            </a>
          </div>
        </div>
      )}
    </header>
  );
}