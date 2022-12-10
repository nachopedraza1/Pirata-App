import { DeleteForever } from "@mui/icons-material"
import { Button, Divider, Grid, Typography } from "@mui/material"

export const RivalItem = ({ rival, onDeteleRival }) => {

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
                    <img src={rival.logoRival} width="60px" alt="" />
                </Grid>
                <Grid item xs={8}>
                    <Typography variant="h6" color="white"> {(rival.teamName).toUpperCase()} </Typography>
                </Grid>
                <Grid item xs={1}>
                    <Button
                        onClick={() => onDeteleRival(rival.id)}
                        variant="text"
                        sx={{ padding: 0, minWidth: "100%" }} >
                        <DeleteForever color="error" />
                    </Button>
                </Grid>
            </Grid>
            <Divider sx={{ color: "white" }} />
        </>
    )
}
