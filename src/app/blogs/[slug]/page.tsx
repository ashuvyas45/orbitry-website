import { notFound } from "next/navigation";
import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BLOG_POSTS, ContentBlock } from "@/lib/blogData";
import { SITE_NAME, toAbsoluteUrl } from "@/lib/seo";

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const params = await props.params;
  const blog = BLOG_POSTS.find(b => b.slug === params.slug);
  
  if (!blog) {
    return { title: 'Not Found' };
  }

  return {
    title: `${blog.title} | Orbitry Blog`,
    description: blog.desc,
    alternates: {
      canonical: `/blogs/${blog.slug}`,
    },
    openGraph: {
      type: "article",
      title: blog.title,
      description: blog.desc,
      url: `/blogs/${blog.slug}`,
      siteName: SITE_NAME,
      images: [
        {
          url: toAbsoluteUrl("/opengraph-image.png"),
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.desc,
      images: [toAbsoluteUrl("/opengraph-image.png")],
    },
  };
}

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const slug = params.slug;
  const blog = BLOG_POSTS.find(b => b.slug === slug);

  if (!blog) {
    notFound();
  }

  const isCaseStudy = blog.type === 'case-study';

  const renderContentBlock = (block: ContentBlock, index: number) => {
    switch(block.type) {
      case 'paragraph':
        return <p key={index} className="text-gray-600 text-lg sm:text-xl leading-relaxed mb-8">{block.text}</p>;
      case 'h2':
        return <h2 key={index} className="font-serif text-3xl font-bold text-gray-900 mt-16 mb-6">{block.text}</h2>;
      case 'h3':
        return <h3 key={index} className="font-sans text-xl font-bold text-gray-900 mt-12 mb-4">{block.text}</h3>;
      case 'youtube':
        return (
          <div key={index} className="my-12 flex flex-col items-center">
            <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-black/5 bg-gray-900">
              <iframe 
                width="100%" 
                height="100%" 
                src={block.url} 
                title="YouTube Video Embed" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            {block.caption && <span className="text-sm text-gray-400 mt-4 italic">{block.caption}</span>}
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-blue-100">
      <Header />
      
      <main className="flex-1 w-full relative pt-20 sm:pt-24 pb-32">
        {isCaseStudy ? (
          // ================= CASE STUDY LAYOUT =================
          <>
            {/* Gray Header Area */}
            <div className="w-full bg-[#f5f6f8] pt-20 pb-48 rounded-bl-[3rem] sm:rounded-bl-[5rem] rounded-br-[3rem] sm:rounded-br-[5rem] px-6 text-center shadow-[inset_0_-10px_20px_rgba(0,0,0,0.02)]">
              <div className="max-w-4xl mx-auto flex flex-col items-center">
                <span className="text-xs sm:text-sm font-bold text-gray-400 uppercase tracking-widest mb-6 border border-gray-200 bg-white px-4 py-1.5 rounded-full">{blog.category}</span>
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-gray-900 leading-[1.1] mb-8">
                  {blog.title}
                </h1>
                <p className="text-lg md:text-xl text-gray-500 max-w-2xl leading-relaxed mb-12">
                  {blog.desc}
                </p>
                <div className="inline-flex items-center gap-3 bg-white px-5 py-2.5 rounded-full shadow-sm border border-black/5 font-bold text-gray-800 text-sm hover:scale-105 transition-transform cursor-pointer hover:shadow-md">
                  <div className="w-6 h-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded flex items-center justify-center text-white font-serif text-[10px] font-black">O</div>
                  Orbitry Upsell Apps &rarr;
                </div>
              </div>
            </div>

            {/* Overlapping Metrics Card */}
            <div className="max-w-5xl mx-auto px-6 -mt-32 relative z-10 mb-24">
              <div className="bg-[#1f2431] rounded-[2rem] sm:rounded-[3rem] p-10 sm:p-20 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] flex flex-col sm:flex-row items-center justify-between gap-12 sm:gap-6 w-full text-center divide-y sm:divide-y-0 sm:divide-x divide-white/10 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <div className="flex-1 flex flex-col items-center justify-center pt-4 sm:pt-0 relative z-10">
                  <span className="font-serif text-6xl sm:text-7xl md:text-8xl !font-light text-white mb-2 tracking-tighter">{blog.metrics?.value1 || '23%'}</span>
                  <span className="text-xs sm:text-sm font-medium text-gray-400 max-w-[200px] uppercase tracking-widest">{blog.metrics?.label1 || 'Increased AOV'}</span>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center pt-10 sm:pt-0 relative z-10">
                  <span className="font-serif text-6xl sm:text-7xl md:text-8xl !font-light text-white mb-2 tracking-tighter">{blog.metrics?.value2 || '$109k'}</span>
                  <span className="text-xs sm:text-sm font-medium text-gray-400 max-w-[200px] uppercase tracking-widest">{blog.metrics?.label2 || 'Added Revenue'}</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          // ================= INFORMATIVE / TUTORIAL LAYOUT =================
          <>
            <div className="max-w-4xl mx-auto pt-16 px-6 text-center mb-16">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-gray-900 leading-[1.1] mb-8">
                {blog.title}
              </h1>
              <p className="text-lg md:text-2xl text-gray-500 max-w-3xl mx-auto leading-relaxed mb-10 font-light">
                {blog.desc}
              </p>
              
              <div className="flex flex-col items-center gap-5">
                <span className="text-sm font-medium text-gray-400 tracking-wide">Updated on {blog.date}</span>
                <div className="flex gap-2">
                  <span className="text-xs font-bold text-fuchsia-700 bg-fuchsia-50 border border-fuchsia-100 px-4 py-1.5 rounded-full">{blog.category}</span>
                  {blog.type === 'tutorial' && <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full">Tutorial</span>}
                  {blog.type === 'solution' && <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 px-4 py-1.5 rounded-full">Merchant Guide</span>}
                </div>
              </div>
            </div>

            {/* Massive Hero Cover */}
            <div className="max-w-[1400px] mx-auto px-6 mb-24 lg:mb-32">
              <div className={`w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl sm:rounded-[3rem] lg:rounded-[4rem] bg-gradient-to-br ${blog.gradient} flex items-center justify-center p-12 relative overflow-hidden shadow-2xl ring-1 ring-black/5`}>
                <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]"></div>
                <div className="absolute -inset-x-20 top-0 h-40 bg-gradient-to-b from-white/40 to-transparent mix-blend-overlay"></div>
                <h2 className="relative z-10 font-serif text-5xl sm:text-7xl lg:text-9xl text-gray-900/20 mix-blend-overlay text-center font-bold px-4 tracking-tighter opacity-80 select-none">
                  {blog.title.split(' ')[0]} {blog.title.split(' ')[1]}
                </h2>
              </div>
            </div>
          </>
        )}

        {/* ================= SHARED BODY CONTENT ================= */}
        <article className="max-w-3xl mx-auto px-6 relative z-10">
          <div className="bg-white/80 backdrop-blur-xl sm:bg-transparent rounded-3xl p-6 sm:p-0 -mt-16 sm:mt-0">
            {blog.content.map((block, i) => renderContentBlock(block, i))}
          </div>

          <hr className="my-20 border-black/5" />
          
          <div className="bg-gray-50 rounded-3xl p-8 sm:p-12 text-center border border-black/5">
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Ready to multiply your revenue?</h3>
            <p className="text-gray-500 mb-8 max-w-lg mx-auto">Start displaying high-converting bundles and post-purchase offers instantly with Orbitry.</p>
            <a href="/#apps" className="inline-flex h-12 items-center justify-center rounded-xl bg-gray-900 px-8 text-base font-bold text-white shadow-md hover:bg-gray-800 transition-colors">
              Install App Free
            </a>
          </div>
        </article>

      </main>

      <Footer />
    </div>
  );
}
