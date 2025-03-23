import { cn } from "@/utils/cn";

type Props = { title: string; className?: string; onClick: () => void };

function ButtonYelow({ title, className, onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "bg-yellow_main btn_text text-main_blue active:bg-pressed hover:bg-hover w-full rounded-3xl px-8 py-2.5 text-[16px] leading-[150%] font-medium transition-all duration-300",
        className,
      )}
    >
      {title}
    </button>
  );
}

export default ButtonYelow;
