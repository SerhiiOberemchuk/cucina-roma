import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/common/Container";
import FaqSection from "@/components/HomePage/FaqSection/FaqSection";
import SEOHomeFaqJsonLd from "@/utils/SEOHomeFaqJsonLd";
import { seoLandingPages } from "@/data/seoLandingPages";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    pathname: "/faq",
    primaryKeyword: "Cooking Class Rome FAQ",
    description:
      "FAQ для україномовних гостей про cooking class Rome: ціни, тривалість, локація, language support, private формати та швидке бронювання.",
    type: "website",
  });
}

export default function FaqPage() {
  return (
    <>
      <h1 className="sr-only">Cooking Class Rome FAQ</h1>
      <FaqSection />
      <Container className="pb-10 xl:pb-16">
        <h2 className="textH3 text-main_blue mb-4">Корисні SEO сторінки</h2>
        <ul className="flex flex-col gap-2">
          {seoLandingPages.map((page) => (
            <li key={page.slug}>
              <Link
                href={`/seo/${page.slug}`}
                className="hover:text-hover active:text-pressed text-main_blue transition-all duration-300"
              >
                {page.navTitle}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
      <SEOHomeFaqJsonLd />
    </>
  );
}

