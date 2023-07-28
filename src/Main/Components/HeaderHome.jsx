import { Divider, Grid, Link, Typography } from "@mui/material"
import { MainLayout } from "../Layout/MainLayout"


const logosEsports = [
    { name: "League of Legends", imgUrl: "/assets/images/esports/LEAGUE OF LEGENDS.png", size: "90%" },
    { name: "Fifa", imgUrl: "/assets/images/esports/logo-fifa.png", size: "100%" },
    { name: "Formula1", imgUrl: "/assets/images/esports/FORMULA1.png", size: "100%" },
];

export const HeaderHome = () => {

    return (
        <MainLayout bgImg="/assets/images/bg-main-desk.webp">
            <Grid
                className="animate__animated animate__fadeIn"
                container
                flexDirection="column"
                alignItems="center"
                height="100vh"
                minHeight="100vh"
                pt={7}
            >

                <Grid container direction="column" padding={2} height="80vh" justifyContent="space-around">
                    <Grid container justifyContent="center" alignItems="center" position="relative">
                        <Grid item xs={6} textAlign="center">
                            <img src="/assets/images/logo.png" width="100%" alt="" style={{ maxWidth: "250px" }} />
                        </Grid>
                        <Grid item xs={12} position="absolute" right={2}>
                            <Link href="https://republicadealberdi.ar/" target="_blank" display={{ xs: "none", md: "block" }} >
                                <img src="/assets/images/logocabrepublica.png" alt="" width="250px" />
                            </Link>
                        </Grid>
                    </Grid>

                    <Grid container justifyContent="center" textAlign="center">
                        <Grid item xs={12} sm={10} md={7} lg={6}>
                            <Typography variant="h4" color="white" fontFamily="Aldrich">BELGRANO ESPORTS</Typography>
                            <Divider sx={{ color: "white", margin: "5px" }} />
                            <Typography variant="p" color="white" fontFamily="Poppins"> Belgrano Esports es el espacio de encuentro y competencia de los y las gamers piratas de todo el país y el mundo. Hoy nuestros planteles buscan llegar a lo más alto en:</Typography>
                        </Grid>
                    </Grid>

                    <Grid container justifyContent="center" alignItems="center">
                        {logosEsports.map(({ name, imgUrl, size }) => (
                            <Grid item xs={6} sm={3} md={2} textAlign="center" key={name}>
                                <img src={imgUrl} alt={`${name} Belgrano Esports`} width={size} style={{ maxWidth: "190px" }} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>

                <Grid position="absolute" bottom={50}>
                    <Link href="#home">
                        <img src="/assets/images/arrow.png" alt="" width="100%" className="animate__animated animate__fadeInUp" />
                    </Link>
                </Grid>
            </Grid>
        </MainLayout >
    )
}
