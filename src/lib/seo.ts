export const SITE_NAME = "OrbitryHub";
export const SITE_TITLE = "OrbitryHub - Shopify Upsell Apps for Growing Your Revenue";
export const SITE_DESCRIPTION =
  "Supercharge your Shopify store with Orbitry upsell apps. Increase AOV with bundle deals, quantity breaks, and cross-sell offers.";

const FALLBACK_SITE_URL = "https://orbitry.com";

export function getSiteUrl(): string {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    FALLBACK_SITE_URL;
  return raw.endsWith("/") ? raw.slice(0, -1) : raw;
}

export function toAbsoluteUrl(path: string): string {
  const siteUrl = getSiteUrl();
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}
