import { cn } from "@/utils/cn";

type Props = { className?: string; children?: React.ReactNode };

function Container({ className, children }: Props) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1440px] px-4 md:px-10 xl:px-[120px]",
        className,
      )}
    >
      {children}
    </div>
  );
}

export default Container;
