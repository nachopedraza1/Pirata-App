import { createSlice } from '@reduxjs/toolkit'

export const mainDataSlice = createSlice({
    name: 'mainData',
    initialState: {
        isLoading: true,
        matches: [],
        rivals: [],
        esports: [],

    },
    reducers: {
        setMatches: (state, { payload }) => {
            state.isLoading = false;
            state.matches = payload;
        },
        setRivals: (state, { payload }) => {
            state.isLoading = false;
            state.rivals = payload;
        },
        setEsports: (state, { payload }) => {
            state.isLoading = false;
            state.esports = payload;
        },
    },
})

export const { setMatches, setRivals, setEsports } = mainDataSlice.actions