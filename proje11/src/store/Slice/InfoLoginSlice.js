import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: false,
  connected: false,
  errorMessage: "",
  loading: false,
};

export const infoLoginSlice = createSlice({
  name: "infologin",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.errorMessage = ""; // Reset de l'erreur au démarrage
    },

    LoginSuccess: (state, action) => {
      const { token } = action.payload;
      state.token = token;
      state.errorMessage = "";
      state.connected = true;
      state.loading = false;
    },
    LoginFailed: (state, action) => {
      const { errorMessage } = action.payload;
      state.token = null;
      state.errorMessage = errorMessage;
      state.connected = false;
      state.loading = false;
    },

    logout: (state) => {
      state.token = null;
      state.connected = false;
      state.errorMessage = "";
    },
  },
});

export const { loginStart,LoginSuccess, LoginFailed, logout } = infoLoginSlice.actions;

export default infoLoginSlice;
