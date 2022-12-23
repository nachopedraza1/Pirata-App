import { Box, Divider, Grid, Link, Typography } from "@mui/material"
import { MainLayout } from "../Layout/MainLayout"


export const BannerHome = () => {
    return (
        <MainLayout bgImg="/assets/images/background1.png">
            <Grid
                className="animate__animated animate__fadeIn"
                container
                flexDirection="column"
                alignItems="center"
                height="100vh"
                pt={7}

            >
                <Grid container sx={{
                    width: "100%",
                    minHeight: "30vh",
                    backgroundImage: `url("/assets/images/logoheader.gif")`,
                    backgroundPosition: "center",
                    backgroundSize: "450px",
                    backgroundRepeat: "no-repeat",
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "center",
                }}>
                    <Box display={{ xs: "none", md: "flex" }}>
                        <img src="/assets/images/logocabrepublica.png" alt="" width="250px" />
                    </Box>
                </Grid>

                <Grid container display="flex" justifyContent="center" alignItems="center" textAlign="center" padding={2} gap={3}>

                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" color="white" fontFamily="Aldrich">BELGRANO ESPORTS</Typography>
                        <Divider sx={{ color: "white", margin: "5px" }} />
                        <Typography variant="p" color="white" fontFamily="Poppins-reg"> Belgrano Esports es el espacio de encuentro y competencia de los y las gamers piratas de todo el país y el mundo. Hoy nuestros planteles buscan llegar a lo más alto en:</Typography>
                    </Grid>

                    <Grid item display="flex" flexWrap="wrap" justifyContent="center" alignItems="center" >
                        <Grid item xs={6} sm={3}>
                            <img src="/assets/images/esports/LEAGUE OF LEGENDS.png" alt="" width="100%" style={{ maxWidth: "190px" }} />
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <img src="/assets/images/esports/logo-fifa.png" alt="" width="100%" style={{ maxWidth: "190px" }} />
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <img src="/assets/images/esports/logo-freefire.png" alt="" width="100%" style={{ maxWidth: "190px" }} />
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <img src="/assets/images/esports/formula 1.png" alt="" width="100%" style={{ maxWidth: "190px" }} />
                        </Grid>
                    </Grid>

                </Grid>

                <Grid position="absolute" bottom={50}>
                    <Link href="#home">
                        <img src="/assets/images/arrow.png" alt="" width="100%" className="animate__animated animate__fadeInUp" />
                    </Link>
                </Grid>
            </Grid>
        </MainLayout>
    )
}
