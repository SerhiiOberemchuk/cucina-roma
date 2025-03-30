import { cn } from "@/utils/cn";
import Link from "next/link";
import React from "react";

type Props = { href: string; className?: string; title: string };

function ItemLinks({ href, className, title }: Props) {
  return (
    <li
      className={cn(
        "hover:text-hover active:text-pressed transition-all duration-300",
        className,
      )}
    >
      <Link href={href}>{title}</Link>
    </li>
  );
}

export default ItemLinks;
