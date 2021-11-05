import { createAsyncThunk } from '@reduxjs/toolkit'
import post from '../../service/post'
import { ACTION_TYPES } from '../../constants/action-types'
import { IQuery } from '../../types/query'

export const getPostList = createAsyncThunk(ACTION_TYPES.GET_POST_LIST, async (params: IQuery) => {
  const response = await post.getPostList(params)
  return response.data
})

export const getPost = createAsyncThunk(ACTION_TYPES.GET_POST, async (id: number) => {
  const response = await post.getPost(id)
  return response.data
})
