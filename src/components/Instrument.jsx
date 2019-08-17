import React from 'react'
import Tone from 'tone'
import AmpEnvOsc from './synth/AmpEnvOsc'
import Filter from './synth/Filter'
import MidiStatus from './synth/MidiStatus'
import Options from './synth/Options'
import Preset from './synth/Preset'
import Visualizer from './synth/Visualizer'
import Volume from './synth/Volume'
import { savePreset, updatePreset, getPresets, showPreset, deletePreset } from '../services/api'

export default class Instrument extends React.Component {
  constructor() {
    //instantiating components imported from Tone.js library npm dependency.
    const synth = new Tone.PolySynth(16, Tone.Synth);

    //Synth object parameters are initialized using the .set Tone library method.
    synth.set({
      "oscillator": {
        "type": "pwm",
        "modulationFrequency": 1,
      },
      "envelope": {
        "attack": 0.001,
        "decay": 5,
        "sustain": 0.1,
        "release": 0.3,
      },
    })
    const filter = new Tone.Filter();
    const volume = new Tone.Gain();
    // const meter = new Tone.Meter()

    super()
    //Tone components are stored in state.
    this.state = {
      selectedPreset: [],
      presetId: '',
      presets: [],
      presetInfo: {
        description: '',
        category: ''
      },

      volumeLevel: 0.8,
      ampEnvelope: {
        attack: 0.001,
        decay: 5,
        sustain: 0.1,
        release: 0.3,
      },
      oscType: 'pwm',
      oscMod: 1.0001,


      filterType: 'lowpass',
      filterFrequency: 350,
      filterQ: 1,

      isMono: true,
      monoPoly: undefined,

      synth: synth,
      filter: filter,
      volume: volume,
      // meter: meter,
      midiDevice: '',




    }
  }
  test = () => {
    console.log(this.state.ampEnvelope)
    console.log(localStorage.getItem("clientId"))
    console.log(this.state.ampEnvelope.attack.toString())
    console.log(this.state.presets)
  }

  handleLoadPreset = (preset_id) => {
    const synth = this.state.synth
    const filter = this.state.filter
    const volume = this.state.volume
    const presets = this.state.presets
    for (let i = 0; i < presets.length; i += 1) {
      if (presets[i].id === preset_id) {
        console.log(presets[i])
        synth.set({
          "oscillator": {
            "type": presets[i].osc_type,
            "modulationFrequency": presets[i].osc_mod,
          },
          "envelope": {
            "attack": parseFloat(presets[i].amp_attack),
            "decay": parseFloat(presets[i].amp_decay),
            "sustain": parseFloat(presets[i].amp_sustain),
            "release": parseFloat(presets[i].amp_release),
          },
        },
          filter.set({
            "type": presets[i].filter_type,
            "frequency": presets[i].filter_frequency,
            "Q": presets[i].filter_q
          }),

        )
        this.monoPoly()
      }
    }
  }


  handlePresetChange = (e) => {
    const { target: { name, value } } = e
    this.setState(prevState => ({
      presetInfo: {
        ...prevState.presetInfo,
        [name]: value,
      }
    }))
  }
  handleGetPresets = async () => {
    const user = localStorage.getItem('user')
    const resp = await getPresets(user);
    console.log(resp)
    this.setState(prevState => ({
      ...prevState.presets,
      presets: resp,
    }))
  }
  handlePresetSelect = async (e) => {
    const user = localStorage.getItem('user')
    const { target: { name, value } } = e;
    this.setState(prevState => ({
      ...prevState.presetId,
      presetId: value
    }));
    const resp = await showPreset(user, value)
    this.setState(prevState => ({
      ...prevState.selectedPreset,
      selectedPreset: [resp, "string"]
    }))
    console.log(value)
    console.log(this.state.selectedPreset)
  }

