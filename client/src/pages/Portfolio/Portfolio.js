import React, { Component } from 'react';
import Nav from '../../Components/Nav';
import Spinner from '../../Components/Spinner';
import CarouselSlider from '../../Components/CarouselSlider/SlickSlider';
import AboutProject from '../../Components/portfolioPageComponents/AboutProject';
import Technologies from '../../Components/portfolioPageComponents/Technologies';
import Recources from '../../Components/portfolioPageComponents/Recources';
import Footer from '../../Components/Footer';
import NoMatch from "../../pages/NoMatch";
import ProjectArrows from '../../Components/portfolioPageComponents/ProjectArrows';
import API from '../../utils/API';
import './portfolio.css';
import '../../breakpoints.css';
import ReactGA from 'react-ga';

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project: "",
            mongoProjects: null,
            currentProject: null,
            imgUrls: null,
            noMatch: false,
            currentProjectIndex: 0,
            loading: true,
        }
        this.nextProject = this.nextProject.bind(this);
        this.previousProject = this.previousProject.bind(this);
    }

    componentDidMount() {
        this.findProjectMatch();
    }

    initializeReactGA(pathName) {
        ReactGA.initialize('UA-131375937-1');
        ReactGA.pageview(`/portfolio/${pathName}`);
    }

    findProjectMatch = () => {
        API.getProjectsList().then(res => {
            if (res.data.length > 0) {
                const mongoProjects = res.data;
                // let whitespaceRegex = /\s/gi;
                let currentProjectPathname = window.location.pathname.split("/").pop();
                mongoProjects.forEach((element, index) => {
                    // element.title.toLowerCase().replace(whitespaceRegex, '-')
                    if ( currentProjectPathname === element.pathName) {
                        const lastIndex = mongoProjects.length -1;
                        const shouldResetIndexPrev = index === 0;
                        const shouldResetIndexNext = index === lastIndex;
                        const prevIndex = shouldResetIndexPrev ? lastIndex : index - 1;
                        const nextIndex = shouldResetIndexNext ? 0 : index + 1;
                        
                        this.initializeReactGA(element.pathName);
                        this.setState({
                            mongoProjects: mongoProjects,
                            currentProject: element,
                            imgUrls: element.imageSlides,
                            currentProjectIndex: index,
                            previousProjectIndex: prevIndex,
                            nextProjectIndex: nextIndex,
                            loading: false
                        })
                    }
                    else {
                        this.setState({
                            noMatch: true,
                            loading: false
                        })
                    }
                })
            }
        })
    }

    previousProject = () => {
        window.location.href = `/portfolio/${this.state.mongoProjects[this.state.previousProjectIndex].pathName}`;
    }

    nextProject = () => {
        window.location.href = `/portfolio/${this.state.mongoProjects[this.state.nextProjectIndex].pathName}`;
    }

    render() {

        return (
            <div  className="calus-platinum-tint-bg">
                {this.state.loading ?
                    <React.Fragment>
                        <Nav />
                        <div className="container spacer">
                            <Spinner />
                        </div>
                        <Footer />
                    </React.Fragment>
                :
                (this.state.currentProject ?
                    <React.Fragment>
                        <Nav />
                        <div className="container restricted-width">
                            <h1 className="mt-1">{this.state.currentProject.title}</h1>
                            <p>{this.state.currentProject.preview}</p>
                            <CarouselSlider
                                items={this.state.imgUrls}
                            />
                            <AboutProject
                                about={this.state.currentProject.about}
                            />
                            <Technologies
                                technologies={this.state.currentProject.allTechnologies}
                            />
                            <Recources
                                deployed={this.state.currentProject.deployedUrl}
                                repo={this.state.currentProject.repoUrl}
                            />
                            <hr></hr>
                            <ProjectArrows 
                                previousProject={this.previousProject}
                                nextProject={this.nextProject}
                                viewNextProject={this.state.mongoProjects[this.state.nextProjectIndex].title}
                                viewPreviousProject={this.state.mongoProjects[this.state.previousProjectIndex].title}
                            />
                        </div>
                        <Footer />
                    </React.Fragment>
                    :
                    <div className="container">
                        <NoMatch />
                    </div>)
                }
            </div>
        )
    }
}

export default Portfolio;