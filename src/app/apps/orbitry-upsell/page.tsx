import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Stats from "@/components/Stats";
import Testimonials, { type Review } from "@/components/Testimonials";
import BundleTypeTabs, { type BundleTypeItem } from "@/components/BundleTypeTabs";

export const metadata: Metadata = {
  title: "Orbitry Upsell | Bundle, FBT, and AOV Growth",
  description:
    "Explore Orbitry Upsell capabilities, bundle types, and shopper conversion features built to grow AOV on Shopify.",
  alternates: {
    canonical: "/apps/orbitry-upsell",
  },
};

const APP_STORE_URL = "https://apps.shopify.com";

type IconKey = "setup" | "brand" | "analytics" | "gift";
type ChapterVariant = "text-left" | "text-right";
type ToneKey = "sky" | "indigo" | "emerald" | "amber";

type MockupLayer = {
  src: string;
  alt: string;
  className: string;
};

type ChapterCallout = {
  label: string;
  value: string;
};

type Chapter = {
  id: string;
  icon: IconKey;
  variant: ChapterVariant;
  tone: ToneKey;
  title: string;
  subtitle: string;
  description: string;
  layers: MockupLayer[];
  callouts: ChapterCallout[];
};

type HeroBubble = {
  className: string;
  tone: string;
  motion: string;
  content: string | "gift" | "trend" | "bolt" | "price";
};

const bundleTypes: BundleTypeItem[] = [
  {
    id: "fixed-bundle",
    name: "Fixed Bundle",
    description: "Create high-converting product bundles with predefined items, clear discounts, and one-click add-to-cart for a seamless shopping experience.",
    imageSrc: "/mockups/fixed-bundle-product-widget.png",
    imageAlt: "Fixed bundle product page with bundle and free item widget",
  },
  {
    id: "curated-bundle",
    name: "Curated Bundle",
    description: "Allow shoppers to build their own bundle from a curated product selection while increasing average order value with personalized combinations.",
    imageSrc: "/mockups/curated-bundle-product-widget.png",
    imageAlt: "Curated bundle product page with curated pack widget and bundle total",
  },
  {
    id: "buy-x-get-y",
    name: "Buy X Get Y",
    description: "Boost conversions with flexible Buy X Get Y promotions that create urgency, encourage larger purchases, and reward customers instantly.",
    imageSrc: "/mockups/buyxgety-product-widget.png",
    imageAlt: "Buy X Get Y product page with bundle and save quantity tiers",
  },
  {
    id: "fbt",
    name: "FBT",
    description: "Recommend complementary products based on shopper intent to increase cross-sells and drive higher cart value effortlessly.",
    imageSrc: "/mockups/fbt-product-widget.png",
    imageAlt: "Frequently bought together product page with FBT bundle widget",
  },
  {
    id: "add-ons",
    name: "Add-ons",
    description: "Offer relevant add-ons and accessories directly on the product page to increase impulse purchases with minimal friction.",
    imageSrc: "/mockups/add-ons-product-widget.png",
    imageAlt: "Add-ons product page with bundled offer and free mini item",
  },
  {
    id: "deal-gift",
    name: "Deal Gifts",
    description: "Drive larger orders with automatic free gifts and bundle rewards that make every purchase feel more valuable to customers.",
    imageSrc: "/mockups/deal-gifts-product-widget.png",
    imageAlt: "Deal gifts product page with bundle tiers and free gift row",
  },
  {
    id: "progressive-gift",
    name: "Progressive Gifts",
    description: "Unlock tiered rewards and free gifts as cart value increases, motivating shoppers to spend more to reach the next milestone.",
    imageSrc: "/mockups/progressive-gift-product-widget.png",
    imageAlt: "Progressive gifts product page with bundle tiers and unlocked gift milestones",
  },
];

