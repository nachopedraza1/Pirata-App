import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { login, logout } from "../Redux/Slices/authSlice";

import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../Firebase/config";

import { alert } from "../Ui/Alerts/Alerts";

export const useCheckAuth = () => {

    const status = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(FirebaseAuth, (user) => {
            if (!user) return dispatch(logout());
            const { uid, displayName, photoURL, email } = user;
            dispatch(login({ uid, displayName, photoURL, email }))
            setTimeout(() => {
                displayName == null
                    ? alert("success", "Tu cuenta ha sido creada con exito.")
                    : alert("success", `Bienvenido de nuevo ${displayName}`)
            }, 1500);

        });
    }, []);

    return status;
}
