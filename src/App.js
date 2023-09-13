import React from "react";
import { Route, Routes } from "react-router-dom";

import Container from "./Container";
import Header from "./components/Header";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
}

export default App;
