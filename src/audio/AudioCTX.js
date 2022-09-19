
import { createContext } from "react";
import kick from "./kits/TEKvsAnalogHeat_Maschine/BD_Tek_AHeat_1_1.mp3";
import clap from "./kits/TEKvsAnalogHeat_Maschine/Clap_Tek_AHeat_004.mp3";
import snare from "./kits/TEKvsAnalogHeat_Maschine/SD_Tek_AHeat_5_1.mp3";
import closedHH from "./kits/TEKvsAnalogHeat_Maschine/HH_Tek_AHeat_2_1.mp3";
import openHH from "./kits/TEKvsAnalogHeat_Maschine/HHo_Tek_AHeat_1_1.mp3";
import ride from "./kits/TEKvsAnalogHeat_Maschine/Cym_Tek_AHeat_004.mp3";
import crash from "./kits/TEKvsAnalogHeat_Maschine/Cym_Tek_AHeat_002.mp3";
import tom1 from "./kits/TEKvsAnalogHeat_Maschine/Tom_Tek_AHeat_1_002.mp3";
import tom2 from "./kits/TEKvsAnalogHeat_Maschine/Tom_Tek_AHeat_1_005.mp3";

let actx = new AudioContext();
let out = actx.destination;


let pads = [kick, clap, snare, closedHH, openHH, ride, crash, tom1, tom2].map(
    (soundFile) => {
     const sample = new Audio(soundFile);
     const source = actx.createMediaElementSource(sample);
     const gainNode = actx.createGain();
     gainNode.gain.value = 0.5;
     source.connect(gainNode).connect(out);
     return {
       node: sample,
       gain: gainNode,
     };
   }
 );


let initialContext = {
  actx,
  out,
  pads,
};

const AudioCTX = createContext(initialContext);

export default AudioCTX;
