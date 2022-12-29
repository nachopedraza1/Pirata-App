import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom";

import emailjs from '@emailjs/browser';

import { Button, Grid, IconButton, InputAdornment, TextField, Typography } from "@mui/material"
import { Email, Person, Phone } from "@mui/icons-material"
import { MainLayout } from "../Layout/MainLayout"

import { alertSuccess } from "../../Ui/Alerts/Alerts";

export const ContactPage = () => {

    const [submitted, setSubmitted] = useState(false)

    const form = useRef();

    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();
        setSubmitted(true)
        emailjs.sendForm('service_x3xpbnj', 'template_4mh8fc7', form.current, 'Sfc1HLm0g51Kcuv3-')
            .then((result) => {
                setSubmitted(false);
                alertSuccess("datos enviados, nos pondremos en contacto contigo a la brevedad")
                navigate("/", { replace: true });

            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <>
            <MainLayout bgImg="/assets/images/background-csgo.png" bgColor="backgraunds.main">

                <Grid sx={{
                    textAlign: "center",
                    display: { xs: "none", md: "block" },
                    position: "absolute",
                    transform: "rotate(-180deg)",
                    writingMode: "vertical-lr",
                    height: "100%",
                    left: "0px",
                }}>
                    <Typography
                        variant="h2"
                        fontFamily="Aldrich"
                        color="white"
                        className="animate__animated animate__fadeInRight"
                    >
                        CONTACTO
                    </Typography>
                </Grid>

                <Typography display={{ md: "none" }} variant="h3" fontFamily="Aldrich" textAlign="center" color="white" pt={10}>CONTACTO</Typography>


                <Grid container justifyContent="center" alignItems="center" height={{ xs: "auto", md: "100vh" }}>
                    <Grid item xs={12} sm={11} md={8} lg={7} padding={3} borderRadius={1} bgcolor="backgraunds.main" data-aos="fade">
                        <form ref={form} onSubmit={sendEmail}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        required={true}
                                        label="Nombre"
                                        type="text"
                                        name="name"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        required={true}
                                        label="Apellido"
                                        name="last_name"
                                        type="text"
                                        InputProps={{
                                            endAdornment:
                                                <InputAdornment position="end">
                                                    <IconButton sx={{ p: 0, color: "primary.main" }}>
                                                        <Person />
                                                    </IconButton>
                                                </InputAdornment>,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        required={true}
                                        label="Email"
                                        type="email"
                                        name="email"
                                        InputProps={{
                                            endAdornment:
                                                <InputAdornment position="end">
                                                    <IconButton sx={{ p: 0, color: "primary.main" }}>
                                                        <Email />
                                                    </IconButton>
                                                </InputAdornment>,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Telefono"
                                        name="phone"
                                        type="text"
                                        InputProps={{
                                            endAdornment:
                                                <InputAdornment position="end">
                                                    <IconButton sx={{ p: 0, color: "primary.main" }}>
                                                        <Phone />
                                                    </IconButton>
                                                </InputAdornment>,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        required={true}
                                        label="Mensaje"
                                        name="message"
                                        multiline
                                        rows={4}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        disabled={submitted}
                                        type="submit"
                                        value="send"
                                        fullWidth
                                        variant="contained"
                                        sx={{ p: 1 }}
                                    >
                                        ENVIAR
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
            </MainLayout >
        </>
    )
}
