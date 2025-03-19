"use client";

import { cn } from "@/utils/cn";
import Image from "next/image";
import React, { useState } from "react";
import NavMenuHeader from "./common/NavMenuHeader";
import BookingLink from "./common/BookingLink";
import clsx from "clsx";

function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className="bg-yellow_main hover:bg-hover active:bg-pressed relative z-50 flex h-9 w-9 cursor-pointer flex-col items-center justify-center rounded-full transition-all duration-500 md:h-12 md:w-12 xl:hidden"
      >
        {/* <Image
          src={"/icons/mobilemenu.svg"}
          width={12}
          height={6}
          alt="кнопка відкрити мобільне меню"
        /> */}
        <div className="relative h-1.5 w-3">
          <div
            className={clsx(
              "bg-main_blue absolute top-0 left-0 h-px w-3 rounded-[2px] transition-all duration-500",
              isMenuOpen && "translate-y-[2.5px] rotate-45 transform",
            )}
          ></div>
          <div
            className={clsx(
              "bg-main_blue absolute bottom-0 left-0 h-px w-3 rounded-[2px] transition-all duration-500",
              isMenuOpen && "-translate-y-[2.5px] -rotate-45 transform",
            )}
          ></div>
        </div>
      </button>

      <div
        className={cn(
          "fixed top-0 right-0 flex h-0 w-full justify-end bg-black/50",
          isMenuOpen && "bottom-0 h-full",
        )}
      >
        <div
          className={cn(
            "border-yellow_main flex h-screen w-full max-w-[360px] translate-y-[-100%] flex-col gap-[184px] rounded-3xl border-[1px] bg-white px-4 pt-[146px] transition-transform duration-500 ease-in-out md:max-w-[320px] md:px-10 md:pt-[158px] xl:hidden",
            "shadow-2xl",
            isMenuOpen && "translate-y-0",
          )}
        >
          <NavMenuHeader type="mobilemenu" className="flex flex-col gap-6" />

          <BookingLink className="text-center" />
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
