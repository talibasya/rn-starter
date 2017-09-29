import { applyMiddleware, createStore, compose } from 'redux'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import { autoRehydrate } from 'redux-persist'

const createInitialStore = (initialState = {}) => {
  const logger = createLogger()
  const middleware = [
    logger,
    thunk
  ]

  const appStore = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware), autoRehydrate())
  )

  return appStore
}

export default createInitialStore
