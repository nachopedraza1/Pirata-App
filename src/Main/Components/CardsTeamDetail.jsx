import { useEffect } from "react";
import { Grid } from "@mui/material"

export const CardsTeamDetail = () => {

    useEffect(() => {
        document.body.classList.remove("hiddenscroll");
    }, []);

    return (
        <Grid container bgcolor="backgraunds.black" id="teamlol">
            <img src="../src/assets/linea.png" alt="" width="100%" />
            <img src="../src/assets/lolbgteams.png" alt="" width="100%" />

            <Grid container height="700px">

            </Grid>
        </Grid>
    )
}
