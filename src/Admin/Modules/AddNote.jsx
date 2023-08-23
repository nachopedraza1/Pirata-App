import { Button, Divider, Grid, TextField, Typography } from "@mui/material";
import { TittleComponent } from "../../Ui/Components";
import { AdminPanelLayout } from "../Layout/AdminPanelLayout";
import { useForm } from "../../hooks";
import { addDoc, collection, deleteDoc, doc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../Firebase/config";
import { alert } from "../../Ui/Alerts/Alerts";
import { useDispatch, useSelector } from "react-redux";
import { onLoadNotes } from "../../Redux/Thunks";

const initialForm = {
    title: "",
    note: "",
    linkNote: "",
    imageUrl: "",
}

export const AddNote = () => {

    const dispatch = useDispatch();
    const { notes } = useSelector(state => state.mainData);

    const { formState, title, note, imageUrl, linkNote, onInputChange } = useForm(initialForm);

    const onSubmitNote = async (event) => {
        event.preventDefault();

        const queryRef = collection(FirebaseDB, 'notes');
        try {
            await addDoc(queryRef, { ...formState })
            dispatch(onLoadNotes())
            alert("success", "Nota Publicada")
        } catch (error) {
            alert("error", "No se puede publicar en este momento")
        }
    }

    const onDeleteNote = async (id) => {
        await deleteDoc(doc(FirebaseDB, 'notes', id))
        dispatch(onLoadNotes());
        alert("error", "Nota Eliminada")
    }

    return (
        <AdminPanelLayout>
            <TittleComponent tittle="PUBLICAR NOTA" />
            <Grid container direction="column" bgcolor="backgraunds.main" gap={1}>
                <form onSubmit={onSubmitNote}>
                    <Grid container padding={2} spacing={2} >

                        <Grid item xs={12} md={7}>
                            <Grid container gap={2}>
                                <TextField
                                    required
                                    fullWidth
                                    type="text"
                                    placeholder="Ingrese un título"
                                    label="Titulo"
                                    name="title"
                                    value={title}
                                    onChange={onInputChange}
                                />
                                <TextField
                                    required
                                    fullWidth
                                    multiline
                                    type="text"
                                    rows={3}
                                    placeholder="Ingrese una descripcion de la noticia."
                                    label="Nota"
                                    name="note"
                                    value={note}
                                    onChange={onInputChange}
                                />
                                <TextField
                                    required
                                    fullWidth
                                    type="text"
                                    placeholder="Ingrese el link de la nota."
                                    label="Link Nota"
                                    name="linkNote"
                                    value={linkNote}
                                    onChange={onInputChange}
                                />
                                <TextField
                                    fullWidth
                                    type="text"
                                    placeholder="Ingrese la url de la imagen."
                                    label="Link Imagen"
                                    name="imageUrl"
                                    value={imageUrl}
                                    onChange={onInputChange}
                                />

                                <Button variant="contained" type="submit">
                                    Publicar
                                </Button>
                            </Grid>
                        </Grid>

                        <Grid item xs={12} md={5}>
                            <img width="100%" height={318} src={imageUrl != "" ? imageUrl : "/assets/images/profile_instagram_logo.jpg"} style={{ objectFit: "cover", borderRadius: "5px" }} />
                        </Grid>
                    </Grid>
                </form>
            </Grid>

            <TittleComponent tittle="ULTIMAS NOTAS" />
            <Grid container direction="column" bgcolor="backgraunds.main" gap={1} padding={2}>
                {notes.map(note => (
                    <>
                        <Grid container justifyContent="space-between" alignItems="center" key={note.id}>
                            <Typography color="white" noWrap maxWidth="50%"> {note.title} </Typography>
                            <Button variant="outlined" color="error" onClick={() => onDeleteNote(note.id)}> Eliminar </Button>
                        </Grid>
                        <Divider sx={{ color: "white" }} />
                    </>
                ))}
            </Grid>


        </AdminPanelLayout >
    )
}