const heroBubbles: HeroBubble[] = [
  {
    className: "-left-10 top-[18%] h-12 w-12",
    tone: "bg-gradient-to-br from-[#f6ca84] to-[#e9a84f] text-white/90",
    motion: "animate-float",
    content: "$",
  },
  {
    className: "-right-9 top-[26%] h-11 w-11",
    tone: "bg-gradient-to-br from-[#8fb3ff] to-[#5f87e8] text-white/90",
    motion: "animate-float-delayed",
    content: "price",
  },
  {
    className: "-left-12 bottom-[22%] h-14 w-14",
    tone: "bg-gradient-to-br from-[#8ed4ff] to-[#66b5ec] text-white/90",
    motion: "animate-float-reverse",
    content: "bolt",
  },
  {
    className: "-right-10 bottom-[10%] h-16 w-16",
    tone: "bg-gradient-to-br from-[#93e8b7] to-[#66ca98] text-white/90",
    motion: "animate-float-reverse",
    content: "gift",
  },
  {
    className: "left-[34%] -top-6 h-10 w-10",
    tone: "bg-gradient-to-br from-[#d9b1ff] to-[#b78af0] text-white/90",
    motion: "animate-float",
    content: "trend",
  },
  {
    className: "right-[24%] -top-5 h-10 w-10",
    tone: "bg-gradient-to-br from-[#ffe09c] to-[#efbe56] text-white/90",
    motion: "animate-float-delayed",
    content: "trend",
  },
];

const chapters: Chapter[] = [
  {
    id: "setup",
    icon: "setup",
    variant: "text-left",
    tone: "sky",
    title: "Set up your bundles in minutes",
    subtitle: "User-friendly setup, no coding needed.",
    description:
      "Launch campaigns with clear controls for quantity bars, labels, and pricing logic. Preview every configuration before publishing so teams move fast with confidence.",
    layers: [
      {
        src: "/mockups/widget-bundle-save-v2.png",
        alt: "Bundle setup panel with quantity options",
        className: "relative z-20 w-[76%] md:w-[68%] rounded-2xl border border-black/5 bg-white p-2 shadow-2xl",
      },
      {
        src: "/mockups/widget-fbt-progress-v2.png",
        alt: "Bundle preview drawer",
        className:
          "absolute right-[1%] top-[6%] z-30 w-[42%] md:w-[37%] rounded-2xl border border-black/5 bg-white p-2 shadow-2xl",
      },
      {
        src: "/mockups/widget-curated-pack-v2.png",
        alt: "Merchandising config reference",
        className:
          "absolute left-[22%] top-[44%] z-40 w-[62%] md:w-[54%] rounded-2xl border border-black/5 bg-white p-2 opacity-95 shadow-xl",
      },
    ],
    callouts: [],
  },
  {
    id: "brand",
    icon: "brand",
    variant: "text-right",
    tone: "indigo",
    title: "Customize deeply to match your brand",
    subtitle: "Design control without compromising speed.",
    description:
      "From typography and spacing to badges and highlights, every offer can mirror your storefront style. Keep conversion blocks consistent with your visual system.",
    layers: [
      {
        src: "/mockups/widget-brand-product-cards-v2.png",
        alt: "Product cards style customization controls",
        className: "relative z-20 mx-auto w-[62%] md:w-[56%] rounded-2xl border border-black/5 bg-white p-2 shadow-2xl",
      },
      {
        src: "/mockups/widget-brand-quick-style-v2.png",
        alt: "Quick style controls for bundle widgets",
        className:
          "absolute left-[1%] top-[5%] z-40 w-[40%] md:w-[35%] rounded-2xl border border-black/5 bg-white p-2 shadow-xl",
      },
      {
        src: "/mockups/widget-brand-deal-config-v2.png",
        alt: "Deal configuration panel with upsell and gift options",
        className:
          "absolute right-[1%] top-[40%] z-40 w-[40%] md:w-[40%] rounded-2xl border border-black/5 bg-white p-2 shadow-xl",
      },
    ],
    callouts: [],
  },
  {
    id: "analytics",
    icon: "analytics",
    variant: "text-left",
    tone: "emerald",
    title: "Track performance and optimize faster",
    subtitle: "Actionable insights in one dashboard.",
    description:
      "Monitor conversion lift, added revenue, and campaign contribution in real time. Spot what works, iterate quickly, and scale winning bundle strategies.",
    layers: [
      {
        src: "/mockups/analytics-revenue-growth-clean.png",
        alt: "Revenue growth chart comparing last 30 days and previous 30 days",
        className:
          "absolute left-[3%] top-[18%] z-20 w-[63%] md:w-[60%] overflow-hidden rounded-2xl shadow-[0_24px_50px_rgba(15,23,42,0.18)]",
      },
      {
        src: "/mockups/analytics-kpis-clean.png",
        alt: "Analytics KPI cards showing impressions, upsell orders, conversion rate, and added revenue",
        className:
          "absolute left-[3%] top-[3%] z-40 w-[94%] md:w-[92%] overflow-hidden rounded-2xl shadow-[0_24px_50px_rgba(15,23,42,0.14)]",
      },
      {
        src: "/mockups/analytics-top-campaigns-clean.png",
        alt: "Top campaigns list with conversion rate and revenue values",
        className:
          "absolute right-[3%] top-[22%] z-30 w-[33%] md:w-[31%] overflow-hidden rounded-2xl shadow-[0_24px_50px_rgba(15,23,42,0.16)]",
      },
      {
        src: "/mockups/analytics-live-activity-clean.png",
        alt: "Live activity feed of recent upsell purchases",
        className:
          "absolute right-[3%] top-[56%] z-30 w-[33%] md:w-[31%] overflow-hidden rounded-2xl shadow-[0_24px_50px_rgba(15,23,42,0.16)]",
      },
    ],
    callouts: [],
  },
  {
    id: "gifts",
    icon: "gift",
    variant: "text-right",
    tone: "amber",
    title: "Offer free gifts with bundle purchases",
    subtitle: "Increase perceived value at checkout.",
    description:
      "Attach strategic gifts to qualifying bundles to raise intent and improve customer satisfaction. Reward larger carts without adding complexity for shoppers.",
    layers: [
      {
        src: "/mockups/gifts-fbt-free-row-v2.png",
        alt: "Frequently bought together bundle with free gift row and savings summary",
        className:
          "relative z-20 mx-auto w-[84%] md:w-[80%] rounded-2xl border border-black/5 bg-white p-2 shadow-2xl",
      },
      {
        src: "/mockups/gifts-pack-tier-v2.png",
        alt: "Most popular pack tier card with free gift item",
        className:
          "absolute left-[2%] top-[8%] z-30 w-[44%] md:w-[40%] rounded-2xl border border-black/5 bg-white p-2 shadow-2xl",
      },
      {
        src: "/mockups/gifts-free-items-v2.png",
        alt: "Free gifts unlock panel with available and locked items",
        className:
          "absolute right-[2%] top-[44%] z-30 w-[44%] md:w-[40%] rounded-2xl border border-black/5 bg-white p-2 shadow-2xl",
      },
    ],
    callouts: [],
  },
];

