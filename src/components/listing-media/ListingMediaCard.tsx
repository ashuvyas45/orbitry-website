import Image from "next/image";
import type { ReactElement } from "react";
import type { ListingMediaCard, MockupStyle } from "@/lib/listingMediaCards";

type ListingMediaCardProps = {
  card: ListingMediaCard;
  mode?: "gallery" | "export";
};

type LineProps = {
  width: string;
  tone?: string;
  className?: string;
};

function Line({ width, tone = "bg-slate-300", className = "" }: LineProps) {
  return <div className={`h-2.5 rounded-full ${width} ${tone} ${className}`} />;
}

function TinyBullet({ tone = "bg-slate-500" }: { tone?: string }) {
  return <span className={`mt-[6px] inline-flex h-2.5 w-2.5 flex-none rounded-full ${tone}`} />;
}

function MockupNumber({ n }: { n: number }) {
  return (
    <span className="absolute left-2 top-2 z-20 inline-flex h-8 w-8 items-center justify-center rounded-full border border-black/20 bg-black/85 text-sm font-black text-white shadow-lg">
      {n}
    </span>
  );
}

function FeatureTextBlock({
  card,
  titleClass,
  subtitleClass,
  bodyClass,
  bulletTone,
  maxBullets = 3,
  bulletTextClass = "text-[15px] font-medium leading-snug text-slate-700",
}: {
  card: ListingMediaCard;
  titleClass: string;
  subtitleClass: string;
  bodyClass: string;
  bulletTone: string;
  maxBullets?: number;
  bulletTextClass?: string;
}) {
  const hasBenefit = card.benefit.trim().length > 0;

  return (
    <>
      <h2 className={titleClass}>{card.title}</h2>
      <p className={subtitleClass}>{card.subtitle}</p>
      {hasBenefit ? <p className={bodyClass}>{card.benefit}</p> : null}

      <div className="mt-6 space-y-2.5">
        {card.bullets.slice(0, maxBullets).map((bullet) => (
          <div key={bullet} className={`flex items-start gap-3 ${bulletTextClass}`}>
            <TinyBullet tone={bulletTone} />
            <span>{bullet}</span>
          </div>
        ))}
      </div>
    </>
  );
}

