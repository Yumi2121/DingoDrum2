import React from 'react'
import {Frame} from './styled'


export default function ClassicDrumPads() {
  
  const componentsOfClassicDrumPads = ["kick", "snare", "crash", "tom1", "tom2", "tom3"] 
  
  const playSound = (e) => {
    
    soundSelector(e.target.value)
  }


  const soundSelector= (key) => {
    switch(key){
      case "kick":
        new Audio('ClassicDrum/kick-bass.mp3').play();
        break
      case "snare":
        new Audio('ClassicDrum/snare.mp3').play();
        break
      case "crash":
        new Audio('ClassicDrum/crash.mp3').play();
        break
      case "tom1":
        new Audio('ClassicDrum/tom-1.mp3').play();
        break
      case "tom2":
        new Audio('ClassicDrum/tom-2.mp3').play();
        break
      case "tom3":
        new Audio('ClassicDrum/tom-3.mp3').play();
        break
        default:
          break
    }
  }

  document.addEventListener("keydown", (e) => {
    e.stopImmediatePropagation();
    // console.log(e.key)
    switch(e.key) {
        case 'a':
            soundSelector('kick')
            break
        case 's':
            soundSelector('snare')
            break
        case 'd':
            soundSelector('crash')
            break
        case 'f':
            soundSelector('tom1')
            break
        case 'g':
            soundSelector('tom2')
            break
        case 'h':
            soundSelector('tom3')
            break
        default:
          break
    }
});


  return (
    <div className="frameContainer">
     {componentsOfClassicDrumPads.map((component, index) => {
            return (
                <Frame key={index} onClick={playSound} value={component} >classic</Frame>
            )
        })}
    </div>
  )
}
