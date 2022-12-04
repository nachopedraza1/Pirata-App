import { CircularProgress, Grid } from "@mui/material"

export const LoadingData = ({}) => {
    return (
        <Grid container width="100%" height="500px" justifyContent="center" alignItems="center">
            <CircularProgress />
        </Grid>
    )
}
