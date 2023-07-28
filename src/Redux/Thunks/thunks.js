
import { facebookLogin, githubLogin, googleLogin, loginUser, logoutUser, registerUser, twitterLogin } from "../../Auth/Providers/providersAuth";

import { checkingCredentials, login, logout, setApplicants, setClipsFromTwitch, setEsports, setLeagues, setMatches, setPosts, setRivals, setUpcomingMatches } from "../Slices"
import { getApplicants, getEsports, getLeagues, getMatches, getRivals, getUpcomingMatches, providerClips, providerPosts } from "../../Main/Providers/providersData";


export const startTwitterLogin = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        await twitterLogin();
    }
}

export const startFacebookLogin = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const resp = await facebookLogin();
        if (!resp.ok) return dispatch(logout(resp.errorMessage));
        dispatch(login(resp))
    }
}

export const startLoginGoogle = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const resp = await googleLogin();
        if (!resp.ok) return dispatch(logout(resp.errorMessage));
        dispatch(login(resp));
    }
}

export const startGitHubLogin = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const resp = await githubLogin();
        if (!resp.ok) return dispatch(logout(resp.errorMessage));
        dispatch(login(resp));
    }
}


export const startLogin = ({ email, password }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const resp = await loginUser({ email, password });
        if (!resp.ok) return dispatch(logout(resp.errorMessage))
        dispatch(login(resp));
    }
}


export const startRegisterUser = ({ email, password, displayName }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const resp = await registerUser({ email, password, displayName });
        if (!resp.ok) return dispatch(logout(resp.errorMessage));
        dispatch(login(resp));
    }
}

export const startLogout = () => {
    return async (dispatch) => {
        await logoutUser()
        dispatch(logout());
    }
}

export const onLoadPosts = () => {
    return async (dispatch) => {
        const resp = await providerPosts();
        const posts = resp.slice(0, 6);
        dispatch(setPosts(posts))
    }
}

export const onLoadMatches = () => {
    return async (dispatch) => {
        const matches = await getMatches();
        dispatch(setMatches(matches))
    }
}

export const onLoadRivals = () => {
    return async (dispatch) => {
        const rivals = await getRivals();
        dispatch(setRivals(rivals))
    }
}

export const onLoadEsports = () => {
    return async (dispatch) => {
        const esports = await getEsports();
        dispatch(setEsports(esports))
    }
}

export const onLoadUpcomingMatches = () => {
    return async (dispatch) => {
        const upcomingMatches = await getUpcomingMatches();
        dispatch(setUpcomingMatches(upcomingMatches))
    }
}

export const onLoadLeagues = () => {
    return async (dispatch) => {
        const leagues = await getLeagues();
        dispatch(setLeagues(leagues))
    }
}

export const onLoadApplicants = () => {
    return async (dispatch) => {
        const applicants = await getApplicants();
        dispatch(setApplicants(applicants))
    }
}

export const onLoadClipsFromTwitch = () => {
    return async (dispatch) => {
        const clips = await providerClips();
        dispatch(setClipsFromTwitch(clips));
    }
}






