import { Grid } from "@mui/material"
import { TittleComponent } from "../../Ui/Components"

const TwitchContainer = () => {

    return (
        <Grid container spacing={2}>

            <Grid item xs={12} md={8}>
                <TittleComponent tittle="STREAM" />
                <iframe src="https://player.twitch.tv/?channel=Belgrano_oficial&parent=belgranoesports.com.ar"
                    allowFullScreen={true}
                    autoPlay={true}
                    height="450" width="100%">
                </iframe>
            </Grid>

            <Grid item xs={12} md={4}>
                <TittleComponent tittle="CHAT EN VIVO" />
                <iframe
                    id="chat_embed"
                    autoPlay={true}
                    src="https://www.twitch.tv/embed/Belgrano_oficial/chat?darkpopout&parent=belgranoesports.com.ar"
                    height="450" width="100%">
                </iframe>
            </Grid>

        </Grid>
    )
}

export default TwitchContainer;
