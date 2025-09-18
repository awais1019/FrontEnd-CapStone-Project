declare function fetchAPI(date: Date): string[];
declare function submitAPI(formData: BookingFormData): boolean;



interface BookingFormData {
  locationStatus: "Indoor" | "Outdoor" | null;
  date: string;
  time: string;
  guests: number | undefined;
  occasion: string;
}


