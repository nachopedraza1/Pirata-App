import { useState } from "react";
import { Timeline } from 'react-twitter-widgets'

import { Grid } from "@mui/material";

import { LoadingData } from "./LoadingData";
import { TittleComponent } from "../../Ui/Components";

export const TwitterContainer = () => {

    const [loading, setLoading] = useState(true);

    return (
        <>
            <TittleComponent tittle={"TWEETS"} />
            <Grid item mb={2} sx={{ backgroundColor: "backgraunds.secondary" }}>
                <Timeline
                    dataSource={{
                        sourceType: 'profile',
                        screenName: 'CABesportsok',
                    }}
                    options={{
                        width: "100%",
                        height: "520px",
                        tweetLimit: 5,
                        chrome: "noheader, nofooter,noborders,transparent,noscrollbar",
                        theme: "dark"
                    }}
                    onLoad={() => setLoading(false)}
                />
                {loading && <LoadingData />}
            </Grid>
        </>
    )
}
