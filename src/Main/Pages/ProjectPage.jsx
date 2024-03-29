import { useEffect } from "react";

import { SocialBanner } from "../Components";
import { Logo, Glitch } from "../../Ui/Components";

import { Box, Container, Grid, Link, Typography } from "@mui/material"

import { faTwitch, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'


export const ProjectPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Grid container>
            <Grid
                container
                width="100%"
                height="100vh"
                justifyContent="center"
                alignItems="center"
                bgcolor="black"
            >

                <Box
                    position="absolute"
                    width="100%"
                    height="100vh"
                    sx={{
                        backgroundImage: "url(/assets/images/bg-aboutus.jpg)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundAttachment: "fixed",
                        opacity: 0.5,
                    }} />

                <Grid container justifyContent="center" alignItems="center" zIndex={1}>
                    <Grid item>
                        <Typography color="white" variant="h3" fontFamily="Aldrich" className="animate__animated animate__fadeInDown">NOSOTROS</Typography>
                    </Grid>
                </Grid>

                <Box position="absolute" bottom={50} zIndex={1}>
                    <Link href="#team">
                        <img src="/assets/images/arrow.png" alt="" width="100%" className="animate__animated animate__fadeInUp" />
                    </Link>
                </Box>
            </Grid>

            <Box width="100%" bgcolor="backgraunds.black" paddingBottom={10}>
                <img src="/assets/images/Linea.jpg" alt="" width="100%" style={{ position: "absolute", left: 0 }} />
                <Container maxWidth="lg" id="team">
                    <Grid container justifyContent="center" paddingTop={10}>
                        <Grid item xs={12} sm={11} md={8} lg={7} padding={3} borderRadius={1} bgcolor="backgraunds.main" data-aos="fade">
                            <Logo size="170px" pb={"20px"} />
                            <Typography variant="p" color="white">
                                Belgrano Esports es el espacio de la comunidad pirata dedicado al gaming, la tecnología digital y las competencias online.
                                <br /><br />
                                Estamos dando los primeros pasos de un proyecto a largo plazo y queremos crear la comundiad de esports más grande del interior del país.
                                <br /><br />
                                Desde Alberdi para el mundo, el club más popular ingresó a la industria de los videojuegos para convocar talentos, streamers, generadores de contenido y a quienes quieran participar de una propuesta que apunta a convertirse en referencia, de manera colaborativa, horizontal e inclusiva.
                                <br /><br />
                                En lo deportivo, nuestros equipos van por todo en cada competencia. FIFA, League of Legends, Free Fire y Fórmula 1 son algunos de los esports en los que ya estamos participando en distintas ligas y torneos.
                                <br /><br />
                                Desde el entretenimiento, contamos con casters y streamers piratas que desarrollan contenidos para relatar los encuentros y transmitir en vivo desde los canales oficiales del club.
                                <br /><br />
                                ¡Sumate a Belgrano Esports!
                            </Typography>
                            <Glitch />
                        </Grid>

                        <Grid container justifyContent="center" paddingTop={3} gap={3}>
                            <SocialBanner type="twitch" icon={faTwitch} color="#6441a5" banner="bg-twitch" link="https://www.twitch.tv/cabesportsok" />
                            <SocialBanner type="twitter" icon={faTwitter} color="#1DA1F2" banner="bg-twitter" link="https://twitter.com/CABesportsok" />
                            <SocialBanner type="instagram" icon={faInstagram} color="#C13584" banner="bg-instagram" link="https://www.instagram.com/belgrano_esports/" />
                            <SocialBanner type="youtube" icon={faYoutube} color="red" banner="bg-youtube" link="https://www.youtube.com/playlist?list=PLQqbH6zMsNGoR5kURc-TZX25HkaiEvx5o" />
                        </Grid>
                    </Grid>
                </Container >
            </Box>
        </Grid >
    )
}
