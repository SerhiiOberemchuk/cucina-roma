"use client";

import { useState } from "react";
import ButtonYelow from "../common/ButtonYelow";
import { getForm } from "./operation";
import LoadingSpiner from "../common/LoadingSpiner";

export default function WayForPayButton({ className }: { className?: string }) {
  const [isLoader, setIsLoder] = useState(false);
  const handleGoToPay = async () => {
    setIsLoder(true);
    document.body.classList.add("overflow-hidden");
    try {
      const html = await getForm();

      let container = document.getElementById("wayforpay-container");
      if (!container) {
        container = document.createElement("div");
        container.id = "wayforpay-container";
        document.body.appendChild(container);
      }

      container.innerHTML = html;

      const form = document.getElementById("wayforpayForm") as HTMLFormElement;
      if (form) form.submit();
      else {
        console.error("Форма не знайдена");
        setIsLoder(false);
      }
    } catch (error) {
      console.error("Помилка при оплаті", error);
      setIsLoder(false);
    } finally {
      setIsLoder(false);
      document.body.classList.remove("overflow-hidden");
    }
  };

  return (
    <>
      {isLoader && <LoadingSpiner />}
      <ButtonYelow
        onClick={handleGoToPay}
        title="Купити"
        className={className}
      />
    </>
  );
}
