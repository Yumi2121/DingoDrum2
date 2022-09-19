import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="fixed" style={{ background: 'transparent', margin: 0 }}>
        <Toolbar>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dingo Drum
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
          <Link to="/About" ><Button >About</Button></Link>&nbsp;
        <Link to="/ClassicDrumPads" ><Button >Classic Drum</Button></Link>&nbsp;
        <Link to="/AnimalPads"><Button >Animal Drum</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}