import { Grid, Container, Toolbar, Typography } from "@mui/material"
import { MainLayout } from "../Layout/MainLayout"

export const MatchesPage = () => {
    return (
        <MainLayout bgImg="../src/assets/background1.png">
            <Toolbar />
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item xs={12} textAlign="center">
                        <Typography
                            variant="h3"
                            mb={5}
                            fontFamily="Aldrich"
                            color="white"
                            className="animate__animated animate__fadeInDown">
                            PARTIDOS
                        </Typography>
                    </Grid>

                    <Grid item xs={12} height="100vh" bgcolor="backgraunds.main" borderRadius={1}>
                        
                    </Grid>
                </Grid>
            </Container>
        </MainLayout>
    )
}
