import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import createMiddlewareSaga from '@redux-saga/core'
import reducers from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createMiddlewareSaga()

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([sagaMiddleware])
  },
  devTools: true
})

export const makeStore = (context) => {
  sagaMiddleware.run(rootSaga)
  return store
}

export const wrapper = createWrapper(makeStore, { debug: true })
