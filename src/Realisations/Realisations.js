import './Realisations.css'


function Realisations() {
    return (
        <section id="realisations" className="fpage">
            <h2 className="sectionTitle title-realisations">Réalisations</h2>

            <div className="centeredPlayer spotifyPlayer">
                <iframe src="https://open.spotify.com/embed?uri=spotify%3Aalbum%3A6anco38F02hxrTtXuU63cW"
                        width="300"
                        height="380" frameBorder="0"
                        allowTransparency="true" allow="encrypted-media"
                        title="Spotify player shin'en"/>
            </div>
        </section>
    );
}

export default Realisations;
