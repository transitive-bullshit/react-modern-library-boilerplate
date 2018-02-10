import React, { Component } from 'react'

import { Foo, Bar } from 'react-modern-library-boilerplate'

export default class App extends Component {
  render () {
    return (
      <div>
        <Foo text='Foo Props' />
        <Bar text='Bar Props' />
      </div>
    )
  }
}
