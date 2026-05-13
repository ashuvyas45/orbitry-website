"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

type HeaderAppBadge = {
  iconSrc: string;
  iconAlt: string;
  label: string;
  href?: string;
};

type HeaderProps = {
  appBadge?: HeaderAppBadge;
};

export default function Header({ appBadge }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 z-50 w-full pt-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 xl:px-12">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center group">
            <Image 
              src="/blacklogo.svg" 
              alt="Orbitry Logo" 
              width={210} 
              height={54} 
              className="object-contain h-11 w-auto mix-blend-multiply" 
              priority
            />
          </Link>

          {appBadge ? (
            <Link
              href={appBadge.href ?? "/apps/orbitry-upsell"}
              className="hidden sm:inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/75 px-3 py-1.5 shadow-sm backdrop-blur-md transition-colors hover:bg-white"
            >
              <Image
                src={appBadge.iconSrc}
                alt={appBadge.iconAlt}
                width={28}
                height={28}
                className="h-7 w-7 rounded-lg object-cover"
              />
              <span className="text-sm font-semibold text-slate-700">{appBadge.label}</span>
            </Link>
          ) : null}
          
          <nav className="hidden items-center gap-6 md:flex">
            <Link
              href="/#apps"
              onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  document.getElementById('apps')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-base font-semibold text-gray-600 transition-colors hover:text-black cursor-pointer"
            >
              Apps
            </Link>
            <Link
              href="/#testimonials"
              onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-base font-semibold text-gray-600 transition-colors hover:text-black cursor-pointer"
            >
              Testimonials
            </Link>
            <Link 
              href="/blogs" 
              className="text-base font-semibold text-gray-600 transition-colors hover:text-black cursor-pointer"
            >
              Blogs
            </Link>
            <Link 
              href="/about" 
              className="text-base font-semibold text-gray-600 transition-colors hover:text-black cursor-pointer"
            >
              About Us
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-3 relative z-10">
          <Link
            href="/#apps"
            onClick={(e) => {
              if (window.location.pathname === '/') {
                e.preventDefault();
                document.getElementById('apps')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="hidden sm:inline-flex h-10 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-pink-600 px-6 text-sm font-bold text-white shadow-sm shadow-pink-600/20 transition-all hover:brightness-105 active:scale-[0.98] cursor-pointer"
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
            {['Apps', 'Testimonials'].map((item) => (
              <Link
                key={item}
                href={`/#${item.toLowerCase()}`}
                onClick={(e) => {
                  if (window.location.pathname === '/') {
                    e.preventDefault();
                    document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                    setMobileMenuOpen(false);
                  }
                }}
                className="rounded-xl px-4 py-3 text-lg font-semibold text-gray-600 hover:bg-black/5 hover:text-gray-900"
              >
                {item}
              </Link>
            ))}
            <Link 
              href="/blogs" 
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-lg font-semibold text-gray-600 hover:bg-black/5 hover:text-gray-900"
            >
              Blogs
            </Link>
            <Link 
              href="/about" 
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-lg font-semibold text-gray-600 hover:bg-black/5 hover:text-gray-900"
            >
              About Us
            </Link>
            <Link
              href="/#apps"
              onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  document.getElementById('apps')?.scrollIntoView({ behavior: 'smooth' });
                  setMobileMenuOpen(false);
                }
              }}
              className="mt-2 flex h-12 items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-pink-600 text-base font-bold text-white shadow-md shadow-pink-600/25 cursor-pointer"
            >
              Explore app
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
