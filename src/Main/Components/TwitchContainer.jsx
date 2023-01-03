import { Box, Grid } from "@mui/material"
import { TittleComponent } from "../../Ui/Components"

export const TwitchContainer = () => {
    return (
        <Grid container spacing={2}>

            <Grid item xs={12} md={8}>
                <TittleComponent tittle="STREAM" />
                <iframe src="https://player.twitch.tv/?channel=cabesportsok&parent=belgranoesports.com.ar"
                    allowFullScreen={true}
                    autoPlay={false}
                    height="450" width="100%">
                </iframe>
            </Grid>

            <Grid item xs={12} md={4}>
                <TittleComponent tittle="CHAT EN VIVO" />
                <iframe
                    id="chat_embed"
                    autoPlay={false}
                    src="https://www.twitch.tv/embed/cabesportsok/chat?darkpopout&parent=belgranoesports.com.ar"
                    height="450" width="100%">
                </iframe>
            </Grid>

        </Grid>
    )
}
