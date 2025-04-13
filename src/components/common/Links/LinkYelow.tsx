import { cn } from "@/utils/cn";
import Link from "next/link";

type Props = {
  href: string;
  linkTitle: string;
  className?: string;
  type?: "nextLink" | "aLink";
  aria_label?: string;
};

function LinkYelow({
  href,
  linkTitle,
  className,
  type = "nextLink",
  aria_label,
}: Props) {
  if (type === "nextLink") {
    return (
      <Link
        href={href}
        className={cn(
          "bg-yellow_main btn_text text-main_blue active:bg-pressed hover:bg-hover w-full rounded-3xl px-8 py-2.5 text-[16px] leading-[150%] font-medium transition-all duration-300",
          className,
        )}
      >
        {linkTitle}
      </Link>
    );
  }
  return (
    <a
      href={href}
      className={cn(
        "bg-yellow_main btn_text text-main_blue active:bg-pressed hover:bg-hover w-full rounded-3xl px-8 py-2.5 text-[16px] leading-[150%] font-medium transition-all duration-300",
        className,
      )}
      aria-label={aria_label}
    >
      {linkTitle}
    </a>
  );
}

export default LinkYelow;
