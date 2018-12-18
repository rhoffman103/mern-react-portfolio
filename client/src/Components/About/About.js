import React from 'react';
import './about.css';

const About = (props) => (
    <div className="calus-platinum-tint-bg ptb-100" id="about-me">
        <div className="container">
            <div className="wrapper">
                <div className="about-me">
                    <h2>About Me</h2>
                    <hr />

                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <div className="">
                                <p>Im Bobby</p>
                                <p>Short ribs hamburger chuck shank chicken. Prosciutto shankle strip steak leberkas cupim andouille sausage frankfurter jowl short loin. Shankle buffalo landjaeger strip steak brisket, cupim jerky. Tail chicken fatback prosciutto spare ribs. Buffalo fatback swine, turkey tri-tip jowl sausage brisket ham.</p>
                                <p>Spare ribs cow short ribs sausage corned beef capicola chuck ham. Burgdoggen boudin ham cow chuck chicken bresaola capicola pancetta sausage strip steak pork chop tenderloin alcatra kielbasa. Beef drumstick strip steak leberkas short loin, corned beef ball tip hamburger rump sirloin jerky pastrami bacon burgdoggen. Ham corned beef buffalo landjaeger doner picanha cow andouille pancetta sirloin tenderloin hamburger.</p>
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