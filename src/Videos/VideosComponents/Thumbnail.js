import './Thumbnail.css'
import {Card} from "react-bootstrap";
import React from "react";

const MAX_DESCRIPTION_LENGTH = 200;

class Thumbnail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "React",
        };
    }

    render() {
        const {description, title, image, videoId} = this.props;
        const handler = this.props.handler;
        const shortenedDescription = description.length > MAX_DESCRIPTION_LENGTH ? description.substring(0, MAX_DESCRIPTION_LENGTH) + " ... " : description;
        return (
            <Card as="a" onClick={() => handler(videoId)}>
                <img className="videoThumbnail" src={image.url} alt={title}/>
                <h5 className="videoText">{title}</h5>
                <p className="videoDescription videoText">{shortenedDescription}</p>
            </Card>
        );
    }
}

export default Thumbnail;