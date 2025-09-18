export const initialAvailableTimes = [
  "17:00 pm",
  "18:00 pm",
  "19:00 pm",
  "20:00 pm",
  "21:00 pm",
  "22:00 pm",
];

export function getTodayDate(): string {
  const today = new Date();
  return today.toISOString().split("T")[0];
}