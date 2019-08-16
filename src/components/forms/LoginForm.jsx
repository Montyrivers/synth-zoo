import React from 'react'
import { Link } from 'react-router-dom'


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
          <input type="text" name="name" placeholder="Username..." />
          <h6>PASSWORD</h6>
          <input type="password" name="password" placeholder="Password..." />
        </form>
        <button onClick={this.props.handleSubmit}>Login!</button>

        {!this.props.correctSubmit && <p>Error.  Information not found.</p>}
        <Link to="/"><button className="hide">HIDE USER PAGE</button></Link>

      </div>
    )
  }

}
