import LinkYelow from "./LinkYelow";
type Props = { className?: string };
function BookingLink({ className }: Props) {
  return <LinkYelow href="df" className={className} linkTitle="Бронювати" />;
}

export default BookingLink;
