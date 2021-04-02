import SpecificSkill from "./SkillComponents/SpecificSkill";
import './Skills.css'


function Description() {
    const postProductionDescription = "Spots publicitaires, logos sonores, fictions, trailers, documentaires, films d'animation, livres et fictions audios..."
    const postProductionDescriptionList = [
        "Montage : dérushage, nettoyage, mise à niveau, pré-mix.",
        "Mixage : Equalisation, compression, reverb, mise aux normes de diffusion, EBU R128...",
        "Sound design/bruitages : Création, ou exploitation de fx sonores et d'ambiances, pour souligner ou habiller une scène, création de logo sonore..."]

    const priseDeSonDescription = "Documentaires, fictions cinéma, institutionnels, courts-métrages, reportages..."
    const priseDeSonDescriptionList = ["Tournage : Sélection des micros adaptés à chaque situation, en fonction de la valeur du plan et de l'environnement sonore."]

    const soundDesignDescription = "Jeux vidéos..."
    const soundDesignDescriptionList = ["Sound Design : Constitution d'une banque de sons personnalisée, en fonction de la charte musicale et univers de votre projet. Captations d'ambiances réelles, synthèse sonore...",
        "Intégration audio : Au moyen de logiciels type Wwise, Fmod..."]

    const materielDescription = ["Périphériques & moniteurs : Scarlett 2i2, Yamaha HS7, DT 770 Pro, iCon Platform M+.",
        "Softwares : Avid Pro Tools 12, Logic Pro X, Audiokinetic Wwise, FMOD.",
        "Plugins : iZotope, Fab Filter, Valhalla.",
        "Microphones & enregistreurs : Zoom H6, Rode NTG3, Neumann Km184 mt."]

    return (
        <section id="skillsWrapper" className="fpage">
            <h2 id="descriptionTitle">Compétences</h2>

            <SpecificSkill iconURL={process.env.PUBLIC_URL + '/linkIcons/soundCloudWhiteIcon.webp'}
                           title="Post-Production"
                           description={postProductionDescription}
                           descriptionList={postProductionDescriptionList}/>

            <SpecificSkill iconURL={process.env.PUBLIC_URL + '/linkIcons/soundCloudWhiteIcon.webp'}
                           title="Prise de son"
                           description={priseDeSonDescription}
                           descriptionList={priseDeSonDescriptionList}/>
            <SpecificSkill iconURL={process.env.PUBLIC_URL + '/linkIcons/soundCloudWhiteIcon.webp'}
                           title="Sound-Design"
                           description={soundDesignDescription}
                           descriptionList={soundDesignDescriptionList}/>

            <SpecificSkill iconURL={process.env.PUBLIC_URL + '/linkIcons/soundCloudWhiteIcon.webp'}
                           title="Matériel"
                           descriptionList={materielDescription}/>

        </section>
    );
}

export default Description;
