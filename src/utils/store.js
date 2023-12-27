import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "../utils/eventSlice"

const store= configureStore({
    reducer: {
        event: eventReducer
    }
})

export default store