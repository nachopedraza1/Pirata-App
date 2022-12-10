import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { addDoc, collection, deleteDoc, doc } from "firebase/firestore/lite"
import { useDispatch, useSelector } from "react-redux"
import { FirebaseDB } from "../../Firebase/config"
import { useForm } from "../../hooks"
import { TittleComponent } from "../../Main/Components"
import { onLoadEsports } from "../../Redux/Thunks"
import { EsportItem } from "../Components/EsportItem"
import { AdminPanelLayout } from "../Layout/AdminPanelLayout"

const initialState = {
    game: "",
    plataform: "",
}


export const AddEsports = () => {

    const dispatch = useDispatch();

    const { esports } = useSelector(state => state.mainData);

    const { game, plataform, formState, onInputChange } = useForm(initialState);

    const onAddEsport = async (event) => {
        event.preventDefault();

        const esport = { ...formState }

        const queryRef = collection(FirebaseDB, "esports");
        await addDoc(queryRef, esport);
        dispatch(onLoadEsports());
    }

    const onDeteleEsport = async (id) => {
        await deleteDoc(doc(FirebaseDB, "esports", `${id}`))
        dispatch(onLoadEsports());
    }

    return (
        <AdminPanelLayout>
            <Grid container spacing={2}>

                <Grid item xs={12} lg={8} >
                    <TittleComponent tittle="AGREGAR JUEGO" />
                    <form autoComplete="off" onSubmit={onAddEsport} >
                        <Grid
                            container
                            direction="column"
                            alignItems="center"
                            bgcolor="backgraunds.main"
                            borderRadius={1}
                        >

                            <Grid container padding={2} spacing={2} >
                                <Grid item xs={6} >
                                    <FormControl fullWidth>
                                        <FormControl fullWidth>
                                            <InputLabel>Juego</InputLabel>
                                            <Select
                                                required={true}
                                                name="game"
                                                value={game}
                                                label="Juego"
                                                onChange={onInputChange}
                                            >
                                                <MenuItem value="FREEFIRE">FREE FIRE</MenuItem>
                                                <MenuItem value="FORMULA1">FORMULA 1</MenuItem>
                                                <MenuItem value="CSGO">CSGO</MenuItem>
                                                <MenuItem value="FIFA">FIFA</MenuItem>
                                                <MenuItem value="PES">PES</MenuItem>
                                                <MenuItem value="LOL">LOL</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={6} >
                                    <FormControl fullWidth>
                                        <InputLabel>Plataforma</InputLabel>
                                        <Select
                                            required={true}
                                            name="plataform"
                                            value={plataform}
                                            label="plataforma"
                                            onChange={onInputChange}
                                        >
                                            <MenuItem value="PC">PC</MenuItem>
                                            <MenuItem value="XBOX">XBOX</MenuItem>
                                            <MenuItem value="PLAY">PLAY</MenuItem>
                                            <MenuItem value="MOBILE">MOBILE</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>


                            <Grid container justifyContent="end" padding={2}>
                                <Button variant="outlined" type="submit" >
                                    Actualizar
                                </Button>
                            </Grid>

                        </Grid>
                    </form >
                </Grid>

                <Grid item xs={12} lg={4}>
                    <TittleComponent tittle="JUEGOS" />
                    <Grid container direction="column">
                        {
                            esports.map(esport => (<EsportItem key={esport.id} esport={esport} onDeteleEsport={onDeteleEsport} />))
                        }
                    </Grid>
                </Grid>

            </Grid >

        </AdminPanelLayout>
    )
}
