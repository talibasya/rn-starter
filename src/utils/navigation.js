import React from 'react'
import { Button } from 'react-native'

export const settingButton = (navigation) => {
  return (
    <Button
      title='Profile'
      color='#7393AE'
      onPress={() => navigation.navigate('Setting')} />
  )
}

export const editButton = (navigation) => {
  return (
    <Button
      title='Edit'
      color='#7393AE'
      onPress={() => navigation.navigate('EditSetting')} />
  )
}

export const acceptButton = (navigation) => {
  return (
    <Button
      title='Accept'
      color='#7393AE'
      onPress={() => navigation.goBack()} />
  )
}

export const goToListButton = (navigation) => {
  return (
    <Button
      title='BACK'
      color='#7393AE'
      onPress={() => navigation.navigate('List')} />
  )
}

export const cancelButton = (navigation) => {
  return (
    <Button
      title='Cancel'
      color='#7393AE'
      onPress={() => navigation.goBack()} />
  )
}
