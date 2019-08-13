import React from 'react';
import './App.css';

import UserPage from './components/UserPage'
import Instrument from './components/Instrument'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import About from './components/About'



class App extends React.Component {

  constructor() {


    // UPDATE: there is a problem in chrome with starting audio context
    //  before a user gesture. This fixes it.
    // let started = false;
    // document.documentElement.addEventListener('mousedown', () => {
    //   if (started) return;
    //   started = true;
    //   const inst = new Instrument();
    //   const midi = new MIDIAccess({ onDeviceInput });
    //   midi.start().then(() => {
    //     console.log('STARTED!');
    //   }).catch(console.error);

    //  
    // });



    super();
    this.state = {


    }
  }



  render() {
    return (
      <div className="App">
        <Header />
        <NavBar />
        <UserPage />
        <Instrument />
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;
