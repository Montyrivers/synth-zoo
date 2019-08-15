import React from 'react'
import { Link, Route } from 'react-router-dom'
import UserPage from '../components/UserPage'
import About from '../components/About'

class NavBar extends React.Component {
  constructor() {
    super()

  }

  render() {
    return (
      <div className="components">
        <h4>IT'S GOOD THAT YOU'RE HERE.</h4>
        <span>CREATE A USER TO SAVE AND LOAD YOUR OWN PRESETS</span>
        <Link to="/userpage"><button>SHOW LOGIN/REGISTER</button></Link>

        <Link to="/"><button>HIDE USER/ABOUT PAGE</button></Link>
        <Link to="/about"><button>ABOUT</button></Link>
        <Route path="/about" exact render={() => <About />} />

        <Route path="/userpage" render={() => <UserPage />} />
      </div>
    )
  }
}


export default NavBar;