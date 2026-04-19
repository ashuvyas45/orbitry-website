import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AppList from "@/components/AppList";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        <Hero />
        <Stats />
        <AppList />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}