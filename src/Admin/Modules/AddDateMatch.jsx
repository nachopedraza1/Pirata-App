import { useSelector } from "react-redux"

import { Button, FormControl, Grid, InputLabel, MenuItem, Select, Stack, TextField } from "@mui/material"

import { useForm } from "../../hooks"

import { AdminPanelLayout } from "../Layout/AdminPanelLayout"
import { TittleComponent } from "../../Main/Components"

import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers"
import { useState } from "react"

import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment from "moment/moment"

const initialForm = {
    rival: "",
    game: "",
    plataform: "",
}

export const AddDateMatch = () => {

    const { rivals, esports } = useSelector(state => state.mainData);

    const { formState, onInputChange, rival, game, plataform } = useForm(initialForm);

    const [dateMatch, setDateMatch] = useState(null);

    const date = moment(dateMatch).format('L');
    const time = moment(dateMatch).format('LT');

    const onAddMatchDate = async (event) => {
        event.preventDefault();

        const dateMatch = {
            ...formState,
            date: date + " " + time,
        }
    }

    return (
        <Grid container spacing={2}>

            <Grid item xs={12} lg={8} >
                <TittleComponent tittle="AGREGAR FECHA" />
                <form autoComplete="off" onSubmit={onAddMatchDate}>
                    <Grid container direction="column" bgcolor="backgraunds.main" borderRadius={1} gap={1}  >
                        <Grid container spacing={2} padding={2}>
                            <Grid item xs={12} sm={6}  >
                                <FormControl fullWidth>
                                    <InputLabel>Rival</InputLabel>
                                    <Select
                                        required={true}
                                        name="rival"
                                        value={rival}
                                        onChange={onInputChange}
                                        label="Rival"
                                    >
                                        {
                                            rivals.map(rival => (<MenuItem value={rival.teamName} key={rival.id} >{rival.teamName}</MenuItem>))
                                        }
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth>
                                    <InputLabel>Esport</InputLabel>
                                    <Select
                                        required={true}
                                        name="game"
                                        value={game}
                                        onChange={onInputChange}
                                        label="Esport"
                                    >
                                        {
                                            esports.map(esport => (<MenuItem value={esport.game} key={esport.id}>{esport.game}</MenuItem>))
                                        }
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} sm={6}>
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

                            <Grid item xs={12} sm={6}>
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

                        <Grid item xs={12} display="flex" justifyContent="end" padding={2}>
                            <Button type='submit' variant='outlined'>
                                Agregar
                            </Button>
                        </Grid>

                    </Grid>
                </form >
            </Grid>

            <Grid item xs={12} lg={4}>
                <TittleComponent tittle="FECHAS" />
                <Grid container direction="column">

                </Grid>
            </Grid>

        </Grid >

    )
}
