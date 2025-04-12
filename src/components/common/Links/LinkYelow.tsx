import { cn } from "@/utils/cn";
import Link from "next/link";

type Props = { href: string; linkTitle: string; className?: string };

function LinkYelow({ href, linkTitle, className }: Props) {
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

export default LinkYelow;
