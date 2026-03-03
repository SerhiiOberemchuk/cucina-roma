import Container from "@/components/common/Container";
import SubtitlePoint from "@/components/common/SubtitlePoint";
import TitleSection from "@/components/common/TitleSection";
import TextBody from "@/components/common/TextBody";
import { faqItems } from "@/data/faq";

function FaqSection() {
  return (
    <section className="bg-blue py-10 xl:py-20" id="faq">
      <Container>
        <SubtitlePoint text="поширені запитання" className="justify-center" />
        <TitleSection
          title="FAQ про майстер-класи в Римі"
          className="mx-auto mt-7 text-center"
        />
        <TextBody className="mx-auto mt-6 max-w-[900px] text-center">
          Відповіді на ключові запитання про кулінарні майстер-класи, ціни,
          тривалість, локацію та бронювання в Римі.
        </TextBody>

        <ul className="mt-10 flex flex-col gap-4">
          {faqItems.map((item) => (
            <li
              key={item.question}
              className="rounded-3xl border border-grey_stroke_logo/30 bg-white px-5 py-4 md:px-7 md:py-5"
            >
              <h3 className="big_text_medium text-main_blue">{item.question}</h3>
              <TextBody className="mt-2">{item.answer}</TextBody>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default FaqSection;
