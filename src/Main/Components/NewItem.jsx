import { useState } from "react"

import { Add, Close, Instagram, } from "@mui/icons-material"
import { Box, Button, Card, CardContent, CardMedia, Divider, Fab, Grid, Link, Modal, Typography } from "@mui/material"

export const NewItem = ({ post }) => {

    const [openModal, setOpenModal] = useState(false);

    const styleModal = {
        width: "100%",
        maxWidth: "550px",
        height: "auto",
        backgroundColor: "backgraunds.main",
    }

    return (
        <>
            <Grid item xs={12} sm={6}>
                <Card sx={{ backgroundColor: "backgraunds.secondary", borderRadius: "0px" }}>
                    <Box overflow="hidden">
                        <CardMedia
                            component="img"
                            height="350"
                            crossOrigin="anonymous"
                            image={post.media_url}
                            alt="Belgrano"
                            sx={{
                                transition: "all 0.3s",
                                "&:hover": {
                                    transform: "scale(1.1)",
                                }
                            }}
                        />
                    </Box>
                    <CardContent sx={{ height: "110px", position: "relative", pt: "30px" }}  >

                        <Box position="absolute" top={-28} right={30}>
                            <Fab color="primary" aria-label="add" onClick={() => setOpenModal(true)}>
                                <Add />
                            </Fab>
                        </Box>

                        <Typography
                            variant="body2"
                            color="gray"
                            fontWeight="bold"
                            sx={{
                                overflow: "hidden",
                                display: "-webkit-box",
                                WebkitLineClamp: 4,
                                WebkitBoxOrient: "vertical",
                            }}
                        >
                            {post.caption}
                        </Typography>
                    </CardContent>
                    <Divider sx={{ mt: 2 }} />
                    <Link href="https://www.instagram.com/belgrano_esports/" underline="none" target="_blank">
                        <Box display="flex" alignItems="center" p={1} ml={1} >
                            <img src="assets/images/profile_instagram_logo.jpg" alt="instagram-belgrano" width="40px" style={{ borderRadius: "50%" }} />
                            <Typography color="gray" ml={1}>@{post.username} </Typography>
                        </Box>
                    </Link>
                </Card>
            </Grid>


            <Modal
                sx={{ m: 2, overflowY: "scroll", display: "flex", justifyContent: "center", alignItems: { xs: "start", xl: "center" } }}
                className="animate__animated animate__fadeIn CustomScrollBar"
                open={openModal}
                onClose={() => setOpenModal(false)}
            >
                <Grid container sx={styleModal} >
                    <img src={post.media_url} alt="" width="100%" />
                </Grid>
            </Modal>
        </>
    )
}
