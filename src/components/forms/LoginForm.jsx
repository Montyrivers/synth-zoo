import React from 'react'


export default class LoginForm extends React.Component {
  constructor() {
    super()


  }


  render() {

    return (
      <div className="components login">
        <h4>LOGIN</h4>
        <form onChange={this.props.handleChange}>
          <h6>USERNAME</h6>
          <input type="text" name="name" />
          <h6>PASSWORD</h6>
          <input type="password" name="password" />
        </form>
        <button onClick={this.props.handleSubmit}>Login!</button>
      </div>
    )
  }

}
