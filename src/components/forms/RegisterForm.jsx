import React from 'react'


export default class RegisterForm extends React.Component {
  constructor() {
    super()


  }

  render() {

    return (
      <div className="components register">
        <h4>REGISTER</h4>
        <form onChange={this.props.handleChange}>
          <h6>USERNAME</h6>
          <input type="text" name="name" />
          <h6>EMAIL</h6>
          <input type="email" name="email" />
          <h6>PASSWORD</h6>
          <input type="password" name="password" />
        </form>
        <button onClick={this.props.handleSubmit}>Register!</button>
      </div>
    )
  }
}