"use client";

import IconClose from "@/assets/icons/btn_close.svg";

import { useState } from "react";

function VideoIntroduction() {
  const [isOpen, setIsOpen] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const handleMute = () => {
    setIsMuted((prev) => !prev);
  };

  if (!isOpen) {
    return null;
  }
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div className="fixed right-3 bottom-[15%] z-[10000] rounded-2xl">
      <div className="relative min-h-40 w-full min-w-24 rounded-2xl">
        <button
          onClick={handleClose}
          type="button"
          className="1xl:top-3 1xl:right-3 bg-yellow_main hover:bg-hover absolute top-1 right-1 z-10 cursor-pointer rounded-full transition-all duration-300 hover:text-white md:top-2 md:right-2"
        >
          <div className="relative h-6 w-6 md:h-9 md:w-9">
            <IconClose className="absolute top-1/2 left-1/2 h-8 w-9 -translate-x-1/2 -translate-y-1/2 fill-black md:h-8 md:w-9" />
          </div>
        </button>
        <video
          onClick={handleMute}
          autoPlay
          loop
          playsInline
          muted={isMuted}
          preload="auto"
          src="/video/IMG_3838.mp4"
          className="1xl:w-44 z-0 w-24 rounded-2xl md:w-36"
        ></video>
        <div className="absolute bottom-2 left-0 flex w-full justify-center">
          <a
            href="https://wa.me/393249888194"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Посилання на номер телефону ватсапп"
            className="mx-auto w-[90%] rounded-2xl bg-black p-0.5 text-center text-white transition-all duration-300 hover:bg-white hover:text-black md:p-1"
          >
            Задай питання
          </a>
        </div>
      </div>
    </div>
  );
}

export default VideoIntroduction;
