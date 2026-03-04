import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/common/Container";
import FaqSection from "@/components/HomePage/FaqSection/FaqSection";
import SEOHomeFaqJsonLd from "@/utils/SEOHomeFaqJsonLd";
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
        <h2 className="textH3 text-main_blue mb-4">
          Корисні сторінки за форматами
        </h2>
        <ul className="flex flex-col gap-2">
          <li>
            <Link
              href="/seo/cooking-class-rome"
              className="hover:text-hover active:text-pressed text-main_blue transition-all duration-300"
            >
              Cooking Class Rome
            </Link>
          </li>
          <li>
            <Link
              href="/seo/pizza-class-rome"
              className="hover:text-hover active:text-pressed text-main_blue transition-all duration-300"
            >
              Pizza Class Rome
            </Link>
          </li>
          <li>
            <Link
              href="/seo/pasta-class-rome"
              className="hover:text-hover active:text-pressed text-main_blue transition-all duration-300"
            >
              Pasta Class Rome
            </Link>
          </li>
          <li>
            <Link
              href="/seo/tiramisu-class-rome"
              className="hover:text-hover active:text-pressed text-main_blue transition-all duration-300"
            >
              Tiramisu Class Rome
            </Link>
          </li>
          <li>
            <Link
              href="/seo/wine-tasting-rome"
              className="hover:text-hover active:text-pressed text-main_blue transition-all duration-300"
            >
              Wine Tasting Rome
            </Link>
          </li>
          <li>
            <Link
              href="/seo/private-cooking-class-rome"
              className="hover:text-hover active:text-pressed text-main_blue transition-all duration-300"
            >
              Private Cooking Class Rome
            </Link>
          </li>
          <li>
            <Link
              href="/seo/family-cooking-class-rome"
              className="hover:text-hover active:text-pressed text-main_blue transition-all duration-300"
            >
              Family Cooking Class Rome
            </Link>
          </li>
          <li>
            <Link
              href="/seo/ukrainian-speaking-cooking-class-rome"
              className="hover:text-hover active:text-pressed text-main_blue transition-all duration-300"
            >
              Ukrainian Speaking Cooking Class Rome
            </Link>
          </li>
          <li>
            <Link
              href="/seo/cooking-class-near-vatican"
              className="hover:text-hover active:text-pressed text-main_blue transition-all duration-300"
            >
              Cooking Class Near Vatican
            </Link>
          </li>
        </ul>
      </Container>
      <SEOHomeFaqJsonLd />
    </>
  );
}

