import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

const middlewares = applyMiddleware(
  thunk
  // Add additional dev middlewares such as redux-devtools here
)

export const configureStore = preloadedState =>
  createStore(rootReducer, preloadedState, middlewares)
