import { useEffect } from "react";
import { MainLayout } from "../Layout/MainLayout";
import { Box, Grid, Link, } from "@mui/material";
import { TittleComponent, TwitterContainer, NewsContainer, BannerHome, TabMatches } from "../Components";

export const HomePage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <BannerHome />

            <img src="../src/assets/Linea.png" alt="" width="100%" />

            <MainLayout bgColor="backgraunds.black">

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

            </MainLayout>
        </>
    )
}
