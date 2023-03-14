import { Button, Grid, Link, Typography } from "@mui/material"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const SocialBanner = ({ type, icon, color, banner, link }) => {
    return (
        <Grid item xs={12} sm={11} md={8} lg={7} data-aos="fade">
            <Link href={link} underline="none" target="_blank">
                <Button
                    fullWidth
                    sx={{
                        backgroundImage: `url("/assets/images/${banner}.jpg")`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        padding: 0
                    }} >

                    <Grid container  justifyContent="start" alignItems="center" height={140} gap={7} paddingLeft={8}>
                        <FontAwesomeIcon color={color} size="3x" icon={icon} />
                        <Typography variant="h5" color="white"> {` ${type}`} </Typography>
                    </Grid>
                </Button>
            </Link>
        </Grid>
    )
}
