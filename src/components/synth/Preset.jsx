import React from 'react'


export default class Preset extends React.Component {
  constructor() {
    super()


  }

  render() {

    return (
      <div className="synth-component">
        <h4>Preset</h4>
        <form onChange={this.props.handleChange}>
          <input type="text" name="category" />
          <input type="text" name="description" />
        </form>
        <button onClick={this.props.handleSave}>SAVE PRESET</button>
        <form onChange={this.props.handleSelect}>
          <select name="presets">
            <option value="select">CHOOSE PRESET</option>
            {this.props.presets.map(preset => (
              <option
                key={preset.id}
                value={preset.id}
              >{`${preset.id} - ${preset.category}`}
              </option>
            ))}

          </select>
        </form>
        <button onClick={this.props.getPresets}>RETRIEVE PRESETS</button>
        <button onClick={this.props.handleUpdate}>OVERWRITE PRESET</button>
        <hr />
        <button onClick={this.props.handleDelete}>DELETE PRESET</button>
      </div>
    )


  }
}