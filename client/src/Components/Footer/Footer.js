import React from 'react';
import './footer.css';

const Footer = () => (
    <div className="footer">
        <p className="calus-platinum-text">Bobby Hoffman</p>
        <div className="icons">
            <ul className="icon-list justify-content-center">
                <li>
                    <a href="https://github.com/rhoffman103" rel="noopener noreferrer" target="_blank">
                        <i className="fab fa-github-square fa-2x calus-platinum-text"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/robert-hoffman13/" rel="noopener noreferrer" target="_blank">
                        <i className="fab fa-linkedin fa-2x calus-platinum-text"></i>
                    </a>
                </li>
                <li>
                    <a href="mailto:rhoffman103@gmail.com?Subject=Web%20Inquiry" target="_top">
                        <i className="fa fa-envelope fa-2x calus-platinum-text" aria-hidden="true"></i>
                    </a>
                </li>
            </ul>
        </div>
    </div>
)

export default Footer;