const appReviews: Review[] = [
  {
    domain: "allbirds.com",
    rating: 5,
    quote:
      "Curated bundles went live in one afternoon and immediately increased our average cart size.",
    author: "Arielle P.",
    handle: "Head of Ecommerce",
  },
  {
    domain: "gymshark.com",
    rating: 4.9,
    quote:
      "The FBT logic feels native to our storefront and recommendations are actually relevant.",
    author: "Marcus T.",
    handle: "Growth Lead",
  },
  {
    domain: "fentybeauty.com",
    rating: 4.8,
    quote:
      "Buy X Get Y campaigns are easier to run now, and offer performance is simple to measure.",
    author: "Nina R.",
    handle: "Retention Manager",
  },
  {
    domain: "fashionnova.com",
    rating: 5,
    quote:
      "Volume bundles lifted conversion without hurting checkout speed, which was a hard requirement for us.",
    author: "Jordan C.",
    handle: "Digital Commerce Director",
  },
  {
    domain: "skims.com",
    rating: 4.9,
    quote:
      "Setup was straightforward and the mockup controls made it easy to match our visual language.",
    author: "Lena V.",
    handle: "Storefront Manager",
  },
  {
    domain: "drinkolipop.com",
    rating: 5,
    quote:
      "We can iterate on bundle strategy weekly using the dashboard instead of guessing what works.",
    author: "Patrick D.",
    handle: "Revenue Operations",
  },
  {
    domain: "glossier.com",
    rating: 4.9,
    quote:
      "The app helped us test curated sets and FBT placements fast while keeping UX polished.",
    author: "Maya K.",
    handle: "Ecommerce Product Lead",
  },
  {
    domain: "chubbiesshorts.com",
    rating: 4.8,
    quote:
      "Orbitry now powers our highest-performing upsell journeys and gives the team clear attribution.",
    author: "Ethan B.",
    handle: "Marketing Operations",
  },
];

