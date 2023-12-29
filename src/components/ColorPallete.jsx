import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";

const ColorPallete = () => {
  const [color, setColor] = useState("tomato");
  const handleColorChange = (event) => {
    setColor(event.target.value);
  };
  return (
    <>
      <div>
        <FormControl></FormControl>
        <InputLabel id="color-select">Color</InputLabel>
        <Select
          value={color}
          sx={{ minWidth: 10 }}
          id="color-select"
          label="Color"
          onChange={handleColorChange}
        >
          <MenuItem value="tomato">
            <div className="min-w-4 min-h-4 rounded-full bg-tomato"></div>
          </MenuItem>
          <MenuItem value="flamino">
            <div className="min-w-4 min-h-4 rounded-full bg-flamingo"></div>
          </MenuItem>
          <MenuItem value="tangerine">
            <div className="min-w-4 min-h-4 rounded-full bg-tangerine"></div>
          </MenuItem>
          <MenuItem value="banana">
            <div className="min-w-4 min-h-4 rounded-full bg-banana"></div>
          </MenuItem>
          <MenuItem value="sage">
            <div className="min-w-4 min-h-4 rounded-full bg-sage"></div>
          </MenuItem>
          <MenuItem value="basil">
            <div className="min-w-4 min-h-4 rounded-full bg-basil"></div>
          </MenuItem>
          <MenuItem value="peacock">
            <div className="min-w-4 min-h-4 rounded-full bg-peacock"></div>
          </MenuItem>
          <MenuItem value="blueberry">
            <div className="min-w-4 min-h-4 rounded-full bg-blueberry"></div>
          </MenuItem>
          <MenuItem value="lavender">
            <div className="min-w-4 min-h-4 rounded-full bg-lavender"></div>
          </MenuItem>
          <MenuItem value="grape">
            <div className="min-w-4 min-h-4 rounded-full bg-grape"></div>
          </MenuItem>
          <MenuItem value="graphite">
            <div className="min-w-4 min-h-4 rounded-full bg-graphite"></div>
          </MenuItem>
        </Select>
      </div>
    </>
  );
};

export default ColorPallete;
