"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

const BLOG_POSTS = [
  { id: 1, title: 'Reducing CAC with Cross-Sells', category: 'Strategy', date: 'Mar 23, 2024', desc: 'Learn how to significantly reduce customer acquisition costs using targeted post-purchase cross-sells.', author: 'Anthony Lin', gradient: 'from-blue-100 to-indigo-100', featured: true },
  { id: 2, title: 'The Future of AI in eCommerce', category: 'Technology', date: 'Mar 20, 2024', desc: 'Explore how machine learning is revolutionizing store optimization by enabling smarter and faster testing.', author: 'Monica Rivers', gradient: 'from-fuchsia-100 to-rose-100', featured: true },
  { id: 3, title: 'Optimizing Your Checkout Flow', category: 'Design', date: 'Mar 18, 2024', desc: 'A guide to uncovering friction points in your checkout and removing them completely.', author: 'John Matthews', gradient: 'from-amber-100 to-orange-100', featured: false },
  { id: 4, title: 'Unconventional Bundle Pricing', category: 'Strategy', date: 'Mar 15, 2024', desc: 'We tested 50 different bundle pricing models. Here is what we found about consumer psychology.', author: 'David Kim', gradient: 'from-emerald-100 to-teal-100', featured: false },
  { id: 5, title: 'Securing Your Store Data', category: 'Security', date: 'Mar 12, 2024', desc: 'Protect your code and maintain compliance with robust security measures in your automations.', author: 'James Rodriguez', gradient: 'from-cyan-100 to-blue-100', featured: false },
  { id: 6, title: 'Continuous CRO', category: 'Marketing', date: 'Mar 10, 2024', desc: 'Stop relying on one-off site redesigns. Learn the framework for continuous high velocity testing.', author: 'Laura Jenkins', gradient: 'from-lime-100 to-green-100', featured: false },
  { id: 7, title: 'Zero Defects!', category: 'Engineering', date: 'Mar 8, 2024', desc: 'How our engineering team prevents visual bugs from making it to your storefront using end-to-end checks.', author: 'Priya Sharma', gradient: 'from-purple-100 to-pink-100', featured: false },
  { id: 8, title: 'Scale Black Friday', category: 'Growth', date: 'Mar 5, 2024', desc: 'Building scalable strategies for the biggest shopping weekend of the year without crashing.', author: 'Mark Thompson', gradient: 'from-slate-100 to-gray-200', featured: false },
];

