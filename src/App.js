import React from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import "./App.css";
import AnaloguePads from "./components/AnaloguePads";
import AnimalPads from "./components/AnimalPads";
import ClassicDrumPads from "./components/ClassicDrumPads";

import { Btn } from "./components/styled";
import About from "./components/About";
import Footer from "./components/Footer";
import ButtonAppBar from "./components/Navbar";
import Container from "@mui/material/Container";
import Box from '@mui/material/Box';
import { spacing } from '@mui/system';


function App() {
  return (
    <div className="App">
      <Box sx={{bgcolor: '#353935', py:20, margin: 0 }}>
        <Container maxWidth="lg ">

        <Container maxWidth="lg">
          <ButtonAppBar
            title="Dingo Drum"
          ></ButtonAppBar>
        </Container>
        
        {/* <h1>Dingo Drum</h1> */}

        <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/AnaloguePads" element={<AnaloguePads />} />
          <Route path="/ClassicDrumPads" element={<ClassicDrumPads />} />
          <Route path="/AnimalPads" element={<AnimalPads />} />
          <Route path="/" element={<Navigate to="/AnaloguePads" />} />
        </Routes>

        <Footer />
        </Container>
      </Box>
     
    </div>
  );
}

export default App;
