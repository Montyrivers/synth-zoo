import React from 'react'


export default class Preset extends React.Component {
  constructor() {
    super()


  }

  render() {

    return (
      <div className="synth-component preset">
        <h4>Preset</h4>
        {this.props.selected.length ? (
          <div>
            <h1>{this.props.selected[0].category}</h1>
            <p>{this.props.selected[0].description}</p>
            <button onClick={() => this.props.handleLoad(this.props.selected[0].id)}>LOAD PRESET</button>
          </div>
        ) : (
            <div>Please select a preset  <hr /></div>

          )}


        <form onChange={this.props.handleChange}>
          <small>Name</small>
          <input type="text" name="category" className="preset-name" placeholder="Preset Name..." />
          <hr />
          <small>Description</small>
          <textarea type="text" name="description" cols="50" rows="10" className="preset-description" placeholder="Preset Description..." />
        </form>
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
        <button onClick={this.props.getPresets}>RETRIEVE LIST</button> <hr />
        <button onClick={this.props.handleSave}>SAVE PRESET</button> <small>/ </small>
        <button onClick={this.props.handleUpdate}>OVERWRITE PRESET</button>
        <hr />
        <button onClick={this.props.handleDelete}>DELETE PRESET</button>
      </div>
    )


  }
}