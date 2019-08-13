import React from 'react'
import Knob from '../ui/Knob'
import pwm from '../../assets/pwm-wave.png'
import saw from '../../assets/sawtooth-wave.png'
import sine from '../../assets/sine-wave.png'
import square from '../../assets/square-wave.png'
import triangle from '../../assets/triangle-wave.png'


export default class AmpEnvOsc extends React.Component {
  constructor() {
    super()

    this.state = {
      waveSelect: 0,
      waveArray: [triangle, pwm, saw, sine, square],
      waveStrArray: ["pwm", "sawtooth", "sine", "square", "triangle"]

    }
  }


  cycleForm = (e) => {
    let toggleDex = this.state.waveSelect
    if (toggleDex < 4) {
      toggleDex += 1
      this.setState({
        waveSelect: toggleDex
      })
    } else {
      this.setState({
        waveSelect: 0
      })
    }
    this.props.handleOsc(this.state.waveStrArray[this.state.waveSelect])
  }

  componentDidMount() {
    this.cycleForm()
  }



  render() {

    return (
      <div className="synth-component">
        <h4>Amp Env Osc</h4>
        <div className="amp-env-osc">
          <div className="amp-env">
            <form >
              <input
                onChange={this.props.handleEnv}
                className="env-slider"
                type="range"
                orient="vertical"
                id="start"
                name="attack"
                min="0.001" max="59"
                step="0.001"
              />
              <label >A</label>
              <input
                onChange={this.props.handleEnv}
                className="env-slider"
                type="range"
                orient="vertical"
                id="start"
                name="decay"
                min="1" max="59"
                step="0.5" />
              <label >D</label>
              <input
                onChange={this.props.handleEnv}
                className="env-slider"
                type="range"
                orient="vertical"
                id="start"
                name="sustain"
                min="0" max="9"
                step="0.01" />
              <label >S</label>
              <input
                onChange={this.props.handleEnv}
                className="env-slider"
                type="range"
                orient="vertical"
                id="start"
                name="release"
                min="0.11" max="59"
                step="0.1" />
              <label >R</label>
            </form>
          </div>
          <div className="osc-params">

            <Knob
              size={55}
              numTicks={25}
              degrees={260}
              min={1}
              max={100}
              value={30}
              color={true}
              onChange={this.props.handleMod}
            />
            <label>Osc Mod</label>
            <hr />
            <img src={this.state.waveArray[this.state.waveSelect]} width="40" alt="PWM" />
            <button onClick={this.cycleForm}>WAVEFORM TYPE</button>







          </div>


        </div>

      </div>
    )


  }
}