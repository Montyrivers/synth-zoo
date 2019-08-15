import React from 'react'
import Knob from '../ui/Knob'

import lowpass from '../../assets/low-pass3.png'
import highpass from '../../assets/high-pass3.png'
import bandpass from '../../assets/band-pass3.png'


export default class Filter extends React.Component {
  constructor() {
    super()

    this.state = {
      filterSelect: 0,
      filterArray: [bandpass, lowpass, highpass],
      filterStrArray: ["lowpass", "highpass", "bandpass"]
    }
  }
  cycleForm = (e) => {
    let toggleDex = this.state.filterSelect
    if (toggleDex < 2) {
      toggleDex += 1
      this.setState(prevState => ({
        ...prevState.filterSelect,
        filterSelect: toggleDex
      }))
    } else {
      this.setState(prevState => ({
        ...prevState.filterSelect,
        filterSelect: 0
      }))
    }
    this.props.handleType(this.state.filterStrArray[this.state.filterSelect])
  }

  componentDidMount() {
    this.cycleForm()

  }

  render() {
    return (
      <div className="synth-component">
        <h4>Filter</h4>
        <div className="filter">
          <Knob
            name={'frequency'}
            size={75}
            numTicks={25}
            degrees={200}
            min={75}
            max={15000}
            value={30}
            color={true}
            onChange={this.props.handleKnob}
          />

          <form>

            <input className="filter-slider"
              onChange={this.props.handleChange}
              type="range"
              orient="vertical"
              id="start"
              name="Q"
              min="0" max="100" />
            <label >Q</label>
          </form>
          <img src={this.state.filterArray[this.state.filterSelect]} width="130" alt="FilterType" />
          <button onClick={this.cycleForm} >FILTER TYPE</button>




        </div>

      </div>
    )


  }
}