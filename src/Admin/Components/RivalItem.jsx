import { DeleteForever } from "@mui/icons-material"
import { Button, Divider, Grid, Tooltip, Typography } from "@mui/material"

export const RivalItem = ({ rival, onDeteleRival }) => {

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
                    <img src={rival.logoRival} width="50px" alt="" />
                </Grid>
                <Grid item xs={8}>
                    <Typography variant="p" color="white"> {(rival.teamName).toUpperCase()} </Typography>
                </Grid>
                <Grid item xs={1}>
                    <Button
                        onClick={() => onDeteleRival(rival.id)}
                        variant="text"
                        sx={{ padding: 0, minWidth: "100%" }} >
                        <Tooltip title="Eliminar Rival" arrow>
                            <DeleteForever color="error" />
                        </Tooltip>
                    </Button>
                </Grid>
            </Grid>
            <Divider sx={{ color: "white" }} />
        </>
    )
}
