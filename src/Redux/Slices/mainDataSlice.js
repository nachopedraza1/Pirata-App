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
        applicants: [],
        clipsTwitch: [],
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
        },
        setApplicants: (state, { payload }) => {
            state.isLoading = false;
            state.applicants = payload;
        },
        setClipsFromTwitch: (state, { payload }) => {
            state.isLoading = false;
            state.clipsTwitch = payload;
        }
    },
})

export const { setMatches, setRivals, setEsports, setLeagues, setUpcomingMatches, setApplicants, setClipsFromTwitch } = mainDataSlice.actions