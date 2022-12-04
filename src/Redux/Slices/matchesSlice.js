import { createSlice } from '@reduxjs/toolkit'

export const matchesSlice = createSlice({
    name: 'matches',
    initialState: {
        isLoading: true,
        matches: []
    },
    reducers: {
        setMatches: (state, { payload }) => {
            state.isLoading = false;
            state.matches = payload;
        }
    },
})

export const { setMatches } = matchesSlice.actions