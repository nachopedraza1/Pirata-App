import { useEffect } from "react";

import { Box, Container, Grid, Toolbar, Typography } from "@mui/material"
import { MainLayout } from "../Layout/MainLayout"

import "../../Theme/scss/teams.scss";

export const TeamsPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <MainLayout>
            <Toolbar />
            <Container maxWidth="lg">
                <Grid container justifyContent="center">
                    <Grid item xs={12}>
                        <Typography variant="h3" mt={5} fontFamily="Aldrich" color="white">ESPORTS</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} className="animate__animated animate__fadeInDown" >
                        <Box textAlign="center" className="team-selection-item team-selection-item--style-1">
                            <a className="team-selection-item__thumbnail " href="">
                                <Box className="team-selection-item__thumbnail-inner">
                                    <img src="../src/assets/thumbnail.jpg" alt="" />
                                </Box>
                                <img className="team-selection-item__logo team-selection-item__logo--middle" src="../src/assets/esports/lol.png" alt="" />
                            </a>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} className="animate__animated animate__fadeInDown">
                        <Box textAlign="center" className="team-selection-item team-selection-item--style-1">
                            <a className="team-selection-item__thumbnail " href="">
                                <Box className="team-selection-item__thumbnail-inner">
                                    <img src="../src/assets/thumbnail.jpg" alt="" />
                                </Box>
                                <img className="team-selection-item__logo team-selection-item__logo--middle" src="../src/assets/esports/fifa.png" alt="" />
                            </a>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} className="animate__animated animate__fadeInDown">
                        <Box textAlign="center" className="team-selection-item team-selection-item--style-1">
                            <a className="team-selection-item__thumbnail " href="">
                                <Box className="team-selection-item__thumbnail-inner">
                                    <img src="../src/assets/thumbnail.jpg" alt="" />
                                </Box>
                                <img className="team-selection-item__logo team-selection-item__logo--middle" src="../src/assets/esports/freefire.png" alt="" />
                            </a>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} className="animate__animated animate__fadeInDown">
                        <Box textAlign="center" className="team-selection-item team-selection-item--style-1">
                            <a className="team-selection-item__thumbnail " href="">
                                <Box className="team-selection-item__thumbnail-inner">
                                    <img src="../src/assets/thumbnail.jpg" alt="" />
                                </Box>
                                <img className="team-selection-item__logo team-selection-item__logo--middle" src="../src/assets/esports/formula1.png" alt="" />
                            </a>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </MainLayout>
    )
}
