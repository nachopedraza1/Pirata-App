import { faTwitch } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Grid, Typography } from "@mui/material"

export const MatchItem = ({ match }) => {

    const isWinMatch = match.puntosLocal > match.puntosRival
    const equated = match.puntosLocal === match.puntosRival

    const bgcolor = equated ? "orange" : isWinMatch ? "green" : "red"

    return (
        <Grid
            container
            direction="column"
            fontFamily="Poppins-reg"
            bgcolor="backgraunds.main"
            borderRadius={1}
            marginBottom={2}
        >
            <Grid container alignItems="start" padding={2} borderBottom="1px solid gray">
                <Grid item xs={8}>
                    <Typography variant="p" color="gray" fontFamily="Oswald" >COUNTER STRIKE</Typography>
                </Grid>
                <Grid item xs={4} display="flex" flexDirection="column" textAlign="end">
                    <Typography variant="p" color="gray" fontSize="1.6 rem" fontFamily="Oswald" > {match.time} AR </Typography>
                    <Typography variant="p" color="gray" fontSize="1.1 rem" fontFamily="Poppins-reg" > {match.date} </Typography>
                </Grid>
            </Grid>
            <Grid container >
                <Grid item xs={8} display="flex" justifyContent="center" alignItems="center" gap={1}>
                    <img src="../src/assets/Logo.png" alt="" width="100%" style={{ maxWidth: "65px" }} />
                    <img src="../src/assets/swords1.png" alt="" width="30px" />
                    <img src={match.logoRival} alt="" width="100%" style={{ maxWidth: "55px" }} />
                </Grid>
                <Grid item xs={4}>
                    <Button
                        variant="contained"
                        fullWidth
                        sx={{
                            borderRadius: "0px",
                            clipPath: "polygon(12% 0,100% 0,100% 100%,0 100%)",
                            padding: "25px",
                            maxWidth: "300px",
                            justifyContent: "center",
                            backgroundColor: bgcolor,
                        }}
                    >
                        {equated ? "EMPATE" : isWinMatch ? "VICTORIA" : "DERROTA"}
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}
