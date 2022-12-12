import { useDispatch, useSelector } from "react-redux";
import { onLoadRivals } from "../../Redux/Thunks/thunks";

import { FirebaseDB } from "../../Firebase/config";
import { addDoc, collection, deleteDoc, doc } from "firebase/firestore/lite";

import { useForm, useUploadImage } from "../../hooks";

import { AdminPanelLayout } from "../Layout/AdminPanelLayout";
import { TittleComponent } from "../../Main/Components";
import { RivalItem } from "../Components";

import { PhotoCamera } from "@mui/icons-material";
import { Button, Grid, IconButton, TextField } from "@mui/material";


const initalForm = {
    rival: ""
}

export const AddRivals = () => {

    const dispatch = useDispatch();

    const { rivals } = useSelector(state => state.mainData)

    const { rival, onInputChange } = useForm(initalForm);

    const { uploadImg, imageURL } = useUploadImage(rival);

    const onSubmit = async (event) => {
        event.preventDefault();

        const newRival = { teamName: rival, logoRival: imageURL };

        const queryRef = collection(FirebaseDB, "rivals");
        await addDoc(queryRef, newRival);
        dispatch(onLoadRivals());
    }
    const onDeteleRival = async (id) => {
        await deleteDoc(doc(FirebaseDB, "rivals", `${id}`))
        dispatch(onLoadRivals());
    }

    return (
        <Grid container spacing={2}>

            <Grid item xs={12} lg={8} >
                <TittleComponent tittle="AGREGAR RIVAL" />
                <form autoComplete="off" onSubmit={onSubmit}>
                    <Grid
                        container
                        justifyContent="space-between"
                        alignItems="center"
                        bgcolor="backgraunds.main"
                        borderRadius={1}
                        gap={1} >

                        <Grid item xs={6} display="flex" alignItems="center" justifyContent="center" padding={2} >
                            <TextField
                                required={true}
                                fullWidth
                                placeholder="Nombre del Rival"
                                label="Rival"
                                name="rival"
                                value={rival}
                                onChange={onInputChange}
                            />

                            <IconButton color="primary" aria-label="upload picture" component="label" sx={{ m: 1 }} disabled={!rival}>
                                <input hidden accept="image/*" multiple type="file" onChange={uploadImg} />
                                <PhotoCamera fontSize="medium" />
                            </IconButton>
                        </Grid>

                        <Grid item xs={3} padding={2} display="flex" justifyContent="end">
                            <Button variant="outlined" type="submit" disabled={!imageURL}>
                                Actualizar
                            </Button>
                        </Grid>

                    </Grid>
                </form >
            </Grid>

            <Grid item xs={12} lg={4}>
                <TittleComponent tittle="RIVALES" />
                <Grid container direction="column">
                    {
                        rivals.map(rival => (<RivalItem key={rival.id} rival={rival} onDeteleRival={onDeteleRival} />))
                    }
                </Grid>
            </Grid>

        </Grid >
    )
}
