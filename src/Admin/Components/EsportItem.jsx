import { DeleteForever } from "@mui/icons-material"
import { Button, Divider, Grid, IconButton, Tooltip, Typography } from "@mui/material"

export const EsportItem = ({ esport, onDeteleEsport }) => {
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
                <Grid item xs={2}>
                    <img src={`../src/assets/esports/${esport.game}.png`} width="50px" alt="" />
                </Grid>
                <Grid item xs={8}>
                    <Typography variant="h6" color="white"> {(esport.game).toUpperCase()} </Typography>
                </Grid>
                <Grid item xs={1}>
                    <Button
                        onClick={() => onDeteleEsport(esport.id)}
                        variant="text"
                        sx={{ padding: 0, minWidth: "100%" }} >
                        <Tooltip title="Eliminar Juego" arrow>
                            <DeleteForever color="error" />
                        </Tooltip>
                    </Button>
                </Grid>
            </Grid>
            <Divider sx={{ color: "white" }} />
        </>
    )
}
