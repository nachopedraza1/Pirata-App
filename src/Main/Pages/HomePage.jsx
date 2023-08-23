import { lazy, useEffect } from "react";
import { useSelector } from "react-redux";

import { MainLayout } from "../Layout/MainLayout";
import { TwitterContainer, NewsContainer, HeaderHome, TabMatches, DiscordContainer, LatestClip, NotesContainer } from "../Components";

import { Grid } from "@mui/material";

const TwitchContainer = lazy(() => import("../Components/TwitchContainer"))

export const HomePage = () => {

    const { clipsTwitch } = useSelector(state => state.mainData);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <HeaderHome />

            <MainLayout bgColor="backgraunds.black">
                <img src="/assets/images/Linea.jpg" alt="" width="100%" style={{ position: "absolute", left: 0 }} />

                <Grid container justifyContent="center" spacing={2} id="home" pt={6}>

                    <Grid item xs={12}>
                        {clipsTwitch && <LatestClip clipsTwitch={clipsTwitch} />}
                    </Grid>

                    <Grid item xs={12} md={8}>
                        <NewsContainer />
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <TwitterContainer />
                        <TabMatches />
                        <DiscordContainer />
                    </Grid>

                    <Grid item xs={12}>
                        <NotesContainer />
                    </Grid>

                    <Grid item xs={12} >
                        <TwitchContainer />
                    </Grid>
                </Grid>

            </MainLayout>
        </>
    )
}
