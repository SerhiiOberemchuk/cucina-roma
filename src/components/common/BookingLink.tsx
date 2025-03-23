import LinkYelow from "./LinkYelow";
type Props = { className?: string };

const { LINK_CALENDLY } = process.env;

function BookingLink({ className }: Props) {
  return (
    <LinkYelow
      href={LINK_CALENDLY || "/"}
      className={className}
      linkTitle="Бронювати"
    />
  );
}

export default BookingLink;
