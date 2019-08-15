import React from 'react'
import LoginForm from './forms/LoginForm'
import RegisterForm from './forms/RegisterForm'
import { registerUser, loginUser } from '../services/api'


export default class UserPage extends React.Component {
  constructor() {
    super()

    this.state = {
      userForm: {
        name: '',
        email: '',
        password: ''
      },

      loginForm: {
        name: '',
        password: '',
      }
    }
  }


  handleChange = (e) => {
    const { target: { name, value } } = e
    this.setState(prevState => ({
      userForm: {
        ...prevState.userForm,
        [name]: value
      }
    }));
  }


  handleRegister = async () => {
    const resp = await registerUser(this.state.userForm)
    this.setState({
      userForm: {
        name: '',
        email: '',
        password: '',
      }
    })
  }

  handleLoginChange = (e) => {
    const { target: { name, value } } = e
    this.setState(prevState => ({
      loginForm: {
        ...prevState.loginForm,
        [name]: value
      }
    }));
  }

  handleLogin = async () => {
    const resp = await loginUser(this.state.loginForm)
    this.setState({
      loginForm: {
        name: '',
        password: '',
      }
    })
  }

  render() {
    return (
      <div className="components">
        <h4>User Page</h4>
        <LoginForm
          handleSubmit={this.handleLogin}
          handleChange={this.handleLoginChange} />
        <RegisterForm
          handleSubmit={this.handleRegister}
          handleChange={this.handleChange} />
      </div>
    )
  }
}