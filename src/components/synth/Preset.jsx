import React from 'react'


export default class Preset extends React.Component {
  constructor() {
    super()


  }

  render() {

    return (
      <div className="synth-component">
        <h4>Preset</h4>
        <button onClick={this.props.tempSave}>SAVE PRESET</button>
        <select name="presets">
          <option value="select">CHOOSE PRESET</option>
          <option value="saab">Saab</option>
          <option value="fiat">Fiat</option>
          <option value="audi">Audi</option>
        </select>
        <button onClick={this.tempLoad}>LOAD</button>
        <button onClick={this.props.tempOverwrite}>OVERWRITE PRESET</button>
      </div>
    )


  }
}