import './Banner.css';
import LinkIcons from './BannerComponents/LinkIcons';

function Banner() {
    return (
        <section id="banner" className="fpage">
            <div>
                <h1>Maxime Riaux</h1>
                <span>Montage, Mixage, Design sonore, Prise de son</span>
            </div>

            <div>
                <a className="linkButton" href="https://www.google.com">Me Contacter</a>
            </div>

            <LinkIcons/>
        </section>
    );
}

export default Banner;
