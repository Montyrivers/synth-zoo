import React from 'react'
import { Link, Route, withRouter } from 'react-router-dom'
import UserPage from '../components/UserPage'
import About from '../components/About'
import { logoutUser } from '../services/api'

class NavBar extends React.Component {
  constructor() {
    super()
    this.state = {
      userKey: localStorage.getItem('user'),
      isLoggedIn: false
    }
  }
  login = () => {
    this.setState({
      isLoggedIn: true
    })
  }

  logout = async () => {
    await logoutUser();
    this.setState({
      isLoggedIn: false
    })
    this.routeChange()
  }
  routeChange() {
    let path = `/`;
    this.props.history.push(path);
  }

  componentDidMount() {
    if (this.state.userKey) {
      this.setState({
        isLoggedIn: true
      })
    }
  }


  render() {

    return (
      <div className="components">
        <h4>IT'S GOOD THAT YOU'RE HERE.</h4>
        <Link to="/about"><button>SHOW ABOUT</button></Link>




        {this.state.isLoggedIn ? (<div><small>Hello, user #{this.state.userKey}.</small> <button onClick={this.logout}>logout</button></div>)
          : (<div><span>CREATE A USER TO SAVE AND LOAD YOUR OWN PRESETS</span>
            <Link to="/userpage"><button>SHOW USER PAGE</button></Link>
            <Route path="/userpage" render={() => <UserPage login={this.login} />} /> </div>)}

        <Route path="/about" exact render={() => <About />} />

      </div>
    )
  }
}


export default withRouter(NavBar);