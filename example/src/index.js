import React from 'react'
import ReactDOM from 'react-dom'

// needed for onTouchTap (http://stackoverflow.com/a/34015469/988941)
import injectTapEventPlugin from 'react-tap-event-plugin'

import './index.css'
import App from './App'

try { injectTapEventPlugin() } catch (e) { }

ReactDOM.render(<App />, document.getElementById('root'))
