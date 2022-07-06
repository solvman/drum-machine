import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
};

export const messageScreenSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setMessage: (state, action) => {
      state.message = action.payload;
    },
  },
});

export default messageScreenSlice.reducer;
export const { setMessage } = messageScreenSlice.actions;
