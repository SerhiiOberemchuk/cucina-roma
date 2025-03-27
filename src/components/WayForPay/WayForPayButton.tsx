"use client";

import ButtonYelow from "../common/ButtonYelow";
import { getForm } from "./operation";

export default function WayForPayButton() {
  const handleGoToPay = async () => {
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
    else console.error("Форма не знайдена");
  };

  return <ButtonYelow onClick={handleGoToPay} title="Купити" />;
}
