import { createSlice } from "@reduxjs/toolkit";

const eventSlice = createSlice({
  name: "event",
  initialState: {
    eventInfo: [],
  },
  reducers: {
    setEvent: (state, action) => {
      state.eventInfo.push(action.payload);
    },
  },
});

export default eventSlice.reducer;
export const { setEvent } = eventSlice.actions;
