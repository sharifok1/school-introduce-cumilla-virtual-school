import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from "./bannar.jpg"
import './Header.css';

const Header = () => {
    return (
        <div>
            <div >
                <img className="bannar" src={img} alt="" />
                <h2 className="schoolName">Cumilla Virtual School</h2>
            </div>
            <Navbar className="nav-style" expand="lg">
            <Container fluid>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: 'auto' }}
                    navbarScroll
                >
                    <Link to = "/"><button className="btn-style">Home</button></Link>
                    <Link to = "/Services"><button className="btn-style">Services</button></Link>
                    <Link to = "/Teachers"><button className="btn-style">Teachers</button></Link>
                    <Link to = "/About"><button className="btn-style">About</button></Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            <footer className="footer pt-1">
                <p>Copyright © 2021 cumillavirtualSchool.com </p>
            </footer>
        </div>
    );
};

export default Header;