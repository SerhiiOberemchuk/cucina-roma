import { cn } from "@/utils/cn";
import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
};

function ButtonYelow({ title, className, type = "button", ...rest }: Props) {
  return (
    <button
      type={type}
      {...rest}
      className={cn(
        "bg-yellow_main btn_text text-main_blue active:bg-pressed hover:bg-hover w-full cursor-pointer rounded-3xl px-8 py-2.5 text-[16px] leading-[150%] font-medium transition-all duration-300",
        className,
      )}
    >
      {title}
    </button>
  );
}

export default ButtonYelow;
