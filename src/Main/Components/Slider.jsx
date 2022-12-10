import { Container, Grid } from "@mui/material"

export const Slider = ({ desktopIMG, mobileIMG }) => {
    return (
        <Grid container>
            <Grid
                item
                marginTop={2}
                display={{ sm: "none"}}
                sx={{
                    width: "100%",
                    height: "100vh",
                    backgroundImage: `url(../src/assets/${mobileIMG})`,
                    backgroundSize: "cover",
                    backgroundPosition: "bottom",
                    backgroundRepeat: "no-repeat",
                }}>
            </Grid>
            <Container maxWidth="lg">

                <Grid item paddingTop={7} display={{ xs: "none", sm: "block" }} >
                    <img src={`../src/assets/${desktopIMG}`} alt="" width="100%" />
                </Grid>
            </Container>
        </Grid>

    )
}