function renderIcon(key: IconKey) {
  switch (key) {
    case "setup":
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <circle cx="12" cy="12" r="8" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l2.5 1.5" />
        </svg>
      );
    case "brand":
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 21h16" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 17V9m8 8V7m-4 10V5" />
          <circle cx="8" cy="8" r="1.2" fill="currentColor" stroke="none" />
          <circle cx="12" cy="4" r="1.2" fill="currentColor" stroke="none" />
          <circle cx="16" cy="6" r="1.2" fill="currentColor" stroke="none" />
        </svg>
      );
    case "analytics":
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 18h16M7 15l3-3 2 2 5-6" />
          <circle cx="7" cy="15" r="1" fill="currentColor" />
          <circle cx="10" cy="12" r="1" fill="currentColor" />
          <circle cx="12" cy="14" r="1" fill="currentColor" />
          <circle cx="17" cy="8" r="1" fill="currentColor" />
        </svg>
      );
    case "gift":
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 12v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7m16 0H4m7 0v8m0-14v6m-3 0V7a2 2 0 1 1 4 0v5m0-5a2 2 0 1 1 4 0v5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8" />
        </svg>
      );
  }
}

function iconBadgeClass(tone: ToneKey) {
  void tone;
  return "bg-gradient-to-br from-orange-500 to-pink-600 text-white shadow-lg shadow-pink-500/25";
}

function chipClass(tone: ToneKey) {
  const toneMap: Record<ToneKey, string> = {
    sky: "border-sky-200 bg-sky-50 text-sky-700",
    indigo: "border-indigo-200 bg-indigo-50 text-indigo-700",
    emerald: "border-emerald-200 bg-emerald-50 text-emerald-700",
    amber: "border-amber-200 bg-amber-50 text-amber-700",
  };

  return toneMap[tone];
}

