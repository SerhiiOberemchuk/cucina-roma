import Image from "next/image";
import React from "react";
import { PageType } from "./useModalStore";
import { dataModalWindow } from "@/data/dataModalWindow";

function CardModalWindow({ page }: { page: PageType }) {
  const { imgUrl, title, subtitle, description, root } = dataModalWindow.filter(
    (item) => item.page === page,
  )[0];
  return (
    <div className="w-full xl:max-w-[494px]">
      <Image src={imgUrl} width={494} height={220} alt={title} />
      <div className="mt-6">
        {page !== "/pay_card" ? (
          <p className="btn_text text-text mb-1">{subtitle}</p>
        ) : null}
        <h2 className="textH2 text-text">{title}</h2>
      </div>

      <ul className="flex flex-col gap-6">
        {description.map((item, index) => (
          <li key={index}>
            <p>{item}</p>
          </li>
        ))}
      </ul>
      <p className="text-text btn_text mt-3 font-medium">{root}</p>
    </div>
  );
}

export default CardModalWindow;
