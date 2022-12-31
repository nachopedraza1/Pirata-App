import { useDispatch, useSelector } from "react-redux"
import { onLoadEsports } from "../../Redux/Thunks"

import { useForm } from "../../hooks"

import { addDoc, collection, deleteDoc, doc, updateDoc } from "firebase/firestore/lite"
import { FirebaseDB } from "../../Firebase/config"

import { Button, FormControl, Grid, InputLabel, MenuItem, Select, } from "@mui/material"
import { Gamepad, SportsEsports } from "@mui/icons-material"
import { TittleComponent } from "../../Ui/Components";
import { EsportItem } from "../Components/EsportItem"
import { AdminPanelLayout } from "../Layout/AdminPanelLayout"
import { alert } from "../../Ui/Alerts/Alerts"

const initialState = {
    game: "",
    plataform: "",
    players: [],
}

export const AddEsports = () => {

    const dispatch = useDispatch();

    const { esports } = useSelector(state => state.mainData);

    const { game, plataform, formState, onInputChange } = useForm(initialState);

    const onAddEsport = async (event) => {
        event.preventDefault();

        const esport = { ...formState }

        const exist = esports.find(esport => esport.game === game);

        if (!exist) {
            const queryRef = collection(FirebaseDB, "esports");
            await addDoc(queryRef, esport);
            dispatch(onLoadEsports());
            alert("success", "Esport Agregado")
        } else {
            alert("warning", `${game} ya existe`)
        }
    }

    const onDeteleEsport = async (id) => {
        await deleteDoc(doc(FirebaseDB, "esports", id))
        dispatch(onLoadEsports());
        alert("error", "Esport eliminado")
    }

    const updateTeam = async (id, players) => {
        const queryRef = doc(FirebaseDB, "esports", id);
        await updateDoc(queryRef, {
            players: players
        })
        alert("success", "Cambios guardados")
    }

    return (
        <AdminPanelLayout>
            <Grid container spacing={2} className="animate__animated animate__fadeIn">

                <Grid item xs={12} lg={8} >
                    <TittleComponent tittle="AGREGAR EQUIPO" />
                    <form autoComplete="off" onSubmit={onAddEsport} >
                        <Grid
                            container
                            direction="column"
                            alignItems="center"
                            bgcolor="backgraunds.main"
                        >

                            <Grid container padding={2} spacing={2} >
                                <Grid item xs={12} md={6} >
                                    <FormControl fullWidth>
                                        <InputLabel>Juego</InputLabel>
                                        <Select
                                            required={true}
                                            name="game"
                                            value={game}
                                            label="Juego"
                                            onChange={onInputChange}
                                            endAdornment={<SportsEsports sx={{ mr: 2 }} />}
                                        >
                                            <MenuItem value="FREEFIRE BATTLEGROUNDS">FREEFIRE BATTLEGROUNDS</MenuItem>
                                            <MenuItem value="LEAGUE OF LEGENDS">LEAGUE OF LEGENDS</MenuItem>
                                            <MenuItem value="COUNTER STRIKE">COUNTER STRIKE</MenuItem>
                                            <MenuItem value="FORMULA1">FORMULA1</MenuItem>
                                            <MenuItem value="FIFA 23">FIFA 23</MenuItem>
                                            <MenuItem value="PES 23">PES 23</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12} md={6} >
                                    <FormControl fullWidth>
                                        <InputLabel>Plataforma</InputLabel>
                                        <Select
                                            required={true}
                                            name="plataform"
                                            value={plataform}
                                            label="plataforma"
                                            onChange={onInputChange}
                                            endAdornment={<Gamepad sx={{ mr: 2 }} />}
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
                                    Agregar
                                </Button>
                            </Grid>

                        </Grid>
                    </form >
                </Grid>

                <Grid item xs={12} lg={4}>
                    <TittleComponent tittle="EQUIPOS" />
                    <Grid container direction="column">
                        {
                            esports.map(esport => (<EsportItem key={esport.id} esport={esport} onDeteleEsport={onDeteleEsport} updateTeam={updateTeam} />))
                        }
                    </Grid>
                </Grid>

            </Grid >
        </AdminPanelLayout>
    )
}
