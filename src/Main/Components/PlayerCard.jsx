import { Link } from "@mui/material"

export const PlayerCard = ({ player }) => {

    const { instagram, twitter, twitch, youtube } = player;

    const socialLinks = [
        { url: twitter, icon: "fab fa-twitter", plataform: "twitter" },
        { url: youtube, icon: "fab fa-youtube", plataform: "youtube" },
        { url: twitch, icon: "fab fa-twitch", plataform: "twitch" },
        { url: instagram, icon: "fab fa-instagram", plataform: "instagram" }
    ];

    return (
        <div className="memb__team-item" key={player.id}>
            <img className=" lazyloaded" src="assets\images\GenericPlayer.jpg" data-src="https://cdn.shopify.com/s/files/1/0548/8554/8183/files/2022-10-27-Pro-Player_Apex_ChaoticMuch.jpg?v=1667906406" alt="Chaotic" />
            <div className="memb__team-det">
                <a href="/blogs/team-member/chaotic" className="teammate-profile"></a>
                <div className="teammate-info">
                    <h3 className="name"> {player.player} </h3>
                    <span className="status">
                        <span>{player.rol}</span>
                    </span>
                    <span className="age-loc">
                        {player.age}
                    </span>
                    <span className="age-loc">
                        {player.country + ", " + player.city}
                    </span>
                </div>
                <div className="teammate-links">
                    <nav className="teammate-links-nav">
                        {
                            socialLinks.map(link => {
                                if (link.url === "") {
                                    return;
                                } else {
                                    return (
                                        <Link className="follow__link" href={link.url} title={`${player.player} en ${link.plataform}`} target="_blank">
                                            <i className={link.icon}></i>
                                        </Link>
                                    );
                                }
                            })
                        }
                    </nav>
                </div>
            </div>
        </div>
    )
}
