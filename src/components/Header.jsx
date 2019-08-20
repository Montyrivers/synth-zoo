import React from 'react'
import giraffe from '../assets/giraffe.png'
export default class Header extends React.Component {
  constructor() {
    super()


  }


  render() {

    return (
      <div className="components header">
        <header>
          <h4>WELCOME TO...</h4>
          <h1>SYNTH ZOO</h1>

          <img alt="giraffe" src={giraffe} />

          <h6 className="keyboard-notice">*connect a midi keyboard and refresh page if needed.</h6>

        </header>
      </div>
    )
  }
}

