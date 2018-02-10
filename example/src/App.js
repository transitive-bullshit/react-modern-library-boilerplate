import React, { Component } from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ExampleComponent from 'react-modern-library-boilerplate'

export default class App extends Component {
  render () {
    return (
      <MuiThemeProvider>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
          }}
        >
          <ExampleComponent text='example material-ui component' />
        </div>
      </MuiThemeProvider>
    )
  }
}
