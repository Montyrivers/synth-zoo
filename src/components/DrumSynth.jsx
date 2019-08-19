import React from 'react'
import Tone from 'tone'
import { Link } from 'react-router-dom'

class DrumSynth extends React.Component {
  constructor() {
    super()
    const listener = (event) => {
      const keyPress = event.keyCode
      switch (keyPress) {
        case 49:
          snare.triggerAttackRelease("8n")

          break;
        case 50:
          hat.triggerAttackRelease("8n")
          break;
        case 51:
          crash.triggerAttackRelease("8n")
          break;
        case 52:
          kick.triggerAttackRelease("8n")
          break;
        case 53:
          hiTom.triggerAttackRelease("8n")
          break;
        case 54:
          loTom.triggerAttackRelease("8n")
          break;
      }
    }


    this.listener = listener.bind(this);

    const snare = new Tone.NoiseSynth().toMaster();
    const hat = new Tone.NoiseSynth().toMaster();
    const crash = new Tone.NoiseSynth().toMaster();
    const kick = new Tone.NoiseSynth().toMaster();
    const hiTom = new Tone.NoiseSynth().toMaster();
    const loTom = new Tone.NoiseSynth().toMaster();

    snare.set({
      noise: {
        type: "white"
      },
      envelope: {
        attack: 0.001,
        decay: 0.3,
        sustain: 0
      }
    })

    hat.set({
      noise: {
        type: "white"
      },
      envelope: {
        attack: 0.001,
        decay: 0.1,
        sustain: 0
      }
    })

    crash.set({
      noise: {
        type: "white"
      },
      envelope: {
        attack: 0.001,
        decay: 2.0,
        sustain: 0
      }
    })

    kick.set({
      noise: {
        type: "brown"
      },
      envelope: {
        attack: 0.001,
        decay: 0.1,
        sustain: 0
      }
    })
    kick.volume.value = 5

    hiTom.set({
      noise: {
        type: "pink"
      },
      envelope: {
        attack: 0.001,
        decay: 0.7,
        sustain: 0
      }
    })

    loTom.set({
      noise: {
        type: "brown"
      },
      envelope: {
        attack: 0.001,
        decay: 0.9,
        sustain: 0
      }
    })
    this.state = {
      snare: snare,
      hat: hat,
      crash: crash,
      kick: kick,
      hiTom: hiTom,
      loTom: loTom,
      listener: listener
    }
  }


  keyLog = (val) => {

    const snare = this.state.snare
    const loTom = this.state.loTom
    const hiTom = this.state.hiTom
    const hat = this.state.hat
    const crash = this.state.crash
    const kick = this.state.kick



    if (val) {
      window.addEventListener("keydown", this.listener, false)
    } else if (!val) {
      window.removeEventListener('keydown', this.listener, false);

    }

  }



  componentDidMount() {
    this.keyLog(true)
  }

  componentWillUnmount() {
    this.keyLog(false)
  }







  render() {
    return (
      <div className="synth-component">
        <Link to="/"><button className="hide">HIDE DRUM SYNTH</button></Link>
        <h3>PLAY THE DRUMS WITH YOUR COMPUTER KEYBOARD 123456!</h3>
        <div className="drum-kit">
          {/* <button onClick={() => this.keyLog(true)}>START QWERTY KB INPUT</button>
          <button onClick={() => this.keyLog(false)}>STOP QWERTY KB INPUT</button> */}

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
      </div >
    )
  }
}
export default DrumSynth


