import { PersonRemove } from "@mui/icons-material"
import { Button, Grid, Typography } from "@mui/material"

export const PlayerItem = ({ player, onDeletePlayer }) => {
    return (
        <Grid container key={player.id} alignItems="center" p={1}>
            <Grid item xs={11}>
                <Typography color="white" fontFamily="Aldrich" variant="h6" > {player.player} </Typography>
            </Grid>
            <Grid item xs={1}>
                <Button onClick={() => onDeletePlayer(player.id)} style={{backgroundColor: "transparent"}}>
                    <PersonRemove sx={{ color: "red", }} />
                </Button>
            </Grid>
        </Grid>
    )
}
