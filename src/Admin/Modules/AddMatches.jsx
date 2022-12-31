import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onLoadMatches } from '../../Redux/Thunks';

import { useForm } from '../../hooks';

import { addDoc, collection, deleteDoc, doc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../Firebase/config';

import { Grid, Select, InputLabel, MenuItem, FormControl, Button, TextField } from '@mui/material';
import { EmojiEvents, Gamepad, Security, SportsEsports } from '@mui/icons-material';
import { AdminPanelLayout } from '../Layout/AdminPanelLayout';
import { TittleComponent } from "../../Ui/Components";
import { alert } from '../../Ui/Alerts/Alerts';
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
    league: "",
}

export const AddMatches = () => {

    const dispatch = useDispatch();

    const { matches, rivals, esports, leagues } = useSelector(state => state.mainData);

    const { formState, teamName, game, league, puntosRival, puntosLocal, plataform, onInputChange } = useForm(initialForm);

    const [dateMatch, setDateMatch] = useState(null);

    const date = moment(dateMatch).format('ll');
    const time = moment(dateMatch).format('LT');

    const onAddMatch = async (event) => {
        event.preventDefault();

        const match = { ...formState, logoRival, date, time, order: matches.length + 1 }

        const queryRef = collection(FirebaseDB, "matches");
        await addDoc(queryRef, match);
        dispatch(onLoadMatches());
        alert("success", "Resultado Agregado")
    }

    const onDeteleMatch = async (id) => {
        await deleteDoc(doc(FirebaseDB, "matches", id))
        dispatch(onLoadMatches());
        alert("error", "Resultado eliminado")
    }

    const { logoRival } = rivals.find(logo => logo.teamName === teamName) || {};

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const values = [];
    for (let i = 0; i <= 10; i++) {
        values.push(i)
    }

    return (
        <AdminPanelLayout>
            <Grid container spacing={2} className="animate__animated animate__fadeIn">

                <Grid item xs={12}>
                    <TittleComponent tittle="AGREGAR PARTIDO" />
                    <form onSubmit={onAddMatch} >
                        <Grid container direction="column" bgcolor="backgraunds.main" gap={1} >
                            <Grid container padding={2} spacing={2} alignItems={{ sm: "center" }}>
                                <Grid item xs={12} md={4}>
                                    <FormControl fullWidth>
                                        <InputLabel>Rival</InputLabel>
                                        <Select
                                            required={true}
                                            name="teamName"
                                            value={teamName}
                                            onChange={onInputChange}
                                            label="Rival"
                                            endAdornment={<Security sx={{ mr: 2 }} />}
                                        >
                                            {
                                                rivals.map(rival => (<MenuItem value={rival.teamName} key={rival.id} >{rival.teamName.toUpperCase()}</MenuItem>))
                                            }
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12} md={4}>
                                    <FormControl fullWidth>
                                        <InputLabel >Esport</InputLabel>
                                        <Select
                                            required={true}
                                            name="game"
                                            value={game}
                                            onChange={onInputChange}
                                            label="Esport"
                                            endAdornment={<SportsEsports sx={{ mr: 2 }} />}
                                        >
                                            {
                                                esports.map(item => (<MenuItem value={item.game} key={item.id}> {item.game} </MenuItem>))
                                            }
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12} md={4}>
                                    <FormControl fullWidth>
                                        <InputLabel>Plataforma</InputLabel>
                                        <Select
                                            required={true}
                                            name="plataform"
                                            value={plataform}
                                            onChange={onInputChange}
                                            label="Plataforma"
                                            endAdornment={<Gamepad sx={{ mr: 2 }} />}
                                        >
                                            <MenuItem value="PC">PC</MenuItem>
                                            <MenuItem value="XBOX">XBOX</MenuItem>
                                            <MenuItem value="PLAY">PLAY</MenuItem>
                                            <MenuItem value="MOBILE">MOBILE</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <FormControl fullWidth>
                                        <InputLabel>Liga</InputLabel>
                                        <Select
                                            required={true}
                                            name="league"
                                            value={league}
                                            onChange={onInputChange}
                                            label="Liga"
                                            endAdornment={<EmojiEvents sx={{ mr: 2 }} />}
                                        >
                                            {leagues.map(league => (<MenuItem key={league.id} value={league.league}> {league.league.toUpperCase()} </MenuItem>))}
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <LocalizationProvider dateAdapter={AdapterMoment}>
                                        <DateTimePicker
                                            inputProps={{ placeholder: 'Seleciona Fecha y Hora' }}
                                            renderInput={(props) => <TextField required={true} fullWidth sx={{ "& .MuiSvgIcon-root": { color: "white" } }} {...props} />}
                                            label="Fecha y Hora"
                                            value={dateMatch}
                                            onChange={(newDateMatch) => {
                                                setDateMatch(newDateMatch);
                                            }}

                                        />
                                    </LocalizationProvider>
                                </Grid>

                                <Grid item xs={12} md={2} textAlign="center" padding={1}>
                                    <img src="/assets/images/Logo.png" alt="" width="100px" />
                                </Grid>

                                <Grid item xs={12} md={3}>
                                    <FormControl fullWidth>
                                        <InputLabel>Puntos Local</InputLabel>
                                        <Select
                                            required={true}
                                            name="puntosLocal"
                                            value={puntosLocal}
                                            onChange={onInputChange}
                                            label="Puntos Local"
                                        >
                                            {
                                                values.map(value => (<MenuItem key={value} value={value}> {value} </MenuItem>))
                                            }
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12} md={2} display="flex" justifyContent="center" padding={1}>
                                    <img src="/assets/images/swords1.png" alt="" width="40px" />
                                </Grid>

                                <Grid item xs={12} md={3}>
                                    <FormControl fullWidth >
                                        <InputLabel>Puntos Rival</InputLabel>
                                        <Select
                                            required={true}
                                            name="puntosRival"
                                            value={puntosRival}
                                            onChange={onInputChange}
                                            label="Puntos Rival"
                                        >
                                            {
                                                values.map(value => (<MenuItem key={value} value={value}> {value} </MenuItem>))
                                            }
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12} md={2} textAlign="center">
                                    <img src={logoRival} alt="" style={{ maxWidth: "70px" }} />
                                </Grid>

                            </Grid>

                            <Grid item xs={12} display="flex" justifyContent="end" padding={1}>
                                <Button type='submit' variant='outlined'>
                                    Agregar
                                </Button>
                            </Grid>

                        </Grid>
                    </form >
                </Grid>

                <Grid item xs={12}>
                    <TittleComponent tittle="HISTORIAL" />
                    <Grid container direction="column">
                        {
                            matches.slice(0, 4).map(match => (<MatchItem match={match} key={match.id} onDeteleMatch={onDeteleMatch} />))
                        }
                    </Grid>
                </Grid>

            </Grid >
        </AdminPanelLayout>
    );
}