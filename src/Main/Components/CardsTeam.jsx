import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import OwlCarousel from 'react-owl-carousel';
import { Box, Grid, Link } from "@mui/material"


export const CardsTeam = ({ onClickTeam }) => {

    return (
        <Grid container alignItems="center" minHeight="100vh" className="animate__animated animate__fadeInDown">

            < OwlCarousel
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
                                    <img className="responsive-image__image" src="/assets/images/teams/lol-bg-team1.webp" alt="" width="100%" />
                                </Box>

                                <Box className="responsive-image__wrapper back-image">
                                    <img className="responsive-image__image" src="/assets/images/teams/lol-bg-team2.webp" alt="" width="100%" />
                                </Box>

                            </Box>
                            <Box className="logo-wrapper">
                                <img src="/assets/images/esports/LEAGUE OF LEGENDS.png" alt="Logo" className="logo-image" width="250px" />
                            </Box>
                            <Box className="description-wrapper">
                                ¡Aunque quieran imitarnos, somos diferentes!
                            </Box>
                        </Box>
                    </Link>
                </Grid>

                <Grid item onClick={() => onClickTeam("FORMULA1", "f1bgteam")}>
                    <Box className="team-page__team-item">
                        <Link href="#team">
                            <Box className="team-page__image-wrapper">
                                <Box className="responsive-image__wrapper front-image" >
                                    <img className="responsive-image__image" src="/assets/images/teams/f1-bg-team1.webp" alt="" width="100%" />
                                </Box>

                                <Box className="responsive-image__wrapper back-image">
                                    <img className="responsive-image__image" src="/assets/images/teams/f1-bg-team2.webp" alt="" width="100%" />
                                </Box>

                            </Box>
                            <Box className="logo-wrapper">
                                <img src="/assets/images/esports/FORMULA1.png" alt="Logo" className="logo-image" width="250px" />
                            </Box>
                            <Box className="description-wrapper">
                                ¡Es la primera barra, la que viene por el sentimiento!
                            </Box>
                        </Link>
                    </Box>
                </Grid>

                <Grid item onClick={() => onClickTeam("FIFA 23", "fifabgteam")}>
                    <Box className="team-page__team-item">
                        <Link href="#team">
                            <Box className="team-page__image-wrapper">
                                <Box className="responsive-image__wrapper front-image" >
                                    <img className="responsive-image__image" src="/assets/images/teams/fifa-bg-team1.webp" alt="" width="100%" />
                                </Box>

                                <Box className="responsive-image__wrapper back-image">
                                    <img className="responsive-image__image" src="/assets/images/teams/fifa-bg-team2.webp" alt="" width="100%" />
                                </Box>

                            </Box>
                            <Box className="logo-wrapper">
                                <img src="/assets/images/esports/logo-fifa.png" alt="Logo" className="logo-image" width="250px" />
                            </Box>
                            <Box className="description-wrapper">
                                ¡Tengo la ilusión! ¡Quiero ser campeón!
                            </Box>
                        </Link>
                    </Box>
                </Grid>

                <Grid item onClick={() => onClickTeam("COUNTER STRIKE", "csgobgteam")}>
                    <Box className="team-page__team-item">
                        <Link href="#team">
                            <Box className="team-page__image-wrapper">
                                <Box className="responsive-image__wrapper front-image" >
                                    <img className="responsive-image__image" src="/assets/images/teams/csgo-bg-team1.webp" alt="" width="100%" />
                                </Box>

                                <Box className="responsive-image__wrapper back-image">
                                    <img className="responsive-image__image" src="/assets/images/teams/csgo-bg-team2.webp" alt="" width="100%" />
                                </Box>

                            </Box>
                            <Box className="logo-wrapper">
                                <img src="/assets/images/esports/COUNTER STRIKE.png" alt="Logo" className="logo-image" width="240px" />
                            </Box>
                            <Box className="description-wrapper">
                                ¡No importa ni la hora ni el día, porque siempre te sigo!
                            </Box>
                        </Link>
                    </Box>
                </Grid >

                <Grid item onClick={() => onClickTeam("FREEFIRE BATTLEGROUNDS", "freefirebgteam")}>
                    <Box className="team-page__team-item">
                        <Link href="#team">
                            <Box className="team-page__image-wrapper">
                                <Box className="responsive-image__wrapper front-image" >
                                    <img className="responsive-image__image" src="/assets/images/teams/freefire-bg-team1.webp" alt="" width="100%" />
                                </Box>

                                <Box className="responsive-image__wrapper back-image">
                                    <img className="responsive-image__image" src="/assets/images/teams/freefire-bg-team2.webp" alt="" width="100%" />
                                </Box>

                            </Box>
                            <Box className="logo-wrapper">
                                <img src="/assets/images/esports/FREEFIRE BATTLEGROUNDS.png" alt="Logo" className="logo-image" width="250px" />
                            </Box>
                            <Box className="description-wrapper">
                                ¡Esta es la banda de lxs Piratas!
                            </Box>
                        </Link>
                    </Box>
                </Grid>
            </OwlCarousel>
        </Grid >
    )
}
