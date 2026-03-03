import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SeoLandingPage from "@/components/Seo/SeoLandingPage";
import { seoLandingPages } from "@/data/seoLandingPages";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return seoLandingPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = seoLandingPages.find((item) => item.slug === slug);

  if (!page) {
    return {
      title: "SEO сторінка",
      alternates: {
        canonical: "/seo",
      },
    };
  }

  return {
    title: page.h1,
    description: page.intro,
    keywords: page.keywords,
    alternates: {
      canonical: `/seo/${page.slug}`,
    },
    openGraph: {
      title: `${page.navTitle} | Cucina Roma`,
      description: page.intro,
      url: `/seo/${page.slug}`,
      type: "article",
      locale: "uk_UA",
    },
  };
}

export default async function SeoLandingRoute({ params }: Props) {
  const { slug } = await params;
  const page = seoLandingPages.find((item) => item.slug === slug);

  if (!page) {
    notFound();
  }

  return <SeoLandingPage page={page} />;
}
