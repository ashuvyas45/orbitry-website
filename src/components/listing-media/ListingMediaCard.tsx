import Image from "next/image";
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

function FeatureTextBlock({
  card,
  titleClass,
  subtitleClass,
  bodyClass,
  bulletTone,
  maxBullets = 3,
}: {
  card: ListingMediaCard;
  titleClass: string;
  subtitleClass: string;
  bodyClass: string;
  bulletTone: string;
  maxBullets?: number;
}) {
  return (
    <>
      <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate-500">Orbitry Upsell Features</p>
      <h2 className={titleClass}>{card.title}</h2>
      <p className={subtitleClass}>{card.subtitle}</p>
      <p className={bodyClass}>{card.benefit}</p>

      <div className="mt-6 space-y-2.5">
        {card.bullets.slice(0, maxBullets).map((bullet) => (
          <div key={bullet} className="flex items-start gap-3 text-[15px] font-medium leading-snug text-slate-700">
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
      className="relative aspect-[16/9] overflow-hidden rounded-[28px] border border-black/10 bg-[#f6f4f1] shadow-[0_30px_70px_rgba(10,10,10,0.18)]"
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
  return (
    <div className="relative h-full overflow-hidden bg-[#eff1f1]">
      <div className="absolute -left-20 bottom-[-30%] h-[78%] w-[46%] rounded-full bg-[#d9efe7]" />
      <div className="absolute right-[-8%] bottom-[-26%] h-[84%] w-[52%] rounded-full bg-[#e9cfe0]" />

      <div className="relative z-10 grid h-full grid-cols-[48%_52%]">
        <div className="px-16 pt-14">
          <FeatureTextBlock
            card={card}
            titleClass="mt-5 max-w-[95%] font-sans text-[70px] font-black leading-[0.92] tracking-tight text-black"
            subtitleClass="mt-5 max-w-[90%] text-[44px] font-black leading-[0.98] tracking-tight text-black"
            bodyClass="mt-6 max-w-[90%] text-[18px] leading-[1.45] text-slate-700"
            bulletTone="bg-[#16a085]"
            maxBullets={2}
          />
        </div>

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
      </div>
    </div>
  );
}

function Style02({ card }: { card: ListingMediaCard }) {
  return (
    <div className="relative h-full overflow-hidden bg-[#f2f2f2]">
      <div className="absolute right-0 top-0 h-full w-[52%] bg-gradient-to-b from-[#f0f4ff] to-[#f7f7f9]" />

      <div className="relative z-10 grid h-full grid-cols-[44%_56%]">
        <div className="px-16 pt-14">
          <FeatureTextBlock
            card={card}
            titleClass="mt-5 max-w-[94%] font-sans text-[74px] font-black leading-[0.9] tracking-tight text-[#1a73e8]"
            subtitleClass="mt-4 max-w-[85%] text-[58px] font-black leading-[0.92] tracking-tight text-[#111827]"
            bodyClass="mt-6 max-w-[92%] text-[18px] leading-[1.45] text-slate-700"
            bulletTone="bg-[#1a73e8]"
            maxBullets={2}
          />
        </div>

        <div className="relative px-10 pt-16">
          <div className="absolute right-8 top-10 h-[55%] w-[38%] overflow-hidden rounded-2xl border border-black/10 bg-white shadow-lg">
            <div className="h-[58%] bg-gradient-to-br from-fuchsia-200 via-rose-200 to-orange-100" />
            <div className="space-y-2 px-4 py-3">
              <Line width="w-4/5" tone="bg-[#1a73e8]" />
              <Line width="w-3/5" tone="bg-[#1a73e8]" />
              <Line width="w-2/3" />
            </div>
          </div>

          <div className="absolute left-3 top-[34%] h-[50%] w-[54%] overflow-hidden rounded-2xl border border-black/10 bg-white shadow-lg">
            <div className="relative h-[73%] bg-gradient-to-r from-indigo-200 via-violet-200 to-fuchsia-200">
              <div className="absolute left-[44%] top-[40%] h-16 w-16 rounded-full bg-red-600/95" />
              <div className="absolute left-[48.5%] top-[46%] h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-white" />
            </div>
            <div className="px-4 py-3">
              <Line width="w-4/5" tone="bg-[#1a73e8]" className="mb-2" />
              <Line width="w-2/3" />
            </div>
          </div>

          <div className="absolute left-16 top-[12%] w-[54%] rounded-2xl border border-black/10 bg-white px-4 py-3 shadow-lg">
            <div className="mb-2 flex items-center gap-3">
              <span className="h-11 w-11 rounded-full bg-[#1a73e8]" />
              <Line width="w-2/3" tone="bg-[#1a73e8]" />
            </div>
            <Line width="w-full" className="mb-2" />
            <Line width="w-5/6" />
          </div>

          <div className="absolute bottom-8 left-16 right-12 flex items-center gap-9 text-4xl font-black text-[#1a73e8]">
            <span className="text-[#34a853]">O</span>
            <span>U</span>
            <span className="text-[#ea4335]">M</span>
            <span className="text-[#fbbc05]">G</span>
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
            subtitleClass="mt-5 max-w-[90%] text-[36px] font-extrabold leading-[1.02] tracking-tight text-[#0f766e]"
            bodyClass="mt-5 max-w-[90%] text-[18px] leading-[1.45] text-slate-700"
            bulletTone="bg-[#0f766e]"
            maxBullets={3}
          />
        </div>

        <div className="relative p-10">
          <div className="absolute right-12 top-14 w-[70%] rounded-2xl border border-black/10 bg-white p-4 shadow-lg">
            <Line width="w-1/3" tone="bg-slate-800" className="mb-3" />
            <div className="grid grid-cols-3 gap-3">
              <div className="h-20 rounded-lg bg-emerald-100" />
              <div className="h-20 rounded-lg bg-sky-100" />
              <div className="h-20 rounded-lg bg-amber-100" />
            </div>
          </div>

          <div className="absolute right-24 top-[40%] flex items-center gap-3">
            <span className="h-10 w-10 rounded-full border-2 border-[#10b981]" />
            <span className="text-3xl font-black text-[#10b981]">{`>`}</span>
            <span className="h-10 w-10 rounded-full border-2 border-[#1a73e8]" />
          </div>

          <div className="absolute left-8 bottom-12 w-[76%] rounded-2xl border border-black/10 bg-white shadow-lg">
            {[0, 1, 2].map((row) => (
              <div key={row} className="grid grid-cols-[24%_58%_18%] items-center gap-3 border-b border-slate-200 px-4 py-3 last:border-b-0">
                <div className="h-12 rounded-lg bg-slate-200" />
                <div>
                  <Line width="w-5/6" className="mb-2" />
                  <Line width="w-2/3" />
                </div>
                <div className="text-center text-2xl font-bold text-[#10b981]">✓</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Style04({ card }: { card: ListingMediaCard }) {
  return (
    <div className="relative h-full overflow-hidden bg-[#f7f7fb]">
      <div className="absolute inset-y-0 right-0 w-[52%] bg-gradient-to-br from-[#ececfa] to-[#ffe9f3]" />
      <div className="relative z-10 grid h-full grid-cols-[45%_55%]">
        <div className="px-14 pt-14">
          <FeatureTextBlock
            card={card}
            titleClass="mt-5 max-w-[94%] font-sans text-[66px] font-extrabold leading-[0.92] tracking-tight text-[#111827]"
            subtitleClass="mt-4 max-w-[88%] text-[34px] font-extrabold leading-[1.03] tracking-tight text-[#d946ef]"
            bodyClass="mt-5 max-w-[90%] text-[18px] leading-[1.45] text-slate-700"
            bulletTone="bg-[#d946ef]"
            maxBullets={2}
          />
        </div>

        <div className="relative p-10">
          <div className="absolute left-10 top-14 w-[46%] rounded-3xl border border-black/10 bg-white px-5 py-4 shadow-lg">
            <Line width="w-2/3" tone="bg-slate-800" className="mb-3" />
            <div className="mb-3 flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-emerald-300" />
              <Line width="w-4/5" />
            </div>
            <div className="h-2.5 w-full rounded-full bg-slate-200">
              <div className="h-2.5 w-2/3 rounded-full bg-gradient-to-r from-amber-400 to-lime-400" />
            </div>
          </div>

          <div className="absolute right-10 top-[22%] w-[44%] rounded-3xl border border-black/10 bg-white px-5 py-4 shadow-lg">
            <Line width="w-3/5" tone="bg-slate-800" className="mb-3" />
            <div className="mb-4 grid grid-cols-2 gap-2">
              <div className="h-14 rounded-lg bg-orange-100" />
              <div className="h-14 rounded-lg bg-fuchsia-100" />
            </div>
            <button className="h-10 w-full rounded-lg bg-black text-base font-bold text-white">Unlock Gift</button>
          </div>

          <div className="absolute bottom-10 left-[18%] right-[12%] rounded-3xl border border-black/10 bg-white p-5 shadow-lg">
            <div className="mb-3 flex items-center justify-between text-base font-bold text-slate-700">
              <span>Milestone Progress</span>
              <span className="text-fuchsia-600">2 / 3</span>
            </div>
            <div className="flex gap-2">
              <div className="h-3 flex-1 rounded-full bg-emerald-300" />
              <div className="h-3 flex-1 rounded-full bg-amber-300" />
              <div className="h-3 flex-1 rounded-full bg-slate-200" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Style05({ card }: { card: ListingMediaCard }) {
  return (
    <div className="relative h-full overflow-hidden bg-[#f4f4f7]">
      <div className="absolute left-0 right-0 top-0 h-20 bg-white/60" />
      <div className="relative z-10 flex h-full flex-col">
        <div className="grid grid-cols-[44%_56%] px-12 pt-12">
          <div>
            <FeatureTextBlock
              card={card}
              titleClass="mt-5 max-w-[94%] font-sans text-[62px] font-extrabold leading-[0.95] tracking-tight text-[#111827]"
              subtitleClass="mt-4 max-w-[88%] text-[32px] font-extrabold leading-[1.03] tracking-tight text-[#2563eb]"
              bodyClass="mt-4 max-w-[92%] text-[18px] leading-[1.45] text-slate-700"
              bulletTone="bg-[#2563eb]"
              maxBullets={2}
            />
          </div>
          <div className="relative">
            <div className="absolute right-2 top-0 w-[90%] rounded-3xl border border-black/10 bg-white p-4 shadow-lg">
              <div className="mb-4 grid grid-cols-3 gap-3">
                {["Target", "Design", "Publish"].map((step, idx) => (
                  <div key={step} className="rounded-xl border border-slate-200 p-3">
                    <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-500">Step {idx + 1}</div>
                    <Line width="w-full" tone="bg-slate-800" className="mb-2" />
                    <Line width="w-2/3" />
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="h-24 rounded-xl bg-slate-100" />
                <div className="h-24 rounded-xl bg-slate-100" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid flex-1 grid-cols-3 gap-4 px-12 pb-10">
          {["Rule Builder", "Theme Controls", "Launch Flow"].map((label) => (
            <div key={label} className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm">
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">{label}</div>
              <Line width="w-4/5" tone="bg-slate-700" className="mb-2" />
              <Line width="w-full" className="mb-2" />
              <Line width="w-2/3" />
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
      <div className="absolute -left-20 top-24 h-72 w-72 rounded-full bg-sky-100" />
      <div className="absolute right-[-120px] top-8 h-80 w-80 rounded-full bg-indigo-100" />

      <div className="relative z-10 grid h-full grid-cols-[45%_55%]">
        <div className="px-14 pt-14">
          <FeatureTextBlock
            card={card}
            titleClass="mt-5 max-w-[94%] font-sans text-[64px] font-extrabold leading-[0.94] tracking-tight text-[#111827]"
            subtitleClass="mt-4 max-w-[90%] text-[34px] font-extrabold leading-[1.02] tracking-tight text-[#1d4ed8]"
            bodyClass="mt-5 max-w-[90%] text-[18px] leading-[1.45] text-slate-700"
            bulletTone="bg-[#1d4ed8]"
            maxBullets={3}
          />
        </div>

        <div className="relative p-10">
          <div className="absolute left-6 top-14 w-[78%] rounded-3xl border border-black/10 bg-white p-5 shadow-lg">
            <div className="mb-4 flex items-center justify-between">
              <Line width="w-1/3" tone="bg-slate-800" />
              <div className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">Live</div>
            </div>

            <div className="relative h-52 rounded-2xl bg-slate-50 p-4">
              <div className="absolute inset-x-4 bottom-5 flex items-end gap-3">
                {["h-12", "h-20", "h-24", "h-32", "h-40"].map((h, idx) => (
                  <div
                    key={h}
                    className={`w-10 rounded-t-md bg-gradient-to-t from-[#1d4ed8] to-[#93c5fd] ${h} ${idx === 4 ? "opacity-95" : "opacity-80"}`}
                  />
                ))}
              </div>
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 500 220" fill="none" aria-hidden>
                <path d="M20 180 C 80 120, 140 150, 200 110 C 260 70, 320 88, 390 50 C 430 30, 455 32, 480 20" stroke="#a855f7" strokeWidth="6" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          <div className="absolute right-6 top-[24%] w-[40%] rounded-2xl border border-black/10 bg-white p-4 shadow-lg">
            <Line width="w-4/5" tone="bg-slate-700" className="mb-2" />
            <Line width="w-full" className="mb-2" />
            <Line width="w-3/4" className="mb-3" />
            <div className="grid grid-cols-3 gap-2">
              <div className="h-10 rounded-lg bg-emerald-100" />
              <div className="h-10 rounded-lg bg-amber-100" />
              <div className="h-10 rounded-lg bg-rose-100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Style07({ card }: { card: ListingMediaCard }) {
  return (
    <div className="relative h-full overflow-hidden bg-[#f5f6fa]">
      <div className="absolute left-0 top-0 h-full w-[46%] bg-gradient-to-b from-white to-[#eef1f8]" />

      <div className="relative z-10 grid h-full grid-cols-[46%_54%]">
        <div className="px-14 pt-14">
          <FeatureTextBlock
            card={card}
            titleClass="mt-5 max-w-[92%] font-sans text-[62px] font-extrabold leading-[0.96] tracking-tight text-[#111827]"
            subtitleClass="mt-4 max-w-[88%] text-[34px] font-extrabold leading-[1.03] tracking-tight text-[#0f766e]"
            bodyClass="mt-5 max-w-[92%] text-[18px] leading-[1.45] text-slate-700"
            bulletTone="bg-[#0f766e]"
            maxBullets={3}
          />
        </div>

        <div className="relative p-10">
          <div className="absolute left-10 top-12 w-[40%] rounded-3xl border-2 border-[#10b981] bg-white p-4 shadow-lg">
            <div className="mb-3 flex items-center gap-2">
              <div className="h-9 w-9 rounded-full bg-slate-300" />
              <div className="flex-1">
                <Line width="w-3/4" tone="bg-slate-700" className="mb-1" />
                <Line width="w-1/2" />
              </div>
            </div>
            <Line width="w-full" className="mb-2" />
            <Line width="w-5/6" className="mb-2" />
            <Line width="w-3/5" />
          </div>

          <div className="absolute left-[34%] top-[28%] w-[50%] rounded-3xl border-2 border-[#10b981] bg-white p-4 shadow-lg">
            <div className="mb-3 flex items-center gap-2">
              <div className="h-9 w-9 rounded-full bg-slate-300" />
              <Line width="w-2/3" tone="bg-slate-700" />
            </div>
            <Line width="w-full" className="mb-2" />
            <Line width="w-4/5" className="mb-3" />
            <div className="flex gap-1 text-yellow-500">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
          </div>

          <div className="absolute right-8 bottom-12 w-[44%] rounded-3xl border-2 border-[#10b981] bg-white p-4 shadow-lg">
            <div className="mb-3 flex items-center gap-2">
              <div className="h-9 w-9 rounded-full bg-slate-300" />
              <Line width="w-2/3" tone="bg-slate-700" />
            </div>
            <Line width="w-full" className="mb-2" />
            <Line width="w-4/5" className="mb-3" />
            <div className="rounded-lg bg-emerald-50 px-3 py-2 text-sm font-bold text-emerald-700">24/7 Live</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Style08({ card }: { card: ListingMediaCard }) {
  return (
    <div className="relative h-full overflow-hidden bg-white">
      <div className="absolute inset-y-0 right-0 w-[58%] bg-gradient-to-br from-[#f7f8ff] to-[#eef3ff]" />
      <div className="relative z-10 grid h-full grid-cols-[42%_58%]">
        <div className="px-14 pt-14">
          <FeatureTextBlock
            card={card}
            titleClass="mt-5 max-w-[94%] font-sans text-[64px] font-extrabold leading-[0.94] tracking-tight text-[#111827]"
            subtitleClass="mt-4 max-w-[90%] text-[34px] font-extrabold leading-[1.02] tracking-tight text-[#16a34a]"
            bodyClass="mt-5 max-w-[94%] text-[18px] leading-[1.45] text-slate-700"
            bulletTone="bg-[#16a34a]"
            maxBullets={3}
          />
        </div>

        <div className="relative p-10">
          <div className="absolute left-12 top-14 w-[72%] rounded-3xl border border-black/10 bg-white p-5 shadow-lg">
            <div className="mb-4 flex items-center justify-between">
              <div className="text-2xl font-black text-slate-800">Market Router</div>
              <div className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">Live sync</div>
            </div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-10 w-10 rounded-full bg-emerald-500" />
              <Line width="w-4/6" tone="bg-slate-700" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {["North America", "Europe", "APAC", "Middle East"].map((region) => (
                <div key={region} className="rounded-xl border border-slate-200 p-3">
                  <div className="mb-1 text-xs font-semibold uppercase tracking-[0.1em] text-slate-500">{region}</div>
                  <Line width="w-3/4" className="mb-1" />
                  <Line width="w-1/2" />
                </div>
              ))}
            </div>
          </div>

          <div className="absolute right-6 top-[28%] w-[28%] rounded-2xl border border-black/10 bg-white p-4 shadow-lg">
            <div className="mb-2 text-xs font-semibold uppercase tracking-[0.1em] text-slate-500">Collections</div>
            {["Bestsellers", "New arrivals", "Bundles"].map((item) => (
              <div key={item} className="mb-2 flex items-center gap-2 last:mb-0">
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
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
  const styleMap: Record<MockupStyle, JSX.Element> = {
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
      className="relative aspect-[16/9] overflow-hidden rounded-[28px] border border-black/10 shadow-[0_30px_70px_rgba(10,10,10,0.18)]"
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
