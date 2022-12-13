import { DeleteForever } from "@mui/icons-material"
import { Button, Divider, Grid, IconButton, Tooltip, Typography } from "@mui/material"


export const MatchItem = ({ match, onDeteleMatch }) => {

    return (
        <>
            <Grid
                container
                padding={1}
                alignItems="center"
                justifyContent="space-between"
                bgcolor="backgraunds.main"
                borderRadius={1}
            >
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
                    <img src={match.logoRival} alt="" width="100%" style={{ maxWidth: "50px" }} />
                </Grid>
                <Grid item xs={1}>
                    <Button
                        variant="text"
                        onClick={() => onDeteleMatch(match.id)}
                        sx={{ padding: 0, minWidth: "100%" }} >
                        <Tooltip title="Eliminar Partido" arrow>
                            <IconButton sx={{ padding: 0 }}>
                                <DeleteForever color="error" />
                            </IconButton>
                        </Tooltip>
                    </Button>
                </Grid>
            </Grid>
            <Divider sx={{ color: "white" }} />
        </>
    )
}
