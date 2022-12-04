
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, updateProfile, FacebookAuthProvider, TwitterAuthProvider, GithubAuthProvider } from "firebase/auth";
import { collection, getDocs, orderBy, query } from "firebase/firestore/lite";
import { FirebaseAuth, FirebaseDB } from "./config";

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const twitterProvider = new TwitterAuthProvider();
const gitHubProvider = new GithubAuthProvider();


export const twitterLogin = async () => {
    try {
        const resp = await signInWithPopup(FirebaseAuth, twitterProvider)
        console.log(resp);
    } catch (error) {
        console.log(error);
    }
}

export const facebookLogin = async () => {
    try {
        const resp = await signInWithPopup(FirebaseAuth, facebookProvider);
        const { uid, email, photoURL, displayName } = resp.user;
        return { ok: true, uid, email, photoURL, displayName }
    } catch (error) {
        const errorMessage = error.message;
        return { ok: false, errorMessage }
    }
}

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

export const githubLogin = async () => {
    try {
        const resp = await signInWithPopup(FirebaseAuth, gitHubProvider);
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

export const getMatches = async () => {
    try {
        const queryRef = collection(FirebaseDB, "matches");
        const queryOrder = query(queryRef, orderBy("order", "desc"))
        const { docs } = await getDocs(queryOrder);
        const matches = docs.map(doc => {
            return { id: doc.id, ...doc.data() }
        })
        return matches;
    } catch (error) {
        console.log(error);
    }
}



