/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry
} from 'react-native'
import App from './src/main'

export default class smarterInvestment extends Component {
  render () {
    return (
      <App />
    )
  }
}

AppRegistry.registerComponent('smarterInvestment', () => smarterInvestment)
