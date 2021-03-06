import React, { Component } from 'react';
import Intro from '../../Components/intro';
import AboutMe from '../../Components/About';
import Projects from '../../Components/Projects';
import Footer from '../../Components/Footer';
import ReactGA from 'react-ga';
import MyNav from '../../Components/Nav/MyNav';

class Home extends Component {

    componentDidMount() {
        this.initializeReactGA();
    };

    initializeReactGA() {
        ReactGA.initialize('UA-131375937-1');
        ReactGA.pageview('/');
    };

    render() {
        return (
            <React.Fragment>
                <Intro />
                <MyNav homePage={true} />
                <AboutMe />
                <Projects />
                <Footer />
            </React.Fragment>
        )
    };
};

export default Home;