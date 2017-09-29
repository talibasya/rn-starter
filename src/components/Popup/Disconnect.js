import React from 'react'
import { connect } from 'react-redux'
import { Modal, Text, View, Button } from 'react-native'

const CallPopup = ({ name, params, open }) => {
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
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
          }} >
          <View
            style={{
              alignItems: 'center'
            }} >
            <Text style={{
              color: '#fff',
              fontSize: 30,
              fontWeight: 'bold',
              fontStyle: 'italic'
            }} >Disconnect</Text>
          </View>
        </View>
      )}
    </Modal>
  )
}

export default CallPopup
