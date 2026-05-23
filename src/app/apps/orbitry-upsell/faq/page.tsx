import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Suspense } from "react";
import SearchInput from "@/components/faq/SearchInput";

export const metadata: Metadata = {
  title: "Help Center & FAQ | Orbitry Upsell",
  description: "Find answers, guides, and tips to configure and scale your bundles with Orbitry Upsell.",
};

type HelpCollectionSummary = {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  order: number;
  articlesCount: number;
};

async function getCollections(): Promise<HelpCollectionSummary[]> {
  try {
    const res = await fetch("https://upsell.orbitryhub.com/api/public/help/collections", {
      cache: "no-store",
    });
    
    if (!res.ok) {
      return [];
    }

    const json = await res.json();
    if (json.success && json.data && Array.isArray(json.data.data)) {
      return json.data.data.sort((a: HelpCollectionSummary, b: HelpCollectionSummary) => a.order - b.order);
    }
    
    return [];
  } catch (error) {
    console.error("Failed to fetch collections:", error);
    return [];
  }
}

export default async function FaqPage() {
  const collections = await getCollections();

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f5f6] text-[#0f172a]">
      <Header />

      <main className="flex-1 pt-24 pb-20">
        {/* Header Section */}
        <section className="bg-gradient-to-br from-[#ff7a00] via-[#ff4f45] to-[#e80081] py-16 sm:py-20 text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-transparent blur-3xl"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-medium tracking-tight mb-6">
              How can we help?
            </h1>
            <p className="text-lg sm:text-xl text-orange-50 mb-10 max-w-2xl mx-auto">
              Search our help center for quick answers, or browse topics below to master your upselling strategy.
            </p>
            <Suspense fallback={<div className="h-14 w-full max-w-2xl mx-auto bg-white/10 animate-pulse rounded-2xl"></div>}>
              <SearchInput />
            </Suspense>
          </div>
        </section>

        {/* Collections Section */}
        <section className="max-w-5xl mx-auto px-6 mt-16">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-serif font-medium text-gray-900">Browse Topics</h2>
          </div>

          {collections.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {collections.map((collection) => (
                <Link
                  key={collection.id}
                  href={`/apps/orbitry-upsell/faq/collections/${collection.id}`}
                  className="group relative bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-pink-200 transition-all duration-300 flex flex-col"
                >
                  <div className="h-12 w-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-pink-50 group-hover:text-pink-600 transition-all duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                    {collection.title}
                  </h3>
                  <p className="text-slate-600 mb-6 flex-1 line-clamp-3">
                    {collection.description || "Articles and resources for " + collection.title}
                  </p>
                  <div className="flex items-center text-sm font-semibold text-orange-500 group-hover:text-pink-600 transition-colors mt-auto">
                    <span>{collection.articlesCount} {collection.articlesCount === 1 ? 'article' : 'articles'}</span>
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl border border-gray-200">
              <p className="text-slate-500 text-lg">No collections found at the moment.</p>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
