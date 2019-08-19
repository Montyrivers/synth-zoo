import React from 'react'
import Knob from '../ui/Knob'
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
          <Knob
            size={100}
            numTicks={55}
            degrees={180}
            min={0}
            max={127}
            value={0}
            onChange={this.props.handleVolume}
          />

        </div>
        <Link to="/drumsynth"><button className="hide">SHOW DRUMSYNTH</button></Link>

      </div>
    )


  }
}