import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/common/Container";
import FaqSection from "@/components/HomePage/FaqSection/FaqSection";
import SEOHomeFaqJsonLd from "@/utils/SEOHomeFaqJsonLd";
import { seoLandingPages } from "@/data/seoLandingPages";

export const metadata: Metadata = {
  title: "FAQ: кулінарні майстер-класи в Римі",
  description:
    "Поширені запитання про кулінарні майстер-класи в Римі: ціни, тривалість, локація, бронювання та україномовний супровід.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "FAQ про майстер-класи в Римі | Cucina Roma",
    description:
      "Відповіді на ключові запитання про бронювання, формат подій і кулінарний досвід у Римі.",
    url: "/faq",
    type: "website",
    locale: "uk_UA",
  },
};

export default function FaqPage() {
  return (
    <>
      <FaqSection />
      <Container className="pb-10 xl:pb-16">
        <h2 className="textH3 text-main_blue mb-4">Корисні SEO-сторінки</h2>
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
