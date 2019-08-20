import React from 'react'
import KnobFull from '../ui/KnobFull'
import nuclear from '../../assets/nuclear.png'
export default class Options extends React.Component {
  constructor() {
    super()

    this.state = {
      octave: 4,
    }
  }
  handleOctaveDown = () => {
    this.state.octave -= 1
  }
  handleOctaveUp = () => {
    this.state.octave += 1
  }
  componentDidMount() {
    this.props.monoPoly()
  }
  render() {



    return (
      <div className="synth-component options">
        <h4>Options</h4>
        <label className="switch">
          <input type="checkbox" onClick={this.props.monoPoly} />
          <span className="slider"></span>
        </label>
        <label>MONO/POLY</label>
        <div className="keyboard">
          <h4>Keyboard</h4>
          <div className="black-keys">
            <div onClick={() => this.props.synth.triggerAttackRelease(`C#${this.state.octave}`, 1)} className="black">C#</div>
            <div onClick={() => this.props.synth.triggerAttackRelease(`D#${this.state.octave}`, 1)} className="black">D#</div>
            <div className="black-spacer">_</div>
            <div onClick={() => this.props.synth.triggerAttackRelease(`F#${this.state.octave}`, 1)} className="black">F#</div>
            <div onClick={() => this.props.synth.triggerAttackRelease(`G#${this.state.octave}`, 1)} className="black">G#</div>
            <div onClick={() => this.props.synth.triggerAttackRelease(`A#${this.state.octave}`, 1)} className="black">A#</div>
          </div>
          <div className="white-keys">
            <div onClick={() => this.props.synth.triggerAttackRelease(`C${this.state.octave}`, 1)} className="white">C</div>
            <div onClick={() => this.props.synth.triggerAttackRelease(`D${this.state.octave}`, 1)} className="white">D</div>
            <div onClick={() => this.props.synth.triggerAttackRelease(`E${this.state.octave}`, 1)} className="white">E</div>
            <div onClick={() => this.props.synth.triggerAttackRelease(`F${this.state.octave}`, 1)} className="white">F</div>
            <div onClick={() => this.props.synth.triggerAttackRelease(`G${this.state.octave}`, 1)} className="white">G</div>
            <div onClick={() => this.props.synth.triggerAttackRelease(`A${this.state.octave}`, 1)} className="white">A</div>
            <div onClick={() => this.props.synth.triggerAttackRelease(`B${this.state.octave}`, 1)} className="white">B</div>
          </div>
        </div>
        <button onClick={this.handleOctaveDown}>Octave Down</button>
        <button onClick={this.handleOctaveUp}>Octave Up</button>
        <hr />
        <div className="drone-zone">
          <h6>THE DRONE ZONE</h6>
          <div className="nuclear">
            <img alt="nuclear emblem" src={nuclear} />
          </div>
          <KnobFull
            size={100}
            numTicks={55}
            degrees={180}
            min={0}
            color={true}
            max={127}
            value={0}
            onChange={this.props.droneZone}
          />

          <button className="danger" onClick={this.props.danger}>DANGER!</button>

          <button className="panic" onClick={this.props.panic}>PANIC!</button>
        </div>

      </div>
    )
  }
}

