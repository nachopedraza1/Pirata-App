import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import { addDoc, collection } from "firebase/firestore/lite"
import { FirebaseDB } from "../../Firebase/config"

import { useForm } from "../../hooks/useForm"

import { AccountCircle, ContactEmergency, Email, EmojiEvents, Gamepad, Phone, RocketLaunch, SportsEsports } from "@mui/icons-material"
import { Button, FormControl, Grid, InputAdornment, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import { HeaderJoinTeam } from "../Components/HeaderJoinTeam"
import { MainLayout } from "../Layout/MainLayout"
import { Logo } from "../../Ui/Components/Logo"
import { alert } from "../../Ui/Alerts/Alerts"

import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment"
import moment from "moment"


const plataforms = [
    "Play Station 5",
    "Play Station 4",
    "Mobile",
    "XBOX",
    "PC"
];

const esports = [
    "Pro evolution soccer",
    "League of Legends",
    "Counter Strike",
    "Formula 1",
    "Fortnite",
    "Valorant",
    "Free fire",
    "Fifa",
    "No soy gamer"
];

const roles = [
    "Gamer",
    "Caster",
    "Streamer",
    "Diseñador",
    "Community Manager",
    "Nuevo proyecto de Esports",
];

const initialForm = {
    name: "",
    lastname: "",
    phone: "",
    email: "",
    fecha: "",
    rol: "",
    esport: "",
    plataform: "",
    checked: false,
}

export const JoinTeamPage = () => {

    const [dateMatch, setDateMatch] = useState(null);

    const [submitted, setSubmitted] = useState(false)

    const navigate = useNavigate()

    const { name, lastname, phone, email, rol, esport, plataform, onInputChange, formState } = useForm(initialForm);

    const date = moment(dateMatch).format('L');

    const onSubmitForm = async (event) => {
        event.preventDefault();
        setSubmitted(true);
        const queryRef = collection(FirebaseDB, "applicants");
        const formData = { ...formState, fecha: date }
        await addDoc(queryRef, formData);
        navigate("/", { replace: true })
        alert("success", "Formulario enviado con exito")
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <HeaderJoinTeam />
            <MainLayout bgColor="backgraunds.black">
                <img src="/assets/images/Linea.jpg" alt="" width="100%" style={{ position: "absolute", left: 0 }} />
                <Grid container justifyContent="center" alignItems="center" minHeight="100vh" pt={10} id="join">
                    <Grid item xs={12} sm={11} md={8} lg={7} padding={3} borderRadius={1} bgcolor="backgraunds.main" data-aos="fade">
                        <Logo size="170px" pb={"20px"} />

                        <form onSubmit={onSubmitForm}>
                            <Grid container alignItems="end" spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant="p" color="white" > Tus datos seran enviados y quedaran guardados en nuestra base de datos, nos pondremos en contacto con tigo a la brevedad. </Typography>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required={true}
                                        label="Nombre"
                                        type="text"
                                        placeholder="Ingresa tu Nombre"
                                        name="name"
                                        value={name}
                                        onChange={onInputChange}
                                        fullWidth
                                        InputProps={{
                                            endAdornment:
                                                <InputAdornment position="end">
                                                    <AccountCircle sx={{ color: "primary.main" }} />
                                                </InputAdornment>,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required={true}
                                        label="Apellido"
                                        type="text"
                                        placeholder="Ingresa tu Apellido"
                                        name="lastname"
                                        value={lastname}
                                        onChange={onInputChange}
                                        fullWidth
                                        InputProps={{
                                            endAdornment:
                                                <InputAdornment position="end">
                                                    <ContactEmergency sx={{ color: "primary.main" }} />
                                                </InputAdornment>,
                                        }}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required={true}
                                        label="Telefono"
                                        type="text"
                                        placeholder="Numero de telefono"
                                        name="phone"
                                        value={phone}
                                        onChange={onInputChange}
                                        fullWidth
                                        InputProps={{
                                            endAdornment:
                                                <InputAdornment position="end">
                                                    <Phone sx={{ color: "primary.main" }} />
                                                </InputAdornment>,
                                        }}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required={true}
                                        label="Email"
                                        type="email"
                                        placeholder="Ingresa tu Email"
                                        name="email"
                                        value={email}
                                        onChange={onInputChange}
                                        fullWidth
                                        InputProps={{
                                            endAdornment:
                                                <InputAdornment position="end">
                                                    <Email sx={{ color: "primary.main" }} />
                                                </InputAdornment>
                                        }}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <LocalizationProvider dateAdapter={AdapterMoment}>
                                        <DesktopDatePicker
                                            inputProps={{ placeholder: 'MES/DIA/AÑO', minLength: 10, maxLength: 10 }}
                                            renderInput={(props) => <TextField required={true} fullWidth sx={{ "& .MuiSvgIcon-root": { color: "primary.main" } }} {...props} />}
                                            label="Fecha de nacimiento"
                                            value={dateMatch}
                                            onChange={(newDateMatch) => {
                                                setDateMatch(newDateMatch);
                                            }}
                                        />
                                    </LocalizationProvider>
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <InputLabel sx={{ color: "white", pb: 1 }} >Quiero sumarme como:</InputLabel>
                                    <FormControl fullWidth>
                                        <InputLabel>Seleccionar</InputLabel>
                                        <Select
                                            required={true}
                                            type="text"
                                            name="rol"
                                            value={rol}
                                            onChange={onInputChange}
                                            label="Seleccionar"
                                            endAdornment={<EmojiEvents sx={{ mr: 2, color: "primary.main" }} />}
                                        >
                                            {
                                                roles.map(rol => (<MenuItem key={rol} value={rol} > {rol} </MenuItem>))
                                            }
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <InputLabel sx={{ color: "white", pb: 1 }} >Si sos gamer. ¿A qué jugás?</InputLabel>
                                    <FormControl fullWidth>
                                        <InputLabel>Esport</InputLabel>
                                        <Select
                                            required={true}
                                            type="text"
                                            name="esport"
                                            value={esport}
                                            onChange={onInputChange}
                                            label="Esport"
                                            endAdornment={<SportsEsports sx={{ mr: 2, color: "primary.main" }} />}
                                        >
                                            {
                                                esports.map(esport => (<MenuItem key={esport} value={esport} > {esport} </MenuItem>))
                                            }
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <InputLabel sx={{ color: "white", pb: 1 }} >En que plataforma jugas?</InputLabel>
                                    <FormControl fullWidth>
                                        <InputLabel>Plataforma</InputLabel>
                                        <Select
                                            required={true}
                                            label="Plataforma"
                                            type="text"
                                            name="plataform"
                                            value={plataform}
                                            onChange={onInputChange}
                                            endAdornment={<Gamepad sx={{ mr: 2, color: "primary.main" }} />}
                                        >
                                            {
                                                plataforms.map(plataform => (<MenuItem key={plataform} value={plataform} > {plataform} </MenuItem>))
                                            }
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12} md={6} textAlign="end">
                                    <Button
                                        disabled={submitted}
                                        endIcon={<RocketLaunch />}
                                        type="submit"
                                        variant="outlined">
                                        Enviar
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
            </MainLayout>
        </>
    )
}

