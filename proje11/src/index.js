import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/index.scss";
import Rooter from "./Rooter";
import { Provider } from "react-redux";
import store from "./store/Store";

//




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Rooter />
    </React.StrictMode>
  </Provider>
);
