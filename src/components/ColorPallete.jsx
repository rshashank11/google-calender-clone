import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const theme = createTheme({
  components: {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          width: "125px",
          display: "flex",
          gap: "5px",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          // Add your styles here
          width: "125px",
          textAlign: "center",
        },
        icon: {
          // Add your styles for the dropdown icon here
        },
      },
    },
  },
});

const colorArray = [
  "tomato",
  "flamingo",
  "tangerine",
  "banana",
  "sage",
  "basil",
  "peacock",
  "blueberry",
  "lavender",
  "grape",
  "graphite",
];

const ColorPallete = ({ register }) => {
  const [color, setColor] = useState("tomato");
  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <>
      <div className="flex flex-col justify-start items-start my-4">
        <ThemeProvider theme={theme}>
          <FormControl size="small">
            <InputLabel id="color-select">Color</InputLabel>
            <Select
              name="color"
              {...register("color")}
              labelId="color-select"
              value={color}
              id="color-select"
              label="Color"
              onChange={handleColorChange}
            >
              {Array.isArray(colorArray) &&
                colorArray.map((color, index) => {
                  return (
                    <MenuItem key={index} value={color}>
                      <div className="flex gap-1 justify-center">
                        <div
                          className={`w-4  h-4 rounded-full bg-${color} `}
                        ></div>
                        <span className="italic text-xs capitalize">
                          {color}
                        </span>
                      </div>
                    </MenuItem>
                  );
                })}
            </Select>
          </FormControl>
        </ThemeProvider>
      </div>
    </>
  );
};

export default ColorPallete;
