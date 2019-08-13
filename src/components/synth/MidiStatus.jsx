import React from 'react'


export default class MidiStatus extends React.Component {
  constructor() {
    super()


    this.state = {
      connected: false
    }

  }



  render() {

    return (
      <div className="synth-component">
        <h4>Midi Status</h4>
        <select name="devices">
          <option value="select">Please Select Device</option>
          <option value="saab">Saab</option>
          <option value="fiat">Fiat</option>
          <option value="audi">Audi</option>
        </select>
        <input type="checkbox" id="scales" name="scales"
        // checked
        />
        <label>MIDI STATUS</label>
      </div >
    )


  }
}