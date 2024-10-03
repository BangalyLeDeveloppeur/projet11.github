import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Layout from "./components/layoutt/Layout";
import PageUser from "./pages/PageConnexion";
import Tranjaction from "./pages/Tranjaction";

const Rooter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<PageUser />} />
          <Route path="tranjaction" element={<Tranjaction/>} />
          
         
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Rooter;
