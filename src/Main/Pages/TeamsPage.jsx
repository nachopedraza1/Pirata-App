import "../../Theme/scss/esportsPage.scss"

import { useState, useEffect } from "react"
import { useSelector } from "react-redux"

import { Grid, Typography } from "@mui/material"
import { MainLayout } from "../Layout/MainLayout"
import { CardsTeam } from "../Components"
import { CardsTeamDetail } from "../Components/CardsTeamDetail"


export const TeamsPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { matches, esports } = useSelector(state => state.mainData);

    const [teamSelected, setTeamSelected] = useState({
        selected: false,
        team: null,
        bannerTeam: null,
        matches: [],
        players: [],
    });

    const onClickTeam = (team, bannerTeam) => {
        const matchesFilter = matches.filter(match => match.game === team);
        const [esport] = esports.filter(esport => esport.game === team);
        setTeamSelected({
            selected: true,
            team,
            bannerTeam,
            matches: matchesFilter,
            players: esport.players,
        });
    }

    return (
        <>
            <MainLayout bgImg="/assets/images/background1.jpg">
                <Grid sx={{
                    textAlign: "center",
                    display: { xs: "none", lg: "block" },
                    position: "absolute",
                    transform: "rotate(-180deg)",
                    writingMode: "vertical-lr",
                    height: "100%",
                    left: "0px",
                }}>
                    <Typography
                        variant="h2"
                        fontFamily="Aldrich"
                        color="white"
                        className="animate__animated animate__fadeInRight"
                    >
                        ESPORTS
                    </Typography>
                </Grid>

                <CardsTeam onClickTeam={onClickTeam} />

            </MainLayout >

            {
                teamSelected.selected && <CardsTeamDetail {...teamSelected} />
            }

        </>
    )
}
