import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/common/Container";
import SubtitlePoint from "@/components/common/SubtitlePoint";
import TitleSection from "@/components/common/TitleSection";
import TextBody from "@/components/common/TextBody";
import { seoLandingPages } from "@/data/seoLandingPages";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildPageMetadata({
    pathname: "/seo",
    primaryKeyword: "Rome Cooking Classes by Format",
    description:
      "Огляд сторінок Cucina Roma за форматами: pizza class, pasta class, private class, family class, wine tasting та cooking class near Vatican у Римі.",
    type: "website",
  }),
};

export default function SeoPage() {
  return (
    <section className="py-10 xl:py-20">
      <Container>
        <SubtitlePoint text="Навігація за форматами" />
        <TitleSection
          title="Кулінарні формати Cucina Roma"
          className="mt-6"
        />
        <TextBody className="mt-6 max-w-[900px]">
          Оберіть формат, який найкраще підходить під ваш запит у Римі. Ось
          головна сторінка з усіма напрямками:
          <Link
            href="/seo/cooking-class-rome"
            className="text-main_blue hover:text-hover ml-1 inline-flex transition-all duration-300"
          >
            Cooking Class Rome
          </Link>
          .
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

