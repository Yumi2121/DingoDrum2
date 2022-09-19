import { useContext } from "react";
import { Box } from "@mui/material";
import AudioCTX from "../audio/AudioCTX";

const DrumPad = ({ padNumber }) => {
  const actx = useContext(AudioCTX);
  const pad = actx.pads[padNumber];
  return (
    <Box
      sx={{ height: "100px", witdh: "100px", bgcolor: "tomato" }}
      onClick={() => pad.node.play()}
    ></Box>
  );
};

export default DrumPad;
