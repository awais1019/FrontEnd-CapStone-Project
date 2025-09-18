import BookingForm from "../components/BookingForm";

type Props = {
  time: string[];
  dispatch: React.Dispatch<{ type: string; payload?: string }>;
};





export default function BookingPage({ time, dispatch }: Props) {
  return <BookingForm time={time} dispatch={dispatch} />;
}
