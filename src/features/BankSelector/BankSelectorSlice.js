import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Bank 1",
};

export const bankSelectorSlice = createSlice({
  name: "bank",
  initialState,
  reducers: {
    setCurrentBank: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { setCurrentBank } = bankSelectorSlice.actions;
export default bankSelectorSlice.reducer;
