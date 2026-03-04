import type { Metadata } from "next";

export const BASE_URL = "https://www.cucinaroma.com.ua";
export const SITE_NAME = "Cucina Roma";
export const DEFAULT_OG_IMAGE = `${BASE_URL}/images/hero_foto1.jpg`;

const DESCRIPTION_MIN_LENGTH = 150;
const DESCRIPTION_MAX_LENGTH = 160;

export function getAbsoluteUrl(pathname: string): string {
  const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${BASE_URL}${normalized}`;
}

function normalizeDescription(description: string): string {
  let normalized = description.trim().replace(/\s+/g, " ");

  if (normalized.length > DESCRIPTION_MAX_LENGTH) {
    normalized = normalized.slice(0, DESCRIPTION_MAX_LENGTH).trimEnd();
    if (normalized.endsWith(",") || normalized.endsWith(";")) {
      normalized = normalized.slice(0, -1);
    }
    return normalized;
  }

  if (normalized.length < DESCRIPTION_MIN_LENGTH) {
    const filler = " Деталі формату, локації та онлайн-бронювання на сайті.";
    while (normalized.length < DESCRIPTION_MIN_LENGTH) {
      normalized = `${normalized}${filler}`;
    }
    if (normalized.length > DESCRIPTION_MAX_LENGTH) {
      normalized = normalized.slice(0, DESCRIPTION_MAX_LENGTH).trimEnd();
    }
  }

  return normalized;
}

export function buildSeoTitle(primaryKeyword: string): string {
  return `${primaryKeyword} | Cooking Class in Rome | ${SITE_NAME}`;
}

export function buildPageMetadata({
  pathname,
  primaryKeyword,
  description,
  type = "website",
  image = DEFAULT_OG_IMAGE,
}: {
  pathname: string;
  primaryKeyword: string;
  description: string;
  type?: "website" | "article";
  image?: string;
}): Metadata {
  const title = buildSeoTitle(primaryKeyword);
  const absoluteUrl = getAbsoluteUrl(pathname);
  const normalizedDescription = normalizeDescription(description);

  return {
    title,
    description: normalizedDescription,
    alternates: {
      canonical: absoluteUrl,
    },
    openGraph: {
      title,
      description: normalizedDescription,
      url: absoluteUrl,
      siteName: SITE_NAME,
      type,
      locale: "uk_UA",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${primaryKeyword} - ${SITE_NAME}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: normalizedDescription,
      images: [image],
    },
  };
}

