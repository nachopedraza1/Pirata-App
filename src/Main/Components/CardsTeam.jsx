import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { useEffect } from "react";
import OwlCarousel from 'react-owl-carousel';
import { Box, Button, Grid, Link } from "@mui/material"


export const CardsTeam = ({ onClickTeam }) => {

    useEffect(() => {
        document.body.classList.add("hiddenscroll");
        return () => document.body.classList.remove("hiddenscroll");
    }, []);


    return (
        <Grid container alignItems="center" minHeight="100vh" className="animate__animated animate__fadeInDown">

            < OwlCarousel
                className='animate__animated animate__fadeInDown'
                items="4"
                responsive={{
                    0: {
                        items: 1,
                    },
                    600: {
                        items: 2,
                    },
                    900: {
                        items: 3
                    },
                    1100: {
                        items: 4
                    }
                }}
                autoplay
                loop={false}
                margin={30}
                dots={false}
                width="100%"
                rewind={true}
            >
                <Grid item onClick={() => onClickTeam("LEAGUE OF LEGENDS", "lolbgteam")}>
                    <Link href="#team">
                        <Box className="team-page__team-item" position="relative">
                            <Box className="team-page__image-wrapper">
                                <Box className="responsive-image__wrapper front-image" >
                                    <img className="responsive-image__image" src="/assets/images/teams-lol-bg.webp" alt="" width="100%" />
                                </Box>

                                <Box className="responsive-image__wrapper back-image">
                                    <img className="responsive-image__image" src="/assets/images/teams-lol-bg2.webp" alt="" width="100%" />
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

                <Grid item onClick={() => onClickTeam("COUNTER-STRIKE", "csgobgteam")}>
                    <Box className="team-page__team-item">
                        <Link href="#team">
                            <Box className="team-page__image-wrapper">
                                <Box className="responsive-image__wrapper front-image" >
                                    <img className="responsive-image__image" src="/assets/images/teams-csgo-bg.webp" alt="" width="100%" />
                                </Box>

                                <Box className="responsive-image__wrapper back-image">
                                    <img className="responsive-image__image" src="/assets/images/teams-csgo-bg2.webp" alt="" width="100%" />
                                </Box>

                            </Box>
                            <Box className="logo-wrapper">
                                <img src="/assets/images/esports/counter-strike.png" alt="Logo" className="logo-image" width="240px" />
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

                <Grid item onClick={() => onClickTeam("FREEFIRE BATTLEGROUNDS", "freefirebgteam")}>
                    <Box className="team-page__team-item">
                        <Link href="#team">
                            <Box className="team-page__image-wrapper">
                                <Box className="responsive-image__wrapper front-image" >
                                    <img className="responsive-image__image" src="/assets/images/teams-freefire-bg.png" alt="" width="100%" />
                                </Box>

                                <Box className="responsive-image__wrapper back-image">
                                    <img className="responsive-image__image" src="/assets/images/teams-freefire-bg2.png" alt="" width="100%" />
                                </Box>

                            </Box>
                            <Box className="logo-wrapper">
                                <img src="/assets/images/esports/logo-freefire.png" alt="Logo" className="logo-image" width="250px" />
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

                <Grid item onClick={() => onClickTeam("FIFA 23", "fifabgteam")}>
                    <Box className="team-page__team-item">
                        <Link href="#team">
                            <Box className="team-page__image-wrapper">
                                <Box className="responsive-image__wrapper front-image" >
                                    <img className="responsive-image__image" src="/assets/images/teams-fifa-bg.png" alt="" width="100%" />
                                </Box>

                                <Box className="responsive-image__wrapper back-image">
                                    <img className="responsive-image__image" src="/assets/images/teams-fifa-bg2.png" alt="" width="100%" />
                                </Box>

                            </Box>
                            <Box className="logo-wrapper">
                                <img src="/assets/images/esports/logo-fifa.png" alt="Logo" className="logo-image" width="250px" />
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

                <Grid item onClick={() => onClickTeam("FORMULA 1", "f1bgteam")}>
                    <Box className="team-page__team-item">
                        <Link href="#team">
                            <Box className="team-page__image-wrapper">
                                <Box className="responsive-image__wrapper front-image" >
                                    <img className="responsive-image__image" src="/assets/images/teams-f1-bg.png" alt="" width="100%" />
                                </Box>

                                <Box className="responsive-image__wrapper back-image">
                                    <img className="responsive-image__image" src="/assets/images/teams-f1-bg2.png" alt="" width="100%" />
                                </Box>

                            </Box>
                            <Box className="logo-wrapper">
                                <img src="/assets/images/esports/formula 1.png" alt="Logo" className="logo-image" width="250px" />
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
            </OwlCarousel>


        </Grid >
    )
}
