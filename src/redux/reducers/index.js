import { combineReducers } from 'redux'
import notification from 'redux-store-ancillary/notification'
import spinner from 'redux-store-ancillary/spinner'
import popup from 'redux-store-ancillary/popup'
import session from './session/reducer'
import nav from './navigation/reducer'
import Root from '../../routes'

const reducers = combineReducers({
  notification,
  spinner,
  popup,
  session,
  nav: nav(Root)
})

// to reset data from reducers
// export const resetReducsersAction = 'LOGOUT_USER';

// const rootReducer = (state, action) => {
// if (action.type === resetReducsersAction) {
// state = undefined;
// }
// return reducers(state, action);
// };

export default reducers
