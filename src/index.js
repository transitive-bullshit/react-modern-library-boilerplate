/**
 * @class ExampleMaterialUIComponent
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

import styles from './styles.css'

export default class ExampleMaterialUIComponent extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    const {
      text
    } = this.props

    return (
      <Paper className={styles.container}>
        <p>Example Material-UI Component: {text}</p>

        <TextField
          className={styles.textField}
          floatingLabelText='TextField Example'
          fullWidth={true}
        />

        <RaisedButton
          label='RaisedButton Example'
          primary={true}
        />
      </Paper>
    )
  }
}
