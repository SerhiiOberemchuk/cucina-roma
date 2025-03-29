"use client";

import { DataCardMaster } from "@/data/dataMaster";
import ButtonYelow from "../../ButtonYelow";
import { useModalStore } from "@/components/ModalWindow/useModalStore";

function ButtonBuyMaster({ page }: Pick<DataCardMaster, "page">) {
  const { openModal } = useModalStore();
  return (
    <ButtonYelow
      title="Замовити"
      className="cursor-pointer text-center md:w-fit"
      onClick={() => openModal(page)}
    />
  );
}

export default ButtonBuyMaster;
