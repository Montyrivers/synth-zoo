import React from 'react'
import LoginForm from './forms/LoginForm'
import RegisterForm from './forms/RegisterForm'
import { registerUser, loginUser } from '../services/api'
import { withRouter } from 'react-router-dom'

class UserPage extends React.Component {
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
      },
      correctLogSubmit: true,
      correctRegSubmit: true,
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
  routeChange() {
    let path = `/`;
    this.props.history.push(path);
  }

  handleRegister = async () => {
    this.setState({
      correctRegSubmit: false
    })
    const resp = await registerUser(this.state.userForm)
    this.setState({
      correctRegSubmit: true
    })
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
    this.setState({
      correctLogSubmit: false
    })
    const resp = await loginUser(this.state.loginForm)
    this.setState({
      correctLogSubmit: true
    })
    this.props.login()
    this.routeChange()
  }






  render() {
    return (
      <div className="components user-page">

        <LoginForm
          correctSubmit={this.state.correctLogSubmit}
          handleSubmit={this.handleLogin}
          handleChange={this.handleLoginChange} />
        <RegisterForm
          correctSubmit={this.state.correctRegSubmit}
          handleSubmit={this.handleRegister}
          handleChange={this.handleChange} />
      </div>
    )
  }
}
export default withRouter(UserPage)