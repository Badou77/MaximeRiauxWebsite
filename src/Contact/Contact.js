import './Contact.css'
import React from "react";

class Contact extends React.Component {
    render() {
        return (
            <section id="contact" className="fpage">
                <h2 className="sectionTitle">Contact</h2>

                <div className="emailWrapper">
                    <a href="mailto:badmaskleterrible@gmail.com" className={"emailAdress"}>
                        <h2 className={"neon"}>badmaskleterrible@gmail.com</h2>
                    </a>
                </div>
            </section>
        );
    }
}

export default Contact;
