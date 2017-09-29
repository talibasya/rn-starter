import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native'

const propTypes = {
  navigateTo: PropTypes.function
}

export default class Home extends Component {
  static navigationOptions = {
    title: ' '
  };

  state = {
    restoreView: false,
    input: {
      mnemonic: ''
    }
  }
  switchRestoreView = () => this.setState({ restoreView: !this.state.restoreView })

  render () {
    const body = <Text>Example</Text>

    const navigateButton = <TouchableOpacity style={styles.button} onPress={() => this.props.navigateTo('List')}><Text>Navigate example</Text></TouchableOpacity>

    return (
      <View style={styles.container}>
        {body}
        {navigateButton}
      </View>
    )
  }
}

Home.propTypes = propTypes

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  button: {
    padding: 20,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20
  }
})
