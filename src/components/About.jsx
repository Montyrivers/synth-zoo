import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {


  return (
    <div className="components about">
      <h4>About</h4>
      <p>HELLO </p> <p>SYNTH ZOO IS A WEB BASED SUBTRACTIVE SYNTHESIZER WITH AN OSCILLATOR THAT HAS SELECTABLE WAVEFORMS, AN AMPLIFIER ENVELOPE, A GLOBAL FILTER WITH SELECTABLE TYPES, AND THE ABILITY TO SAVE AND RECALL PRESETS FROM THE SYNTH ZOO SERVER.  MORE FEATURES WILL BE ADDED OVER TIME USING THE TONE.JS LIBRARY.
          -CHRIS
      </p>
      <a href="https://linkedin.com/in/christopher-montalbo-6a7a379a/" className="fa fa-linkedin" target="_blank"></a>
      <a href="#" className="fa fa-twitter"></a>
      <a className="github" href="https://github.com/Montyrivers?tab=repositories" target="_blank">GITHUB</a>
      <Link to="/"><button className="hide" >HIDE ABOUT PAGE</button></Link>

    </div>
  )

}