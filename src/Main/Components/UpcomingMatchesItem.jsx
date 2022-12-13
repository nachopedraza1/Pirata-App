import { useSelector } from "react-redux"

import { Grid, Typography } from "@mui/material"

export const UpcomingMatchesItem = ({ match }) => {

    const { rivals } = useSelector(state => state.mainData);

    const { logoRival } = rivals.find(rival => rival.teamName === match.rival) || {}

    return (
        <Grid
            fontFamily="Poppins-reg"
            container
            bgcolor="backgraunds.main"
            borderBottom="1px solid gray"
        >
            <Grid container bgcolor="#16171b" justifyContent="center">
                <Typography variant="p" color="gray" fontSize={12} > {match.date} </Typography>
            </Grid>
            <Grid container alignItems="center" justifyContent="space-between" padding={1}>
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
            </Grid>
        </Grid>
    )
}
