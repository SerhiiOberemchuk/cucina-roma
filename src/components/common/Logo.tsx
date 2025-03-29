import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";

type Props = { className?: string; type: "header" | "footer" };

function Logo({ className, type }: Props) {
  return (
    <Link
      href={"/"}
      className={cn(
        type === "header"
          ? "h-[50px] w-[150px] md:h-[67px] md:w-[211px]"
          : null,
        className,
      )}
    >
      <Image
        src={"/icons/logo_horiz.svg"}
        width={211}
        height={67}
        alt="Посилання на головну сторінку"
      />
    </Link>
  );
}

export default Logo;
