import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Layout from "./components/layoutt/Layout";
import PageUser from "./pages/PageConnexion";
import Transaction from "./pages/Transaction";

const Rooter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<PageUser />} />
          <Route path="tranjaction" element={<Transaction />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Rooter;
