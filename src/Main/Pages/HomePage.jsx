import { useEffect } from "react";

import { MainLayout } from "../Layout/MainLayout";
import { Box, Container, Grid, Link, } from "@mui/material";
import { TittleComponent, TwitterContainer, NewsContainer, MatchContainer, BannerHome, Slider } from "../Components";
import { useDispatch, useSelector } from "react-redux";
import { onLoadMatches, onLoadPosts, onLoadUpcomingMatches } from "../../Redux/Thunks";


export const HomePage = () => {

    const dispatch = useDispatch();

   

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <MainLayout>

            <Slider desktopIMG="bannerHome.png" mobileIMG="bannerHomeMobile.png" />

            <Container maxWidth="lg" >

                <BannerHome />

                <Grid container justifyContent="center" spacing={2}>
                    <Grid item xs={12} md={8}>
                        <TittleComponent tittle={"ULTIMAS NOTICIAS"} />
                        <NewsContainer />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TittleComponent tittle={"TWEETS"} />
                        <TwitterContainer />
                        <TittleComponent tittle={"ULTIMOS PARTIDOS"} />
                        <MatchContainer />
                        <Link href="https://republicadealberdi.ar/" target="_blank" rel="noreferrer">
                            <Box sx={{
                                width: "100%",
                                height: "150px",
                                backgroundImage: `url(${"../src/assets/republicadealverdi.jpg"})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                border: "1px solid white",
                                margin: "15px 0 15px 0px"
                            }}>
                            </Box>
                        </Link>
                    </Grid>
                </Grid>
            </Container >
        </MainLayout>
    )
}
