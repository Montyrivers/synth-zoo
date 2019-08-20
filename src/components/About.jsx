import React from 'react'
import { Link } from 'react-router-dom'
import chrome from '../assets/chrome.png'
export default function About() {


  return (
    <div className="components about">
      <h4>About</h4>
      <p>HELLO </p> <p>SYNTH ZOO IS A WEB BASED SUBTRACTIVE SYNTHESIZER powered by tone.js WITH AN OSCILLATOR THAT HAS SELECTABLE WAVEFORMS, AN AMPLIFIER ENVELOPE, a Low Pass Filter Envelope, A GLOBAL FILTER WITH SELECTABLE TYPES, A Drumsynth AND THE ABILITY TO SAVE AND RECALL PRESETS FROM THE SYNTH ZOO SERVER.  MORE FEATURES WILL BE ADDED OVER TIME.  please connect a midi keyboard and be sure to use google chrome for the best experience.
          -CHRIS
      </p>
      <a href="https://linkedin.com/in/christopher-montalbo-6a7a379a/" className="fa fa-linkedin" target="_blank" rel="noopener noreferrer"></a>
      <a href="#" className="fa fa-twitter" rel="noopener noreferrer"></a>
      <a className="github" href="https://github.com/Montyrivers?tab=repositories" target="_blank" rel="noopener noreferrer">GITHUB</a>
      <Link to="/"><button className="hide" >HIDE ABOUT PAGE</button></Link>
      <img className="chrome-icon" src={chrome} alt="chrome icon" />

    </div>
  )

}