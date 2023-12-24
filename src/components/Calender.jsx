import React, { useEffect, useMemo, useState } from 'react'
import {startOfWeek, startOfMonth, endOfWeek, endOfMonth, eachDayOfInterval, format, isWithinInterval, isSameMonth, isToday} from "date-fns"

const Calender = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date())

    const calenderDays = useMemo(() => {
        const startOfFirstWeak = startOfWeek(startOfMonth(currentMonth))
    const endOfLastWeek = endOfWeek(endOfMonth(currentMonth))
    return eachDayOfInterval({start: startOfFirstWeak, end: endOfLastWeek})
    },[currentMonth]) 
   
  return (
        <div className="calendar h-full flex flex-col text-[#333] ">
    <div className="header p-4 w-full flex items-center">
      <button className="btn mr-2 bg-none border border-borderColor rounded py-2 px-4 text-base cursor-pointer transition-colors delay-[250ms] text-[#333] hover:bg-[#f1f3f4]">Today</button>
      <div>
        <button className="month-change-btn   cursor-pointer bg-none border-0 text-xl w-8 p-0 h-8 text-center align-middle rounded-full transition-colors delay-[250ms] text-[#333] hover:bg-[#f1f3f4] -mr-2">&lt;</button>
        <button className="month-change-btn  mr-2 cursor-pointer bg-none border-0 text-xl w-8 p-0 h-8 text-center align-middle rounded-full transition-colors delay-[250ms] text-[#333] hover:bg-[#f1f3f4]">&gt;</button>
      </div>
      <span className="month-title text-2xl font-bold">{format(new Date(), "eeee  dd, yyyy")}</span>
    </div>
    <div className="days flex-grow overflow-y-auto grid grid-cols-7 auto-rows-[minmax(100px, 1fr)] bg-borderColor gap-[1px] p-[1px]">
        {calenderDays.map((day) => {
            return (<div key={day.getTime()} className={`day bg-white p-1 overflow-hidden flex flex-col ${!isSameMonth(day, new Date()) && "non-month-day bg-opacity-75 opacity-75"} old-month-day`}>
            <div className="day-header mb-1 flex flex-col items-center relative">
              <div className="week-name uppercase text-xs font-bold text-[#777]">{format(day, "eee")}</div>
              <div className={`day-number text-sm w-6 h-6 flex justify-center items-center ${isToday(day) && "bg-blueBg rounded-[50%] text-white"}`}>{format(day, "dd")}</div>
              <button className="add-event-btn">+</button>
            </div>
          </div>
            )
        })}
    </div></div>
  )
}

export default Calender