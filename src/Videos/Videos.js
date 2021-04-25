import './Videos.css'
import Thumbnail from "./VideosComponents/Thumbnail";
import React from 'react';
import MainVideo from "./VideosComponents/MainVideo";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const apiKey = 'AIzaSyDxT5JhhqAkp_RTd3VcHlWcw8kFuRGdpfY';
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: {max: 4000, min: 3000},
        items: 5
    },
    desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 3
    },
    tablet: {
        breakpoint: {max: 1024, min: 800},
        items: 2
    },
    mobile: {
        breakpoint: {max: 800, min: 0},
        items: 1
    }
};


class Videos extends React.Component {
    constructor(props) {
        super(props)

        this.handler = this.handler.bind(this)
        this.getMainVideo = this.getMainVideo.bind(this)
    }

    state = {
        videosFromPlaylist: [],
        mainVideo: {}
    }

    getMainVideo() {
        const clickedVideo = this.state.videosFromPlaylist.filter(video => video.id === this.state.mainVideo);

        if (clickedVideo && clickedVideo[0]) {
            return (<MainVideo key="MainVideo"
                               videoId={clickedVideo[0].id}
                               description={clickedVideo[0].description}
                               title={clickedVideo[0].title}/>);
        }
    }

    handler(videoId) {
        this.setState({mainVideo: videoId});
    }

    componentDidMount() {
        fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=25&playlistId=PLOwYczp-8vSeDRjvQtI4HlVgaXjsR1MZk&key=' + apiKey,
            {headers: {'Accept': 'application/json'}})
            .then(response => response.json())
            .then(data => data.items.map(o => {
                return {
                    id: o.contentDetails.videoId,
                    description: o.snippet.description,
                    title: o.snippet.title,
                    image: o.snippet.thumbnails.maxres
                }
            }))
            .then(videos => {
                this.setState({videosFromPlaylist: videos});
                this.setState({mainVideo: videos[0].id});
            });
    }

    render() {
        return (
            <section id="videos" className="fpage">
                <div className="ecommerce-video-gallery" data-mdb-zoom-effect="true" data-mdb-auto-height="true">
                    <div className="row py-3 shadow-5 justify-content-center">
                        <div className="col-12 mb-1">
                            {this.getMainVideo()}
                        </div>
                    </div>
                    <Carousel responsive={responsive} className="video-list">
                        {this.state.videosFromPlaylist.map(video => (
                            <div
                                className="fill-available"
                                data-ripple-color="light"
                            >
                                <Thumbnail key={video.id}
                                           videoId={video.id}
                                           description={video.description}
                                           title={video.title}
                                           image={video.image}
                                           handler={this.handler}/>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </section>
        );
    }
}

export default Videos;
