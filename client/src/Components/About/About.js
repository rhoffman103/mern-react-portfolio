import React from 'react';
import Skills from '../Skills';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Icon from '../Icon';
import './about.css';

const About = () => (
    <section className="calus-platinum-tint-bg ptb-100" id="about-me">
        <Container>
            <div className="wrapper">
                <div className="about-me">
                    <h2>About</h2>
                    <hr />

                    <Row>
                        <Col xs={12} md={6}>
                            <div className="">
                                <p>As a life long tinkerer, I've never been too shy to get my hands dirty. This same trait applies to coding. I'll dig in and see the project through.</p>
                                <p>Check out my latest projects below.</p>
                            </div>
                            <div className="icons">
                                <ul className="icon-list justify-content-center">
                                    <li>
                                        <Icon
                                            hRef='https://github.com/rhoffman103'
                                            icon='fab fa-github-square'
                                            size='fa-3x'
                                            color='calus-purple-text'
                                        />
                                    </li>
                                    <li>
                                        <Icon
                                            hRef='https://www.linkedin.com/in/robert-hoffman13/'
                                            icon='fab fa-linkedin' size='fa-3x'
                                            color='calus-purple-text'
                                        />
                                    </li>
                                    <li>
                                        <Icon
                                            hRef="mailto:rhoffman103@gmail.com?Subject=Web%20Inquiry"
                                            icon='fa fa-envelope'
                                            size='fa-3x'
                                            color='calus-purple-text'
                                            newTarget='_top'
                                        />
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <Skills />
                        </Col>
                    </Row>
                </div>
            </div>
        </Container>
    </section>
)

export default About;