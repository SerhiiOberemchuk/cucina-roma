import Container from "../../Container";
import SubtitlePoint from "../../SubtitlePoint";
import Image from "next/image";
import TitleSection from "../../TitleSection";
import TextBody from "../../TextBody";
import FormGetUserData from "../../forms/FormGetUserData";

function SectionCertificate() {
  return (
    <section className="bg-blue py-10 xl:py-20">
      <Container>
        <SubtitlePoint text="подаруй враження" />
        <div className="xl:flex xl:items-center xl:justify-between">
          <Image
            className="hidden md:block"
            src={"/images/pay_card.png"}
            width={588}
            height={500}
            alt="Подарунковий сертифікат"
          />
          <Image
            className="mx-auto mb-20 md:hidden"
            src={"/images/pay_card_mobile.png"}
            width={328}
            height={278}
            alt="Подарунковий сертифікат"
          />
          <div className="xl:max-w-[488px]">
            <TitleSection title="Ваш ідеальний подарунок! " className="mb-7" />
            <ul className="flex w-full flex-col gap-3">
              <li>
                <TextBody>Подаруй незабутні емоції своїм близьким!</TextBody>
              </li>
              <li>
                <TextBody>
                  Здивуй рідних сертифікатом на майстер-клас із традиційної
                  італійської кухні. Під керівництвом неаполітанських шефів і за
                  підтримки українського гіда вони відкриють секрети автентичних
                  рецептів та відчують атмосферу сонячної Італії.
                </TextBody>
              </li>
              <li>
                <TextBody>🎁 Як це зробити?</TextBody>
                <TextBody>💌 Обери сертифікат.</TextBody>
                <TextBody>💳 Зроби оплату.</TextBody>
                <TextBody>🪄 Даруй яскраві спогади!</TextBody>
              </li>
              <li>
                <TextBody>
                  Це ідеальний подарунок, що дарує натхнення, кулінарні знання,
                  та щирі усмішки!
                </TextBody>
              </li>
            </ul>
            <FormGetUserData
              title="Оформи замовлення"
              service="Замовлення сертифікату"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SectionCertificate;
