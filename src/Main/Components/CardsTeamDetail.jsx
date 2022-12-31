import { useEffect } from "react";
import { PlayerCard } from "./PlayerCard";
import { Box, Container, Grid, Link, Toolbar, Typography } from "@mui/material"

export const CardsTeamDetail = ({ team, bannerTeam, matches, players }) => {

    useEffect(() => {
        document.body.classList.remove("hiddenscroll");
    }, []);

    return (
        <>
            <Grid container bgcolor="backgraunds.black" id="team">
                <Grid item height={{ xs: "auto", md: "100vh" }} position="relative">
                    <img src="/assets/images/Linea.png" alt="" width="100%" />
                    <img src={`/assets/images/${bannerTeam}.png`} alt="" width="100%" />

                    <Box position="absolute" top="85vh" width="100%" textAlign="center" display={{ xs: "none", md: "block" }}>
                        <Box display="flex" justifyContent="center">
                            <Link href="#players" >
                                <img src="/assets/images/arrow.png" alt="" width="100%" className="animate__animated animate__fadeInUp" />
                            </Link>
                        </Box>
                    </Box>
                </Grid>

                <Container maxWidth="lg" sx={{ minHeight: "100vh" }} id="players" >
                    <Toolbar />
                    {
                        players.length === 0
                            ? <Typography variant="h4" className="teams__title" fontFamily="Oswald" >PROXIMAMENTE</Typography>
                            : <Typography variant="h4" className="teams__title" fontFamily="Oswald" >PLAYERS <span> {team} </span></Typography>
                    }
                    <Box className="memb__team-list" overflow="hidden">
                        {
                            players.map(player => (<PlayerCard key={player.id} player={player} />))
                        }
                    </Box>
                </Container>
            </Grid>
        </>
    )
}