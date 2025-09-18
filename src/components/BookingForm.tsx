import { useState } from "react";
import {
  FaCalendarAlt,
  FaUsers,
  FaBirthdayCake,
  FaClock,
} from "react-icons/fa";

export default function BookingForm() {

  const [locationStatus,setLocationStatus]=useState<"Indoor" | "Outdoor" | null>(null)
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");
  const [time, setTime] = useState("");

 
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = { locationStatus, date, guests, occasion, time };
    console.log("Form Submitted:", formData);
  };

  return (
    <section className="h-[60vh] flex flex-col lg:px-60 py-4 px-4 bg-secondary/90 gap-4">
      <h1 className="lg:text-3xl font-bold text-primary tracking-wide">
        Reservations
      </h1>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
  
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex items-center gap-2 w-full">
            <label
              htmlFor="indoor"
              className="font-medium text-white/80 text-lg"
            >
              Indoor Setting
            </label>
            <input
              type="checkbox"
              id="indoor"
              name="indoor"
              checked={locationStatus === "Indoor"}
              onChange={() => setLocationStatus("Indoor")}
            />
          </div>
          <div className="flex items-center gap-2 w-full">
            <label
              htmlFor="outdoor"
              className="font-medium text-white/80 text-lg"
            >
              Outdoor Setting
            </label>
            <input
              type="checkbox"
              id="outdoor"
              name="outdoor"
              checked={locationStatus === "Outdoor"}
              onChange={() => setLocationStatus("Outdoor")}
            />
          </div>
        </div>

        {/* Parent div for date, guests, occasion and time */}
        <div className="flex flex-col gap-4">
          {/* Date + Guests */}
          <div className="flex flex-row items-center gap-8">
            {/* Date Input */}
            <div className="flex justify-between flex-row lg:flex-col w-full gap-2">
              <label
                htmlFor="res-date"
                className="font-medium text-white/80 text-lg"
              >
                Date
              </label>
              <div className="relative w-full">
                <FaCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type="date"
                  id="res-date"
                  name="res-date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="border-2 border-gray-300 rounded px-10 py-2 bg-white/90 w-full"
                />
              </div>
            </div>

            {/* Guests Input */}
            <div className="flex justify-between flex-row lg:flex-col w-full gap-2">
              <label
                htmlFor="guests"
                className="font-medium text-white/80 text-lg"
              >
                Number of Diners
              </label>
              <div className="relative w-full">
                <FaUsers className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type="number"
                  id="guests"
                  name="guests"
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  placeholder="1"
                  min={1}
                  max={10}
                  className="border-2 border-gray-300 rounded px-10 py-2 bg-white/90 w-full"
                />
              </div>
            </div>
          </div>

          {/* Occasion + Time */}
          <div className="flex flex-row items-center gap-8">
            {/* Occasion Select */}
            <div className="flex justify-between flex-row lg:flex-col w-full gap-2">
              <label
                htmlFor="occasion"
                className="font-medium text-white/80 text-lg"
              >
                Occasion
              </label>
              <div className="relative w-full">
                <FaBirthdayCake className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <select
                  id="occasion"
                  name="occasion"
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                  className="border-2 border-gray-300 rounded px-10 py-2 bg-white/90 text-secondary font-bold w-full"
                >
                  <option value="">Select Occasion</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Anniversary">Anniversary</option>
                </select>
              </div>
            </div>

            {/* Time Select */}
            <div className="flex justify-between flex-row lg:flex-col w-full gap-2">
              <label
                htmlFor="res-time"
                className="font-medium text-white/80 text-lg"
              >
                Time
              </label>
              <div className="relative w-full">
                <FaClock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <select
                  id="res-time"
                  name="res-time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="border-2 border-gray-300 rounded px-10 py-2 bg-white/90 text-secondary font-bold w-full"
                >
                  <option value="">Select Time</option>
                  <option value="17:00">17:00</option>
                  <option value="18:00">18:00</option>
                  <option value="19:00">19:00</option>
                  <option value="20:00">20:00</option>
                  <option value="21:00">21:00</option>
                  <option value="22:00">22:00</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 w-[50%] mx-auto bg-primary text-white font-bold py-2 px-6 rounded-lg hover:bg-primary/80 transition"
        >
          Reserve Now
        </button>
      </form>
    </section>
  );
}
