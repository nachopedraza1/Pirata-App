import "../../Theme/scss/socialButtons.scss";

import { Link, List, ListItem } from "@mui/material";

export const SocialButtons = () => {
    return (
        <List className="social-list" sx={{ display: "flex", flexDirection: "row", padding: "15px" }}>
            <ListItem><Link href="https://twitter.com/CABesportsok" target="_blank"><i className="fab fa-twitter" aria-hidden="true"></i></Link></ListItem>
            <ListItem><Link href="https://www.youtube.com/playlist?list=PLQqbH6zMsNGoR5kURc-TZX25HkaiEvx5o" target="_blank"><i className="fab fa-youtube" aria-hidden="true"></i></Link></ListItem>
            <ListItem><Link href="https://www.twitch.tv/cabesportsok" target="_blank"><i className="fab fa-twitch" aria-hidden="true"></i></Link></ListItem>
            <ListItem><Link href="https://www.instagram.com/belgrano_esports/" target="_blank"><i className="fab fa-instagram" aria-hidden="true"></i></Link></ListItem>
        </List>
    )
}
