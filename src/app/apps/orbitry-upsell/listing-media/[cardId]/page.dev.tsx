import { notFound } from "next/navigation";
import ListingMediaCard from "@/components/listing-media/ListingMediaCard";
import { LISTING_MEDIA_CARDS, LISTING_MEDIA_CARD_IDS, type ListingMediaCardId } from "@/lib/listingMediaCards";

type Params = Promise<{ cardId: string }>;

export function generateStaticParams() {
  return LISTING_MEDIA_CARD_IDS.map((cardId) => ({ cardId }));
}

export default async function ListingMediaCardPage({ params }: { params: Params }) {
  const { cardId } = await params;

  const card = LISTING_MEDIA_CARDS.find((item) => item.id === (cardId as ListingMediaCardId));
  if (!card) {
    notFound();
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f3f0ec] p-0">
      <div className="w-[1600px]">
        <ListingMediaCard card={card} mode="export" />
      </div>
    </main>
  );
}
