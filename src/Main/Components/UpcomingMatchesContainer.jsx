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
            <Grid container bgcolor="backgraunds.secondary" padding={1} borderRadius={1}>
                {
                    isLoading ? <LoadingData /> : upcomingMatches.slice(0, 3).map(match => {
                        return <UpcomingMatchesItem match={match} key={match.id} />
                    })
                }
            </Grid>
        </>
    )
}
