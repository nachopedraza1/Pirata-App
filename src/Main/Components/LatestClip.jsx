import { useSelector } from "react-redux"
import { Grid, Typography } from "@mui/material"
import { TittleComponent } from "../../Ui/Components";
import { Visibility } from "@mui/icons-material";

export const LatestClip = () => {

    const { clipsTwitch } = useSelector(state => state.mainData);

    const { id, title, view_count } = clipsTwitch;

    return (
        <Grid container>
            <TittleComponent tittle="MIRA EL ULTIMO PROGRAMA AQUI!" component={<Typography variant="h6" fontWeight={600} color="white" textAlign="center"> <Visibility /> {view_count} </Typography>} />
            <iframe
                src={`https://player.twitch.tv/?autoplay=false&parent=belgranoesports.com.ar&video=${id}`}
                height="450"
                width="100%"
                allowfullscreen>
            </iframe>
        </Grid>
    )
}
