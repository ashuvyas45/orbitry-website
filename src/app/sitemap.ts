import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/blogData";
import { getSiteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/apps/orbitry-upsell`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/blogs`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => {
    const parsedDate = new Date(post.date);
    return {
      url: `${siteUrl}/blogs/${post.slug}`,
      lastModified: Number.isNaN(parsedDate.getTime()) ? now : parsedDate,
      changeFrequency: "monthly",
      priority: 0.6,
    };
  });

  return [...staticRoutes, ...blogRoutes];
}
