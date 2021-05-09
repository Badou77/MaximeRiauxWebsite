import './Videos.css'

import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import VideoCarousel from "./VideoCarousel/VideoCarousel";


class Videos extends React.Component {
    render() {
        return (
            <section id="videos" className="fpage">
                <VideoCarousel
                    playlistId={"PLOwYczp-8vSeuzqBPqkAbZPE0Se1MB7fZ"}/>

                <VideoCarousel
                    playlistId={"PLOwYczp-8vSeDRjvQtI4HlVgaXjsR1MZk"}
                    videoIds={["bmxNS0FURxQ"]}/>
            </section>
        );
    }

}

export default Videos;
