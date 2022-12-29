import { DeleteForever } from "@mui/icons-material"
import { Button, Divider, Grid, Tooltip, Typography } from "@mui/material"

export const LeagueItem = ({ league, esport, id, onDeleteLeague }) => {
    return (
        <>
            <Grid
                container
                padding={1}
                alignItems="center"
                justifyContent="space-between"
                bgcolor="backgraunds.main"
            >
                <Grid item xs={2}>
                    <img src={`/assets/images/esports/${esport}.png`} alt="" width="100%" style={{ maxWidth: "100px" }} />
                </Grid>
                <Grid item xs={8}>
                    <Typography variant="p" color="white"> {(league).toUpperCase()} </Typography>
                </Grid>
                <Grid item xs={1}>
                    <Button
                        onClick={() => onDeleteLeague(id)}
                        variant="text"
                        sx={{ padding: 0, minWidth: "100%" }} >
                        <Tooltip title="Eliminar Liga" arrow>
                            <DeleteForever color="error" />
                        </Tooltip>
                    </Button>
                </Grid>
            </Grid>
            <Divider sx={{ color: "white" }} />
        </>
    )
}
