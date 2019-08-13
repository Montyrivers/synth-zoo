import React from 'react'
import Knob from '../ui/Knob'

export default class Volume extends React.Component {
  constructor() {
    super()


  }

  render() {

    return (
      <div className="synth-component">
        <h4>Volume</h4>
        <div className="volume">
          <Knob
            size={100}
            numTicks={125}
            degrees={180}
            min={0}
            max={127}
            value={0}
            onChange={this.props.handleVolume}
          />
          <label>Volume</label>
        </div>
      </div>
    )


  }
}