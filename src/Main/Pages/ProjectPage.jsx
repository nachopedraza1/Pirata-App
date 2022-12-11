import { useEffect } from "react";

import { Box, Button, Container, Grid, Link, Typography } from "@mui/material"
import { Logo, Glitch } from "../../Ui/Components";


export const ProjectPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <Grid container >
            {/* <Slider desktopIMG="bannerProject.jpg" mobileIMG="bannerProjectMobile.png" /> */}
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
                        backgroundImage: `url(${"src/assets/quienessomos.jpg"})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundAttachment: "fixed",
                        opacity: 0.5,
                    }} />

                <Grid container justifyContent="center" alignItems="center" zIndex={1} gap={10} >
                    <Grid item>
                        <Typography color="white" variant="h3" fontFamily="Aldrich" >NOSOTROS</Typography>
                    </Grid>
                </Grid>

                <Box position="absolute" bottom={50} zIndex={1}>
                    <Link href="#team">
                        <img src="../src/assets/arrow.png" alt="" width="100%" />
                    </Link>
                </Box>
            </Grid>

            <Box width="100%" bgcolor="backgraunds.black">
                <Container maxWidth="lg" id="team">
                    <Grid container justifyContent="center" paddingTop={10}>
                        <Grid item xs={12} sm={11} md={8} lg={7} padding={3} borderRadius={2} bgcolor="backgraunds.main">
                            <Logo size="170px" pb={"20px"} />
                            <Typography variant="p" color="white" fontFamily="Poppins-reg" >
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

                        <Grid container justifyContent="center" paddingTop={3}>

                            <Grid item xs={12} sm={11} md={8} lg={7}>
                                <Button
                                    fullWidth
                                    sx={{
                                        backgroundImage: `url(${"../src/assets/nuestrodiscord.png"})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        padding: 0
                                    }} >

                                    <Grid container justifyContent="space-between" alignItems="center" height={140}>
                                        <Grid item xs={3}>
                                           
                                        </Grid>
                                        <Grid item xs={9} >
                                            <Typography variant="h5" fontFamily="Aldrich" color="white">NUESTRO DISCORD</Typography>
                                        </Grid>

                                    </Grid>
                                </Button>
                            </Grid>


                        </Grid>
                    </Grid>
                </Container >
            </Box>
        </Grid >
    )
}
