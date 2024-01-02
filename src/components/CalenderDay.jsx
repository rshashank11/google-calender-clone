import {
  endOfDay,
  format,
  isBefore,
  isSameMonth,
  isSameWeek,
  isToday,
} from "date-fns";
import React, { useMemo, useState } from "react";
import EventsModal from "./EventsModal";
import { useSelector } from "react-redux";
import "../index.css";

const CalenderDay = ({ day, firstDay }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  function openModal() {
    setIsModalOpen(true);
  }

  const events = useSelector((state) => state.event.eventInfo);
  const allDayEvents = useMemo(() => {
    return events.filter((event) => event.allDay == true);
  }, [events]);
  const timedEvents = useMemo(() => {
    return events.filter((event) => event.allDay == false);
  }, [events]);

  // console.log(new Date(JSON.parse(allDayEvents[0].day)));

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
          <div className="events flex flex-col gap-2 flex-grow overflow-hidden">
            {allDayEvents.length > 0 &&
              allDayEvents.map((event, index) => {
                if (
                  new Date(JSON.parse(event.day)).toString() == day.toString()
                ) {
                  return (
                    <button
                      style={{ backgroundColor: `${event.color}` }}
                      key={index}
                      className={`bg-${event.color} flex 
                       items-center overflow-hidden whitespace-nowrap cursor-pointer flex-shrink-0  w-full border-none text-sm p-0 text-white py-[0.15rem] font-semibold px-1 rounded-[0.25rem]`}
                    >
                      <div className="event-name mr-2">{event.title}</div>
                    </button>
                  );
                }
              })}

            {timedEvents.length > 0 &&
              timedEvents.map((event, index) => {
                if (
                  new Date(JSON.parse(event.day)).toString() == day.toString()
                ) {
                  return (
                    <button
                      key={index}
                      style={{ backgroundColor: `${event.color}` }}
                      className={`bg-${event.color} flex items-center overflow-hidden whitespace-nowrap cursor-pointer flex-shrink-0 py-[0.15rem] w-full border-none text-sm p-0 font-semibold text-white rounded-[0.15rem]`}
                    >
                      <div className="mr-2">
                        {format(
                          new Date(JSON.parse(event.startTime)),
                          "h a"
                        ).toString()}{" "}
                        -{" "}
                        {format(
                          new Date(JSON.parse(event.endTime)),
                          "h a"
                        ).toString()}
                      </div>
                      <div className="event-name overflow-hidden mr-2">
                        {event.title}
                      </div>
                    </button>
                  );
                }
              })}
          </div>
        </div>
      </EventsModal>
    </>
  );
};

export default CalenderDay;
