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
    description: "Create predefined product sets with clear savings and fast add-to-cart flow.",
  },
  {
    id: "volume-discount",
    name: "Volume Discount",
    description: "Reward customers with stronger pricing as they increase quantity.",
  },
  {
    id: "mix-match",
    name: "Mix & Match",
    description: "Let shoppers compose their own bundles from a curated group of products.",
  },
  {
    id: "cross-sell",
    name: "Cross-sell",
    description: "Surface relevant companion products right when intent is highest.",
  },
  {
    id: "buy-x-get-y",
    name: "Buy X Get Y",
    description: "Drive urgency with goal-based offers that are easy to understand.",
  },
  {
    id: "add-ons",
    name: "Add-ons",
    description: "Offer accessories and complementary items as low-friction boosts.",
  },
  {
    id: "fbt-bundle",
    name: "FBT Bundle",
    description: "Recommend frequently bought together combinations from real purchase behavior.",
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
        src: "/mockups/widget-bundle-save.png",
        alt: "Bundle setup panel with quantity options",
        className: "relative z-20 w-[78%] md:w-[74%] rounded-2xl border border-black/5 bg-white p-2 shadow-2xl",
      },
      {
        src: "/mockups/widget-fbt-progress.png",
        alt: "Bundle preview drawer",
        className:
          "absolute -right-2 top-[18%] z-30 w-[43%] rounded-2xl border border-black/5 bg-white p-2 shadow-2xl",
      },
      {
        src: "/mockups/widget-curated-pack.png",
        alt: "Merchandising config reference",
        className:
          "absolute left-[16%] top-[50%] z-10 w-[58%] rounded-2xl border border-black/5 bg-white p-2 opacity-95 shadow-xl",
      },
    ],
    callouts: [
      { label: "Time to first offer", value: "< 10 min" },
      { label: "Setup friction", value: "Low" },
      { label: "Campaign templates", value: "12+" },
    ],
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
        src: "/mockups/widget-curated-pack.png",
        alt: "Curated bundle visual style",
        className: "relative z-20 w-[86%] md:w-[80%] rounded-2xl border border-black/5 bg-white p-2 shadow-2xl",
      },
      {
        src: "/mockups/widget-buyxgety.png",
        alt: "Buy X Get Y custom offer",
        className:
          "absolute bottom-[6%] -left-2 z-30 w-[46%] rounded-2xl border border-black/5 bg-white p-2 shadow-2xl",
      },
      {
        src: "/mockups/widget-fbt-progress.png",
        alt: "Storefront recommendation style",
        className:
          "absolute right-[2%] top-[8%] z-10 w-[38%] rounded-2xl border border-black/5 bg-white p-2 opacity-95 shadow-xl",
      },
    ],
    callouts: [
      { label: "Theme-ready layouts", value: "100%" },
      { label: "Color + badge control", value: "Granular" },
      { label: "Variant UI support", value: "Built-in" },
    ],
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
        src: "/mockups/dashboard-analytics.png",
        alt: "Analytics dashboard trend view",
        className: "relative z-20 w-[88%] md:w-[84%] rounded-2xl border border-black/5 bg-white p-2 shadow-2xl",
      },
      {
        src: "/mockups/dashboard-overview.png",
        alt: "Overview cards for upsell performance",
        className:
          "absolute -right-3 top-[14%] z-30 w-[44%] rounded-2xl border border-black/5 bg-white p-2 shadow-2xl",
      },
    ],
    callouts: [
      { label: "Added revenue tracked", value: "Daily" },
      { label: "Conversion to bundle", value: "Live" },
      { label: "Attribution visibility", value: "Clear" },
    ],
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
        src: "/mockups/widget-buyxgety.png",
        alt: "Gift-enabled bundle selection",
        className: "relative z-20 w-[84%] md:w-[80%] rounded-2xl border border-black/5 bg-white p-2 shadow-2xl",
      },
      {
        src: "/mockups/widget-curated-pack.png",
        alt: "Multi-offer bundle and gift row",
        className:
          "absolute right-[4%] top-[12%] z-10 w-[42%] rounded-2xl border border-black/5 bg-white p-2 opacity-95 shadow-xl",
      },
    ],
    callouts: [
      { label: "Gift trigger logic", value: "Flexible" },
      { label: "AOV impact", value: "High" },
      { label: "Customer delight", value: "Strong" },
    ],
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
                src="/mockups/dashboard-analytics.png"
                alt="Orbitry analytics dashboard mockup"
                width={1600}
                height={1000}
                className="h-auto w-full rounded-2xl border border-black/5"
              />

              <div className="absolute right-8 top-8 rounded-2xl border border-black/5 bg-white px-4 py-3 shadow-lg">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Added Revenue</p>
                <p className="mt-1 text-2xl font-bold tracking-tight text-slate-900">$5,913.95</p>
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
    <section className="relative px-6 pt-24">
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
