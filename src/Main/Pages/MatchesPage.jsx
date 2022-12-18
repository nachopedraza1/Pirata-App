import "../../Theme/scss/teams.scss";
import { useEffect } from "react";

import { Box, Grid } from "@mui/material"
import { MainLayout } from "../Layout/MainLayout"


export const MatchesPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <MainLayout bgImg="../src/assets/background1.png">
            <Grid container pt={12}>
                <Grid container >
                    <Grid item xs={12} sm={6} md={3} className="animate__animated animate__fadeInDown">
                        <Box textAlign="center" className="team-selection-item team-selection-item--style-1">
                            <a className="team-selection-item__thumbnail " href="">
                                <Box className="team-selection-item__thumbnail-inner">
                                    <img src="../src/assets/thumbnail.jpg" alt="" />
                                </Box>
                                <img className="team-selection-item__logo team-selection-item__logo--middle" src="../src/assets/esports/LEAGUE OF LEGENDS.png" alt="" />
                            </a>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} className="animate__animated animate__fadeInDown">
                        <Box textAlign="center" className="team-selection-item team-selection-item--style-1">
                            <a className="team-selection-item__thumbnail " href="">
                                <Box className="team-selection-item__thumbnail-inner">
                                    <img src="../src/assets/thumbnail.jpg" alt="" />
                                </Box>
                                <img className="team-selection-item__logo team-selection-item__logo--middle" src="../src/assets/esports/FIFA 23.png" alt="" />
                            </a>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} className="animate__animated animate__fadeInDown">
                        <Box textAlign="center" className="team-selection-item team-selection-item--style-1">
                            <a className="team-selection-item__thumbnail " href="">
                                <Box className="team-selection-item__thumbnail-inner">
                                    <img src="../src/assets/thumbnail.jpg" alt="" />
                                </Box>
                                <img className="team-selection-item__logo team-selection-item__logo--middle" src="../src/assets/esports/FREEFIRE BATTLEGROUNDS.png" alt="" />
                            </a>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} className="animate__animated animate__fadeInDown">
                        <Box textAlign="center" className="team-selection-item team-selection-item--style-1">
                            <a className="team-selection-item__thumbnail " href="">
                                <Box className="team-selection-item__thumbnail-inner">
                                    <img src="../src/assets/thumbnail.jpg" alt="" />
                                </Box>
                                <img className="team-selection-item__logo team-selection-item__logo--middle" src="../src/assets/esports/FORMULA 1.png" alt="" />
                            </a>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </MainLayout >
    )
}
