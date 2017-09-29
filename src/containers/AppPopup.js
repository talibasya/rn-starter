import React from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'
import { PopupProvider } from 'redux-store-ancillary/popup'
import CallPopup from '../components/Popup/Call'
import DisconnectPopup from '../components/Popup/Disconnect'

const mapStateToProps = ({ popup }) => ({ popup })

class AppPopup extends React.Component {
  render () {
    return (
      <PopupProvider popup={this.props.popup}>
        <View>
          <CallPopup name='onCall' />
          <DisconnectPopup name='disconnect' />
        </View>
      </PopupProvider>
    )
  }
}

export default connect(mapStateToProps)(AppPopup)
