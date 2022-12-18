import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onLoadMatches } from '../../Redux/Thunks';

import { useForm } from '../../hooks';

import { addDoc, collection, deleteDoc, doc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../Firebase/config';

import { Grid, Select, InputLabel, MenuItem, FormControl, Button, TextField } from '@mui/material';
import { TittleComponent } from "../../Ui/Components";
import { MatchItem } from '../Components';

import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment from 'moment/moment';

const initialForm = {
    game: "",
    teamName: "",
    puntosLocal: "",
    puntosRival: "",
    plataform: "",
}

export const AddMatches = () => {

    const dispatch = useDispatch();

    const { matches, rivals, esports } = useSelector(state => state.mainData);

    const { formState, teamName, game, puntosRival, puntosLocal, plataform, onInputChange } = useForm(initialForm);

    const [dateMatch, setDateMatch] = useState(null);

    const date = moment(dateMatch).format('ll');
    const time = moment(dateMatch).format('LT');

    const onAddMatch = async (event) => {
        event.preventDefault();

        const match = { ...formState, logoRival, date, time, order: matches.length + 1 }

        const queryRef = collection(FirebaseDB, "matches");
        await addDoc(queryRef, match);
        dispatch(onLoadMatches());
    }

    const onDeteleMatch = async (id) => {
        await deleteDoc(doc(FirebaseDB, "matches", `${id}`))
        dispatch(onLoadMatches());
    }

    const { logoRival } = rivals.find(logo => logo.teamName === teamName) || {};

    return (
        <Grid container spacing={2}>

            <Grid item xs={12} lg={8} >
                <TittleComponent tittle="AGREGAR PARTIDO" />
                <form onSubmit={onAddMatch} >
                    <Grid container direction="column" bgcolor="backgraunds.main" borderRadius={1} gap={1} >
                        <Grid
                            container
                            justifyContent="center"
                            padding={2}
                            alignItems={{ sm: "center" }}
                        >

                            <Grid item xs={12} md={6} padding={1}>
                                <FormControl fullWidth>
                                    <InputLabel>Rival</InputLabel>
                                    <Select
                                        required={true}
                                        name="teamName"
                                        value={teamName}
                                        onChange={onInputChange}
                                        label="Rival"
                                    >
                                        {
                                            rivals.map(rival => (<MenuItem value={rival.teamName} key={rival.id} >{rival.teamName}</MenuItem>))
                                        }
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} md={6} padding={1}>
                                <FormControl fullWidth>
                                    <InputLabel sx={{ color: "white" }}>Esport</InputLabel>
                                    <Select
                                        required={true}
                                        name="game"
                                        value={game}
                                        onChange={onInputChange}
                                        label="Esport"
                                    >
                                        {
                                            esports.map(item => (<MenuItem value={item.game} key={item.id}> {item.game} </MenuItem>))
                                        }
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} md={6} padding={1}>
                                <FormControl fullWidth>
                                    <InputLabel>Plataforma</InputLabel>
                                    <Select
                                        required={true}
                                        name="plataform"
                                        value={plataform}
                                        onChange={onInputChange}
                                        label="Plataforma"
                                    >
                                        <MenuItem value="PC">PC</MenuItem>
                                        <MenuItem value="XBOX">XBOX</MenuItem>
                                        <MenuItem value="PLAY">PLAY</MenuItem>
                                        <MenuItem value="MOBILE">MOBILE</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} sm={6} padding={1}>
                                <LocalizationProvider dateAdapter={AdapterMoment}>
                                    <DateTimePicker
                                        inputProps={{ placeholder: 'Seleciona Fecha y Hora' }}
                                        renderInput={(props) => <TextField fullWidth sx={{ "& .MuiSvgIcon-root": { color: "white" } }} {...props} />}
                                        label="Fecha y Hora"
                                        value={dateMatch}
                                        onChange={(newDateMatch) => {
                                            setDateMatch(newDateMatch);
                                        }}

                                    />
                                </LocalizationProvider>
                            </Grid>

                            <Grid item xs={12} md={2} textAlign="center" padding={1}>
                                <img src="../src/assets/Logo.png" alt="" width="100px" />
                            </Grid>

                            <Grid item xs={12} md={3} padding={1}>
                                <FormControl fullWidth>
                                    <InputLabel>Puntos Local</InputLabel>
                                    <Select
                                        required={true}
                                        name="puntosLocal"
                                        value={puntosLocal}
                                        onChange={onInputChange}
                                        label="Puntos Local"
                                    >
                                        <MenuItem value={0}>0</MenuItem>
                                        <MenuItem value={1}>1</MenuItem>
                                        <MenuItem value={2}>2</MenuItem>
                                        <MenuItem value={3}>3</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} md={2} display="flex" justifyContent="center" padding={1}>
                                <img src="../src/assets/swords1.png" alt="" width="40px" />
                            </Grid>

                            <Grid item xs={12} md={3} padding={1}>
                                <FormControl fullWidth >
                                    <InputLabel>Puntos Rival</InputLabel>
                                    <Select
                                        required={true}
                                        name="puntosRival"
                                        value={puntosRival}
                                        onChange={onInputChange}
                                        label="Puntos Rival"
                                    >
                                        <MenuItem value={0}>0</MenuItem>
                                        <MenuItem value={1}>1</MenuItem>
                                        <MenuItem value={2}>2</MenuItem>
                                        <MenuItem value={3}>3</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} md={2} textAlign="center" padding={1}>
                                <img src={logoRival} alt="" style={{ maxWidth: "70px" }} />
                            </Grid>

                            <Grid item xs={12} display="flex" justifyContent="end" padding={1}>
                                <Button type='submit' variant='outlined'>
                                    Agregar
                                </Button>
                            </Grid>
                        </Grid>

                    </Grid>
                </form >
            </Grid>

            <Grid item xs={12} lg={4}>
                <TittleComponent tittle="HISTORIAL" />
                <Grid container direction="column">
                    {
                        matches.map(match => (<MatchItem match={match} key={match.id} onDeteleMatch={onDeteleMatch} />))
                    }
                </Grid>
            </Grid>

        </Grid >
    );
}