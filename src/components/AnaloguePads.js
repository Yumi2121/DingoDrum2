import { Frame } from "./styled";
import { useContext } from "react";
import AudioCTX from "../audio/AudioCTX.js";

const AnaloguePads = () => {
  const actx = useContext(AudioCTX);

  return (
    
    <>
      {actx.pads.map((pad, key) => (
        <Frame key={key} onClick={() => pad.node.play()} />
      ))}
    </>
  );
};

export default AnaloguePads;
