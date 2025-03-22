import React from "react";
import Container from "./Container";
import TitleSection from "./TitleSection";
import InstagramLink from "./Links/InstagramLink";
import Image from "next/image";

function SectionInstagram() {
  return (
    <section className="py-[100px] xl:py-20">
      <Container>
        <TitleSection title="Наш інстаграм" />
        <InstagramLink isIcon={false} />
        <ul className="mt-2.5 flex justify-center gap-5">
          <li className="relative w-fit">
            <Image
              src={"/images/Instagram_1.jpg"}
              width={388}
              height={460}
              className="rounded-3xl"
              alt="Зображення із інстаграм"
            />
            <InstagramLink className="absolute right-4 bottom-4" />
          </li>
          <li className="relative hidden w-fit md:block">
            <Image
              src={"/images/Instagram_2.jpg"}
              width={388}
              height={460}
              className="rounded-3xl"
              alt="Зображення із інстаграм"
            />
            <InstagramLink className="absolute right-4 bottom-4" />
          </li>
          <li className="relative hidden w-fit xl:block">
            <Image
              src={"/images/Instagram_3.jpg"}
              width={388}
              height={460}
              className="rounded-3xl"
              alt="Зображення із інстаграм"
            />
            <InstagramLink className="absolute right-4 bottom-4" />
          </li>
        </ul>
      </Container>
    </section>
  );
}

export default SectionInstagram;
