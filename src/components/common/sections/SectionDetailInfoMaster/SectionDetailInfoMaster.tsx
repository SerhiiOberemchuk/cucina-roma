import Container from "../../Container";
import WhatsAppLink from "../../Links/WhatsAppLink";
import SubtitlePoint from "../../SubtitlePoint";
import Image from "next/image";
import IconPrice from "@/assets/icons/icon_price.svg";
import IconTime from "@/assets/icons/icon_time.svg";
import IconLoction from "@/assets/icons/icon_location.svg";
import TextBody from "../../TextBody";
import FormGetUserData from "../../forms/FormGetUserData";

export type MasterDetailContent = {
  subtitle: string;
  imageUrl: string;
  title: string;
  location: string;
  describe: string[];
  priceEur: number;
  durationHours: number;
  includeProsecco?: boolean;
};

type Props = {
  content: MasterDetailContent;
};

function SectionDetailInfoMaster({ content }: Props) {
  const {
    subtitle,
    imageUrl,
    title,
    location,
    describe,
    priceEur,
    durationHours,
    includeProsecco = true,
  } = content;

  return (
    <section className="py-6">
      <Container className="relative min-h-[588px]">
        <WhatsAppLink place="hero_section" className="-top-1 md:-top-1" />
        <SubtitlePoint text={subtitle} />
        <div className="mt-6 md:mt-10 xl:flex xl:justify-between">
          <Image
            src={imageUrl}
            alt={subtitle}
            width={588}
            height={588}
            className="mx-auto rounded-3xl object-cover md:h-[588px] md:w-[688px] xl:mx-0 xl:w-[588px]"
          />
          <div className="mt-6 flex flex-col justify-center gap-6 xl:mt-0 xl:max-w-[488px]">
            <h1 className="textH3 text-text">{title}</h1>
            <ul className="flex flex-col gap-3">
              <li className="btn_text text-grey_stroke_logo flex gap-2">
                <IconPrice /> <span>{priceEur}€ за особу</span>
              </li>
              <li className="btn_text text-grey_stroke_logo flex gap-2">
                <IconTime /> <span>{durationHours} години</span>
              </li>
              <li className="btn_text text-grey_stroke_logo flex gap-2">
                <IconLoction /> <span>{location}</span>
              </li>
            </ul>
            <ul className="flex flex-col gap-2">
              {describe.map((item, index) => (
                <li key={index}>
                  <TextBody className="text-text">{item}</TextBody>
                </li>
              ))}
              {includeProsecco && (
                <li>
                  <p className="btn_text text-text">
                    У вартість входить келих Prosecco!
                  </p>
                </li>
              )}
            </ul>
            <FormGetUserData
              className="mt-0"
              service={title}
              prise={priceEur}
              imageUrl={imageUrl}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SectionDetailInfoMaster;
