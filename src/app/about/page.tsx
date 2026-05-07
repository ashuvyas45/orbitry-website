import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us | Orbitry Upsell Apps",
  description: "We build conversion systems that help Shopify brands increase AOV without compromising customer experience.",
  alternates: {
    canonical: "/about",
  },
};

const principles = [
  {
    title: "Storefront-Native UX",
    description:
      "Upsells should feel like part of your brand, not a plugin bolted onto checkout. Every interaction is designed to blend naturally with your storefront.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M6 7V5h12v2m-1 0v11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V7" />
      </svg>
    ),
  },
  {
    title: "Conversion Science",
    description:
      "We obsess over measurable outcomes: acceptance rate, conversion to bundle, and added revenue. Features ship only when they move those metrics.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 18h16M7 15l3-3 2 2 5-6" />
      </svg>
    ),
    featured: true,
  },
  {
    title: "Merchant Partnership",
    description:
      "We act like an extension of your team with practical support, fast iteration, and clear strategic guidance for sustainable AOV growth.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11c1.657 0 3-1.567 3-3.5S17.657 4 16 4s-3 1.567-3 3.5 1.343 3.5 3 3.5ZM8 11c1.657 0 3-1.567 3-3.5S9.657 4 8 4 5 5.567 5 7.5 6.343 11 8 11Zm8 2c-2.761 0-5 1.79-5 4v2h10v-2c0-2.21-2.239-4-5-4Zm-8 0c-2.761 0-5 1.79-5 4v2h5" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa] text-gray-900 overflow-hidden">
      <Header />

      <main className="flex-1 pt-20">
        <section className="relative px-6 pb-24 pt-20 sm:pb-32 sm:pt-28">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-[12%] -right-[8%] h-[58vw] w-[58vw] rounded-full bg-gradient-to-b from-orange-100/70 to-pink-200/55 blur-[110px]" />
            <div className="absolute top-[42%] -left-[10%] h-[42vw] w-[42vw] rounded-full bg-gradient-to-tr from-orange-50/80 to-pink-100/55 blur-[100px]" />
          </div>

          <div className="relative mx-auto max-w-6xl text-center">
            <h1 className="font-serif text-4xl font-medium leading-[0.95] tracking-tight text-gray-900 sm:text-[3.7rem] md:text-[4.6rem]">
              We build upsell systems that
              <br />
              <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 bg-clip-text text-transparent">
                compound revenue
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-gray-600 sm:text-xl">
              Orbitry helps Shopify merchants increase average order value through bundle intelligence, conversion-first
              merchandising, and measurable growth frameworks.
            </p>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 text-center max-w-3xl mx-auto">
              <h2 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-gray-900">
                Built to elevate every order
              </h2>
              <p className="mt-5 text-lg text-gray-600">
                Our principles shape every feature, from widget behavior to dashboard analytics and campaign controls.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {principles.map((item) => (
                <article
                  key={item.title}
                  className={`rounded-[2rem] border p-9 transition-all duration-300 ${
                    item.featured
                      ? "bg-[#131722] border-white/10 shadow-xl md:-translate-y-3"
                      : "bg-white border-black/5 shadow-sm hover:shadow-lg"
                  }`}
                >
                  <div
                    className={`mb-7 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${
                      item.featured
                        ? "bg-gradient-to-br from-orange-500 to-pink-600 text-white"
                        : "bg-orange-50 text-orange-600"
                    }`}
                  >
                    {item.icon}
                  </div>

                  <h3 className={`text-2xl font-bold tracking-tight ${item.featured ? "text-white" : "text-gray-900"}`}>
                    {item.title}
                  </h3>
                  <p className={`mt-4 leading-relaxed ${item.featured ? "text-gray-300" : "text-gray-600"}`}>
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-24 pt-8">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-white/20 bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 px-8 py-14 text-center shadow-2xl shadow-pink-900/30 sm:px-16 sm:py-20">
            <h2 className="font-serif text-4xl font-medium leading-tight tracking-tight text-white sm:text-6xl">
              Our mission is simple:
              <br />
              maximize the value of every cart.
            </h2>
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-orange-50 sm:text-xl">
              As acquisition costs keep rising, profitable growth depends on stronger monetization per session. Orbitry
              gives merchants the tooling and intelligence to lift AOV without sacrificing shopper experience.
            </p>
          </div>
        </section>

        <section className="px-6 pb-12 pt-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-serif text-4xl sm:text-5xl font-medium text-gray-900 tracking-tight">We are in your corner.</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
              From onboarding to optimization, we help you launch faster, test smarter, and scale what works.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/#apps"
                className="inline-flex h-14 w-full items-center justify-center rounded-2xl bg-[#050505] px-8 text-base font-bold text-white shadow-lg transition-all hover:bg-gray-800 sm:w-auto"
              >
                Explore our apps
              </Link>
              <Link
                href={"mailto:support@orbitry.com"}
                className="inline-flex h-14 w-full items-center justify-center rounded-2xl border border-black/10 bg-white px-8 text-base font-bold text-gray-800 shadow-sm transition-all hover:bg-gray-50 sm:w-auto"
              >
                Contact support
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
