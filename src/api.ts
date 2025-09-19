
function seededRandom(seed: number) {
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
}


export interface BookingFormData {
  locationStatus: "Indoor" | "Outdoor" | null;
  date: string;
  time: string;
  guests: number | undefined;
  occasion: string;
}


export function fetchAPI(date: Date): string[] {
  const result: string[] = [];
  const random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    }
    if (random() < 0.5) {
      result.push(i + ":30");
    }
  }
  return result;
}


export function submitAPI(formData: BookingFormData): boolean {
  console.log("Form submitted:", formData);
  return true;
}
