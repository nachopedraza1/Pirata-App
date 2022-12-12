import "../../Theme/scss/socialMedia.scss";

import { Link } from "react-router-dom";

import { List, ListItem } from "@mui/material";


export const SocialButtons = () => {
    return (
        <List className="social-list" sx={{ display: "flex", flexDirection: "row", padding: "15px" }}>
            <ListItem><Link to=""><i className="fab fa-facebook-f" aria-hidden="true"></i></Link></ListItem>
            <ListItem><Link to=""><i className="fab fa-twitter" aria-hidden="true"></i></Link></ListItem>
            <ListItem><Link to=""><i className="fab fa-youtube" aria-hidden="true"></i></Link></ListItem>
            <ListItem><Link to=""><i className="fab fa-twitch" aria-hidden="true"></i></Link></ListItem>
            <ListItem><Link to=""><i className="fab fa-instagram" aria-hidden="true"></i></Link></ListItem>
        </List>
    )
}
