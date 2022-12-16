import { useEffect } from "react";
import { MainLayout } from "../Layout/MainLayout";
import { Box, Container, Grid, Link, } from "@mui/material";
import { TittleComponent, TwitterContainer, NewsContainer, BannerHome, TabMatches } from "../Components";

export const HomePage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <MainLayout bgImg="../src/assets/background1.png">
            <Container maxWidth="lg" >
                <BannerHome />

                <Grid container justifyContent="center" spacing={2} id="home" pt={6}>

                    <Grid item xs={12} md={8}>
                        <TittleComponent tittle={"ULTIMAS NOTICIAS"} />
                        <NewsContainer />
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <TwitterContainer />
                        <TabMatches />
                        <Link href="https://republicadealberdi.ar/" target="_blank" rel="noreferrer">
                            <Box sx={{
                                width: "100%",
                                height: "150px",
                                backgroundImage: `url(${"../src/assets/republicadealverdi.jpg"})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                borderRadius: "5px",
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
