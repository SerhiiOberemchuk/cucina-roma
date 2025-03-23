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
        "fixed top-0 right-0 left-0 flex h-screen w-full items-center justify-center bg-cover bg-center",
        modalType === "/pay_card"
          ? "bg-[url(/images/pay_cart.png)]"
          : "bg-[url(/images/pay_class.png)]",
      )}
    >
      <div
        className="relative w-full bg-white px-10 pt-14 pb-10 xl:max-w-[1056px]"
        onClick={(e) => e.stopPropagation()}
      >
        <CardModalWindow page={modalType} />
        <button
          onClick={closeModal}
          className="absolute top-5 right-10 cursor-pointer"
        >
          <IconClose className="fill-text hover:fill-hover transition-all duration-300" />
        </button>
      </div>
    </div>
  );
}

export default ModalWindow;
