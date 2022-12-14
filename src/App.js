import React, {useState} from "react";
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

  const [drumStyle, setDrumStyle] = useState(0) 

  const handleClick = (e) => {

    if (drumStyle === 0 ) {
      setDrumStyle(1)

    } else if(drumStyle === 1 ){
      setDrumStyle(2)

    } else if(drumStyle === 2 ){
      setDrumStyle(0)

    }

  return (
    <div className="App">
      <Box sx={{bgcolor: '#353935', py:20, margin: 0 }}>
        <Container maxWidth="lg ">

        <Container maxWidth="lg">
          <ButtonAppBar
            title="Dingo Drum"
          ></ButtonAppBar>
        </Container>

        <nav>
      <Link to="/About">
          <Btn>About</Btn>
        </Link> &nbsp; 
        <Link to="/AnaloguePads">
          <Btn onClick={handleClick}>{drumStyle ===1 && <Btn onClick={handleClick} >Classic Drum</Btn>}</Btn>
        </Link>
        &nbsp;
        <Link to="/ClassicDrumPads">
          <Btn onClick={handleClick}>{drumStyle ===0 && <Btn onClick={handleClick} >Animal Drum</Btn>}</Btn>
        </Link>
        &nbsp;
        <Link to="/AnimalPads">
          <Btn onClick={handleClick}>{drumStyle ===2 && <Btn onClick={handleClick} >Analogue Kit</Btn>}</Btn>
        </Link>

      </nav>
        
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
