import React, { Component } from 'react';
import Intro from '../../Components/intro';
import AboutMe from '../../Components/About';
import Skills from '../../Components/Skills';
import ProjectsGrid from '../../Components/ProjectsGrid';
import Footer from '../../Components/Footer';
import MainJS from '../../utils/main';
import ReactGA from 'react-ga';
import MyNav from '../../Components/Nav/MyNav';

import '../../App.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mongoProjects: null
        }
    }

    componentDidMount() {
        this.initializeReactGA();
        MainJS.getProjects(this);
    }

    initializeReactGA() {
        ReactGA.initialize('UA-131375937-1');
        ReactGA.pageview('/');
    }

    render() {
        return (
            <React.Fragment>
                <Intro smoothScroll={MainJS.scrollToSection} />
                <MyNav homePage={true} />
                <AboutMe>
                    <Skills />
                </AboutMe>
                <ProjectsGrid projects={this.state.mongoProjects} />
                <Footer />
            </React.Fragment>
        )
    }
}

export default Home;