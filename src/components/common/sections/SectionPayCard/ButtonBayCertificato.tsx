"use client";
import {
  ModalState,
  useModalStore,
} from "@/components/ModalWindow/useModalStore";
import ButtonYelow from "../../ButtonYelow";

const ButtonBayCertificato = ({ modalType }: Pick<ModalState, "modalType">) => {
  const { openModal } = useModalStore();
  return (
    <ButtonYelow
      className="cursor-pointer text-center md:w-fit"
      onClick={() => openModal(modalType)}
      title="Купити"
    />
  );
};

export default ButtonBayCertificato;
