import { Button, Divider, Grid, Typography } from "@mui/material"

export const BannerHome = () => {
    return (
        <Grid
            container
            marginTop={2}
            flexDirection="column"
            sx={{
                backgroundImage: `url(${"../src/assets/Login.jpg"})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",

            }}
        >
            <Button
                className="animate__animated animate__fadeIn"
                variant="contained"
                sx={{
                    borderRadius: "0px",
                    clipPath: "polygon(0 0, 100% 0, 90% 100%, 0% 100%)",
                    padding: "20px",
                    paddingRight: "60px",
                    maxWidth: "300px"
                }}>
                Sumate a nuestro equipo!
            </Button>

            <Grid container flexDirection="column" alignItems="center" textAlign="center" padding={4} gap={5} className="animate__animated animate__fadeIn">

                <Grid item xs={12} md={6}>
                    <Typography variant="h4" color="white" fontFamily="Aldrich">BELGRANO ESPORTS</Typography>
                    <Divider sx={{ color: "white", margin: "5px" }} />
                    <Typography variant="p" color="white" fontFamily="Poppins-reg"> Belgrano Esports es el espacio de encuentro y competencia de los y las gamers piratas de todo el país y el mundo. Hoy nuestros planteles buscan llegar a lo más alto en:</Typography>
                </Grid>

                <Grid item display="flex" flexWrap="wrap" justifyContent="center" alignItems="center" >
                    <Grid item xs={6} sm={3}>
                        <img src="../src/assets/esports/logo-lol.png" alt="" width="100%" style={{ maxWidth: "190px" }} />
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <img src="../src/assets/esports/logo-fifa.png" alt="" width="100%" style={{ maxWidth: "190px" }} />
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <img src="../src/assets/esports/logo-freefire.png" alt="" width="100%" style={{ maxWidth: "190px" }} />
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <img src="../src/assets/esports/formula 1.png" alt="" width="100%" style={{ maxWidth: "190px" }} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
