import { cn } from "@/utils/cn";

type Props = { className?: string; children: React.ReactNode };

function TextBody({ className, children }: Props) {
  return <p className={cn("text-text", className)}>{children}</p>;
}

export default TextBody;
