import { createSlice } from '@reduxjs/toolkit'
import { getPost, getPostList } from './actions'
import { Post } from '../../entities/post'

type TLoading = 'idle' | 'pending' | 'succeeded' | 'failed'

interface IPostList {
  data: Post[],
  loading: TLoading
}

interface IPost {
  data: Post | null,
  loading: TLoading
}

interface ISlicePost {
  postList: IPostList,
  post: IPost
}

const initialState = {
  postList: {
    loading: 'idle',
    data: []
  },
  post: {
    loading: 'idle',
    data: null
  }
} as ISlicePost

const postsSlice = createSlice({
  name: 'post-slice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // post list
    builder.addCase(getPostList.pending, (state) => {
      state.postList.loading = 'pending'
    })
    builder.addCase(getPostList.fulfilled, (state, { payload }) => {
      state.postList.data = payload
      state.postList.loading = 'succeeded'
    })
    builder.addCase(getPostList.rejected, (state) => {
      state.postList.data = []
      state.postList.loading = 'failed'
    })
    // post
    builder.addCase(getPost.fulfilled, (state, { payload }) => {
      state.post.data = payload
      state.post.loading = 'succeeded'
    })
    builder.addCase(getPost.pending, (state) => {
      state.post.loading = 'pending'
    })
  }
})

export const postsReducer = postsSlice.reducer
