import { faTwitch } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Grid, Typography } from "@mui/material"

export const MatchItem = ({ match }) => {

    const isWinMatch = match.puntosLocal > match.puntosRival
    const equated = match.puntosLocal === match.puntosRival

    const bgcolor = equated ? "orange" : isWinMatch ? "green" : "red"

    return (
        <Grid
            className="animate__animated animate__fadeIn"
            container
            direction="column"
            fontFamily="Poppins-reg"
            bgcolor="backgraunds.main"
            margin="5px"
        >
            <Grid container alignItems="start" padding={2} borderBottom={`1px solid ${bgcolor}`}>
                <Grid item xs={8} display="flex" flexDirection="column">
                    <Typography variant="p" color="white" fontFamily="Oswald" > {match.game} </Typography>
                    <Typography variant="p" color="gray" fontFamily="Poppins-reg" > VPA league 2022</Typography>
                </Grid>
                <Grid item xs={4} display="flex" flexDirection="column" textAlign="end">
                    <Typography variant="p" color="white" fontSize="1.6 rem" fontFamily="Oswald" > {match.time} AR </Typography>
                    <Typography variant="p" color="gray" fontSize="1.1 rem" fontFamily="Poppins-reg" > {match.date} </Typography>
                </Grid>
            </Grid>
            <Grid container >
                <Grid item xs={8} display="flex" justifyContent="space-around" alignItems="center">
                    <img src="../src/assets/Logo.png" alt="" width="100%" style={{ maxWidth: "65px" }} />
                    <Typography color={bgcolor}> {match.puntosLocal} </Typography>
                    <Typography color={bgcolor}> : </Typography>
                    <Typography color={bgcolor}> {match.puntosRival} </Typography>
                    <img src={match.logoRival} alt="" width="100%" style={{ maxWidth: "55px" }} />
                </Grid>
                <Grid item xs={4}>
                    <Button
                        endIcon={<FontAwesomeIcon icon={faTwitch} />}
                        disabled
                        variant="contained"
                        fullWidth
                        sx={{
                            borderRadius: "0px",
                            clipPath: "polygon(12% 0,100% 0,100% 100%,0 100%)",
                            padding: "25px",
                            maxWidth: "300px",
                            justifyContent: "center",
                        }}
                    >
                        WATCH
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}
