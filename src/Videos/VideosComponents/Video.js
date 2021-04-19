import './Video.css'
import {Card} from "react-bootstrap";

function Video({videoId, description, title}) {
    const url = "https://www.youtube.com/embed/" + videoId
    const MAX_DESCRIPTION_LENGTH = 200;
    const shortenedDescription = description.length > MAX_DESCRIPTION_LENGTH ? description.substring(0, MAX_DESCRIPTION_LENGTH) + " ... " : description;

    return (
        <Card>
            <div className="embed-responsive embed-responsive-16by9">
                <iframe
                    src={url}
                    title={title}
                    allowFullScreen
                    className="video"
                />
            </div>
            <h5 className="videoText">{title}</h5>
            <p className="videoDescription videoText">{shortenedDescription}</p>
        </Card>
    );
}

export default Video;