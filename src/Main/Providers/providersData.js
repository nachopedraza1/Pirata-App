
import axios from "axios";
import { collection, getDocs, orderBy, query } from "firebase/firestore/lite";
import { FirebaseDB } from "../../Firebase/config";

export const providerPosts = async () => {
    const { data: { data } } = await axios.get("SECRET TOKEN");
    const postsData = data.filter(({ media_type }) => media_type === "IMAGE" || media_type === "CAROUSEL_ALBUM");
    return postsData;
}

export const providerClips = async () => {
    const twitchID = 916822281
    const { data: { data } } = await axios.get(`https://api.twitch.tv/helix/videos?user_id=${twitchID}`, {
        'headers': {
            'Authorization': 'Bearer SECRET TOKEN',
            'Client-Id': 'Client ID TOKEN'
        }
    })
    return data[0]
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

export const getApplicants = async () => {
    const queryRef = collection(FirebaseDB, "applicants");
    const { docs } = await getDocs(queryRef);
    const applicants = docs.map(doc => {
        return { id: doc.id, ...doc.data() }
    });
    return applicants;
}


export const getNotes = async () => {
    const queryRef = collection(FirebaseDB, 'notes');
    const { docs } = await getDocs(queryRef);
    const notes = docs.map(doc => {
        return { id: doc.id, ...doc.data() }
    })
    return notes;
}

