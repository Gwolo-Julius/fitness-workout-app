// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./components/Favorites";

const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/favorites" element={<Favorites/>} />
    </Routes>
  </Router>
);

export default App;
