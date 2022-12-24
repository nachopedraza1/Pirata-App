import { Box, Grid, Typography } from "@mui/material"
import axios from "axios";
import { useEffect, useState } from "react";

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
        <Grid container justifyContent="end" mt="15px" position="relative">
            <img src="assets/images/Unite-web.png" alt="" width="100%" style={{ position: "absolute" }} />
            <Grid item>
                <Typography variant="h5" fontFamily="Oswald" zIndex={1}> ONLINE: {membersCount} </Typography>
            </Grid>
        </Grid >
    )
}
