import Link from "next/link";
import Container from "@/components/common/Container";
import LinkYelow from "@/components/common/Links/LinkYelow";
import SubtitlePoint from "@/components/common/SubtitlePoint";
import TextBody from "@/components/common/TextBody";
import TextBodyPoint from "@/components/common/TextBodyPoint";
import { dataMaster } from "@/data/dataMaster";
import { SeoLandingPageData } from "@/data/seoLandingPages";

type Props = {
  page: SeoLandingPageData;
};

function SeoLandingPage({ page }: Props) {
  const relatedMasters = dataMaster.filter((item) =>
    page.relatedMasterPages.includes(item.page),
  );

  return (
    <section className="py-10 xl:py-20">
      <Container>
        <SubtitlePoint text={page.eyebrow} />
        <h1 className="textH1 text-main_blue mt-6 max-w-[980px]">{page.h1}</h1>
        <TextBody className="mt-6 max-w-[980px]">{page.intro}</TextBody>

        <ul className="mt-6 flex max-w-[980px] flex-col gap-2">
          {page.highlights.map((item) => (
            <li key={item}>
              <TextBodyPoint>{item}</TextBodyPoint>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-3 md:flex-row">
          <LinkYelow
            href="/#master"
            linkTitle="Бронювати"
            className="md:max-w-fit"
          />
          <LinkYelow
            href="/faq"
            linkTitle="Поширені запитання"
            className="md:max-w-fit"
          />
        </div>

        <div className="mt-12">
          <h2 className="textH3 text-main_blue">Рекомендовані формати</h2>
          <ul className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
            {relatedMasters.map((item) => (
              <li key={item.page} className="rounded-3xl border p-4">
                <h3 className="big_text_medium text-main_blue">{item.name}</h3>
                <TextBody className="mt-2">{item.duration} години</TextBody>
                <TextBody>{item.prise} EUR</TextBody>
                <Link
                  href={`/master/${item.page}`}
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
