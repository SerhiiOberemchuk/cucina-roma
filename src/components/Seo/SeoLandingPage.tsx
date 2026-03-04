import Link from "next/link";
import Container from "@/components/common/Container";
import LinkYelow from "@/components/common/Links/LinkYelow";
import SubtitlePoint from "@/components/common/SubtitlePoint";
import TextBody from "@/components/common/TextBody";
import TextBodyPoint from "@/components/common/TextBodyPoint";

export type SeoInternalLink = {
  href: string;
  label: string;
};

export type SeoHubSectionData = {
  title: string;
  description: string;
  links: SeoInternalLink[];
};

export type SeoLongreadSection = {
  heading: string;
  paragraph: string;
};

export type SeoMasterCard = {
  href: string;
  name: string;
  durationHours: number;
  priceEur: number;
};

export type SeoLandingPageContent = {
  eyebrow: string;
  h1: string;
  intro: string;
  highlights: string[];
  ctaHref: string;
  ctaLabel?: string;
  relatedSeoLinks: SeoInternalLink[];
  hubSections?: SeoHubSectionData[];
  longreadSections: SeoLongreadSection[];
  relatedMasters: SeoMasterCard[];
};

type Props = {
  content: SeoLandingPageContent;
};

function SeoLandingPage({ content }: Props) {
  const renderedLongreadSections =
    content.longreadSections.length > 0
      ? content.longreadSections
      : [
          {
            heading: "Про формат",
            paragraph: content.intro,
          },
        ];

  return (
    <section className="py-10 xl:py-20">
      <Container>
        <SubtitlePoint text={content.eyebrow} />
        <h1 className="textH1 text-main_blue mt-6 max-w-[980px]">{content.h1}</h1>
        <TextBody className="mt-6 max-w-[980px]">{content.intro}</TextBody>

        <ul className="mt-6 flex max-w-[980px] flex-col gap-2">
          {content.highlights.map((item) => (
            <li key={item}>
              <TextBodyPoint>{item}</TextBodyPoint>
            </li>
          ))}
        </ul>

        <div className="mt-8 rounded-3xl border p-5 md:p-6">
          <h2 className="textH3 text-main_blue">Готові забронювати майстер-клас?</h2>
          <TextBody className="mt-2 max-w-[900px]">
            Перейдіть на основну сторінку цього формату та зафіксуйте дату.
            Якщо потрібно, ви завжди можете швидко узгодити деталі перед
            підтвердженням.
          </TextBody>
          <div className="pt-7">
            <LinkYelow
              href={content.ctaHref}
              linkTitle={content.ctaLabel ?? "Перейти до бронювання"}
              className="mt-4 md:max-w-fit"
            />
          </div>
        </div>

        <div className="mt-6">
          <Link
            href="/seo/cooking-class-rome"
            className="text-main_blue hover:text-hover inline-flex transition-all duration-300"
          >
            Всі кулінарні формати в Римі
          </Link>
        </div>

        {content.relatedSeoLinks.length > 0 && (
          <div className="mt-8">
            <h2 className="textH3 text-main_blue">Інші популярні формати</h2>
            <ul className="mt-3 flex flex-col gap-2">
              {content.relatedSeoLinks.map((relatedPage) => (
                <li key={relatedPage.href}>
                  <Link
                    href={relatedPage.href}
                    className="text-main_blue hover:text-hover inline-flex transition-all duration-300"
                  >
                    {relatedPage.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {content.hubSections && (
          <div className="mt-10">
            <h2 className="textH3 text-main_blue">Популярні напрямки</h2>
            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              {content.hubSections.map((section) => (
                <article key={section.title} className="rounded-3xl border p-5">
                  <h3 className="big_text_medium text-main_blue">{section.title}</h3>
                  <TextBody className="mt-2">{section.description}</TextBody>
                  <ul className="mt-3 flex flex-col gap-1">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-main_blue hover:text-hover inline-flex transition-all duration-300"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        )}

        <div className="mt-12 space-y-8">
          {renderedLongreadSections.map((section) => (
            <article key={section.heading} className="rounded-3xl border p-5 md:p-6">
              <h2 className="textH3 text-main_blue">{section.heading}</h2>
              <TextBody className="mt-3 max-w-[980px]">{section.paragraph}</TextBody>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="textH3 text-main_blue">Рекомендовані формати</h2>
          <ul className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
            {content.relatedMasters.map((item) => (
              <li key={item.href} className="rounded-3xl border p-4">
                <h3 className="big_text_medium text-main_blue">{item.name}</h3>
                <TextBody className="mt-2">{item.durationHours} години</TextBody>
                <TextBody>{item.priceEur} EUR</TextBody>
                <Link
                  href={item.href}
                  className="text-main_blue hover:text-hover mt-3 inline-flex transition-all duration-300"
                >
                  Перейти до сторінки майстер-класу
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default SeoLandingPage;
