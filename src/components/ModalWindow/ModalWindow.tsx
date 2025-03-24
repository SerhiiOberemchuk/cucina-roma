"use client";
import { cn } from "@/utils/cn";
import { useModalStore } from "./useModalStore";
import CardModalWindow from "./CardModalWindow";
import IconClose from "@/assets/icons/btn_close.svg";
import { useEffect } from "react";

function ModalWindow() {
  const { isModalOpen, modalType, closeModal } = useModalStore();
  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [isModalOpen]);

  if (!isModalOpen) return null;

  return (
    <div
      onClick={closeModal}
      className={cn(
        "fixed top-0 right-0 left-0 z-50 h-dvh w-full overflow-y-auto bg-cover bg-center py-[50px]",
        modalType === "/pay_card"
          ? "bg-[url(/images/pay_cart.png)]"
          : "bg-[url(/images/pay_class.png)]",
      )}
    >
      <div
        className="relative mx-auto flex w-full max-w-[688px] flex-col items-center justify-center gap-3 bg-white px-4 pt-[86px] pb-[36px] md:px-10 md:pt-[88px] md:pb-10 xl:max-w-[1056px] xl:flex-row xl:gap-5 xl:pt-14"
        onClick={(e) => e.stopPropagation()}
      >
        <CardModalWindow page={modalType} />
        <div className="text-text min-h-[600px] w-full bg-amber-300">
          kfdndfnkg
        </div>
        <button
          onClick={closeModal}
          className="absolute top-[38px] right-4 cursor-pointer md:top-10 md:right-10 xl:top-5"
        >
          <IconClose className="fill-text hover:fill-hover transition-all duration-300" />
        </button>
      </div>
    </div>
  );
}

export default ModalWindow;
