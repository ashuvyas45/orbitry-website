import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogsCatalog from "@/components/BlogsCatalog";

export default function BlogsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa]">
      <Header />
      <main className="flex-1 pt-24 custom-blogs-layout">
        <BlogsCatalog />
      </main>
      <Footer />
    </div>
  );
}
