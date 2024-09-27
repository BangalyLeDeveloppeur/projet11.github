import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Layout from "./components/layoutt/Layout";
import LogementWrapper from "./components/logementWrapper/LogementWrapper";

const Rooter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          {/* Route pour afficher un logement avec un ID spécifique */}
          <Route path="logement/:id" element={<LogementWrapper />} />
          {/* Route pour la page d'erreur */}
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Rooter;
