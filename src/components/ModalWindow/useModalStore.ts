import { DataCardMaster } from "@/data/dataMaster";
import { create } from "zustand";

export type PageType = "/pay_card" | DataCardMaster["page"];

export type ModalState = {
  modalType: PageType;
  isModalOpen: boolean;
  openModal: (modalType: PageType) => void;
  closeModal: () => void;
};

export const useModalStore = create<ModalState>()((set) => ({
  modalType: "/pay_card",
  isModalOpen: false,
  openModal: (modalType) => set(() => ({ isModalOpen: true, modalType })),
  closeModal: () => set(() => ({ isModalOpen: false, modalType: "/pay_card" })),
}));
