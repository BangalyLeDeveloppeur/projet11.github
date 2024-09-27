import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Layout from "./components/layoutt/Layout";


const Rooter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* Route pour la page d'erreur */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Rooter;