function renderHeroBubbleIcon(content: HeroBubble["content"]) {
  if (content === "$") {
    return <span className="text-xl font-bold">$</span>;
  }

  if (content === "gift") {
    return (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 12v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7m16 0H4m7 0v8m0-14v6m-3 0V7a2 2 0 1 1 4 0v5m0-5a2 2 0 1 1 4 0v5" />
      </svg>
    );
  }

  if (content === "trend") {
    return (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m3 17 6-6 4 4 8-8" />
      </svg>
    );
  }

  if (content === "bolt") {
    return (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    );
  }

  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16M7.5 8.5h6a2.5 2.5 0 1 1 0 5h-3a2.5 2.5 0 1 0 0 5h6" />
    </svg>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-black/5 bg-[#fafaf9] px-6 pb-20 pt-12 sm:pt-16">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-[10%] -right-[10%] h-[70vw] w-[70vw] rounded-full bg-gradient-to-b from-orange-100/70 to-pink-200/60 blur-[120px]" />
        <div className="absolute top-[40%] -left-[10%] h-[50vw] w-[50vw] rounded-full bg-gradient-to-tr from-orange-50/80 to-pink-100/60 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.015] mix-blend-multiply"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
          }}
        />
      </div>

      <div className="relative mx-auto flex max-w-[1400px] flex-col items-center gap-12 lg:flex-row lg:gap-16">
        <div className="w-full lg:w-[48%]">
          <div className="mb-6 inline-flex items-center gap-3">
            <div className="relative h-[58px] w-[58px] overflow-hidden rounded-2xl">
              <Image
                src="/upsell-app-icon.png"
                alt="Orbitry Upsell app icon"
                fill
                sizes="58px"
                className="object-cover"
              />
            </div>
            <p className="text-lg font-semibold tracking-tight text-slate-800">Orbitry | Upsell Bundles</p>
          </div>

          <h1 className="font-serif text-4xl font-medium leading-[0.95] tracking-tight text-gray-900 sm:text-5xl md:text-[4.2rem]">
            Build and scale bundles with full-funnel clarity
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-2xl md:font-light">
            Increase average order value through volume offers, mix-and-match bundles, FBT recommendations, and
            conversion-focused offer journeys.
          </p>

          <Link
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex h-14 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 px-8 text-base font-bold text-white shadow-lg shadow-pink-500/30 transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            View on Shopify App Store
          </Link>
        </div>

        <div className="w-full lg:w-[52%]">
          <div className="relative">
            {heroBubbles.map((bubble, index) => (
              <div
                key={`${bubble.className}-${index}`}
                className={`absolute z-30 flex items-center justify-center rounded-full border border-white/45 shadow-[0_14px_35px_rgba(0,0,0,0.12)] ${bubble.className} ${bubble.tone} ${bubble.motion}`}
              >
                {renderHeroBubbleIcon(bubble.content)}
              </div>
            ))}

            <div className="relative z-20 overflow-hidden rounded-[2rem] border border-black/5 bg-white/80 p-4 shadow-2xl shadow-black/10 backdrop-blur-sm sm:p-6">
              <Image
                src="/mockups/hero-dashboard-custom.png"
                alt="Orbitry analytics dashboard mockup"
                width={2650}
                height={1366}
                className="h-auto w-full rounded-2xl border border-black/5"
              />

              <div className="absolute right-4 top-4 z-40 rounded-2xl border border-white/95 bg-white/95 px-4 py-3 shadow-[0_24px_54px_rgba(15,23,42,0.26),0_8px_20px_rgba(15,23,42,0.14)] backdrop-blur-sm sm:right-8 sm:top-8 sm:px-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500 sm:text-[11px]">Added Revenue</p>
                <p className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-[2rem]">$15,945.00</p>
                <p className="mt-1 text-xs font-semibold text-emerald-600 sm:text-sm">+60.1% vs previous 30 days</p>
              </div>

              <div className="absolute left-[58%] top-[53%] z-40 hidden md:block">
                <span className="absolute -left-[11px] -top-[11px] h-[22px] w-[22px] rounded-full border-[3px] border-white bg-[#5f72d6] shadow-[0_12px_24px_rgba(70,91,199,0.45)]" />
                <span className="absolute -left-[19px] -top-[19px] h-[38px] w-[38px] rounded-full border border-[#5f72d6]/35 bg-[#5f72d6]/12 animate-live-pulse" />
                <div className="absolute left-5 top-4 w-[196px] rounded-2xl border border-white/90 bg-white/95 p-3 shadow-[0_24px_48px_rgba(15,23,42,0.24),0_6px_18px_rgba(15,23,42,0.14)] backdrop-blur-sm">
                  <p className="text-sm font-semibold text-slate-800">May 6</p>
                  <div className="mt-2 space-y-2 border-t border-slate-200/70 pt-2">
                    <div className="flex items-center justify-between gap-2 text-sm">
                      <span className="text-slate-600">Last 30 days</span>
                      <span className="font-semibold text-slate-900">$707.00</span>
                    </div>
                    <div className="flex items-center justify-between gap-2 text-sm">
                      <span className="text-slate-600">Previous 30 days</span>
                      <span className="font-semibold text-slate-900">$442.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BundleTypesSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#ff7a00] via-[#ff4f45] to-[#e80081] py-14 text-white sm:py-16">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-36 top-0 h-[540px] w-[540px] rounded-full border border-white/15" />
        <div className="absolute -left-24 top-24 h-[720px] w-[720px] rounded-full border border-white/10" />
        <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-orange-100/25 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-[1400px] px-6 sm:px-10">
        <div className="text-center">
          <h2 className="font-serif text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl">
            Bundle products, tailored for your growth
          </h2>
          <p className="mx-auto mt-5 max-w-4xl text-lg text-orange-50">
            Build almost every high-performing bundle style with one engine. Each bundle type below is ready for your
            widget screenshot once you share assets.
          </p>
        </div>

        <BundleTypeTabs items={bundleTypes} />
      </div>
    </section>
  );
}

