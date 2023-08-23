import OwlCarousel from 'react-owl-carousel';
import { useSelector } from "react-redux";

import { TittleComponent } from "../../Ui/Components";

import { Box, Card, CardContent, CardMedia, Divider, Fab, Typography } from "@mui/material";
import { InsertLink, } from "@mui/icons-material";

export const NotesContainer = () => {

    const { notes } = useSelector(state => state.mainData);

    return (
        <>
            <TittleComponent tittle="PRENSA" />
            < OwlCarousel
                responsive={{
                    0: {
                        items: 1,
                    },
                    600: {
                        items: 2,
                    },
                    900: {
                        items: 3
                    },
                    1100: {
                        items: 4
                    }
                }}
                autoplay
                loop={true}
                dots={false}
                width="100%"
                rewind={true}
            >
                {notes.map(({ note, imageUrl, title, linkNote }) => (
                    <Card sx={{ backgroundColor: "backgraunds.secondary", borderRadius: "0px", mx:"5px" }}>
                        <Box overflow="hidden">
                            <CardMedia
                                component="img"
                                height="300"
                                width="100%"
                                image={imageUrl}
                                alt="Belgrano"
                                sx={{
                                    transition: "all 0.3s",
                                    "&:hover": {
                                        transform: "scale(1.1)",
                                    }
                                }}
                            />
                        </Box>
                        <CardContent sx={{ height: "185px", position: "relative", pt: "30px" }}  >

                            <Box position="absolute" top={-28} right={30}>
                                <Fab color="primary" aria-label="add" href={linkNote} target='_blank'>
                                    <InsertLink />
                                </Fab>
                            </Box>

                            <Typography color="white"
                                sx={{
                                    overflow: "hidden",
                                    display: "-webkit-box",
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: "vertical",
                                }}
                            >
                                {title}.
                            </Typography>

                            <Divider sx={{ mt: 1, mb: 1 }} />

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
                                {note}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}

            </OwlCarousel>
        </>
    )
}
