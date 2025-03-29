"use client";

import { cn } from "@/utils/cn";
import React, { useEffect, useState } from "react";
import NavMenu from "./common/NavMenu";
import BookingLink from "./common/BookingLink";
import { motion, AnimatePresence } from "framer-motion";

function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleOpenMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [isMenuOpen]);

  return (
    <>
      <button
        type="button"
        aria-expanded={isMenuOpen}
        aria-label="Toggle mobile menu"
        onClick={toggleOpenMenu}
        className="bg-yellow_main hover:bg-hover active:bg-pressed relative z-50 flex h-9 w-9 cursor-pointer flex-col items-center justify-center rounded-full transition-all duration-500 md:h-12 md:w-12 xl:hidden"
      >
        <div className="relative h-1.5 w-3">
          <div
            className={cn(
              "bg-main_blue absolute top-0 left-0 h-px w-3 rounded-[2px] transition-all duration-500",
              isMenuOpen && "translate-y-[2.5px] rotate-45 transform",
            )}
          ></div>
          <div
            className={cn(
              "bg-main_blue absolute bottom-0 left-0 h-px w-3 rounded-[2px] transition-all duration-500",
              isMenuOpen && "-translate-y-[2.5px] -rotate-45 transform",
            )}
          ></div>
        </div>
      </button>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={toggleOpenMenu}
              className="fixed inset-0 z-10 bg-black xl:hidden"
            />

            <motion.div
              key="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              onClick={(e) => e.stopPropagation()}
              className="border-yellow_main fixed top-0 right-0 z-10 flex h-screen w-full max-w-[360px] flex-col gap-[184px] overflow-y-auto rounded-3xl border bg-white px-4 pt-[146px] shadow-2xl md:max-w-[320px] md:px-10 md:pt-[158px] xl:hidden"
            >
              <NavMenu
                type="mobilemenu"
                className="flex flex-col gap-6"
                onClick={toggleOpenMenu}
              />

              <div onClick={toggleOpenMenu} className="flex">
                <BookingLink className="text-center" />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default MobileMenu;
