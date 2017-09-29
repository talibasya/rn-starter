import React from 'react'
import { Provider } from 'react-redux'
import createStore from './redux/createStore'
import MainLayout from './mainLayout'
import {
  AsyncStorage,
  View,
  StatusBar
} from 'react-native'
// import SocketIO from './utils/socket'
import { persistStore } from 'redux-persist'

import { showError } from 'redux-store-ancillary/notification'

import AppSpinner from './containers/AppSpinner'
import AppPopup from './containers/AppPopup'
import AppNotification from './containers/AppNotification'

import { fetchErrorMessage } from './utils/helpers'

const store = createStore({ })

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      ready: false
    }
  }

  componentDidMount () {
    persistStore(
      store, {
        storage: AsyncStorage,
        whitelist: ['session']
      }, async () => {
        try {
          this.appLoaded()

          // TODO: check token update needed store states
        } catch (e) {
          const message = fetchErrorMessage(e)
          this.appLoaded()
          store.dispatch(showError(message))
        }
      })
  }

  appLoaded = () => {
    this.setState({ ready: true })
    // TODO: spashscreen close
  }

  render () {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <StatusBar barStyle='light-content' />
          {this.state.ready && <MainLayout />}
          <AppSpinner />
          <AppPopup />
          <AppNotification />
        </View>
      </Provider>
    )
  }
}
const AppWrap = () => (
  <App />
)

export default AppWrap
