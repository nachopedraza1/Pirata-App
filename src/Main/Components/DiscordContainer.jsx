import { useEffect, useState } from "react";

import axios from "axios";

import { Box, Grid, Typography } from "@mui/material"
import { Glitch } from "../../Ui/Components";

export const DiscordContainer = () => {

    const [membersCount, setMembersCount] = useState(0);

    const getDataDiscord = async () => {
        const { data } = await axios.get("https://discord.com/api/guilds/1052227847940489266/widget.json");
        setMembersCount(data.presence_count);
    }

    useEffect(() => {
        getDataDiscord();
    }, []);

    return (
        <Grid container mt={2} position="relative" >
            <Box display={{ xs: "none", md: "block" }}><img src="assets/images/discord-desktop.png" alt="" width="100%" /></Box>
            <Box display={{ xs: "block", md: "none" }}><img src="assets/images/discord-mobile.png" alt="" width="100%" /></Box>
            <Grid item position="absolute" right={3} bottom={{ xs: 10, md: -5 }} p={2}>
                <Typography variant="h5" fontWeight="bold" color="white">
                    ONLINE: {membersCount}
                </Typography>
            </Grid>
        </Grid >
    )
}
