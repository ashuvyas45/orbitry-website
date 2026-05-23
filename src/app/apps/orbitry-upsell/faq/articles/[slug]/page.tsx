import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const params = await props.params;
  const article = await getArticle(params.slug);
  
  if (!article) {
    return {
      title: "Article Not Found | Orbitry Upsell",
    };
  }

  return {
    title: `${article.title} | Orbitry Upsell Help`,
    description: article.summary || "Orbitry Upsell Help Article",
  };
}

type HelpArticleDetail = {
  id: string;
  collectionId: string;
  title: string;
  slug: string;
  summary: string | null;
  order: number;
  bodyMarkdown: string;
  createdAt: string;
  updatedAt: string;
  collection: {
    id: string;
    title: string;
    slug: string;
  };
};

async function getArticle(slug: string): Promise<HelpArticleDetail | null> {
  try {
    const res = await fetch(`https://upsell.orbitryhub.com/api/public/help/articles/${slug}`, {
      cache: "no-store",
    });
    
    if (!res.ok) {
      return null;
    }

    const json = await res.json();
    if (json.success && json.data) {
      return json.data;
    }
    
    return null;
  } catch (error) {
    console.error("Failed to fetch article:", error);
    return null;
  }
}

export default async function ArticlePage(
  props: { params: Promise<{ slug: string }> }
) {
  const params = await props.params;
  const article = await getArticle(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f5f6] text-[#0f172a]">
      <Header />

      <main className="flex-1 pt-24 pb-20">
        <article className="max-w-3xl mx-auto px-6 pt-10">
          <nav className="flex mb-8 text-sm font-semibold text-slate-500">
            <Link href="/apps/orbitry-upsell/faq" className="hover:text-orange-500 transition-colors">
              Help Center
            </Link>
            <span className="mx-2">/</span>
            <Link 
              href={`/apps/orbitry-upsell/faq/collections/${article.collection.id}`} 
              className="hover:text-orange-500 transition-colors"
            >
              {article.collection.title}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-800 line-clamp-1">{article.title}</span>
          </nav>

          <header className="mb-10 pb-8 border-b border-gray-200">
            <h1 className="text-4xl sm:text-5xl font-serif font-medium tracking-tight text-gray-900 mb-6">
              {article.title}
            </h1>
            <div className="flex items-center text-sm text-slate-500">
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                Last updated {new Date(article.updatedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
            </div>
          </header>

          <div className="prose prose-slate prose-lg max-w-none prose-headings:font-serif prose-headings:font-medium prose-a:text-pink-600 hover:prose-a:text-orange-500 prose-img:rounded-xl prose-img:shadow-sm">
            <ReactMarkdown>{article.bodyMarkdown}</ReactMarkdown>
          </div>
          
          <div className="mt-16 pt-8 border-t border-gray-200 text-center">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Still need help?</h3>
            <p className="text-slate-600 mb-6">If you couldn't find what you were looking for, our support team is here to help.</p>
            <a 
              href="mailto:support@orbitry.com" 
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 transition-colors"
            >
              Contact Support
            </a>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
