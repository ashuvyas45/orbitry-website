import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Help Articles | Orbitry Upsell",
  description: "Browse articles and guides for Orbitry Upsell.",
};

type HelpArticleSummary = {
  id: string;
  collectionId: string;
  title: string;
  slug: string;
  summary: string | null;
  order: number;
};

type CollectionDetails = {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  order: number;
  articlesCount: number;
};

async function getArticles(id: string, query?: string): Promise<{ collection: CollectionDetails | null, articles: HelpArticleSummary[] }> {
  try {
    const url = new URL(`https://upsell.orbitryhub.com/api/public/help/collections/${id}/articles`);
    if (query) {
      url.searchParams.set("query", query);
    }

    const res = await fetch(url.toString(), {
      cache: "no-store",
    });
    
    if (!res.ok) {
      return { collection: null, articles: [] };
    }

    const json = await res.json();
    if (json.success && json.data) {
      return {
        collection: json.data.collection || null,
        articles: json.data.data || [],
      };
    }
    
    return { collection: null, articles: [] };
  } catch (error) {
    console.error("Failed to fetch articles:", error);
    return { collection: null, articles: [] };
  }
}

export default async function CollectionPage(
  props: { params: Promise<{ id: string }>, searchParams: Promise<{ query?: string }> }
) {
  const params = await props.params;
  const searchParams = await props.searchParams;
  
  const id = params.id;
  const query = searchParams.query || "";
  
  const { collection, articles } = await getArticles(id, query);

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f5f6] text-[#0f172a]">
      <Header />

      <main className="flex-1 pt-24 pb-20">
        <section className="max-w-4xl mx-auto px-6 pt-10">
          <Link href="/apps/orbitry-upsell/faq" className="inline-flex items-center text-sm font-semibold text-slate-500 hover:text-orange-500 transition-colors mb-8">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            Back to Help Center
          </Link>

          <div className="mb-10">
            <h1 className="text-4xl sm:text-5xl font-serif font-medium tracking-tight text-gray-900 mb-4">
              {collection?.title || "Help Articles"}
            </h1>
            {collection?.description && (
              <p className="text-xl text-slate-600">
                {collection.description}
              </p>
            )}
          </div>

          {query && (
            <div className="mb-6 text-slate-600">
              Showing results for <span className="font-semibold text-gray-900">"{query}"</span>
            </div>
          )}

          <div className="space-y-4">
            {articles.length > 0 ? (
              articles.map((article) => (
                <Link
                  key={article.id}
                  href={`/apps/orbitry-upsell/faq/articles/${article.slug}`}
                  className="block bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-orange-200 transition-all duration-300 group"
                >
                  <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {article.title}
                  </h2>
                  {article.summary && (
                    <p className="text-slate-600 line-clamp-2">
                      {article.summary}
                    </p>
                  )}
                </Link>
              ))
            ) : (
              <div className="text-center py-16 bg-white rounded-2xl border border-gray-200 border-dashed">
                <p className="text-slate-500 text-lg">No articles found{query ? " for your search" : ""}.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
