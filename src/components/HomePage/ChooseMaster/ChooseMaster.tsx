import Container from "@/components/common/Container";
import SubtitlePoint from "@/components/common/SubtitlePoint";
import TitleSection from "@/components/common/TitleSection";
import React from "react";
import CardMaster from "./CardMaster";
import { dataMaster } from "./dataMaster";

function ChooseMaster() {
  return (
    <section className="py-[100px] xl:py-20">
      <Container>
        <SubtitlePoint
          text="україномовний туристичний проєкт"
          className="justify-center"
        />
        <TitleSection
          title="Обери майстер-клас"
          className="mx-auto mt-7 text-center"
        />
        <p className="big_text text-main_blue xl:10 mx-auto mt-6 mb-20 max-w-[858px] text-center">
          Відкриємо для вас світ справжньої італійської кухні на майстер-класі,
          в супроводі неаполітанців та україномовного гіда.
        </p>
        <ul className="grid grid-cols-1 justify-items-center gap-y-10 md:grid-cols-2 md:gap-x-5 md:gap-y-6 xl:grid-cols-4">
          {dataMaster.map((item, index) => (
            <CardMaster
              src={item.src}
              name={item.name}
              key={index}
              prise={item.prise}
              duration={item.duration}
              linkTitle={item.linkTitle}
              href={item.href}
            />
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default ChooseMaster;
