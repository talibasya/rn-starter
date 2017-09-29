import {
  SOKCET_USERS,
  SOCKET_LOGIN,
  S_SET_MOBILE_TOKEN,
  LOGOUT,
  CALLING_STATE,
  S_SET_WALLET_DATA
} from './actions'

const initialState = {
  users: [],
  token: null,
  walletAddress: null,
  calling: false,
  mobileToken: null
}

export default function reducer (state = initialState, action) {
  // NOTE: DEBUG REDUX. Don't remove
  // console.warn(action.type, JSON.stringify(action, (key, value) => {
  // if (key === 'socket') return 'socket val'
  // return value
  // }, 2))

  switch (action.type) {
    case S_SET_WALLET_DATA:
      return { ...state, walletAddress: action.payload }
    case S_SET_MOBILE_TOKEN:
      return { ...state, mobileToken: action.payload }
    case SOKCET_USERS:
      return { ...state, users: action.payload }
    case CALLING_STATE:
      return { ...state, calling: action.payload }
    case SOCKET_LOGIN:
      return { ...state, token: action.payload }
    case LOGOUT:
      return { ...state, token: null }

    default:
      return state
  }
}
