import React from 'react'
import KnobFull from '../ui/KnobFull'
import { Link } from 'react-router-dom'
export default class Volume extends React.Component {
  constructor() {
    super()


  }

  render() {

    return (
      <div className="synth-component volume">

        <div className="volume">
          <h6>VOLUME</h6>
          <KnobFull
            size={100}
            numTicks={55}
            degrees={180}
            min={0}
            max={127}
            value={0}
            color={true}
            onChange={this.props.handleVolume}
          />



        </div>
        <Link to="/drumsynth"><button className="hide">SHOW DRUMSYNTH</button></Link>
        <hr />
        <div className="amount">
          <KnobFull
            size={80}
            numTicks={35}
            degrees={200}
            min={1}
            max={300}
            value={0}
            color={true}
            onChange={this.props.handleFilterEnvAmount}
          />
        </div>
        <label>Env Amount</label>
        <hr />

        <KnobFull
          size={100}
          numTicks={50}
          degrees={200}
          min={200}
          max={15000}
          value={0}
          color={true}
          onChange={this.props.handleSynthFilterFrequency}
        />
        <label>LPF Cutoff</label>
      </div>
    )


  }
}