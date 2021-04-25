import './Banner.css';
import LinkIcons from './BannerComponents/LinkIcons';

function Banner() {
    return (
        <section id="banner" className="fpage" style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + '/backgroundForest.jpg'})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: "center"
        }}>
            <div className="bannerText topSection">
                <h1 id="bannerTitle">Maxime Riaux</h1>
                <span id="bannerText">Montage, Mixage, Design sonore, Prise de son</span>
            </div>

            <div className="lowerSection">
                <a className="linkButton" href={"#contact"}>Me Contacter</a>
                <LinkIcons/>
            </div>
        </section>
    );
}

export default Banner;
