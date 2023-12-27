import React from 'react'

const ColorPallete = () => {
  return (
    <div className="row left flex gap-4">
                <input
                style={{accentColor: "blue", WebkitAppearance: "none",}}
                  type="radio"
                  name="color"
                  value="blue"
                  id="blue"
                  checked
                  className="color-radio w-4 h-4 appearance-none rounded-full border border-blue checked:bg-blue"
                />
                
                <input
                style={{accentColor: "red", WebkitAppearance: "none",}}
                  type="radio"
                  name="color"
                  value="red"
                  id="red"
                  className="color-radio w-4 h-4 appearance-none rounded-full border border-red checked:bg-red"
                />
                
                <input
                style={{accentColor: "green", WebkitAppearance: "none"}}
                  type="radio"
                  name="color"
                  value="green"
                  id="green"
                  className="color-radio w-4 h-4 appearance-none rounded-full border border-green checked:bg-green"
                />
                
              </div>
  )
}

export default ColorPallete