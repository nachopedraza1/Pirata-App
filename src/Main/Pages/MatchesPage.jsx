import { Grid, Typography } from "@mui/material"
import { MatchHistoryContainer } from "../Components"
import { MainLayout } from "../Layout/MainLayout"

export const MatchesPage = () => {
    return (
        <MainLayout bgImg="../src/assets/background1.png">
            <Grid container pt={12}>
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

                <Grid container height="100vh" bgcolor="backgraunds.main" spacing={2}>
                    <Grid item xs={8}>
                        <MatchHistoryContainer />
                    </Grid>
                    <Grid item xs={4}>

                    </Grid>
                </Grid>
            </Grid>
        </MainLayout>
    )
}
