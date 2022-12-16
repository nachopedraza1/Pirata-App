import { useState } from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

import { Grid } from "@mui/material";

import { LoadingData } from "./LoadingData";
import { TittleComponent } from "./TittleComponent";

export const TwitterContainer = () => {

    const [loading, setLoading] = useState(true);


    return (
        <>
            <TittleComponent tittle={"TWEETS"} />
            <Grid item className="twitterContainer" mb={2} sx={{ backgroundColor: "backgraunds.secondary" }}>
                <div className="twitter-embed">
                    <TwitterTimelineEmbed
                        sourceType="widget"
                        screenName="CABesportsok"
                        options={{
                            width: "100%",
                            height: "520px",
                        }}
                        theme="dark"
                        noHeader="false"
                        noFooter="false"
                        noBorders="true"
                        transparent="true"
                        noScrollbar="true"
                        onLoad={() => setLoading(false)}
                        tweetLimit={5}
                    >
                    </TwitterTimelineEmbed>
                    {loading && <LoadingData />}
                </div>
            </Grid>
        </>
    )
}
