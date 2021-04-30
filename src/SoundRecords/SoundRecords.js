import './SoundRecords.css'
import React from 'react';
import ImageWithSound from "./SoundRecordsComponents/ImageWithSound";


class SoundRecords extends React.Component {
    render() {
        return (
            <section id="sound-records" className="fpage">
                <h2 className="sectionTitle title-realisations">Réalisations</h2>

                <div className="row imagesGallery">
                    <div className="col-lg-4 mb-4 mb-lg-0">
                        <div className="centeredPlayer spotifyPlayer">
                            <iframe src="https://open.spotify.com/embed?uri=spotify%3Aalbum%3A6anco38F02hxrTtXuU63cW"
                                    width="300"
                                    height="380" frameBorder="0"
                                    allowTransparency="true" allow="encrypted-media"
                                    title="Spotify player shin'en"/>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4 mb-lg-0">

                        <ImageWithSound
                            imageSource={"https://mdbootstrap.com/img/Photos/Vertical/mountain2.jpg"}
                            audioSource={`http://localhost:3000/ambiances_son/MontagnesVosges.wav`}
                            soundSource={""}/>

                        <ImageWithSound
                            imageSource="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg"
                            audioSource={`http://localhost:3000/ambiances_son/BorddemerStQuay.wav`}
                            soundSource={""}
                        />
                    </div>

                    <div className="col-lg-4 mb-4 mb-lg-0">
                        <ImageWithSound
                            imageSource="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
                            audioSource={`http://localhost:3000/ambiances_son/SurlajeteeStQuay.wav`}
                            soundSource={""}
                        />

                        <ImageWithSound
                            imageSource="https://mdbootstrap.com/img/Photos/Vertical/mountain3.jpg"
                            audioSource={`http://localhost:3000/ambiances_son/RiviereVosges.wav`}
                            soundSource={""}
                        />
                    </div>
                </div>
            </section>
        );
    }
}

export default SoundRecords;
