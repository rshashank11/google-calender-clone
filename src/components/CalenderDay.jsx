import {
  endOfDay,
  format,
  isBefore,
  isSameMonth,
  isSameWeek,
  isToday,
} from "date-fns";
import React, { useState } from "react";
import EventsModal from "./EventsModal";

const CalenderDay = ({ day, firstDay }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  function openModal() {
    setIsModalOpen(true);
  }

  return (
    <>
      <EventsModal
        day={day}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      >
        <div
          onClick={openModal}
          className={`day bg-white p-1 overflow-hidden flex flex-col ${
            !isSameMonth(day, new Date()) &&
            "non-month-day bg-opacity-75 opacity-75"
          } `}
        >
          <div
            className={`day-header mb-1 flex flex-col items-center relative `}
          >
            {isSameWeek(firstDay, day) && (
              <div className="week-name uppercase text-xs font-bold text-[#777]">
                {format(day, "eee")}
              </div>
            )}

            <div
              className={`day-number text-sm w-6 h-6 flex justify-center items-center ${
                isToday(day) && "bg-blueBg rounded-[50%] text-white"
              } ${
                isBefore(endOfDay(day), new Date()) &&
                "old-month-day opacity-50"
              }`}
            >
              {format(day, "d")}
            </div>
          </div>
        </div>
      </EventsModal>
    </>
  );
};

export default CalenderDay;
