import { createSlice } from "@reduxjs/toolkit";

const eventSlice = createSlice({
    name: "event",
    initialState: {
       eventInfo: [ 
        {color: null,
        id: null,
        name: null,
        date: null,
        allDay: false,
        startTime: null,
        endTime: null}   
    ]
    },
    reducers: {
        setColor: (state, action) => {
            state.eventInfo = action.payload
        }
    }
})

export default eventSlice.reducer
export const {setColor} = eventSlice.actions