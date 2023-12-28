import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  LocalizationProvider,
  StaticTimePicker,
  TimePicker,
} from "@mui/x-date-pickers";

import ColorPallete from "./ColorPallete";
import { addHours, roundToNearestMinutes } from "date-fns";
import { TextField } from "@mui/material";

const EventForm = () => {
  const [showTimeField, setShowTimeField] = useState(false);
  const [disableTimeField, setDisableTimeField] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    control,
  } = useForm();

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
        <div className={`text-grayTwo text-sm `}>
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
          className={`my-2  flex gap-4 items-center
        `}
        >
          <div className="flex gap-2">
            <TimePicker
              disabled={disableTimeField ? true : false}
              slotProps={{ textField: { size: "small", variant: "filled" } }}
              className="w-[140px]"
              label={"From"}
              defaultValue={roundToNearestMinutes(new Date().getTime(), {
                nearestTo: 30,
              })}
            />
            <TimePicker
              disabled={disableTimeField ? true : false}
              slotProps={{ textField: { size: "small", variant: "filled" } }}
              className="w-[140px]"
              label={"To"}
              defaultValue={roundToNearestMinutes(
                addHours(new Date().getTime(), 1),
                { nearestTo: 30 }
              )}
            />
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

      <div className="form-group ">
        <ColorPallete />
      </div>
      <div className="row">
        <button className="btn btn-success" type="submit">
          Add
        </button>
        <button className="btn btn-delete" type="button">
          Delete
        </button>
      </div>
    </form>
  );
};

export default EventForm;
