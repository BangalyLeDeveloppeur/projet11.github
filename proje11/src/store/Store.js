import { configureStore } from "@reduxjs/toolkit";
import infoLoginSlice from "./Slice/InfoLoginSlice"; // Importer du slice

const store = configureStore({
  reducer: {
    infologin: infoLoginSlice.reducer, // Enregistrement du reducer
  },
});

export default store;
