import { useSelector } from "react-redux"

import { Grid } from "@mui/material"

import { NewItem, LoadingData } from "../Components";
import { TittleComponent } from "../../Ui/Components";

export const NewsContainer = () => {

    const { posts, isLoading } = useSelector(state => state.posts);

    return (
        <>
            <TittleComponent tittle={"ULTIMAS NOTICIAS"} />
            <Grid container spacing={2}>
                {
                    isLoading ? <LoadingData /> : posts.map(post => (<NewItem post={post} key={post.id} />))
                }
            </Grid>
        </>
    )
}