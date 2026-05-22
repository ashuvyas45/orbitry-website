export type ListingMediaCardId =
  | "01-overview"
  | "02-volume"
  | "03-bundles"
  | "04-gifts-upsell"
  | "05-campaign-builder"
  | "06-analytics"
  | "07-support"
  | "08-targeting"
  | "09-overview-split"
  | "10-volume-focus"
  | "11-bundles-curated"
  | "12-gifts-milestones"
  | "13-builder-speed"
  | "14-analytics-story"
  | "15-support-trust"
  | "16-targeting-markets";

export type VisualLayer = {
  src: string;
  alt: string;
  className: string;
};

export type MockupStyle =
  | "style-01"
  | "style-02"
  | "style-03"
  | "style-04"
  | "style-05"
  | "style-06"
  | "style-07"
  | "style-08";

export type ListingMediaCard = {
  id: ListingMediaCardId;
  title: string;
  subtitle: string;
  benefit: string;
  bullets: string[];
  altText: string;
  compliance: string[];
  layers: VisualLayer[];
  mockupStyle?: MockupStyle;
};

export const LISTING_MEDIA_CARDS: ListingMediaCard[] = [
  {
    id: "01-overview",
    title: "All your upsell engines in one app",
    subtitle: "Launch high-converting offer journeys without plugin sprawl.",
    benefit:
      "Orbitry combines volume deals, bundles, gifts, targeting, and analytics in one operational workflow so teams can ship faster and stay consistent.",
    bullets: [
      "Volume deals: quantity breaks and Buy X Get Y",
      "Bundle deals: curated bundles and frequently bought together",
      "Deal upsell, deal gifts, and progressive gift milestones",
      "Collection-based rules and market-specific campaigns",
      "Fully customizable widgets with analytics visibility",
    ],
    altText:
      "Orbitry listing overview card showing multiple offer widgets and dashboard previews for a unified upsell workflow.",
    compliance: ["UI-focused", "No pricing language", "No guarantees"],
    layers: [
      {
        src: "/mockups/dashboard-overview.png",
        alt: "Orbitry dashboard overview",
        className:
          "absolute right-6 top-8 z-10 w-[44%] rounded-2xl border border-black/5 bg-white p-2 shadow-xl",
      },
      {
        src: "/mockups/widget-bundle-save.png",
        alt: "Bundle save widget",
        className:
          "absolute left-10 top-10 z-20 w-[52%] rounded-2xl border border-black/5 bg-white p-2 shadow-2xl",
      },
      {
        src: "/mockups/widget-buyxgety.png",
        alt: "Buy X Get Y offer",
        className:
          "absolute bottom-10 left-[36%] z-30 w-[38%] rounded-2xl border border-black/5 bg-white p-2 shadow-2xl",
      },
    ],
  },
  {
    id: "02-volume",
    title: "Volume deals that are easy to understand",
    subtitle: "Move shoppers from single item to multi-unit purchase.",
    benefit:
      "Clear quantity break ladders and Buy X Get Y logic help merchants present strong value without adding checkout friction.",
    bullets: [
      "Set 2+ quantity tiers with clear savings labels",
      "Configure Buy X Get Y with flexible product mapping",
      "Control labels, badges, and urgency text by campaign",
      "Show shopper-friendly choices directly in widget",
    ],
    altText:
      "Volume deals card showing quantity break widget and Buy X Get Y configuration mockup for merchant setup and shopper display.",
    compliance: ["Feature-first", "No ROI claims", "Unique visual"],
    layers: [
      {
        src: "/mockups/widget-bundle-save.png",
        alt: "Quantity break setup",
        className:
          "absolute left-10 top-10 z-20 w-[50%] rounded-2xl border border-black/5 bg-white p-2 shadow-2xl",
      },
      {
        src: "/mockups/widget-buyxgety.png",
        alt: "Buy X Get Y widget",
        className:
          "absolute right-10 bottom-10 z-30 w-[42%] rounded-2xl border border-black/5 bg-white p-2 shadow-2xl",
      },
    ],
  },
  {
    id: "03-bundles",
    title: "Bundle offers for curated and FBT journeys",
    subtitle: "Guide shoppers to compatible product combinations.",
    benefit:
      "Merchants can run curated bundles and frequently bought together recommendations from one workflow, then adapt placement by theme section.",
    bullets: [
      "Build fixed curated bundles with clear composition",
      "Run frequently bought together blocks by intent",
      "Add-all purchase flow with low decision friction",
      "Reusable bundle logic across product collections",
    ],
    altText:
      "Bundle deals card with curated bundle preview and frequently bought together widget examples displayed side by side.",
    compliance: ["Merchant clarity", "No pricing callouts", "UI-centric"],
    layers: [
      {
        src: "/mockups/widget-curated-pack.png",
        alt: "Curated bundle widget",
        className:
          "absolute left-10 top-10 z-20 w-[48%] rounded-2xl border border-black/5 bg-white p-2 shadow-2xl",
      },
      {
        src: "/mockups/widget-fbt-progress.png",
        alt: "Frequently bought together widget",
        className:
          "absolute right-8 bottom-10 z-30 w-[44%] rounded-2xl border border-black/5 bg-white p-2 shadow-2xl",
      },
    ],
  },
  {
    id: "04-gifts-upsell",
    title: "Gifts and upsells in one conversion stack",
    subtitle: "Reward larger carts while keeping offer logic simple.",
    benefit:
      "Deal gifts, progressive gift thresholds, and upsell prompts can be orchestrated together to raise perceived value and improve shopper momentum.",
    bullets: [
      "Configure free gift qualification states",
      "Add progressive milestones for higher cart intent",
      "Layer targeted upsell prompts without clutter",
      "Choose where each offer type appears in journey",
    ],
    altText:
      "Deal gifts and upsell card showing free gift thresholds, progressive milestones, and upsell widgets.",
    compliance: ["No testimonials", "No guarantees", "Distinct state visuals"],
    layers: [
      {
        src: "/mockups/app-free-gifts.png",
        alt: "Free gift configuration",
        className:
          "absolute left-10 top-10 z-20 w-[52%] rounded-2xl border border-black/5 bg-white p-2 shadow-2xl",
      },
      {
        src: "/mockups/widget-buyxgety.png",
        alt: "Deal upsell widget",
        className:
          "absolute right-10 top-20 z-30 w-[36%] rounded-2xl border border-black/5 bg-white p-2 shadow-2xl",
      },
      {
        src: "/mockups/widget-fbt-progress.png",
        alt: "Progress milestone indicator",
        className:
          "absolute bottom-10 right-[26%] z-10 w-[34%] rounded-2xl border border-black/5 bg-white p-2 shadow-xl",
      },
    ],
  },
  {
    id: "05-campaign-builder",
    title: "Campaign builder for rapid launch and control",
    subtitle: "Ship, test, and iterate campaigns without engineering cycles.",
    benefit:
      "Campaign creation is structured for speed while preserving advanced controls for styling, eligibility, and scheduling across offer types.",
    bullets: [
      "Guided campaign flow from targeting to publish",
      "Granular customization for labels, badges, and copy",
      "Preview-first workflow to reduce setup mistakes",
      "Reusable campaign structure for team consistency",
    ],
    altText:
      "Campaign builder card with setup wizard and design customization panel for offer campaigns.",
    compliance: ["High legibility", "Feature explanation", "No unsupported stats"],
    layers: [
      {
        src: "/mockups/app-setup-minutes.png",
        alt: "Campaign setup workflow",
        className:
          "absolute left-10 top-10 z-20 w-[50%] rounded-2xl border border-black/5 bg-white p-2 shadow-2xl",
      },
      {
        src: "/mockups/app-customize-brand.png",
        alt: "Customization controls",
        className:
          "absolute right-10 bottom-12 z-30 w-[40%] rounded-2xl border border-black/5 bg-white p-2 shadow-2xl",
      },
    ],
  },
  {
    id: "06-analytics",
    title: "Analytics that support faster decisions",
    subtitle: "See campaign contribution clearly across your upsell stack.",
    benefit:
      "Use performance dashboards to compare offer behavior, track contribution trends, and prioritize optimization based on observed campaign outcomes.",
    bullets: [
      "Campaign-level tracking in one dashboard",
      "Trend and contribution visibility over time",
      "Identify top-performing offer formats",
      "Share operational reporting with teams",
    ],
    altText:
      "Analytics card showing Orbitry dashboard overview and trend analysis views for campaign performance.",
    compliance: ["No guaranteed outcome language", "Dashboard-first visual", "Unique scene"],
    layers: [
      {
        src: "/mockups/dashboard-analytics.png",
        alt: "Analytics dashboard",
        className:
          "absolute left-10 top-10 z-20 w-[54%] rounded-2xl border border-black/5 bg-white p-2 shadow-2xl",
      },
      {
        src: "/mockups/app-track-performance.png",
        alt: "Campaign performance panel",
        className:
          "absolute right-10 bottom-12 z-30 w-[40%] rounded-2xl border border-black/5 bg-white p-2 shadow-2xl",
      },
    ],
  },
  {
    id: "07-support",
    title: "24/7 support when campaigns need attention",
    subtitle: "Get help across setup, optimization, and troubleshooting.",
    benefit:
      "Merchants can rely on always-available support coverage so upsell programs remain stable during launches, promos, and peak demand periods.",
    bullets: [
      "Always-on support availability",
      "Setup and migration assistance",
      "Optimization guidance for live campaigns",
      "Fast response workflows for urgent issues",
    ],
    altText:
      "Support card highlighting 24/7 merchant support with help center and campaign assistance context.",
    compliance: ["Benefit-led copy", "No testimonials", "No sensitive data"],
    layers: [
      {
        src: "/mockups/app-stats-strip.png",
        alt: "Operations and support snapshot",
        className:
          "absolute left-12 top-14 z-20 w-[48%] rounded-2xl border border-black/5 bg-white p-2 shadow-2xl",
      },
      {
        src: "/mockups/app-setup-minutes.png",
        alt: "Support-oriented onboarding flow",
        className:
          "absolute right-10 bottom-12 z-30 w-[40%] rounded-2xl border border-black/5 bg-white p-2 shadow-2xl",
      },
    ],
  },
  {
    id: "08-targeting",
    title: "Advanced targeting by collection and market",
    subtitle: "Run localized campaigns with precise merchandising control.",
    benefit:
      "Collection-based rules and market-specific campaign settings help teams tailor offer logic to catalog structure, customer context, and regional strategy.",
    bullets: [
      "Collection-level eligibility controls",
      "Market-specific campaign visibility settings",
      "Segmented experience by region and catalog",
      "Centralized governance for targeting logic",
    ],
    altText:
      "Targeting card showing collection-based campaign settings and market-specific configuration controls.",
    compliance: ["No price claims", "No guarantees", "Feature-focused"],
    layers: [
      {
        src: "/mockups/app-bundle-discounts.png",
        alt: "Collection campaign setup",
        className:
          "absolute left-10 top-10 z-20 w-[52%] rounded-2xl border border-black/5 bg-white p-2 shadow-2xl",
      },
      {
        src: "/mockups/app-customize-brand.png",
        alt: "Market-specific settings",
        className:
          "absolute right-10 bottom-12 z-30 w-[40%] rounded-2xl border border-black/5 bg-white p-2 shadow-2xl",
      },
    ],
  },
  {
    id: "09-overview-split",
    title: "More offers. More lift. More control.",
    subtitle: "The Complete Shopify Bundle & Upsell App",
    benefit: "",
    bullets: [
      "Quantity & Volume Bundles",
      "Buy X Get Y Offers",
      "Frequently Bought Together",
      "Curated Product Bundles",
      "Upsell Deals & Free Gifts",
      "Progressive Gift Unlocks",
      "Fully Customizable Widgets",
    ],
    altText: "Orbitry split-layout overview with bold left messaging and right-side product offer interface composition.",
    compliance: ["High clarity", "No hard claims", "Unique composition"],
    layers: [],
    mockupStyle: "style-01",
  },
  {
    id: "10-volume-focus",
    title: "Turn quantity intent into larger carts",
    subtitle: "Quantity breaks and Buy X Get Y in one clear flow.",
    benefit:
      "Highlights pricing tiers and product-pair logic in a format merchants can scan quickly while keeping setup decisions straightforward.",
    bullets: [
      "Tiered quantity break presentation",
      "Buy X Get Y with product-mapping flexibility",
      "Clean hierarchy for fast merchant scanning",
      "Reusable templates for repeatable launches",
    ],
    altText: "Volume-focused card featuring quantity break setup and Buy X Get Y widget in a simplified, bold app-store style.",
    compliance: ["No guaranteed outcomes", "UI-centered", "Listing-safe copy"],
    layers: [],
    mockupStyle: "style-02",
  },
  {
    id: "11-bundles-curated",
    title: "Curated bundles that feel native",
    subtitle: "Curated bundles and FBT journeys with less friction.",
    benefit:
      "Emphasizes compatibility context and add-all flow clarity so bundle experiences stay intuitive for both teams and shoppers.",
    bullets: [
      "Curated bundle blocks for key collections",
      "Frequently bought together recommendations",
      "Add-all UX patterns for faster checkout",
      "Composable layouts for mobile and desktop",
    ],
    altText: "Bundle-focused marketing card with curated offers and frequently bought together blocks layered in a premium clean composition.",
    compliance: ["Merchant-friendly", "No testimonial blocks", "No price-led headline"],
    layers: [],
    mockupStyle: "style-03",
  },
  {
    id: "12-gifts-milestones",
    title: "Delight shoppers with gift milestones",
    subtitle: "Smart gift milestones and upsells without clutter.",
    benefit:
      "Presents progressive gift states and upsell timing in a simple visual narrative that keeps the journey easy to understand.",
    bullets: [
      "Free gift thresholds with clear states",
      "Progress milestones to encourage higher cart value",
      "Upsell prompts integrated with gift logic",
      "Simple controls for merchandising teams",
    ],
    altText: "Gift milestone card showing free gift thresholds, upsell prompts, and progress states in a storytelling layout.",
    compliance: ["Feature-led", "No ROI guarantees", "Distinct scene"],
    layers: [],
    mockupStyle: "style-04",
  },
  {
    id: "13-builder-speed",
    title: "Build campaigns in minutes, not weeks",
    subtitle: "From targeting to design tweaks in one workflow.",
    benefit:
      "Focuses on launch velocity with a guided setup path that helps teams move from idea to live campaign with less back-and-forth.",
    bullets: [
      "Guided setup and rule-builder progression",
      "Theme-aware visual customization controls",
      "Preview and publish workflow",
      "Reusable campaign structure for teams",
    ],
    altText: "Campaign builder card with setup wizard and branding customization in a crisp two-panel composition.",
    compliance: ["No exaggerated claims", "UI-first", "Clear hierarchy"],
    layers: [],
    mockupStyle: "style-05",
  },
  {
    id: "14-analytics-story",
    title: "See what works, then scale it",
    subtitle: "Revenue context designed for faster campaign decisions.",
    benefit:
      "Combines growth trends, contribution signals, and campaign comparison views so teams can prioritize the next optimization step with confidence.",
    bullets: [
      "Campaign contribution trend visibility",
      "Single dashboard for upsell performance",
      "Compare offer formats over time",
      "Operational reporting for growth teams",
    ],
    altText: "Analytics storytelling card combining trend dashboard and campaign contribution view in a professional app-store layout.",
    compliance: ["No guaranteed results", "Chart-led visuals", "Readable contrast"],
    layers: [],
    mockupStyle: "style-06",
  },
  {
    id: "15-support-trust",
    title: "24/7 support, whenever campaigns move",
    subtitle: "Get reliable help during launches and peak traffic.",
    benefit:
      "Reinforces coverage, responsiveness, and operational visibility so merchants can keep campaigns stable during high-pressure moments.",
    bullets: [
      "Always-on support availability",
      "Onboarding and migration guidance",
      "Optimization help for live campaigns",
      "Escalation paths for urgent issues",
    ],
    altText: "Support trust card showing always-on merchant support context with onboarding and performance assistance visuals.",
    compliance: ["No testimonials", "No outcome promises", "Merchant trust framing"],
    layers: [],
    mockupStyle: "style-07",
  },
  {
    id: "16-targeting-markets",
    title: "Target by collection and market",
    subtitle: "Localize campaigns without duplicating setup work.",
    benefit:
      "Shows how collection logic and market controls can be orchestrated from one control surface while preserving regional merchandising flexibility.",
    bullets: [
      "Collection-based configuration rules",
      "Market-specific visibility and logic",
      "Localized merchandising strategies",
      "Centralized targeting governance",
    ],
    altText: "Targeting controls card with collection-based settings and market-specific campaign orchestration interfaces.",
    compliance: ["No pricing callouts", "Feature-forward", "Listing-safe messaging"],
    layers: [],
    mockupStyle: "style-08",
  },
];

export const LISTING_MEDIA_CARD_IDS: ListingMediaCardId[] = LISTING_MEDIA_CARDS.map((card) => card.id);
