import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from "./bannar.jpg";
import logo from "../../favicon.jpg"
import './Header.css';
const Header = () => {
    return (
        // -----------------------header, banner,logo
        // ------------------------------------------------------
        <div>
            <div >
                <img className="bannar" src={img} alt="" />
                <h2 className="schoolName">Cumilla Virtual School</h2>
                <h4 className="slogan">In the hope of winning the competition world</h4>
                <img className="logo-img" src={logo} alt="" />
                
                 <marquee><h5>
                    The online admission process for Class VI,VII,VII (session 2021–2022) will begin on January 1. “The online admission activities for class XI (session 2021-2022) will start from January 1 and continue until February 30,” said a notification from the Ministry of Education.</h5></marquee> 
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
                     {/*------router button------------------------------
                    ---------------------------------------------------// */}
                    <Link to = "/"><button className="btn-style">Home</button></Link>
                    <Link to = "/Services"><button className="btn-style">Services</button></Link>
                    <Link to = "/Teachers"><button className="btn-style">Teachers</button></Link>
                    <Link to = "/About"><button className="btn-style">About</button></Link>
                    <Link to = "/addmission"><button className="btn-style">Addmission</button></Link>
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