export default function BlogsCatalog() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All categories');
  
  const featuredBlogs = BLOG_POSTS.filter(b => b.featured);
  
  const allCategories = ['All categories', ...Array.from(new Set(BLOG_POSTS.map(b => b.category)))];

  const filteredBlogs = useMemo(() => {
    return BLOG_POSTS.filter(blog => !blog.featured).filter(blog => {
      const matchSearch = blog.title.toLowerCase().includes(search.toLowerCase()) || blog.desc.toLowerCase().includes(search.toLowerCase());
      const matchCat = category === 'All categories' || blog.category === category;
      return matchSearch && matchCat;
    });
  }, [search, category]);

  return (
    <div className="w-full">
      {/* Top Section - Dark Theme Full Width */}
      <div className="w-full bg-[#050505] pt-16 pb-32 px-6 border-b border-white/5">
        <div className="mx-auto max-w-6xl">
          
          <div className="text-center mb-16 max-w-3xl mx-auto flex flex-col items-center">
            <h3 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-4">
               | Our Blog
            </h3>
            <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white mb-6">
              Grow your eCommerce business with our Blogs
            </h1>
            <p className="text-gray-400 text-lg">
              Insights, strategies, and case studies to help you multiply your store&apos;s profitability and stay ahead of the curve.
            </p>
          </div>

          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-bold text-white tracking-wide">
              Trending<span className="text-blue-500">*</span>
            </h2>
            <div className="flex gap-2">
               <button className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/50 transition-colors">
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
               </button>
               <button className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg hover:bg-blue-500 transition-colors">
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
               </button>
            </div>
          </div>

          {/* Featured Cards - Large */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            {featuredBlogs.map(blog => (
              <div key={blog.id} className="group overflow-hidden rounded-[2rem] bg-white shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col sm:flex-row">
                
                {/* Image Placeholder Area */}
                <div className={`w-full sm:w-2/5 h-48 sm:h-auto bg-gradient-to-br ${blog.gradient} p-8 flex flex-col justify-between relative`}>
                   <div className="bg-white/60 backdrop-blur-sm shadow-sm inline-flex px-3 py-1 rounded-full text-xs font-bold text-gray-700 uppercase tracking-widest w-fit">
                     #{blog.category}
                   </div>
                   {/* Author Avatar abstraction */}
                   <div className="absolute bottom-6 right-6 flex items-center gap-3">
                      <div className="text-right hidden xl:block">
                        <div className="text-xs font-bold text-gray-800">{blog.author}</div>
                        <div className="text-[10px] text-gray-500">Expert Contributor</div>
                      </div>
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-white shadow-md border-2 border-white flex items-center justify-center font-serif text-lg font-bold text-gray-400">
                        {blog.author.charAt(0)}
                      </div>
                   </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 p-8 sm:p-10 flex flex-col justify-between bg-white">
                  <div>
                    <div className="text-xs font-medium text-gray-400 mb-2">{blog.date}</div>
                    <h3 className="text-2xl font-bold text-gray-900 leading-tight mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                      {blog.desc}
                    </p>
                  </div>
                  <Link href={`#read-${blog.id}`} className="inline-flex h-10 w-32 items-center justify-center rounded-xl bg-[#050505] px-4 text-sm font-bold text-white transition-transform hover:scale-105 shadow-md">
                    Read Post
                  </Link>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom Section - Light Theme */}
      <div className="w-full bg-[#fafafa] py-20 px-6">
        <div className="mx-auto max-w-6xl">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6">
            <h2 className="text-2xl font-serif font-bold text-gray-900 tracking-tight">
              All published blogs
            </h2>
            
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row w-full md:w-auto gap-4">
              <div className="relative w-full sm:w-64">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 h-10 bg-white border border-black/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm text-gray-900"
                />
              </div>

              <select 
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="h-10 px-4 bg-white border border-black/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm text-gray-700 cursor-pointer"
              >
                {allCategories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Grid Layout */}
          {filteredBlogs.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map(blog => (
                <div key={blog.id} className="group flex flex-col overflow-hidden rounded-[2rem] bg-white border border-black/5 shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className={`w-full h-40 bg-gradient-to-br ${blog.gradient} p-6 relative`}>
                     <div className="bg-white/60 backdrop-blur-sm shadow-sm inline-flex px-3 py-1 rounded-full text-xs font-bold text-gray-700 uppercase tracking-widest">
                       #{blog.category}
                     </div>
                     <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white shadow-md border border-black/5 flex items-center justify-center font-serif font-bold text-gray-400">
                        {blog.author.charAt(0)}
                      </div>
                  </div>
                  <div className="p-8 flex flex-col flex-1 justify-between">
                    <div>
                      <div className="text-xs font-medium text-gray-400 mb-2">{blog.date}</div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {blog.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 mb-6">
                        {blog.desc}
                      </p>
                    </div>
                    <Link href={`#read-${blog.id}`} className="text-blue-600 font-bold text-sm tracking-wide inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read more <span>&rarr;</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full py-20 flex flex-col items-center justify-center text-center bg-white rounded-[2rem] border border-black/5 border-dashed">
              <svg className="w-12 h-12 text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <h3 className="text-lg font-bold text-gray-900 mb-1">No blogs found</h3>
              <p className="text-sm text-gray-500">We couldn't find any articles matching your search.</p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
