
export const PlayerCard = ({ player }) => {
    return (
        <div className="memb__team-item" key={player.id}>
            <img className=" lazyloaded" src="https://cdn.shopify.com/s/files/1/0548/8554/8183/files/2022-10-27-Pro-Player_Apex_ChaoticMuch.jpg?v=1667906406" data-src="https://cdn.shopify.com/s/files/1/0548/8554/8183/files/2022-10-27-Pro-Player_Apex_ChaoticMuch.jpg?v=1667906406" alt="Chaotic" />
            <div className="memb__team-det">
                <a href="/blogs/team-member/chaotic" className="teammate-profile"></a>
                <div className="teammate-info">
                    <h3 className="name"> {player.player} </h3>
                    <span className="status">
                        <span>Player</span>
                    </span>
                    <span className="age-loc">
                        United Kingdom
                    </span>
                </div>
                <div className="teammate-links">
                    <nav className="teammate-links-nav">
                        <a className=" follow__link" href="https://twitter.com/ChaoticMuch" title="Chaotic on Twitter" target="_blank">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a className=" follow__link" href="https://www.youtube.com/channel/UCgjXO8vYQO1_A-9diNrIsAQ" title="Chaotic on YouTube" target="_blank">
                            <i className="fab fa-youtube"></i>
                        </a>
                        <a className=" follow__link" href="https://www.twitch.tv/ChaoticMuch" title="Chaotic on Twitch" target="_blank">
                            <i className="fab fa-twitch"></i>
                        </a>
                        <a className=" follow__link" href="https://www.tiktok.com/@chaoticmuch_?lang=en" title="Chaotic on Tiktok" target="_blank">
                            <i className="fab fa-tiktok"></i>
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    )
}
