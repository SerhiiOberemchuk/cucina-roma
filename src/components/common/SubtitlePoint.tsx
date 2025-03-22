import { cn } from "@/utils/cn";

type Props = { text: string; className?: string };

function SubtitlePoint({ text, className }: Props) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="flex h-7 w-7 items-center justify-center">
        <div className="bg-yellow_main h-2 w-2 rounded-full" />
      </div>
      <span className="textH4 text-grey_stroke_logo uppercase">{text}</span>
    </div>
  );
}

export default SubtitlePoint;
