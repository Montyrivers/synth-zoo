import React from 'react'


export default class LoginForm extends React.Component {
  constructor() {
    super()


  }


  render() {

    return (
      <div className="components">
        <h4>Login Form</h4>
        <form onChange={this.props.handleChange}>
          <input type="text" name="name" />
          <input type="password" name="password" />
        </form>
        <button onClick={this.props.handleSubmit}>Login!</button>
      </div>
    )
  }

}
