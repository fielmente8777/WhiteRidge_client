"use client";
import { getDateInputLimits } from "@/data/getDateInputLimits";
import { CalendarIcon, DropDownIcon } from "@/icons/icons";
import { useRef, useState } from "react";

const CheckInOutForm = () => {
  const checkInRef = useRef<HTMLInputElement>(null);
  const checkOutRef = useRef<HTMLInputElement>(null);
  const { min } = getDateInputLimits({ showPast: false, showFuture: true });
  const { max } = getDateInputLimits({ showPast: false, showFuture: true });
  const [data, setData] = useState({
    checkIn: "",
    checkOut: "",
    adults: 0,
  });

  return (
    <div className="max-w-[43.5rem] mx-auto w-full bg-white px-4">
      <div className="w-full grid md:grid-cols-4 grid-cols-2">
        <div className="flex flex-col gap-2 items-center justify-center p-4 w-full">
          <label
            htmlFor="checkIn"
            className="text-sm font-semibold uppercase text-light"
          >
            Arrival date
          </label>
          <div className="relative w-full border-b border-dark pb-2">
            <input
              type="date"
              id="checkIn"
              min={min}
              onChange={(e) => {
                setData((prev) => ({ ...prev, checkIn: e.target.value }));
              }}
              value={data.checkIn}
              className="focus:outline-none outline-none  text-center opacity-0"
              ref={checkInRef}
            />
            <span
              onClick={() => checkInRef?.current?.showPicker()}
              className="absolute cursor-pointer inset-0 flex items-center justify-center gap-2 text-sm  text-dark z-10"
            >
              {data.checkIn ? data.checkIn : "Select date"} <CalendarIcon className="w-[17px]" />
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center p-4 w-full">
          <label
            htmlFor="checkOut"
            className="text-sm font-semibold uppercase text-light"
          >
            Departure date
          </label>
          <div className="relative w-full border-b border-dark pb-2">
            <input
              type="date"
              id="checkOut"
              max={max}
              min={data.checkIn ? data.checkIn : min}
              ref={checkOutRef}
              onChange={(e) => {
                setData((prev) => ({ ...prev, checkOut: e.target.value }));
              }}
              value={data.checkOut}
              className="focus:outline-none outline-none text-center opacity-0"
            />
            <span
              onClick={() => checkOutRef?.current?.showPicker()}
              className="absolute cursor-pointer inset-0 flex items-center justify-center gap-2 text-sm text-dark z-10"
            >
              {data.checkOut ? data.checkOut : "Select date"} <CalendarIcon className="w-[17px]" />
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center p-4 w-full">
          <label
            htmlFor="adults"
            className="text-sm font-semibold uppercase text-light"
          >
            guest
          </label>
          <div className="border-b border-dark text-center w-full flex items-center justify-center gap-2 pb-px">
            2 Adults <DropDownIcon className="w-[17px] rotate-180" />
          </div>
        </div>
        <button className="bg-primary uppercase text-white border my-4 font-medium border-primary hover:text-primary hover:bg-white transition-colors ease-in-out duration-300 text-sm">
          Check Availability
        </button>
      </div>
    </div>
  );
};

export default CheckInOutForm;
