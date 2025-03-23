import Container from "@/components/common/Container";
import SubtitlePoint from "@/components/common/SubtitlePoint";
import React from "react";

function OpenRomaSection() {
  return (
    <section className="bg-blue py-[100px] xl:py-20">
      <Container className="flex flex-col justify-center gap-3">
        <SubtitlePoint
          text="ВІДКРИЙ ВІЧНЕ МІСТО РАЗОМ З НАМИ"
          className="justify-center"
        />
        <h2 className="textH2 mx-auto max-w-[846px] text-center">
          Мрії про Рим та справжню італійську кухню стають реальністю.
          Відкривайте Італію з душею разом з нами. 
        </h2>
      </Container>
    </section>
  );
}

export default OpenRomaSection;
