import { configureStore } from "@reduxjs/toolkit";
import infoLoginSlice from "./Slice/InfoLoginSlice"; // Importer ton slice

const store = configureStore({
  reducer: {
    infologin: infoLoginSlice.reducer, // Enregistre ton reducer
  },
});

export default store;
