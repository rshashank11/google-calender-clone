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
              <MenuItem value="tomato">
                <div className="flex gap-1 justify-center">
                  <div className="min-w-4 min-h-4 max-w-4 max-h-4 rounded-full bg-tomato"></div>
                  <span className="italic text-xs">"Tomato"</span>
                </div>
              </MenuItem>

              <MenuItem value="flamino">
                <div className="flex gap-1 justify-center">
                  <div className="min-w-4 min-h-4 max-w-4 max-h-4 rounded-full bg-flamingo"></div>
                  <span className="italic text-xs">"Flamingo"</span>
                </div>
              </MenuItem>
              <MenuItem value="tangerine">
                <div className="flex gap-1 justify-center">
                  <div className="min-w-4 min-h-4 max-w-4 max-h-4 rounded-full bg-tangerine"></div>
                  <span className="italic text-xs">"Tangerine"</span>
                </div>
              </MenuItem>
              <MenuItem value="banana">
                <div className="flex gap-1 justify-center">
                  <div className="min-w-4 min-h-4 max-w-4 max-h-4 rounded-full bg-banana"></div>
                  <span className="italic text-xs">"Banana"</span>
                </div>
              </MenuItem>
              <MenuItem value="sage">
                <div className="flex gap-1 justify-center">
                  <div className="min-w-4 min-h-4 max-w-4 max-h-4 rounded-full bg-sage"></div>
                  <span className="italic text-xs">"Sage"</span>
                </div>
              </MenuItem>
              <MenuItem value="basil">
                <div className="flex gap-1 justify-center">
                  <div className="min-w-4 min-h-4 max-w-4 max-h-4 rounded-full bg-basil"></div>
                  <span className="italic text-xs">"Basil"</span>
                </div>
              </MenuItem>
              <MenuItem value="peacock">
                <div className="flex gap-1 justify-center">
                  <div className="min-w-4 min-h-4 max-w-4 max-h-4 rounded-full bg-peacock"></div>
                  <span className="italic text-xs">"Peacock"</span>
                </div>
              </MenuItem>
              <MenuItem value="blueberry">
                <div className="flex gap-1 justify-center">
                  <div className="min-w-4 min-h-4 max-w-4 max-h-4 rounded-full bg-blueberry"></div>
                  <span className="italic text-xs">"Blueberry"</span>
                </div>
              </MenuItem>
              <MenuItem value="lavender">
                <div className="flex gap-1 justify-center">
                  <div className="min-w-4 min-h-4 max-w-4 max-h-4 rounded-full bg-lavender"></div>
                  <span className="italic text-xs">"Lavender"</span>
                </div>
              </MenuItem>
              <MenuItem value="grape">
                <div className="flex gap-1 justify-center">
                  <div className="min-w-4 min-h-4 max-w-4 max-h-4 rounded-full bg-grape"></div>
                  <span className="italic text-xs">"Grape"</span>
                </div>
              </MenuItem>
              <MenuItem value="graphite">
                <div className="flex gap-1 justify-center">
                  <div className="min-w-4 min-h-4 max-w-4 max-h-4 rounded-full bg-graphite"></div>
                  <span className="italic text-xs">"Graphite"</span>
                </div>
              </MenuItem>
            </Select>
          </FormControl>
        </ThemeProvider>
      </div>
    </>
  );
};

export default ColorPallete;
