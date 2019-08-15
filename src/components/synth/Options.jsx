import React from 'react'


export default class Options extends React.Component {
  constructor() {
    super()


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


      </div>
    )
  }
}

