import { useEffect } from "react";
import { Container, Grid, Typography } from "@mui/material"
import { PlayerCard } from "./PlayerCard";

export const CardsTeamDetail = ({ team, bannerTeam, matches, players }) => {

    useEffect(() => {
        document.body.classList.remove("hiddenscroll");
    }, []);

    return (
        <>
            <Grid container bgcolor="backgraunds.black" id="team">
                <img src="/assets/images/linea.png" alt="" width="100%" />
                <img src={`/assets/images/${bannerTeam}.png`} alt="" width="100%" />

                <Container maxWidth="lg" sx={{ minHeight: "100vh" }} >
                    {
                        players.length === 0
                            ? <Typography variant="h3" className="teams__title">PROXIMAMENTE </Typography>
                            : <Typography variant="h3" className="teams__title">PLAYERS <span> {team} </span></Typography>
                    }
                    <div className="memb__team-list">
                        {
                            players.map(player => (<PlayerCard player={player} />))
                        }
                    </div>
                </Container>
            </Grid>
        </>
    )
}