import React from 'react'
import { Modal, Text, View } from 'react-native'

const CallPopup = ({ open }) => {
  return (
    <Modal
      visible={open}
      onRequestClose={() => {}}
      transparent={false} >
      { open && (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: '#1D213C'
          }} >
          <Text>123</Text>
        </View>
      )}
    </Modal>
  )
}

export default CallPopup
