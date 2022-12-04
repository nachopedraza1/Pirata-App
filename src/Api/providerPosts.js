import axios from "axios";

const options = {
    method: 'GET',
    url: 'https://instagram204.p.rapidapi.com/userpost/48999563181/4/%7Bend_cursor%7D',
    headers: {
        'X-RapidAPI-Key': 'f42c02a377msh6fb9b84dab60020p10e1d6jsn5f66a6651e29',
        'X-RapidAPI-Host': 'instagram204.p.rapidapi.com',
    }
};

export const providerPosts = async () => {
    try {
        const resp = await axios.request(options)
        const { data: { edges } } = resp.data;
        return edges;
    } catch (error) {
        console.log(error);
    }
}
