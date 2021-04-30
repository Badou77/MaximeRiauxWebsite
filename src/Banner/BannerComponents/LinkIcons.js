import "./linkIcons.css"

function LinkIcons() {
    return (
        <ul className="linkIcons">
            <li className="linkIcon">
                <div className={"linkIconContainer"}>
                    <a
                        href="https://www.linkedin.com/in/maxime-riaux-9116ab125/"
                        target="_blank" rel="nofollow noopener noreferrer"
                        className="linkIconLink">
                        <img alt="Icône Linkedin"
                             src={process.env.PUBLIC_URL + '/linkIcons/linkedinWhiteIcon.webp'}
                             className="linkIconImage"
                        />
                    </a>
                    <img alt="Icône Linkedin"
                         src={process.env.PUBLIC_URL + '/linkIcons/linkedinWhiteIcon.webp'}
                         className="linkIconImage reversedImage"
                    /></div>
            </li>

            <li className="linkIcon">
                <div className={"linkIconContainer"}>

                    <a
                        href="https://www.youtube.com/channel/UCFCcAEMumLD45kfb61iF56A"
                        target="_blank" rel="nofollow noopener noreferrer"
                        className="linkIconLink">
                        <img alt="Icône Youtube"
                             src={process.env.PUBLIC_URL + '/linkIcons/youtubeWhiteIcon.webp'}
                             className="linkIconImage"
                        />
                    </a>
                    <img alt="Icône Youtube"
                         src={process.env.PUBLIC_URL + '/linkIcons/youtubeWhiteIcon.webp'}
                         className="linkIconImage reversedImage"
                    />
                </div>
            </li>

            <li className="linkIcon">
                <div className={"linkIconContainer"}>

                    <a
                        href="https://shinen-music.bandcamp.com/releases"
                        target="_blank" rel="nofollow noopener noreferrer"
                        className="linkIconLink">
                        <img alt="Icône Bandcamp"
                             src={process.env.PUBLIC_URL + '/linkIcons/bandcampWhiteIcon.webp'}
                             className="linkIconImage"
                        />
                    </a>
                    <img alt="Icône Bandcamp"
                         src={process.env.PUBLIC_URL + '/linkIcons/bandcampWhiteIcon.webp'}
                         className="linkIconImage reversedImage"
                    />
                </div>
            </li>

            <li className="linkIcon">
                <div className={"linkIconContainer"}>

                    <a
                        href="https://soundcloud.com/user-838611739"
                        target="_blank" rel="nofollow noopener noreferrer"
                        className="linkIconLink">
                        <img alt="Icône Soundcloud"
                             src={process.env.PUBLIC_URL + '/linkIcons/soundCloudWhiteIcon.webp'}
                             className="linkIconImage"
                        />
                    </a>
                    <img alt="Icône Soundcloud"
                         src={process.env.PUBLIC_URL + '/linkIcons/soundCloudWhiteIcon.webp'}
                         className="linkIconImage reversedImage"
                    />
                </div>
            </li>
        </ul>
    );
}

export default LinkIcons;
