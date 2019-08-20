Synth

To setup working code just clone down and type 'npm install' in the CLI and run local server with 'npm start'

alternatively there is a working surge deployment here 
http://synth-zoo.surge.sh

Synth (working title) is a web app built in React.js using the Tone.js webAudio library to create a simple subtractive synthesizer that can be programmed with a user interface and played back and controlled in real time by accepting input using a midi keyboard.  Users can register a username to save and recall presets for their favorite sounds with a backend server built in Ruby On Rails.  

- realtime midi input with standard keyboard controller messages accepted i.e. (sustain, modulation, expression, etc.)
- a user interface for editing and saving synthesizer parameters as presets.


MVP:
- One working instantiated synthesizer Tone.js object and a fully functioning and playable subtractive synthesizer with a complete and fully styled front end for programming, saving and recalling presets.
- A neat, organized, semi-modular codebase for easily adding more views and features.
- a backend that allows the ability to create a user name, then make, save and recall synth presets.

Post-MVP:
- Multiple instantiated synthesizer Tone.js objects with their own views and a fully functioning and playable feature with matching front end such as other synthesizer types (FM, AM, Sync, drumsynths, sequencer)
- The ability to share, view and give a 5 star rating to user created patches by logged in users.
- More on screen elements for playing and interacting with Tone.js objects for users without access to a midi device.


Component Structure

/assets/

->files.png

/services/

->api.js

/components/

->Instrument

->Footer

->Header

->Navbar

->About

->/forms/

->->/LoginForm

->->/RegisterForm

->/synth/

->->/AmpEnvOsc

->->/Filter

->->/MidiStatus

->->/Options

->->/Preset

->->/Visualizer

->->/Volume











<!-- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify --!>
