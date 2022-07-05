import { configureStore } from "@reduxjs/toolkit";
import bankSelectorReducer from "../features/BankSelector/BankSelectorSlice";

export const store = configureStore({
  reducer: {
    bank: bankSelectorReducer,
  },
});
