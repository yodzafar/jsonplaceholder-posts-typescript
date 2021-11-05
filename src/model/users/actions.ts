import { createAsyncThunk } from '@reduxjs/toolkit'
import { ACTION_TYPES } from '../../constants/action-types'
import user from '../../service/user'

export const getUser = createAsyncThunk(ACTION_TYPES.GET_USER, async (id: number) => {
  const response = await user.getUser(id)
  return response.data
})
