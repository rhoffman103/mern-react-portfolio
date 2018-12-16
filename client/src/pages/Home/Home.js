import React, { Component } from 'react';
import Nav from '../../Components/Nav';
import Intro from '../../Components/intro';
import AboutMe from '../../Components/About';
import ProjectsGrid from '../../Components/ProjectsGrid';
import ProjectList from '../../Components/ProjectList';
import Footer from '../../Components/Footer';
// import projectsArray from '../../projects.json';
import MainJS from '../../utils/main';
import API from '../../utils/API';

import '../../App.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mongoProjects: null
        }
    }

    componentDidMount() {
        // this.postProject();
        MainJS.getProjects(this);
    }

    postProject = () => {
        const project = {
            "pathName": "pu-revu",
            "title": "Pu Revu",
            "image": "pu-revu.PNG",
            "imageSlides": ["purevu-home.PNG", "purevu-write.PNG", "purevu-find.PNG", "purevu-read.PNG", "purevu-media.PNG"],
            "preview": "Google Firebase webapp for desktop and mobile.",
            "about": "PuRevu is a location based public restroom rating webapp. This app was built in week 8 of the UNH coding bootcamp with a team of 4. It uses firebase to store user ratings, comments and locations for quick retrieval by zip code. There are also cors supported api's that call for 'dad jokes, weather and New York Times articles' for user entertainment.",
            "tags": ["firebase", "jquery", "API", "materialize css"],
            "allTechnologies":["firebase", "materialize css", "jquery", "cors API"],
            "applicationType": "full-stack",
            "repoUrl": "https://github.com/rhoffman103/PuRevu",
            "deployedUrl": "https://rhoffman103.github.io/PuRevu/"
        }
        API.postProject(project).then(res => {
            console.log(res);
        })
    }

    render() {
        return (
            <React.Fragment>
                <Intro 
                    smoothScroll={MainJS.scrollToSection}
                />
                <Nav 
                    smoothScroll={MainJS.scrollToSection}
                />
                <AboutMe />
                <ProjectsGrid>
                    {this.state.mongoProjects ?
                    <ProjectList
                        projects={this.state.mongoProjects}
                    />
                    :
                    <div>something went wrong fetching projects</div>
                    }

                </ProjectsGrid>
                <Footer />
            </React.Fragment>
        )
    }
}

export default Home;