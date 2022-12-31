import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom";

import emailjs from '@emailjs/browser';

import { Box, Button, Divider, Grid, IconButton, InputAdornment, Link, TextField, Toolbar, Typography } from "@mui/material"
import { Email, LocationOn, Person, Phone, Send } from "@mui/icons-material"
import { MainLayout } from "../Layout/MainLayout"
import { alert } from "../../Ui/Alerts/Alerts";
import { SocialButtons } from "../../Ui/Components";

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
                alert("success", "datos enviados, nos pondremos en contacto contigo a la brevedad")
                setTimeout(() => { navigate("/", { replace: true }); }, 3000);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <>
            <MainLayout bgImg="/assets/images/background1.jpg" bgImgMobile="/assets/images/background1-mobile.jpg" bgColor="backgraunds.black">

                <Grid sx={{
                    textAlign: "center",
                    display: { xs: "none", lg: "block" },
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

                <Toolbar />

                <Typography display={{ md: "none" }} variant="h3" fontFamily="Aldrich" textAlign="center" color="white" p={2}>CONTACTO</Typography>

                <Grid container justifyContent="center" alignItems="center" minHeight="95vh">

                    <Grid
                        container
                        padding={3}
                        position="relative"
                        justifyContent="space-around"
                        bgcolor="backgraunds.black"
                        maxWidth="1100px"
                        className="animate__animated animate__fadeIn"
                    >

                        <Grid position="absolute" top="-65px" zIndex={1} display={{ xs: "none", md: "block" }}>
                            <img src="/assets/images/Logo.png" alt="" width="150px" />
                        </Grid>

                        <Grid item xs={12} md={5} display="flex" flexDirection="column" justifyContent="start" alignItems="center">
                            <Button
                                size='medium'
                                disableTouchRipple
                                startIcon={<Phone sx={{ color: "primary.main" }} />}
                                sx={{ color: 'gray', "&:hover": { color: "primary.main" }, fontSize: 17, fontWeight: "500" }}>
                                0351-4967008
                            </Button>
                            <Button
                                size='medium'
                                href="https://www.google.com.ar/maps/place/Estadio+Julio+C%C3%A9sar+Villagra+Club+Atl%C3%A9tico+Belgrano/@-31.400585,-64.208582,17z/data=!4m10!1m2!2m1!1sBelgrano+de+C%C3%B3rdoba!3m6!1s0x9432988e27e605e9:0xca5a6701c330c816!8m2!3d-31.4032972!4d-64.2068661!15sChRCZWxncmFubyBkZSBDw7NyZG9iYVoWIhRiZWxncmFubyBkZSBjw7NyZG9iYZIBB3N0YWRpdW2aASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVUTJlRTV4UjJGQkVBReABAA!16zL20vMGZreTZ4" target="_blank"
                                disableTouchRipple
                                startIcon={<LocationOn sx={{ color: "primary.main" }} />}
                                sx={{ color: 'gray', "&:hover": { color: "primary.main" }, fontSize: 17, fontWeight: "500" }}>
                                arturo orgaz 510
                            </Button>
                            <Button
                                size='medium'
                                href='mailto:belgranoegames@gmail.com'
                                disableTouchRipple
                                startIcon={<Email sx={{ color: "primary.main" }} />}
                                sx={{ color: 'gray', "&:hover": { color: "primary.main" }, fontSize: 17, fontWeight: "500" }}>
                                belgranoegames@gmail.com
                            </Button>
                            <Typography variant="h6" color="white" fontFamily="Aldrich"> SIGUENOS EN NUESTRAS REDES! </Typography>
                            <SocialButtons />

                            {/* <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.491385057111!2d-64.2085820432221!3d-31.400584968028582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432988e27e605e9%3A0xca5a6701c330c816!2sEstadio%20Julio%20C%C3%A9sar%20Villagra%20Club%20Atl%C3%A9tico%20Belgrano!5e0!3m2!1ses!2sar!4v1672385782846!5m2!1ses!2sar" width="100%" height="200" style={{ borderRadius: "5px" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
                        </Grid>

                        <Divider
                            orientation="vertical"
                            flexItem
                            sx={{
                                display: { xs: "none", md: "flex" },
                                color: "white",
                                "&::before, &::after": {
                                    borderColor: "secondary.light",
                                }
                            }}>
                            <img src="/assets/images/belgrano-calavera-white.png" width="50px" alt="" />
                        </Divider>

                        <Grid item xs={12} md={5}>
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
                                            startIcon={<Send />}
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
                </Grid>
            </MainLayout >
        </>
    )
}
