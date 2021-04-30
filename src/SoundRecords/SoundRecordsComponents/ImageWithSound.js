import React from "react";
import './ImageWithSound.css';

class SoundRecords extends React.Component {
    state = {
        play: false
    }

    imageSource = this.props.imageSource;
    audioSource = this.props.audioSource;

    audio = new Audio(this.audioSource);

    togglePlay = () => {
        this.setState({play: !this.state.play}, () => {
            this.state.play ? this.audio.play() : this.audio.pause();
        });
    }

    componentDidMount() {
        // this.audio.autoplay = true;
        this.audio.crossOrigin = 'anonymous';
        this.audio.preload = 'metadata';
        this.audio.addEventListener('ended', () => this.setState({play: false}));
    }

    componentWillUnmount() {
        this.audio.removeEventListener('ended', () => this.setState({play: false}));
    }

    render() {

        return (<div className={"audioImageContainer"}>

                <img
                    src={this.imageSource}
                    className="w-100 shadow-1-strong rounded mb-4"
                    alt=""
                />
                <button className={"playButton " + (this.state.play ? "playing" : "paused")}
                        onClick={() => this.togglePlay()}>{this.state.play ? 'Pause' : 'Play'}</button>
            </div>
        );
    }
}

export default SoundRecords