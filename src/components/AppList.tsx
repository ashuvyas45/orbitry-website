"use client";

import Image from "next/image";
import Link from "next/link";

const apps = [
  {
    id: "orbitry-upsell",
    name: "Orbitry | Upsell Bundles",
    description: "Lift AOV with personalized curated bundles, FBT recommendations, and conversion-focused volume and Buy x Get y offers.",
    appStoreLink: "https://apps.shopify.com",
    features: ["Volume Discounts", "Bundle Deals", "Buy X Get Y", "FBT"],
    cardIcon: "/upsell-app-icon.png",
    gradient: "from-orange-500 to-pink-600",
    shadow: "shadow-pink-500/30",
    bgAccent: "bg-orange-50/70",
    comingSoon: false,
  },
  {
    id: "popup-upsell",
    name: "Popup Discount Upsell",
    description: "Maximise your revenue with customisable, timing-perfect upsell and cross-sell popups injected directly into product pages.",
    appStoreLink: "#",
    features: ["Custom Popups", "Cross-sells", "Trigger Rules"],
    gradient: "from-orange-500 to-pink-600",
    shadow: "shadow-pink-500/30",
    bgAccent: "bg-pink-50/60",
    comingSoon: true,
  },
  {
    id: "cart-drawer",
    name: "Cart Drawer AI Upsell",
    description: "Boost AOV instantly with a seamless slide cart featuring 1-click upsells, urgency timers, and dynamic free shipping bars.",
    appStoreLink: "#",
    features: ["Slide Cart", "Urgency Timer", "Free Shipping"],
    gradient: "from-orange-500 to-pink-600",
    shadow: "shadow-pink-500/30",
    bgAccent: "bg-orange-50/70",
    comingSoon: true,
  },
];

export default function AppList() {
  const visibleApps = apps.filter((app) => !app.comingSoon);

  return (
    <section id="apps" className="bg-[#fafafa] py-32 relative">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-20 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/60 py-1.5 pl-2 pr-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)] backdrop-blur-md mb-6">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-100 text-pink-600 text-[10px]">🚀</span>
            <span className="text-xs font-semibold tracking-wider text-gray-600 uppercase">Our Ecosystem</span>
          </div>
          <h2 className="mb-6 text-4xl sm:text-[2.5rem] font-bold tracking-tight text-gray-900 md:text-5xl">
            Built for high-converting Shopify upsells
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Orbitry Upsell helps you lift AOV with volume discounts, bundle offers, and Buy X Get Y promotions that feel native to your storefront.
          </p>
        </div>

        <div
          className={`grid gap-6 sm:gap-8 ${
            visibleApps.length === 1
              ? "mx-auto max-w-xl lg:grid-cols-1"
              : "lg:grid-cols-3"
          }`}
        >
          {visibleApps.map((app) => (
            <div
              key={app.id}
              className="glass-card group relative flex flex-col overflow-hidden rounded-[2rem] border border-black/5 bg-white/80 transition-all duration-500 hover:-translate-y-2 hover:border-black/10 hover:shadow-2xl hover:shadow-[rgba(0,0,0,0.05)]"
            >
              <div className={`relative aspect-[3/2] sm:aspect-[4/3] w-full overflow-hidden ${app.bgAccent}`}>
                <div className={`absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gradient-to-br ${app.gradient} blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`flex h-24 w-24 items-center justify-center rounded-[1.5rem] bg-gradient-to-br ${app.gradient} shadow-2xl ${app.shadow} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                    {"cardIcon" in app && app.cardIcon ? (
                      <Image
                        src={app.cardIcon}
                        alt={`${app.name} icon`}
                        width={72}
                        height={72}
                        className="h-16 w-16 object-contain drop-shadow-md"
                      />
                    ) : (
                      <svg className="h-10 w-10 text-white drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    )}
                  </div>
                </div>
                {app.comingSoon && (
                  <div className="absolute top-5 right-5 rounded-full border border-yellow-500/20 bg-yellow-50 px-4 py-1.5 text-xs font-bold text-yellow-600 backdrop-blur-md">
                    IN DEVELOPMENT
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col p-8">
                <h3 className="mb-3 text-2xl font-bold text-gray-900 transition-colors">{app.name}</h3>
                <p className="mb-6 flex-1 text-base leading-relaxed text-gray-600">{app.description}</p>

                <div className="mb-8 flex flex-wrap gap-2">
                  {app.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full border border-black/5 bg-gray-50 px-3 py-1.5 text-xs font-semibold text-gray-600"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Link
                    href={app.comingSoon ? "#" : "/apps/orbitry-upsell"}
                    className={`flex h-12 items-center justify-center rounded-xl text-sm font-bold transition-all shadow-sm ${
                      app.comingSoon
                        ? "cursor-not-allowed bg-gray-100 text-gray-400"
                        : "bg-gray-900 text-white hover:scale-[1.02] hover:bg-black active:scale-[0.98]"
                    }`}
                  >
                    Learn more
                  </Link>
                  <Link
                    href={app.appStoreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex h-12 items-center justify-center rounded-xl border-2 text-sm font-bold transition-all ${
                      app.comingSoon
                        ? "border-black/5 bg-transparent text-gray-400"
                        : "border-black/10 bg-white text-gray-700 hover:border-black/20 hover:bg-gray-50 hover:text-gray-900 active:scale-[0.98]"
                    }`}
                  >
                    App Store
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
