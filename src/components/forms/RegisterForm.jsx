import React from 'react'


export default class RegisterForm extends React.Component {
  constructor() {
    super()


  }

  render() {

    return (
      <div className="components">
        <h4>Register Form</h4>
        <form onChange={this.props.handleChange}>
          <input type="text" name="name" />
          <input type="email" name="email" />
          <input type="password" name="password" />
        </form>
        <button onClick={this.props.handleSubmit}>Register!</button>
      </div>
    )
  }
}