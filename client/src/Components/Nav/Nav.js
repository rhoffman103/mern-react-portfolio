import React from 'react';
// import { Navbar, NavItem } from 'react-materialize';
import './nav.css';

const Nav = (props) => (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top calus-purple-bg nav-border-gold">
        <div className="container">
                <span className="navbar-brand calus-nav-text ml-20" href="/">Bobby Hoffman</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link calus-nav-text" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link calus-nav-text" href="#about" onClick={props.smoothScroll} data-scroll-to="about-me">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link calus-nav-text" href="#Portfolio" onClick={props.smoothScroll} data-scroll-to="portfolio">Portfolio</a>
                        </li>
                    </ul>
                </div>
        </div>
        
    </nav>
)

export default Nav;