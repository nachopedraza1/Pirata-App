import { configureStore } from '@reduxjs/toolkit'
import { authSlice, mainDataSlice, postsSlice } from '../Slices'

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        posts: postsSlice.reducer,
        mainData: mainDataSlice.reducer,
    },
})