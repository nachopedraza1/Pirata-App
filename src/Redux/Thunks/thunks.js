
import { facebookLogin, getMatches, githubLogin, googleLogin, loginUser, logoutUser, registerUser, twitterLogin } from "../../Firebase/provider";
import { providerPosts } from "../../Api/providerPosts";

import { checkingCredentials, login, logout } from "../Slices/authSlice"
import { setMatches } from "../Slices/matchesSlice";
import { setPosts } from "../Slices/postsSlice";


export const startTwitterLogin = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const resp = await twitterLogin();
        console.log(resp);
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
        const posts = resp.map(post => {
            const { id, display_url, edge_media_to_caption, edge_media_preview_like, edge_media_to_comment } = post.node;
            const { text } = edge_media_to_caption.edges[0].node;
            const { count: comments } = edge_media_to_comment;
            const { count: likes } = edge_media_preview_like;
            return { id, display_url, text, likes, comments };
        })
        dispatch(setPosts(posts))
    }
}

export const onLoadMatches = () => {
    return async (dispatch) => {
        const matches = await getMatches();
        dispatch(setMatches(matches))
    }
}


