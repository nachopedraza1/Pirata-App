import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { providerPosts } from "../../Redux/Api/providerPosts"
import { onLoadPosts } from "../../Redux/Thunks/thunks"

export const HomePage = () => {

    const dispatch = useDispatch();

    const { posts } = useSelector(state => state.posts)

    useEffect(() => {
        dispatch(onLoadPosts())
    }, [])

    return (
        <div>
            {
                posts.map(post => (
                    <Card sx={{ maxWidth: 345 }} key={post.text}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="280"
                                crossOrigin="anonymous"
                                image={post.display_url}
                                alt="Belgrano"

                            />
                            <CardContent sx={{ height: "150px" }}>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{
                                        width: "100 %",
                                        overflow: "hidden",
                                        display: "-webkit-box",
                                        WebkitLineClamp: 6,
                                        WebkitBoxOrient: "vertical",
                                    }}

                                >
                                    {post.text}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))
            }
        </div >
    )
}
