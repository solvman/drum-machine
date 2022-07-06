import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 50,
};

export const volumeSlice = createSlice({
  name: "volume",
  initialState,
  reducers: {
    setVolume: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default volumeSlice.reducer;
export const { setVolume } = volumeSlice.actions;
