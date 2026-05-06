"use client";

function StatCard({
  label,
  value,
  tone,
  icon,
}: {
  label: string;
  value: string;
  tone: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
      <div className="mb-2 flex items-center justify-between">
        <div className={`inline-flex h-7 w-7 items-center justify-center rounded-lg ${tone}`}>{icon}</div>
        <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-slate-200 text-[9px] font-bold text-slate-400">
          i
        </span>
      </div>
      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">{label}</p>
      <p className="mt-1 text-xl font-bold text-slate-800">{value}</p>
      <p className="mt-1 text-[10px] font-semibold text-emerald-500">↗ 0.0% vs last period</p>
    </div>
  );
}

function DashboardMock() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-[#f8fafc] shadow-2xl">
      <div className="border-b border-slate-200 bg-white px-4 py-3">
        <div className="flex items-center justify-between gap-2">
          <div>
            <h3 className="text-sm font-bold text-slate-800">Overview</h3>
            <p className="text-[11px] text-slate-500">Store widget enabled</p>
          </div>
          <div className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">All time</div>
        </div>
      </div>

      <div className="p-4">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          <StatCard
            label="Impressions"
            value="1,000"
            tone="bg-indigo-100 text-indigo-500"
            icon={
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            }
          />
          <StatCard
            label="Upsell Orders"
            value="20"
            tone="bg-emerald-100 text-emerald-500"
            icon={
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h2l2.1 10.2a1 1 0 001 .8h8.7a1 1 0 001-.8L20 7H7.2" />
                <circle cx="10" cy="19" r="1.2" />
                <circle cx="17" cy="19" r="1.2" />
              </svg>
            }
          />
          <StatCard
            label="Conversion"
            value="3.4%"
            tone="bg-amber-100 text-amber-500"
            icon={
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
              </svg>
            }
          />
          <StatCard
            label="Added Revenue"
            value="$472"
            tone="bg-fuchsia-100 text-fuchsia-500"
            icon={
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M16 7.5c0-1.7-1.8-3-4-3s-4 1.3-4 3 1.8 3 4 3 4 1.3 4 3-1.8 3-4 3-4-1.3-4-3" />
              </svg>
            }
          />
        </div>

        <div className="mt-4 grid gap-3 lg:grid-cols-[1.65fr_1fr]">
          <div className="rounded-xl border border-slate-200 bg-white p-3">
            <div className="mb-3 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-slate-700">Revenue Growth</p>
                <p className="text-[10px] text-slate-500">Daily additional revenue generated through Orbitry.</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-semibold text-slate-500">6 Apr - 7 May</p>
                <p className="text-[10px] font-bold text-indigo-600">AOV $472.00</p>
              </div>
            </div>
            <div className="relative h-36 overflow-hidden rounded-lg border border-slate-100 bg-slate-50">
              <svg viewBox="0 0 600 180" className="h-full w-full">
                <line x1="0" y1="145" x2="600" y2="145" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="6 6" />
                <line x1="0" y1="110" x2="600" y2="110" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 6" />
                <line x1="0" y1="75" x2="600" y2="75" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 6" />
                <line x1="0" y1="40" x2="600" y2="40" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 6" />
                <text x="4" y="145" fontSize="10" fill="#94a3b8">$0</text>
                <text x="4" y="110" fontSize="10" fill="#94a3b8">$150</text>
                <text x="4" y="75" fontSize="10" fill="#94a3b8">$300</text>
                <text x="4" y="40" fontSize="10" fill="#94a3b8">$450</text>
                <path d="M26 140 C140 136,220 126,300 112 C370 100,430 92,495 82 C525 77,548 67,566 46" fill="none" stroke="#6366f1" strokeWidth="3" />
                <path d="M26 140 C140 136,220 126,300 112 C370 100,430 92,495 82 C525 77,548 67,566 46 V180 H26 Z" fill="url(#chart-fill)" opacity="0.35" />
                <path d="M26 143 C140 140,230 134,316 126 C392 118,462 104,566 86" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeDasharray="5 5" />
                <circle cx="566" cy="46" r="5" fill="#6366f1" />
                <circle cx="566" cy="46" r="10" fill="#6366f1" fillOpacity="0.12" />
                <defs>
                  <linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#a5b4fc" />
                    <stop offset="1" stopColor="#e0e7ff" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute bottom-12 right-8 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-md">
                <p className="text-[10px] font-semibold text-slate-700">May 4</p>
                <div className="mt-1 flex items-center gap-2 text-[10px]">
                  <span className="h-[2px] w-4 bg-indigo-500" />
                  <span className="text-slate-600">May 4</span>
                  <span className="ml-3 font-bold text-slate-800">$472.00</span>
                </div>
                <div className="mt-1 flex items-center gap-2 text-[10px]">
                  <span className="h-[2px] w-4 border-t-2 border-emerald-500 border-dashed" />
                  <span className="text-slate-600">Apr 3</span>
                  <span className="ml-3 font-bold text-slate-800">$400.00</span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-3">
            <h4 className="mb-3 text-sm font-bold text-slate-800">Top Campaigns</h4>
            <div className="space-y-2 text-xs">
              {[
                { name: "Weekend Bundle Boost", rate: "7.7%" },
                { name: "Spring Cart Cross-Sell", rate: "2.4%" },
                { name: "Shoe Care Add-On", rate: "1.2%" },
                { name: "VIP Checkout Upsell", rate: "0.8%" },
              ].map((campaign, idx) => (
                <div key={campaign.name} className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50 px-2 py-1.5">
                  <div className="flex items-center gap-2">
                    <span
                      className={`h-5 w-1 rounded-full ${
                        idx === 0 ? "bg-emerald-500" : idx === 1 ? "bg-indigo-500" : idx === 2 ? "bg-amber-500" : "bg-pink-500"
                      }`}
                    />
                    <span className="font-semibold text-slate-700">{campaign.name}</span>
                  </div>
                  <span className="font-bold text-slate-500">{campaign.rate}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WidgetOverlayLeft() {
  return (
    <div className="rounded-xl border border-[#fda4af] bg-white p-3 text-[10px] text-slate-800 shadow-xl">
      <div className="mb-2 flex items-center justify-between text-[9px] font-bold uppercase tracking-[0.1em]">
        <span>Bundle & Save</span>
        <span className="rounded-full bg-orange-500 px-2 py-0.5 text-white">Best Value</span>
      </div>
      <div className="space-y-2">
        <div className="rounded-md border-2 border-[#e80081] p-2">
          <div className="flex items-center justify-between font-semibold">
            <span>Buy 2</span>
            <span>$72.00</span>
          </div>
          <p className="text-[9px] text-slate-500">You save 10%</p>
        </div>
      </div>
    </div>
  );
}

function WidgetOverlayRight() {
  const products = [
    {
      name: "Velvet Matte Lipstick",
      price: "$29.00",
      oldPrice: "$34.00",
      image: "/mockups/curated-lipstick.jpg",
    },
    {
      name: "Radiant Skin Foundation",
      price: "$48.00",
      oldPrice: "$56.00",
      image: "/mockups/curated-foundation.jpg",
    },
    {
      name: "Hydra Glow Face Cream",
      price: "$39.00",
      oldPrice: "$45.00",
      image: "/mockups/curated-cream.jpg",
    },
  ];

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-3 text-[10px] text-slate-800 shadow-xl">
      <div className="mb-2 flex items-center justify-between font-semibold">
        <span>Curated Pack</span>
        <span className="rounded-full bg-slate-900 px-2 py-0.5 text-[9px] text-white">10% OFF</span>
      </div>
      <div className="space-y-2">
        {products.map((product, idx) => (
          <div key={product.name} className="grid grid-cols-[44px_minmax(0,1fr)_72px] items-center gap-2 rounded-md border border-slate-200 p-1.5">
            <div
              className="h-8 rounded border border-slate-200"
              style={{
                backgroundImage: `url('${product.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="min-w-0">
              <p className="truncate text-[9px] font-semibold">{product.name}</p>
              <p className="mt-1 text-[9px] text-slate-500">Curated beauty pick</p>
            </div>
            <div className="text-right whitespace-nowrap">
              <p className="font-bold leading-none">{product.price}</p>
              <p className="mt-0.5 text-[9px] text-slate-400 line-through">{product.oldPrice}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-2 flex items-center justify-between border-t border-slate-200 pt-2 text-[10px] font-semibold">
        <span>Total (3 items)</span>
        <span>$116.00</span>
      </div>
    </div>
  );
}

function LiveActivityOverlay() {
  const events = [
    { product: "VELVET MATTE LIPSTICK", amount: "+29.00 USD", type: "Upsell" },
    { product: "RADIANT SKIN FOUNDATION", amount: "+48.00 USD", type: "Upsell" },
    { product: "HYDRA GLOW FACE CREAM", amount: "+39.00 USD", type: "Cross-sell" },
    { product: "Makeup Brush Set", amount: "+18.00 USD", type: "Upsell" },
  ];

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-3 text-[10px] text-slate-800 shadow-xl">
      <div className="mb-2 flex items-center gap-2">
        <h4 className="text-sm font-bold text-slate-800">Live Activity</h4>
        <span className="h-2 w-2 rounded-full bg-emerald-500 animate-live-pulse" />
      </div>
      <div className="space-y-2">
        {events.map((event) => (
          <div key={`${event.product}-${event.amount}`} className="flex items-start justify-between rounded-lg border border-slate-100 bg-slate-50 px-2 py-1.5">
            <div>
              <p className="text-[10px] font-semibold text-slate-800">{event.product}</p>
              <p className="text-[10px] text-slate-500">just now</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] font-bold text-slate-800">{event.amount}</p>
              <p className="text-[10px] text-slate-500">{event.type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] w-full overflow-hidden bg-[#fafaf9]">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[10%] h-[70vw] w-[70vw] rounded-full bg-gradient-to-b from-orange-100/70 to-pink-200/60 blur-[120px] transform rotate-12 animate-pulse-glow" style={{ animationDuration: "8s" }} />
        <div className="absolute top-[40%] -left-[10%] h-[50vw] w-[50vw] rounded-full bg-gradient-to-tr from-orange-50/80 to-pink-100/60 blur-[100px]" />

        <div
          className="absolute inset-0 opacity-[0.015] mix-blend-multiply"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-[1400px] flex-col lg:flex-row items-center px-6 lg:px-12 xl:px-20 pt-32 pb-20 lg:pt-0 lg:pb-0">
        <div className="flex w-full flex-col justify-center lg:w-[50%] z-20">
          <div className="max-w-xl">
            <h1 className="mb-6 font-serif text-[3.25rem] sm:text-[4.5rem] leading-[0.95] tracking-tight text-gray-900 md:text-[5.5rem] lg:text-[6.5rem] animate-fade-in-up" style={{ animationDelay: "150ms" }}>
              Unlock your <br />
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 pb-2">
                revenue
                <svg className="absolute w-full h-4 -bottom-1 left-0 text-orange-300/50" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="animate-pulse" />
                </svg>
              </span>
              <br />
              potential.
            </h1>

            <p className="mb-12 max-w-lg text-lg sm:text-xl text-gray-600 leading-relaxed font-light animate-fade-in-up" style={{ animationDelay: "250ms" }}>
              Seamless checkout upsells, dynamic bundle deals, and quantity breaks that instantly increase your average order value.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 animate-fade-in-up" style={{ animationDelay: "350ms" }}>
              <a
                href="#apps"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("apps")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group relative inline-flex h-14 items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 px-8 font-semibold text-white shadow-xl shadow-pink-600/25 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-pink-600/30 active:translate-y-0 cursor-pointer"
              >
                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-150%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(150%)]">
                  <div className="relative h-full w-8 bg-white/20" />
                </div>
                <span className="relative z-10 text-base tracking-wide">Explore app</span>
                <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition-transform group-hover:translate-x-1">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </a>

              <div className="flex items-center gap-4 text-sm font-medium text-gray-500">
                <div className="flex -space-x-2">
                  <div className="h-8 w-8 rounded-full border-2 border-[#fafaf9] bg-gradient-to-tr from-orange-400 to-pink-500" />
                  <div className="h-8 w-8 rounded-full border-2 border-[#fafaf9] bg-gradient-to-tr from-amber-400 to-orange-400" />
                  <div className="h-8 w-8 rounded-full border-2 border-[#fafaf9] bg-gradient-to-tr from-emerald-400 to-teal-400" />
                </div>
                <span>Trusted by 90k+ brands</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[50%] relative z-10 mt-12 lg:mt-0">
          <div className="relative mx-auto w-full max-w-[860px]">
            <DashboardMock />

            <div className="absolute -left-8 -bottom-8 hidden w-[38%] md:block animate-float">
              <WidgetOverlayLeft />
            </div>

            <div className="absolute -right-6 top-8 hidden w-[42%] lg:block animate-float-reverse">
              <WidgetOverlayRight />
            </div>

            <div className="absolute -right-8 -bottom-10 hidden w-[44%] xl:block animate-float-delayed">
              <LiveActivityOverlay />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
