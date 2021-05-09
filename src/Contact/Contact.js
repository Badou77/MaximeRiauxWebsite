import './Contact.css'
import React from "react";

class Contact extends React.Component {
    render() {
        return (
            <section id="contact" className="fpage">
                <h2 className="sectionTitle">Contact</h2>

                <div className="emailWrapper">
                    <a href="mailto:maxime.riaux77@laposte.net" className={"emailAdress"}>
                        <h2 className={"neon"}>maxime.riaux77@laposte.net</h2>
                    </a>
                </div>
            </section>
        );
    }
}

export default Contact;
