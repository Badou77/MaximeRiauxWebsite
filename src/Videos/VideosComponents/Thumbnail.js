import './Thumbnail.css'
import {Card} from "react-bootstrap";

function Thumbnail({description, title, image}) {
    const MAX_DESCRIPTION_LENGTH = 200;
    const shortenedDescription = description.length > MAX_DESCRIPTION_LENGTH ? description.substring(0, MAX_DESCRIPTION_LENGTH) + " ... " : description;
    return (
        <Card>
            <img className="videoThumbnail" src={image.url} alt={title}/>

            <h5 className="videoText">{title}</h5>
            <p className="videoDescription videoText">{shortenedDescription}</p>
        </Card>
    );
}

export default Thumbnail;