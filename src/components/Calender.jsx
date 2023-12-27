import React, { useEffect, useMemo, useState } from 'react'
import {startOfWeek, startOfMonth, endOfWeek, endOfMonth, eachDayOfInterval, format, isWithinInterval, isSameMonth, isToday, subMonths, addMonths} from "date-fns"
import CalenderDay from './CalenderDay'

const Calender = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date())
    const firstDay = startOfWeek(startOfMonth(currentMonth))

    const calenderDays = useMemo(() => {
        const startOfFirstWeek = startOfWeek(startOfMonth(currentMonth))
    const endOfLastWeek = endOfWeek(endOfMonth(currentMonth))
    return eachDayOfInterval({start: startOfFirstWeek, end: endOfLastWeek})
    },[currentMonth]) 
   
  return (
        <div className="calendar pb-[1px] h-screen flex flex-col text-[#333] ">
    <div className="header p-4 w-full flex items-center">
      <button className="btn mr-2 bg-none border border-borderColor rounded py-2 px-4 text-base cursor-pointer transition-colors delay-[250ms] text-[#333] hover:bg-[#f1f3f4]" onClick={() => setCurrentMonth(new Date())}>Today</button>
      <div>
        <button className="month-change-btn   cursor-pointer bg-none border-0 text-xl w-8 p-0 h-8 text-center align-middle rounded-full transition-colors delay-[250ms] text-[#333] hover:bg-[#f1f3f4] -mr-2" onClick={() => setCurrentMonth(month => subMonths(month, 1))}>&lt;</button>
        <button className="month-change-btn  mr-2 cursor-pointer bg-none border-0 text-xl w-8 p-0 h-8 text-center align-middle rounded-full transition-colors delay-[250ms] text-[#333] hover:bg-[#f1f3f4]" onClick={() => setCurrentMonth(month => addMonths(month, 1))}>&gt;</button>
      </div>
      <span className="month-title text-2xl font-bold">{format(currentMonth, "MMMM yyyy")}</span>
    </div>
    <div className="days flex-grow overflow-y-auto grid grid-cols-7 auto-rows-[minmax(0, 1fr)] bg-borderColor gap-[1px] p-[1px]">
        {calenderDays.map((day) => {
            return <CalenderDay key={day.getTime()} day={day} firstDay={firstDay}/>
        })}
    </div></div>
  )
}

export default Calender