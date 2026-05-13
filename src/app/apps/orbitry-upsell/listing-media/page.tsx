import type { Metadata } from "next";
import Link from "next/link";
import ListingMediaCard from "@/components/listing-media/ListingMediaCard";
import { LISTING_MEDIA_CARDS } from "@/lib/listingMediaCards";

export const metadata: Metadata = {
  title: "Orbitry Upsell Listing Media",
  description: "Shopify App Store feature card media for Orbitry Upsell.",
  alternates: {
    canonical: "/apps/orbitry-upsell/listing-media",
  },
};

export default function ListingMediaPage() {
  return (
    <main className="min-h-screen bg-[#f3f0ec] px-6 py-12 sm:px-8">
      <div className="mx-auto mb-10 w-full max-w-[1600px]">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">Shopify Listing Media</p>
        <h1 className="mt-3 font-serif text-5xl tracking-tight text-slate-900">Orbitry Upsell Feature Cards</h1>
        <p className="mt-4 max-w-4xl text-lg text-slate-600">
          This page previews 16 feature cards designed for Shopify App Store media. Each card uses a strict 16:9
          canvas and maps to deterministic export names: <code>01-overview.png</code> through <code>16-targeting-markets.png</code>.
        </p>

        <div className="mt-5 flex flex-wrap gap-3 text-sm">
          {LISTING_MEDIA_CARDS.map((card) => (
            <Link
              key={card.id}
              href={`/apps/orbitry-upsell/listing-media/${card.id}`}
              className="rounded-full border border-black/10 bg-white px-4 py-2 font-semibold text-slate-700 hover:bg-slate-50"
            >
              Open {card.id}
            </Link>
          ))}
        </div>
      </div>

      <div className="space-y-16">
        {LISTING_MEDIA_CARDS.map((card) => (
          <ListingMediaCard key={card.id} card={card} mode="gallery" />
        ))}
      </div>
    </main>
  );
}
