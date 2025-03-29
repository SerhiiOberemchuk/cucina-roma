import WhatsUpIcon from "@/assets/icons/whatsapp.svg";
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
      <WhatsUpIcon
        className={cn(
          "hover:fill-hover active:fill-pressed transition-all duration-500",
          place === "hero_section"
            ? "fill-whatsup h-12 w-12"
            : "fill-yellow_main h-6 w-6",
        )}
      />
    </a>
  );
}

export default WhatsAppLink;
