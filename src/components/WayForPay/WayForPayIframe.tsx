"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    Wayforpay: any;
  }
}

type Props = {
  buttonId: string; // частина після `/button/` в URL
  label?: string;
};

const WayForPayWidgetButton = ({ buttonId, label = "Оплатити" }: Props) => {
  useEffect(() => {
    const existing = document.getElementById("widget-wfp-script");
    if (!existing) {
      const script = document.createElement("script");
      script.id = "widget-wfp-script";
      script.src =
        "https://secure.wayforpay.com/server/pay-widget.js?ref=button";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const handleClick = () => {
    if (typeof window !== "undefined" && window.Wayforpay) {
      const wayforpay = new window.Wayforpay();
      wayforpay.invoice(`https://secure.wayforpay.com/button/${buttonId}`);
    } else {
      alert("WayForPay ще не завантажився. Спробуйте пізніше.");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="rounded-lg bg-[#0488cd] px-6 py-3 font-semibold text-white transition hover:opacity-90"
    >
      {label}
    </button>
  );
};

export default WayForPayWidgetButton;
