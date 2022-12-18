import { DeleteForever } from "@mui/icons-material"
import { Button, Grid, IconButton, Tooltip, Typography } from "@mui/material"


export const MatchItem = ({ match, onDeteleMatch }) => {


    return (
        <Grid
            fontFamily="Poppins-reg"
            container
            bgcolor="backgraunds.main"
            borderBottom="1px solid gray"
        >
            <Grid container bgcolor="#16171b" justifyContent="space-between">
                <Typography variant="p" p={1} color="white" > {match.date} / {match.time} / {match.plataform}  </Typography>
                <Button
                    variant="text"
                    onClick={() => onDeteleMatch(match.id)}
                    sx={{ padding: 0 }} >
                    <Tooltip title="Eliminar Partido" arrow>
                        <DeleteForever color="error" />
                    </Tooltip>
                </Button>
            </Grid>
            <Grid container alignItems="center" justifyContent="space-between" padding={1} position="relative">
                <Grid item xs={1}>
                    <img src={`../src/assets/esports/${match.game}.png`} alt="" width="130%" />
                </Grid>
                <Grid item xs={3} textAlign="center">
                    <img src="../src/assets/Logo.png" alt="" width="100%" style={{ maxWidth: "70px" }} />
                </Grid>
                <Grid item xs={1} textAlign="center">
                    <Typography variant="p" color="green" > {match.puntosLocal} </Typography>
                </Grid>
                <Grid item xs={2} display="flex" justifyContent="center">
                    <img src="../src/assets/swords1.png" alt="" width="30px" />
                </Grid>
                <Grid item xs={1} textAlign="centrer">
                    <Typography variant="p" color="red" > {match.puntosRival} </Typography>
                </Grid>
                <Grid item xs={3} textAlign="center">
                    <img src={match.logoRival} alt="" width="100%" style={{ maxWidth: "60px" }} />
                </Grid>
            </Grid>
        </Grid >
    )
}
