import { CircularProgress, Grid } from "@mui/material"

export const LoadingData = ({}) => {
    return (
        <Grid container width="100%" height="520px" justifyContent="center" alignItems="center">
            <CircularProgress />
        </Grid>
    )
}
