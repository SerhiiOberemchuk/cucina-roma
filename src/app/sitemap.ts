import type { MetadataRoute } from "next";
import { dataMaster } from "@/data/dataMaster";
import { seoLandingPages } from "@/data/seoLandingPages";

const BASE_URL = "https://www.cucinaroma.com.ua";

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
    {
      url: `${BASE_URL}/seo`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];

  const masterPages: MetadataRoute.Sitemap = dataMaster.map((item) => ({
    url: `${BASE_URL}/master/${item.page}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const seoPages: MetadataRoute.Sitemap = seoLandingPages.map((item) => ({
    url: `${BASE_URL}/seo/${item.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.75,
  }));

  return [...staticPages, ...masterPages, ...seoPages];
}
