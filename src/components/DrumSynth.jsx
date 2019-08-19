import React from 'react'
import Tone from 'tone'


class DrumSynth extends React.Component {
  constructor() {
    super()
    const snare = new Tone.NoiseSynth().toMaster();
    const hat = new Tone.NoiseSynth().toMaster();
    const crash = new Tone.NoiseSynth().toMaster();
    const kick = new Tone.NoiseSynth().toMaster();
    const hiTom = new Tone.NoiseSynth().toMaster();
    const loTom = new Tone.NoiseSynth().toMaster();

    this.state = {
      snare: snare,
      hat: hat,
      crash: crash,
      kick: kick,
      hiTom: hiTom,
      loTom: loTom,
    }
  }







  render() {
    return (
      <div>
        <div className="drum-kit">
          <button onClick={() => this.state.snare.triggerAttackRelease("8n")}>snare</button>
          <button onClick={() => this.state.hat.triggerAttackRelease("8n")}>hi-hat</button>
          <button onClick={() => this.state.crash.triggerAttackRelease("8n")}>crash</button>
          <button onClick={() => this.state.kick.triggerAttackRelease("8n")}>kick</button>
          <button onClick={() => this.state.hiTom.triggerAttackRelease("8n")}>high-tom</button>
          <button onClick={() => this.state.loTom.triggerAttackRelease("8n")}>low-tom</button>
        </div>
        <div className="pattern">
          <div>
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
          </div>
        </div>
      </div>
    )
  }
}
export default DrumSynth