function FeatureCanvas({ chapter }: { chapter: Chapter }) {
  if (chapter.id === "analytics" && chapter.layers.length >= 4) {
    const [revenueGrowthLayer, kpiLayer, topCampaignLayer, liveActivityLayer] = chapter.layers;

    return (
      <div className="relative overflow-hidden rounded-[2rem] border border-black/5 bg-[#ececef] px-4 py-5 sm:px-6 sm:py-7">
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/45 to-transparent" />

        <div className="relative space-y-4 sm:space-y-5 [perspective:1600px]">
          <div className="relative rounded-2xl border border-white/90 bg-white/95 p-1 shadow-[0_20px_42px_rgba(15,23,42,0.16),0_6px_16px_rgba(15,23,42,0.1)] lg:[transform:translateZ(14px)]">
            <div className="pointer-events-none absolute inset-x-8 -bottom-3 h-4 rounded-full bg-slate-900/20 blur-xl" />
            <Image
              src={kpiLayer.src}
              alt={kpiLayer.alt}
              width={2048}
              height={230}
              sizes="(max-width: 640px) 96vw, (max-width: 1024px) 90vw, 58vw"
              className="relative z-10 h-auto w-full rounded-[0.95rem] [filter:brightness(1.05)_saturate(0.94)]"
            />
          </div>

          <div className="grid items-start gap-4 lg:grid-cols-[1.5fr_0.92fr] lg:items-center">
            <div className="relative z-20 self-start lg:self-center rounded-2xl border border-white/90 bg-white/95 p-1 shadow-[0_30px_64px_rgba(15,23,42,0.24),0_10px_24px_rgba(15,23,42,0.12)] lg:[transform:translateZ(26px)_rotateX(1.6deg)]">
              <div className="pointer-events-none absolute inset-x-10 -bottom-5 h-7 rounded-full bg-slate-900/28 blur-2xl" />
              <div className="relative z-10 aspect-[16/9] overflow-hidden rounded-[0.95rem]">
                <Image
                  src={revenueGrowthLayer.src}
                  alt={revenueGrowthLayer.alt}
                  fill
                  sizes="(max-width: 640px) 96vw, (max-width: 1024px) 64vw, 39vw"
                  className="object-cover object-left-top [filter:brightness(1.05)_saturate(0.94)]"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 lg:self-center lg:-ml-6 lg:[transform:translateZ(18px)]">
              <div className="relative z-30 rounded-2xl border border-white/90 bg-white/95 p-1 shadow-[0_26px_54px_rgba(15,23,42,0.22),0_8px_20px_rgba(15,23,42,0.12)] lg:[transform:rotateY(-2deg)]">
                <div className="pointer-events-none absolute inset-x-8 -bottom-4 h-6 rounded-full bg-slate-900/24 blur-xl" />
                <Image
                  src={topCampaignLayer.src}
                  alt={topCampaignLayer.alt}
                  width={976}
                  height={724}
                  sizes="(max-width: 640px) 96vw, (max-width: 1024px) 44vw, 25vw"
                  className="relative z-10 h-auto w-full rounded-[0.95rem] [filter:brightness(1.05)_saturate(0.94)]"
                />
              </div>

              <div className="relative z-30 rounded-2xl border border-white/90 bg-white/95 p-1 shadow-[0_26px_54px_rgba(15,23,42,0.22),0_8px_20px_rgba(15,23,42,0.12)] lg:[transform:rotateY(-2deg)]">
                <div className="pointer-events-none absolute inset-x-8 -bottom-4 h-6 rounded-full bg-slate-900/24 blur-xl" />
                <Image
                  src={liveActivityLayer.src}
                  alt={liveActivityLayer.alt}
                  width={976}
                  height={724}
                  sizes="(max-width: 640px) 96vw, (max-width: 1024px) 44vw, 25vw"
                  className="relative z-10 h-auto w-full rounded-[0.95rem] [filter:brightness(1.05)_saturate(0.94)]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-black/5 bg-[#ececef] px-4 py-5 sm:px-6 sm:py-7">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/45 to-transparent" />
      <div className="relative aspect-[16/11]">
        {chapter.layers.map((layer) => (
          <div key={`${chapter.id}-${layer.src}-${layer.alt}`} className={layer.className}>
            <Image src={layer.src} alt={layer.alt} width={1250} height={760} className="h-auto w-full rounded-xl" />
          </div>
        ))}
      </div>

      {chapter.callouts.length > 0 ? (
        <div className="mt-4 grid gap-2 sm:grid-cols-3">
          {chapter.callouts.map((callout) => (
            <div
              key={`${chapter.id}-${callout.label}`}
              className={`rounded-xl border px-3 py-2 text-sm ${chipClass(chapter.tone)}`}
            >
              <div className="text-[11px] font-semibold uppercase tracking-[0.12em] opacity-75">{callout.label}</div>
              <div className="mt-1 text-base font-bold tracking-tight">{callout.value}</div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function FeatureChapter({ chapter }: { chapter: Chapter }) {
  const textBlock = (
    <div>
      <div className={`mb-7 inline-flex h-12 w-12 items-center justify-center rounded-xl ${iconBadgeClass(chapter.tone)}`}>
        {renderIcon(chapter.icon)}
      </div>
      <h2 className="font-serif text-4xl font-medium leading-tight tracking-tight text-gray-900 sm:text-5xl">
        {chapter.title}
      </h2>
      <p className="mt-5 text-xl font-medium text-slate-700">{chapter.subtitle}</p>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">{chapter.description}</p>
    </div>
  );

  const visualBlock = <FeatureCanvas chapter={chapter} />;

  return (
    <section className="px-6 py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        {chapter.variant === "text-left" ? (
          <>
            {textBlock}
            {visualBlock}
          </>
        ) : (
          <>
            {visualBlock}
            {textBlock}
          </>
        )}
      </div>
    </section>
  );
}

function AppStoreCtaSection() {
  return (
    <section className="relative px-6 pt-32">
      <div className="absolute inset-x-0 inset-y-0 z-0">
        <div className="h-1/2 w-full bg-[#fafafa]" />
        <div className="h-1/2 w-full bg-[#050505]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl translate-y-12">
        <div className="relative overflow-hidden rounded-[3rem] border border-white/20 bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 px-6 py-16 text-center shadow-2xl shadow-pink-900/45 md:px-16 md:py-20">
          <div className="absolute inset-0 z-0 opacity-40">
            <div className="absolute left-1/2 top-1/2 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 via-white/5 to-transparent blur-[80px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-3xl">
            <h2 className="mb-5 font-serif text-3xl font-bold leading-tight tracking-tight text-white md:text-[3.1rem]">
              Ready to launch Orbitry Upsell on your store?
            </h2>
            <p className="mb-10 text-lg text-orange-50 md:text-xl">
              Install from the Shopify App Store and start converting more shoppers into higher-value orders.
            </p>

            <Link
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex h-16 items-center justify-center overflow-hidden rounded-xl bg-white px-10 font-bold text-gray-900 transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-black/10"
            >
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-150%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(150%)]">
                <div className="relative h-full w-8 bg-black/10" />
              </div>
              <span className="relative z-10 text-lg">Open App Store Listing</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function OrbitryUpsellPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f5f5f6] text-[#0f172a]">
      <Header />

      <main className="flex-1 pt-24">
        <HeroSection />
        <Stats />
        <BundleTypesSection />

        {chapters.map((chapter) => (
          <FeatureChapter key={chapter.id} chapter={chapter} />
        ))}

        <Testimonials
          id="app-reviews"
          title="Reviews from Shopify teams using Orbitry Upsell"
          reviews={appReviews}
        />

        <AppStoreCtaSection />
      </main>

      <Footer />
    </div>
  );
}
