import { useSelector } from "react-redux"

import { Button, Grid, IconButton, Tooltip, Typography } from "@mui/material"
import { DeleteForever } from "@mui/icons-material";

export const DateItem = ({ match, onDeteleDate }) => {

    const { rivals } = useSelector(state => state.mainData);

    const { logoRival } = rivals.find(logo => logo.teamName === match.rival) || {};

    return (
        <Grid
            fontFamily="Poppins-reg"
            container
            bgcolor="backgraunds.main"
            borderBottom="1px solid gray"
        >
            <Grid container bgcolor="#16171b" justifyContent="space-between">
                <Typography variant="p" ml={2} p={1} color="white" fontSize={12}> {match.date} </Typography>
                <Button
                    variant="text"
                    onClick={() => onDeteleDate(match.id)}
                    sx={{ padding: 0 }} >
                    <Tooltip title="Eliminar Fecha" arrow>
                        <IconButton sx={{ padding: 0 }}>
                            <DeleteForever color="error" />
                        </IconButton>
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
                <Grid item xs={2} display="flex" justifyContent="center">
                    <img src="../src/assets/swords1.png" alt="" width="30px" />
                </Grid>
                <Grid item xs={3} textAlign="center">
                    <img src={logoRival} alt="" width="100%" style={{ maxWidth: "60px" }} />
                </Grid>
                <Grid item xs={1}>
                    <Typography variant="p" color="white" > {match.plataform} </Typography>
                </Grid>
            </Grid>
        </Grid >
    )
}
