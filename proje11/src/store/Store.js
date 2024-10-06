import { configureStore } from "@reduxjs/toolkit";
import infoLoginSlice from "./Slice/InfoLoginSlice";

export const store = configureStore({
  reducer: {
    infoLogin: infoLoginSlice,
  },
});
