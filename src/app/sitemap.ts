import type { MetadataRoute } from "next";
import { dataMaster } from "@/data/dataMaster";
import { seoLandingPages } from "@/data/seoLandingPages";
import { BASE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const masterPages: MetadataRoute.Sitemap = dataMaster.map((item) => ({
    url: `${BASE_URL}/master/${item.page}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const seoPages: MetadataRoute.Sitemap = seoLandingPages.map((page) => ({
    url: `${BASE_URL}/seo/${page.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: page.slug === "cooking-class-rome" ? 0.9 : 0.8,
  }));

  return [...staticPages, ...masterPages, ...seoPages];
}
