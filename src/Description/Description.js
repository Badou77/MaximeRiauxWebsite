import './Description.css';

function Description() {
    return (
        <section id="description" className="fpage">
            <h2 className="sectionTitle">Obtenez l'illustration et finition sonore pour votre projet</h2>

            <div className="container">
                <div className="imageCol">
                    <img
                        alt="Maxime Riaux"
                        src={process.env.PUBLIC_URL + '/maximeProfilePicture.webp'}
                        className="profilePic"
                    />
                </div>

                <div className="textCol">
                    <div>
                        <h3>Bienvenue !</h3>
                        <br/>
                        <p>
                            Technicien Son diplômé basé à Rennes, j'ai étudié à l'ESRA Bretagne de 2015 à
                            2018 et suis depuis technicien son et compositeur freelance.
                            <br/><br/>
                            Passionné, je travaille le son
                            sous toutes ses formes et maîtrise l’ensemble de la chaîne de production : prise de son,
                            montage, mixage et sound design.
                            <br/><br/>
                            A travers ce site, je vous invite à découvrir mes réalisations, professionnelles comme
                            personnelles, à l'image des compétences que je vous propose pour l'audiovisuel.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Description;
