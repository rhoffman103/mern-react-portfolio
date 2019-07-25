import React from 'react';
import FilterKeywords from './FilterKeywords';
import ProjectsGrid from './ProjectsGrid';

const Projects = () => (
    <div className="container ptb-100" id="portfolio">
        <div className="portfolio">
            <h2 className="text-center text-md-left">Portfolio</h2>
            <hr />
        </div>
        <FilterKeywords />
        <ProjectsGrid />
    </div>
);


export default Projects;