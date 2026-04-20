"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";

import { BLOG_POSTS } from "../lib/blogData";

export default function BlogsCatalog() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All categories');
  const [currentPage, setCurrentPage] = useState(1);
  const POSTS_PER_PAGE = 3;
  
  // Reset pagination when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [search, category]);
  
  const featuredBlogs = BLOG_POSTS.filter(b => b.featured);
  
  const allCategories = ['All categories', ...Array.from(new Set(BLOG_POSTS.map(b => b.category)))];

  const filteredBlogs = useMemo(() => {
    return BLOG_POSTS.filter(blog => !blog.featured).filter(blog => {
      const matchSearch = blog.title.toLowerCase().includes(search.toLowerCase()) || blog.desc.toLowerCase().includes(search.toLowerCase());
      const matchCat = category === 'All categories' || blog.category === category;
      return matchSearch && matchCat;
    });
  }, [search, category]);

  const totalPages = Math.ceil(filteredBlogs.length / POSTS_PER_PAGE);
  const currentBlogs = filteredBlogs.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

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
                   {blog.type === 'solution' ? (
                     <>
                       {/* Merchant Intent Pills */}
                       <div className="flex flex-col gap-2 w-fit">
                         <span className="bg-red-500/10 text-red-700 backdrop-blur-sm shadow-sm inline-flex px-3 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold tracking-widest border border-red-500/20 leading-none items-center gap-1.5">
                           <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span> {blog.symptom}
                         </span>
                         <span className="bg-emerald-500/10 text-emerald-700 backdrop-blur-sm shadow-sm inline-flex px-3 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold tracking-widest border border-emerald-500/20 leading-none">
                           ✨ {blog.cure}
                         </span>
                       </div>
                       
                       {/* ROI Target Badge */}
                       <div className="absolute bottom-6 right-6">
                          <div className="bg-[#050505] text-white shadow-xl border border-white/20 px-4 py-2.5 rounded-2xl flex flex-col items-center justify-center transform rotate-2 group-hover:rotate-0 group-hover:scale-105 transition-all duration-300">
                            <span className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mb-1">Target expected</span>
                            <span className="text-base font-bold text-emerald-400 tracking-tight">{blog.roi}</span>
                          </div>
                       </div>
                     </>
                   ) : (
                     <>
                       <div className="bg-white/60 backdrop-blur-sm shadow-sm inline-flex px-3 py-1 rounded-full text-xs font-bold text-gray-700 uppercase tracking-widest w-fit">
                         #{blog.category}
                       </div>
                       {/* Author Avatar */}
                       <div className="absolute bottom-6 right-6 flex items-center gap-3">
                          <div className="text-right hidden xl:block">
                            <div className="text-xs font-bold text-gray-800">{blog.author}</div>
                            <div className="text-[10px] text-gray-500">
                              {blog.type === 'case-study' ? 'Brand Story' : blog.type === 'tutorial' ? 'Technical Guide' : 'Expert Insights'}
                            </div>
                          </div>
                          <div className="w-12 h-12 rounded-full overflow-hidden bg-white shadow-md border-2 border-white flex items-center justify-center font-serif text-lg font-bold text-gray-400">
                            {blog.author?.charAt(0) || 'A'}
                          </div>
                       </div>
                     </>
                   )}
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
                  <Link href={`/blogs/${blog.slug}`} className="inline-flex h-10 w-32 items-center justify-center rounded-xl bg-[#050505] px-4 text-sm font-bold text-white transition-transform hover:scale-105 shadow-md">
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
            <div className="flex flex-col gap-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentBlogs.map(blog => (
                <div key={blog.id} className="group flex flex-col overflow-hidden rounded-[2rem] bg-white border border-black/5 shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className={`w-full h-40 bg-gradient-to-br ${blog.gradient} p-6 relative`}>
                     {blog.type === 'solution' ? (
                       <>
                         <div className="flex flex-col gap-2 w-fit">
                           <span className="bg-red-500/10 text-red-700 backdrop-blur-sm shadow-sm inline-flex px-3 py-1.5 rounded-lg text-[10px] font-bold tracking-widest border border-red-500/20 leading-none items-center gap-1.5">
                             <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span> {blog.symptom}
                           </span>
                           <span className="bg-emerald-500/10 text-emerald-700 backdrop-blur-sm shadow-sm inline-flex px-3 py-1.5 rounded-lg text-[10px] font-bold tracking-widest border border-emerald-500/20 leading-none">
                             ✨ {blog.cure}
                           </span>
                         </div>
                         <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md shadow-md border border-black/5 px-3 py-1.5 rounded-xl flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                            <span className="text-xs font-bold text-emerald-600 tracking-wide">{blog.roi}</span>
                          </div>
                       </>
                     ) : (
                       <>
                         <div className="bg-white/60 backdrop-blur-sm shadow-sm inline-flex px-3 py-1 rounded-full text-xs font-bold text-gray-700 uppercase tracking-widest">
                           #{blog.category}
                         </div>
                         <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white shadow-md border border-black/5 flex items-center justify-center font-serif font-bold text-gray-400 group-hover:-translate-y-1 transition-transform">
                            {blog.author?.charAt(0) || 'A'}
                          </div>
                       </>
                     )}
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
                    <Link href={`/blogs/${blog.slug}`} className="text-blue-600 font-bold text-sm tracking-wide inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read more <span>&rarr;</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
              
              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-8">
                  <button 
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="h-10 px-4 flex items-center justify-center rounded-xl bg-white border border-black/5 text-sm font-medium text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm transition-colors"
                  >
                    Previous
                  </button>
                  
                  <div className="flex items-center gap-1 mx-2">
                    {Array.from({ length: totalPages }).map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentPage(idx + 1)}
                        className={`w-10 h-10 flex items-center justify-center rounded-xl text-sm font-bold transition-colors ${
                          currentPage === idx + 1 
                            ? 'bg-blue-600 text-white shadow-md' 
                            : 'bg-white text-gray-600 hover:bg-gray-100 border border-black/5'
                        }`}
                      >
                        {idx + 1}
                      </button>
                    ))}
                  </div>

                  <button 
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="h-10 px-4 flex items-center justify-center rounded-xl bg-white border border-black/5 text-sm font-medium text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm transition-colors"
                  >
                    Next
                  </button>
                </div>
              )}
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
