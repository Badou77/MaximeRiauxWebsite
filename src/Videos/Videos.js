import './Videos.css'
import Video from "./VideosComponents/Video";
import React from 'react';

const apiKey = 'AIzaSyDxT5JhhqAkp_RTd3VcHlWcw8kFuRGdpfY';

class Videos extends React.Component {
    state = {
        videosFromPlaylist: []
    }

    componentDidMount() {
        fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=25&playlistId=PLOwYczp-8vSeDRjvQtI4HlVgaXjsR1MZk&key=' + apiKey,
            {headers: {'Accept': 'application/json'}})
            .then(response => response.json())
            .then(data => data.items.map(o => {
                console.log(o);
                return {id: o.contentDetails.videoId, description: o.snippet.description, title: o.snippet.title}
            }))
            .then(videos => this.setState({videosFromPlaylist: videos}));
    }

    render() {
        return (
            <section id="videos" className="fpage">
                <div className="row video-list">
                    {this.state.videosFromPlaylist.map(video => (
                        <div className="col-lg-2 mb-4 mb-lg-0">
                            <div
                                className="bg-image hover-overlay ripple shadow-1-strong rounded"
                                data-ripple-color="light"
                            >
                                <Video key={video.id}
                                       videoId={video.id}
                                       description={video.description}
                                       title={video.title}/>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        );
    }
}

export default Videos;
