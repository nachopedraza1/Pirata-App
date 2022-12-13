import { Grid } from "@mui/material";
import { useSelector } from "react-redux";

import { LoadingData } from "./LoadingData";
import { TittleComponent } from "./TittleComponent"
import { UpcomingMatchesItem } from "./UpcomingMatchesItem";

export const UpcomingMatchesContainer = () => {

    const { isLoading, upcomingMatches } = useSelector(state => state.mainData);

    return (
        <>
            <TittleComponent tittle="PROXIMOS PARTIDOS" />
            <Grid container>
                {
                    isLoading ? <LoadingData /> : upcomingMatches.slice(0, 6).map(match => {
                        return <UpcomingMatchesItem match={match} key={match.id} />
                    })
                }
            </Grid>
        </>
    )
}
