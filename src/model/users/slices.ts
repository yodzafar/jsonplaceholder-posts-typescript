import { createSlice } from '@reduxjs/toolkit'
import { User } from '../../entities/user'
import { getUser } from './actions'

interface IUsersState {
  user: User | null,
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState: IUsersState = {
  user: null,
  loading: 'idle'
} as IUsersState

const userSlice = createSlice({
  name: 'user-slice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getUser.pending, (state, action) => {
      state.loading = 'pending'
    })
    builder.addCase(getUser.fulfilled, (state, { payload }) => {
      state.user = payload
      state.loading = 'succeeded'
    })
  }
})

export const userReducer = userSlice.reducer
