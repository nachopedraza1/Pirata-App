import { createSlice } from '@reduxjs/toolkit'

export const mainDataSlice = createSlice({
    name: 'mainData',
    initialState: {
        isLoading: true,
        matches: [],
        rivals: [],
        esports: [],
        leagues: [],
        upcomingMatches: [],

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
        setUpcomingMatches: (state, { payload }) => {
            state.isLoading = false;
            state.upcomingMatches = payload;
        },
        setLeagues: (state, { payload }) => {
            state.isLoading = false;
            state.leagues = payload;
        }
    },
})

export const { setMatches, setRivals, setEsports, setLeagues, setUpcomingMatches } = mainDataSlice.actions