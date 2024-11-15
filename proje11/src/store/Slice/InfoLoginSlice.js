import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  token: null,
  errorMessage: "",
  loading: false,
  username: null,
  editName: "",
  firstName: "",
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
      const { token, username, firstName } = action.payload;
      state.isAuthenticated = true;
      state.token = token;
      state.errorMessage = "";
      state.loading = false;
      state.username = username;
      state.firstName = firstName;
    },

    // Si le login échoue
    loginFailed: (state, action) => {
      const { errorMessage } = action.payload;
      state.token = null;
      state.isAuthenticated = false;
      state.errorMessage = errorMessage;
      state.loading = false;
      state.username = null;
    },
    editName: (state, action) => {
      state.firstName = action.payload.userName;
    },

    // Déconnexion
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      state.errorMessage = "";
      state.username = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFailed, logout, editName } =
  infoLoginSlice.actions;

export default infoLoginSlice;
