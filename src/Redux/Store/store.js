import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from '../Slices/authSlice'
import { matchesSlice } from '../Slices/matchesSlice'
import { postsSlice } from '../Slices/postsSlice'

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        posts: postsSlice.reducer,
        matches: matchesSlice.reducer,
    },
})