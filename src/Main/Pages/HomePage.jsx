import { useEffect } from "react";

import { MainLayout } from "../Layout/MainLayout";
import { Grid } from "@mui/material";
import { TwitterContainer, NewsContainer, BannerHome, TabMatches, TwitchContainer, DiscordContainer } from "../Components";


export const HomePage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <BannerHome />

            <img src="/assets/images/Linea.png" alt="" width="100%" />

            <MainLayout bgColor="backgraunds.black">

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
