import React from 'react';
import ProjectList from '../ProjectList';
import Spinner from '../Spinner'
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
                                <h2 className="text-center text-md-left">Portfolio</h2>
                            </div>
                        </div>
                        <div className="projects">
                            <ProjectList projects={this.state.mongoProjects}/>
                        </div>
                    </React.Fragment>
                :
                    <div className="wrapper">
                        <Spinner />
                    </div>
                }
            </div>
        )
    };
};

export default ProjectsGrid;