function LegacyCard({ card }: { card: ListingMediaCard }) {
  return (
    <div
      data-card-canvas
      className="relative h-[900px] w-[1600px] overflow-hidden rounded-[28px] border border-black/10 bg-[#f6f4f1] shadow-[0_30px_70px_rgba(10,10,10,0.18)]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[8%] -top-[18%] h-[55%] w-[40%] rounded-full bg-gradient-to-br from-orange-200/60 to-pink-200/30 blur-3xl" />
        <div className="absolute -right-[10%] bottom-[-24%] h-[62%] w-[45%] rounded-full bg-gradient-to-tr from-orange-100/70 to-pink-100/30 blur-3xl" />
      </div>

      <div className="relative z-10 grid h-full grid-cols-[47%_53%] gap-0">
        <div className="flex h-full flex-col justify-between p-12">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate-500">Orbitry Upsell Features</p>
            <h2 className="mt-4 font-serif text-[52px] leading-[0.95] tracking-tight text-slate-900">{card.title}</h2>
            <p className="mt-4 text-[22px] font-medium leading-tight text-slate-700">{card.subtitle}</p>
            <p className="mt-5 max-w-[94%] text-[19px] leading-[1.45] text-slate-600">{card.benefit}</p>
          </div>

          <div className="space-y-3">
            {card.bullets.map((bullet) => (
              <div key={bullet} className="flex items-start gap-3 text-[16px] font-medium leading-snug text-slate-700">
                <span className="mt-[6px] inline-flex h-2.5 w-2.5 flex-none rounded-full bg-gradient-to-r from-orange-500 to-pink-600" />
                <span>{bullet}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-full px-8 py-10">
          <div className="relative mt-12 h-[76%] rounded-[24px] border border-black/10 bg-[#ebe7e2]">
            {card.layers.map((layer) => (
              <div key={`${card.id}-${layer.src}-${layer.alt}`} className={layer.className}>
                <Image src={layer.src} alt={layer.alt} width={1200} height={760} className="h-auto w-full rounded-xl" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Style01({ card }: { card: ListingMediaCard }) {
  const isOverviewSplit = card.id === "09-overview-split";

  return (
    <div className="relative h-full overflow-hidden bg-[#eff1f1]">
      <div className="absolute -left-20 bottom-[-30%] h-[78%] w-[46%] rounded-full bg-[#d9efe7]" />
      <div className="absolute right-[-8%] bottom-[-26%] h-[84%] w-[52%] rounded-full bg-[#e9cfe0]" />

      <div className="relative z-10 grid h-full grid-cols-[48%_52%]">
        <div className="px-16 pt-14">
          <FeatureTextBlock
            card={card}
            titleClass={
              isOverviewSplit
                ? "mt-4 max-w-[95%] font-sans text-[50px] font-black leading-[0.96] tracking-tight text-black"
                : "mt-5 max-w-[95%] font-sans text-[70px] font-black leading-[0.92] tracking-tight text-black"
            }
            subtitleClass={
              isOverviewSplit
                ? "mt-3 max-w-[90%] text-[23px] font-black leading-[1.04] tracking-tight text-black"
                : "mt-5 max-w-[90%] text-[44px] font-black leading-[0.98] tracking-tight text-black"
            }
            bodyClass={
              isOverviewSplit
                ? "mt-3 max-w-[90%] text-[14px] leading-[1.35] text-slate-700"
                : "mt-6 max-w-[90%] text-[18px] leading-[1.45] text-slate-700"
            }
            bulletTone="bg-[#16a085]"
            maxBullets={isOverviewSplit ? card.bullets.length : 2}
            bulletTextClass={
              isOverviewSplit
                ? "text-[19px] font-extrabold leading-[1.2] text-slate-800"
                : "text-[15px] font-medium leading-snug text-slate-700"
            }
          />
        </div>

        {isOverviewSplit ? (
          <div className="relative px-2 pt-2">
            <div className="relative h-[770px]">
              <div className="absolute left-[-14%] top-[34%] z-[12] w-[56%] -rotate-[2deg] overflow-hidden rounded-2xl border border-black/10 bg-white p-2 shadow-[0_16px_28px_rgba(15,23,42,0.18)]">
                <MockupNumber n={1} />
                <div className="overflow-hidden rounded-xl bg-white ring-1 ring-black/5">
                  <Image
                    src="/mockups/user-revenue-growth.png"
                    alt="Revenue growth analytics mockup"
                    width={1800}
                    height={1024}
                    quality={100}
                    unoptimized
                    className="h-auto w-full origin-center scale-[1.03] object-cover object-[50%_45%]"
                  />
                </div>
              </div>

              <div className="absolute right-[1%] top-[7%] z-[18] w-[53%] -rotate-[1deg] overflow-hidden rounded-2xl border-2 border-[#111827]/15 bg-white p-2 shadow-[0_18px_32px_rgba(15,23,42,0.2)]">
                <MockupNumber n={2} />
                <Image
                  src="/mockups/user-fbt-full-v2.png"
                  alt="Frequently bought together mockup"
                  width={1018}
                  height={694}
                  quality={100}
                  unoptimized
                  className="h-auto w-full rounded-xl"
                />
              </div>

              <div className="absolute left-[1%] top-[4%] z-[24] w-[30%] rotate-[1.5deg] overflow-hidden rounded-2xl border border-black/10 bg-white p-2 shadow-[0_14px_24px_rgba(15,23,42,0.16)]">
                <MockupNumber n={3} />
                <div className="overflow-hidden rounded-xl bg-white ring-1 ring-black/5">
                  <Image
                    src="/mockups/user-top-campaigns.png"
                    alt="Top campaigns performance mockup"
                    width={838}
                    height={630}
                    quality={100}
                    unoptimized
                    className="h-auto w-full origin-center scale-[1.03] object-cover object-[50%_46%]"
                  />
                </div>
              </div>

              <div className="absolute left-[-34%] top-[70%] z-[30] w-[40%] rotate-[2.1deg] overflow-hidden rounded-2xl border border-black/10 bg-white p-2 shadow-[0_14px_26px_rgba(15,23,42,0.16)]">
                <MockupNumber n={4} />
                <div className="overflow-hidden rounded-xl bg-white ring-1 ring-black/5">
                  <Image
                    src="/mockups/user-upsell-deal-group.png"
                    alt="Bundle and save upsell deal group mockup"
                    width={1025}
                    height={626}
                    quality={100}
                    unoptimized
                    className="h-auto w-full origin-center scale-[1.03] object-cover"
                  />
                </div>
              </div>

              <div className="absolute right-[3%] top-[81%] z-[22] w-[42%] -rotate-[1.8deg] overflow-hidden rounded-2xl border border-black/10 bg-white p-2 shadow-[0_12px_20px_rgba(15,23,42,0.14)]">
                <MockupNumber n={5} />
                <Image
                  src="/mockups/user-bundle-save-rows.png"
                  alt="Bundle and save discount rows mockup"
                  width={1058}
                  height={422}
                  quality={100}
                  unoptimized
                  className="h-auto w-full rounded-xl"
                />
              </div>

              <div className="absolute right-[22%] top-[66%] z-[32] w-[32%] -rotate-[1.8deg] overflow-hidden rounded-2xl border border-black/10 bg-white p-2 shadow-[0_14px_24px_rgba(15,23,42,0.16)]">
                <MockupNumber n={6} />
                <Image
                  src="/mockups/user-free-gifts.png"
                  alt="Free gift unlock mockup"
                  width={1064}
                  height={406}
                  quality={100}
                  unoptimized
                  className="h-auto w-full rounded-xl"
                />
              </div>

              <div className="absolute left-[11%] top-[72%] z-[20] w-[38%] -rotate-[2deg] overflow-hidden rounded-2xl border border-black/10 bg-white p-2 shadow-[0_14px_24px_rgba(15,23,42,0.16)]">
                <MockupNumber n={7} />
                <Image
                  src="/mockups/user-curated-pack.png"
                  alt="Curated pack mockup"
                  width={1018}
                  height={656}
                  quality={100}
                  unoptimized
                  className="h-auto w-full rounded-xl"
                />
              </div>

              <div className="absolute left-[41%] top-[50%] z-[26] w-[48%] rotate-[2.2deg] overflow-hidden rounded-2xl border border-black/10 bg-white p-2 shadow-[0_12px_20px_rgba(15,23,42,0.14)]">
                <MockupNumber n={9} />
                <Image
                  src="/mockups/user-pack-deal.png"
                  alt="Deal pack offer mockup"
                  width={1040}
                  height={240}
                  quality={100}
                  unoptimized
                  className="h-auto w-full rounded-xl"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="relative px-8 pt-16">
            <div className="absolute right-10 top-10 h-[78%] w-[58%] rounded-[54px] border-[3px] border-black/50 bg-white/80 shadow-lg" />
            <div className="absolute right-24 top-[23%] h-[48%] w-[36%] rounded-2xl border border-black/15 bg-white/95 p-3 shadow-lg">
              <div className="mb-3 grid grid-cols-2 gap-2">
                <div className="h-20 rounded-lg bg-gradient-to-br from-rose-200 to-pink-300" />
                <div className="h-20 rounded-lg bg-gradient-to-br from-emerald-100 to-teal-200" />
              </div>
              <Line width="w-4/5" tone="bg-slate-700" className="mb-2" />
              <Line width="w-full" className="mb-2" />
              <Line width="w-2/3" />
            </div>

            <div className="absolute left-8 top-[16%] w-[62%] rounded-2xl border-2 border-[#2fae96] bg-white p-3 shadow-xl">
              <div className="grid grid-cols-[44%_56%] gap-3">
                <div className="h-40 rounded-lg bg-gradient-to-br from-pink-200 via-rose-200 to-orange-100" />
                <div>
                  <Line width="w-2/5" tone="bg-slate-700" className="mb-3" />
                  <Line width="w-full" className="mb-2" />
                  <Line width="w-5/6" className="mb-2" />
                  <Line width="w-3/4" className="mb-4" />
                  <button className="h-12 w-40 rounded-lg bg-black text-lg font-bold text-white">Add Offer</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Style02({ card }: { card: ListingMediaCard }) {
  return (
    <div className="relative h-full overflow-hidden bg-[#f8f4ef]">
      <div className="absolute right-0 top-0 h-full w-[52%] bg-gradient-to-b from-[#fff7ef] to-[#fff1f8]" />

      <div className="relative z-10 grid h-full grid-cols-[44%_56%]">
        <div className="px-16 pt-14">
          <FeatureTextBlock
            card={card}
            titleClass="mt-5 max-w-[94%] font-sans text-[74px] font-black leading-[0.9] tracking-tight text-[#ff7a00]"
            subtitleClass="mt-4 max-w-[85%] text-[58px] font-black leading-[0.92] tracking-tight text-[#111827]"
            bodyClass="mt-6 max-w-[92%] text-[18px] leading-[1.45] text-slate-700"
            bulletTone="bg-[#e80081]"
            maxBullets={2}
          />
        </div>

        <div className="relative px-10 pt-16">
          <div className="absolute right-8 top-10 h-[55%] w-[38%] overflow-hidden rounded-2xl border border-black/10 bg-white shadow-lg">
            <Image
              src="/mockups/listing-10-volume-buyxgety.png"
              alt="Volume and Buy X Get Y storytelling mockup"
              width={1672}
              height={941}
              quality={100}
              unoptimized
              className="h-full w-full rounded-xl object-cover object-top"
            />
          </div>

          <div className="absolute left-3 top-[34%] h-[50%] w-[54%] overflow-hidden rounded-2xl border border-black/10 bg-white shadow-lg">
            <Image
              src="/mockups/widget-buyxgety.png"
              alt="Buy X Get Y storefront widget"
              width={1200}
              height={760}
              quality={100}
              unoptimized
              className="h-full w-full rounded-xl object-cover object-top"
            />
          </div>

          <div className="absolute left-16 top-[12%] w-[54%] rounded-2xl border border-black/10 bg-white px-4 py-3 shadow-lg">
            <Image
              src="/mockups/widget-bundle-save-v2.png"
              alt="Tiered quantity break table"
              width={1200}
              height={760}
              quality={100}
              unoptimized
              className="h-auto w-full rounded-xl"
            />
          </div>

          <div className="absolute bottom-8 left-16 right-12 flex items-center gap-8 text-3xl font-black text-[#e80081]">
            <span className="text-[#ff7a00]">QTY</span>
            <span className="text-[#ff4f45]">+</span>
            <span>BXGY</span>
            <span className="text-[#ff7a00]">FLOW</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Style03({ card }: { card: ListingMediaCard }) {
  return (
    <div className="relative h-full overflow-hidden bg-white">
      <div className="absolute inset-y-0 left-[46%] w-[2px] bg-slate-200" />
      <div className="relative z-10 grid h-full grid-cols-[46%_54%]">
        <div className="px-14 pt-14">
          <FeatureTextBlock
            card={card}
            titleClass="mt-5 max-w-[92%] font-sans text-[68px] font-extrabold leading-[0.92] tracking-tight text-[#111827]"
            subtitleClass="mt-5 max-w-[90%] text-[36px] font-extrabold leading-[1.02] tracking-tight text-[#ff4f45]"
            bodyClass="mt-5 max-w-[90%] text-[18px] leading-[1.45] text-slate-700"
            bulletTone="bg-[#e80081]"
            maxBullets={3}
          />
        </div>

        <div className="relative p-10">
          <div className="absolute right-12 top-14 w-[70%] rounded-2xl border border-black/10 bg-white p-3 shadow-lg">
            <Image
              src="/mockups/listing-11-curated-fbt.png"
              alt="Curated bundle and frequently bought together storytelling mockup"
              width={1672}
              height={941}
              quality={100}
              unoptimized
              className="h-auto w-full rounded-xl"
            />
          </div>

          <div className="absolute right-24 top-[40%] flex items-center gap-3">
            <span className="h-10 w-10 rounded-full border-2 border-[#ff7a00]" />
            <span className="text-3xl font-black text-[#ff4f45]">{`>`}</span>
            <span className="h-10 w-10 rounded-full border-2 border-[#e80081]" />
          </div>

          <div className="absolute left-8 bottom-12 w-[76%] overflow-hidden rounded-2xl border border-black/10 bg-white p-2 shadow-lg">
            <Image
              src="/mockups/widget-fbt-progress-v2.png"
              alt="Frequently bought together product progression"
              width={1200}
              height={760}
              quality={100}
              unoptimized
              className="h-auto w-full rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Style04({ card }: { card: ListingMediaCard }) {
  return (
    <div className="relative h-full overflow-hidden bg-[#fcf7f2]">
      <div className="absolute inset-y-0 right-0 w-[52%] bg-gradient-to-br from-[#fff8ef] to-[#fff0f8]" />
      <div className="relative z-10 grid h-full grid-cols-[45%_55%]">
        <div className="px-14 pt-14">
          <FeatureTextBlock
            card={card}
            titleClass="mt-5 max-w-[94%] font-sans text-[66px] font-extrabold leading-[0.92] tracking-tight text-[#111827]"
            subtitleClass="mt-4 max-w-[88%] text-[34px] font-extrabold leading-[1.03] tracking-tight text-[#ff4f45]"
            bodyClass="mt-5 max-w-[90%] text-[18px] leading-[1.45] text-slate-700"
            bulletTone="bg-[#e80081]"
            maxBullets={2}
          />
        </div>

        <div className="relative p-10">
          <div className="absolute left-10 top-14 w-[46%] overflow-hidden rounded-3xl border border-black/10 bg-white p-2 shadow-lg">
            <Image
              src="/mockups/gifts-pack-tier-v2.png"
              alt="Gift qualification tier setup"
              width={1200}
              height={760}
              quality={100}
              unoptimized
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="absolute right-10 top-[22%] w-[44%] overflow-hidden rounded-3xl border border-black/10 bg-white p-2 shadow-lg">
            <Image
              src="/mockups/gifts-free-items-v2.png"
              alt="Free gift item unlock states"
              width={1200}
              height={760}
              quality={100}
              unoptimized
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="absolute bottom-10 left-[18%] right-[12%] overflow-hidden rounded-3xl border border-black/10 bg-white p-2 shadow-lg">
            <Image
              src="/mockups/listing-12-gift-milestones.png"
              alt="Gift milestone storytelling mockup"
              width={1672}
              height={941}
              quality={100}
              unoptimized
              className="h-auto w-full rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Style05({ card }: { card: ListingMediaCard }) {
  return (
    <div className="relative h-full overflow-hidden bg-[#f8f4ef]">
      <div className="absolute left-0 right-0 top-0 h-20 bg-white/60" />
      <div className="relative z-10 flex h-full flex-col">
        <div className="grid grid-cols-[44%_56%] px-12 pt-12">
          <div>
            <FeatureTextBlock
              card={card}
              titleClass="mt-5 max-w-[94%] font-sans text-[62px] font-extrabold leading-[0.95] tracking-tight text-[#111827]"
              subtitleClass="mt-4 max-w-[88%] text-[32px] font-extrabold leading-[1.03] tracking-tight text-[#ff7a00]"
              bodyClass="mt-4 max-w-[92%] text-[18px] leading-[1.45] text-slate-700"
              bulletTone="bg-[#e80081]"
              maxBullets={2}
            />
          </div>
          <div className="relative">
            <div className="absolute right-2 top-0 w-[90%] overflow-hidden rounded-3xl border border-black/10 bg-white p-3 shadow-lg">
              <Image
                src="/mockups/listing-13-builder-speed.png"
                alt="Campaign builder velocity storytelling mockup"
                width={1672}
                height={941}
                quality={100}
                unoptimized
                className="h-auto w-full rounded-2xl"
              />
            </div>
          </div>
        </div>

        <div className="mt-6 grid flex-1 grid-cols-3 gap-4 px-12 pb-10">
          {[
            { label: "Rule Builder", src: "/mockups/widget-brand-deal-config-v2.png" },
            { label: "Theme Controls", src: "/mockups/widget-brand-quick-style-v2.png" },
            { label: "Launch Flow", src: "/mockups/widget-brand-product-cards-v2.png" },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm">
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">{item.label}</div>
              <Image
                src={item.src}
                alt={`${item.label} preview`}
                width={1200}
                height={760}
                quality={100}
                unoptimized
                className="h-auto w-full rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Style06({ card }: { card: ListingMediaCard }) {
  return (
    <div className="relative h-full overflow-hidden bg-white">
      <div className="absolute -left-20 top-24 h-72 w-72 rounded-full bg-[#ffe8d8]" />
      <div className="absolute right-[-120px] top-8 h-80 w-80 rounded-full bg-[#ffe0f1]" />

      <div className="relative z-10 grid h-full grid-cols-[45%_55%]">
        <div className="px-14 pt-14">
          <FeatureTextBlock
            card={card}
            titleClass="mt-5 max-w-[94%] font-sans text-[64px] font-extrabold leading-[0.94] tracking-tight text-[#111827]"
            subtitleClass="mt-4 max-w-[90%] text-[34px] font-extrabold leading-[1.02] tracking-tight text-[#ff4f45]"
            bodyClass="mt-5 max-w-[90%] text-[18px] leading-[1.45] text-slate-700"
            bulletTone="bg-[#e80081]"
            maxBullets={3}
          />
        </div>

        <div className="relative p-10">
          <div className="absolute left-6 top-14 w-[78%] rounded-3xl border border-black/10 bg-white p-5 shadow-lg">
            <div className="mb-4 flex items-center justify-between">
              <Line width="w-1/3" tone="bg-[#ff4f45]" />
              <div className="rounded-full bg-[#ffe7f4] px-3 py-1 text-xs font-bold text-[#e80081]">Live</div>
            </div>

            <div className="relative h-52 overflow-hidden rounded-2xl bg-slate-50">
              <Image
                src="/mockups/listing-14-revenue-growth-analytics.png"
                alt="Revenue and growth analytics storytelling mockup"
                width={1672}
                height={941}
                quality={100}
                unoptimized
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>

          <div className="absolute right-6 top-[24%] w-[40%] overflow-hidden rounded-2xl border border-black/10 bg-white p-2 shadow-lg">
            <Image
              src="/mockups/analytics-top-campaigns-v2.png"
              alt="Top campaign contribution comparison"
              width={1200}
              height={760}
              quality={100}
              unoptimized
              className="h-auto w-full rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Style07({ card }: { card: ListingMediaCard }) {
  return (
    <div className="relative h-full overflow-hidden bg-[#fdf8f3]">
      <div className="absolute left-0 top-0 h-full w-[46%] bg-gradient-to-b from-white to-[#fff1f8]" />

      <div className="relative z-10 grid h-full grid-cols-[46%_54%]">
        <div className="px-14 pt-14">
          <FeatureTextBlock
            card={card}
            titleClass="mt-5 max-w-[92%] font-sans text-[62px] font-extrabold leading-[0.96] tracking-tight text-[#111827]"
            subtitleClass="mt-4 max-w-[88%] text-[34px] font-extrabold leading-[1.03] tracking-tight text-[#ff4f45]"
            bodyClass="mt-5 max-w-[92%] text-[18px] leading-[1.45] text-slate-700"
            bulletTone="bg-[#e80081]"
            maxBullets={3}
          />
        </div>

        <div className="relative p-10">
          <div className="absolute left-10 top-12 w-[40%] overflow-hidden rounded-3xl border-2 border-[#ff7a00]/40 bg-white p-2 shadow-lg">
            <Image
              src="/mockups/analytics-live-activity-clean.png"
              alt="Live support activity stream"
              width={1200}
              height={760}
              quality={100}
              unoptimized
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="absolute left-[34%] top-[28%] w-[50%] overflow-hidden rounded-3xl border-2 border-[#e80081]/35 bg-white p-2 shadow-lg">
            <Image
              src="/mockups/listing-15-support-operations.png"
              alt="Support reliability storytelling mockup"
              width={1672}
              height={941}
              quality={100}
              unoptimized
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="absolute right-8 bottom-12 w-[44%] overflow-hidden rounded-3xl border-2 border-[#ff4f45]/40 bg-white p-2 shadow-lg">
            <Image
              src="/mockups/hero-dashboard-custom.png"
              alt="Support operations dashboard snapshot"
              width={1200}
              height={760}
              quality={100}
              unoptimized
              className="h-auto w-full rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Style08({ card }: { card: ListingMediaCard }) {
  return (
    <div className="relative h-full overflow-hidden bg-white">
      <div className="absolute inset-y-0 right-0 w-[58%] bg-gradient-to-br from-[#fff8ef] to-[#fff1f8]" />
      <div className="relative z-10 grid h-full grid-cols-[42%_58%]">
        <div className="px-14 pt-14">
          <FeatureTextBlock
            card={card}
            titleClass="mt-5 max-w-[94%] font-sans text-[64px] font-extrabold leading-[0.94] tracking-tight text-[#111827]"
            subtitleClass="mt-4 max-w-[90%] text-[34px] font-extrabold leading-[1.02] tracking-tight text-[#ff7a00]"
            bodyClass="mt-5 max-w-[94%] text-[18px] leading-[1.45] text-slate-700"
            bulletTone="bg-[#e80081]"
            maxBullets={3}
          />
        </div>

        <div className="relative p-10">
          <div className="absolute left-12 top-14 w-[72%] overflow-hidden rounded-3xl border border-black/10 bg-white p-2 shadow-lg">
            <Image
              src="/mockups/listing-16-market-targeting-controls.png"
              alt="Market and collection targeting storytelling mockup"
              width={1672}
              height={941}
              quality={100}
              unoptimized
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div className="absolute right-6 top-[28%] w-[28%] rounded-2xl border border-black/10 bg-white p-4 shadow-lg">
            <div className="mb-2 overflow-hidden rounded-lg border border-black/10">
              <Image
                src="/mockups/analytics-top-campaigns-custom-v2.png"
                alt="Segmented campaign table"
                width={1200}
                height={760}
                quality={100}
                unoptimized
                className="h-auto w-full"
              />
            </div>
            <div className="mb-2 text-xs font-semibold uppercase tracking-[0.1em] text-slate-500">Collections</div>
            {["Bestsellers", "New arrivals", "Bundles"].map((item) => (
              <div key={item} className="mb-2 flex items-center gap-2 last:mb-0">
                <span className="h-3 w-3 rounded-full bg-[#ff7a00]" />
                <span className="text-sm font-semibold text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function InspiredCard({ card, style }: { card: ListingMediaCard; style: MockupStyle }) {
  const styleMap: Record<MockupStyle, ReactElement> = {
    "style-01": <Style01 card={card} />,
    "style-02": <Style02 card={card} />,
    "style-03": <Style03 card={card} />,
    "style-04": <Style04 card={card} />,
    "style-05": <Style05 card={card} />,
    "style-06": <Style06 card={card} />,
    "style-07": <Style07 card={card} />,
    "style-08": <Style08 card={card} />,
  };

  return (
    <div
      data-card-canvas
      className="relative h-[900px] w-[1600px] overflow-hidden rounded-[28px] border border-black/10 shadow-[0_30px_70px_rgba(10,10,10,0.18)]"
    >
      {styleMap[style]}
    </div>
  );
}

export default function ListingMediaCard({ card, mode = "gallery" }: ListingMediaCardProps) {
  return (
    <article className="mx-auto w-full max-w-[1600px]" data-card-id={card.id}>
      {mode === "gallery" ? (
        <div className="mb-4 flex flex-wrap items-center gap-3 px-1 text-sm text-slate-600">
          <span className="rounded-full border border-black/10 bg-white px-3 py-1 font-semibold text-slate-800">{card.id}</span>
          <span className="font-semibold">{card.altText}</span>
        </div>
      ) : null}

      {card.mockupStyle ? <InspiredCard card={card} style={card.mockupStyle} /> : <LegacyCard card={card} />}
    </article>
  );
}
