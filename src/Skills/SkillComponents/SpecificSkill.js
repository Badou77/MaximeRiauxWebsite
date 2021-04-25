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
                src={iconURL}
                className="skillImage"/>
        </div>

        <div className="skillDescription">
            <h2 className="skillTitle">{title}</h2>
            <hr align="center"/>
            <p>
                <strong>
                    {description}
                </strong>
                <br/><br/>
                {list}
            </p>
        </div>
    </div>;
}

export default Description;
