import { useEffect } from "react";
import { PlayerCard } from "./PlayerCard";
import { Box, Container, Grid, Typography } from "@mui/material"

export const CardsTeamDetail = ({ team, bannerTeam, matches, players }) => {

    useEffect(() => {
        document.body.classList.remove("hiddenscroll");
    }, []);

    return (
        <>
            <Grid container bgcolor="backgraunds.black" id="team">
                <img src="/assets/images/Linea.png" alt="" width="100%" />
                <img src={`/assets/images/${bannerTeam}.png`} alt="" width="100%" />

                <Container maxWidth="lg" sx={{ minHeight: "100vh" }} >
                    {
                        players.length === 0
                            ? <Typography variant="h4" className="teams__title" fontFamily="Oswald" >PROXIMAMENTE</Typography>
                            : <Typography variant="h3" className="teams__title" fontFamily="Oswald" >PLAYERS <span> {team} </span></Typography>
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