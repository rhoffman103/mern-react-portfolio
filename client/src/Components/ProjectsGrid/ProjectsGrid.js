import React from 'react';
import ProjectList from '../ProjectList';
import MainJS from '../../utils/main';
import './projectsGrid.css';

class ProjectsGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mongoProjects: null
        }
    };

    componentDidMount() {
        MainJS.getProjects(this);
    };

    render() {
        return (
            <div className="container ptb-100" id="portfolio">
                {this.state.mongoProjects ?
                    <React.Fragment>
                        <div className="wrapper">
                            <div className="portfolio">
                                <h2>Portfolio</h2>
                            </div>
                        </div>
                        <div className="projects">
                            <ProjectList projects={this.state.mongoProjects}/>
                        </div>
                    </React.Fragment>
                :
                <div>something went wrong fetching projects</div>
                }
            </div>
        )
    };
};

export default ProjectsGrid;