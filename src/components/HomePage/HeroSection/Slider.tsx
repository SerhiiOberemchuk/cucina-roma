"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import { EffectFade, Autoplay, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import Image from "next/image";

const images = {
  mobile: [
    "/images/360_hero_1.jpg",
    "/images/360_hero_2.jpg",
    "/images/360_hero_3.jpg",
    "/images/360_hero_4.jpg",
    "/images/360_hero_5.jpg",
  ],
  tablet: [
    "/images/768_hero_1.jpg",
    "/images/768_hero_2.jpg",
    "/images/768_hero_3.jpg",
    "/images/768_hero_4.jpg",
    "/images/768_hero_5.jpg",
  ],
  desktop: [
    "/images/hero_foto1.jpg",
    "/images/hero_foto2.jpg",
    "/images/hero_foto3.jpg",
    "/images/hero_foto4.jpg",
    "/images/hero_foto5.jpg",
  ],
};

export default function HeroSlider() {
  const [device, setDevice] = useState<"mobile" | "tablet" | "desktop">(
    "desktop",
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) setDevice("mobile");
      else if (window.innerWidth <= 1024) setDevice("tablet");
      else setDevice("desktop");
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const currentImages = images[device];
  return (
    <div className="pb-7">
      <Swiper
        spaceBetween={30}
        effect="fade"
        loop
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[EffectFade, Pagination, Autoplay]}
        className="mySwiper h-[680px] md:max-h-[80vh]"
      >
        {currentImages.map((src, index) => (
          <SwiperSlide key={index}>
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              fill
              className="max-h-[100vh] rounded-4xl object-cover"
              sizes="(max-width: 480px) 100vw, (max-width: 1024px) 100vw, 100vw"
              priority={index === 0}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
