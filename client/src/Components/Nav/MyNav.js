import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import MainJS from '../../utils/main';
import './nav.css';

const MyNav = ({ homePage }) => (
    <header className="sticky-top">
        <Navbar className="calus-purple-bg nav-border-gold navbar-dark" expand="md">
            <div className="container pl-0 pr-0">
                <Link to='/' className='navbar-brand'>Bobby Hoffman</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="">
                        <div className="d-inline-flex justify-content-center">
                            { homePage
                            ?
                                <React.Fragment>
                                    <Nav.Link href="#about" className="pl-2 pr-2 pt-0 pb-0" onClick={MainJS.scrollToSection} data-scroll-to="about-me">About</Nav.Link>
                                    <Nav.Link href="#portfolio" className="pl-2 pr-2 pt-0 pb-0" onClick={MainJS.scrollToSection} data-scroll-to="portfolio">Portfolio</Nav.Link>
                                </React.Fragment>
                            :
                                <React.Fragment>
                                    <Link to="/" className="nav-link pl-2 pr-2 pt-0 pb-0">Home</Link>
                                </React.Fragment>
                            }
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    </header>
)

export default MyNav;