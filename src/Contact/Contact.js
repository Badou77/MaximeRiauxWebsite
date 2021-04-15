import './Contact.css'
import React from "react";

class Contact extends React.Component {
    render() {
        return (
            <section id="contact" className="fpage">
                <h2 className="sectionTitle">Contact</h2>

                <div className="formWrapper">
                    <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                        <div className="form-group">
                            <label htmlFor="name">Nom complet</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Adresse mail</label>
                            <input type="email" className="form-control" aria-describedby="emailHelp"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea className="form-control" rows="5"/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </section>
        );
    }


    handleSubmit(event) {
    }
}

export default Contact;
