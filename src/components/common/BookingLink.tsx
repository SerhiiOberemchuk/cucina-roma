import LinkYelow from "./LinkYelow";
type Props = { className?: string };
function BookingLink({ className }: Props) {
  return <LinkYelow href="/" className={className} linkTitle="Бронювати" />;
}

export default BookingLink;
