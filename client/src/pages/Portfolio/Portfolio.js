import React, { Component } from 'react';
// import projectList from '../../projects.json';
import Nav from '../../Components/Nav';
import Spinner from '../../Components/Spinner';
import Carousel from '../../Components/ImageCarousel/Caroussel';
import AboutProject from '../../Components/portfolioPageComponents/AboutProject';
import Technologies from '../../Components/portfolioPageComponents/Technologies';
import Recources from '../../Components/portfolioPageComponents/Recources';
import Footer from '../../Components/Footer';
import NoMatch from "../../pages/NoMatch";
import ProjectArrows from '../../Components/portfolioPageComponents/ProjectArrows';
import API from '../../utils/API';
import '../../breakpoints.css';

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project: "",
            // projectList,
            mongoProjects: null,
            currentProject: null,
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
                            <hr></hr>
                            <ProjectArrows 
                                previousProject={this.previousProject}
                                nextProject={this.nextProject}
                                viewNextProject={this.state.mongoProjects[this.state.previousProjectIndex].title}
                                viewPreviousProject={this.state.mongoProjects[this.state.nextProjectIndex].title}
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