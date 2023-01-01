
import axios from "axios";
import { collection, doc, getDocs, orderBy, query } from "firebase/firestore/lite";
import { FirebaseDB } from "../../Firebase/config";

export const providerPosts = async () => {
    const { data: { data } } = await axios.get("https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,timestamp,username&access_token=IGQVJXTXFXRW9VaUNkaWk3b3NrUmZA1dEhxeFd6aU43WGlTSzBILUVtYUg1alVfRlhrYWpERzEzTlhuV0NOYW1SUWJHSkJTbF9LR0pXcllMdHJFazEydmVZAQlZAaZAjdUX3ZAvMGNLZA2VB");
    const postsData = data.filter(post => post.media_type === "IMAGE");
    return postsData;
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

export const getRivals = async () => {
    try {
        const queryRef = collection(FirebaseDB, "rivals");
        const { docs } = await getDocs(queryRef);
        const rivals = docs.map(doc => {
            return { id: doc.id, ...doc.data() }
        })
        return rivals;
    } catch (error) {
        console.log(error);
    }
}

export const getEsports = async () => {
    try {
        const queryRef = collection(FirebaseDB, "esports");
        const { docs } = await getDocs(queryRef)
        const esports = docs.map(doc => {
            return { id: doc.id, ...doc.data() }
        })
        return esports;
    } catch (error) {
        console.log(error);
    }
}

export const getUpcomingMatches = async () => {
    try {
        const queryRef = collection(FirebaseDB, "upcomingMatches");
        const queryOrder = query(queryRef, orderBy("order", "desc"));
        const { docs } = await getDocs(queryOrder);
        const upcomingMatches = docs.map(doc => {
            return { id: doc.id, ...doc.data() }
        })
        return upcomingMatches;
    } catch (error) {
        console.log(error);
    }
}

export const getLeagues = async () => {
    try {
        const queryRef = collection(FirebaseDB, "leagues");
        const { docs } = await getDocs(queryRef);
        const leagues = docs.map(doc => {
            return { id: doc.id, ...doc.data() }
        })
        return leagues;
    } catch (error) {
        console.log(error);
    }
}
