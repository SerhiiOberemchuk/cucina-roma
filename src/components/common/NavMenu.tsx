import { cn } from "@/utils/cn";

type Props = {
  className?: string;
  type: "header" | "mobilemenu" | "footer";
  onClick?: () => void;
};

function NavMenu({ className, type, onClick }: Props) {
  return (
    <nav className={cn(className)}>
      <NavLink
        onClick={onClick}
        href="/#about"
        type={type}
        linkName="Про нас"
      />

      <NavLink
        onClick={onClick}
        href="/#master"
        type={type}
        linkName="Майстер-класи"
      />
    </nav>
  );
}

export default NavMenu;

type PropsLink = {
  href: string;
  linkName: string;
} & Pick<Props, "type" | "onClick">;

function NavLink({ href, linkName, type, onClick }: PropsLink) {
  return (
    <a
      onClick={onClick}
      href={href}
      className={cn(
        "hover:text-hover active:text-pressed leading-[150%] font-medium tracking-[0.01em] transition-all duration-500",
        type === "header" && "px-4 py-3 text-[14px] text-white uppercase",
        type === "mobilemenu" &&
          "px-4 py-3 text-[14px] leading-[130%] uppercase md:text-[14px]",
        type === "footer" && "tracking-wide text-white",
      )}
    >
      {linkName}
    </a>
  );
}
