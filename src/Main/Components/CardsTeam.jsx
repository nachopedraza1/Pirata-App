import "../../Theme/scss/matches.scss"

import { useEffect } from "react";

import { Box, Button, Grid, Link } from "@mui/material"

export const CardsTeam = ({ onClickTeam }) => {

    useEffect(() => {
        if (screen.width > 900) {
            document.body.classList.add("hiddenscroll");
        }
        return () => document.body.classList.remove("hiddenscroll");
    }, []);

    return (
        <Grid container spacing={2} alignItems="center" minHeight="100vh" className="animate__animated animate__fadeInDown">

            <Grid item xs={12} sm={6} md={3} onClick={() => onClickTeam("LEAGUE OF LEGENDS")}>
                <Link href="#teamlol">
                    <Box className="team-page__team-item" position="relative">
                        <Box className="team-page__image-wrapper">
                            <Box className="responsive-image__wrapper front-image" >
                                <img className="responsive-image__image lazyautosizes" src="../src/assets/teams-lol-bg.webp" alt="" width="100%" />
                            </Box>

                            <Box className="responsive-image__wrapper back-image">
                                <img className="responsive-image__image lazyautosizes  " src="../src/assets/teams-lol-bg2.webp" alt="" width="100%" />
                            </Box>

                        </Box>
                        <Box className="logo-wrapper">
                            <img src="//cdn.shopify.com/s/files/1/0548/8554/8183/files/360-lol-logo-1-1_x180.png?v=1623163955" alt="Logo" className="logo-image" width="250px" />
                        </Box>
                        <Box className="description-wrapper">
                            Broken Blade, Jankos, Caps, Flakked, Targamas
                        </Box>
                        <Box >
                            <Button
                                className="join-now-button"
                                variant="outlined"
                            >
                                unete ahora!
                            </Button>
                        </Box>
                    </Box>
                </Link>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
                <Box className="team-page__team-item">
                    <Link>
                        <Box className="team-page__image-wrapper">
                            <Box className="responsive-image__wrapper front-image" >
                                <img className="responsive-image__image lazyautosizes" src="../src/assets/teams-csgo-bg.webp" alt="" width="100%" />
                            </Box>

                            <Box className="responsive-image__wrapper back-image">
                                <img className="responsive-image__image lazyautosizes  " src="../src/assets/teams-csgo-bg2.webp" alt="" width="100%" />
                            </Box>

                        </Box>
                        <Box className="logo-wrapper">
                            <img src="../src/assets/esports/counter-strike.png" alt="Logo" className="logo-image" width="240px" />
                        </Box>
                        <Box className="description-wrapper">
                            Broken Blade, Jankos, Caps, Flakked, Targamas
                        </Box>
                        <Box >
                            <Button
                                className="join-now-button"
                                variant="outlined"
                            >
                                unete ahora!
                            </Button>
                        </Box>
                    </Link>
                </Box>
            </Grid >

            <Grid item xs={12} sm={6} md={3}>
                <Box className="team-page__team-item">
                    <Link>
                        <Box className="team-page__image-wrapper">
                            <Box className="responsive-image__wrapper front-image" >
                                <img className="responsive-image__image lazyautosizes" src="../src/assets/teams-freefire-bg.png" alt="" width="100%" />
                            </Box>

                            <Box className="responsive-image__wrapper back-image">
                                <img className="responsive-image__image lazyautosizes  " src="../src/assets/teams-freefire-bg2.png" alt="" width="100%" />
                            </Box>

                        </Box>
                        <Box className="logo-wrapper">
                            <img src="../src/assets/esports/logo-freefire.png" alt="Logo" className="logo-image" width="250px" />
                        </Box>
                        <Box className="description-wrapper">
                            Broken Blade, Jankos, Caps, Flakked, Targamas
                        </Box>
                        <Box >
                            <Button
                                className="join-now-button"
                                variant="outlined"
                            >
                                unete ahora!
                            </Button>
                        </Box>
                    </Link>
                </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
                <Box className="team-page__team-item">
                    <Link>
                        <Box className="team-page__image-wrapper">
                            <Box className="responsive-image__wrapper front-image" >
                                <img className="responsive-image__image lazyautosizes" src="../src/assets/teams-fifa-bg.png" alt="" width="100%" />
                            </Box>

                            <Box className="responsive-image__wrapper back-image">
                                <img className="responsive-image__image lazyautosizes  " src="../src/assets/teams-fifa-bg2.png" alt="" width="100%" />
                            </Box>

                        </Box>
                        <Box className="logo-wrapper">
                            <img src="../src/assets/esports/logo-fifa.png" alt="Logo" className="logo-image" width="250px" />
                        </Box>
                        <Box className="description-wrapper">
                            Broken Blade, Jankos, Caps, Flakked, Targamas
                        </Box>
                        <Box >
                            <Button
                                className="join-now-button"
                                variant="outlined"
                            >
                                unete ahora!
                            </Button>
                        </Box>
                    </Link>
                </Box>
            </Grid>
        </Grid >
    )
}
