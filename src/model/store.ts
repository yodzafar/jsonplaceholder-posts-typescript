import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { postsReducer } from './posts'
import { userReducer } from './users'

const rootReducer = combineReducers({
  postsReducer,
  userReducer
})

export const store = configureStore({
  reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
