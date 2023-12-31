import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import ColorPallete from "./ColorPallete";
import {
  addHours,
  addMinutes,
  roundToNearestMinutes,
  subHours,
} from "date-fns";
import { TextField, ThemeProvider, createTheme } from "@mui/material";
import "../App.css";

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-input::placeholder": {
            fontSize: "13px",
          },
          "& .MuiInputBase-input": {
            fontSize: "14px",
            color: "rgba(0,0,0,0.6)",
          },
        },
      },
    },
  },
});

const EventForm = () => {
  const [showTimeField, setShowTimeField] = useState(false);
  const [disableTimeField, setDisableTimeField] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [startTime, setStartTime] = useState(
    roundToNearestMinutes(addMinutes(new Date().getTime(), 5), {
      nearestTo: 30,
    })
  );
  const [endTime, setEndTime] = useState(
    roundToNearestMinutes(addMinutes(new Date().getTime(), 30), {
      nearestTo: 30,
    })
  );
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      startTime: roundToNearestMinutes(addMinutes(new Date().getTime(), 5), {
        nearestTo: 30,
      }),
      endTime: roundToNearestMinutes(addMinutes(new Date().getTime(), 30), {
        nearestTo: 30,
      }),
    },
  });

  function onSubmit(data) {
    console.log(data);
  }
  return (
    <form className="px-4" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <TextField
          variant="standard"
          className="w-full my-4 text-2xl"
          label="Add title"
          name="title"
          {...register("title")}
        />
      </div>
      {!showTimeField && (
        <div className={`text-grayTwo text-sm mt-2`}>
          <button
            type="button"
            className="my-2 border p-1 rounded"
            onClick={() => setShowTimeField(!showTimeField)}
          >
            Add time
          </button>
        </div>
      )}

      {showTimeField && (
        <div
          className="my-2  flex gap-4 items-center mt-4
        "
        >
          <div className="flex gap-2">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Controller
                name="startTime"
                control={control}
                render={({ field }) => (
                  <TimePicker
                    // {...field}
                    onChange={field.onChange}
                    // {...register("startTime")}
                    disabled={disableTimeField ? true : false}
                    slotProps={{
                      textField: { size: "small", variant: "filled" },
                    }}
                    className="w-[140px]"
                    label={"From"}
                    value={startTime}
                  />
                )}
              />
              <Controller
                name="endTime"
                control={control}
                render={({ field }) => (
                  <TimePicker
                    value={endTime}
                    onChange={field.onChange}
                    // {...register("endTime")}
                    disabled={disableTimeField ? true : false}
                    slotProps={{
                      textField: { size: "small", variant: "filled" },
                    }}
                    className="w-[140px]"
                    label={"To"}
                  />
                )}
              />
            </LocalizationProvider>
          </div>
          <div className="flex items-center gap-2">
            <input
              className="h-5 w-5"
              type="checkbox"
              onClick={() => setDisableTimeField(!disableTimeField)}
              name="all-day"
              id="all-day"
            />
            <label className="text-sm font-medium" htmlFor="all-day">
              {" "}
              All Day
            </label>
          </div>
        </div>
      )}

      {!showDescription && (
        <div className={`text-grayTwo text-sm `}>
          <button
            type="button"
            className="my-2"
            onClick={() => setShowDescription(!showDescription)}
          >
            Add description
          </button>
        </div>
      )}
      {showDescription && (
        <div className="mb-6 mt-4">
          <ThemeProvider theme={theme}>
            <TextField
              size="small"
              variant="standard"
              className="description w-full my-4 text-sm"
              placeholder="Add description"
              name="description"
              {...register("description")}
            />
          </ThemeProvider>
        </div>
      )}

      <ColorPallete register={register} />

      <div className="row float-right">
        <button
          className="btn btn-success px-6 py-2 rounded bg-[rgb(26,115,232)] text-white font-semibold"
          type="submit"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default EventForm;
