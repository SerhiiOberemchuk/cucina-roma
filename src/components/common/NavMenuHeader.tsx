import React from "react";
import NavLink from "./NavLink";
import { cn } from "@/utils/cn";

type Props = { className?: string; type: "header" | "mobilemenu" };

function NavMenuHeader({ className, type }: Props) {
  return (
    <div className={cn(className)}>
      <NavLink
        href="#about"
        type="header"
        linkName="про нас"
        className={cn(
          type === "header"
            ? "hover:text-hover active:text-pressed text-white"
            : "",
        )}
      />
      <NavLink
        href="#master"
        type="header"
        linkName="Майстер-класи"
        className={cn(
          type === "header"
            ? "hover:text-hover active:text-pressed text-white"
            : "",
        )}
      />
    </div>
  );
}

export default NavMenuHeader;
