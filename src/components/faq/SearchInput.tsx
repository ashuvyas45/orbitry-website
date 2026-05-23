"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, FormEvent } from "react";

export default function SearchInput({ defaultValue = "" }: { defaultValue?: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(defaultValue || searchParams.get("query") || "");

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/apps/orbitry-upsell/faq/collections/help-col-faq?query=${encodeURIComponent(query.trim())}`);
    } else {
      router.push(`/apps/orbitry-upsell/faq/collections/help-col-faq`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
        <input
          type="search"
          className="block w-full p-4 pl-12 text-sm text-gray-900 border border-gray-200 rounded-2xl bg-white focus:ring-orange-500 focus:border-orange-500 shadow-sm transition-all focus:shadow-md outline-none"
          placeholder="Search articles, guides, and help..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          className="text-white absolute right-2 bottom-2 bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-xl text-sm px-5 py-2 transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-md"
        >
          Search
        </button>
      </div>
    </form>
  );
}
