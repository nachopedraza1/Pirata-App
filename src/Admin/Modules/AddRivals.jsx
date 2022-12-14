import { useDispatch, useSelector } from "react-redux";
import { onLoadRivals } from "../../Redux/Thunks/thunks";

import { addDoc, collection, deleteDoc, doc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../Firebase/config";

import { useForm, useUploadImage } from "../../hooks";

import { AdminPanelLayout } from "../Layout/AdminPanelLayout";
import { TittleComponent } from "../../Ui/Components";
import { alert } from "../../Ui/Alerts/Alerts";
import { RivalItem } from "../Components";

import { Button, Grid, IconButton, InputAdornment, TextField } from "@mui/material";
import { PhotoCamera, Security } from "@mui/icons-material";



export const AddRivals = () => {

    const dispatch = useDispatch();

    const { rivals } = useSelector(state => state.mainData)

    const { rival, onInputChange } = useForm({ rival: "" });

    const { uploadImg, imageURL } = useUploadImage(rival);

    const onAddRival = async (event) => {
        event.preventDefault();

        const newRival = { teamName: rival, logoRival: imageURL };

        const queryRef = collection(FirebaseDB, "rivals");
        await addDoc(queryRef, newRival);
        dispatch(onLoadRivals());
        alert("success", "Rival Agregado")
    }
    const onDeteleRival = async (id) => {
        await deleteDoc(doc(FirebaseDB, "rivals", id))
        dispatch(onLoadRivals());
        alert("error", "Rival Eliminado")
    }

    return (
        <AdminPanelLayout>
            <Grid container spacing={2} className="animate__animated animate__fadeIn">

                <Grid item xs={12} lg={8} >
                    <TittleComponent tittle="AGREGAR RIVAL" />
                    <form autoComplete="off" onSubmit={onAddRival}>
                        <Grid
                            container
                            justifyContent="space-between"
                            alignItems="center"
                            bgcolor="backgraunds.main"
                            gap={1} >

                            <Grid item xs={9} md={7} display="flex" alignItems="center" justifyContent="center" padding={2} >
                                <TextField
                                    required={true}
                                    fullWidth
                                    placeholder="Nombre del Rival"
                                    label="Rival"
                                    name="rival"
                                    value={rival}
                                    onChange={onInputChange}
                                    InputProps={{
                                        endAdornment:
                                            <InputAdornment position="end">
                                                <Security sx={{ color: "gray" }} />
                                            </InputAdornment>,
                                    }}
                                />

                                <IconButton color="primary" aria-label="upload picture" component="label" sx={{ m: 1 }} disabled={!rival}>
                                    <input hidden accept="image/*" multiple type="file" onChange={uploadImg} />
                                    <PhotoCamera fontSize="medium" />
                                </IconButton>
                            </Grid>

                            <Grid item xs={2} padding={2} display="flex" justifyContent="end">
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
                            rivals.slice(0, 6).map(rival => (<RivalItem key={rival.id} rival={rival} onDeteleRival={onDeteleRival} />))
                        }
                    </Grid>
                </Grid>

            </Grid >
        </AdminPanelLayout >
    )
}
