import React, { useReducer, useEffect, useContext } from 'react';
import ProjectsContext from '../../Context/ProjectsContext';
import ProjectsReducer, { FILTER_PROJECTS } from '../../Reducers/ProjectsReducer';
import FilterKeywords from './FilterKeywords';
import ProjectsGrid from './ProjectsGrid';

const Projects = () => {

    
    const { mongoProjects } = useContext(ProjectsContext);

    const [filteredProjects, projectsDispatch] = useReducer(ProjectsReducer, []);

    useEffect(() => {
        projectsDispatch({
            type: FILTER_PROJECTS,
            mongoProjects,
            filterKeyword: null
        });
    }, [mongoProjects]);

    return (
        <ProjectsContext.Provider value={{ mongoProjects, projects: filteredProjects, projectsDispatch }}>
            <div className="container ptb-100" id="portfolio">
                <div className="portfolio">
                    <h2 className="text-center text-md-left">Portfolio</h2>
                    <hr />
                </div>
                <FilterKeywords />
                <ProjectsGrid />
            </div>
        </ProjectsContext.Provider>
    );
};

export default Projects;