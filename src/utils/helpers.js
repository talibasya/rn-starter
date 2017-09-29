// import VoipPushNotification from 'react-native-voip-push-notification'
// import api from './api'
// import { Platform } from 'react-native'

export const getToken = ({ store }) => store.getState().session.walletAddress

export const fetchErrorMessage = (error) => {
  let message = error && (error.message || error)

  if (error && error.response && error.response.data) {
    message = `${error.response.data.message}. Code: (${error.response.status})`
  }

  return message
}

export default {
  fetchErrorMessage
}
