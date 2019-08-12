import React from 'react'
import LoginForm from './forms/LoginForm'
import RegisterForm from './forms/RegisterForm'



export default class UserPage extends React.Component {
  constructor() {
    super()

  }



  render() {
    return (
      <div className="components">
        <h4>User Page</h4>
        <LoginForm />
        <RegisterForm />
      </div>
    )
  }
}