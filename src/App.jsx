import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import DrumSynth from './components/DrumSynth'
import UserPage from './components/UserPage'
import Instrument from './components/Instrument'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import About from './components/About'



class App extends React.Component {

  constructor() {



    super();
    this.state = {
    }
  }





  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <Route path="/drumsynth" exact render={() => <DrumSynth />} />


        <Instrument />

        <Footer />
      </div>
    );
  }
}

export default App;
