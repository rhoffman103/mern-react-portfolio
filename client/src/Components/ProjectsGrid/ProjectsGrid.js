import React from 'react';
import ProjectList from '../ProjectList';
import './projectsGrid.css';

const ProjectsGrid = ({ projects }) => (
    <div className="container ptb-100" id="portfolio">
        {projects ?
            <React.Fragment>
                <div className="wrapper">
                    <div className="portfolio">
                        <h2>Portfolio</h2>
                    </div>
                </div>
                <div className="projects">
                    <ProjectList projects={projects}/>
                </div>
            </React.Fragment>
        :
        <div>something went wrong fetching projects</div>
        }
    </div>
)

export default ProjectsGrid;