import { Suspense } from "react";
import WhatsAppLink from "../../common/Links/WhatsAppLink";
import Container from "../../common/Container";
import HeroSlider from "./Slider";

function HeroSliderFallback() {
  return (
    <div aria-hidden className="pb-7">
      <div className="relative h-[680px] overflow-hidden rounded-4xl md:max-h-[80vh]">
        <div className="absolute inset-0 bg-main_blue" />
        <div className="absolute inset-0 bg-linear-to-br from-main_blue via-main_blue/90 to-main_blue/70" />
      </div>
      <div className="mt-4 flex items-center justify-center gap-1.5">
        <span className="h-1.5 w-5 rounded-full bg-yellow_main/80" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="py-10 md:py-16 xl:py-0 xl:pt-5 xl:pb-20">
      <Container className="relative">
        <Suspense fallback={<HeroSliderFallback />}>
          <HeroSlider />
        </Suspense>
        <WhatsAppLink
          place="hero_section"
          className="z-[5] xl:top-2 xl:right-32"
        />
        <div className="pointer-events-none absolute bottom-[46px] left-3 z-10 ml-4 max-w-[80%] md:right-20 md:bottom-[40px] md:left-auto md:max-w-[474px] xl:right-40">
          <h1 className="textH1 text-white">
            Твій гід <br className="md:hidden" /> у Римі
          </h1>
          <p className="big_text mt-4 text-white">
            Перші кулінарні майстер-класи в Римі <br /> з україномовним
            супроводом
          </p>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
