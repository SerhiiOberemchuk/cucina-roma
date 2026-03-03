"use client";

import { cn } from "@/utils/cn";
import Link from "next/link";
import { trackEvent } from "@/utils/analytics";

type Props = {
  href: string;
  linkTitle: string;
  className?: string;
  type?: "nextLink" | "aLink";
  aria_label?: string;
};

function LinkYelow({
  href,
  linkTitle,
  className,
  type = "nextLink",
  aria_label,
}: Props) {
  const handleTrackClick = () => {
    const title = linkTitle.toLowerCase();
    const isBookingCta =
      title.includes("броню") || title.includes("замов") || title.includes("book");

    if (!isBookingCta) return;

    trackEvent("booking_cta_click", {
      event_category: "cta",
      event_label: `${linkTitle}:${href}`,
    });
  };

  if (type === "nextLink") {
    return (
      <Link
        href={href}
        onClick={handleTrackClick}
        className={cn(
          "bg-yellow_main btn_text text-main_blue active:bg-pressed hover:bg-hover w-full rounded-3xl px-8 py-2.5 text-[16px] leading-[150%] font-medium transition-all duration-300",
          className,
        )}
      >
        {linkTitle}
      </Link>
    );
  }
  return (
    <a
      href={href}
      onClick={handleTrackClick}
      className={cn(
        "bg-yellow_main btn_text text-main_blue active:bg-pressed hover:bg-hover w-full rounded-3xl px-8 py-2.5 text-[16px] leading-[150%] font-medium transition-all duration-300",
        className,
      )}
      aria-label={aria_label}
    >
      {linkTitle}
    </a>
  );
}

export default LinkYelow;
