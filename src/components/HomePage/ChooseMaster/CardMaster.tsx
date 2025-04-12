import Image from "next/image";
import IconTime from "../../../assets/icons/icon_time.svg";
import IconPrice from "../../../assets/icons/icon_price.svg";
import LinkYelow from "@/components/common/Links/LinkYelow";
import { DataCardMaster } from "../../../data/dataMaster";

function CardMaster({
  src,
  name,
  prise,
  duration,
  page,
  linkTitle,
}: DataCardMaster) {
  return (
    <div className="flex max-w-[334px] flex-col gap-4">
      <Image src={src} width={334} height={360} alt={name} className="" />
      <h3 className="textH3 text-text">{name}</h3>
      <ul>
        <li className="mb-1 flex items-center gap-2">
          <IconTime />
          <p className="big_text">{duration} години</p>
        </li>
        <li className="flex items-center gap-2">
          <IconPrice />
          <p className="big_text">{prise} €</p>
        </li>
      </ul>
      <LinkYelow
        href={`master/${page}`}
        linkTitle={linkTitle}
        className="text-center"
      />
    </div>
  );
}

export default CardMaster;
