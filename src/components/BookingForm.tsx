import { useState } from "react";
import {
  FaCalendarAlt,
  FaUsers,
  FaBirthdayCake,
  FaClock,
} from "react-icons/fa";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
const timeOptions = ["17:00 pm", "18:00 pm", "19:00 pm", "20:00 pm", "21:00 pm", "22:00 pm"];

export default function BookingForm() {
  const [locationStatus, setLocationStatus] = useState<
    "Indoor" | "Outdoor" | null
  >(null);
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState<number | undefined>(undefined);
  const [occasion, setOccasion] = useState("");
  const [time, setTime] = useState("");

  const [isTimeOpen, setIsTimeOpen] = useState(false);
  const [isOccasionOpen, setIsOccasionOpen] = useState(false);
  const [isGuestsOpen, setIsGuestsOpen] = useState(false);

  const options = ["Birthday", "Anniversary"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = { locationStatus, date, guests, occasion, time };
    console.log("Form Submitted:", formData);
  };

  return (
    <section className="h-[70vh] flex flex-col lg:px-60 py-7 px-4 bg-secondary/90 gap-4">
      <h1 className="lg:text-3xl font-bold text-primary tracking-wide">
        Reservations
      </h1>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Indoor / Outdoor */}
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
              <FaCalendarAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="date"
                id="res-date"
                name="res-date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="border-2 border-gray-300 rounded pl-10 pr-2 py-3 bg-white/90 w-full"
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
              <div
                className="flex items-center justify-between border-2 border-gray-300 rounded px-4 py-3 bg-white/90 text-secondary font-bold cursor-pointer"
                onClick={() => setIsGuestsOpen((prev) => !prev)}
              >
                <div className="flex gap-4 items-center">
                  <FaUsers />
                  <span className="text-secondary font-bold text-lg">{guests ? `${guests} Diner${guests !== 1 ? "s" : ""}` : "No of Diner"}</span>
                      </div>
                {isGuestsOpen ? (
                  <BsChevronUp className="text-gray-500 absolute right-3 top-1/2 -translate-y-1/2" />
                ) : (
                  <BsChevronDown className="text-gray-500 absolute right-3 top-1/2 -translate-y-1/2" />
                )}
              </div>
              {isGuestsOpen && (
                <div className="absolute top-full left-0 flex justify-center flex-wrap bg-white border border-gray-300 rounded  z-10 shadow-lg">
                  {[...Array(10)].map((_, i) => (
                    <div
                      key={i}
                      className="px-4 py-2 hover:bg-primary/20 w-[50%] text-secondary cursor-pointer text-center"
                      onClick={() => {
                        setGuests(i + 1);
                        setIsGuestsOpen(false);
                      }}
                    >
                      {i + 1} Diner{i + 1 !== 1 ? "s" : ""}
                    </div>
                  ))}
                </div>
              )}
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
              {/* Select Box */}
              <div
                className="flex items-center justify-between border-2 border-gray-300 bg-white rounded px-4 py-3  font-bold cursor-pointer"
                onClick={() => setIsOccasionOpen((prev) => !prev)}
              >
                <div className="flex items-center gap-5">
                  <FaBirthdayCake className="text-gray-500" />
                  <span className="text-lg text-secondary">{occasion ? occasion : "Occasion"}</span>
                </div>
                {isOccasionOpen ? (
                  <BsChevronUp className="text-gray-500" />
                ) : (
                  <BsChevronDown className="text-gray-500" />
                )}
              </div>

              {/* Dropdown List */}
              {isOccasionOpen && (
                <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded mt-1 z-10 shadow-lg">
                  {options.map((opt) => (
                    <div
                      key={opt}
                      className="px-4 py-2 hover:bg-primary/20  cursor-pointer"
                      onClick={() => {
                        setOccasion(opt);
                        setIsOccasionOpen(false);
                      }}
                    >
                      {opt}
                    </div>
                  ))}
                </div>
              )}
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
              <div
                id="res-time"
                onClick={() => setIsTimeOpen((prev) => !prev)}
                className="border-2 flex items-center justify-between border-gray-300 rounded  py-4 bg-white/90 text-secondary font-bold w-full"
              >
                <div className="flex items-center gap-5 px-4">
                  <FaClock />
                  <span>
                    {time ? time : "Select Time"}
                  </span>
                </div>

                {isTimeOpen ? (
                  <BsChevronUp className="text-gray-500 absolute right-3 top-1/2 -translate-y-1/2" />
                ) : (
                  <BsChevronDown className="text-gray-500 absolute right-3 top-1/2 -translate-y-1/2" />
                )}
              </div>
              {isTimeOpen && (
                <div className="absolute top-full flex flex-wrap justify-between items-center left-0 w-full bg-white border border-gray-300 rounded mt-1 z-10 shadow-lg">
                  {timeOptions.map((opt) => (
                    <div
                      key={opt}
                      className="px-4 py-2 font-bold hover:bg-primary/20 cursor-pointer w-[50%] text-center"
                      onClick={() => {
                        setTime(opt);
                        setIsTimeOpen(false);
                      }}
                    >
                      {opt}
                    </div>
                  ))}
                </div>
              )}
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
