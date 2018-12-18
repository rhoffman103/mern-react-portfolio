import React from 'react';
import './about.css';

const About = (props) => (
    <div className="calus-platinum-tint-bg ptb-100" id="about-me">
        <div className="container">
            <div className="wrapper">
                <div className="about-me">
                    <h2>About</h2>
                    <hr />

                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <div className="">
                                <p>As a life long tinkerer, I've never been too shy to get my hands dirty. This same trait applies to coding. I'll dig in and see the project through.</p>
                                <p>Check out my latest projects below.</p>
                            </div>
                            <div className="icons">
                                <ul className="icon-list justify-content-center">
                                    <li>
                                        <a href="https://github.com/rhoffman103" rel="noopener noreferrer" target="_blank">
                                            <i className="fab fa-github-square fa-3x calus-purple-text"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/robert-hoffman13/" rel="noopener noreferrer" target="_blank">
                                            <i className="fab fa-linkedin fa-3x calus-purple-text"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto:rhoffman103@gmail.com?Subject=Web%20Inquiry" target="_top">
                                            <i className="fa fa-envelope fa-3x calus-purple-text" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            
                            { props.children }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default About;