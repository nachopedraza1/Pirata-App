import { useState, useEffect } from "react"
import { useSelector } from "react-redux"

import { Grid, Typography } from "@mui/material"
import { MainLayout } from "../Layout/MainLayout"
import { CardsTeam } from "../Components"
import { CardsTeamDetail } from "../Components/CardsTeamDetail"

export const TeamsPage = () => {

    const { matches } = useSelector(state => state.mainData);

    const [teamSelected, setTeamSelected] = useState({
        selected: false,
        matches: [],
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const onClickTeam = (team) => {
        const matchesFilter = matches.filter(match => match.game === team);
        setTeamSelected({
            selected: true,
            matches: matchesFilter,
        });
    }

    return (
        <>
            <MainLayout bgImg="../src/assets/background1.png">
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
                teamSelected.selected && <CardsTeamDetail />
            }

        </>
    )
}
