import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import post from '../../service/post'

export const getPostList = createAsyncThunk('EXPRESS_GET_POSTS', async () => {
  return (await post.getPostList())
})

interface IPostsState {
  posts: []
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState = {
  posts: [],
  loading: 'idle'
} as IPostsState

const postsSlice = createSlice({
  name: 'posts-list',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPostList.pending, (state, action) => {
      state.loading = 'pending'
    })
    builder.addCase(getPostList.fulfilled, (state, action) => {
      console.log(action)
    })
  }
})

export const postsReducer = postsSlice.reducer
