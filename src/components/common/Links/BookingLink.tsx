import { LINK_CALENDLY } from "@/data/linkClendly";
import LinkYelow from "./LinkYelow";
type Props = { className?: string };

function BookingLink({ className }: Props) {
  return (
    <LinkYelow
      href={LINK_CALENDLY}
      className={className}
      linkTitle="Бронювати"
    />
  );
}

export default BookingLink;
