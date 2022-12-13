import { Grid, Typography } from "@mui/material"

export const MatchItem = ({ match }) => {

    const isWinMatch = match.puntosLocal > match.puntosRival
    const equated = match.puntosLocal === match.puntosRival

    return (
        <Grid
            fontFamily="Poppins-reg"
            container
            bgcolor="backgraunds.main"
            borderBottom="1px solid gray"
        >
            <Grid container bgcolor="#16171b" justifyContent="center">
                <Typography variant="p" fontSize={12} color={equated ? "orange" : isWinMatch ? "green" : "red"}> {equated ? "EMPATE" : isWinMatch ? "VICTORIA" : "DERROTA"} </Typography>
            </Grid>
            <Grid container alignItems="center" justifyContent="space-between" padding={1}>
                <Grid item xs={1}>
                    <img src={`../src/assets/esports/${match.game}.png`} alt="" width="130%" />
                </Grid>
                <Grid item xs={3} textAlign="center">
                    <img src="../src/assets/Logo.png" alt="" width="100%" style={{ maxWidth: "70px" }} />
                </Grid>
                <Grid item xs={1}>
                    <Typography variant="h5" color="white" textAlign="center"> {match.puntosLocal} </Typography>
                </Grid>
                <Grid item xs={2} display="flex" justifyContent="center">
                    <img src="../src/assets/swords1.png" alt="" width="30px" />
                </Grid>
                <Grid item xs={1}>
                    <Typography variant="h5" color="error" textAlign="center"> {match.puntosRival} </Typography>
                </Grid>
                <Grid item xs={3} textAlign="center">
                    <img src={match.logoRival} alt="" width="100%" style={{ maxWidth: "60px" }} />
                </Grid>
            </Grid>
        </Grid>
    )
}
