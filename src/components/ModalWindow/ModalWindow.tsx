"use client";
import { useModalStore } from "./useModalStore";

function ModalWindow() {
  const { isModalOpen, modalType, closeModal } = useModalStore();

  if (!isModalOpen) return null;
  return (
    <div className="fixed top-0 right-0 left-0 flex h-screen w-full items-center justify-center bg-black/90">
      <div className="h-52 w-52">
        <p className="text-white">ModalWindow {modalType}</p>
        <button
          onClick={closeModal}
          className="cursor-pointer rounded-3xl bg-amber-300 p-2.5"
        >
          Close modal
        </button>
      </div>
    </div>
  );
}

export default ModalWindow;
