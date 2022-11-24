import { FacebookRounded, Instagram, Twitter, YouTube } from '@mui/icons-material'
import { Grid, IconButton } from '@mui/material'

export const SocialButtons = () => {
    return (
        <Grid container gap={1} justifyContent="center" mt={2}>
            <Grid item sx={{ backgroundColor: "#1DA1F2", borderRadius: "50%", "&:hover": { backgroundColor: "#FFFFFF" }, transition: "all 0.3s" }}>
                <IconButton>
                    <Twitter fontSize='medium' sx={{ color: "white", "&:hover": { color: "#1DA1F2", transition: "all 0.3s" } }} />
                </IconButton>
            </Grid>
            <Grid item sx={{ backgroundColor: "#4267B2", borderRadius: "50%", "&:hover": { backgroundColor: "#FF0000" } }}>
                <IconButton>
                    <FacebookRounded fontSize='medium' sx={{ color: "white" }} />
                </IconButton>
            </Grid>
            <Grid item sx={{ backgroundColor: "#FF0000", borderRadius: "50%" }}>
                <IconButton>
                    <YouTube fontSize='medium' sx={{ color: "white" }} />
                </IconButton>
            </Grid>
            <Grid item sx={{ backgroundColor: "#E1306C", borderRadius: "50%" }}>
                <IconButton>
                    <Instagram fontSize='medium' sx={{ color: "white" }} />
                </IconButton>
            </Grid>
        </Grid >
    )
}
