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
                                    allow="encrypted-media"
                                    title="Spotify player shin'en"/>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4 mb-lg-0">

                        <ImageWithSound
                            imageSource={process.env.PUBLIC_URL + '/ambiances_son/MontagnesVosges.jpg'}
                            audioSource={process.env.PUBLIC_URL + `/ambiances_son/MontagnesVosges.wav`}
                            soundSource={""}/>

                        <ImageWithSound
                            imageSource={process.env.PUBLIC_URL + '/ambiances_son/BordDeMerStQuay.jpg'}
                            audioSource={process.env.PUBLIC_URL + `/ambiances_son/BorddemerStQuay.wav`}
                            soundSource={""}
                        />
                    </div>

                    <div className="col-lg-4 mb-4 mb-lg-0">
                        <ImageWithSound
                            imageSource={process.env.PUBLIC_URL + '/ambiances_son/StQuayJetee.jpg'}
                            audioSource={process.env.PUBLIC_URL + `/ambiances_son/SurlajeteeStQuay.wav`}
                            soundSource={""}
                        />

                        <ImageWithSound
                            imageSource={process.env.PUBLIC_URL + '/ambiances_son/RiviereVosges.jpg'}
                            audioSource={process.env.PUBLIC_URL + `/ambiances_son/RiviereVosges.wav`}
                            soundSource={""}
                        />
                    </div>
                </div>
            </section>
        );
    }
}

export default SoundRecords;
