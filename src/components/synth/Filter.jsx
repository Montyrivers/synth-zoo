import React from 'react'
import KnobFull from '../ui/KnobFull'

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
      <div className="synth-component filter">
        <h4>global</h4>
        <div >
          <h6>filter</h6>
          <KnobFull
            name={'frequency'}
            size={75}
            numTicks={50}
            degrees={200}
            min={75}
            max={15000}
            value={this.props.frequency}
            color={true}
            onChange={this.props.handleKnob}
          />
          <label>Cutoff</label>
          <hr />
          <form>

            <input className="filter-slider"
              onChange={this.props.handleChange}
              type="range"
              // orient="vertical"
              id="start"
              name="Q"
              min="0" max="100" />
            <h4>Q</h4>
          </form>
          <hr />
          <img src={this.state.filterArray[this.state.filterSelect]} width="130" alt="FilterType" />
          <button onClick={this.cycleForm} >FILTER TYPE</button>




        </div>

      </div>
    )


  }
}