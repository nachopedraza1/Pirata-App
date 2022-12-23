import { TwitchEmbed } from "react-twitch-embed"
import { Box } from "@mui/material"

export const TwitchContainer = () => {
    return (
        <Box>
            <TwitchEmbed
                autoplay={false}
                channel="cabesportsok"
                onAuthenticate={function noRefCheck() { }}
                onVideoPause={function noRefCheck() { }}
                onVideoPlay={function noRefCheck() { }}
                onVideoReady={function noRefCheck() { }}
                width={null}
                withChat={true}
            />
        </Box>
    )
}
