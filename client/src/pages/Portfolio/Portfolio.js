import React, { Component } from 'react';
import projectList from '../../projects.json';
import Nav from '../../Components/Nav';
import Carousel from '../../Components/ImageCarousel/Caroussel';
import AboutProject from '../../Components/portfolioPageComponents/AboutProject';
import Technologies from '../../Components/portfolioPageComponents/Technologies';
import Recources from '../../Components/portfolioPageComponents/Recources';
import Footer from '../../Components/Footer';
import NoMatch from "../../pages/NoMatch";
import Arrow from '../../Components/ImageCarousel/Arrow';
import MainJS from '../../utils/main';
import API from '../../utils/API';

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project: "",
            projectList,
            mongoProjects: null,
            currentProject: null,
            noMatch: false,
            currentProjectIndex: 0
        }
        this.nextProject = this.nextProject.bind(this);
        this.previousProject = this.previousProject.bind(this);
    }

    componentDidMount() {
        this.findProjectMatch();
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
                        
                        this.setState({
                            mongoProjects: mongoProjects,
                            currentProject: element,
                            currentProjectIndex: index,
                            previousProjectIndex: prevIndex,
                            nextProjectIndex: nextIndex
                        })
                    }
                    else {
                        this.setState({
                            noMatch: true
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
        
        const style = {
            maxWidth: 60 + "%"
        }

        return (
            <div  className="calus-platinum-tint-bg">
                {this.state.currentProject ?
                    <React.Fragment>
                        <Nav />
                        <div className="container" style={style}>
                            <Arrow
                                direction="left"
                                clickFunction={this.previousProject}
                                glyph="&#9664;"
                                arrowPosition="fixed-arrow"
                                projectName={this.state.mongoProjects[this.state.previousProjectIndex].title}
                            />
                            <h1>{this.state.currentProject.title}</h1>
                            <p>{this.state.currentProject.preview}</p>
                            <Carousel 
                                currentProject={this.state.currentProject}
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
                            <Arrow
                                direction="right"
                                clickFunction={this.nextProject}
                                glyph="&#9654;"
                                arrowPosition="fixed-arrow"
                                projectName={this.state.mongoProjects[this.state.nextProjectIndex].title}
                            />
                        </div>
                        <Footer />
                    </React.Fragment>
                    :
                    <div className="container">
                        <NoMatch />
                    </div>
                }
            </div>
        )
    }
}

export default Portfolio;