import Container from "@/components/common/Container";
import SubtitlePoint from "@/components/common/SubtitlePoint";
import TextBody from "@/components/common/TextBody";
import TextBodyPoint from "@/components/common/TextBodyPoint";
import TitleSection from "@/components/common/TitleSection";
import Image from "next/image";

function AboutUsSection() {
  return (
    <section className="py-10 xl:py-20" id="about">
      <Container>
        <SubtitlePoint text="україномовний туристичний проєкт" />

        <div className="mt-6 xl:flex xl:flex-row-reverse xl:gap-[124px]">
          <div className="xl:flex xl:max-w-[488px] xl:flex-col xl:justify-center">
            <TitleSection title="Про нас" className="mb-7" />
            <TextBody className="mb-3">
              Вітаємо! Мрієте про подорож до Рима? Ми — україномовний
              туристичний проєкт, який допоможе вам відкрити Італію.
            </TextBody>
            <ul className="flex w-full flex-col gap-3 xl:max-w-[430px]">
              <li className="max-w-[430px]">
                <TextBodyPoint>
                  Авторські екскурсії античним Римом. Ватикан.  Індивідуальні
                  екскурсії  за межі Риму
                </TextBodyPoint>
              </li>
              <li>
                <TextBodyPoint>
                  Організація та комфортний трансфер.
                </TextBodyPoint>
              </li>
              <li>
                <TextBodyPoint>
                  Гастрономічні екскурсії для поціновувачів традиційної
                  італійської кухні.
                </TextBodyPoint>
              </li>
              <li>
                <TextBodyPoint>
                  Розробка індивідуальних програм для груп туристів, повне
                  супроводження.
                </TextBodyPoint>
              </li>
              <li>
                <TextBodyPoint>
                  Організація особливих подій у топових локаціях.
                </TextBodyPoint>
              </li>
            </ul>
          </div>
          <Image
            className="mx-auto mt-20 w-full rounded-3xl md:hidden"
            src={"/images/About360.jpg"}
            width={328}
            height={580}
            alt="Про нас"
          />
          <Image
            className="mx-auto mt-20 hidden w-full rounded-3xl md:block xl:hidden"
            src={"/images/About768.jpg"}
            width={688}
            height={580}
            alt="Про нас"
          />
          <Image
            className="mx-auto hidden rounded-3xl xl:block"
            src={"/images/About768.jpg"}
            width={588}
            height={580}
            alt="Про нас"
          />
        </div>
      </Container>
    </section>
  );
}

export default AboutUsSection;
