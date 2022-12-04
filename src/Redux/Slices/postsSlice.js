import { createSlice } from '@reduxjs/toolkit'

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        isLoading: true,
        posts: []
    },
    reducers: {
        setPosts: (state, { payload }) => {
            state.isLoading = false;
            state.posts = payload;
        }
    },
})

export const { setPosts } = postsSlice.actions