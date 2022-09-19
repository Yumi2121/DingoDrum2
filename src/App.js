import React from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import "./App.css";
import AnaloguePads from "./components/AnaloguePads";
import AnimalPads from "./components/AnimalPads";
import ClassicDrumPads from "./components/ClassicDrumPads";

import { Btn } from "./components/styled";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <nav>
      <Link to="/About">
          <Btn>About</Btn>
        </Link> &nbsp; 
        <Link to="/AnaloguePads">
          <Btn>Analogue Kit</Btn>
        </Link>
        &nbsp;
        <Link to="/ClassicDrumPads">
          <Btn>Classic Kit</Btn>
        </Link>
        &nbsp;
        <Link to="/AnimalPads">
          <Btn>Animal Kit</Btn>
        </Link>

      </nav>
      <h1>Dingo Drum</h1>


      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/AnaloguePads" element={<AnaloguePads />} />
        <Route path="/ClassicDrumPads" element={<ClassicDrumPads />} />
        <Route path="/AnimalPads" element={<AnimalPads />} />
        <Route path="/" element={<Navigate to="/AnaloguePads" />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
