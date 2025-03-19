import { cn } from "@/utils/cn";
import Link from "next/link";

type Props = {
  href: string;
  linkName?: string;
  type: "header" | "footer";
  className?: string;
};

function NavLink({ href, linkName, type, className }: Props) {
  return (
    <Link
      href={href}
      className={cn(
        "px-4 py-3 font-medium transition-all duration-500",
        type === "header"
          ? "text-[14px] leading-[150%] uppercase"
          : "text-[20px] leading-[130%] capitalize md:text-[24px]",
        className,
      )}
    >
      {linkName?.toLocaleLowerCase()}
    </Link>
  );
}

export default NavLink;
