"use client";
import { useEffect, useState } from "react";
import ButtonYelow from "./common/ButtonYelow";
import {
  COOKIE_CONSENT_ACCEPTED,
  COOKIE_CONSENT_DECLINED,
  COOKIE_CONSENT_STORAGE_KEY,
  updateConsent,
} from "@/utils/analytics";

function Cookies() {
  const [cookieConsent, setCookieConsent] = useState<string | null>(
    COOKIE_CONSENT_ACCEPTED,
  );

  useEffect(() => {
    const value = localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
    setCookieConsent(value);
  }, []);

  if (cookieConsent) return null;

  const handleAcceptCookies = () => {
    localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, COOKIE_CONSENT_ACCEPTED);
    setCookieConsent(COOKIE_CONSENT_ACCEPTED);
    updateConsent(true);
  };

  const handleDeclineCookies = () => {
    localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, COOKIE_CONSENT_DECLINED);
    setCookieConsent(COOKIE_CONSENT_DECLINED);
    updateConsent(false);
  };

  return (
    <div className="fixed right-[2%] bottom-[74px] z-50 rounded-[12px] bg-white p-6 shadow-2xl [box-shadow:0px_4px_4px_0px_rgba(0,0,0,0.25)] md:right-[88px] md:p-8">
      <p className="mb-3 max-w-[280px]">
        Цей сайт використовує cookies 🍪
        <br />
        Ви можете змінити налаштування <br /> у будь-який момент.
      </p>
      <div className="flex flex-col gap-2">
        <ButtonYelow title="Прийняти і закрити" onClick={handleAcceptCookies} />
        <button
          type="button"
          onClick={handleDeclineCookies}
          className="btn_text text-main_blue w-full cursor-pointer rounded-3xl border border-current px-8 py-2.5 text-[16px] leading-[150%] font-medium transition-all duration-300 hover:opacity-80"
        >
          Відхилити
        </button>
      </div>
    </div>
  );
}

export default Cookies;
