import './Banner.css';
import LinkIcons from './BannerComponents/LinkIcons';

function Banner() {
    return (
        <section id="banner" className="fpage" style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + '/bannerMontagnesManWalking.jpg'})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: "center"
        }}>
            <div className="bannerText topSection">
                <h1 id="bannerTitle">Maxime Riaux</h1>
                <span>Montage, Mixage, Design sonore, Prise de son</span>
            </div>

            <div className="lowerSection">
                <a className="linkButton" href="https://www.google.com">Me Contacter</a>
                <LinkIcons/>
            </div>
        </section>
    );
}

export default Banner;
