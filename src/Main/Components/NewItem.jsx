import { Favorite, ModeComment } from "@mui/icons-material"
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Divider, Grid, Typography } from "@mui/material"

export const NewItem = ({ post }) => {

    return (
        <Grid item xs={12} sm={6}>
            <Card sx={{ backgroundColor: "#292c31" }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="350"
                        crossOrigin="anonymous"
                        image={`https://cors-anywhere.herokuapp.com/${post.display_url}`}
                        alt="Belgrano"
                    />
                    <CardContent sx={{ height: "100px" }}>
                        <Typography
                            variant="body2"
                            color="#7f7e8c"
                            sx={{
                                width: "100 %",
                                overflow: "hidden",
                                display: "-webkit-box",
                                WebkitLineClamp: 4,
                                WebkitBoxOrient: "vertical",
                            }}
                        >
                            {post.text}
                        </Typography>
                    </CardContent>
                    <Divider sx={{ mt: 2 }} />
                    <Box display="flex" justifyContent="end" padding={1}>
                        <Button
                            component="span"
                            startIcon={<Favorite />}
                        >
                            {post.likes}
                        </Button>
                        <Button
                            component="span"
                            startIcon={<ModeComment />}
                        >
                            {post.comments}
                        </Button>
                    </Box>
                </CardActionArea>
            </Card>
        </Grid>
    )
}
