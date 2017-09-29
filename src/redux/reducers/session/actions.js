// import { logoutAction } from '../../middleware/socket'
import { Platform } from 'react-native'
import api from '../../../utils/api'
import { showError } from 'redux-store-ancillary/notification'
import { showSpinner, hideSpinner } from 'redux-store-ancillary/spinner'
import { NavigationActions } from 'react-navigation'
import { fetchErrorMessage } from '../../../utils/helpers'

export const SOKCET_USERS = 'SOKCET_USERS'
export const SOCKET_LOGIN = 'SOCKET_LOGIN'
export const CALLING_STATE = 'CALLING_STATE'
export const LOGIN = 'LOGIN'
export const SET_SOCKET = 'SET_SOCKET'
export const CLOSE_SOCKET = 'CLOSE_SOCKET'
export const LOGOUT = 'LOGOUT'
export const ACCEPT_CALL = 'ACCEPT_CALL'
export const REGISTER = 'REGISTER'
export const S_SET_MOBILE_TOKEN = 'S_SET_MOBILE_TOKEN'
export const S_SET_WALLET_DATA = 'S_SET_WALLET_DATA'

export const login = (payload, cb) => ({
  type: LOGIN,
  payload,
  cb
})

export const register = (payload, cb) => ({
  type: REGISTER,
  payload,
  cb
})

export const setMobileToken = (payload) => ({
  type: S_SET_MOBILE_TOKEN,
  payload
})

export const logout = () => {
  return (dispatch, getState) => {
    // logoutAction(dispatch)
  }
}

export const acceptCall = (payload) => ({
  type: ACCEPT_CALL,
  payload
})

export const closeSocket = (payload) => ({
  type: CLOSE_SOCKET,
  payload
})
