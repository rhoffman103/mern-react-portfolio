import React from 'react';
import './about.css';

const About = (props) => (
    <div className="calus-platinum-tint-bg">
        <div className="container">
            <div className="wrapper my-container spacer" id="about-me">
                <div className="row">
                    <div className="col-md-8 about-me" id="about-me">
                        <h2>About Me</h2>
                        <hr />

                        <div className="row">
                            <div className="col">

                                <img className="bio-image float-md-left img-fluid mr-3" src="https://baconmockup.com/500/360/" alt="Portrait" />
                                
                                <div className="aboutme">
                                    <p>Im Bobby</p>
                                    <p>Short ribs hamburger chuck shank chicken. Prosciutto shankle strip steak leberkas cupim andouille sausage frankfurter jowl short loin. Shankle buffalo landjaeger strip steak brisket, cupim jerky. Tail chicken fatback prosciutto spare ribs. Buffalo fatback swine, turkey tri-tip jowl sausage brisket ham.</p>
                                    <p>Spare ribs cow short ribs sausage corned beef capicola chuck ham. Burgdoggen boudin ham cow chuck chicken bresaola capicola pancetta sausage strip steak pork chop tenderloin alcatra kielbasa. Beef drumstick strip steak leberkas short loin, corned beef ball tip hamburger rump sirloin jerky pastrami bacon burgdoggen. Ham corned beef buffalo landjaeger doner picanha cow andouille pancetta sirloin tenderloin hamburger.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default About;