import { useEffect } from "react";

import { MainLayout } from "../Layout/MainLayout";
import { Box, Grid, Link } from "@mui/material";
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
                        {/* <Link href="https://republicadealberdi.ar/" target="_blank" rel="noreferrer">
                            <Box sx={{
                                width: "100%",
                                height: "150px",
                                backgroundImage: `url(${"/assets/images/republicadealverdi.jpg"})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                borderRadius: "5px",
                                margin: "15px 0 15px 0px"
                            }}>
                            </Box>
                        </Link> */}
                        {/* <img src="https://discordapp.com/api/guilds/1052227847940489266/widget.png?style=banner2" width="100%" alt="" /> */}
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
