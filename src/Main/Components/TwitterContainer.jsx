import { Grid } from "@mui/material";
import { useState } from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { LoadingData } from "./LoadingData";

export const TwitterContainer = () => {

    const [loading, setLoading] = useState(true);

    return (
        <>
            <Grid item className="twitterContainer" style={{ marginTop: "10px", backgroundColor: "#1f2024", borderRadius: "5px" }} >
                <div className="twitter-embed">
                    <TwitterTimelineEmbed
                        sourceType="widget"
                        screenName="CABesportsok"
                        options={{
                            width: "100%",
                            height: "500px",
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
