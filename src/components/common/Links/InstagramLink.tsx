import InstagramIcon from "@/assets/icons/instagram.svg";
import { cn } from "@/utils/cn";
type Props = { isIcon?: boolean; className?: string };
function InstagramLink({ isIcon = true, className }: Props) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Посилання на сторінку інстаграм"
      href="https://www.instagram.com/guide_transfer_roma?igsh=eGNhZjg4NThhNXRl&utm_source=qr"
      className={cn(
        "btn_text text-main_blue hover:text-hover inline-flex h-fit w-fit items-center justify-center transition-all duration-300",
        className,
      )}
    >
      {isIcon ? (
        <InstagramIcon className="fill-yellow_main stroke-main_blue hover:fill-hover active:fill-pressed transition-all duration-500" />
      ) : (
        "@guide_transfer_roma"
      )}
    </a>
  );
}

export default InstagramLink;
