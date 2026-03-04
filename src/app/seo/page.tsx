import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/common/Container";
import SubtitlePoint from "@/components/common/SubtitlePoint";
import TitleSection from "@/components/common/TitleSection";
import TextBody from "@/components/common/TextBody";
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
          <li className="rounded-3xl border p-5">
            <h2 className="big_text_medium text-main_blue">Cooking Class Rome</h2>
            <TextBody className="mt-2">
              Cooking Class Rome: кулінарні враження в Римі для україномовних гостей
            </TextBody>
            <Link
              href="/seo/cooking-class-rome"
              className="text-main_blue hover:text-hover mt-3 inline-flex transition-all duration-300"
            >
              Відкрити сторінку
            </Link>
          </li>
          <li className="rounded-3xl border p-5">
            <h2 className="big_text_medium text-main_blue">Pizza Class Rome</h2>
            <TextBody className="mt-2">
              Pizza Class Rome: майстер-клас піци та тірамісу в Римі
            </TextBody>
            <Link
              href="/seo/pizza-class-rome"
              className="text-main_blue hover:text-hover mt-3 inline-flex transition-all duration-300"
            >
              Відкрити сторінку
            </Link>
          </li>
          <li className="rounded-3xl border p-5">
            <h2 className="big_text_medium text-main_blue">Pasta Class Rome</h2>
            <TextBody className="mt-2">
              Pasta Class Rome: майстер-клас пасти та тірамісу в Римі
            </TextBody>
            <Link
              href="/seo/pasta-class-rome"
              className="text-main_blue hover:text-hover mt-3 inline-flex transition-all duration-300"
            >
              Відкрити сторінку
            </Link>
          </li>
          <li className="rounded-3xl border p-5">
            <h2 className="big_text_medium text-main_blue">Tiramisu Class Rome</h2>
            <TextBody className="mt-2">
              Tiramisu Class Rome: солодкий майстер-клас у Римі
            </TextBody>
            <Link
              href="/seo/tiramisu-class-rome"
              className="text-main_blue hover:text-hover mt-3 inline-flex transition-all duration-300"
            >
              Відкрити сторінку
            </Link>
          </li>
          <li className="rounded-3xl border p-5">
            <h2 className="big_text_medium text-main_blue">Wine Tasting Rome</h2>
            <TextBody className="mt-2">
              Wine Tasting Rome: дегустація вина та гастрономічні поєднання
            </TextBody>
            <Link
              href="/seo/wine-tasting-rome"
              className="text-main_blue hover:text-hover mt-3 inline-flex transition-all duration-300"
            >
              Відкрити сторінку
            </Link>
          </li>
          <li className="rounded-3xl border p-5">
            <h2 className="big_text_medium text-main_blue">Private Cooking Class Rome</h2>
            <TextBody className="mt-2">
              Private Cooking Class Rome: приватний кулінарний досвід у Римі
            </TextBody>
            <Link
              href="/seo/private-cooking-class-rome"
              className="text-main_blue hover:text-hover mt-3 inline-flex transition-all duration-300"
            >
              Відкрити сторінку
            </Link>
          </li>
          <li className="rounded-3xl border p-5">
            <h2 className="big_text_medium text-main_blue">Family Cooking Class Rome</h2>
            <TextBody className="mt-2">
              Family Cooking Class Rome: кулінарний формат для родин у Римі
            </TextBody>
            <Link
              href="/seo/family-cooking-class-rome"
              className="text-main_blue hover:text-hover mt-3 inline-flex transition-all duration-300"
            >
              Відкрити сторінку
            </Link>
          </li>
          <li className="rounded-3xl border p-5">
            <h2 className="big_text_medium text-main_blue">
              Ukrainian Speaking Cooking Class Rome
            </h2>
            <TextBody className="mt-2">
              Ukrainian Speaking Cooking Class Rome: майстер-клас з супроводом українською
            </TextBody>
            <Link
              href="/seo/ukrainian-speaking-cooking-class-rome"
              className="text-main_blue hover:text-hover mt-3 inline-flex transition-all duration-300"
            >
              Відкрити сторінку
            </Link>
          </li>
          <li className="rounded-3xl border p-5">
            <h2 className="big_text_medium text-main_blue">Cooking Class Near Vatican</h2>
            <TextBody className="mt-2">
              Cooking Class Near Vatican: зручний кулінарний досвід біля Vatican
            </TextBody>
            <Link
              href="/seo/cooking-class-near-vatican"
              className="text-main_blue hover:text-hover mt-3 inline-flex transition-all duration-300"
            >
              Відкрити сторінку
            </Link>
          </li>
        </ul>
      </Container>
    </section>
  );
}

