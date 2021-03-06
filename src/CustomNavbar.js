import {Nav, Navbar} from "react-bootstrap";
import "./CustomNavbar.css"

function CustomNavbar() {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top" className="color-nav">
            <Navbar.Brand href="#banner" className={"websiteName"}>Maxime Riaux</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="m-auto">
                    <Nav.Link href="#description">A Propos</Nav.Link>
                    <Nav.Link href="#competences">Compétences</Nav.Link>
                    <Nav.Link href="#sound-records">Réalisations</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default CustomNavbar