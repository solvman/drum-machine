import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Bank 1",
};

export const bankSelectorSlice = createSlice({
  name: "bank",
  initialState,
  reducers: {
    toggleBank: (state) => {
      if (state.name === "Bank 1") state.name = "Bank 2";
      else if (state.name === "Bank 2") state.name = "Bank 1";
      else throw new Error();
    },
  },
});

export const { toggleBank } = bankSelectorSlice.actions;
export default bankSelectorSlice.reducer;
