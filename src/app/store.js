import { configureStore } from "@reduxjs/toolkit";
import bankSelectorReducer from "../features/BankSelector/BankSelectorSlice";
import powerSwitchReducer from "../features/PowerSwitch/PowerSwitchSlice";

export const store = configureStore({
  reducer: {
    bank: bankSelectorReducer,
    powerswitch: powerSwitchReducer,
  },
});
