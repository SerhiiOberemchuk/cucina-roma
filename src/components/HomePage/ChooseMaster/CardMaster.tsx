import Image from "next/image";
import IconTime from "../../../assets/icons/icon_time.svg";
import IconPrice from "../../../assets/icons/icon_price.svg";
import LinkYelow from "@/components/common/LinkYelow";
import { DataCardMaster } from "./dataMaster";

function CardMaster({
  src,
  name,
  prise,
  duration,
  href,
  linkTitle,
}: DataCardMaster) {
  return (
    <div className="flex max-w-[334px] flex-col gap-4">
      <Image src={src} width={334} height={360} alt={name} className="" />
      <h3 className="textH3 text-text">{name}</h3>
      <div>
        <div className="mb-1 flex items-center gap-2">
          <IconTime />
          <p className="big_text">{duration} години</p>
        </div>
        <div className="flex items-center gap-2">
          <IconPrice />
          <p className="big_text">{prise} €</p>
        </div>
      </div>
      <LinkYelow href={href} linkTitle={linkTitle} className="text-center" />
    </div>
  );
}

export default CardMaster;
