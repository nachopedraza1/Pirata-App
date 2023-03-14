import { lazy, useEffect } from "react";

import { MainLayout } from "../Layout/MainLayout";
import { Grid } from "@mui/material";
import { TwitterContainer, NewsContainer, HeaderHome, TabMatches, DiscordContainer } from "../Components";

const TwitchContainer = lazy(() => import("../Components/TwitchContainer"))


export const HomePage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <HeaderHome />

            <MainLayout bgColor="backgraunds.black">
                <img src="/assets/images/Linea.jpg" alt="" width="100%" style={{ position: "absolute", left: 0 }} />

                <Grid container justifyContent="center" spacing={2} id="home" pt={6}>

                    <Grid item xs={12} md={8}>
                        <NewsContainer />
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <TwitterContainer />
                        <TabMatches />
                        <DiscordContainer />
                    </Grid>

                    <Grid item xs={12} >
                        <TwitchContainer />
                    </Grid>
                </Grid>

            </MainLayout>
        </>
    )
}
