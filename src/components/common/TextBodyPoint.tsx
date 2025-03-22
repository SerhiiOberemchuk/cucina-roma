import { cn } from "@/utils/cn";
import TextBody from "./TextBody";

type Props = { className?: string; children: React.ReactNode };

function TextBodyPoint({ className, children }: Props) {
  return (
    <div className={cn("flex w-full flex-row", className)}>
      <div className="flex h-7 min-w-7 items-center justify-center">
        <div className="bg-yellow_main h-2 w-2 rounded-full" />
      </div>

      <TextBody>{children}</TextBody>
    </div>
  );
}

export default TextBodyPoint;
