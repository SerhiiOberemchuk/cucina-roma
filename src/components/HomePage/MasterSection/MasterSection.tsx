import Container from "@/components/common/Container";
import SubtitlePoint from "@/components/common/SubtitlePoint";
import TextBody from "@/components/common/TextBody";
import TitleSection from "@/components/common/TitleSection";
import Image from "next/image";

function MasterSection() {
  return (
    <section className="py-[100px] xl:py-20" id="master">
      <Container>
        <SubtitlePoint text="Що ми пропонуємо" />
        <div className="mt-6 xl:flex xl:gap-[120px]">
          <div className="xl:flex xl:flex-col xl:justify-center">
            <TitleSection title="Майстер-класи" className="mb-7" />
            <ul className="flex flex-col gap-3">
              <li>
                <TextBody>
                  Ми розробили перші україномовні майстер-класи в в Римі! Ви
                  навчитеся  готувати справжню неаполітанську піцу, класичний
                  десерт tiramisu за старовинним рецептом, ідеальну пасту та
                  ніжні ньоккі! Ми поділимося правильними рецептами й техніками,
                  щоб ви могли створювати ці шедеври вдома.
                </TextBody>
              </li>
              <li>
                <TextBody>
                  📍 Локація: історичний центр Рима, двоповерховий ресторан із
                  панорамними вікнами та видом на місто. Затишна атмосфера,
                  ввічливий персонал і можливість зробити пам’ятні фото.
                </TextBody>
              </li>
              <li>
                <TextBody>
                  👨‍🍳 Хто проводить: майстер-клас ведуть справжні неаполітанці з
                  україномовним супроводом.
                </TextBody>
              </li>
              <li>
                <TextBody>⏰ Тривалість: 2–2,5 години.</TextBody>
              </li>
              <li>
                <TextBody>
                  Перетворіть свій день у Римі на кулінарну пригоду!
                </TextBody>
              </li>
            </ul>
          </div>
          <Image
            className="mx-auto mt-20 md:hidden"
            src={"/images/master360.jpg"}
            width={328}
            height={580}
            alt="Зображення піци"
          />
          <Image
            className="mx-auto mt-20 hidden md:block xl:hidden"
            src={"/images/master768.jpg"}
            width={688}
            height={580}
            alt="Зображення піци"
          />
          <Image
            className="hidden xl:block"
            src={"/images/master1440.jpg"}
            width={588}
            height={580}
            alt="Зображення піци"
          />
        </div>
      </Container>
    </section>
  );
}

export default MasterSection;
