import { chromium } from "playwright";
import fs from "node:fs/promises";
import path from "node:path";

const CARD_IDS = [
  "01-overview",
  "02-volume",
  "03-bundles",
  "04-gifts-upsell",
  "05-campaign-builder",
  "06-analytics",
  "07-support",
  "08-targeting",
  "09-overview-split",
  "10-volume-focus",
  "11-bundles-curated",
  "12-gifts-milestones",
  "13-builder-speed",
  "14-analytics-story",
  "15-support-trust",
  "16-targeting-markets",
];

const BASE_URL = process.env.LISTING_MEDIA_BASE_URL ?? "http://127.0.0.1:3000";
const OUTPUT_DIR = process.env.LISTING_MEDIA_OUTPUT_DIR ?? "public/listing-media";

async function run() {
  const outDir = path.resolve(process.cwd(), OUTPUT_DIR);
  await fs.mkdir(outDir, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1600, height: 900 } });

  for (const cardId of CARD_IDS) {
    const url = `${BASE_URL}/apps/orbitry-upsell/listing-media/${cardId}`;
    await page.goto(url, { waitUntil: "networkidle" });

    const filePath = path.join(outDir, `${cardId}.png`);
    await page.screenshot({
      path: filePath,
      type: "png",
      clip: { x: 0, y: 0, width: 1600, height: 900 },
    });

    console.log(`Exported ${filePath}`);
  }

  await browser.close();
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
