import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  token:null,
  connected: false,
  errorMessage: "",
  loading: false,
};

export const infoLoginSlice = createSlice({
  name: "infologin",
  initialState,
  reducers: {
    // Commence le processus de login
    loginStart: (state) => {
      state.loading = true;
      state.errorMessage = "";
    },

    // Si le login est réussi
    loginSuccess: (state, action) => {
      const { token } = action.payload;
      state.isAuthenticated = true;
      state.token = token;
      state.errorMessage = "";
      state.connected = true;
      state.loading = false;
    },

    // Si le login échoue
    loginFailed: (state, action) => {
      const { errorMessage } = action.payload;
      state.token = null;
      state.isAuthenticated = false;
      state.errorMessage = errorMessage;
      state.connected = false;
      state.loading = false;
    },

    // Déconnexion
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false; 
      state.connected = false;
      state.errorMessage = "";
    },
  },
});

export const { loginStart, loginSuccess, loginFailed, logout } =
  infoLoginSlice.actions;

export default infoLoginSlice;
