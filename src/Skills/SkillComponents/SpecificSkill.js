import './SpecificSkill.css'

function Description({iconURL, title, description, descriptionList}) {
    let list;

    if (descriptionList) {
        list = <ul>
            {
                descriptionList.map((item) => {
                        return <li>{item}</li>
                    }
                )
            }
        </ul>
    }

    return <div id="specificSkill" className="fpage">
        <div className="skillIconWrapper">
            <img
                alt="Compétence"
                src={iconURL}/>
        </div>

        <div className="skillDescription">
            <h3>{title}</h3>
            <p>
                {description}
                {list}
            </p>
        </div>
    </div>;
}

export default Description;
