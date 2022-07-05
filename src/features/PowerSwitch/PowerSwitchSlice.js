import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  power: true,
};

export const powerSwitchSlice = createSlice({
  name: "powerswitch",
  initialState,
  reducers: {
    flipPower: (state) => {
      state.power = !state.power;
    },
  },
});

export const { flipPower } = powerSwitchSlice.actions;
export default powerSwitchSlice.reducer;
