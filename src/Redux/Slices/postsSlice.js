import { createSlice } from '@reduxjs/toolkit'

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: []
    },
    reducers: {
        setPosts: (state, { payload }) => {
            state.posts = payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const { setPosts } = postsSlice.actions