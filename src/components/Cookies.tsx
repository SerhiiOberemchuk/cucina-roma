"use client";
import { useEffect, useState } from "react";
import ButtonYelow from "./common/ButtonYelow";

const keyOfLocalStorageCookies = "isCookiesAccepted";
const CookiesAccepted = "CookiesAccepted";

function Cookies() {
  const [isCookies, setIsCookies] = useState<string | null>(CookiesAccepted);

  useEffect(() => {
    const value = localStorage.getItem(keyOfLocalStorageCookies);
    setIsCookies(value);
  }, []);

  if (isCookies) return null;

  const handleClickCookies = () => {
    localStorage.setItem(keyOfLocalStorageCookies, CookiesAccepted);
    setIsCookies("true");
  };
  return (
    <div className="fixed right-[2%] bottom-[74px] z-50 rounded-[12px] bg-white p-6 shadow-2xl [box-shadow:0px_4px_4px_0px_rgba(0,0,0,0.25)] md:right-[88px] md:p-8">
      <p className="mb-3 max-w-[280px]">
        Цей сайт використовує cookies 🍪
        <br />
        Ви можете змінити налаштування <br /> у будь-який момент.
      </p>
      <ButtonYelow title="Прийняти і закрити" onClick={handleClickCookies} />
    </div>
  );
}

export default Cookies;
