import { Grid } from "@mui/material"
import { useSelector } from "react-redux"

import { LoadingData } from "./LoadingData";
import { MatchItem } from "./MatchItem";
import { TittleComponent } from "./TittleComponent";


export const MatchContainer = () => {

    const { matches, isLoading } = useSelector(state => state.mainData);

    return (
        <>
            <TittleComponent tittle={"ULTIMOS PARTIDOS"} />
            <Grid container bgcolor="backgraunds.secondary" padding={1} borderRadius={1}>
                {
                    isLoading ? <LoadingData /> : matches.slice(0, 3).map(match => {
                        return <MatchItem match={match} key={match.id} />
                    })
                }
            </Grid>
        </>
    )
}
