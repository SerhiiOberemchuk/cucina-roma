import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/common/Container";
import SubtitlePoint from "@/components/common/SubtitlePoint";
import TitleSection from "@/components/common/TitleSection";
import TextBody from "@/components/common/TextBody";
import { seoLandingPages } from "@/data/seoLandingPages";

export const metadata: Metadata = {
  title: "SEO сторінки про майстер-класи в Римі",
  description:
    "Тематичні сторінки про кулінарні майстер-класи в Римі для різних намірів: private, family, couples, team building, geo та multilingual search.",
  alternates: {
    canonical: "/seo",
  },
  openGraph: {
    title: "SEO сторінки | Cucina Roma",
    description:
      "Добірка тематичних сторінок для пріоритетних пошукових запитів у ніші cooking classes та food experience в Римі.",
    url: "/seo",
    type: "website",
    locale: "uk_UA",
  },
};

export default function SeoPage() {
  return (
    <section className="py-10 xl:py-20">
      <Container>
        <SubtitlePoint text="seo сторінки" />
        <TitleSection title="Тематичні сторінки про кулінарний досвід у Римі" className="mt-6" />
        <TextBody className="mt-6 max-w-[900px]">
          Нижче зібрані сторінки під різні пошукові наміри в ніші кулінарних
          вражень у Римі: базові комерційні запити, private/family/couples
          формати, групові події та гео-запити.
        </TextBody>

        <ul className="mt-8 flex flex-col gap-3">
          {seoLandingPages.map((page) => (
            <li key={page.slug} className="rounded-3xl border p-5">
              <h2 className="big_text_medium text-main_blue">{page.navTitle}</h2>
              <TextBody className="mt-2">{page.h1}</TextBody>
              <Link
                href={`/seo/${page.slug}`}
                className="text-main_blue hover:text-hover mt-3 inline-flex transition-all duration-300"
              >
                Відкрити сторінку
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
