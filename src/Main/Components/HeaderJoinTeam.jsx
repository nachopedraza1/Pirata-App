import { Divider, Grid, Link, Typography } from "@mui/material"
import { MainLayout } from "../Layout/MainLayout"

export const HeaderJoinTeam = () => {
    return (
        <MainLayout bgImg="/assets/images/bg-join.webp" bgColor="backgraunds.black">

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
                    SUMATE
                </Typography>
            </Grid>

            <Grid
                className="animate__animated animate__fadeIn"
                container
                flexDirection="column"
                alignItems="center"
                height="100vh"
                pt={7}
            >

                <Grid container direction="column" padding={2} height="80vh" justifyContent="center" gap={4}>
                    <Grid container justifyContent="center" alignItems="center">
                        <Grid item xs={6} textAlign="center">
                            <img src="/assets/images/logo.png" width="100%" alt="" style={{ maxWidth: "250px" }} />
                        </Grid>
                    </Grid>

                    <Grid container justifyContent="center" textAlign="center">
                        <Grid item xs={12} sm={10} md={7}>
                            <Typography variant="h4" color="white" fontFamily="Aldrich">¡SUMATE A BELGRANO ESPORTS!</Typography>

                            <Divider
                                sx={{
                                    padding: 1,
                                    color: "white",
                                    "&::before, &::after": {
                                        borderColor: "secondary.light",
                                    },
                                }} >
                                <img src="/assets/images/belgrano-calavera-white.png" width="50px" alt="" />
                            </Divider>

                            <Typography variant="p" color="white" fontFamily="Poppins"> Participá de un espacio creado por y para gamers piratas. Si te gustan los videojuegos, ayudanos a construir la comunidad de Esports de la Pasión Más Grande de Córdoba. </Typography>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid position="absolute" bottom={50}>
                    <Link href="#join">
                        <img src="/assets/images/arrow.png" alt="" width="100%" className="animate__animated animate__fadeInUp" />
                    </Link>
                </Grid>

            </Grid>
        </MainLayout >
    )
}
