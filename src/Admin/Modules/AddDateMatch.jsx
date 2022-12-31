import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { onLoadUpcomingMatches } from "../../Redux/Thunks"

import { useForm } from "../../hooks"

import { addDoc, collection, deleteDoc, doc } from "firebase/firestore/lite"
import { FirebaseDB } from "../../Firebase/config"

import { Button, FormControl, Grid, InputAdornment, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { EmojiEvents, Gamepad, Security, SportsEsports } from "@mui/icons-material"
import { AdminPanelLayout } from "../Layout/AdminPanelLayout"
import { TittleComponent } from "../../Ui/Components";
import { alert } from "../../Ui/Alerts/Alerts"
import { DateItem } from "../Components"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitch } from "@fortawesome/free-brands-svg-icons"

import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment from "moment/moment"


const initialForm = {
    rival: "",
    game: "",
    plataform: "",
    league: "",
    stream_url: ""
}

export const AddDateMatch = () => {

    const dispatch = useDispatch();

    const { rivals, esports, upcomingMatches, leagues } = useSelector(state => state.mainData);

    const { formState, onInputChange, rival, game, league, stream_url, plataform } = useForm(initialForm);

    const [dateMatch, setDateMatch] = useState(null);

    const date = moment(dateMatch).format('ll');
    const time = moment(dateMatch).format('LT');

    const onAddMatchDate = async (event) => {
        event.preventDefault();

        const dateMatch = {
            ...formState,
            date,
            time,
            order: upcomingMatches.length + 1,
        }

        const queryref = collection(FirebaseDB, "upcomingMatches");
        await addDoc(queryref, dateMatch)
        dispatch(onLoadUpcomingMatches())
        alert("success", "Fecha Agregada")
    }

    const onDeteleDate = async (id) => {
        await deleteDoc(doc(FirebaseDB, "upcomingMatches", id))
        dispatch(onLoadUpcomingMatches());
        alert("error", "Fecha Eliminada")
    }

    return (
        <AdminPanelLayout>
            <Grid container spacing={2} className="animate__animated animate__fadeIn">

                <Grid item xs={12}>
                    <TittleComponent tittle="AGREGAR FECHA" />
                    <form onSubmit={onAddMatchDate}>
                        <Grid container direction="column" bgcolor="backgraunds.main" gap={1}  >
                            <Grid container spacing={2} padding={2}>
                                <Grid item xs={12} md={3}  >
                                    <FormControl fullWidth>
                                        <InputLabel>Rival</InputLabel>
                                        <Select
                                            required={true}
                                            name="rival"
                                            value={rival}
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

                                <Grid item xs={12} md={3}>
                                    <FormControl fullWidth>
                                        <InputLabel>Esport</InputLabel>
                                        <Select
                                            required={true}
                                            name="game"
                                            value={game}
                                            onChange={onInputChange}
                                            label="Esport"
                                            endAdornment={<SportsEsports sx={{ mr: 2 }} />}
                                        >
                                            {
                                                esports.map(esport => (<MenuItem value={esport.game} key={esport.id}>{esport.game}</MenuItem>))
                                            }
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12} md={3}>
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

                                <Grid item xs={12} md={3}>
                                    <FormControl fullWidth>
                                        <InputLabel>Liga</InputLabel>
                                        <Select
                                            required={true}
                                            name="league"
                                            value={league}
                                            label="Liga"
                                            onChange={onInputChange}
                                            endAdornment={<EmojiEvents sx={{ mr: 2 }} />}
                                        >
                                            {leagues.map(league => (<MenuItem key={league.id} value={league.league}> {league.league.toUpperCase()} </MenuItem>))}
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        name="stream_url"
                                        value={stream_url}
                                        label="Stream Link"
                                        placeholder="Stream url"
                                        onChange={onInputChange}
                                        InputProps={{
                                            endAdornment:
                                                <InputAdornment position="end">
                                                    <FontAwesomeIcon color="gray" fontSize="20px" icon={faTwitch} />
                                                </InputAdornment>
                                        }}
                                    />
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

                            </Grid>

                            <Grid item xs={12} display="flex" justifyContent="end" padding={1}>
                                <Button type='submit' variant='outlined'>
                                    Agregar
                                </Button>
                            </Grid>

                        </Grid>
                    </form >
                </Grid>

                <Grid item xs={12} >
                    <TittleComponent tittle="FECHAS" />
                    <Grid container direction="column">
                        {
                            upcomingMatches.map(match => (<DateItem key={match.id} match={match} onDeteleDate={onDeteleDate} />))
                        }
                    </Grid>
                </Grid>

            </Grid >
        </AdminPanelLayout>
    )
}
