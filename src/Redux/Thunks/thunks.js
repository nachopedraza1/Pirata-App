
import { facebookLogin, googleLogin, loginUser, logoutUser, registerUser, twitterLogin } from "../../Firebase/provider";
import { checkingCredentials, login, logout } from "../Slices/authSlice"


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


