import { useState } from "react"

import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { FirebaseStorage } from "../Firebase/config";


export const useUploadImage = (rival) => {

    const [imageURL, setImageURL] = useState(rival);

    const uploadImg = async ({ target }) => {

        const storageRef = ref(FirebaseStorage, rival);

        await uploadBytes(storageRef, target.files[0]);

        const pathReference = ref(FirebaseStorage, `gs://red-pirata.appspot.com/${rival}`);
        getDownloadURL(pathReference).then(url => setImageURL(url))
    }

    return {
        uploadImg,
        imageURL,
    }
}

