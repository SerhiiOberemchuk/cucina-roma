import WhatsUpIcon from "@/assets/icons/whats_up.svg";
import WhatsAppIconGreen from "@/assets/icons/IconWhatsAppGreen.svg";
import { cn } from "@/utils/cn";

type Props = { place: "footer" | "hero_section"; className?: string };

function WhatsAppLink({ place, className }: Props) {
  return (
    <a
      href="https://wa.me/393249888194"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Посилання на номер телефону ватсапп"
      className={cn(
        "inline-flex h-fit w-fit items-center justify-center",
        place === "hero_section" &&
          "absolute -top-6 right-[10px] z-0 h-12 w-12 md:-top-14 md:right-16 xl:right-28",
        className,
      )}
    >
      {place === "footer" && (
        <WhatsUpIcon className="fill-yellow_main stroke-main_blue hover:fill-hover active:fill-pressed transition-all duration-500" />
      )}
      {place === "hero_section" && (
        <WhatsAppIconGreen className="fill-yellow_main stroke-main_blue hover:fill-hover active:fill-pressed transition-all duration-500" />
      )}
    </a>
  );
}

export default WhatsAppLink;
