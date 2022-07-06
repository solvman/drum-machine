import { configureStore } from "@reduxjs/toolkit";
import bankSelectorReducer from "../features/BankSelector/BankSelectorSlice";
import powerSwitchReducer from "../features/PowerSwitch/PowerSwitchSlice";
import messageScreenReducer from "../features/MessageScreen/MessageScreenSlice";
import volumeReducer from "../features/Volume/VolumeSlice";

export const store = configureStore({
  reducer: {
    bank: bankSelectorReducer,
    powerswitch: powerSwitchReducer,
    message: messageScreenReducer,
    volume: volumeReducer,
  },
});
