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
          <input type="text" name="name" placeholder="Make it a good one..." />
          <h6>EMAIL</h6>
          <input type="email" name="email" placeholder="email@email.email" />
          <h6>PASSWORD</h6>
          <input type="password" name="password" placeholder="Must be 7+ characters..." />
        </form>
        <button onClick={this.props.handleSubmit}>Register!</button>
        {(!this.props.correctSubmit && <p>Error.  Improper or duplicate information submitted.</p>) || (this.props.correctSubmit && this.props.newUser) && <p>Registration Complete.  Please Log In.</p>}
      </div>
    )
  }
}