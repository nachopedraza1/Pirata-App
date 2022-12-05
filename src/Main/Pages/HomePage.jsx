import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Box, Container, Grid } from "@mui/material";
import { onLoadMatches, onLoadPosts } from "../../Redux/Thunks";
import { Slider, TittleComponent, TwitterContainer, NewsContainer } from "../Components";

export const HomePage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(onLoadPosts())
    }, [])

    return (
        <Box sx={{ backgroundColor: "#16171b" }}>
            <Slider />
            <Container maxWidth="lg" disableGutters>
                <Grid container justifyContent="center" spacing={2}>
                    <Grid item xs={11} md={8}>
                        <TittleComponent tittle={"ULTIMAS NOTICIAS"} />
                        <NewsContainer />
                    </Grid>
                    <Grid item xs={11} md={4}>
                        <TittleComponent tittle={"TWEETS"} />
                        <TwitterContainer />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
