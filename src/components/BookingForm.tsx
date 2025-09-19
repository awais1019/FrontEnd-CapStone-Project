import { useState } from "react";
import {
  FaCalendarAlt,
  FaUsers,
  FaBirthdayCake,
  FaClock,
} from "react-icons/fa";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { submitAPI } from "../api";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type Props = {
  time: string[];
  dispatch: React.Dispatch<{ type: string; payload?: string }>;
};

const bookingSchema = z.object({
locationStatus: z.enum(["Indoor", "Outdoor"]).refine((val) => val, {
  message: "Location is required",
}),
  date: z.string().min(1, "Date is required"),
  guests: z.number().min(1, "Please select number of diner"),
  occasion: z.string().min(1, "Occasion is required"),
  time: z.string().min(1, "Please select a time"),
});

type BookingFormData = z.infer<typeof bookingSchema>;

export default function BookingForm({ time, dispatch }: Props) {
  const [isTimeOpen, setIsTimeOpen] = useState(false);
  const [isOccasionOpen, setIsOccasionOpen] = useState(false);
  const [isGuestsOpen, setIsGuestsOpen] = useState(false);

  const options = ["Birthday", "Anniversary"];
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
    locationStatus: undefined,
    guests: undefined,
    occasion: "",
    time: "",
    date: "",
  },
  });


  const selectedGuests = watch("guests");
  const selectedOccasion = watch("occasion");
  const selectedTime = watch("time");

  const onSubmit = (formData: BookingFormData) => {
    const success = submitAPI(formData);
    if (success) {
      navigate("/confirmed");
    }
  };

  return (
    <section className="h-[70vh] flex flex-col lg:px-60 py-7 px-4 bg-secondary/90 gap-4">
      <h1 className="lg:text-3xl font-bold text-primary tracking-wide">
        Reservations
      </h1>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        {/* Indoor / Outdoor */}
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex items-center gap-2 w-full">
            <label htmlFor="indoor" className="font-medium text-white/80 text-lg">
              Indoor Setting
            </label>
            <input
              type="radio"
              id="indoor"
              value="Indoor"
              {...register("locationStatus")}
            />
          </div>
          <div className="flex items-center gap-2 w-full">
            <label htmlFor="outdoor" className="font-medium text-white/80 text-lg">
              Outdoor Setting
            </label>
            <input
              type="radio"
              id="outdoor"
              value="Outdoor"
              {...register("locationStatus")}
            />
          </div>
        </div>
        {errors.locationStatus && (
          <p className="text-red-500 text-sm">{errors.locationStatus.message}</p>
        )}


        {/* Date + Guests */}
        <div className="flex flex-row items-center gap-8">
          {/* Date Input */}
          <div className="flex justify-between flex-row lg:flex-col w-full gap-2">
            <label htmlFor="res-date" className="font-medium text-white/80 text-lg">
              Date
            </label>
            <div className="relative w-full">
              <FaCalendarAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="date"
                id="res-date"
                {...register("date")}
                onChange={(e) => {
                  setValue("date", e.target.value, { shouldValidate: true });
                  dispatch({
                    type: "UPDATE_DATE",
                    payload: e.target.value,
                  });
                }}
                className="border-2 border-gray-300 rounded pl-10 pr-2 py-3 bg-white/90 w-full"
              />
            </div>
            {errors.date && (
              <p className="text-red-500 text-sm">{errors.date.message}</p>
            )}
          </div>

          {/* Guests Input */}
          <div className="flex justify-between flex-row lg:flex-col w-full gap-2">
            <label id="guests-label" className="font-medium text-white/80 text-lg cursor-pointer" 
            onClick={() => setIsGuestsOpen((prev) => !prev)}>
              Number of Diners
            </label>
            <div className="relative w-full">
              <div
              aria-labelledby="guests-label"
                className="flex items-center justify-between border-2 border-gray-300 rounded px-4 py-3 bg-white/90 text-secondary font-bold cursor-pointer"
                onClick={() => setIsGuestsOpen((prev) => !prev)}
            
              >
                <div className="flex gap-4 items-center" id="guests">
                  <FaUsers />
                  <span className="text-secondary font-bold text-lg">
                    {selectedGuests
                      ? `${selectedGuests} Diner${selectedGuests > 1 ? "s" : ""}`
                      : "No of Diners"}
                  </span>
                </div>
                {isGuestsOpen ? (
                  <BsChevronUp className="text-gray-500 absolute right-3 top-1/2 -translate-y-1/2" />
                ) : (
                  <BsChevronDown className="text-gray-500 absolute right-3 top-1/2 -translate-y-1/2" />
                )}
              </div>
              {isGuestsOpen && (
                <div className="absolute top-full left-0 flex justify-center flex-wrap bg-white border border-gray-300 rounded z-10 shadow-lg">
                  {[...Array(10)].map((_, i) => (
                    <div
                      key={i}
                      className="px-4 py-2 hover:bg-primary/20 w-[50%] text-secondary cursor-pointer text-center"
                      onClick={() => {
                        setValue("guests", i + 1, { shouldValidate: true });
                        setIsGuestsOpen(false);
                      }}
                    >
                      {i + 1} Diner{i + 1 !== 1 ? "s" : ""}
                    </div>
                  ))}
                </div>
              )}
            </div>
            {errors.guests && (
              <p className="text-red-500 text-sm">{errors.guests.message}</p>
            )}
          </div>
        </div>

        {/* Occasion + Time */}
        <div className="flex flex-row items-center gap-8">
          {/* Occasion Select */}
          <div className="flex justify-between flex-row lg:flex-col w-full gap-2">
            <label id="occasion-label" className="font-medium text-white/80 text-lg cursor-pointer"
            onClick={() => setIsOccasionOpen((prev) => !prev)}>
              Occasion
            </label>
            <div className="relative w-full">
              <div
              aria-labelledby="occasion-label"
                className="flex items-center justify-between border-2 border-gray-300 bg-white rounded px-4 py-3 font-bold cursor-pointer"
                onClick={() => setIsOccasionOpen((prev) => !prev)}
              >
                <div className="flex items-center gap-5">
                  <FaBirthdayCake className="text-gray-500" />
                  <span className="text-lg text-secondary">
                    {selectedOccasion || "Occasion"}
                  </span>
                </div>
                {isOccasionOpen ? (
                  <BsChevronUp className="text-gray-500" />
                ) : (
                  <BsChevronDown className="text-gray-500" />
                )}
              </div>

              {isOccasionOpen && (
                <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded mt-1 z-10 shadow-lg">
                  {options.map((opt) => (
                    <div
                      key={opt}
                      className="px-4 py-2 hover:bg-primary/20 cursor-pointer"
                      onClick={() => {
                        setValue("occasion", opt, { shouldValidate: true });
                        setIsOccasionOpen(false);
                      }}
                    >
                      {opt}
                    </div>
                  ))}
                </div>
              )}
            </div>
            {errors.occasion && (
              <p className="text-red-500 text-sm">{errors.occasion.message}</p>
            )}
          </div>

          {/* Time Select */}
          <div className="flex justify-between flex-row lg:flex-col w-full gap-2">
            <label id="res-time-label" className="font-medium text-white/80 text-lg cursor-pointer"
            onClick={() => setIsTimeOpen((prev) => !prev)}>
              Time
            </label>
            <div className="relative w-full">
              <div
              aria-labelledby="res-time-label"
                onClick={() => setIsTimeOpen((prev) => !prev)}
                className="border-2 flex items-center justify-between border-gray-300 rounded py-4 bg-white/90 text-secondary font-bold w-full"
              >
                <div className="flex items-center gap-5 px-4">
                  <FaClock />
                  <span>{selectedTime || "Select Time"}</span>
                </div>

                {isTimeOpen ? (
                  <BsChevronUp className="text-gray-500 absolute right-3 top-1/2 -translate-y-1/2" />
                ) : (
                  <BsChevronDown className="text-gray-500 absolute right-3 top-1/2 -translate-y-1/2" />
                )}
              </div>
              {isTimeOpen && (
                <div className="absolute top-full flex flex-wrap justify-between items-center left-0 w-full bg-white border border-gray-300 rounded mt-1 z-10 shadow-lg">
                  {time?.map((opt) => (
                    <div
                      key={opt}
                      className="px-4 py-2 hover:bg-primary/20 cursor-pointer w-[50%] text-center"
                      onClick={() => {
                        setValue("time", opt, { shouldValidate: true });
                        setIsTimeOpen(false);
                      }}
                    >
                      {opt}
                    </div>
                  ))}
                </div>
              )}
            </div>
            {errors.time && (
              <p className="text-red-500 text-sm">{errors.time.message}</p>
            )}
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
