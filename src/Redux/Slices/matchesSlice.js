import { createSlice } from '@reduxjs/toolkit'

export const matchesSlice = createSlice({
    name: 'matches',
    initialState: {
        isLoading: true,
        matches: [],
        rivales:[],
        esports:[],
        
    },
    reducers: {
        setMatches: (state, { payload }) => {
            state.isLoading = false;
            state.matches = payload;
            state.rivales = payload;
            state.esports = payload;
        }
    },
})

export const { setMatches } = matchesSlice.actions