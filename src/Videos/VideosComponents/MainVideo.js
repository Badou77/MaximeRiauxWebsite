import './Thumbnail.css'

function MainVideo({videoId, title}) {
    const url = "https://www.youtube.com/embed/" + videoId

    return (
        <div className="embed-responsive embed-responsive-16by9">
            <iframe
                src={url}
                title={title}
                allowFullScreen
                className="video"
            />
        </div>
    );
}

export default MainVideo;