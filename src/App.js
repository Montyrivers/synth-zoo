import React from 'react';
import './App.css';
import Tone from 'tone';
import Instrument from './components/Instrument'

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


  componentDidMount = () => {

  }


  render() {
    return (
      <div className="App">
        <h1>Eyyy...</h1>
        <Instrument />
      </div>
    );
  }
}

export default App;
