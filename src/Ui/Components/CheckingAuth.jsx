import { CircularProgress, Grid } from '@mui/material';

export const CheckingAuth = () => {

    return (
        <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            sx={{ width: "100%", height: "224px", padding: 1 }}
        >
            < CircularProgress />

        </Grid>
    )
}