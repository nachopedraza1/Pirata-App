
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const googleLogin = async () => {
    try {
        const resp = await signInWithPopup(FirebaseAuth, googleProvider);
        const { uid, email, photoURL, displayName } = resp.user;
        return { ok: true, uid, email, photoURL, displayName }
    } catch (error) {
        const errorMessage = error.message;
        return { ok: false, errorMessage }
    }
}


export const loginUser = async ({ email, password }) => {
    try {
        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL, displayName } = resp.user;
        return { ok: true, displayName, uid, photoURL, email }
    } catch (error) {
        const errorMessage = error.message;
        return { ok: false, errorMessage }
    }
}


export const registerUser = async ({ email, password, displayName }) => {
    try {
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL } = resp.user;
        await updateProfile(FirebaseAuth.currentUser, { displayName })
        return { ok: true, uid, photoURL, email, displayName }
    } catch (error) {
        const errorMessage = error.message;
        return { ok: false, errorMessage }
    }
}

export const logoutUser = async () => {
    return await FirebaseAuth.signOut();
}



