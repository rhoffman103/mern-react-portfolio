import React from 'react';
import './projectsGrid.css';

const ProjectsGrid = (props) => (
    <div className="container ptb-100" id="portfolio">
        <div className="wrapper">
            <div className="portfolio">
                <h2>Portfolio</h2>
            </div>
        </div>
            <div className="projects">
                {props.children}
            </div>
    </div>
)

export default ProjectsGrid;