  handleSavePreset = async () => {
    const attack = this.state.ampEnvelope.attack.toString()
    const decay = this.state.ampEnvelope.decay.toString()
    const sustain = this.state.ampEnvelope.sustain.toString()
    const release = this.state.ampEnvelope.release.toString()
    const user = localStorage.getItem("user");
    const data = {
      description: this.state.presetInfo.description,
      category: this.state.presetInfo.category,
      volume: this.state.volumeLevel,
      amp_attack: attack,
      amp_decay: decay,
      amp_sustain: sustain,
      amp_release: release,
      osc_type: this.state.oscType,
      osc_mod: this.state.oscMod,
      filter_type: this.state.filterType,
      filter_frequency: this.state.filterFrequency,
      filter_q: this.state.filterQ,
      is_mono: this.state.isMono,
      user_id: user
    }
    const resp = await savePreset(user, data)
  }


  handleUpdatePreset = async () => {
    const attack = this.state.ampEnvelope.attack.toString()
    const decay = this.state.ampEnvelope.decay.toString()
    const sustain = this.state.ampEnvelope.sustain.toString()
    const release = this.state.ampEnvelope.release.toString()
    const user = localStorage.getItem("user");
    const data = {
      description: this.state.presetInfo.description,
      category: this.state.presetInfo.category,
      volume: this.state.volumeLevel,
      amp_attack: attack,
      amp_decay: decay,
      amp_sustain: sustain,
      amp_release: release,
      osc_type: this.state.oscType,
      osc_mod: this.state.oscMod,
      filter_type: this.state.filterType,
      filter_frequency: this.state.filterFrequency,
      filter_q: this.state.filterQ,
      is_mono: this.state.isMono,
    }
    const resp = await updatePreset(user, this.state.presetId, data)
  }

  handleDeletePreset = async () => {
    const user = localStorage.getItem("user");
    const resp = await deletePreset(user, this.state.presetId)
    const presets = this.state.presets
    const filteredPresets = presets.filter(preset => (preset.id !== this.state.presetId))
    this.setState({
      presets: filteredPresets,
      selectedPreset: [{ category: 'Preset Deleted', description: "Preset Deleted" }, "string"]
    })
  }

  droneZone = (val) => {
    this.state.synth.voices.map(voice => {
      voice.oscillator.frequency.value += val;
      voice.envelope.cancel(.5)
    });
  }

  panic = () => {
    this.state.synth.releaseAll()
  }
  danger = () => {
    this.state.synth.triggerAttack(["C3", "E3", "G3"])
  }

  monoPoly = (e) => {  //remember we need to run this function inside of a patch load so it can check isMono
    if (this.state.isMono) {
      this.setState({
        isMono: false,
        monoPoly: null
      })
    } else if (!this.state.isMono) {
      this.setState({
        isMono: true,
        monoPoly: undefined,
      })
    }
  }

  handleVolumeKnobChange = (val) => {
    const vol = val / 127 * .8

    this.setState(prevState => ({
      ...prevState.volumeLevel,
      volumeLevel: vol
    }))
    this.state.volume.gain.value = vol
  }

  handleFilterKnobChange = (val) => { //so like.  I can probably just avoid adding information to state and just push the entire object and alter it in state directly.
    this.setState(prevState => ({
      ...prevState.filterFrequency,
      filterFrequency: val,
    }))
    this.state.filter.set({
      "frequency": val,
    })
  }
  handleFilterChange = (e) => {
    const { target: { name, value } } = e
    this.setState(prevState => ({
      ...prevState.filterQ,
      filterQ: value
    }))
    this.state.filter.set({
      "Q": [value],
    })
  }



  handleFilterType = (str) => {
    const filter = str
    this.setState(prevState => ({
      ...prevState.filterType,
      filterType: filter
    }))
    this.state.filter.set({
      "type": filter,
    })
    console.log(this.state.filter)
  }







  handleOscTypeChange = (str) => {
    const osc = str
    this.state.synth.set({
      "oscillator": {
        "type": osc,
      }
    })
    this.setState(prevState => ({
      ...prevState.oscType,
      oscType: osc,
    }))
  }










