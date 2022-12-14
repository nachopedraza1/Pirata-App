import { Container, Grid } from "@mui/material"

export const Slider = ({ desktopIMG, mobileIMG }) => {
    return (
        <Grid container>
            <Grid
                item
                marginTop={2}
                display={{ xs: "flex", sm: "none" }}
                justifyContent="center"
                alignItems="center"
                sx={{
                    width: "100%",
                    height: "100vh",
                    backgroundImage: `url(../src/assets/${mobileIMG})`,
                    backgroundSize: "cover",
                    backgroundPosition: "bottom",
                    backgroundRepeat: "no-repeat",
                }}>
                <img src="src/assets/logoheader.gif" className="animate__animated animate__fadeIn" alt="" width="100%" />
            </Grid>
            <Container maxWidth="lg">

                <Grid item paddingTop={7} display={{ xs: "none", sm: "flex" }} textAlign="center" justifyContent="center" alignItems="center" >
                    <img src={`../src/assets/${desktopIMG}`} alt="" width="100%" />
                    <img src="src/assets/logoheader.gif" className="animate__animated animate__fadeIn" alt="" width="45%" style={{ position: "absolute", maxWidth: "550px" }} />
                </Grid>
            </Container>
        </Grid>

    )
}