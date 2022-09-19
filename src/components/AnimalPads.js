import React from 'react'
import {Frame} from './styled'

export default function AnimalPads() {
  
  const animals = ["bird", "dog", "frog", "kitty", "squirrel", "wolf"] 

  const playSound = (e) => {
    
    soundSelector(e.target.value)
  }
  const soundSelector= (key) => {
    switch(key){
      case "bird":
        new Audio('AnimalDrum/bird.mp3').play();
        break
      case "dog":
        new Audio('AnimalDrum/dog.mp3').play();
        break
      case "frog":
        new Audio('AnimalDrum/frog.mp3').play();
        break
      case "kitty":
        new Audio('AnimalDrum/kitty.mp3').play();
        break
      case "squirrel":
        new Audio('AnimalDrum/squirrel.mp3').play();
        break
      case "wolf":
        new Audio('AnimalDrum/wolf.mp3').play();
        break
        default:
          break
    }
  }

  document.addEventListener("keydown", (e) => {
    e.stopImmediatePropagation();
    console.log(e.key)
    switch(e.key) {
        case 'a':
            soundSelector('bird')
            break
        case 's':
            soundSelector('dog')
            break
        case 'd':
            soundSelector('frog')
            break
        case 'f':
            soundSelector('kitty')
            break
        case 'g':
            soundSelector('squirrel')
            break
        case 'h':
            soundSelector('wolf')
            break
            default:
          break
    }
});
    return (
    
        <div className="frameContainer">
     {animals.map((component, index) => {
            return (
                <Frame key={index} onClick={playSound} value={component} >animal</Frame>
            )
        })}
        </div>
    
  )
}
