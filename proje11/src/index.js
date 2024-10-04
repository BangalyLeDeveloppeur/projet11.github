import React from 'react';
import ReactDOM from 'react-dom/client';

import "./styles/index.scss";
import Rooter from './Rooter';

///Redux
import { configureStore } from '@reduxjs/toolkit';
//import { Provider } from "react-redux";
import rootReducer from "./reducer/Index";
import { getUser } from "./action/User.action";

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

store.dispatch(getUser());



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <Rooter />
  </React.StrictMode>

);


