
import axios from "axios";
import { collection, getDocs, orderBy, query } from "firebase/firestore/lite";
import { FirebaseDB } from "../../Firebase/config";

export const providerPosts = async () => {

    const options = {
        method: 'GET',
        url: 'https://instagram-scraper2.p.rapidapi.com/medias',
        params: { user_id: '48999563181', batch_size: '6' },
        headers: {
            'X-RapidAPI-Key': 'f42c02a377msh6fb9b84dab60020p10e1d6jsn5f66a6651e29',
            'X-RapidAPI-Host': 'instagram-scraper2.p.rapidapi.com'
        }
    };

    try {
        const resp = await axios.request(options)
        const { data: { user } } = resp.data;
        const { edges } = user.edge_owner_to_timeline_media;
        return edges;
    } catch (error) {
        console.log(error);
    }
}

export const providerImagesPost = async () => {
    const ids = await axios.get("https://graph.instagram.com/6055764874456461/media?access_token=IGQVJYeFNQcFJlNkdSYkFiTEN2UWlYWk5vbnFrc3VvMFBqNTljd3BCNGdqWXpVaV9FWVBvV09qdE5fQ3dQclZAPeWt3Nml4TUNGQUJ4XzhIZAGlGRWpmYXNlUjlnTktkS0tTZAVNJV3Vn")
    const { data } = ids.data;

    const newArr = data.slice(0, 6).map(item => {
        axios.get(`https://graph.instagram.com/${item.id}?fields=caption,id,media_url&access_token=IGQVJYeFNQcFJlNkdSYkFiTEN2UWlYWk5vbnFrc3VvMFBqNTljd3BCNGdqWXpVaV9FWVBvV09qdE5fQ3dQclZAPeWt3Nml4TUNGQUJ4XzhIZAGlGRWpmYXNlUjlnTktkS0tTZAVNJV3Vn`)
            .then(img => {
                const { media_url } = img.data
                console.log(media_url);
            })
    })
    console.log(newArr);
}

providerImagesPost();

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
