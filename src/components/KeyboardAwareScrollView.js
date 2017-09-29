import React, { Component } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const KeyboardAware = ({ children, contentContainerStyle, style = { backgroundColor: '#F5FCFF' } }) => (
  <KeyboardAwareScrollView
    style={style}
    contentContainerStyle={contentContainerStyle}
    resetScrollToCoords={{ x: 0, y: 0 }}
    scrollEnabled >
    {children}
  </KeyboardAwareScrollView>
)

export default KeyboardAware
