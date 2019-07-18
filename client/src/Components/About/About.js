import React from 'react';
import Skills from '../Skills';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InfoIconList from '../InfoIconList';
import './about.css';

const About = () => (
    <section className="calus-platinum-tint-bg ptb-100" id="about-me">
        <Container>
            <div className="wrapper">
                <div className="about-me">
                    <h2 className=" text-center text-md-left" >About</h2>
                    <hr />

                    <Row>
                        <Col xs={12} md={6}>
                            <div className="">
                                <p>As a life long tinkerer, I've never been too shy to get my hands dirty. This same trait applies to coding. I'll dig in and see the project through.</p>
                                <p>Check out my latest projects below.</p>
                            </div>
                            <InfoIconList iconSize='fa-3x' color='calus-purple-text' />
                        </Col>
                        <Col xs={12} md={6}>
                            <Skills />
                        </Col>
                    </Row>
                </div>
            </div>
        </Container>
    </section>
);

export default About;