import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SeoLandingPage from "@/components/Seo/SeoLandingPage";
import {
  seoLandingPages,
  seoLandingPagesBySlug,
} from "@/data/seoLandingPages";
import { buildPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return seoLandingPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = seoLandingPagesBySlug[slug];

  if (!page) {
    return buildPageMetadata({
      pathname: "/seo/cooking-class-rome",
      primaryKeyword: "Cooking Class Rome",
      description:
        "Головний хаб cooking class Rome для україномовних гостей: pizza, pasta, tiramisu, wine tasting, private формати та швидке бронювання у Cucina Roma.",
      type: "article",
    });
  }

  return buildPageMetadata({
    pathname: `/seo/${page.slug}`,
    primaryKeyword: page.primaryKeyword,
    description: page.metaDescription,
    type: "article",
  });
}

export default async function SeoLandingRoute({ params }: Props) {
  const { slug } = await params;
  const page = seoLandingPagesBySlug[slug];

  if (!page) {
    notFound();
  }

  return <SeoLandingPage page={page} />;
}

