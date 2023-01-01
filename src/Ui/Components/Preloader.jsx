import "../../Theme/scss/preloader.scss"
import { useState, useEffect } from 'react';
import { Grid } from "@mui/material";


export const Preloader = () => {

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(true);
        }, 1500);
    }, [])

    const loadState = isLoading ? "loading-div active" : "loading-div show";

    return (
        <Grid
            className={`loading-div ${loadState}`}
            id="loading-div"
            justifyContent="center"
            alignItems="center"
        >
            <Grid item xs={3}>
                <img src="/assets/images/preloadergift.gif" alt="" width="50%" />
            </Grid>
        </Grid>
    )
}