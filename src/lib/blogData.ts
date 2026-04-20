export type ContentBlock = 
  | { type: 'paragraph', text: string }
  | { type: 'h2', text: string }
  | { type: 'h3', text: string }
  | { type: 'youtube', url: string, caption?: string };

export type Metrics = {
  value1: string;
  label1: string;
  value2: string;
  label2: string;
};

export type BlogPost = {
  id: number;
  slug: string;
  type: 'solution' | 'informative' | 'tutorial' | 'case-study';
  title: string;
  category: string;
  date: string;
  desc: string;
  symptom?: string;
  cure?: string;
  roi?: string;
  author?: string;
  gradient: string;
  featured: boolean;
  content: ContentBlock[];
  metrics?: Metrics;
  companyName?: string;
};

export const BLOG_POSTS: BlogPost[] = [
  { 
    id: 1, 
    slug: 'reducing-cac-cross-sells',
    type: 'solution', 
    title: 'Reducing CAC with Cross-Sells', 
    category: 'Growth', 
    date: 'Mar 23, 2024', 
    desc: 'Learn how to significantly reduce customer acquisition costs using targeted post-purchase cross-sells.', 
    symptom: 'High CAC', 
    cure: 'Post-Purchase Upsells', 
    roi: '↓ 15% CAC', 
    author: 'Anthony Lin', 
    gradient: 'from-blue-100 to-indigo-100', 
    featured: true,
    content: [
      { type: 'paragraph', text: 'Customer Acquisition Cost (CAC) is skyrocketing across all paid channels. Relying purely on top-of-funnel conversion is no longer sufficient.' },
      { type: 'h2', text: 'The Mechanics of Post-Purchase' },
      { type: 'paragraph', text: 'By introducing highly relevant cross-sells immediately after the initial checkout, merchants are able to dramatically increase their Average Order Value (AOV) without spending an extra dime on ads.' },
      { type: 'h3', text: 'Actionable Steps' },
      { type: 'paragraph', text: '1. Identify your most commonly bought together products.\n2. Create a one-click native Shopify post-purchase offer.\n3. Measure your uplift.' }
    ]
  },
  { 
    id: 2, 
    slug: 'future-ai-ecommerce', 
    type: 'informative', 
    title: 'The Future of AI in eCommerce', 
    category: 'Technology', 
    date: 'Mar 20, 2024', 
    desc: 'Explore how machine learning is revolutionizing store optimization by enabling smarter and faster testing.', 
    author: 'Monica Rivers', 
    gradient: 'from-fuchsia-100 to-rose-100', 
    featured: true, 
    content: [
      { type: 'paragraph', text: 'Ecommerce entrepreneurs spent thousands of dollars testing products before finding profitable winners.' },
      { type: 'h2', text: 'Machine Learning Models' },
      { type: 'paragraph', text: 'By allowing algorithms to run A/B tests continuously, merchants are finding micro-optimizations that humans simply cannot deduce.' }
    ] 
  },
  { 
    id: 3, 
    slug: 'optimizing-checkout-flow',
    type: 'tutorial', 
    title: 'Optimizing Your Checkout Flow Step-by-Step', 
    category: 'Design', 
    date: 'Mar 18, 2024', 
    desc: 'A guide to uncovering friction points in your checkout and removing them completely.', 
    author: 'John Matthews', 
    gradient: 'from-amber-100 to-orange-100', 
    featured: false,
    content: [
      { type: 'paragraph', text: 'The checkout flow is the most critical juncture in your eCommerce funnel. Even a 1% improvement here yields massive returns.' },
      { type: 'youtube', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', caption: 'Watch our full teardown of a successful checkout flow.' },
      { type: 'h2', text: 'Step 1: Simplify the Forms' },
      { type: 'paragraph', text: 'Force your team to justify every single input field in your checkout. If you don\'t need their phone number, do not ask for it.' }
    ]
  },
  { 
    id: 4, 
    slug: 'unconventional-bundle-pricing', 
    type: 'solution', 
    title: 'Unconventional Bundle Pricing', 
    category: 'Strategy', 
    date: 'Mar 15, 2024', 
    desc: 'We tested 50 different bundle pricing models. Here is what we found about consumer psychology.', 
    symptom: 'Low AOV', 
    cure: 'Dynamic Bundles', 
    roi: '↑ $15 AOV', 
    author: 'David Kim', 
    gradient: 'from-emerald-100 to-teal-100', 
    featured: false, 
    content: [
      { type: 'paragraph', text: 'Bundling is common, but smart bundling is rare. Stop offering linear discounts and start building perceived extreme value.' }
    ] 
  },
  {
    id: 5,
    slug: 'how-axzenia-boosted-aov',
    type: 'case-study',
    title: 'How Axzenia Boosted their AOV by 23% and Generated $109,800 in Additional Revenue',
    category: 'Case Study',
    date: 'Mar 12, 2024',
    desc: 'A deep dive into how a leading lifestyle brand revolutionized their approach and shattered revenue ceilings.',
    author: 'James Rodriguez',
    gradient: 'from-cyan-100 to-blue-100',
    featured: false,
    companyName: 'Axzenia',
    metrics: {
      value1: '23%', label1: 'Increased Average Order Value',
      value2: '$109,800', label2: 'Additional Revenue Generated'
    },
    content: [
      { type: 'h2', text: 'Introduction' },
      { type: 'paragraph', text: 'Axzenia, under the leadership of Founder & CEO Shahed Tanveer, has harnessed the power of our app to significantly enhance its average order value (AOV) and drive impressive revenue growth, all without the need for complex coding or external development resources.' },
      { type: 'h2', text: 'The Challenge' },
      { type: 'paragraph', text: 'Before discovering Orbitry, Axzenia struggled with stagnant order values. Customers would often purchase a single item, unaware of complementary products that would enhance their experience.' },
      { type: 'h2', text: 'The Solution' },
      { type: 'paragraph', text: 'By implementing native bundle quantities and cart-drawer upsells, they presented customers with irresistible offers exactly when their purchasing intent was highest.' }
    ]
  },
  { id: 6, slug: 'continuous-cro', type: 'solution', title: 'Continuous CRO', category: 'Marketing', date: 'Mar 10, 2024', desc: 'Stop relying on one-off site redesigns. Learn the framework for continuous high velocity testing.', symptom: 'Low Conversion', cure: 'Continuous Testing', roi: '↑ 2x CVR', author: 'Laura Jenkins', gradient: 'from-lime-100 to-green-100', featured: false, content: [{ type: 'paragraph', text: 'CRO never stops.' }] },
  { id: 7, slug: 'zero-defects-qa', type: 'tutorial', title: 'Zero Defects! Setting up QA', category: 'Engineering', date: 'Mar 8, 2024', desc: 'How our engineering team prevents visual bugs from making it to your storefront using end-to-end checks.', author: 'Priya Sharma', gradient: 'from-purple-100 to-pink-100', featured: false, content: [{ type: 'paragraph', text: 'QA is vital.' }] },
  { id: 8, slug: 'scale-black-friday', type: 'informative', title: 'Scale Black Friday 2024', category: 'Growth', date: 'Mar 5, 2024', desc: 'Building scalable strategies for the biggest shopping weekend of the year without crashing.', author: 'Mark Thompson', gradient: 'from-slate-100 to-gray-200', featured: false, content: [{ type: 'paragraph', text: 'Be ready for traffic.' }] }
];