  handleOscModChange = (val) => {
    this.setState(prevState => ({
      ...prevState.oscMod,
      oscMod: val,
    }))
    this.state.synth.set({
      "oscillator": {
        "modulationFrequency": val,
      }
    })
  }









  handleAmpEnvChange = (e) => {
    const { target: { name, value } } = e
    this.setState(prevState => ({
      ampEnvelope: {
        ...prevState.ampEnvelope,
        [name]: Math.round([value] / 10) + .001,
      }
    }))
    this.state.synth.voices.map(voice => {
      voice.envelope[name] = Math.round([value] / 10) + .001
    })
  }








  loadSound = (e) => {
    let AudioContextFunc = window.AudioContext || window.webkitAudioContext; //storing webMIDI backend callback in an object.
    let audioContext = new AudioContextFunc(); //instantiating webMIDI object to accept device input as a promise
    if (navigator.requestMIDIAccess) { //provides for compatibility check for platform and browser-- google chrome on a mac or pc is really your best bet, here.
      console.log('MIDI supported');
    } else {
      console.log('MIDI not supported')
    };

    const onMIDISuccess = (midiAccess) => { //if successful, will store detected input devices as an object, returning port, manufacturer, device name, device id.
      console.log(midiAccess);
      //midi inputs/outputs stored in variable in case you connect multiple devices.
      let inputs = midiAccess.inputs;
      let outputs = midiAccess.outputs;
      console.log(inputs.values())

      for (let input of midiAccess.inputs.values()) {
        //capture of midi messages is called here.
        input.onmidimessage = getMIDIMessage;

      }

      midiAccess.onstatechange = function (e) { //when detected device changes will log and attempt to open port for connection
        console.log(e.port)
        //set state here?
        e.connection = "open"
        document.addEventListener("mousedown", function (e) { // clicking mouse anywhere on page will resume autiocontext after automatic suspend due to idle, low power state, sleep, etc.
          if (audioContext.suspend())
            audioContext.resume()
          console.log('resumed')
        })
        // console.log(e.port)
      }
    }

    const onMIDIFailure = () => { // if navigator.requestMidiAccess fails, it will log an error.
      console.log('Could not access midi devices.')
    }

    const getMIDIMessage = (message) => { //callback function that logs input lines.
      // console.log(message.data);

      //received midi messages are destructured and stored in variables to collect message type, range --and if applicable, a velocity value.
      let command = message.data[0];
      let note = message.data[1];
      let velocity = (message.data.length > 2) ? message.data[2] : 0

      //array of notes in chromatic order to be indexed according to incoming midi note number 1-127.
      let notArray = ["A-2", "A#-2", "B-2", "C-1", "C#-1", "D-1", "D#-1", "E-1", "F-1", "F#-1", "G0", "A-1", "A#-1", "B-1", "C0", "C#0", "D0", "D#0", "E0", "F0", "F#0", "G0", "G#0", "A0", "A#0", "B0", "C1", "C#1", "D1", "D#1", "E1", "F1", "F#1", "G1", "G#1", "A1", "A#1", "B1", "C2", "C#2", "D2", "D#2", "E2", "F2", "F#2", "G2", "G#2", "A2", "A#2", "B2", "C3", "C#3", "D3", "D#3", "E3", "F3", "F#3", "G3", "G#3", "A3", "A#3", "B3", "C4", "C#4", "D4", "D#4", "E4", "F4", "F#4", "G4", "G#4", "A4", "A#4", "B4", "C5", "C#5", "D5", "D#5", "E5", "F5", "F#5", "G5", "G#5", "A5", "A#5", "B5", "C6", "C#6", "D6", "D#6", "E6", "F6", "F#6", "G6", "G#6", "A6", "A#6", "B6", "C7", "C#7", "D7", "D#7", "E7", "F7", "F#7", "G7", "G#7", "A7", "B7", "C8", "A8", "A#8", "B8", "C9", "C#9", "D9", "D#9", "E9", "F9", "F#9", "G9", "G#9", "A9", "A#9", "B9", "C10", "C#10", "D10", "D#10", "E10", "F10", "F#10", "G10", "G#10", "A10", "A#10", "B10", "C11", "C#11", "D11", "D#11", "E11", "F11", "F#11", "G11", "G#11",]



      switch (command) {

        case 128:  //noteOff
          this.state.synth.triggerRelease([notArray[note + 2]])



          break
        case 144: //noteOn
          const veloc = velocity * .01

          this.state.synth.triggerAttack([notArray[note + 2]], this.state.monoPoly, veloc) //can toggle between poly and mono by swapping second undefined argument for null respectively
          if (velocity > 0) {
          }
          break;
        case 176: // CC#11 - Expression Pedal
          let exp = velocity / 127 * 500.0
          if (note === 11) {
            this.state.synth.voices.map(voice => {
              voice.oscillator.modulationFrequency.value = exp
            });

          }
        case 176: // CC#7 - Volume
          let lev = velocity / 127 * 0.8

          if (note === 7) {

            this.state.volume.gain.value = lev
          }
        case 176: // CC#1 - modulation wheel 
          let val = velocity / 127 * 14800 + 200;
          if (note === 1) {
            this.state.filter.frequency.value = val
          }
        // There's no break here because sustain and modulation share the same message id, however the cc# is stored in the destructured key stored in the note parameter.

        case 176: // CC#64 - sustain pedal assigned to amp envelope release param

          let sus = velocity / 127 * 4.0 + 0.01
          if (note === 64 && velocity === 0) {

            this.state.synth.voices.map(voice => {
              voice.envelope.release = 0.01
            });
          }
          else if (note === 64) {

            this.state.synth.voices.forEach(voice => {
              voice.envelope.release = sus
            });
          }
          break;
        case 224: //pitch bend
          this.state.synth.voices.map(voice => {
            // voice.oscillator.frequency.value += velocity
            voice.oscillator.detune.value = velocity * 2.95
          });
          break;

      }
    }
    navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);
  }

  componentDidMount() { //joins instantiated Tone objects, loadSound initializes midi Promise object and other functions that translate incoming midi hardware messages on component render.
    this.state.synth.connect(this.state.filter);
    this.state.filter.connect(this.state.volume);
    this.state.volume.toMaster();
    // this.state.meter.toMaster();
    this.state.filter.frequency.value = 200; // 200 - 15000
    this.state.volume.gain.value = 0.8; // 0-0.8
    this.loadSound()
    console.log(this.state.synth)
    console.log(this.state.midiDevice)
  }








  render() {

    return (
      <div className="components instrument" >
        {/* <h4>Instrument</h4> */}
        {/* <button onClick={this.test}></button> */}
        <Volume
          handleVolume={this.handleVolumeKnobChange}
        />
        <AmpEnvOsc
          handleEnv={this.handleAmpEnvChange}
          handleMod={this.handleOscModChange}
          handleOsc={this.handleOscTypeChange}
          snapshot={this.state.synthSnapshot}
        />
        <Filter
          frequency={this.state.filterFrequency}
          handleType={this.handleFilterType}
          handleKnob={this.handleFilterKnobChange}
          handleChange={this.handleFilterChange} />
        {/* <MidiStatus /> */}
        <Options
          danger={this.danger}
          panic={this.panic}
          droneZone={this.droneZone}
          synth={this.state.synth}
          monoPoly={this.monoPoly}
        />
        <Preset
          handleLoad={this.handleLoadPreset}
          selected={this.state.selectedPreset}
          handleDelete={this.handleDeletePreset}
          handleSelect={this.handlePresetSelect}
          presets={this.state.presets}
          getPresets={this.handleGetPresets}
          handleSave={this.handleSavePreset}
          handleUpdate={this.handleUpdatePreset}
          handleChange={this.handlePresetChange}
        />
        {/* <Visualizer meter={this.state.meterVal} /> */}
      </div>
    )
  }
}






