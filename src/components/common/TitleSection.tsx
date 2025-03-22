import { cn } from "@/utils/cn";

type Props = { className?: string; title: string };

function TitleSection({ className, title }: Props) {
  return <h2 className={cn("textH1 text-main_blue", className)}>{title}</h2>;
}

export default TitleSection;
