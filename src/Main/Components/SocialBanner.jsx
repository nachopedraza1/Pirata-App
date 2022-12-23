import { Button, Grid, Typography } from "@mui/material"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const SocialBanner = ({ type, icon, color, banner }) => {
    return (
        <Grid item xs={12} sm={11} md={8} lg={7} data-aos="fade">
            <Button
                fullWidth
                sx={{
                    backgroundImage: `url("/assets/images/${banner}.png")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    padding: 0
                }} >

                <Grid container justifyContent="start" alignItems="center" height={140} gap={4} paddingLeft={8}>
                    <FontAwesomeIcon color={color} size="3x" icon={icon} />
                    <Typography variant="h5" fontFamily="Poppins-reg" color="white"> {`Nuestro ${type}`} </Typography>
                </Grid>
            </Button>
        </Grid>
    )
}
