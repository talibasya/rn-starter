import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  Text,
  Button,
  TextInput,
  View,
  Image,
  Dimensions,
  ListView,
  TouchableOpacity
} from 'react-native'

const { width } = Dimensions.get('window')

const propTypes = {
  backNavigation: PropTypes.function
}

class ListScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: ' ',
    header: null
  });

  render () {
    return (
      <View style={styles.scrollViewContainer}>
        <Text>Example view</Text>
        <TouchableOpacity style={styles.button} onPress={() => this.props.backNavigation()}><Text>Navigate back</Text></TouchableOpacity>
      </View>
    )
  }
}

export default ListScreen

ListScreen.propTypes = propTypes

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1D233C'
  },
  scrollViewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d6d5d4'
  },
  button: {
    padding: 20,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20
  },
  usersActivitySwitcher: {
    width: (width * 0.3),
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#45658C',
    borderColor: '#45658C'
  },
  usersActivitySwitcherOff: {
    width: (width * 0.3),
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#45658C'
  },
  listSelect: {
    flex: 1,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(29,33,60,0.3)',
    flexDirection: 'row',
    height: 60,
    width
  },
  listItem: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: '#252B43',
    padding: 5
  },
  listItemButtonsWrap: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 5,
    // alignItems: 'center'
    justifyContent: 'center'
  },
  inputStyle: {
    height: 40,
    width:  width * 3 / 4,
    borderWidth: 1,
    color: 'white',
    backgroundColor: 'gray',
    marginVertical: 5,
    padding: 10
  }
})
