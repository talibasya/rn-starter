import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import {
  Modal,
  ActivityIndicator
} from 'react-native'

const mapStateToProps = ({ spinner, popup }) => ({
  rendering: spinner.rendering
})

export class AppSpinner extends React.Component {
  // static propTypes = {
  //   rendering: PropTypes.bool
  // }
  render () {
    return (
      <Modal
        visible={!!this.props.rendering}
        onRequestClose={() => console.log('close')}
        transparent={false} >
        <ActivityIndicator size='large' />
      </Modal>
    )
  }
}

export default connect(mapStateToProps)(AppSpinner)
